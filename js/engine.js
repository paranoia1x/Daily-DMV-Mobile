/* DMV Practice engine: pure logic, no DOM. Used by the app and by tools/validate.js.
   Answers are always stored as ORIGINAL choice indexes (the index in question.choices),
   so shuffling the display order can never break the answer mapping. */
(function (root) {
  'use strict';
  const STORAGE_KEY = 'caDmvPractice.v1';
  const MAX_HISTORY = 150;
  const APP_STUDY_TARGET = 85; // app's own study goal, NOT an official DMV passing score

  function defaultSettings() { return { theme: 'light', textSize: 'medium', reducedMotion: false, dailyGoal: 20 }; }
  function defaultState() {
    return { version: 1, settings: defaultSettings(), attempts: [], qstats: {}, mistakes: {}, bookmarks: {}, history: [], active: null, handbookMarks: { hl: [], notes: [] }, cards: {} };
  }

  // ---------- randomness ----------
  function makeRng(seed) { // mulberry32; deterministic when a seed is given (used in tests)
    if (seed === undefined) return Math.random;
    let a = seed >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, rng = Math.random) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  // Picture-label questions ("Car A", "Lane B") keep their order so the on-screen letters match the picture.
  function choiceOrder(question, rng = Math.random) { const idx = question.choices.map((_, i) => i); return question.fixedOrder ? idx : shuffle(idx, rng); }

  // ---------- math ----------
  function accuracy(correct, answered) { return answered > 0 ? Math.round((correct / answered) * 100) : null; }
  function accuracyText(correct, answered) { const a = accuracy(correct, answered); return a === null ? '—' : a + '%'; }

  // ---------- sessions ----------
  let idCounter = 0;
  function newId() { idCounter++; return 's' + Date.now().toString(36) + idCounter.toString(36) + Math.floor(Math.random() * 1e6).toString(36); }

  function createSession(opts) {
    const rng = opts.rng || Math.random;
    const orders = {};
    for (const q of opts.questions) orders[q.id] = choiceOrder(q, rng);
    return {
      id: newId(), mode: opts.mode, label: opts.label, isExam: !!opts.isExam, isRetry: !!opts.isRetry,
      qids: opts.questions.map(q => q.id), orders, index: 0, selections: {}, answers: {},
      startedAt: opts.now || Date.now(), finishedAt: null
    };
  }

  function select(session, qid, origIdx) {
    if (session.finishedAt) return false;
    if (!session.isExam && session.answers[qid]) return false; // locked after submit
    session.selections[qid] = origIdx;
    return true;
  }

  function recordAttempt(state, q, correct, session, now) {
    state.attempts.push({ q: q.id, c: correct, t: now, m: session.mode, s: session.id, r: session.isRetry });
    const st = state.qstats[q.id] || (state.qstats[q.id] = { n: 0, ok: 0, last: null, first: now });
    st.n++; if (correct) st.ok++; st.last = correct; st.lastAt = now;
    if (session.isRetry) {
      const m = state.mistakes[q.id];
      if (m) {
        m.retries.push({ t: now, c: correct });
        const r = m.retries;
        m.resolved = r.length >= 2 && r[r.length - 1].c && r[r.length - 2].c;
      }
    } else if (!correct) {
      const m = state.mistakes[q.id];
      if (m) { m.misses++; m.lastMiss = now; m.resolved = false; }
      else state.mistakes[q.id] = { since: now, lastMiss: now, misses: 1, retries: [], resolved: false };
    }
  }

  // Practice modes: grade immediately. Returns null if nothing selected or already answered.
  function submit(state, session, q, now = Date.now()) {
    if (session.isExam || session.finishedAt) return null;
    if (session.answers[q.id]) return null; // repeated clicks cannot count twice
    const sel = session.selections[q.id];
    if (sel === undefined || sel === null) return null;
    const correct = q.choices[sel] && q.choices[sel].correct === true;
    session.answers[q.id] = { choice: sel, correct, t: now };
    recordAttempt(state, q, correct, session, now);
    return session.answers[q.id];
  }

  // Practice exam: grade everything once, at the end.
  function finishExam(state, session, bankMap, now = Date.now()) {
    if (!session.isExam || session.finishedAt) return false;
    for (const qid of session.qids) {
      const q = bankMap[qid];
      const sel = session.selections[qid];
      const answered = sel !== undefined && sel !== null;
      const correct = answered && q.choices[sel].correct === true;
      session.answers[qid] = { choice: answered ? sel : null, correct, t: now, skipped: !answered };
      if (answered) recordAttempt(state, q, correct, session, now);
      else if (!state.mistakes[qid]) state.mistakes[qid] = { since: now, lastMiss: now, misses: 1, retries: [], resolved: false };
    }
    session.finishedAt = now;
    return true;
  }

  function feedbackVisible(session, qid) {
    return session.isExam ? !!session.finishedAt : !!session.answers[qid];
  }

  function sessionStats(session) {
    const total = session.qids.length;
    let correct = 0, incorrect = 0, answered = 0;
    if (!session.isExam || session.finishedAt) {
      for (const qid of session.qids) {
        const a = session.answers[qid];
        if (!a || a.skipped) continue;
        answered++; a.correct ? correct++ : incorrect++;
      }
    } else {
      for (const qid of session.qids) if (session.selections[qid] !== undefined) answered++;
    }
    return { total, correct, incorrect, answered, remaining: total - answered, accuracy: accuracy(correct, answered), accuracyText: accuracyText(correct, answered) };
  }

  function archiveSession(state, session, now = Date.now()) {
    if (!session.finishedAt) session.finishedAt = now;
    const st = sessionStats(session);
    const rec = {
      id: session.id, mode: session.mode, label: session.label, lk: session.lk, isExam: session.isExam, isRetry: session.isRetry,
      startedAt: session.startedAt, finishedAt: session.finishedAt, qids: session.qids, orders: session.orders,
      answers: session.answers, selections: session.selections,
      total: st.total, answered: st.answered, correct: st.correct, incorrect: st.incorrect,
      complete: st.answered === st.total
    };
    if (st.answered > 0 || session.isExam) {
      state.history.unshift(rec);
      if (state.history.length > MAX_HISTORY) state.history.length = MAX_HISTORY;
    }
    if (state.active && state.active.id === session.id) state.active = null;
    return rec;
  }

  // ---------- lifetime statistics (kept separate from session scores) ----------
  function lifetime(state) {
    let correct = 0, retries = 0, retryCorrect = 0;
    for (const a of state.attempts) { if (a.c) correct++; if (a.r) { retries++; if (a.c) retryCorrect++; } }
    const n = state.attempts.length;
    const uniq = Object.keys(state.qstats);
    return {
      attempts: n, correct, incorrect: n - correct, accuracy: accuracy(correct, n), accuracyText: accuracyText(correct, n),
      retries, retryCorrect,
      uniqueAttempted: uniq.length,
      uniqueLatestCorrect: uniq.filter(k => state.qstats[k].last === true).length,
      uniqueEverCorrect: uniq.filter(k => state.qstats[k].ok > 0).length
    };
  }
  function topicStats(state, bankMap, topics) {
    const out = {};
    for (const t of topics) out[t.key] = { key: t.key, name: t.name, attempts: 0, correct: 0, bank: 0, seen: 0 };
    for (const q of Object.values(bankMap)) if (out[q.topic]) { out[q.topic].bank++; if (state.qstats[q.id]) out[q.topic].seen++; }
    for (const a of state.attempts) { const q = bankMap[a.q]; if (!q || !out[q.topic]) continue; out[q.topic].attempts++; if (a.c) out[q.topic].correct++; }
    for (const k in out) { out[k].accuracy = accuracy(out[k].correct, out[k].attempts); }
    return Object.values(out);
  }
  function weakestTopics(state, bankMap, topics, minAttempts = 3, n = 3) {
    return topicStats(state, bankMap, topics).filter(t => t.attempts >= minAttempts && t.accuracy < 100)
      .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts).slice(0, n);
  }
  function activeMistakes(state, bankMap) {
    return Object.keys(state.mistakes).filter(id => bankMap[id] && !state.mistakes[id].resolved);
  }

  // ---------- question selection ----------
  // Personalized mix: missed questions and weak topics are more likely, but every topic stays possible.
  function pickWeighted(state, pool, count, bankMap, topics, rng = Math.random) {
    const weak = {};
    for (const t of topicStats(state, bankMap, topics)) if (t.attempts >= 3 && t.accuracy < 75) weak[t.key] = true;
    const items = pool.map(q => {
      let w = 1;
      const st = state.qstats[q.id];
      const m = state.mistakes[q.id];
      if (!st) w += 1;
      if (st && st.last === false) w += 2;
      if (m && !m.resolved) w += 3;
      if (weak[q.topic]) w *= 1.5;
      return { q, w };
    });
    const out = [];
    while (out.length < count && items.length) {
      let total = 0; for (const it of items) total += it.w;
      let r = rng() * total, i = 0;
      for (; i < items.length - 1; i++) { r -= items[i].w; if (r <= 0) break; }
      out.push(items[i].q); items.splice(i, 1);
    }
    return out;
  }
  function buildExam(bank, count, rng = Math.random) { // spread across topics
    const byTopic = {};
    for (const q of shuffle(bank, rng)) (byTopic[q.topic] || (byTopic[q.topic] = [])).push(q);
    const keys = shuffle(Object.keys(byTopic), rng);
    const out = [];
    while (out.length < count && keys.some(k => byTopic[k].length)) {
      for (const k of keys) { if (out.length >= count) break; const q = byTopic[k].pop(); if (q) out.push(q); }
    }
    return shuffle(out, rng);
  }

  function toggleBookmark(state, qid) {
    if (state.bookmarks[qid]) delete state.bookmarks[qid]; else state.bookmarks[qid] = Date.now();
    return !!state.bookmarks[qid];
  }
  function resetProgress(state) { // keeps appearance settings and handbook highlights/notes
    const s = defaultState(); s.settings = Object.assign(defaultSettings(), state.settings); if (state.handbookMarks) s.handbookMarks = state.handbookMarks; return s; // flashcard boxes are progress, so they are cleared
  }

  // ---------- study streak, daily goal, readiness ----------
  function dayKey(ts) { const d = new Date(ts); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function activity(state, now = Date.now()) { // answers per local day, today's count and the current streak of days in a row
    const days = {};
    for (const a of state.attempts) { const k = dayKey(a.t); days[k] = (days[k] || 0) + 1; }
    for (const id in (state.cards || {})) for (const t of (state.cards[id].log || [])) { const k = dayKey(t); days[k] = (days[k] || 0) + 1; }
    const today = days[dayKey(now)] || 0;
    let streak = 0; const d = new Date(now); d.setHours(12, 0, 0, 0);
    if (!today) d.setDate(d.getDate() - 1); // today not started yet: the streak can still continue
    while (days[dayKey(d.getTime())]) { streak++; d.setDate(d.getDate() - 1); }
    return { days, today, streak };
  }
  function readiness(state, bankMap, recentN = 50) { // mastered = last answer correct; recent = accuracy of the latest answers
    const ids = Object.keys(bankMap);
    const mastered = ids.filter(id => state.qstats[id] && state.qstats[id].last === true).length;
    const recent = state.attempts.filter(a => bankMap[a.q]).slice(-recentN);
    const rc = recent.filter(a => a.c).length;
    return { mastered, total: ids.length, masteredPct: ids.length ? Math.round(mastered / ids.length * 100) : 0,
      recentN: recent.length, recentPct: accuracy(rc, recent.length) };
  }
  // ---------- flashcards (Leitner boxes 1-5; a box sets how many days until the card comes back) ----------
  const BOX_DAYS = [0, 0, 1, 3, 7, 16];
  function gradeCard(state, qid, knew, now = Date.now()) {
    if (!state.cards) state.cards = {};
    const c = state.cards[qid] || (state.cards[qid] = { b: 1, due: now, log: [] });
    c.b = knew ? Math.min(5, c.b + 1) : 1;
    c.due = now + BOX_DAYS[c.b] * 86400000 + (knew ? 0 : 60000);
    c.log = (c.log || []).concat(now).slice(-20);
    return c;
  }
  function dueCards(state, ids, now = Date.now()) { // never-seen cards and cards that are due, most overdue first
    const cards = state.cards || {};
    const seen = ids.filter(id => cards[id] && cards[id].due <= now).sort((a, b) => cards[a].due - cards[b].due);
    const fresh = ids.filter(id => !cards[id]);
    return { due: seen, fresh, learned: ids.filter(id => cards[id] && cards[id].b >= 4).length };
  }

  // ---------- export / import ----------
  function exportData(state, now = Date.now()) {
    return JSON.stringify({ app: 'ca-dmv-practice', exportVersion: 1, exportedAt: new Date(now).toISOString(), data: state }, null, 1);
  }
  function importData(text) {
    let obj;
    try { obj = JSON.parse(text); } catch (e) { return { ok: false, error: 'This file is not a valid progress backup (it could not be read as JSON).' }; }
    if (!obj || obj.app !== 'ca-dmv-practice' || !obj.data) return { ok: false, error: 'This file is not a progress backup from this app.' };
    const d = obj.data;
    const okShape = d && Array.isArray(d.attempts) && typeof d.qstats === 'object' && typeof d.mistakes === 'object' && typeof d.bookmarks === 'object' && Array.isArray(d.history);
    if (!okShape) return { ok: false, error: 'The backup file is missing some progress information, so it was not imported.' };
    return { ok: true, state: normalize(d) };
  }
  function normalize(d) {
    const s = defaultState();
    for (const k of Object.keys(s)) if (d[k] !== undefined && d[k] !== null) s[k] = d[k];
    if (d.active === null || d.active === undefined) s.active = null;
    s.settings = Object.assign(defaultSettings(), d.settings || {});
    return s;
  }
  function load(storage) {
    try {
      const raw = storage.getItem(STORAGE_KEY);
      if (!raw) return { state: defaultState(), ok: true };
      return { state: normalize(JSON.parse(raw)), ok: true };
    } catch (e) { return { state: defaultState(), ok: false, error: e }; }
  }
  function save(storage, state) {
    try { storage.setItem(STORAGE_KEY, JSON.stringify(state)); return true; } catch (e) { return false; }
  }

  const api = {
    STORAGE_KEY, APP_STUDY_TARGET, defaultState, makeRng, shuffle, choiceOrder, accuracy, accuracyText,
    createSession, select, submit, finishExam, feedbackVisible, sessionStats, archiveSession,
    lifetime, topicStats, weakestTopics, activeMistakes, pickWeighted, buildExam, toggleBookmark, resetProgress,
    exportData, importData, load, save, normalize, dayKey, activity, readiness, gradeCard, dueCards
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.DMVEngine = api;
})(typeof window !== 'undefined' ? window : globalThis);
