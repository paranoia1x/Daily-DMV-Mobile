// Validates the question bank and tests the scoring engine.  Run:  node tools/validate.js
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const APP = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(APP, 'index.html'), 'utf8');
const dataFiles = [...html.matchAll(/<script src="(data\/[^"]+)"/g)].map(m => m[1]);
const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
for (const f of dataFiles) vm.runInContext(fs.readFileSync(path.join(APP, f), 'utf8').replace(/^Q\(/gm, 'window.Q('), ctx, { filename: f });
const W = ctx.window;
const BANK = W.DMV_QUESTIONS, TOPICS = W.DMV_TOPICS, SRC = W.DMV_SOURCES;
const E = require(path.join(APP, 'js', 'engine.js'));
let errors = 0, warnings = 0;
const err = m => { errors++; console.log('  ERROR: ' + m); };
const warn = m => { warnings++; console.log('  warn:  ' + m); };
const section = t => console.log('\n== ' + t);

section('Question data');
const topicKeys = new Set(TOPICS.map(t => t.key));
const ids = new Set();
const GENERIC = /^(correct|incorrect|wrong|that is (in)?correct|no|yes)[.!]?$/i;
for (const q of BANK) {
  const where = q.id || '(no id)';
  if (!q.id) err('question without id: ' + q.question);
  if (ids.has(q.id)) err('duplicate id ' + q.id); ids.add(q.id);
  if (!topicKeys.has(q.topic)) err(where + ' has unknown topic ' + q.topic);
  if (!['easy', 'medium', 'hard'].includes(q.difficulty)) err(where + ' has bad difficulty');
  if (!q.question || q.question.length < 10) err(where + ' question text missing/short');
  if (!q.source || !q.source.url || !SRC[q.source.key]) err(where + ' missing/unknown source');
  if (!q.source.section) err(where + ' missing handbook section');
  if (q.choices.length < 3 || q.choices.length > 4) err(where + ' must have 3 or 4 choices (has ' + q.choices.length + ')');
  const nCorrect = q.choices.filter(c => c.correct === true).length;
  if (nCorrect !== 1) err(where + ' has ' + nCorrect + ' correct answers');
  const texts = new Set();
  const expls = new Set();
  q.choices.forEach((c, i) => {
    if (!c.text || !c.text.trim()) err(where + ' choice ' + i + ' has no text');
    const t = c.text.trim().toLowerCase(); if (texts.has(t)) err(where + ' duplicate choice text'); texts.add(t);
    if (/all of the above|none of the above|both a and b/i.test(c.text)) err(where + ' uses position-dependent wording: ' + c.text);
    const ex = (c.explain || '').trim();
    if (ex.length < 30 || GENERIC.test(ex)) err(where + ' choice "' + c.text + '" has no meaningful explanation (' + ex.length + ' chars)');
    if (expls.has(ex)) err(where + ' two choices share the same explanation'); expls.add(ex);
    if (c.correct && !/^correct\b/i.test(ex)) warn(where + ' correct-choice explanation does not start with "Correct"');
    if (!c.correct && /^correct\b/i.test(ex)) err(where + ' wrong choice explanation starts with "Correct"');
  });
  if (q.image) {
    const p = path.join(APP, q.image);
    if (!fs.existsSync(p)) err(where + ' image missing: ' + q.image);
    else if (!/^<svg[\s\S]*<\/svg>\s*$/.test(fs.readFileSync(p, 'utf8'))) err(where + ' image is not a complete SVG: ' + q.image);
    if (!q.imageAlt || q.imageAlt.length < 15) err(where + ' image without a useful description');
    const corr = q.choices.find(c => c.correct).text.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    if (corr.length > 12 && q.imageAlt.toLowerCase().includes(corr)) err(where + ' image description reveals the answer');
  }
}
console.log(`  ${BANK.length} questions checked`);

section('Duplicate / near-duplicate question text');
const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(w => w.length > 2);
const tri = s => { const w = norm(s); const set = new Set(); for (let i = 0; i < w.length - 1; i++) set.add(w[i] + ' ' + w[i + 1]); return set; };
const sets = BANK.map(q => ({ q, s: tri(q.question + ' ' + q.choices.find(c => c.correct).text) }));
let near = 0;
for (let i = 0; i < sets.length; i++) for (let j = i + 1; j < sets.length; j++) {
  const a = sets[i], b = sets[j];
  if (a.q.question === b.q.question && a.q.image === b.q.image) { err(`exact duplicate: ${a.q.id} / ${b.q.id}`); continue; }
  let inter = 0; for (const x of a.s) if (b.s.has(x)) inter++;
  const jac = inter / (a.s.size + b.s.size - inter || 1);
  if (jac > 0.6) {
    if (a.q.image !== b.q.image || a.q.choices.find(c => c.correct).text !== b.q.choices.find(c => c.correct).text) { near++; if (jac > 0.75) warn(`similar wording (different picture or answer, kept): ${a.q.id} / ${b.q.id} (${jac.toFixed(2)})`); }
    else err(`near-duplicate: ${a.q.id} / ${b.q.id} (${jac.toFixed(2)})`);
  }
}
console.log(`  ${near} similar pairs reviewed (allowed because picture or answer differs)`);

section('Answer position and length balance');
const pos = [0, 0, 0, 0]; let longest = 0;
for (const q of BANK) {
  const ci = q.choices.findIndex(c => c.correct); pos[ci]++;
  const lens = q.choices.map(c => c.text.length); const max = Math.max(...lens);
  if (q.choices[ci].text.length === max && lens.filter(l => l === max).length === 1) longest++;
}
console.log(`  authored correct positions A/B/C/D: ${pos.join(' / ')} (choices are also shuffled on screen every session)`);
const longPct = Math.round(longest / BANK.length * 100);
console.log(`  correct answer is the single longest choice in ${longPct}% of questions`);
if (longPct > 55) warn('correct answer is the longest choice too often');

section('Counts');
const visual = BANK.filter(q => q.image).length;
const signsQ = BANK.filter(q => q.topic === 'signs' || (q.image || '').startsWith('img/signs/')).length;
console.log(`  total ${BANK.length}, with pictures ${visual}, sign-mode questions ${signsQ}, trouble-spot ${BANK.filter(q => q.tags.includes('trouble')).length}`);
for (const t of TOPICS) console.log(`    ${t.key.padEnd(11)} ${BANK.filter(q => q.topic === t.key).length}`);
if (BANK.length < 250) err('fewer than 250 questions');
if (visual < 50) err('fewer than 50 picture questions');
const used = new Set(BANK.filter(q => q.image).map(q => q.image));
for (const dir of ['signs', 'signals', 'diagrams']) for (const f of fs.readdirSync(path.join(APP, 'img', dir))) if (!used.has(`img/${dir}/${f}`)) console.log(`    (unused image: img/${dir}/${f})`);

section('Shuffle keeps answers and explanations attached');
const rng = E.makeRng(12345);
let shuffles = 0;
for (const q of BANK) for (let k = 0; k < 200; k++) {
  const order = E.choiceOrder(q, rng);
  if (order.slice().sort().join() !== q.choices.map((_, i) => i).join()) { err(q.id + ' bad order'); break; }
  const shown = order.map(o => q.choices[o]);
  const pickPos = Math.floor(rng() * shown.length);
  const orig = order[pickPos];
  if (shown[pickPos] !== q.choices[orig] || shown[pickPos].explain !== q.choices[orig].explain) { err(q.id + ' mapping broken'); break; }
  if ((shown.findIndex(c => c.correct) === pickPos) !== q.choices[orig].correct) { err(q.id + ' correctness mapping broken'); break; }
  shuffles++;
}
console.log(`  ${shuffles} shuffles verified`);

section('Engine behaviour');
const MAP = {}; BANK.forEach(q => { MAP[q.id] = q; });
const t = (cond, msg) => { if (!cond) err(msg); else console.log('  ok  ' + msg); };
let S = E.defaultState();
const qs = BANK.slice(0, 5);
let sess = E.createSession({ mode: 'quick', label: 'test', questions: qs, rng: E.makeRng(1), now: 1000 });
S.active = sess;
t(E.sessionStats(sess).accuracyText === '—', 'accuracy shows — before any answers (no divide by zero)');
t(E.submit(S, sess, qs[0], 1001) === null, 'submit with no selection is ignored');
const wrongOf = q => q.choices.findIndex(c => !c.correct), rightOf = q => q.choices.findIndex(c => c.correct);
E.select(sess, qs[0].id, rightOf(qs[0])); E.submit(S, sess, qs[0], 1002);
E.submit(S, sess, qs[0], 1003); E.submit(S, sess, qs[0], 1004);
t(E.sessionStats(sess).answered === 1 && S.attempts.length === 1, 'repeated submit clicks count only once');
t(E.select(sess, qs[0].id, wrongOf(qs[0])) === false && sess.answers[qs[0].id].correct === true, 'answer is locked after submit');
E.select(sess, qs[1].id, wrongOf(qs[1])); E.submit(S, sess, qs[1], 1005);
E.select(sess, qs[2].id, rightOf(qs[2])); E.submit(S, sess, qs[2], 1006);
let st = E.sessionStats(sess);
t(st.correct === 2 && st.incorrect === 1 && st.answered === 3 && st.remaining === 2 && st.accuracy === 67, 'correct/incorrect/answered/remaining/accuracy = 2/1/3/2/67%');
t(!!S.mistakes[qs[1].id] && !S.mistakes[qs[0].id], 'missed question saved to mistakes automatically');
E.archiveSession(S, sess, 2000);
const life1 = E.lifetime(S);
const sess2 = E.createSession({ mode: 'quick', label: 'test2', questions: qs, rng: E.makeRng(2), now: 3000 }); S.active = sess2;
st = E.sessionStats(sess2);
t(st.answered === 0 && st.correct === 0 && E.lifetime(S).attempts === life1.attempts && S.history.length === 1, 'new session resets only session statistics');
E.select(sess2, qs[0].id, rightOf(qs[0])); E.submit(S, sess2, qs[0], 3001);
t(E.lifetime(S).attempts === 4 && E.lifetime(S).uniqueAttempted === 3, 'lifetime attempts and unique-question counts kept separate');
// retries
const retry = E.createSession({ mode: 'mistakes', label: 'r', questions: [qs[1]], isRetry: true, now: 4000 });
E.select(retry, qs[1].id, rightOf(qs[1])); E.submit(S, retry, qs[1], 4001);
t(S.mistakes[qs[1].id].retries.length === 1 && S.mistakes[qs[1].id].misses === 1 && S.attempts[S.attempts.length - 1].r === true, 'retry recorded separately from original attempt');
const retry2 = E.createSession({ mode: 'mistakes', label: 'r2', questions: [qs[1]], isRetry: true, now: 5000 });
E.select(retry2, qs[1].id, rightOf(qs[1])); E.submit(S, retry2, qs[1], 5001);
t(S.mistakes[qs[1].id].resolved === true && E.activeMistakes(S, MAP).length === 0, 'two correct retries in a row mark the mistake as improved');
// bookmarks
t(E.toggleBookmark(S, qs[3].id) === true && !!S.bookmarks[qs[3].id], 'bookmark added');
t(E.toggleBookmark(S, qs[3].id) === false && !S.bookmarks[qs[3].id], 'bookmark removed');
E.toggleBookmark(S, qs[4].id);
// exam
const exQs = E.buildExam(BANK, 25, E.makeRng(9));
t(exQs.length === 25 && new Set(exQs.map(q => q.id)).size === 25, 'practice exam has 25 distinct questions');
t(new Set(exQs.map(q => q.topic)).size >= 10, 'practice exam spreads across topics');
const ex = E.createSession({ mode: 'exam', label: 'ex', questions: exQs, isExam: true, now: 6000 });
E.select(ex, exQs[0].id, wrongOf(exQs[0])); E.select(ex, exQs[0].id, rightOf(exQs[0]));
E.select(ex, exQs[1].id, wrongOf(exQs[1]));
const before = S.attempts.length;
t(E.submit(S, ex, exQs[0]) === null && !E.feedbackVisible(ex, exQs[0].id) && Object.keys(ex.answers).length === 0, 'exam answers and explanations hidden until finished');
t(E.sessionStats(ex).correct === 0 && E.sessionStats(ex).answered === 2, 'exam shows only answered count before finishing');
t(ex.selections[exQs[0].id] === rightOf(exQs[0]), 'exam answers can be changed before finishing');
E.finishExam(S, ex, MAP, 7000);
st = E.sessionStats(ex);
t(st.correct === 1 && st.incorrect === 1 && S.attempts.length === before + 2 && E.feedbackVisible(ex, exQs[0].id), 'exam graded once at finish; feedback visible afterwards');
t(E.select(ex, exQs[2].id, 0) === false && E.finishExam(S, ex, MAP) === false, 'finished exam cannot be changed or graded twice');
E.archiveSession(S, ex, 7000);
// weighted selection
const picked = E.pickWeighted(S, BANK, 30, MAP, TOPICS, E.makeRng(3));
t(picked.length === 30 && new Set(picked.map(q => q.id)).size === 30, 'personalized pick returns distinct questions');
// persistence and export/import
const mem = { d: {}, getItem(k) { return this.d[k] || null; }, setItem(k, v) { this.d[k] = v; } };
E.save(mem, S);
const reloaded = E.load(mem).state;
t(JSON.stringify(reloaded) === JSON.stringify(S), 'saved progress survives a reload');
const file = E.exportData(S);
const imp = E.importData(file);
t(imp.ok && JSON.stringify(imp.state) === JSON.stringify(S), 'export → import preserves all progress');
t(!E.importData('not json').ok && !E.importData('{"app":"other"}').ok, 'bad import files are rejected with a message');
const reset = E.resetProgress(S);
t(reset.attempts.length === 0 && reset.history.length === 0 && reset.settings.theme === S.settings.theme, 'reset clears progress but keeps appearance');
S.handbookMarks = { hl: [{ id: 'm1', page: 34, rects: [[0.1, 0.1, 0.5, 0.12]], color: 'green', t: 1 }], notes: [{ id: 'n1', page: 34, x: 0.5, y: 0.5, text: 'curb colors', t: 2 }] };
const imp2 = E.importData(E.exportData(S));
t(imp2.ok && imp2.state.handbookMarks.hl.length === 1 && imp2.state.handbookMarks.notes[0].text === 'curb colors', 'handbook highlights and notes are included in export/import');
t(E.resetProgress(S).handbookMarks.notes.length === 1, 'reset keeps handbook highlights and notes');

section('Handbook reader data');
const HBP = W.HANDBOOK_PAGES || [], HBI = (W.HANDBOOK || {}).highlights || [];
t(HBP.length > 0 && HBP.every(p => fs.existsSync(path.join(APP, p.img))), `all ${HBP.length} handbook page images exist`);
t(HBI.length > 0 && HBI.every((h, i) => HBP[h.page - 1] && HBP[h.page - 1].hl.some(r => r[4] === i)), `all ${HBI.length} important passages have highlight boxes on the right page`);
t(HBP.every(p => p.w.length > 0 || p.hl.length === 0), 'pages with highlights have word boxes');

section('Translations');
for (const f of ['i18n.js', 'i18n-more.js']) vm.runInContext(fs.readFileSync(path.join(APP, 'js', f), 'utf8'), ctx, { filename: 'js/' + f });
const I18N = W.I18N || {}, TR = W.DMV_TR || {};
const appSrc = fs.readFileSync(path.join(APP, 'js', 'app.js'), 'utf8');
const LIT = `'((?:[^'\\\\]|\\\\.)*)'`, unesc = s => s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
const uiKeys = new Set();
for (const m of appSrc.matchAll(new RegExp(`\\bt\\(\\s*${LIT}`, 'g'))) uiKeys.add(unesc(m[1]));
for (const m of appSrc.matchAll(new RegExp(`\\bt\\([^'()]*\\?\\s*${LIT}\\s*:\\s*${LIT}`, 'g'))) { uiKeys.add(unesc(m[1])); uiKeys.add(unesc(m[2])); }
for (const m of appSrc.matchAll(new RegExp(`\\bk: ${LIT}`, 'g'))) uiKeys.add(unesc(m[1]));
for (const m of appSrc.matchAll(/\bt\(\s*"((?:[^"\\]|\\.)*)"/g)) uiKeys.add(m[1]);
for (const m of html.matchAll(/data-i18n(?:-aria)?="([^"]+)"/g)) uiKeys.add(m[1]);
TOPICS.forEach(tp => uiKeys.add(tp.name));
const vars = s => (s.match(/\{\w+\}/g) || []).sort().join();
const CORRECT = { es: /^Correcto\./, pt: /^Correto\./ };
for (const lang of ['es', 'pt']) {
  const D = I18N[lang] || {}, Q = TR[lang] || {};
  let miss = 0, badVars = 0;
  for (const k of uiKeys) { if (!(k in D)) { miss++; err(`${lang}: missing UI text "${k.slice(0, 60)}"`); } }
  for (const k of Object.keys(D)) if (vars(k) !== vars(D[k])) { badVars++; err(`${lang}: placeholder mismatch in "${k.slice(0, 60)}"`); }
  let qOk = 0;
  for (const q of BANK) {
    const tq = Q[q.id];
    if (!tq) { err(`${lang}: ${q.id} not translated`); continue; }
    if (!tq.q || tq.c.length !== q.choices.length) { err(`${lang}: ${q.id} has wrong choice count`); continue; }
    const ci = q.choices.findIndex(c => c.correct);
    const marked = tq.c.map((c, i) => CORRECT[lang].test(c[1]) ? i : -1).filter(i => i >= 0);
    if (marked.length !== 1 || marked[0] !== ci) { err(`${lang}: ${q.id} correct-answer explanation is on the wrong choice`); continue; }
    if (q.image && !tq.alt) err(`${lang}: ${q.id} picture has no translated description`);
    qOk++;
  }
  for (const id of Object.keys(Q)) if (!MAP[id]) err(`${lang}: translation for unknown question ${id}`);
  console.log(`  ${lang}: ${uiKeys.size - miss}/${uiKeys.size} UI texts, ${badVars} placeholder problem(s), ${qOk}/${BANK.length} questions`);
}

section('Handbook text and study sheets');
const HT = (W.HANDBOOK_TEXT || {}).chapters || [], ST = W.DMV_STUDY || [];
t(HT.length === 14, `handbook text has ${HT.length} chapters`);
t(HT.every(c => c.b.length >= 3), 'every handbook chapter has content');
t(HT.every(c => c.b.filter(b => b[0] === 'fig').every(b => fs.existsSync(path.join(APP, b[1])))), 'all handbook figures exist');
const impSeen = new Set(); HT.forEach(c => c.b.forEach(b => { for (const m of String(b[1]).matchAll(/data-i="(\d+)"/g)) impSeen.add(+m[1]); }));
t(impSeen.size >= HBI.length - 3, `${impSeen.size} of ${HBI.length} important passages are marked in the phone reader`);
for (const s of ST) for (const it of s.items) {
  for (const l of ['en', 'es', 'pt']) if (!it[1][l]) err(`study sheet ${s.id}: missing ${l} text`);
  if (it[2] && !fs.existsSync(path.join(APP, it[2]))) err(`study sheet ${s.id}: picture missing ${it[2]}`);
  for (const tp of s.topics) if (!TOPICS.some(x => x.key === tp)) err(`study sheet ${s.id}: unknown topic ${tp}`);
}
t(ST.length >= 8, `${ST.length} cheat sheets, ${ST.reduce((a, s) => a + s.items.length, 0)} facts, all in 3 languages`);
{
  const DAY = 86400000, now = new Date(2026, 5, 10, 14).getTime();
  t(E.activity(E.defaultState(), now).streak === 0, 'streak is 0 with no practice');
  const T1 = E.defaultState(); T1.attempts = [{ q: 'A', c: true, t: now }, { q: 'A', c: true, t: now - DAY }, { q: 'A', c: true, t: now - 2 * DAY }];
  t(E.activity(T1, now).streak === 3 && E.activity(T1, now).today === 1, 'streak counts days in a row');
  const T2 = E.defaultState(); T2.attempts = [{ q: 'A', c: true, t: now - DAY }]; t(E.activity(T2, now).streak === 1, 'yesterday keeps the streak alive');
  const T3 = E.defaultState(); T3.attempts = [{ q: 'A', c: true, t: now - 3 * DAY }]; t(E.activity(T3, now).streak === 0, 'a missed day resets the streak');
  const C = E.defaultState(); const cids = ['x', 'y', 'z'];
  t(E.dueCards(C, cids, now).fresh.length === 3, 'new flashcards start as fresh');
  E.gradeCard(C, 'x', true, now); t(C.cards.x.b === 2 && C.cards.x.due > now, 'knowing a card moves it up a box and delays it');
  E.gradeCard(C, 'x', false, now); t(C.cards.x.b === 1, 'missing a card sends it back to box 1');
  for (let i = 0; i < 6; i++) E.gradeCard(C, 'y', true, now);
  t(C.cards.y.b === 5, 'boxes stop at 5');
  t(E.dueCards(C, cids, now + 40 * DAY).due.length === 2, 'cards come back when due');
  t(E.importData(E.exportData(C)).state.cards.y.b === 5, 'flashcard progress survives export and import');
  t(Object.keys(E.resetProgress(C).cards).length === 0, 'reset clears flashcard progress');
}

console.log(`\n${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
