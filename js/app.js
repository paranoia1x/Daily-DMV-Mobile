/* CA Driver Test Practice (mobile): user interface. All logic that affects scores lives in engine.js.
   Every on-screen text goes through t('English text', {vars}); translations live in js/i18n.js and js/i18n-more.js,
   and translated questions in data/tr-*.js (keyed by question ID, same choice order as English). */
(function () {
  'use strict';
  const E = window.DMVEngine;
  const META = window.DMV_META || {};
  const TOPICS = window.DMV_TOPICS || [];
  const SOURCES = window.DMV_SOURCES || {};
  const BANK = window.DMV_QUESTIONS || [];
  const STUDY = window.DMV_STUDY || [];
  const MAP = {}; BANK.forEach(q => { MAP[q.id] = q; });
  const TOPIC_NAME = {}; TOPICS.forEach(tp => { TOPIC_NAME[tp.key] = tp.name; });
  const TOPIC_ICON = { signs: '🛑', signals: '🚦', markings: '🛣️', rightofway: '🤝', turns: '↪️', freeway: '🛤️', speed: '⏱️', parking: '🅿️', sharing: '🚲', emergency: '🚑', trucks: '🚚', railroad: '🚆', conditions: '🌧️', impairment: '📵', laws: '🪪' };
  const LETTERS = ['A', 'B', 'C', 'D'];
  const $ = id => document.getElementById(id);
  const main = $('main'), banner = $('banner');

  // ---------- language ----------
  const LANGS = { en: 'English', es: 'Español', pt: 'Português' };
  const HANDBOOK_PDF = { en: 'https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/', es: 'https://www.dmv.ca.gov/portal/file/california-driver-handbook-spanish-pdf/' };
  let LANG = 'en';
  function t(s, v) {
    const d = window.I18N && window.I18N[LANG];
    let out = (LANG !== 'en' && d && d[s]) || s;
    if (v) out = out.replace(/\{(\w+)\}/g, (m, k) => (v[k] !== undefined ? v[k] : m));
    return out;
  }
  const L3 = o => (o && typeof o === 'object') ? (o[LANG] || o.en || '') : (o || ''); // study data {en, es, pt}
  const LQC = {};
  function LQ(q) { // question in the current language (falls back to English piece by piece)
    const tr = LANG !== 'en' && window.DMV_TR && window.DMV_TR[LANG] && window.DMV_TR[LANG][q.id];
    if (!tr) return q;
    const key = LANG + ':' + q.id;
    if (!LQC[key]) {
      LQC[key] = Object.assign({}, q, {
        question: tr.q || q.question, tip: tr.tip !== undefined ? tr.tip : q.tip, imageAlt: tr.alt || q.imageAlt,
        choices: q.choices.map((c, i) => ({ text: (tr.c[i] || [])[0] || c.text, explain: (tr.c[i] || [])[1] || c.explain, correct: c.correct }))
      });
    }
    return LQC[key];
  }
  const topicName = k => t(TOPIC_NAME[k] || k);
  function sessLabel(x) {
    const lk = x && x.lk; if (!lk) return x ? x.label : '';
    return t(lk.k, lk.v) + (lk.topic ? ' — ' + topicName(lk.topic) : lk.mixed ? ' — ' + t('mixed topics') : '');
  }
  function applyLanguage() {
    document.documentElement.lang = LANG;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  }
  function setLanguage(l) { LANG = LANGS[l] ? l : 'en'; S.settings.language = LANG; persist(); applyLanguage(); render(); }

  // ---------- storage ----------
  let storage = null;
  try { const k = '__dmv_test__'; window.localStorage.setItem(k, '1'); window.localStorage.removeItem(k); storage = window.localStorage; } catch (e) { storage = null; }
  const memStore = { data: {}, getItem(k) { return this.data[k] || null; }, setItem(k, v) { this.data[k] = v; } };
  const loaded = E.load(storage || memStore);
  let S = loaded.state;
  if (S.settings.language && LANGS[S.settings.language]) LANG = S.settings.language;
  else { const nav = (navigator.language || 'en').slice(0, 2).toLowerCase(); LANG = LANGS[nav] ? nav : 'en'; }
  if (!storage) showBanner(t('Saving is blocked in this browser window (for example, a private window or blocked site data). You can still practice, but progress will be lost when you close the app. Use Settings → Export to keep a copy.'), true);
  else if (!loaded.ok) showBanner(t('Your saved progress could not be read, so the app started fresh. If you have a backup file, use Settings → Import progress.'));
  if (S.active && !S.active.qids.every(id => MAP[id])) { S.active = null; }

  function persist() {
    if (!E.save(storage || memStore, S)) showBanner(t('Progress could not be saved. Your browser storage may be full or blocked. Use Settings → Export progress to make a backup.'));
  }
  let bannerSticky = false;
  function showBanner(msg, sticky) { banner.textContent = msg; banner.hidden = false; if (sticky) bannerSticky = true; }
  let toastTimer = null;
  function toast(msg) { const el = $('toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 2200); }

  // ---------- helpers ----------
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmtDate = ts => new Date(ts).toLocaleString(LANG, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  const pct = (c, n) => E.accuracyText(c, n);
  const stripCorrect = s => String(s || '').replace(/^(Correct|Correcto|Correto|Correta)\.\s*/, '');
  function applySettings() {
    const r = document.documentElement;
    r.dataset.theme = S.settings.theme; r.dataset.text = S.settings.textSize; r.dataset.reduce = S.settings.reducedMotion ? 'true' : 'false';
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = getComputedStyle(r).getPropertyValue('--surface').trim() || '#ffffff';
  }
  function confirmBox(title, text, yesLabel) {
    const d = $('confirm');
    $('confirmTitle').textContent = title; $('confirmText').textContent = text;
    const yes = $('confirmYes'), no = $('confirmNo');
    yes.textContent = yesLabel || t('OK'); no.textContent = t('Cancel');
    return new Promise(res => {
      const done = v => { d.close(); yes.onclick = no.onclick = null; d.oncancel = null; res(v); };
      yes.onclick = () => done(true); no.onclick = () => done(false); d.oncancel = () => done(false);
      d.showModal(); no.focus();
    });
  }
  let sheetBind = null;
  function openSheet(html, bind) {
    const d = $('sheet'); $('sheetBody').innerHTML = html; sheetBind = bind || null;
    if (!d.open) d.showModal();
    if (sheetBind) sheetBind($('sheetBody'));
    const f = $('sheetBody').querySelector('h2'); if (f) { f.setAttribute('tabindex', '-1'); f.focus(); }
  }
  function closeSheet() { const d = $('sheet'); if (d.open) d.close(); }
  $('sheet').addEventListener('click', e => { if (e.target === $('sheet')) closeSheet(); });
  function ring(p, label, size) {
    const r = 40, c = 2 * Math.PI * r, v = Math.max(0, Math.min(100, p || 0));
    return `<div class="ring" style="${size ? `width:${size}px;height:${size}px` : ''}" role="img" aria-label="${esc(label)}: ${v}%"><svg viewBox="0 0 100 100"><circle class="bg" cx="50" cy="50" r="${r}"/><circle class="fg" cx="50" cy="50" r="${r}" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - v / 100)).toFixed(1)}"/></svg><div class="ring-txt"><b>${v}%</b><span>${esc(label)}</span></div></div>`;
  }
  function figure(q, zoom = true) {
    if (!q.image) return '';
    return `<div class="figure"><img src="${esc(q.image)}" alt="${esc(q.imageAlt)}" data-img-fallback="${esc(q.image)}">` +
      (zoom ? `<button type="button" class="zoom" data-action="zoom" data-src="${esc(q.image)}" data-alt="${esc(q.imageAlt)}" aria-label="${t('Enlarge picture')}">🔍</button>` : '') + `</div>`;
  }
  function sourceLine(q) {
    return `<p class="src">${t('Source:')} <a href="${esc(q.source.url)}" target="_blank" rel="noopener noreferrer">${esc(q.source.title)}</a>${q.source.section ? ' — ' + esc(q.source.section) : ''}${LANG !== 'en' ? ' (' + t('handbook in English') + ')' : ''}</p>`;
  }
  function hookImages() {
    main.querySelectorAll('img[data-img-fallback]').forEach(img => {
      img.addEventListener('error', () => {
        const p = document.createElement('p'); p.className = 'banner';
        p.textContent = t('This picture could not be loaded ({file}). Check your internet connection and reload the app.', { file: img.dataset.imgFallback });
        img.replaceWith(p);
      }, { once: true });
    });
  }
  const listItem = (attrs, icon, title, sub, iconCls) => `<li><button type="button" class="list-item" ${attrs}><span class="li-ic ${iconCls || ''}" aria-hidden="true">${icon}</span><span class="li-main"><span class="li-title">${title}</span>${sub ? `<span class="li-sub">${sub}</span>` : ''}</span><span class="chev" aria-hidden="true">›</span></button></li>`;
  const signPool = () => BANK.filter(q => q.topic === 'signs' || (q.image && q.image.indexOf('img/signs/') === 0));
  const nMistakes = () => E.activeMistakes(S, MAP).length;
  const nBookmarks = () => Object.keys(S.bookmarks).filter(id => MAP[id]).length;

  // ---------- navigation ----------
  const PARENT = { settings: 'more', sources: 'more', help: 'more', sheet: 'study', tips: 'study', learn: 'study', cards: 'study', hbch: 'handbook', hbpages: 'handbook', hbimp: 'handbook', hbmine: 'handbook', results: 'home', review: 'progress' };
  const TAB = { home: 'home', study: 'study', sheet: 'study', tips: 'study', learn: 'study', handbook: 'handbook', hbch: 'handbook', hbpages: 'handbook', hbimp: 'handbook', hbmine: 'handbook', progress: 'progress', review: 'progress', more: 'more', settings: 'more', sources: 'more', help: 'more' };
  let view = 'home', viewArg = null, depth = 0;
  function go(v, arg, opt) {
    opt = opt || {};
    view = v; viewArg = arg === undefined ? null : arg;
    if (!bannerSticky) banner.hidden = true;
    if (!opt.pop) { if (opt.replace) history.replaceState({ v, a: viewArg }, ''); else { history.pushState({ v, a: viewArg }, ''); depth++; } }
    render();
    if (!opt.keepScroll) window.scrollTo(0, 0);
    const h = $('abTitle'); if (!opt.noFocus && h && !document.body.classList.contains('focus')) h.focus({ preventScroll: true });
  }
  function back() {
    if (depth > 0) { history.back(); return; }
    go(PARENT[view] || 'home', null, { replace: true });
  }
  window.addEventListener('popstate', e => {
    document.querySelectorAll('dialog[open]').forEach(d => d.close());
    depth = Math.max(0, depth - 1);
    const st = e.state || { v: 'home', a: null };
    go(st.v, st.a, { pop: true, noFocus: true });
  });

  function render() {
    const V = VIEWS[view] || VIEWS.home;
    const out = V(viewArg) || {};
    const focusMode = !!out.focus;
    document.body.classList.toggle('focus', focusMode);
    document.querySelectorAll('[data-nav]').forEach(b => { if (b.dataset.nav === TAB[view]) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
    $('abTitle').textContent = out.title || t('CA Driver Test Practice');
    document.title = (out.title ? out.title + ' · ' : '') + 'CA Driver Test Practice';
    const hasBack = !!PARENT[view];
    $('abBack').hidden = !hasBack; $('abLogo').hidden = hasBack;
    $('abRight').innerHTML = out.right || '';
    main.innerHTML = `<div class="view-in">${out.html || ''}</div>`;
    hookImages();
    main.querySelectorAll('.lang-select').forEach(s => s.addEventListener('change', () => setLanguage(s.value)));
    if (out.bind) out.bind();
  }

  // ---------- home ----------
  function greeting() { const h = new Date().getHours(); return h < 12 ? t('Good morning') : h < 18 ? t('Good afternoon') : t('Good evening'); }
  function vHome() {
    const act = E.activity(S), rd = E.readiness(S, MAP), goal = S.settings.dailyGoal || 20;
    const nM = nMistakes(), nB = nBookmarks();
    const due = E.dueCards(S, BANK.map(q => q.id));
    let resume = '';
    if (S.active) {
      const st = E.sessionStats(S.active);
      resume = `<section class="card resume"><div class="row nowrap" style="justify-content:space-between"><div><b>${t('Unfinished session')}</b><div class="muted small">${esc(sessLabel(S.active))} · ${t('{a} of {b} answered', { a: st.answered, b: st.total })}</div></div>
        <button class="btn primary sm" data-action="resume">${t('Resume')}</button></div>
        <div class="bar" style="margin-top:.6rem"><div style="width:${(st.answered / st.total * 100).toFixed(0)}%"></div></div></section>`;
    }
    const sub = act.streak ? t(act.streak > 1 ? '🔥 {n}-day streak. Keep it going!' : '🔥 1-day streak. Come back tomorrow!', { n: act.streak }) : t('Practice a little every day. It adds up.');
    const tile = (action, mode, icon, cls, title, subtxt, count, dis) => `<button type="button" class="tile" data-action="${action}" ${mode ? `data-mode="${mode}"` : ''} ${dis ? 'disabled' : ''}>${count ? `<span class="count">${count}</span>` : ''}<span class="t-ic ${cls}" aria-hidden="true">${icon}</span><span class="t-title">${title}</span><span class="t-sub">${subtxt}</span></button>`;
    const ts = E.topicStats(S, MAP, TOPICS);
    const html = `<div class="hello"><h2>${greeting()} 👋</h2><p>${sub}</p></div>
    ${LANG !== 'en' ? `<p class="muted small">${t('Translated by machine (AI) and not yet checked by a native speaker. If something seems unclear, compare with the English version or the official handbook.')}</p>` : ''}
    <button type="button" class="card hero-card" data-nav="progress" style="width:100%;text-align:left;cursor:pointer">
      ${ring(rd.masteredPct, t('mastered'))}
      <div><h3>${t('Test readiness')}</h3><p>${t('{m} of {n} questions mastered (your last answer was right).', { m: rd.mastered, n: rd.total })}</p>
      <p class="muted">${rd.recentN ? t('Recent accuracy: {p}', { p: rd.recentPct + '%' }) : t('Answer a few questions to see your score.')}</p></div></button>
    <div class="statrow">
      <div class="statbox"><b>🔥 ${act.streak}</b><span>${t('day streak')}</span></div>
      <div class="statbox"><b>${Math.min(act.today, goal)}/${goal}</b><span>${t('today\'s goal')}</span><div class="bar goal-bar ${act.today >= goal ? 'ok' : ''}"><div style="width:${Math.min(100, act.today / goal * 100).toFixed(0)}%"></div></div></div>
      <div class="statbox"><b>${nM}</b><span>${t('to review')}</span></div></div>
    ${resume}
    <button class="btn primary block" data-action="quickStart" style="min-height:56px;font-size:1.08rem;margin-bottom:.85rem">⚡ ${t('Quick practice · 10 questions')}</button>
    <div class="tiles">
      ${tile('setup', 'exam', '📝', 'ic-blue', t('Practice exam'), t('Like the real test. Answers at the end.'))}
      ${tile('setup', 'signs', '🛑', 'ic-red', t('Road signs'), t('{n} sign pictures', { n: signPool().length }))}
      ${tile('start', 'trouble', '🎯', 'ic-orange', t('Trouble spots'), t('Hill parking, flashing red, double yellow, following distance'))}
      ${tile('start', 'mistakes', '🔁', 'ic-purple', t('My mistakes'), nM ? t(nM > 1 ? '{n} questions to retry' : '{n} question to retry', { n: nM }) : t('Missed questions show up here'), nM || '', !nM)}
      ${tile('nav', 'cards', '🃏', 'ic-green', t('Flashcards'), t('{n} ready to review', { n: due.due.length + due.fresh.length }))}
      ${tile('nav', 'study', '💡', 'ic-yellow', t('Study guide'), t('Cheat sheets and key rules'))}
      ${tile('start', 'bookmarks', '⭐', 'ic-teal', t('Bookmarks'), nB ? t('{n} saved', { n: nB }) : t('Save questions with ☆'), '', !nB)}
      ${tile('setup', 'full', '📚', 'ic-blue', t('All questions'), t('All {n} questions, in random order', { n: BANK.length }))}
    </div>
    <div class="section-title"><h2>${t('Practice by topic')}</h2></div>
    <div class="chips">${ts.map(tp => `<button type="button" class="chip" data-action="topicSheet" data-topic="${tp.key}"><span aria-hidden="true">${TOPIC_ICON[tp.key] || '•'}</span>${esc(t(tp.name))}${tp.attempts ? `<span class="bar ${tp.accuracy >= 85 ? 'ok' : ''}" aria-hidden="true"><div style="width:${tp.accuracy}%"></div></span>` : ''}</button>`).join('')}</div>
    <p class="notice-line">${esc(t(META.notice))}</p>`;
    return { html, right: `<button type="button" class="chip-btn" data-action="langSheet" aria-label="${t('Language')}">🌐 ${LANG.toUpperCase()}</button>` };
  }
  function langSheet() {
    openSheet(`<h2 id="sheetTitle">${t('Language')}</h2><div class="sheet-actions">${Object.entries(LANGS).map(([k, n]) => `<button class="btn block ${k === LANG ? 'primary' : ''}" data-lang="${k}" lang="${k}">${n}${k === LANG ? ' ✓' : ''}</button>`).join('')}</div>
      <p class="muted small">${t('Spanish and Portuguese translations were made by machine (AI) and have not been checked by a native speaker. The handbook stays in English.')}</p>`,
    body => body.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => { closeSheet(); setLanguage(b.dataset.lang); })));
  }
  function setupSheet(mode, topic) {
    const seg = (name, vals, def) => `<div class="seg" role="radiogroup" aria-label="${t('Number of questions')}">${vals.map(v => `<label><input type="radio" name="${name}" value="${v}" ${v === def ? 'checked' : ''}><span>${v === 'all' ? t('All') : v}</span></label>`).join('')}</div>`;
    let h = '';
    if (mode === 'quick') {
      h = `<h2 id="sheetTitle">⚡ ${t('Quick practice')}</h2><p class="muted">${t('Explanations after each answer. Questions you missed come back more often.')}</p>
        <div class="field">${t('Number of questions')}${seg('cnt', [10, 20, 30], 10)}</div>
        <label class="field" for="sTopic">${t('Topic')}<select id="sTopic"><option value="">${t('Mixed (all topics)')}</option>${TOPICS.map(tp => `<option value="${tp.key}" ${tp.key === topic ? 'selected' : ''}>${esc(t(tp.name))} (${BANK.filter(q => q.topic === tp.key).length})</option>`).join('')}</select></label>`;
    } else if (mode === 'exam') {
      h = `<h2 id="sheetTitle">📝 ${t('Practice exam')}</h2><p class="muted">${t('Answers and explanations stay hidden until you finish. You can go back and change answers. No timer.')}</p>
        <div class="field">${t('Number of questions')}${seg('cnt', [25, 50], 25)}</div>
        <p class="muted small">${t('App study target: {p}%. This is the app\'s own goal, not an official DMV passing score.', { p: E.APP_STUDY_TARGET })}</p>`;
    } else if (mode === 'signs') {
      h = `<h2 id="sheetTitle">🛑 ${t('Road signs')}</h2><p class="muted">${t('Sign pictures, meanings, shapes, and colors.')}</p><div class="field">${t('Number of questions')}${seg('cnt', [10, 20, 'all'], 10)}</div>`;
    } else if (mode === 'full') {
      h = `<h2 id="sheetTitle">📚 ${t('All questions')}</h2><p class="muted">${t('Practice through all <b>{n}</b> questions in random order. You can stop and resume any time.', { n: BANK.length })}</p>`;
    }
    h += `<button class="btn primary block" data-go style="margin-top:.8rem">${t('Start')}</button>`;
    openSheet(h, body => body.querySelector('[data-go]').addEventListener('click', () => {
      const c = body.querySelector('input[name="cnt"]:checked'), tp = body.querySelector('#sTopic');
      closeSheet(); startMode(mode, { n: c ? c.value : null, topic: tp ? tp.value : '' });
    }));
  }
  function topicSheet(key) {
    const st = E.topicStats(S, MAP, TOPICS).find(x => x.key === key) || {};
    openSheet(`<h2 id="sheetTitle">${TOPIC_ICON[key] || ''} ${esc(topicName(key))}</h2>
      <p class="muted">${t('{n} questions', { n: st.bank })} · ${st.attempts ? t('{p}% of {n} attempts', { p: st.accuracy, n: st.attempts }) : t('Not practiced yet')}</p>
      <div class="sheet-actions"><button class="btn primary block" data-x="practice">⚡ ${t('Practice 10 questions')}</button>
      <button class="btn block" data-x="learn">💡 ${t('Learn the rules first')}</button>
      <button class="btn block" data-x="cards">🃏 ${t('Flashcards for this topic')}</button></div>`,
    body => body.querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', () => {
      closeSheet(); const x = b.dataset.x;
      if (x === 'practice') startMode('quick', { n: 10, topic: key }); else if (x === 'learn') go('learn', key); else startCards('topic:' + key);
    })));
  }

  async function startMode(mode, o) {
    o = o || {};
    if (S.active) {
      const ok = await confirmBox(t('End your unfinished session?'), t('You have an unfinished session ({label}). Starting a new one will end it. Answers you already gave are kept in your history.', { label: sessLabel(S.active) }), t('End it and start new'));
      if (!ok) return;
      E.archiveSession(S, S.active);
    }
    let qs = [], lk = null, isExam = false, isRetry = false;
    if (mode === 'quick') {
      const n = +o.n || 10; const pool = o.topic ? BANK.filter(q => q.topic === o.topic) : BANK;
      qs = E.pickWeighted(S, pool, n, MAP, TOPICS); lk = { k: 'Quick Practice ({n})', v: { n: qs.length }, topic: o.topic || null, mixed: !o.topic };
    } else if (mode === 'topics') {
      const pool = BANK.filter(q => o.topics.includes(q.topic));
      qs = E.pickWeighted(S, pool, 10, MAP, TOPICS); lk = { k: 'Quick Practice ({n})', v: { n: qs.length }, topic: o.topics.length === 1 ? o.topics[0] : null, mixed: o.topics.length > 1 };
    } else if (mode === 'signs') {
      const pool = signPool();
      qs = o.n === 'all' ? E.shuffle(pool) : E.pickWeighted(S, pool, +o.n || 10, MAP, TOPICS); lk = { k: 'Road Signs ({n})', v: { n: qs.length } };
    } else if (mode === 'trouble') {
      const tr = BANK.filter(q => q.tags.includes('trouble'));
      const others = E.pickWeighted(S, BANK.filter(q => !q.tags.includes('trouble')), 4, MAP, TOPICS);
      qs = E.shuffle(tr.concat(others)); lk = { k: 'Trouble spots ({n})', v: { n: qs.length } };
    } else if (mode === 'mistakes') {
      qs = E.shuffle(E.activeMistakes(S, MAP).map(id => MAP[id])); lk = { k: 'Review My Mistakes — retry ({n})', v: { n: qs.length } }; isRetry = true;
    } else if (mode === 'bookmarks') {
      qs = E.shuffle(Object.keys(S.bookmarks).filter(id => MAP[id]).map(id => MAP[id])); lk = { k: 'Bookmarked ({n})', v: { n: qs.length } };
    } else if (mode === 'full') {
      qs = E.shuffle(BANK); lk = { k: 'Full Question Bank ({n})', v: { n: qs.length } };
    } else if (mode === 'exam') {
      const n = +o.n || 25; qs = E.buildExam(BANK, n); lk = { k: 'Practice Exam ({n} questions)', v: { n: qs.length } }; isExam = true;
    }
    if (!qs.length) { toast(t('There are no questions available for that choice yet.')); return; }
    const englishLabel = lk.k.replace(/\{(\w+)\}/g, (m, k) => lk.v[k]) + (lk.topic ? ' — ' + TOPIC_NAME[lk.topic] : lk.mixed ? ' — mixed topics' : '');
    S.active = E.createSession({ mode, label: englishLabel, questions: qs, isExam, isRetry });
    S.active.lk = lk;
    persist(); go('quiz');
  }

  // ---------- quiz ----------
  function choiceList(sess, q0, showResult) {
    const q = LQ(q0), order = sess.orders[q.id], sel = sess.selections[q.id];
    const locked = showResult || (!sess.isExam && !!sess.answers[q.id]);
    return `<fieldset><legend class="sr">${t('Answer choices')}</legend><div class="choices">` + order.map((orig, pos) => {
      const c = q.choices[orig], isSel = sel === orig;
      let cls = 'choice' + (isSel ? ' selected' : '') + (locked ? ' locked' : ''), mark = '', sr = '';
      if (showResult) {
        if (c.correct) { cls += ' is-correct'; mark = '✓'; sr = t('Correct answer'); }
        else if (isSel) { cls += ' is-wrong'; mark = '✗'; }
        if (isSel) sr += (sr ? ', ' : '') + t('Your answer');
      }
      return `<label class="${cls}" data-orig="${orig}"><input type="radio" name="choice" value="${orig}" ${isSel ? 'checked' : ''} ${locked ? 'disabled' : ''}>
        <span class="key" aria-hidden="true">${LETTERS[pos]}</span><span class="txt">${esc(c.text)}${sr ? ` <span class="sr">(${sr})</span>` : ''}</span>${mark ? `<span class="mark" aria-hidden="true">${mark}</span>` : ''}</label>`;
    }).join('') + `</div></fieldset>`;
  }
  function feedbackHtml(sess, q0, rec) {
    const q = LQ(q0);
    const order = rec ? rec.orders[q.id] : sess.orders[q.id];
    const a = (rec || sess).answers[q.id];
    const sel = a ? a.choice : null;
    const corrOrig = q.choices.findIndex(c => c.correct);
    const L = orig => LETTERS[order.indexOf(orig)];
    const skipped = sel === null || sel === undefined;
    const ok = !skipped && q.choices[sel].correct;
    let h = `<div class="feedback ${ok ? 'ok' : 'bad'}" id="feedback"><p class="verdict" tabindex="-1" id="verdict">${skipped ? '✗ ' + t('Not answered') : ok ? '✓ ' + t('Correct') : '✗ ' + t('Incorrect')}</p>`;
    if ((rec || sess).isRetry) h += `<p class="muted small">${t('Retry result: recorded separately from your original attempt.')}</p>`;
    h += `<p class="answer-line">${t('Correct answer:')} ${L(corrOrig)}. ${esc(q.choices[corrOrig].text)}</p>`;
    if (!ok && !skipped) h += `<h3>${t('Why your answer ({letter}) is not right', { letter: L(sel) })}</h3><p>${esc(q.choices[sel].explain)}</p>`;
    h += `<h3>${t('Why {letter} is correct', { letter: L(corrOrig) })}</h3><p>${esc(stripCorrect(q.choices[corrOrig].explain))}</p>`;
    if (q.tip) h += `<div class="tip"><b>💡 ${t('Memory tip:')}</b>${esc(q.tip)}</div>`;
    h += `<details><summary>${t('Explain all choices')}</summary><ul class="allchoices">` + order.map(orig => {
      const c = q.choices[orig];
      return `<li><b>${L(orig)}. ${esc(c.text)}</b> ${c.correct ? `<span class="pill ok">✓ ${t('Correct')}</span>` : `<span class="pill bad">✗ ${t('Incorrect')}</span>`}${orig === sel ? ` <span class="pill accent">${t('Your answer')}</span>` : ''}<br>${esc(c.explain)}</li>`;
    }).join('') + `</ul></details>` + sourceLine(q) + `</div>`;
    return h;
  }
  function vQuiz() {
    const sess = S.active;
    if (!sess) return VIEWS.home();
    const qid = sess.qids[sess.index], q = LQ(MAP[qid]);
    const st = E.sessionStats(sess);
    const answered = !sess.isExam && !!sess.answers[qid];
    const isLast = sess.index === sess.qids.length - 1;
    const bm = !!S.bookmarks[qid];
    const done = sess.isExam ? st.answered : st.answered;
    let h = `<div class="qtop"><button type="button" class="iconbtn" data-action="leaveQuiz" aria-label="${t('Close')}">✕</button>
      <div class="bar" role="progressbar" aria-label="${t('Session progress')}" aria-valuemin="0" aria-valuemax="${st.total}" aria-valuenow="${done}"><div style="width:${(done / st.total * 100).toFixed(1)}%"></div></div>
      <span class="qcount">${sess.index + 1}/${st.total}</span>
      <button type="button" class="iconbtn" data-action="quizMenu" aria-label="${t('More options')}">⋯</button></div>
      <div class="qmeta"><span class="pill">${TOPIC_ICON[q.topic] || ''} ${esc(topicName(q.topic))}</span><span class="pill">${esc(t(q.difficulty))}</span>
        ${sess.isExam ? `<span class="score"><span class="pill accent">${t('{n} answered', { n: st.answered })}</span></span>` : `<span class="score"><span class="pill ok">✓ ${st.correct}</span><span class="pill bad">✗ ${st.incorrect}</span></span>`}</div>
      <p class="qtext" id="qtext" tabindex="-1">${esc(q.question)}</p>${figure(q)}${choiceList(sess, MAP[qid], answered)}`;
    if (answered) h += feedbackHtml(sess, MAP[qid]);
    h += `<p class="kbd-hint">${t('Keyboard: press 1–4 or A–D to choose, Enter to submit or go to the next question.')}</p>`;
    let bar;
    if (sess.isExam) {
      bar = `<div class="qbar"><div class="qbar-in"><button class="btn" data-action="prev" ${sess.index === 0 ? 'disabled' : ''} aria-label="${t('Previous')}">‹</button>
        <button class="btn" data-action="examGrid">${t('Questions')}</button>
        ${isLast ? `<button class="btn primary" data-action="finishExam">${t('Finish exam')}</button>` : `<button class="btn primary" data-action="examNext">${t('Next')} ›</button>`}</div></div>`;
    } else if (!answered) {
      bar = `<div class="qbar"><div class="qbar-in"><button class="btn" data-action="bookmark" aria-pressed="${bm}" aria-label="${t(bm ? 'Bookmarked' : 'Bookmark')}">${bm ? '★' : '☆'}</button>
        <button class="btn primary" data-action="submit" ${sess.selections[qid] === undefined ? 'disabled' : ''}>${t('Check answer')}</button></div></div>`;
    } else {
      const ok = sess.answers[qid].correct;
      bar = `<div class="qbar ${ok ? 'ok' : 'bad'}"><div class="qbar-in"><span class="verdict-mini">${ok ? '✓ ' + t('Correct') : '✗ ' + t('Incorrect')}</span>
        <button class="btn primary" data-action="next">${isLast ? t('See results') : t('Continue')}</button></div></div>`;
    }
    return { html: h + bar, focus: true, title: sessLabel(sess) };
  }
  function quizMenu() {
    const sess = S.active; if (!sess) return;
    const qid = sess.qids[sess.index], bm = !!S.bookmarks[qid];
    openSheet(`<h2 id="sheetTitle">${esc(sessLabel(sess))}</h2><div class="sheet-actions">
      <button class="btn block" data-x="bm">${bm ? '★ ' + t('Remove bookmark') : '☆ ' + t('Bookmark this question')}</button>
      ${sess.isExam ? `<button class="btn block" data-x="finish">${t('Finish exam')}</button>` : ''}
      <button class="btn block danger" data-x="end">${t('End session')}</button>
      <button class="btn block ghost" data-x="close">${t('Keep going')}</button></div>`,
    body => body.querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', () => {
      closeSheet(); const x = b.dataset.x;
      if (x === 'bm') { const on = E.toggleBookmark(S, qid); persist(); toast(on ? '★ ' + t('Bookmarked') : t('Bookmark removed')); render(); }
      else if (x === 'finish') finishExam(); else if (x === 'end') endSession();
    })));
  }
  function examGrid() {
    const sess = S.active; if (!sess) return;
    openSheet(`<h2 id="sheetTitle">${t('Questions')}</h2><p class="muted small">${t('Tap a number to jump to that question. Blue ones are answered.')}</p>
      <nav class="navgrid" aria-label="${t('Exam questions')}">${sess.qids.map((id, i) => { const d = sess.selections[id] !== undefined; return `<button type="button" data-i="${i}" class="${d ? 'answered' : ''} ${i === sess.index ? 'current' : ''}" aria-label="${t(d ? 'Question {n}, answered' : 'Question {n}, not answered', { n: i + 1 })}">${i + 1}</button>`; }).join('')}</nav>
      <button class="btn primary block" data-fin style="margin-top:1rem">${t('Finish exam')}</button>`,
    body => {
      body.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => { closeSheet(); sess.index = +b.dataset.i; persist(); render(); window.scrollTo(0, 0); }));
      body.querySelector('[data-fin]').addEventListener('click', () => { closeSheet(); finishExam(); });
    });
  }

  // ---------- results ----------
  function vResults(id) {
    const rec = S.history.find(r => r.id === id);
    if (!rec) return { title: t('Results'), html: `<div class="empty"><span class="big">🤷</span>${t('This session is no longer in your history.')}</div>` };
    const denom = rec.isExam ? rec.total : rec.answered;
    const p = E.accuracy(rec.correct, denom) || 0;
    const msg = p >= 90 ? t('Excellent! 🎉') : p >= E.APP_STUDY_TARGET ? t('Great job! 👏') : p >= 70 ? t('Getting there. Review the ones you missed.') : t('Keep practicing. Read the explanations below.');
    let h = `<section class="card" style="text-align:center">${'<div style="display:flex;justify-content:center;margin-bottom:.4rem">' + ring(p, t('score'), 120) + '</div>'}
      <h2 style="margin:.2rem 0">${msg}</h2><p class="muted">${esc(sessLabel(rec))} · ${fmtDate(rec.startedAt)}${rec.complete ? '' : ' · ' + t('ended early')}</p>
      <div class="statrow" style="margin:.8rem 0 .4rem"><div class="statbox"><b style="color:var(--ok)">${rec.correct}</b><span>${t('Correct')}</span></div><div class="statbox"><b style="color:var(--bad)">${rec.incorrect}</b><span>${t('Incorrect')}</span></div><div class="statbox"><b>${rec.total - rec.answered}</b><span>${t('Not answered')}</span></div></div>`;
    if (rec.isExam) h += `<p class="small">${p >= E.APP_STUDY_TARGET ? '✓ ' + t('You reached this app\'s study target of {p}%.', { p: E.APP_STUDY_TARGET }) : t('You have not yet reached this app\'s study target of {p}%.', { p: E.APP_STUDY_TARGET })} <span class="muted">${t('Unanswered questions count as missed.')}</span></p>`;
    if (rec.isRetry) h += `<p class="muted small">${t('Retry session')} (${t('kept separate from original attempts')})</p>`;
    h += `<div class="stack" style="margin-top:.6rem">${nMistakes() ? `<button class="btn primary block" data-action="start" data-mode="mistakes">🔁 ${t('Retry missed questions')}</button>` : ''}
      <button class="btn block" data-action="quickStart">⚡ ${t('Practice 10 more')}</button><button class="btn block ghost" data-nav="home">${t('Home')}</button></div></section>
      <div class="section-title"><h2>${t('Review your answers')}</h2></div>`;
    rec.qids.forEach((qid, i) => {
      const q0 = MAP[qid]; if (!q0) return;
      const q = LQ(q0), a = rec.answers[qid];
      const ok = a && a.correct;
      if (!a && !rec.isExam) { h += `<div class="card"><p class="muted">${i + 1}. ${t('Not answered:')} ${esc(q.question)}</p></div>`; return; }
      h += `<details class="card review-item" ${ok ? '' : 'open'} style="padding:.6rem .9rem"><summary><span class="pill ${ok ? 'ok' : 'bad'}" style="margin-right:.5rem">${ok ? '✓' : '✗'}</span>${i + 1}. ${esc(q.question)}</summary>
        ${q.image ? `<img src="${esc(q.image)}" alt="${esc(q.imageAlt)}" data-img-fallback="${esc(q.image)}">` : ''}${feedbackHtml(null, q0, rec)}</details>`;
    });
    return { title: view === 'review' ? t('Session review') : t('Results'), html: h };
  }

  // ---------- study hub ----------
  function vStudy() {
    const ids = BANK.map(q => q.id), d = E.dueCards(S, ids);
    const boxes = [1, 2, 3, 4, 5].map(b => Object.keys(S.cards || {}).filter(id => MAP[id] && S.cards[id].b === b).length);
    const nTips = BANK.filter(q => q.tip).length;
    const nImp = ((window.HANDBOOK || {}).highlights || []).length;
    const html = `<section class="card"><div class="row nowrap" style="gap:.9rem"><span class="t-ic ic-green" style="width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex:none" aria-hidden="true">🃏</span>
      <div style="flex:1"><h2 style="margin:0">${t('Flashcards')}</h2><p class="muted small" style="margin:0">${t('See the question, think of the answer, then flip. Cards you know come back less often.')}</p></div></div>
      <div class="boxes" style="margin:.8rem 0">${boxes.map((n, i) => `<div><b>${n}</b>${t('Box {n}', { n: i + 1 })}</div>`).join('')}</div>
      <p class="small"><b>${d.due.length}</b> ${t('due now')} · <b>${d.fresh.length}</b> ${t('new')} · <b>${d.learned}</b> ${t('learned')}</p>
      <div class="row nowrap"><button class="btn primary" style="flex:1" data-action="cards" data-deck="all">${t('Start flashcards')}</button><button class="btn" data-action="deckSheet">${t('Choose deck')}</button></div></section>
    <div class="section-title"><h2>${t('Cheat sheets')}</h2></div>
    <ul class="list">${STUDY.map(s => listItem(`data-action="openSheetView" data-id="${s.id}"`, s.icon, esc(L3(s.title)), t('{n} key facts', { n: s.items.length }))).join('')}</ul>
    <div class="section-title"><h2>${t('More ways to learn')}</h2></div>
    <ul class="list">${listItem('data-action="nav" data-to="tips"', '🧠', t('Memory tricks'), t('{n} easy ways to remember tricky rules', { n: nTips }), 'ic-purple')}
      ${listItem('data-action="nav" data-to="hbimp"', '⭐', t('Most important handbook rules'), t('{n} rules highlighted from the handbook', { n: nImp }), 'ic-yellow')}
      ${listItem('data-action="setup" data-mode="exam"', '📝', t('Practice exam'), t('Test yourself when you feel ready'), 'ic-blue')}</ul>
    <div class="section-title"><h2>${t('Learn by topic')}</h2></div>
    <ul class="list">${TOPICS.map(tp => listItem(`data-action="nav" data-to="learn" data-arg="${tp.key}"`, TOPIC_ICON[tp.key] || '•', esc(t(tp.name)), t('{n} rules with explanations', { n: BANK.filter(q => q.topic === tp.key).length }))).join('')}</ul>`;
    return { title: t('Study'), html };
  }
  function vSheet(id) {
    const s = STUDY.find(x => x.id === id); if (!s) return VIEWS.study();
    const html = `<section class="card" style="background:var(--accent2);border:0"><div style="font-size:2rem" aria-hidden="true">${s.icon}</div><p style="margin:.2rem 0 0;font-weight:650">${esc(L3(s.intro))}</p></section>
      <div class="facts">${s.items.map(it => `<div class="fact"><span class="k">${esc(L3(it[0]))}</span><span class="v">${esc(L3(it[1]))}</span>${it[2] ? `<img src="${esc(it[2])}" alt="" loading="lazy">` : ''}</div>`).join('')}</div>
      ${LANG !== 'en' ? `<p class="muted small" style="margin-top:.8rem">${t('Translated by machine (AI) and not yet checked by a native speaker. If something seems unclear, compare with the English version or the official handbook.')}</p>` : ''}
      <div class="stack" style="margin-top:1rem"><button class="btn primary block" data-action="practiceTopics" data-topics="${s.topics.join(',')}">⚡ ${t('Practice these rules (10 questions)')}</button>
      <button class="btn block" data-action="cards" data-deck="topics:${s.topics.join(',')}">🃏 ${t('Flashcards for these topics')}</button></div>`;
    return { title: L3(s.title), html };
  }
  function vTips() {
    const groups = TOPICS.map(tp => ({ tp, qs: BANK.filter(q => q.tip && q.topic === tp.key) })).filter(g => g.qs.length);
    const html = `<p class="muted">${t('Short tricks that help the hardest rules stick. Tap one to see the full question.')}</p>` + groups.map(g => `<div class="section-title"><h2>${TOPIC_ICON[g.tp.key] || ''} ${esc(t(g.tp.name))}</h2></div>` +
      g.qs.map(q0 => { const q = LQ(q0); return `<details class="card" style="padding:.5rem .9rem"><summary>💡 ${esc(q.tip)}</summary><p class="small muted" style="margin-top:.2rem">${esc(q.question)}</p>${q.image ? `<img src="${esc(q.image)}" alt="${esc(q.imageAlt)}" style="max-height:120px;max-width:100%;background:var(--figure-bg);border-radius:10px;padding:4px">` : ''}<p class="learn-card" style="border:0;padding:0"><span class="la">✓ ${esc(q.choices.find(c => c.correct).text)}</span></p><p class="small">${esc(stripCorrect(q.choices.find(c => c.correct).explain))}</p></details>`; }).join('')).join('');
    return { title: t('Memory tricks'), html };
  }
  function vLearn(key) {
    const qs = BANK.filter(q => q.topic === key);
    const html = `<p class="muted">${t('Each card shows a question with its answer and the reason. Read them, then test yourself.')}</p>
      <button class="btn primary block" data-action="topicPractice" data-topic="${key}" style="margin-bottom:.85rem">⚡ ${t('Practice this topic')}</button>` +
      qs.map((q0, i) => { const q = LQ(q0), c = q.choices.find(x => x.correct); return `<section class="card learn-card"><p class="small muted" style="margin:0">${i + 1}. ${esc(q.question)}</p>${q.image ? figure(q) : ''}
        <p class="la" style="margin:.35rem 0">✓ ${esc(c.text)}</p><p class="small" style="margin:0">${esc(stripCorrect(c.explain))}</p>${q.tip ? `<div class="tip small"><b>💡 ${t('Memory tip:')}</b>${esc(q.tip)}</div>` : ''}</section>`; }).join('') +
      `<button class="btn primary block" data-action="topicPractice" data-topic="${key}">⚡ ${t('Practice this topic')}</button>`;
    return { title: topicName(key), html };
  }

  // ---------- flashcards ----------
  let FC = null;
  function deckIds(deck) {
    if (deck === 'signs') return signPool().map(q => q.id);
    if (deck === 'mistakes') return E.activeMistakes(S, MAP);
    if (deck === 'bookmarks') return Object.keys(S.bookmarks).filter(id => MAP[id]);
    if (deck.indexOf('topic:') === 0) { const k = deck.slice(6); return BANK.filter(q => q.topic === k).map(q => q.id); }
    if (deck.indexOf('topics:') === 0) { const ks = deck.slice(7).split(','); return BANK.filter(q => ks.includes(q.topic)).map(q => q.id); }
    return BANK.map(q => q.id);
  }
  function deckName(deck) {
    if (deck === 'signs') return t('Road signs'); if (deck === 'mistakes') return t('My mistakes'); if (deck === 'bookmarks') return t('Bookmarks');
    if (deck.indexOf('topic:') === 0) return topicName(deck.slice(6));
    if (deck.indexOf('topics:') === 0) { const s = STUDY.find(x => x.topics.join(',') === deck.slice(7)); return s ? L3(s.title) : t('Flashcards'); }
    return t('All questions');
  }
  function startCards(deck) {
    const ids = deckIds(deck), d = E.dueCards(S, ids);
    let queue = d.due.slice(0, 20);
    if (queue.length < 20) queue = queue.concat(E.shuffle(d.fresh).slice(0, 20 - queue.length));
    if (!queue.length) { // nothing due: review the oldest learned cards anyway
      queue = ids.slice().sort((a, b) => ((S.cards[a] || {}).due || 0) - ((S.cards[b] || {}).due || 0)).slice(0, 20);
    }
    if (!queue.length) { toast(t('There are no cards in this deck yet.')); return; }
    FC = { deck, queue, i: 0, flipped: false, knew: 0, again: 0, total: queue.length };
    go('cards');
  }
  function deckSheet() {
    const decks = [['all', '📚'], ['signs', '🛑'], ['mistakes', '🔁'], ['bookmarks', '⭐']].concat(TOPICS.map(tp => ['topic:' + tp.key, TOPIC_ICON[tp.key] || '•']));
    openSheet(`<h2 id="sheetTitle">${t('Choose deck')}</h2><ul class="list">${decks.map(([k, ic]) => { const ids = deckIds(k), d = E.dueCards(S, ids); return ids.length ? listItem(`data-deck="${k}"`, ic, esc(deckName(k)), t('{a} due · {b} new', { a: d.due.length, b: d.fresh.length })) : ''; }).join('')}</ul>`,
      body => body.querySelectorAll('[data-deck]').forEach(b => b.addEventListener('click', () => { closeSheet(); startCards(b.dataset.deck); })));
  }
  function vCards() {
    if (!FC) return VIEWS.study();
    const top = `<div class="qtop"><button type="button" class="iconbtn" data-action="cardsClose" aria-label="${t('Close')}">✕</button>
      <div class="bar"><div style="width:${(FC.i / FC.total * 100).toFixed(1)}%"></div></div><span class="qcount">${Math.min(FC.i + 1, FC.total)}/${FC.total}</span></div>`;
    if (FC.i >= FC.queue.length) {
      return { focus: true, title: t('Flashcards'), html: top + `<section class="card" style="text-align:center"><div style="font-size:3rem">🎉</div><h2>${t('Round complete!')}</h2>
        <div class="statrow"><div class="statbox"><b style="color:var(--ok)">${FC.knew}</b><span>${t('Knew it')}</span></div><div class="statbox"><b style="color:var(--bad)">${FC.again}</b><span>${t('Again')}</span></div><div class="statbox"><b>${FC.total}</b><span>${t('Cards')}</span></div></div>
        <div class="stack"><button class="btn primary block" data-action="cards" data-deck="${esc(FC.deck)}">${t('Another round')}</button><button class="btn block" data-action="cardsClose">${t('Back to Study')}</button></div></section>` };
    }
    const q = LQ(MAP[FC.queue[FC.i]]), c = q.choices.find(x => x.correct), box = (S.cards[q.id] || {}).b;
    const html = top + `<p class="muted small" style="margin:0 0 .3rem">${esc(deckName(FC.deck))}${box ? ' · ' + t('Box {n}', { n: box }) : ' · ' + t('new')}</p>
      <div class="fc-wrap"><div class="fc ${FC.flipped ? 'flipped' : ''}" id="fc" role="button" tabindex="0" aria-label="${t(FC.flipped ? 'Card answer side. Tap to see the question.' : 'Card question side. Tap to see the answer.')}">
        <div class="fc-face fc-front" aria-hidden="${FC.flipped}"><p class="fc-q">${esc(q.question)}</p>${figure(q, false)}<p class="fc-hint">👆 ${t('Think of the answer, then tap to flip')}</p></div>
        <div class="fc-face fc-back" aria-hidden="${!FC.flipped}"><p class="muted small" style="margin:0">${t('Answer')}</p><p class="fc-a">${esc(c.text)}</p><p class="small">${esc(stripCorrect(c.explain))}</p>${q.tip ? `<div class="tip small"><b>💡 ${t('Memory tip:')}</b>${esc(q.tip)}</div>` : ''}</div></div></div>
      ${FC.flipped ? `<div class="fc-btns"><button class="btn again" data-action="fcGrade" data-k="0">✗ ${t('Again')}</button><button class="btn knew" data-action="fcGrade" data-k="1">✓ ${t('Knew it')}</button></div>
        <p class="muted small" style="text-align:center">${t('Swipe right if you knew it, left to see it again.')}</p>`
        : `<button class="btn primary block" data-action="fcFlip">${t('Show answer')}</button>`}`;
    return { focus: true, title: t('Flashcards'), html, bind: bindCards };
  }
  function bindCards() {
    const el = $('fc'); if (!el) return;
    const back = el.querySelector('.fc-back'), front = el.querySelector('.fc-front');
    const h = Math.max(front.scrollHeight, back.scrollHeight, 300); el.style.minHeight = h + 'px';
    el.addEventListener('click', () => { FC.flipped = !FC.flipped; render(); });
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); FC.flipped = !FC.flipped; render(); } });
    let sx = null;
    el.addEventListener('touchstart', e => { sx = e.touches.length === 1 ? e.touches[0].clientX : null; }, { passive: true });
    el.addEventListener('touchend', e => { if (sx === null || !FC.flipped) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 70) { e.preventDefault(); gradeCard(dx > 0); } });
  }
  function gradeCard(knew) {
    const id = FC.queue[FC.i];
    E.gradeCard(S, id, knew); persist();
    if (knew) FC.knew++; else { FC.again++; if (FC.queue.indexOf(id, FC.i + 1) < 0) FC.queue.splice(Math.min(FC.queue.length, FC.i + 4), 0, id); FC.total = FC.queue.length; }
    FC.i++; FC.flipped = false; render();
  }

  // ---------- handbook: text reader ----------
  const HB = window.HANDBOOK || { highlights: [], pages: 0, edition: '' };
  const HBP = window.HANDBOOK_PAGES || [];
  const HT = (window.HANDBOOK_TEXT || { chapters: [] }).chapters;
  const HB_COLORS = { green: 'Green', pink: 'Pink', blue: 'Blue' };
  const FONT_STEPS = [0.95, 1.05, 1.15, 1.3, 1.45];
  let HT_PLAIN = null, IMP_LOC = null;
  function htPlain() {
    if (!HT_PLAIN) {
      HT_PLAIN = [];
      HT.forEach((c, ci) => c.b.forEach((b, i) => { if (b[0] !== 'fig') HT_PLAIN.push({ c: ci, i, ty: b[0], txt: b[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>') }); }));
    }
    return HT_PLAIN;
  }
  function impLoc() {
    if (!IMP_LOC) { IMP_LOC = {}; HT.forEach((c, ci) => c.b.forEach((b, i) => { if (b[0] !== 'fig') for (const m of b[1].matchAll(/data-i="(\d+)"/g)) IMP_LOC[m[1]] = { c: ci, b: i }; })); }
    return IMP_LOC;
  }
  function hbMarks() {
    if (!S.handbookMarks || typeof S.handbookMarks !== 'object') S.handbookMarks = { hl: [], notes: [] };
    const m = S.handbookMarks; m.hl = m.hl || []; m.notes = m.notes || []; m.tx = m.tx || {}; m.tn = m.tn || {};
    return m;
  }
  function hbOpt(k, def) { return S.settings[k] === undefined ? def : S.settings[k]; }
  function chTitle(ci) { const c = HT[ci]; return c ? c.t : ''; }
  function vHandbook() {
    const m = hbMarks(), read = hbOpt('hbRead', {}), last = hbOpt('hbLast', null);
    const nMine = Object.keys(m.tx).length + Object.keys(m.tn).length + m.hl.length + m.notes.length;
    const langNote = LANG === 'en' ? '' : `<section class="card" style="background:var(--warn-bg);border:0"><p style="margin:0"><b>${t('The handbook is in English.')}</b> ${HANDBOOK_PDF[LANG]
      ? t('The DMV also publishes this handbook in {lang}:', { lang: LANGS[LANG] }) + ` <a href="${HANDBOOK_PDF[LANG]}" target="_blank" rel="noopener noreferrer">${t('official {lang} PDF on dmv.ca.gov', { lang: LANGS[LANG] })}</a>.`
      : t('The DMV does not publish this handbook in {lang}.', { lang: LANGS[LANG] })}</p></section>`;
    const html = `${langNote}
      ${last && HT[last.c] ? `<button type="button" class="card hero-card" data-action="hbOpen" data-c="${last.c}" data-b="${last.b}" style="width:100%;text-align:left;cursor:pointer"><span style="font-size:2rem" aria-hidden="true">📖</span><div><h3>${t('Continue reading')}</h3><p>${esc(chTitle(last.c))}</p></div></button>` : ''}
      <label class="field" for="hbSearch"><span class="sr">${t('Search the handbook')}</span><input id="hbSearch" type="search" placeholder="🔍 ${t('Search the handbook (for example: curb, 15 feet, BAC)')}" autocomplete="off"></label>
      <div id="hbResults"></div>
      <div id="hbHome">
      <ul class="list">${listItem('data-action="nav" data-to="hbimp"', '⭐', t('Important rules'), t('{n} rules highlighted from the handbook', { n: HB.highlights.length }), 'ic-yellow')}
        ${listItem('data-action="nav" data-to="hbmine"', '🖍️', t('My highlights and notes'), nMine ? t('{n} saved', { n: nMine }) : t('Tap any paragraph while reading to highlight it'), 'ic-green')}
        ${listItem('data-action="nav" data-to="hbpages"', '📄', t('Original pages'), t('See the printed pages with pictures and layout ({n} pages)', { n: HBP.length }), 'ic-blue')}</ul>
      <div class="section-title"><h2>${t('Chapters')}</h2><span class="muted small">${t('{a} of {b} read', { a: Object.keys(read).filter(k => HT[k]).length, b: HT.length })}</span></div>
      <ul class="list">${HT.map((c, ci) => { const m2 = c.t.match(/^(\d+)\.\s*(.*)$/); const num = m2 ? m2[1] : '•', name = m2 ? m2[2] : c.t; const done = read[ci];
        return `<li class="${done ? 'toc-done' : ''}"><button type="button" class="list-item" data-action="hbOpen" data-c="${ci}"><span class="toc-num" aria-hidden="true">${done ? '✓' : num}</span><span class="li-main"><span class="li-title">${esc(name)}</span><span class="li-sub">${t('Page {n}', { n: c.p - 6 })}${done ? ' · ' + t('Read') : ''}</span></span><span class="chev" aria-hidden="true">›</span></button></li>`; }).join('')}</ul>
      <p class="muted small">${t('California Driver’s Handbook, California Department of Motor Vehicles, licensed under')} <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC 4.0</a>. ${t('Edition {edition}. The text was reflowed for phones and the yellow highlights were added by this app; they are not part of the DMV\'s handbook.', { edition: esc(HB.edition) })}
        <a href="${HANDBOOK_PDF.en}" target="_blank" rel="noopener noreferrer">${t('Official PDF on dmv.ca.gov')}</a></p></div>`;
    return { title: t('Handbook'), html, bind: bindHbHome };
  }
  function bindHbHome() {
    const inp = $('hbSearch'), res = $('hbResults'), home = $('hbHome');
    let timer = null;
    inp.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const q = inp.value.trim().toLowerCase();
        home.hidden = q.length >= 2; if (q.length < 2) { res.innerHTML = ''; return; }
        const hits = htPlain().filter(x => x.txt.toLowerCase().includes(q)).slice(0, 40);
        const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
        res.innerHTML = hits.length ? `<p class="muted small">${t('{n} results', { n: hits.length })}${hits.length === 40 ? '+' : ''}</p><ul class="list">` + hits.map(x => {
          const p = x.txt.toLowerCase().indexOf(q), s = Math.max(0, p - 60), snip = (s ? '…' : '') + x.txt.slice(s, p + q.length + 90) + '…';
          return `<li><button type="button" class="list-item search-hit" data-action="hbOpen" data-c="${x.c}" data-b="${x.i}"><span class="li-main"><span class="li-sub">${esc(chTitle(x.c))}</span><span>${esc(snip).replace(re, mm => `<mark>${mm}</mark>`)}</span></span></button></li>`;
        }).join('') + '</ul>' : `<div class="empty"><span class="big">🔍</span>${t('No matches. Try a shorter word.')}</div>`;
      }, 180);
    });
  }
  function blocksHtml(ci) {
    const ch = HT[ci], m = hbMarks();
    let h = '', list = null, gal = false;
    const closeList = () => { if (list) { h += `</${list}>`; list = null; } };
    const closeGal = () => { if (gal) { h += '</div>'; gal = false; } };
    ch.b.forEach((b, i) => {
      const id = ci + '.' + i, ty = b[0];
      const isList = ty === 'li' || ty === 'li2' || ty === 'ol', isGal = ty === 'fig' && b[5];
      if (!isList) closeList();
      if (!isGal) closeGal();
      if (ty === 'fig') {
        if (isGal && !gal) { h += '<div class="gallery">'; gal = true; }
        const alt = b[4] || t('Picture from the handbook, page {n}', { n: b[2] - 6 });
        h += `<figure><img src="${esc(b[1])}" alt="${esc(alt)}" loading="lazy" style="aspect-ratio:1/${b[3]}" data-action="zoom" data-src="${esc(b[1])}" data-alt="${esc(alt)}">${b[4] ? `<figcaption>${esc(b[4])}</figcaption>` : ''}</figure>`;
        return;
      }
      const cls = [m.tx[id] ? 'hl-' + m.tx[id] : '', ty === 'li2' ? 'sub' : '', ty === 'cap' ? 'cap' : ''].filter(Boolean).join(' ');
      const note = m.tn[id] ? `<span class="note">${esc(m.tn[id].text)}</span>` : '';
      if (isList) {
        const want = ty === 'ol' ? 'ol' : 'ul';
        if (list !== want) { closeList(); h += want === 'ol' ? `<ol start="${esc(b[3] || 1)}">` : '<ul>'; list = want; }
        h += `<li data-b="${id}"${cls ? ` class="${cls}"` : ''}>${b[1]}${note}</li>`;
        return;
      }
      const tag = { h2: 'h2', h3: 'h3', h4: 'h4' }[ty] || 'p';
      h += `<${tag} data-b="${id}"${cls ? ` class="${cls}"` : ''}>${b[1]}</${tag}>${note}`;
    });
    closeList(); closeGal();
    return h;
  }
  let hbScrollHandler = null;
  function vHbChapter(arg) {
    const ci = Math.max(0, Math.min(HT.length - 1, +(arg && arg.c) || 0));
    const fs = FONT_STEPS[hbOpt('hbFont', 1)] || 1.05;
    const showImp = hbOpt('hbShowImportant', true);
    const read = hbOpt('hbRead', {});
    const html = `<div class="read-progress" id="readProg"></div>
      <div class="reader-tools"><span class="grow">${esc(HT[ci].t)}</span>
        <button class="iconbtn" data-action="hbFont" data-d="-1" aria-label="${t('Smaller text')}" style="font-size:.9rem;font-weight:800">A−</button>
        <button class="iconbtn" data-action="hbFont" data-d="1" aria-label="${t('Bigger text')}" style="font-size:1.15rem;font-weight:800">A+</button>
        <button class="iconbtn" data-action="hbImpToggle" aria-pressed="${showImp}" aria-label="${t('Show important parts')}" title="${t('Show important parts')}">${showImp ? '⭐' : '☆'}</button></div>
      <p class="muted small" style="margin:-.2rem 0 .6rem">${t('Tap a paragraph to highlight it, add a note, or see the original page.')}</p>
      <article class="reader ${showImp ? '' : 'no-imp'}" style="--rs:${fs}rem" lang="en"><h2 style="margin-top:0">${esc(HT[ci].t)}</h2>${blocksHtml(ci)}</article>
      <button class="btn block ${read[ci] ? '' : 'primary'}" data-action="hbMarkRead" data-c="${ci}" style="margin-top:1rem">${read[ci] ? '✓ ' + t('Chapter read') : t('Mark chapter as read')}</button>
      <div class="ch-nav">${ci > 0 ? `<button class="btn" data-action="hbOpen" data-c="${ci - 1}"><small>‹ ${t('Previous')}</small>${esc(HT[ci - 1].t)}</button>` : '<span></span>'}
        ${ci < HT.length - 1 ? `<button class="btn next" data-action="hbOpen" data-c="${ci + 1}"><small>${t('Next')} ›</small>${esc(HT[ci + 1].t)}</button>` : ''}</div>`;
    return { title: t('Handbook'), html, bind: () => bindHbChapter(ci, arg && arg.b) };
  }
  function bindHbChapter(ci, target) {
    const art = main.querySelector('.reader');
    art.addEventListener('click', e => {
      if (e.target.closest('a, img')) return;
      const el = e.target.closest('[data-b]'); if (!el) return;
      blockSheet(el.dataset.b);
    });
    if (target !== undefined && target !== null) {
      const el = art.querySelector(`[data-b="${ci}.${target}"]`);
      if (el) setTimeout(() => { el.scrollIntoView({ block: 'center' }); el.classList.add('flash'); }, 30);
    }
    S.settings.hbLast = { c: ci, b: target || 0 }; persist();
    if (hbScrollHandler) window.removeEventListener('scroll', hbScrollHandler);
    let tm = null;
    hbScrollHandler = () => {
      if (view !== 'hbch') { window.removeEventListener('scroll', hbScrollHandler); hbScrollHandler = null; return; }
      const pr = $('readProg'), max = document.documentElement.scrollHeight - innerHeight;
      if (pr) pr.style.width = (max > 0 ? Math.min(100, scrollY / max * 100) : 0) + '%';
      clearTimeout(tm);
      tm = setTimeout(() => {
        const els = art.querySelectorAll('[data-b]'); let cur = null;
        for (const el of els) { if (el.getBoundingClientRect().top > 70) { cur = el; break; } }
        if (cur) { S.settings.hbLast = { c: ci, b: +cur.dataset.b.split('.')[1] }; persist(); }
      }, 400);
    };
    window.addEventListener('scroll', hbScrollHandler, { passive: true });
  }
  function blockSheet(id) {
    const m = hbMarks(), [ci, bi] = id.split('.').map(Number), b = HT[ci] && HT[ci].b[bi]; if (!b) return;
    const cur = m.tx[id], note = m.tn[id];
    const txt = b[1].replace(/<[^>]+>/g, '');
    openSheet(`<h2 id="sheetTitle">${t('Paragraph')}</h2><p class="small muted" lang="en" style="max-height:5.5em;overflow:hidden">${esc(txt)}</p>
      <p class="small" style="font-weight:700;margin-bottom:0">${t('Highlight color')}</p>
      <div class="color-dots">${Object.entries(HB_COLORS).map(([k, n]) => `<button type="button" data-color="${k}" aria-pressed="${cur === k}" aria-label="${t(n)}" class="hb-swatch hb-${k}" style="border-radius:50%"></button>`).join('')}</div>
      <div class="sheet-actions">${cur ? `<button class="btn block" data-x="unhl">🧽 ${t('Remove highlight')}</button>` : ''}
        <button class="btn block" data-x="note">📝 ${note ? t('Edit note') : t('Add note')}</button>
        <button class="btn block" data-x="page">📄 ${t('See original page {n}', { n: b[2] - 6 })}</button>
        <button class="btn block ghost" data-x="close">${t('Close')}</button></div>`,
    body => {
      body.querySelectorAll('[data-color]').forEach(btn => btn.addEventListener('click', () => { m.tx[id] = btn.dataset.color; persist(); closeSheet(); refreshBlock(id); toast(t('Highlighted')); }));
      body.querySelectorAll('[data-x]').forEach(btn => btn.addEventListener('click', async () => {
        const x = btn.dataset.x; closeSheet();
        if (x === 'unhl') { delete m.tx[id]; persist(); refreshBlock(id); }
        else if (x === 'note') {
          const r = await hbNoteDialog(note); if (!r) return;
          if (r.del) delete m.tn[id]; else if (r.save) m.tn[id] = { text: r.save, t: Date.now() };
          persist(); render(); const el = main.querySelector(`[data-b="${id}"]`); if (el) el.scrollIntoView({ block: 'center' });
        } else if (x === 'page') go('hbpages', b[2]);
      }));
    });
  }
  function refreshBlock(id) {
    const el = main.querySelector(`[data-b="${id}"]`); if (!el) return;
    el.classList.remove('hl-green', 'hl-pink', 'hl-blue');
    const c = hbMarks().tx[id]; if (c) el.classList.add('hl-' + c);
  }
  function vHbImportant() {
    const loc = impLoc(), topics = [...new Set(HB.highlights.map(h => h.topic))];
    const html = `<p class="muted">${t('The most important rules, highlighted in yellow in the handbook. Tap one to read it in context.')}${LANG !== 'en' ? ' ' + t('The quoted rules are in English, as in the handbook.') : ''}</p>
      <label class="field" for="impFilter"><span class="sr">${t('Search the list')}</span><input id="impFilter" type="search" placeholder="🔍 ${t('for example: curb, 15 feet, BAC')}"></label>` +
      topics.map(tp => `<div class="imp-group"><div class="section-title"><h2>${esc(t(tp))}</h2></div><ul class="list">${HB.highlights.map((h, i) => [h, i]).filter(([h]) => h.topic === tp).map(([h, i]) => {
        const l = loc[i]; const act = l ? `data-action="hbOpen" data-c="${l.c}" data-b="${l.b}"` : `data-action="hbPage" data-page="${h.page}"`;
        return `<li data-text="${esc((h.text + ' ' + h.topic + ' ' + t(h.topic)).toLowerCase())}"><button type="button" class="list-item" ${act}><span class="li-main"><q lang="en" class="imp-item" style="padding:0">${esc(h.text)}</q><span class="li-sub">${l ? esc(chTitle(l.c)) : t('Page {n}', { n: esc(h.label) })}</span></span><span class="chev" aria-hidden="true">›</span></button></li>`;
      }).join('')}</ul></div>`).join('');
    return { title: t('Important rules'), html, bind: () => {
      $('impFilter').addEventListener('input', e => {
        const q = e.target.value.trim().toLowerCase();
        main.querySelectorAll('.imp-group li').forEach(li => { li.hidden = q && !li.dataset.text.includes(q); });
        main.querySelectorAll('.imp-group').forEach(g => { g.hidden = !g.querySelector('li:not([hidden])'); });
      });
    } };
  }
  function hbMarkText(x) { if (x.words !== undefined) return t('Highlight on page {page} ({n} words)', { page: x.label || x.page, n: x.words }); return x.text || t('Highlight'); }
  function vHbMine() {
    const m = hbMarks();
    const ids = [...new Set(Object.keys(m.tx).concat(Object.keys(m.tn)))].filter(id => { const [c, b] = id.split('.').map(Number); return HT[c] && HT[c].b[b]; })
      .sort((a, b) => { const [a1, a2] = a.split('.').map(Number), [b1, b2] = b.split('.').map(Number); return a1 - b1 || a2 - b2; });
    let h = '';
    if (!ids.length && !m.hl.length && !m.notes.length) h = `<div class="empty"><span class="big">🖍️</span>${t('You have not added any highlights or notes yet.')}<br>${t('Tap any paragraph while reading to highlight it')}.</div>`;
    if (ids.length) h += `<ul class="list">` + ids.map(id => {
      const [c, b] = id.split('.').map(Number), blk = HT[c].b[b], col = m.tx[id], note = m.tn[id];
      return `<li><button type="button" class="list-item" data-action="hbOpen" data-c="${c}" data-b="${b}"><span class="li-main"><span class="li-sub">${esc(chTitle(c))}</span><span ${col ? `class="hb-swatch hb-${col}"` : ''} lang="en">${esc(blk[1].replace(/<[^>]+>/g, '').slice(0, 160))}</span>${note ? `<span class="li-sub">📝 ${esc(note.text)}</span>` : ''}</span><span class="chev">›</span></button></li>`;
    }).join('') + `</ul>`;
    const pageItems = [...m.hl.map(x => ({ kind: 'hl', page: x.page, id: x.id, text: hbMarkText(x), color: x.color })), ...m.notes.map(n => ({ kind: 'note', page: n.page, id: n.id, text: n.text }))].sort((a, b) => a.page - b.page);
    if (pageItems.length) h += `<div class="section-title"><h2>${t('On the original pages')}</h2></div><ul class="list">` + pageItems.map(it => `<li class="list-item" style="cursor:default"><span class="li-main"><span class="${it.kind === 'hl' ? 'hb-swatch hb-' + esc(it.color) : ''}">${it.kind === 'note' ? '📝 ' : ''}${esc(it.text)}</span></span>
      <button class="btn sm" data-action="hbPage" data-page="${it.page}">${t('Page {n}', { n: esc((HBP[it.page - 1] || {}).label || it.page) })}</button><button class="btn sm danger" data-action="hbDelete" data-kind="${it.kind}" data-id="${esc(it.id)}" aria-label="${t('Delete')}">✕</button></li>`).join('') + '</ul>';
    h += `<p class="muted small">${t('Saved automatically with your progress (and included in Settings → Export progress).')}</p>`;
    return { title: t('My highlights and notes'), html: h };
  }

  // ---------- handbook: original page images ----------
  let hbPage = 1, hbTool = 'read', hbColor = 'green', hbDrag = null;
  const pctBox = r => `left:${(r[0] * 100).toFixed(2)}%;top:${(r[1] * 100).toFixed(2)}%;width:${((r[2] - r[0]) * 100).toFixed(2)}%;height:${((r[3] - r[1]) * 100).toFixed(2)}%`;
  function hbLayer() {
    const p = HBP[hbPage - 1]; if (!p) return '';
    const m = hbMarks();
    let h = '';
    if (hbOpt('hbShowImportant', true)) h += p.hl.map(r => { const info = HB.highlights[r[4]]; return `<span class="hb-imp" style="${pctBox(r)}" title="${esc(info ? t('Important ({topic})', { topic: t(info.topic) }) : t('Important'))}"></span>`; }).join('');
    if (hbOpt('hbShowMine', true)) {
      h += m.hl.filter(x => x.page === hbPage).map(x => x.rects.map(r => `<span class="hb-mine hb-${esc(x.color)}" data-mark="${esc(x.id)}" style="${pctBox(r)}" title="${t('My highlight')}"></span>`).join('')).join('');
      h += m.notes.filter(n => n.page === hbPage).map(n => `<button type="button" class="hb-note" data-note="${esc(n.id)}" style="left:${(n.x * 100).toFixed(2)}%;top:${(n.y * 100).toFixed(2)}%" aria-label="${t('Note:')} ${esc(n.text)}" title="${esc(n.text)}">📝</button>`).join('');
    }
    return h;
  }
  function hbHint() { return t({ read: 'Swipe left or right, or use Prev/Next, to turn pages. Pinch to zoom.', highlight: 'Drag across the words you want to highlight.', note: 'Click where you want to put a note.', erase: 'Click one of your highlights to remove it. Notes are removed by clicking them.' }[hbTool]); }
  function vHbPages(arg) {
    if (arg) hbPage = Math.min(Math.max(1, +arg), HBP.length || 1);
    const p = HBP[hbPage - 1] || { img: '', ratio: 1.3, label: '' };
    const tools = [['read', '👆 ' + t('Read')], ['highlight', '🖍 ' + t('Highlight')], ['note', '📝 ' + t('Add note')], ['erase', '🧽 ' + t('Erase')]];
    const html = `<div class="pg-bar"><button class="btn sm" data-action="hbPrev" ${hbPage <= 1 ? 'disabled' : ''} aria-label="${t('Previous page')}">‹</button>
        <label for="hbPage" class="sr">${t('Page')}</label><input id="hbPage" type="number" inputmode="numeric" min="1" max="${HBP.length}" value="${hbPage}">
        <span class="muted small" style="flex:1">${t('of {n}', { n: HBP.length })}${p.label && p.label !== String(hbPage) ? ` · ${t('printed page {n}', { n: esc(p.label) })}` : ''}</span>
        <button class="btn sm" data-action="hbNext" ${hbPage >= HBP.length ? 'disabled' : ''} aria-label="${t('Next page')}">›</button></div>
      <div class="pg-tools" role="toolbar" aria-label="${t('Tool')}">${tools.map(([k, n]) => `<button type="button" class="chip" data-tool="${k}" aria-pressed="${hbTool === k}">${n}</button>`).join('')}
        ${hbTool === 'highlight' ? Object.entries(HB_COLORS).map(([k, n]) => `<button type="button" class="chip" data-hcolor="${k}" aria-pressed="${hbColor === k}"><span class="hb-swatch hb-${k}">${t(n)}</span></button>`).join('') : ''}
        <button type="button" class="chip" data-toggle="hbShowImportant" aria-pressed="${hbOpt('hbShowImportant', true)}">⭐ ${t('Important')}</button>
        <button type="button" class="chip" data-toggle="hbShowMine" aria-pressed="${hbOpt('hbShowMine', true)}">🖍 ${t('Mine')}</button></div>
      <p class="muted small" id="hbHint" style="margin:.1rem 0 .5rem">${hbHint()}</p>
      <div class="hb-page tool-${hbTool}" id="hbPageBox" style="aspect-ratio: 1 / ${p.ratio}">
        <img src="${esc(p.img)}" alt="${t('Handbook page {n}', { n: hbPage })}" draggable="false" data-img-fallback="${esc(p.img)}">
        <div class="hb-layer" id="hbLayer">${hbLayer()}</div></div>
      <div class="row nowrap" style="margin-top:.8rem"><button class="btn" style="flex:1" data-action="hbPrev" ${hbPage <= 1 ? 'disabled' : ''}>‹ ${t('Prev')}</button><button class="btn" style="flex:1" data-action="hbNext" ${hbPage >= HBP.length ? 'disabled' : ''}>${t('Next')} ›</button></div>
      <section class="card" id="hbOffline" style="margin-top:1rem" ${'caches' in window && navigator.serviceWorker ? '' : 'hidden'}><h3>${t('Read offline')}</h3>
        <p class="muted small">${t('Pages you open are saved automatically. To save all {n} pages now (about 21 MB), tap the button while you are online.', { n: HBP.length })}</p>
        <button class="btn block" data-action="hbCacheAll">${t('Save all handbook pages for offline')}</button><p id="hbCacheMsg" class="muted small" role="status"></p></section>`;
    return { title: t('Original pages'), html, bind: bindHbPages };
  }
  function hbGoPage(n) { hbPage = Math.min(Math.max(1, n || 1), HBP.length || 1); history.replaceState({ v: 'hbpages', a: hbPage }, ''); viewArg = hbPage; render(); }
  function hbRefreshLayer() { const l = $('hbLayer'); if (l) l.innerHTML = hbLayer(); }
  function hbPoint(e) {
    const r = $('hbPageBox').getBoundingClientRect();
    return [Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))];
  }
  function hbWordsIn(rect) { // snap a dragged box to the words it touches, one box per text line
    const p = HBP[hbPage - 1]; const [x0, y0, x1, y1] = rect;
    const hit = p.w.filter(w => w[2] > x0 && w[0] < x1 && w[3] > y0 && w[1] < y1).sort((a, b) => (a[1] + a[3]) - (b[1] + b[3]) || a[0] - b[0]);
    const lines = [];
    for (const w of hit) {
      const yc = (w[1] + w[3]) / 2, ln = lines.find(l => Math.abs(l.yc - yc) < (w[3] - w[1]) * 0.6);
      if (ln) { ln.r[0] = Math.min(ln.r[0], w[0]); ln.r[1] = Math.min(ln.r[1], w[1]); ln.r[2] = Math.max(ln.r[2], w[2]); ln.r[3] = Math.max(ln.r[3], w[3]); }
      else lines.push({ yc, r: w.slice(0, 4) });
    }
    return lines.map(l => l.r.map(v => Math.round(v * 10000) / 10000));
  }
  function hbNewId() { return 'm' + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36); }
  function hbNoteDialog(note) {
    const d = $('noteDlg'), ta = $('noteText');
    ta.value = note ? note.text : '';
    $('noteDelete').hidden = !note;
    return new Promise(res => {
      const done = v => { d.close(); res(v); };
      $('noteSave').onclick = () => done({ save: ta.value.trim() });
      $('noteDelete').onclick = () => done({ del: true });
      $('noteCancel').onclick = () => done(null);
      d.oncancel = () => done(null);
      d.showModal(); ta.focus();
    });
  }
  async function hbEditNote(note, pos) {
    const r = await hbNoteDialog(note); if (!r) return;
    const m = hbMarks();
    if (r.del && note) m.notes = m.notes.filter(n => n.id !== note.id);
    else if (r.save) { if (note) note.text = r.save; else m.notes.push({ id: hbNewId(), page: hbPage, x: pos[0], y: pos[1], text: r.save, t: Date.now() }); }
    persist(); hbRefreshLayer();
  }
  async function hbCacheAll(btn) {
    const msg = $('hbCacheMsg');
    try {
      btn.disabled = true;
      const cache = await caches.open('dmv-handbook-pages-v1');
      let done = 0;
      for (const p of HBP) {
        if (!(await cache.match(p.img))) { const r = await fetch(p.img); if (!r.ok) throw new Error(p.img); await cache.put(p.img, r); }
        done++; if (msg) msg.textContent = t('Saved {done} of {total} pages…', { done, total: HBP.length });
      }
      if (msg) msg.textContent = '✓ ' + t('All {n} pages are saved for offline reading.', { n: HBP.length });
    } catch (e) { if (msg) msg.textContent = t('Could not save every page ({err}). Check your internet connection and try again.', { err: e.message }); }
    finally { btn.disabled = false; }
  }
  function bindHbPages() {
    const box = $('hbPageBox');
    const inp = $('hbPage');
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); hbGoPage(+e.target.value); } });
    inp.addEventListener('change', e => hbGoPage(+e.target.value));
    main.querySelectorAll('[data-tool]').forEach(b => b.addEventListener('click', () => { hbTool = b.dataset.tool; render(); }));
    main.querySelectorAll('[data-hcolor]').forEach(b => b.addEventListener('click', () => { hbColor = b.dataset.hcolor; main.querySelectorAll('[data-hcolor]').forEach(x => x.setAttribute('aria-pressed', x === b)); }));
    main.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => { const k = b.dataset.toggle; S.settings[k] = !hbOpt(k, true); persist(); b.setAttribute('aria-pressed', S.settings[k]); hbRefreshLayer(); }));
    box.addEventListener('pointerdown', e => {
      if (e.target.closest('.hb-note')) return;
      if (hbTool === 'highlight') {
        e.preventDefault(); try { box.setPointerCapture(e.pointerId); } catch (err) { /* optional */ }
        const p0 = hbPoint(e); const tmp = document.createElement('span'); tmp.className = 'hb-drag'; $('hbLayer').appendChild(tmp);
        hbDrag = { p0, tmp };
      } else if (hbTool === 'erase') {
        const mk = e.target.closest('.hb-mine');
        if (mk) { const m = hbMarks(); m.hl = m.hl.filter(x => x.id !== mk.dataset.mark); persist(); hbRefreshLayer(); }
      } else if (hbTool === 'note') { e.preventDefault(); hbEditNote(null, hbPoint(e)); }
    });
    box.addEventListener('pointermove', e => {
      if (!hbDrag) return;
      const p1 = hbPoint(e), r = [Math.min(hbDrag.p0[0], p1[0]), Math.min(hbDrag.p0[1], p1[1]), Math.max(hbDrag.p0[0], p1[0]), Math.max(hbDrag.p0[1], p1[1])];
      hbDrag.tmp.setAttribute('style', pctBox(r));
    });
    box.addEventListener('pointerup', e => {
      if (!hbDrag) return;
      const p1 = hbPoint(e), r = [Math.min(hbDrag.p0[0], p1[0]), Math.min(hbDrag.p0[1], p1[1]), Math.max(hbDrag.p0[0], p1[0]), Math.max(hbDrag.p0[1], p1[1])];
      hbDrag.tmp.remove(); hbDrag = null;
      if (r[2] - r[0] < 0.004 && r[3] - r[1] < 0.004) return;
      let rects = hbWordsIn(r); if (!rects.length) rects = [r.map(v => Math.round(v * 10000) / 10000)];
      const p = HBP[hbPage - 1];
      const words = p.w.filter(w => rects.some(q => w[0] < q[2] && w[2] > q[0] && w[1] < q[3] && w[3] > q[1])).length;
      hbMarks().hl.push({ id: hbNewId(), page: hbPage, label: p.label || String(hbPage), words, rects, color: hbColor, t: Date.now() });
      persist(); hbRefreshLayer();
    });
    box.addEventListener('pointercancel', () => { if (hbDrag) { hbDrag.tmp.remove(); hbDrag = null; } });
    let sw = null;
    box.addEventListener('touchstart', e => { sw = (hbTool === 'read' && e.touches.length === 1) ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null; }, { passive: true });
    box.addEventListener('touchend', e => {
      if (!sw || hbTool !== 'read' || (window.visualViewport && window.visualViewport.scale > 1.05)) { sw = null; return; }
      const tt = e.changedTouches[0], dx = tt.clientX - sw.x, dy = tt.clientY - sw.y; sw = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) hbGoPage(hbPage + (dx < 0 ? 1 : -1));
    }, { passive: true });
    box.addEventListener('click', e => { const nb = e.target.closest('.hb-note'); if (!nb) return; const note = hbMarks().notes.find(n => n.id === nb.dataset.note); if (note) hbEditNote(note); });
  }

  // ---------- progress ----------
  function vProgress() {
    const L = E.lifetime(S), rd = E.readiness(S, MAP), act = E.activity(S), goal = S.settings.dailyGoal || 20;
    const ts = E.topicStats(S, MAP, TOPICS), weak = E.weakestTopics(S, MAP, TOPICS);
    const mist = Object.entries(S.mistakes).filter(([id]) => MAP[id]);
    const active = mist.filter(([, m]) => !m.resolved), resolved = mist.filter(([, m]) => m.resolved);
    const days = []; const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - 13);
    for (let i = 0; i < 14; i++) { const k = E.dayKey(d.getTime()), n = act.days[k] || 0; days.push(`<span class="${n >= goal ? 'l3' : n >= goal / 2 ? 'l2' : n ? 'l1' : ''} ${i === 13 ? 'today' : ''}" title="${k}: ${n}"></span>`); d.setDate(d.getDate() + 1); }
    let h = `<section class="card" style="display:flex;gap:1rem;align-items:center">${ring(rd.masteredPct, t('mastered'))}<div><h2 style="margin:0">${t('Test readiness')}</h2>
      <p class="small">${t('{m} of {n} questions mastered (your last answer was right).', { m: rd.mastered, n: rd.total })}</p>
      <p class="small muted">${rd.recentN ? t('Recent accuracy: {p}', { p: rd.recentPct + '%' }) + ' · ' + t('last {n} answers', { n: rd.recentN }) : t('Answer a few questions to see your score.')}</p></div></section>
      <section class="card"><div class="row" style="justify-content:space-between"><b>🔥 ${t(act.streak === 1 ? '{n}-day streak' : '{n}-day streak', { n: act.streak })}</b><span class="muted small">${t('Today: {a} of {b}', { a: act.today, b: goal })}</span></div>
        <div class="week" aria-label="${t('Last 14 days')}">${days.join('')}</div><p class="muted small" style="margin-bottom:0">${t('Last 14 days. Darker = more practice. Daily goal: {n} answers (change it in Settings).', { n: goal })}</p></section>
      <div class="statrow"><div class="statbox"><b>${L.attempts}</b><span>${t('answers')}</span></div><div class="statbox"><b>${L.accuracyText}</b><span>${t('Accuracy')}</span></div><div class="statbox"><b>${L.uniqueAttempted}/${BANK.length}</b><span>${t('seen')}</span></div></div>`;
    if (weak.length) h += `<div class="section-title"><h2>${t('Focus on these')}</h2></div><ul class="list">${weak.map(tp => listItem(`data-action="topicPractice" data-topic="${tp.key}"`, TOPIC_ICON[tp.key] || '•', esc(t(tp.name)), t('{p}% of {n} attempts', { p: tp.accuracy, n: tp.attempts }) + ' · ' + t('Practice this topic'), 'ic-red')).join('')}</ul>`;
    h += `<div class="section-title"><h2>${t('Accuracy by topic')}</h2></div><ul class="list">${ts.map(tp => `<li><button type="button" class="list-item topic-row" data-action="topicSheet" data-topic="${tp.key}" style="display:grid"><b>${TOPIC_ICON[tp.key] || ''} ${esc(t(tp.name))}</b><span>${tp.accuracy === null ? '—' : tp.accuracy + '%'} · ${t('{a} of {b}', { a: tp.seen, b: tp.bank })}</span><div class="bar ${tp.accuracy >= 85 ? 'ok' : ''}"><div style="width:${tp.accuracy || 0}%"></div></div></button></li>`).join('')}</ul>`;
    h += `<div class="section-title"><h2>${t('Mistakes')}</h2></div><section class="card"><p style="margin-top:0">${t('{a} to retry · {b} improved (two correct retries in a row).', { a: active.length, b: resolved.length })}</p>
      ${active.length ? `<button class="btn primary block" data-action="start" data-mode="mistakes">🔁 ${t('Retry my mistakes')}</button>` : ''}
      ${mist.length ? `<details><summary>${t('See the list')}</summary><ul class="allchoices">${mist.sort((a, b) => b[1].lastMiss - a[1].lastMiss).slice(0, 60).map(([id, m]) => `<li><span class="pill ${m.resolved ? 'ok' : 'bad'}">${m.resolved ? '✓ ' + t('Improved') : t('To retry')}</span> ${esc(LQ(MAP[id]).question)} <span class="muted small">· ${t('Misses')}: ${m.misses} · ${t('Retries')}: ${m.retries.length ? m.retries.map(r => r.c ? '✓' : '✗').join(' ') : '—'}</span></li>`).join('')}</ul></details>` : ''}</section>`;
    h += `<div class="section-title"><h2>${t('Session history')}</h2></div>` + (S.history.length ? `<ul class="list">${S.history.slice(0, 50).map(r => { const den = r.isExam ? r.total : r.answered, p = E.accuracy(r.correct, den);
      return `<li><button type="button" class="list-item" data-action="review" data-id="${r.id}"><span class="score-dot ${p === null ? '' : p >= E.APP_STUDY_TARGET ? 'ok' : p < 70 ? 'bad' : ''}">${p === null ? '—' : p + '%'}</span><span class="li-main"><span class="li-title">${esc(sessLabel(r))}</span><span class="li-sub">${fmtDate(r.startedAt)} · ${r.correct}/${den}${r.isRetry ? ' · ' + t('retry') : ''}${r.complete ? '' : ' · ' + t('ended early')}</span></span><span class="chev">›</span></button></li>`; }).join('')}</ul>`
      : `<div class="empty"><span class="big">📈</span>${t('No completed sessions yet.')}</div>`);
    h += `<p class="muted small">${t('Session scores, lifetime attempts, and unique-question progress are counted separately, so repeating a question never inflates your session score.')}</p>`;
    return { title: t('My Progress'), html: h };
  }

  // ---------- more, settings, sources, help ----------
  function vMore() {
    const html = `<ul class="list">${listItem('data-action="langSheet"', '🌐', t('Language'), LANGS[LANG], 'ic-blue')}
        ${listItem('data-action="nav" data-to="settings"', '⚙️', t('Settings'), t('Theme, text size, daily goal, backups'), 'ic-purple')}
        ${listItem('data-action="nav" data-to="help"', '❓', t('Help'), t('How it works and how to install the app'), 'ic-green')}
        ${listItem('data-action="nav" data-to="sources"', '🔗', t('Sources'), t('Official references and credits'), 'ic-orange')}</ul>
      <section class="card"><p style="margin-top:0"><b>${esc(t(META.notice))}</b></p><p class="muted small">${t('Content checked against the official online handbook on {date}. Questions are original practice questions, not real DMV test questions. Using this app does not guarantee you will pass.', { date: esc(META.checkedDate) })}</p>
      <p class="muted small">${t('Question bank: <b>{n}</b> questions, <b>{v}</b> with a sign or diagram picture.', { n: BANK.length, v: BANK.filter(q => q.image).length })}</p></section>`;
    return { title: t('More'), html };
  }
  const THEMES = [['light', 'Light', '#ffffff', '#1f5fbf'], ['dark', 'Dark', '#1c2026', '#6ea8ff'], ['california', 'California', '#fbf4e6', '#0b6e99'], ['contrast', 'High Contrast', '#000000', '#ffff00']];
  function vSettings() {
    const s = S.settings;
    const html = `<section class="card"><h2>${t('Language')}</h2>
      <div class="seg" role="radiogroup" aria-label="${t('Language')}">${Object.entries(LANGS).map(([k, n]) => `<label><input type="radio" name="language" value="${k}" ${LANG === k ? 'checked' : ''}><span lang="${k}">${n}</span></label>`).join('')}</div>
      <p class="muted small">${t('Spanish and Portuguese translations were made by machine (AI) and have not been checked by a native speaker. The handbook stays in English.')}</p></section>
    <section class="card"><h2>${t('Appearance')}</h2>
      <div class="themes" role="radiogroup" aria-label="${t('Theme')}">${THEMES.map(([k, n, bg, ac]) => `<label><input type="radio" name="theme" value="${k}" ${s.theme === k ? 'checked' : ''}><span class="swatch" style="background:linear-gradient(135deg, ${bg} 55%, ${ac} 55%)" aria-hidden="true"></span>${t(n)}</label>`).join('')}</div>
      <div class="field" style="margin-top:.9rem">${t('Text size')}<div class="seg" role="radiogroup" aria-label="${t('Text size')}">${[['small', 'Small'], ['medium', 'Medium'], ['large', 'Large']].map(([k, n]) => `<label><input type="radio" name="textSize" value="${k}" ${s.textSize === k ? 'checked' : ''}><span>${t(n)}</span></label>`).join('')}</div></div>
      <label class="switch">${t('Reduce motion (turn off all transitions)')}<input type="checkbox" id="reduceMotion" ${s.reducedMotion ? 'checked' : ''}></label></section>
    <section class="card"><h2>${t('Daily goal')}</h2><p class="muted small">${t('How many answers (questions or flashcards) you want to do each day.')}</p>
      <div class="seg" role="radiogroup" aria-label="${t('Daily goal')}">${[10, 20, 30, 50].map(n => `<label><input type="radio" name="dailyGoal" value="${n}" ${(s.dailyGoal || 20) === n ? 'checked' : ''}><span>${n}</span></label>`).join('')}</div></section>
    <section class="card"><h2>${t('Your progress data')}</h2>
      <p class="small">${t('Your progress is saved <b>only on this phone or tablet, inside this browser</b>. It is tied to the browser you use and the app\'s address. If you use a different browser, delete the home-screen app, or clear this browser\'s history/site data, the saved progress may disappear. Make a backup file now and then.')}</p>
      <div class="stack"><button class="btn primary block" data-action="export">${t('Export progress (save or share a backup file)')}</button>
        <label class="btn block" for="importFile">${t('Import progress from a backup file')}</label><input type="file" id="importFile" accept=".json,application/json" class="sr">
        <button class="btn danger block" data-action="reset">${t('Reset all progress…')}</button></div>
      <p class="muted small">${t('Reset keeps your appearance settings and handbook highlights/notes. Import replaces your current progress with the file\'s contents.')}</p></section>`;
    return { title: t('Settings'), html, bind: bindSettings };
  }
  function bindSettings() {
    main.querySelectorAll('input[name="language"]').forEach(r => r.addEventListener('change', () => setLanguage(r.value)));
    main.querySelectorAll('input[name="theme"]').forEach(r => r.addEventListener('change', () => { S.settings.theme = r.value; applySettings(); persist(); }));
    main.querySelectorAll('input[name="textSize"]').forEach(r => r.addEventListener('change', () => { S.settings.textSize = r.value; applySettings(); persist(); }));
    main.querySelectorAll('input[name="dailyGoal"]').forEach(r => r.addEventListener('change', () => { S.settings.dailyGoal = +r.value; persist(); toast(t('Daily goal: {n} answers', { n: r.value })); }));
    $('reduceMotion').addEventListener('change', e => { S.settings.reducedMotion = e.target.checked; applySettings(); persist(); });
    $('importFile').addEventListener('change', e => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onerror = () => showBanner(t('The file could not be read. Try choosing it again.'));
      rd.onload = async () => {
        const r = E.importData(String(rd.result));
        e.target.value = '';
        if (!r.ok) { showBanner(t(r.error)); return; }
        const ok = await confirmBox(t('Replace your progress?'), t('This backup has {a} answer attempts and {s} sessions. Importing replaces the progress currently saved in this browser.', { a: r.state.attempts.length, s: r.state.history.length }), t('Import and replace'));
        if (!ok) return;
        const keepLang = LANG;
        S = r.state; S.settings.language = keepLang; applySettings(); persist(); banner.hidden = true; go('progress');
      };
      rd.readAsText(f);
    });
  }
  function vSources() {
    const html = `<section class="card"><p style="margin-top:0"><b>${esc(t(META.notice))}</b></p><p class="small">${esc(t(META.checkedNote))}</p></section>
    <section class="card"><h2>${t('Official references')}</h2>${LANG !== 'en' ? `<p class="muted small">${t('These official pages are in English.')}</p>` : ''}<ul>${Object.values(SOURCES).map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" lang="en">${esc(s.title)}</a></li>`).join('')}
      ${HANDBOOK_PDF[LANG] && LANG !== 'en' ? `<li><a href="${HANDBOOK_PDF[LANG]}" target="_blank" rel="noopener noreferrer">${t('official {lang} PDF on dmv.ca.gov', { lang: LANGS[LANG] })}</a></li>` : ''}</ul>
      <p class="muted small">${t('Links open the official websites in your browser and need an internet connection. Practice itself works offline.')}</p></section>
    <section class="card"><h2>${t('About the questions')}</h2><p class="small">${t('All {n} questions are original practice questions written from the handbook rules. They are not actual DMV exam questions. Each question links to the handbook section it is based on.', { n: BANK.length })}</p>
      ${LANG !== 'en' ? `<p class="small">${t('Spanish and Portuguese translations were made by machine (AI) and have not been checked by a native speaker. The handbook stays in English.')}</p>` : ''}
      <ul class="small">${TOPICS.map(tp => `<li>${esc(t(tp.name))}: ${BANK.filter(q => q.topic === tp.key).length}</li>`).join('')}</ul></section>
    <section class="card"><h2>${t('About the handbook')}</h2><p class="small">${t('The handbook text in this app was converted from the official PDF so it fits phone screens. Pictures were cropped from the same pages. If anything looks different, the original pages and the PDF on dmv.ca.gov are the reference.')}</p></section>
    <section class="card"><h2>${t('About the pictures')}</h2><p class="small">${t('Most road-sign pictures are public-domain vector copies of the official federal sign designs (MUTCD), from Wikimedia Commons, stored in the app so they work offline. A few California-specific or special signs (such as turnout, yield-to-uphill, rest area, and hazardous-load placards), plus all traffic-light and driving diagrams, are drawn for this app using the shapes, colors, and wording shown in the handbook\'s sign charts. Road signs keep their English wording, as on real California roads. Pictures are never recolored by themes.')} <a href="https://github.com/paranoia1x/Daily-DMV-Mobile/blob/main/docs/CREDITS.md" target="_blank" rel="noopener noreferrer">docs/CREDITS.md</a></p></section>
    <section class="card"><h2>${t('About the Practice Exam')}</h2><p class="small">${t('The handbook says the knowledge test uses multiple choice questions and that applicants get three attempts. It does not list the current number of questions or the passing score, so this app\'s exam lengths (25 or 50) and its {p}% study target are the app\'s own choices, not DMV requirements.', { p: E.APP_STUDY_TARGET })}</p></section>`;
    return { title: t('Sources'), html };
  }
  function vHelp() {
    const html = `<section class="card"><h2>${t('How it works')}</h2><ol class="small"><li>${t('Pick something on Home: quick practice, a practice exam, road signs, or a topic.')}</li><li>${t('Tap an answer, then tap <b>Check answer</b>.')}</li><li>${t('Read why it is right or wrong, then tap <b>Continue</b>.')}</li><li>${t('Use <b>Study</b> for flashcards, cheat sheets, and memory tricks, and <b>Handbook</b> to read the official rules.')}</li></ol>
      <p class="small">${t('No account is needed. After the first visit, the app also works <b>offline</b>.')}</p></section>
    <section class="card"><h2>${t('A good way to study')}</h2><ol class="small"><li>${t('Read a cheat sheet or a handbook chapter.')}</li><li>${t('Do 10 quick questions on that topic.')}</li><li>${t('Review flashcards every day. Cards you miss come back sooner.')}</li><li>${t('Retry your mistakes until they are gone.')}</li><li>${t('Take a practice exam. Aim for {p}% or more a few times in a row.', { p: E.APP_STUDY_TARGET })}</li></ol></section>
    <section class="card"><h2>${t('Add it to your home screen')}</h2><ul class="small">
      <li>${t('<b>iPhone / iPad (Safari):</b> tap the <b>Share</b> button, then <b>Add to Home Screen</b>.')}</li>
      <li>${t('<b>Android (Chrome):</b> tap the <b>⋮</b> menu, then <b>Add to Home screen</b> or <b>Install app</b>.')}</li></ul>
      <p class="small">${t('It then opens full-screen like a normal app. Your progress stays on this device.')}</p></section>
    <section class="card"><h2>${t('Saving and backups')}</h2><p class="small">${t('Progress saves automatically on this device. Clearing browser data or removing the home-screen app can erase it, so use <b>Settings → Export progress</b> to save or share a backup file, and <b>Import</b> to restore it.')}</p></section>`;
    return { title: t('Help'), html };
  }

  const VIEWS = { home: vHome, quiz: vQuiz, results: vResults, review: vResults, study: vStudy, sheet: vSheet, tips: vTips, learn: vLearn, cards: vCards,
    handbook: vHandbook, hbch: vHbChapter, hbimp: vHbImportant, hbmine: vHbMine, hbpages: vHbPages, progress: vProgress, more: vMore, settings: vSettings, sources: vSources, help: vHelp };

  // ---------- quiz actions ----------
  function setSelection(orig) {
    const sess = S.active; if (!sess) return;
    const qid = sess.qids[sess.index];
    if (!E.select(sess, qid, orig)) return;
    persist();
    main.querySelectorAll('.choice').forEach(l => { const on = +l.dataset.orig === orig; l.classList.toggle('selected', on); l.querySelector('input').checked = on; });
    const sb = document.querySelector('[data-action="submit"]'); if (sb) sb.disabled = false;
    if (sess.isExam) { const st = E.sessionStats(sess); const p = main.querySelector('.score .pill'); if (p) p.textContent = t('{n} answered', { n: st.answered }); const bar = main.querySelector('.qtop .bar > div'); if (bar) bar.style.width = (st.answered / st.total * 100).toFixed(1) + '%'; }
  }
  function doSubmit() {
    const sess = S.active; if (!sess || sess.isExam) return;
    const q = MAP[sess.qids[sess.index]];
    if (!E.submit(S, sess, q)) return;
    persist(); render();
    const fb = $('feedback'); if (fb) { const top = fb.getBoundingClientRect().top + scrollY - 80; if (top > scrollY + innerHeight * 0.45) window.scrollTo({ top: Math.max(0, top - innerHeight * 0.35), behavior: S.settings.reducedMotion ? 'auto' : 'smooth' }); }
    const v = $('verdict'); if (v) v.focus({ preventScroll: true });
  }
  function doNext() {
    const sess = S.active; if (!sess) return;
    if (!sess.isExam && !sess.answers[sess.qids[sess.index]]) return;
    if (sess.index < sess.qids.length - 1) { sess.index++; persist(); render(); window.scrollTo(0, 0); const q = $('qtext'); if (q) q.focus({ preventScroll: true }); return; }
    const rec = E.archiveSession(S, sess); persist(); go('results', rec.id, { replace: true });
  }
  async function endSession() {
    const sess = S.active; if (!sess) return;
    const ok = await confirmBox(t('End this session?'), sess.isExam ? t('Ending now will grade the exam. Unanswered questions count as missed.') : t('Your answers so far are saved to your history.'), t('End session'));
    if (!ok) return;
    if (sess.isExam) E.finishExam(S, sess, MAP);
    const rec = E.archiveSession(S, sess); persist();
    if (S.history[0] && S.history[0].id === rec.id) go('results', rec.id, { replace: view === 'quiz' }); else go('home');
  }
  async function finishExam() {
    const sess = S.active; if (!sess || !sess.isExam) return;
    const st = E.sessionStats(sess);
    const ok = await confirmBox(t('Finish the practice exam?'), st.remaining ? t(st.remaining > 1 ? 'You have {n} unanswered questions. They will count as missed. You can cancel to go back and review.' : 'You have {n} unanswered question. It will count as missed. You can cancel to go back and review.', { n: st.remaining }) : t('All questions are answered. After finishing you will see your score and explanations. Answers can no longer be changed.'), t('Finish and see results'));
    if (!ok) return;
    E.finishExam(S, sess, MAP); const rec = E.archiveSession(S, sess); persist(); go('results', rec.id, { replace: true });
  }
  async function exportProgress() {
    const name = 'dmv-practice-progress-' + new Date().toISOString().slice(0, 10) + '.json';
    try {
      const file = new File([E.exportData(S)], name, { type: 'application/json' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: t('DMV practice progress backup') }); return; }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    try {
      const blob = new Blob([E.exportData(S)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch (e) { showBanner(t('The backup file could not be created: {err}', { err: e.message })); }
  }

  document.addEventListener('click', async e => {
    const nav = e.target.closest('[data-nav]'); if (nav && !e.target.closest('dialog')) { e.preventDefault(); go(nav.dataset.nav); return; }
    const b = e.target.closest('[data-action]'); if (!b || b.disabled) return;
    const act = b.dataset.action;
    if (act === 'back') back();
    else if (act === 'start') startMode(b.dataset.mode);
    else if (act === 'setup') setupSheet(b.dataset.mode);
    else if (act === 'quickStart') startMode('quick', { n: 10 });
    else if (act === 'topicSheet') topicSheet(b.dataset.topic);
    else if (act === 'topicPractice') startMode('quick', { n: 10, topic: b.dataset.topic });
    else if (act === 'practiceTopics') startMode('topics', { topics: b.dataset.topics.split(',') });
    else if (act === 'langSheet') langSheet();
    else if (act === 'nav') go(b.dataset.to, b.dataset.arg);
    else if (act === 'openSheetView') go('sheet', b.dataset.id);
    else if (act === 'resume') go('quiz');
    else if (act === 'leaveQuiz') { toast(t('Saved. Resume any time from Home.')); if (depth > 0) back(); else go('home', null, { replace: true }); }
    else if (act === 'quizMenu') quizMenu();
    else if (act === 'examGrid') examGrid();
    else if (act === 'submit') doSubmit();
    else if (act === 'next') doNext();
    else if (act === 'examNext') { if (S.active.index < S.active.qids.length - 1) { S.active.index++; persist(); render(); window.scrollTo(0, 0); } }
    else if (act === 'prev') { if (S.active.index > 0) { S.active.index--; persist(); render(); window.scrollTo(0, 0); } }
    else if (act === 'finishExam') finishExam();
    else if (act === 'bookmark') { const on = E.toggleBookmark(S, S.active.qids[S.active.index]); persist(); b.setAttribute('aria-pressed', on); b.textContent = on ? '★' : '☆'; b.setAttribute('aria-label', on ? t('Bookmarked') : t('Bookmark')); toast(on ? '★ ' + t('Bookmarked') : t('Bookmark removed')); }
    else if (act === 'zoom') { const d = $('zoom'), im = $('zoomImg'); im.src = b.dataset.src; im.alt = b.dataset.alt || ''; $('zoomAlt').textContent = b.dataset.alt || ''; d.showModal(); d.querySelector('[data-close]').focus(); }
    else if (act === 'review') go('review', b.dataset.id);
    else if (act === 'cards') startCards(b.dataset.deck || 'all');
    else if (act === 'deckSheet') deckSheet();
    else if (act === 'cardsClose') { FC = null; if (depth > 0) back(); else go('study', null, { replace: true }); }
    else if (act === 'fcFlip') { FC.flipped = true; render(); }
    else if (act === 'fcGrade') gradeCard(b.dataset.k === '1');
    else if (act === 'export') exportProgress();
    else if (act === 'hbOpen') { const arg = { c: +b.dataset.c }; if (b.dataset.b !== undefined) arg.b = +b.dataset.b; if (view === 'hbch') go('hbch', arg, { replace: true }); else go('hbch', arg); }
    else if (act === 'hbFont') { const i = Math.max(0, Math.min(FONT_STEPS.length - 1, hbOpt('hbFont', 1) + (+b.dataset.d))); S.settings.hbFont = i; persist(); const r = main.querySelector('.reader'); if (r) r.style.setProperty('--rs', FONT_STEPS[i] + 'rem'); }
    else if (act === 'hbImpToggle') { S.settings.hbShowImportant = !hbOpt('hbShowImportant', true); persist(); const on = S.settings.hbShowImportant; main.querySelector('.reader').classList.toggle('no-imp', !on); b.textContent = on ? '⭐' : '☆'; b.setAttribute('aria-pressed', on); }
    else if (act === 'hbMarkRead') { const r = Object.assign({}, hbOpt('hbRead', {})); const c = b.dataset.c; if (r[c]) delete r[c]; else r[c] = true; S.settings.hbRead = r; persist(); b.textContent = r[c] ? '✓ ' + t('Chapter read') : t('Mark chapter as read'); b.classList.toggle('primary', !r[c]); if (r[c]) toast('✓ ' + t('Chapter read')); }
    else if (act === 'hbPage') go('hbpages', +b.dataset.page);
    else if (act === 'hbCacheAll') hbCacheAll(b);
    else if (act === 'hbPrev') hbGoPage(hbPage - 1);
    else if (act === 'hbNext') hbGoPage(hbPage + 1);
    else if (act === 'hbDelete') { const m = hbMarks(); if (b.dataset.kind === 'note') m.notes = m.notes.filter(n => n.id !== b.dataset.id); else m.hl = m.hl.filter(x => x.id !== b.dataset.id); persist(); render(); }
    else if (act === 'reset') {
      const ok = await confirmBox(t('Reset all progress?'), t('This permanently deletes your saved answers, mistakes, bookmarks, history, and any unfinished session in this browser. Appearance settings and your handbook highlights and notes are kept. Consider exporting a backup first.'), t('Yes, reset everything'));
      if (ok) { S = E.resetProgress(S); persist(); go('progress'); }
    }
  });
  document.addEventListener('change', e => { if (e.target.name === 'choice' && view === 'quiz') setSelection(+e.target.value); });
  document.querySelector('#zoom [data-close]').addEventListener('click', () => $('zoom').close());
  $('zoom').addEventListener('click', e => { if (e.target === $('zoom')) $('zoom').close(); });
  document.addEventListener('keydown', e => {
    if (document.querySelector('dialog[open]')) return;
    if (view === 'hbpages' && !/^(input|textarea|select)$/i.test(e.target.tagName || '')) {
      if (e.key === 'ArrowRight') { e.preventDefault(); hbGoPage(hbPage + 1); return; }
      if (e.key === 'ArrowLeft') { e.preventDefault(); hbGoPage(hbPage - 1); return; }
    }
    if (view === 'cards' && FC && FC.i < FC.queue.length && !/^(input|textarea|select)$/i.test(e.target.tagName || '')) {
      if (e.key === ' ' && e.target.id !== 'fc') { e.preventDefault(); FC.flipped = !FC.flipped; render(); }
      else if (FC.flipped && (e.key === 'ArrowRight' || e.key === '2')) gradeCard(true);
      else if (FC.flipped && (e.key === 'ArrowLeft' || e.key === '1')) gradeCard(false);
      return;
    }
    if (view !== 'quiz' || !S.active) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'select' || tag === 'textarea' || (tag === 'input' && e.target.type !== 'radio')) return;
    const sess = S.active, qid = sess.qids[sess.index], q = MAP[qid];
    const k = e.key.toLowerCase();
    const idx = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
    if (k.length === 1 && idx >= 0 && idx < q.choices.length) {
      if (!sess.isExam && sess.answers[qid]) return;
      e.preventDefault(); setSelection(sess.orders[qid][idx]);
    } else if (e.key === 'Enter' && tag !== 'button' && tag !== 'a' && tag !== 'summary') {
      e.preventDefault();
      if (sess.isExam) return;
      if (sess.answers[qid]) doNext(); else doSubmit();
    }
  });

  // ---------- offline support (service worker; needs https or localhost) ----------
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => { /* offline mode unavailable */ }); });
  }

  // ---------- start ----------
  applySettings();
  applyLanguage();
  if (!BANK.length || !E) { main.innerHTML = `<h2>${t('Questions could not be loaded')}</h2><p>${t('The question files are missing. Check your internet connection and reload the app.')}</p>`; }
  else {
    // Optional start page, e.g. index.html#handbook, #study, #progress, #hbpages/34
    const [start, arg] = location.hash.replace('#', '').split('/');
    const ok = ['handbook', 'study', 'progress', 'settings', 'sources', 'help', 'more', 'hbpages', 'hbimp', 'tips'].includes(start);
    history.replaceState({ v: 'home', a: null }, '');
    if (ok) go(start, arg ? +arg || arg : null, { noFocus: true }); else go('home', null, { replace: true, noFocus: true });
  }
})();
