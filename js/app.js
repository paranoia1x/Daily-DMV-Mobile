/* CA Driver Test Practice: user interface. All logic that affects scores lives in engine.js. */
(function () {
  'use strict';
  const E = window.DMVEngine;
  const META = window.DMV_META || {};
  const TOPICS = window.DMV_TOPICS || [];
  const SOURCES = window.DMV_SOURCES || {};
  const BANK = window.DMV_QUESTIONS || [];
  const MAP = {}; BANK.forEach(q => { MAP[q.id] = q; });
  const TOPIC_NAME = {}; TOPICS.forEach(t => { TOPIC_NAME[t.key] = t.name; });
  const LETTERS = ['A', 'B', 'C', 'D'];
  const main = document.getElementById('main');
  const banner = document.getElementById('banner');

  // ---------- storage ----------
  let storage = null;
  try { const k = '__dmv_test__'; window.localStorage.setItem(k, '1'); window.localStorage.removeItem(k); storage = window.localStorage; } catch (e) { storage = null; }
  const memStore = { data: {}, getItem(k) { return this.data[k] || null; }, setItem(k, v) { this.data[k] = v; } };
  const loaded = E.load(storage || memStore);
  let S = loaded.state;
  if (!storage) showBanner('Saving is blocked in this browser window (for example, a private window or blocked site data). You can still practice, but progress will be lost when you close the app. Use Settings → Export to keep a copy.', true);
  else if (!loaded.ok) showBanner('Your saved progress could not be read, so the app started fresh. If you have a backup file, use Settings → Import progress.');
  if (S.active && !S.active.qids.every(id => MAP[id])) { S.active = null; }

  function persist() {
    if (!E.save(storage || memStore, S)) showBanner('Progress could not be saved. Your browser storage may be full or blocked. Use Settings → Export progress to make a backup.');
  }
  let bannerSticky = false;
  function showBanner(msg, sticky) { banner.textContent = msg; banner.hidden = false; if (sticky) bannerSticky = true; }

  // ---------- helpers ----------
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmtDate = t => new Date(t).toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  const pct = (c, n) => E.accuracyText(c, n);
  function applySettings() {
    const r = document.documentElement;
    r.dataset.theme = S.settings.theme; r.dataset.text = S.settings.textSize; r.dataset.reduce = S.settings.reducedMotion ? 'true' : 'false';
  }
  function setNav(view) {
    document.querySelectorAll('[data-nav]').forEach(b => { if (b.dataset.nav === view) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  }
  function focusMain(sel) {
    const el = sel ? main.querySelector(sel) : main;
    if (el) { if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: false }); }
    window.scrollTo(0, 0);
  }
  function confirmBox(title, text, yesLabel = 'OK') {
    const d = document.getElementById('confirm');
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmText').textContent = text;
    const yes = document.getElementById('confirmYes'), no = document.getElementById('confirmNo');
    yes.textContent = yesLabel;
    return new Promise(res => {
      const done = v => { d.close(); yes.onclick = no.onclick = null; d.oncancel = null; res(v); };
      yes.onclick = () => done(true); no.onclick = () => done(false); d.oncancel = () => done(false);
      d.showModal(); no.focus();
    });
  }
  function figure(q, allowZoom = true) {
    if (!q.image) return '';
    return `<div class="figure"><img src="${esc(q.image)}" alt="${esc(q.imageAlt)}" data-img-fallback="${esc(q.image)}">` +
      (allowZoom ? `<div><button type="button" class="btn small" data-action="zoom" data-src="${esc(q.image)}" data-alt="${esc(q.imageAlt)}">🔍 Enlarge picture</button></div>` : '') + `</div>`;
  }
  function sourceLine(q) {
    return `<p class="src">Source: <a href="${esc(q.source.url)}" target="_blank" rel="noopener noreferrer">${esc(q.source.title)}</a>${q.source.section ? ' — ' + esc(q.source.section) : ''}</p>`;
  }
  function hookImages() {
    main.querySelectorAll('img[data-img-fallback]').forEach(img => {
      img.addEventListener('error', () => {
        const p = document.createElement('p'); p.className = 'banner';
        p.textContent = 'This picture could not be loaded (' + img.dataset.imgFallback + '). Make sure the whole app folder was copied, including the "img" folder.';
        img.replaceWith(p);
      }, { once: true });
    });
  }

  // ---------- views ----------
  let view = 'home', viewArg = null;
  function go(v, arg) { view = v; viewArg = arg; if (!bannerSticky) banner.hidden = true; render(); }
  function render() {
    setNav(view === 'quiz' || view === 'results' || view === 'review' ? '' : view);
    const fn = { home: vHome, quiz: vQuiz, results: vResults, review: vResults, progress: vProgress, settings: vSettings, sources: vSources, help: vHelp, handbook: vHandbook }[view] || vHome;
    main.innerHTML = fn(viewArg);
    hookImages();
    if (view === 'settings') bindSettings();
    if (view === 'handbook') bindHandbook();
  }

  // ---------- handbook reader ----------
  // Pages are shown as images with highlight boxes drawn on top, so no PDF plug-in is needed.
  const HB = window.HANDBOOK || { highlights: [], pages: 0, edition: '' };
  const HBP = window.HANDBOOK_PAGES || [];
  const HB_COLORS = { green: 'Green', pink: 'Pink', blue: 'Blue' };
  let hbPage = 1, hbTool = 'read', hbColor = 'green', hbDrag = null;
  function hbMarks() {
    if (!S.handbookMarks || typeof S.handbookMarks !== 'object') S.handbookMarks = { hl: [], notes: [] };
    S.handbookMarks.hl = S.handbookMarks.hl || []; S.handbookMarks.notes = S.handbookMarks.notes || [];
    return S.handbookMarks;
  }
  function hbOpt(k, def) { return S.settings[k] === undefined ? def : S.settings[k]; }
  const pctBox = r => `left:${(r[0] * 100).toFixed(2)}%;top:${(r[1] * 100).toFixed(2)}%;width:${((r[2] - r[0]) * 100).toFixed(2)}%;height:${((r[3] - r[1]) * 100).toFixed(2)}%`;
  function hbLayer() {
    const p = HBP[hbPage - 1]; if (!p) return '';
    const m = hbMarks();
    let h = '';
    if (hbOpt('hbShowImportant', true)) h += p.hl.map(r => { const info = HB.highlights[r[4]]; return `<span class="hb-imp" style="${pctBox(r)}" title="${esc(info ? 'Important (' + info.topic + ')' : 'Important')}"></span>`; }).join('');
    if (hbOpt('hbShowMine', true)) {
      h += m.hl.filter(x => x.page === hbPage).map(x => x.rects.map(r => `<span class="hb-mine hb-${esc(x.color)}" data-mark="${esc(x.id)}" style="${pctBox(r)}" title="My highlight"></span>`).join('')).join('');
      h += m.notes.filter(n => n.page === hbPage).map((n, i) => `<button type="button" class="hb-note" data-note="${esc(n.id)}" style="left:${(n.x * 100).toFixed(2)}%;top:${(n.y * 100).toFixed(2)}%" aria-label="Note: ${esc(n.text)}" title="${esc(n.text)}">📝</button>`).join('');
    }
    return h;
  }
  function hbMyList() {
    const m = hbMarks();
    const items = [...m.hl.map(x => ({ kind: 'hl', page: x.page, id: x.id, text: x.text || 'Highlight', color: x.color, t: x.t })),
      ...m.notes.map(n => ({ kind: 'note', page: n.page, id: n.id, text: n.text, t: n.t }))].sort((a, b) => a.page - b.page || a.t - b.t);
    if (!items.length) return '<p class="muted">You have not added any highlights or notes yet.</p>';
    return '<ul class="hb-items">' + items.map(it => `<li><span class="${it.kind === 'hl' ? 'hb-swatch hb-' + esc(it.color) : ''}">${it.kind === 'note' ? '📝 ' : ''}${esc(it.text)}</span>
      <button class="btn small" data-action="hbJump" data-page="${it.page}">Page ${esc((HBP[it.page - 1] || {}).label || it.page)}</button>
      <button class="btn small danger" data-action="hbDelete" data-kind="${it.kind}" data-id="${esc(it.id)}">Delete</button></li>`).join('') + '</ul>';
  }
  function vHandbook() {
    const topics = [...new Set(HB.highlights.map(h => h.topic))];
    const p = HBP[hbPage - 1] || { img: '', ratio: 1.3, label: '' };
    const tools = [['read', 'Read'], ['highlight', '🖍 Highlight'], ['note', '📝 Add note'], ['erase', '🧽 Erase']];
    return `<h1 tabindex="-1">California Driver's Handbook</h1>
    <section class="card notice"><p><b>California Driver’s Handbook, California Department of Motor Vehicles, licensed under
      <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC 4.0</a>.</b>
      Edition ${esc(HB.edition)}, ${HBP.length} pages. The yellow "important" highlights and your own highlights and notes are added by this app; they are not part of the DMV's handbook.
      The newest version is always on the <a href="${esc((SOURCES.hb || {}).url || '')}" target="_blank" rel="noopener noreferrer">DMV website</a>.</p></section>
    <section class="card hb-reader" aria-labelledby="hbReadH"><h2 id="hbReadH" style="margin-top:0" class="sr">Handbook reader</h2>
      <div class="hb-bar">
        <div class="row"><button class="btn" data-action="hbPrev" ${hbPage <= 1 ? 'disabled' : ''} aria-label="Previous page">← Prev</button>
          <label for="hbPage">Page</label><input id="hbPage" class="hb-num" type="number" min="1" max="${HBP.length}" value="${hbPage}">
          <span class="muted">of ${HBP.length}${p.label && p.label !== String(hbPage) ? ` (printed page ${esc(p.label)})` : ''}</span>
          <button class="btn" data-action="hbNext" ${hbPage >= HBP.length ? 'disabled' : ''} aria-label="Next page">Next →</button></div>
        <div class="row"><label class="hb-check"><input type="checkbox" id="hbShowImportant" ${hbOpt('hbShowImportant', true) ? 'checked' : ''}> <span class="hb-swatch hb-imp-sw">Show important parts</span></label>
          <label class="hb-check"><input type="checkbox" id="hbShowMine" ${hbOpt('hbShowMine', true) ? 'checked' : ''}> Show my highlights &amp; notes</label></div>
        <div class="row"><span class="seg" role="radiogroup" aria-label="Tool">${tools.map(([k, n]) => `<label><input type="radio" name="hbTool" value="${k}" ${hbTool === k ? 'checked' : ''}><span>${n}</span></label>`).join('')}</span>
          <span class="seg" role="radiogroup" aria-label="Highlight color">${Object.entries(HB_COLORS).map(([k, n]) => `<label><input type="radio" name="hbColor" value="${k}" ${hbColor === k ? 'checked' : ''}><span class="hb-swatch hb-${k}">${n}</span></label>`).join('')}</span></div>
        <p class="muted" id="hbHint">${hbHint()}</p>
      </div>
      <div class="hb-page tool-${hbTool}" id="hbPageBox" style="aspect-ratio: 1 / ${p.ratio}">
        <img src="${esc(p.img)}" alt="Handbook page ${hbPage}${p.label ? ' (printed page ' + esc(p.label) + ')' : ''}" draggable="false" data-img-fallback="${esc(p.img)}">
        <div class="hb-layer" id="hbLayer">${hbLayer()}</div>
      </div>
      <div class="row" style="margin-top:.6rem"><button class="btn" data-action="hbPrev" ${hbPage <= 1 ? 'disabled' : ''}>← Previous page</button><button class="btn" data-action="hbNext" ${hbPage >= HBP.length ? 'disabled' : ''}>Next page →</button>
        <a class="btn" href="https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/" target="_blank" rel="noopener noreferrer">Official PDF on dmv.ca.gov</a></div>
    </section>
    <section class="card" id="hbOffline" ${'caches' in window && navigator.serviceWorker ? '' : 'hidden'}><h2 style="margin-top:0">Read offline</h2>
      <p class="muted">Pages you open are saved automatically. To save all ${HBP.length} pages now (about 21 MB), tap the button while you are online.</p>
      <button class="btn" data-action="hbCacheAll">Save all handbook pages for offline</button> <span id="hbCacheMsg" class="muted" role="status"></span></section>
    <section class="card" aria-labelledby="hbMineH"><h2 id="hbMineH" style="margin-top:0">My highlights and notes</h2>
      <p class="muted">Saved automatically with your progress (and included in Settings → Export progress).</p><div id="hbMine">${hbMyList()}</div></section>
    <section class="card" aria-labelledby="hbListH"><h2 id="hbListH" style="margin-top:0">Important parts (${HB.highlights.length})</h2>
      <p class="muted">The rules highlighted in yellow. Click a page button to jump there.</p>
      <label for="hbFilter">Search the list</label><br><input id="hbFilter" class="hb-search" type="search" placeholder="for example: curb, 15 feet, BAC">
      <div id="hbList">${topics.map(t => `<div class="hb-topic"><h3>${esc(t)}</h3><ul class="hb-items">${HB.highlights.filter(h => h.topic === t).map(h =>
        `<li data-text="${esc((h.text + ' ' + h.topic).toLowerCase())}"><span class="hb-swatch hb-imp-sw">${esc(h.text)}</span> <button class="btn small" data-action="hbJump" data-page="${h.page}">Page ${esc(h.label)}</button></li>`).join('')}</ul></div>`).join('')}</div></section>`;
  }
  function hbHint() {
    return { read: 'Swipe left or right, or use Prev/Next, to turn pages. Pinch to zoom.', highlight: 'Drag across the words you want to highlight.', note: 'Click where you want to put a note.', erase: 'Click one of your highlights to remove it. Notes are removed by clicking them.' }[hbTool];
  }
  function hbGoPage(n, scroll) {
    hbPage = Math.min(Math.max(1, n || 1), HBP.length || 1);
    render();
    if (scroll) { const box = main.querySelector('.hb-reader'); if (box) box.scrollIntoView({ block: 'start' }); }
  }
  function hbRefreshLayer() {
    const l = main.querySelector('#hbLayer'); if (l) l.innerHTML = hbLayer();
    const mine = main.querySelector('#hbMine'); if (mine) mine.innerHTML = hbMyList();
  }
  function hbPoint(e) {
    const r = main.querySelector('#hbPageBox').getBoundingClientRect();
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
    const d = document.getElementById('noteDlg'), ta = document.getElementById('noteText');
    ta.value = note ? note.text : '';
    document.getElementById('noteDelete').hidden = !note;
    return new Promise(res => {
      const done = v => { d.close(); res(v); };
      document.getElementById('noteSave').onclick = () => done({ save: ta.value.trim() });
      document.getElementById('noteDelete').onclick = () => done({ del: true });
      document.getElementById('noteCancel').onclick = () => done(null);
      d.oncancel = () => done(null);
      d.showModal(); ta.focus();
    });
  }
  async function hbEditNote(note, pos) {
    const r = await hbNoteDialog(note); if (!r) return;
    const m = hbMarks();
    if (r.del && note) m.notes = m.notes.filter(n => n.id !== note.id);
    else if (r.save) {
      if (note) note.text = r.save;
      else m.notes.push({ id: hbNewId(), page: hbPage, x: pos[0], y: pos[1], text: r.save, t: Date.now() });
    }
    persist(); hbRefreshLayer();
  }
  async function hbCacheAll(btn) {
    const msg = main.querySelector('#hbCacheMsg');
    try {
      btn.disabled = true;
      const cache = await caches.open('dmv-handbook-pages-v1');
      let done = 0;
      for (const p of HBP) {
        if (!(await cache.match(p.img))) { const r = await fetch(p.img); if (!r.ok) throw new Error(p.img + ' could not be downloaded'); await cache.put(p.img, r); }
        done++; if (msg) msg.textContent = `Saved ${done} of ${HBP.length} pages…`;
      }
      if (msg) msg.textContent = `✓ All ${HBP.length} pages are saved for offline reading.`;
    } catch (e) { if (msg) msg.textContent = 'Could not save every page (' + e.message + '). Check your internet connection and try again.'; }
    finally { btn.disabled = false; }
  }
  function bindHandbook() {
    const box = main.querySelector('#hbPageBox');
    main.querySelector('#hbPage').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); hbGoPage(+e.target.value); } });
    main.querySelector('#hbPage').addEventListener('change', e => hbGoPage(+e.target.value));
    main.querySelector('#hbShowImportant').addEventListener('change', e => { S.settings.hbShowImportant = e.target.checked; persist(); hbRefreshLayer(); });
    main.querySelector('#hbShowMine').addEventListener('change', e => { S.settings.hbShowMine = e.target.checked; persist(); hbRefreshLayer(); });
    main.querySelectorAll('input[name="hbTool"]').forEach(r => r.addEventListener('change', () => { hbTool = r.value; box.className = 'hb-page tool-' + hbTool; main.querySelector('#hbHint').textContent = hbHint(); }));
    main.querySelectorAll('input[name="hbColor"]').forEach(r => r.addEventListener('change', () => { hbColor = r.value; }));
    main.querySelector('#hbFilter').addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      main.querySelectorAll('#hbList .hb-items li').forEach(li => { li.hidden = q && !li.dataset.text.includes(q); });
      main.querySelectorAll('.hb-topic').forEach(d => { d.hidden = !d.querySelector('li:not([hidden])'); });
    });
    box.addEventListener('pointerdown', e => {
      const noteBtn = e.target.closest('.hb-note');
      if (noteBtn) return; // handled by click
      if (hbTool === 'highlight') {
        e.preventDefault(); try { box.setPointerCapture(e.pointerId); } catch (err) { /* capture is optional */ }
        const p0 = hbPoint(e); const tmp = document.createElement('span'); tmp.className = 'hb-drag'; main.querySelector('#hbLayer').appendChild(tmp);
        hbDrag = { p0, tmp };
      } else if (hbTool === 'erase') {
        const mk = e.target.closest('.hb-mine');
        if (mk) { const m = hbMarks(); m.hl = m.hl.filter(x => x.id !== mk.dataset.mark); persist(); hbRefreshLayer(); }
      } else if (hbTool === 'note') {
        e.preventDefault(); hbEditNote(null, hbPoint(e));
      }
    });
    box.addEventListener('pointermove', e => {
      if (!hbDrag) return;
      const p1 = hbPoint(e), r = [Math.min(hbDrag.p0[0], p1[0]), Math.min(hbDrag.p0[1], p1[1]), Math.max(hbDrag.p0[0], p1[0]), Math.max(hbDrag.p0[1], p1[1])];
      hbDrag.tmp.setAttribute('style', pctBox(r));
    });
    const endDrag = e => {
      if (!hbDrag) return;
      const p1 = hbPoint(e), r = [Math.min(hbDrag.p0[0], p1[0]), Math.min(hbDrag.p0[1], p1[1]), Math.max(hbDrag.p0[0], p1[0]), Math.max(hbDrag.p0[1], p1[1])];
      hbDrag.tmp.remove(); hbDrag = null;
      if (r[2] - r[0] < 0.004 && r[3] - r[1] < 0.004) return; // just a click
      let rects = hbWordsIn(r);
      if (!rects.length) rects = [r.map(v => Math.round(v * 10000) / 10000)];
      const p = HBP[hbPage - 1];
      const text = p.w.filter(w => rects.some(q => w[0] < q[2] && w[2] > q[0] && w[1] < q[3] && w[3] > q[1])).length + ' words highlighted';
      hbMarks().hl.push({ id: hbNewId(), page: hbPage, rects, color: hbColor, t: Date.now(), text: `Highlight on page ${p.label || hbPage} (${text})` });
      persist(); hbRefreshLayer();
    };
    box.addEventListener('pointerup', endDrag);
    box.addEventListener('pointercancel', () => { if (hbDrag) { hbDrag.tmp.remove(); hbDrag = null; } });
    let sw = null;
    box.addEventListener('touchstart', e => { sw = (hbTool === 'read' && e.touches.length === 1) ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null; }, { passive: true });
    box.addEventListener('touchend', e => {
      if (!sw || hbTool !== 'read' || (window.visualViewport && window.visualViewport.scale > 1.05)) { sw = null; return; }
      const t = e.changedTouches[0], dx = t.clientX - sw.x, dy = t.clientY - sw.y; sw = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) hbGoPage(hbPage + (dx < 0 ? 1 : -1));
    }, { passive: true });
    box.addEventListener('click', e => {
      const nb = e.target.closest('.hb-note'); if (!nb) return;
      const note = hbMarks().notes.find(n => n.id === nb.dataset.note); if (note) hbEditNote(note);
    });
  }

  function vHome() {
    const nSigns = signPool().length, nTrouble = BANK.filter(q => q.tags.includes('trouble')).length;
    const nMist = E.activeMistakes(S, MAP).length, nBook = Object.keys(S.bookmarks).filter(id => MAP[id]).length;
    const nVisual = BANK.filter(q => q.image).length;
    let resume = '';
    if (S.active) {
      const st = E.sessionStats(S.active);
      resume = `<section class="card notice" aria-labelledby="resumeH"><h2 id="resumeH">Unfinished session</h2>
        <p><b>${esc(S.active.label)}</b> — ${st.answered} of ${st.total} answered. Started ${fmtDate(S.active.startedAt)}.</p>
        <div class="row"><button class="btn primary" data-action="resume">Resume session</button><button class="btn" data-action="endActive">End this session</button></div></section>`;
    }
    const topicOpts = TOPICS.map(t => `<option value="${t.key}">${esc(t.name)} (${BANK.filter(q => q.topic === t.key).length})</option>`).join('');
    const counts = (name, vals, def) => `<div class="seg" role="radiogroup" aria-label="Number of questions">${vals.map(v => `<label><input type="radio" name="${name}" value="${v}" ${v === def ? 'checked' : ''}><span>${v === 'all' ? 'All' : v}</span></label>`).join('')}</div>`;
    return `<div class="hero"><img src="img/logo.svg" alt=""><h1>Practice for the California Class C knowledge test</h1></div>
    <section class="card notice"><p><b>${esc(META.notice)}</b></p>
      <p class="muted">Content checked against the official online handbook on ${esc(META.checkedDate)}. Questions are original practice questions, not real DMV test questions. Using this app does not guarantee you will pass.</p>
      <p class="muted">Question bank: <b>${BANK.length}</b> questions, <b>${nVisual}</b> with a sign or diagram picture.</p></section>
    ${resume}
    <div class="grid">
      <section class="card mode"><h2>Quick Practice</h2><p>Short practice with explanations after each answer. Questions you missed show up more often, mixed with other topics.</p>
        ${counts('qpCount', [10, 20, 30], 10)}
        <label for="qpTopic">Topic</label><br><select id="qpTopic"><option value="">Mixed (all topics)</option>${topicOpts}</select>
        <div class="actions"><button class="btn primary" data-action="start" data-mode="quick">Start Quick Practice</button></div></section>
      <section class="card mode"><h2>Road Signs</h2><p>Sign pictures, meanings, shapes, and colors. ${nSigns} sign questions.</p>
        ${counts('rsCount', [10, 20, 'all'], 10)}
        <div class="actions"><button class="btn primary" data-action="start" data-mode="signs">Start Road Signs</button></div></section>
      <section class="card mode"><h2>Focus on my trouble spots</h2><p>Uphill parking at a curb, flashing red lights, double yellow lines (turning vs. passing), and following distance. ${nTrouble} focused questions plus a few mixed ones.</p>
        <div class="actions"><button class="btn primary" data-action="start" data-mode="trouble">Start trouble spots</button></div></section>
      <section class="card mode"><h2>Review My Mistakes</h2><p>${nMist ? `${nMist} question${nMist > 1 ? 's' : ''} to retry.` : 'No missed questions yet. Questions you miss are saved here automatically.'} Retry results are kept separate from your first attempts. A question leaves this list after two correct retries in a row.</p>
        <div class="actions"><button class="btn primary" data-action="start" data-mode="mistakes" ${nMist ? '' : 'disabled'}>Retry my mistakes</button></div></section>
      <section class="card mode"><h2>Bookmarked Questions</h2><p>${nBook ? `${nBook} bookmarked.` : 'No bookmarks yet. Use the ☆ Bookmark button on any question.'}</p>
        <div class="actions"><button class="btn primary" data-action="start" data-mode="bookmarks" ${nBook ? '' : 'disabled'}>Practice bookmarks</button></div></section>
      <section class="card mode"><h2>Full Question Bank</h2><p>Practice through all <b>${BANK.length}</b> questions in random order. You can stop and resume any time.</p>
        <div class="actions"><button class="btn primary" data-action="start" data-mode="full">Start full bank</button></div></section>
      <section class="card mode"><h2>Practice Exam</h2><p>App practice format: answers and explanations stay hidden until you finish. You can review and change answers before finishing. App study target: ${E.APP_STUDY_TARGET}% (this app's own goal, <b>not</b> an official DMV passing score). No timer.</p>
        ${counts('exCount', [25, 50], 25)}
        <div class="actions"><button class="btn primary" data-action="start" data-mode="exam">Start practice exam</button></div></section>
    </div>`;
  }

  function signPool() { return BANK.filter(q => q.topic === 'signs' || (q.image && q.image.indexOf('img/signs/') === 0)); }

  async function startMode(mode) {
    if (S.active) {
      const ok = await confirmBox('End your unfinished session?', `You have an unfinished session (${S.active.label}). Starting a new one will end it. Answers you already gave are kept in your history.`, 'End it and start new');
      if (!ok) return;
      E.archiveSession(S, S.active);
    }
    const val = name => { const el = main.querySelector(`input[name="${name}"]:checked`); return el ? el.value : null; };
    let qs = [], label = '', isExam = false, isRetry = false;
    if (mode === 'quick') {
      const n = +val('qpCount') || 10; const topic = main.querySelector('#qpTopic').value;
      const pool = topic ? BANK.filter(q => q.topic === topic) : BANK;
      qs = E.pickWeighted(S, pool, n, MAP, TOPICS); label = `Quick Practice (${qs.length})` + (topic ? ' — ' + TOPIC_NAME[topic] : ' — mixed topics');
    } else if (mode === 'signs') {
      const v = val('rsCount'); const pool = signPool();
      qs = v === 'all' ? E.shuffle(pool) : E.pickWeighted(S, pool, +v, MAP, TOPICS); label = `Road Signs (${qs.length})`;
    } else if (mode === 'trouble') {
      const tr = BANK.filter(q => q.tags.includes('trouble'));
      const others = E.pickWeighted(S, BANK.filter(q => !q.tags.includes('trouble')), 4, MAP, TOPICS);
      qs = E.shuffle(tr.concat(others)); label = `Trouble spots (${qs.length})`;
    } else if (mode === 'mistakes') {
      qs = E.shuffle(E.activeMistakes(S, MAP).map(id => MAP[id])); label = `Review My Mistakes — retry (${qs.length})`; isRetry = true;
    } else if (mode === 'bookmarks') {
      qs = E.shuffle(Object.keys(S.bookmarks).filter(id => MAP[id]).map(id => MAP[id])); label = `Bookmarked (${qs.length})`;
    } else if (mode === 'full') {
      qs = E.shuffle(BANK); label = `Full Question Bank (${qs.length})`;
    } else if (mode === 'exam') {
      const n = +val('exCount') || 25; qs = E.buildExam(BANK, n); label = `Practice Exam (${qs.length} questions)`; isExam = true;
    }
    if (!qs.length) { showBanner('There are no questions available for that choice yet.'); return; }
    S.active = E.createSession({ mode, label, questions: qs, isExam, isRetry });
    persist(); go('quiz'); focusMain('h1');
  }

  function statsBar(sess) {
    const st = E.sessionStats(sess);
    if (sess.isExam) {
      return `<div class="stats" aria-label="Exam progress"><div class="stat"><b>${st.answered}</b><span>Answered</span></div><div class="stat"><b>${st.remaining}</b><span>Unanswered</span></div><div class="stat"><b>${st.total}</b><span>Questions</span></div></div>`;
    }
    return `<div class="stats" aria-label="Session score" aria-live="polite">
      <div class="stat"><b>✓ ${st.correct}</b><span>Correct</span></div>
      <div class="stat"><b>✗ ${st.incorrect}</b><span>Incorrect</span></div>
      <div class="stat"><b>${st.answered}</b><span>Answered</span></div>
      <div class="stat"><b>${st.accuracyText}</b><span>Accuracy</span></div>
      <div class="stat"><b>${st.remaining}</b><span>Remaining</span></div></div>`;
  }

  function choiceList(sess, q, showResult) {
    const order = sess.orders[q.id];
    const sel = sess.selections[q.id];
    const ans = sess.answers[q.id];
    const locked = showResult || (!sess.isExam && !!ans);
    return `<fieldset><legend class="sr">Answer choices</legend><div class="choices">` + order.map((orig, pos) => {
      const c = q.choices[orig];
      const isSel = sel === orig;
      let cls = 'choice' + (isSel ? ' selected' : '') + (locked ? ' locked' : '');
      let badges = '';
      if (showResult) {
        if (c.correct) { cls += ' is-correct'; badges += '<span class="badge ok">✓ Correct answer</span>'; }
        else if (isSel) { cls += ' is-wrong'; }
        if (isSel) badges += c.correct ? '<span class="badge sel">● Your answer</span>' : '<span class="badge bad">✗ Your answer</span>';
      } else if (isSel) badges = '<span class="badge sel">● Selected</span>';
      return `<label class="${cls}" data-orig="${orig}"><input type="radio" name="choice" value="${orig}" ${isSel ? 'checked' : ''} ${locked ? 'disabled' : ''}>
        <span class="key">${LETTERS[pos]}.</span><span class="txt">${esc(c.text)} ${badges}</span></label>`;
    }).join('') + `</div></fieldset>`;
  }

  function feedbackHtml(sess, q, rec) {
    const order = rec ? rec.orders[q.id] : sess.orders[q.id];
    const a = (rec || sess).answers[q.id];
    const sel = a ? a.choice : null;
    const corrOrig = q.choices.findIndex(c => c.correct);
    const L = orig => LETTERS[order.indexOf(orig)];
    const skipped = sel === null || sel === undefined;
    const ok = !skipped && q.choices[sel].correct;
    let h = `<div class="feedback ${ok ? 'ok' : 'bad'}" role="status"><p class="verdict" tabindex="-1" id="verdict">${skipped ? '✗ Not answered' : ok ? '✓ Correct' : '✗ Incorrect'}</p>`;
    if ((rec || sess).isRetry) h += `<p class="muted">Retry result: recorded separately from your original attempt.</p>`;
    h += `<p><b>Correct answer: ${L(corrOrig)}. ${esc(q.choices[corrOrig].text)}</b></p>`;
    if (!ok && !skipped) h += `<h3>Why your answer (${L(sel)}) is not right</h3><p>${esc(q.choices[sel].explain)}</p>`;
    h += `<h3>Why ${L(corrOrig)} is correct</h3><p>${esc(q.choices[corrOrig].explain.replace(/^Correct\.\s*/, ''))}</p>`;
    if (q.tip) h += `<p class="tip"><b>Memory tip:</b> ${esc(q.tip)}</p>`;
    h += `<details><summary>Explain all choices</summary><ul class="allchoices">` + order.map(orig => {
      const c = q.choices[orig];
      return `<li><b>${L(orig)}. ${esc(c.text)}</b> ${c.correct ? '<span class="badge ok">✓ Correct</span>' : '<span class="badge bad">✗ Incorrect</span>'}${orig === sel ? '<span class="badge sel">Your answer</span>' : ''}<br>${esc(c.explain)}</li>`;
    }).join('') + `</ul></details>` + sourceLine(q) + `</div>`;
    return h;
  }

  function vQuiz() {
    const sess = S.active;
    if (!sess) return vHome();
    const qid = sess.qids[sess.index], q = MAP[qid];
    const st = E.sessionStats(sess);
    const answered = !sess.isExam && !!sess.answers[qid];
    const isLast = sess.index === sess.qids.length - 1;
    const bm = !!S.bookmarks[qid];
    let h = `<div class="qhead"><h1 tabindex="-1">${esc(sess.label)}</h1><span class="muted">Question ${sess.index + 1} of ${st.total}</span></div>
      <div class="progressbar" role="progressbar" aria-label="Session progress" aria-valuemin="0" aria-valuemax="${st.total}" aria-valuenow="${st.answered}"><div style="width:${(st.answered / st.total * 100).toFixed(1)}%"></div></div>
      ${statsBar(sess)}`;
    if (sess.isExam) {
      h += `<nav aria-label="Exam questions" class="navgrid">` + sess.qids.map((id, i) =>
        `<button type="button" data-action="jump" data-i="${i}" class="${sess.selections[id] !== undefined ? 'answered' : ''} ${i === sess.index ? 'current' : ''}" aria-label="Question ${i + 1}${sess.selections[id] !== undefined ? ', answered' : ', not answered'}" ${i === sess.index ? 'aria-current="true"' : ''}>${i + 1}${sess.selections[id] !== undefined ? ' ●' : ''}</button>`).join('') + `</nav>`;
    }
    h += `<section class="card" aria-labelledby="qtext"><p class="muted"><span class="pill">${esc(TOPIC_NAME[q.topic] || q.topic)}</span> <span class="pill">${esc(q.difficulty)}</span></p>
      <p class="qtext" id="qtext">${esc(q.question)}</p>${figure(q)}${choiceList(sess, q, answered)}
      <div class="actions">`;
    if (sess.isExam) {
      h += `<button class="btn" data-action="prev" ${sess.index === 0 ? 'disabled' : ''}>← Previous</button>
        <button class="btn primary" data-action="examNext" ${isLast ? 'disabled' : ''}>Next question →</button>
        <button class="btn" data-action="finishExam">Finish exam</button>`;
    } else if (!answered) {
      h += `<button class="btn primary" data-action="submit" ${sess.selections[qid] === undefined ? 'disabled' : ''}>Submit Answer</button>`;
    } else {
      h += `<button class="btn primary" data-action="next">${isLast ? 'See results' : 'Next Question →'}</button>`;
    }
    h += `<button class="btn bookmark" data-action="bookmark" aria-pressed="${bm}">${bm ? '★ Bookmarked' : '☆ Bookmark'}</button>
      <button class="btn" data-action="endSession">End session</button></div>`;
    if (answered) h += feedbackHtml(sess, q);
    h += `</section><p class="muted kbd-hint">Keyboard: press 1–4 or A–D to choose, Enter to submit or go to the next question.</p>`;
    return h;
  }

  function vResults(id) {
    const rec = S.history.find(r => r.id === id);
    if (!rec) return `<h1>Session not found</h1><p>This session is no longer in your history.</p><button class="btn" data-action="home">Home</button>`;
    const acc = pct(rec.correct, rec.answered);
    const scoreAll = rec.isExam ? E.accuracyText(rec.correct, rec.total) : acc;
    let h = `<h1 tabindex="-1">${view === 'review' ? 'Session review' : 'Results'}: ${esc(rec.label)}</h1>
      <section class="card"><p>${fmtDate(rec.startedAt)}${rec.isRetry ? ' · <b>Retry session</b> (kept separate from original attempts)' : ''}${rec.complete ? '' : ' · ended early'}</p>
      <div class="stats"><div class="stat"><b>✓ ${rec.correct}</b><span>Correct</span></div><div class="stat"><b>✗ ${rec.incorrect}</b><span>Incorrect</span></div>
      <div class="stat"><b>${rec.answered}</b><span>Answered</span></div><div class="stat"><b>${acc}</b><span>Accuracy</span></div><div class="stat"><b>${rec.total - rec.answered}</b><span>Not answered</span></div></div>`;
    if (rec.isExam) {
      const p = E.accuracy(rec.correct, rec.total) || 0;
      h += `<p><b>Exam score: ${rec.correct} of ${rec.total} (${scoreAll})</b>. Unanswered questions count as missed.</p>
        <p>${p >= E.APP_STUDY_TARGET ? '✓ You reached' : '✗ You have not yet reached'} this app's study target of ${E.APP_STUDY_TARGET}%. <span class="muted">This target is the app's own goal, not an official DMV passing requirement. The current DMV test length and passing score were not confirmed from an official source for this app.</span></p>`;
    }
    h += `<div class="actions"><button class="btn primary" data-action="home">Home</button>${E.activeMistakes(S, MAP).length ? '<button class="btn" data-action="startMistakes">Retry missed questions</button>' : ''}<button class="btn" data-action="nav" data-to="progress">My Progress</button></div></section>
      <h2>Question-by-question review</h2>`;
    rec.qids.forEach((qid, i) => {
      const q = MAP[qid]; if (!q) return;
      const a = rec.answers[qid];
      if (!a && !rec.isExam) { h += `<div class="review-item card"><p class="muted">${i + 1}. Not answered: ${esc(q.question)}</p></div>`; return; }
      h += `<div class="review-item card"><p><b>${i + 1}. ${esc(q.question)}</b></p>${q.image ? `<img src="${esc(q.image)}" alt="${esc(q.imageAlt)}" data-img-fallback="${esc(q.image)}">` : ''}${feedbackHtml(null, q, rec)}</div>`;
    });
    return h;
  }

  function vProgress() {
    const L = E.lifetime(S);
    const ts = E.topicStats(S, MAP, TOPICS);
    const weak = E.weakestTopics(S, MAP, TOPICS);
    const mist = Object.entries(S.mistakes).filter(([id]) => MAP[id]);
    const active = mist.filter(([, m]) => !m.resolved), resolved = mist.filter(([, m]) => m.resolved);
    let h = `<h1>My Progress</h1>
    <p class="muted">Session scores, lifetime attempts, and unique-question progress are counted separately, so repeating a question never inflates your session score.</p>
    <section class="card"><h2>Lifetime attempts</h2>
      <div class="stats"><div class="stat"><b>${L.attempts}</b><span>Attempts</span></div><div class="stat"><b>✓ ${L.correct}</b><span>Correct</span></div>
      <div class="stat"><b>✗ ${L.incorrect}</b><span>Incorrect</span></div><div class="stat"><b>${L.accuracyText}</b><span>Accuracy</span></div><div class="stat"><b>${L.retries}</b><span>of these were retries</span></div></div>
      <h2>Unique questions</h2><p>Attempted <b>${L.uniqueAttempted}</b> of <b>${BANK.length}</b>. Correct on your most recent try: <b>${L.uniqueLatestCorrect}</b>. Answered correctly at least once: <b>${L.uniqueEverCorrect}</b>.</p></section>
    <section class="card"><h2>Weakest topics</h2>${weak.length ? '<ol>' + weak.map(t => `<li>${esc(t.name)}: ${t.accuracy}% of ${t.attempts} attempts <button class="btn small" data-action="topicPractice" data-topic="${t.key}">Practice this topic</button></li>`).join('') + '</ol>' : '<p class="muted">Answer at least 3 questions in a topic to see weak spots.</p>'}</section>
    <section class="card"><h2>Accuracy by topic</h2><table><thead><tr><th>Topic</th><th>Attempts</th><th>Accuracy</th><th>Questions seen</th></tr></thead><tbody>` +
      ts.map(t => `<tr><td>${esc(t.name)}</td><td>${t.attempts}</td><td>${t.accuracy === null ? '—' : t.accuracy + '%'}<div class="bar" aria-hidden="true"><div style="width:${t.accuracy || 0}%"></div></div></td><td>${t.seen} of ${t.bank}</td></tr>`).join('') + `</tbody></table></section>
    <section class="card"><h2>Mistakes and improvement</h2><p>${active.length} to retry · ${resolved.length} improved (two correct retries in a row).</p>` +
      (mist.length ? `<table><thead><tr><th>Question</th><th>First missed</th><th>Misses</th><th>Retries (oldest → newest)</th><th>Status</th></tr></thead><tbody>` +
        mist.sort((a, b) => b[1].lastMiss - a[1].lastMiss).slice(0, 60).map(([id, m]) => `<tr><td>${esc(MAP[id].question)}</td><td>${fmtDate(m.since)}</td><td>${m.misses}</td><td>${m.retries.length ? m.retries.map(r => r.c ? '✓' : '✗').join(' ') : '—'}</td><td>${m.resolved ? '✓ Improved' : 'To retry'}</td></tr>`).join('') + '</tbody></table>' : '<p class="muted">No missed questions yet.</p>') + `</section>
    <section class="card"><h2>Session history</h2>` + (S.history.length ? `<table><thead><tr><th>Date</th><th>Session</th><th>Score</th><th>Accuracy</th><th></th></tr></thead><tbody>` +
      S.history.map(r => `<tr><td>${fmtDate(r.startedAt)}</td><td>${esc(r.label)}${r.isRetry ? ' <span class="pill">retry</span>' : ''}${r.complete ? '' : ' <span class="pill">ended early</span>'}</td><td>${r.correct} / ${r.isExam ? r.total : r.answered}</td><td>${pct(r.correct, r.answered)}</td><td><button class="btn small" data-action="review" data-id="${r.id}">Review</button></td></tr>`).join('') + '</tbody></table>' : '<p class="muted">No completed sessions yet.</p>') + `</section>`;
    return h;
  }

  const THEMES = [['light', 'Light', '#ffffff', '#1f5fbf'], ['dark', 'Dark', '#1c2026', '#6ea8ff'], ['california', 'California', '#fbf4e6', '#0b6e99'], ['contrast', 'High Contrast', '#000000', '#ffff00']];
  function vSettings() {
    const s = S.settings;
    return `<h1>Settings</h1>
    <section class="card" aria-labelledby="appH"><h2 id="appH">Appearance</h2>
      <p class="muted">Changes apply right away and are saved. Road-sign pictures always keep their real colors in every theme.</p>
      <fieldset><legend><b>Theme</b></legend><div class="themes">${THEMES.map(([k, n, bg, ac]) => `<label><input type="radio" name="theme" value="${k}" ${s.theme === k ? 'checked' : ''}><span class="swatch" style="background:linear-gradient(135deg, ${bg} 55%, ${ac} 55%)" aria-hidden="true"></span>${n}</label>`).join('')}</div></fieldset>
      <fieldset><legend><b>Text size</b></legend><div class="seg">${[['small', 'Small'], ['medium', 'Medium'], ['large', 'Large']].map(([k, n]) => `<label><input type="radio" name="textSize" value="${k}" ${s.textSize === k ? 'checked' : ''}><span>${n}</span></label>`).join('')}</div></fieldset>
      <p><label><input type="checkbox" id="reduceMotion" ${s.reducedMotion ? 'checked' : ''}> Reduce motion (turn off all transitions)</label></p>
      <h3>Preview</h3>
      <div class="preview" aria-label="Theme preview"><p class="qtext" style="margin-top:0">What does a flashing yellow light mean?</p>
        <div class="figure" style="max-width:220px"><img src="img/signals/flashing-yellow.svg" alt="Preview picture: traffic light with a flashing yellow light." style="min-height:120px;max-height:160px"></div>
        <div class="choices"><div class="choice selected"><span class="key">A.</span><span class="txt">Selected answer <span class="badge sel">● Selected</span></span></div>
        <div class="choice is-correct"><span class="key">B.</span><span class="txt">Correct answer <span class="badge ok">✓ Correct answer</span></span></div>
        <div class="choice is-wrong"><span class="key">C.</span><span class="txt">Incorrect answer <span class="badge bad">✗ Your answer</span></span></div></div>
        <div class="actions"><span class="btn primary" aria-hidden="true">Primary button</span><span class="btn" aria-hidden="true">Normal button</span></div></div>
    </section>
    <section class="card" aria-labelledby="dataH"><h2 id="dataH">Your progress data</h2>
      <p>Your progress is saved <b>only on this phone or tablet, inside this browser</b>. It is tied to the browser you use and the app's address. If you use a different browser, delete the home-screen app, or clear this browser's history/site data, the saved progress may disappear. Make a backup file now and then.</p>
      <div class="actions"><button class="btn primary" data-action="export">Export progress (save or share a backup file)</button>
        <label class="btn" for="importFile">Import progress from a backup file</label><input type="file" id="importFile" accept=".json,application/json" class="sr">
        <button class="btn danger" data-action="reset">Reset all progress…</button></div>
      <p class="muted">Reset keeps your appearance settings and handbook highlights/notes. Import replaces your current progress with the file's contents.</p></section>`;
  }
  function bindSettings() {
    main.querySelectorAll('input[name="theme"]').forEach(r => r.addEventListener('change', () => { S.settings.theme = r.value; applySettings(); persist(); }));
    main.querySelectorAll('input[name="textSize"]').forEach(r => r.addEventListener('change', () => { S.settings.textSize = r.value; applySettings(); persist(); }));
    main.querySelector('#reduceMotion').addEventListener('change', e => { S.settings.reducedMotion = e.target.checked; applySettings(); persist(); });
    main.querySelector('#importFile').addEventListener('change', e => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onerror = () => showBanner('The file could not be read. Try choosing it again.');
      rd.onload = async () => {
        const r = E.importData(String(rd.result));
        e.target.value = '';
        if (!r.ok) { showBanner(r.error); return; }
        const ok = await confirmBox('Replace your progress?', `This backup has ${r.state.attempts.length} answer attempts and ${r.state.history.length} sessions. Importing replaces the progress currently saved in this browser.`, 'Import and replace');
        if (!ok) return;
        S = r.state; applySettings(); persist(); banner.hidden = true; go('progress');
      };
      rd.readAsText(f);
    });
  }

  function vSources() {
    const counts = TOPICS.map(t => `<li>${esc(t.name)}: ${BANK.filter(q => q.topic === t.key).length}</li>`).join('');
    return `<h1>Sources</h1>
    <section class="card notice"><p><b>${esc(META.notice)}</b></p><p>${esc(META.checkedNote)}</p></section>
    <section class="card"><h2>Official references</h2><ul>${Object.values(SOURCES).map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a></li>`).join('')}</ul>
      <p class="muted">Links open the official websites in your browser and need an internet connection. Practice itself works offline.</p></section>
    <section class="card"><h2>About the questions</h2><p>All ${BANK.length} questions are original practice questions written from the handbook rules. They are not actual DMV exam questions. Each question links to the handbook section it is based on.</p><ul>${counts}</ul></section>
    <section class="card"><h2>About the pictures</h2><p>Most road-sign pictures are public-domain vector copies of the official federal sign designs (MUTCD), from Wikimedia Commons, stored in the app so they work offline. A few California-specific or special signs (such as turnout, yield-to-uphill, rest area, and hazardous-load placards), plus all traffic-light and driving diagrams, are drawn for this app using the shapes, colors, and wording shown in the handbook's sign charts. Pictures are never recolored by themes. File-by-file credits are in <a href="https://github.com/paranoia1x/Daily-DMV-Mobile/blob/main/docs/CREDITS.md" target="_blank" rel="noopener noreferrer">docs/CREDITS.md</a>.</p></section>
    <section class="card"><h2>About the Practice Exam</h2><p>The handbook says the knowledge test uses multiple choice questions and that applicants get three attempts. It does not list the current number of questions or the passing score, so this app's exam lengths (25 or 50) and its ${E.APP_STUDY_TARGET}% study target are the app's own choices, not DMV requirements.</p></section>`;
  }
  function vHelp() {
    return `<h1>Help</h1>
    <section class="card"><h2>How it works</h2><ol><li>Pick a practice mode on the Home page.</li><li>Click an answer (you can change it), then click <b>Submit Answer</b>.</li><li>Read the explanation, then click <b>Next Question</b>.</li></ol>
      <p>No account is needed. After the first visit, the app also works <b>offline</b>. Handbook pages you open are saved for offline reading; use <b>Save all handbook pages for offline</b> on the Handbook page to save them all at once.</p></section>
    <section class="card"><h2>Add it to your home screen</h2><ul>
      <li><b>iPhone / iPad (Safari):</b> tap the <b>Share</b> button, then <b>Add to Home Screen</b>.</li>
      <li><b>Android (Chrome):</b> tap the <b>⋮</b> menu, then <b>Add to Home screen</b> or <b>Install app</b>.</li></ul>
      <p>It then opens full-screen like a normal app. Your progress stays on this device.</p></section>
    <section class="card"><h2>Touch tips</h2><ul><li>Tap an answer, then tap <b>Submit Answer</b>.</li><li>Tap <b>Enlarge picture</b> to see a sign bigger; you can pinch to zoom.</li><li>In the Handbook, swipe left or right to turn pages (in Read mode).</li></ul></section>
    <section class="card"><h2>Keyboard (tablets with keyboards)</h2><ul><li><b>1–4</b> or <b>A–D</b>: choose an answer</li><li><b>Enter</b>: submit, or go to the next question</li><li><b>Tab</b>: move between buttons; <b>Esc</b>: close a picture</li></ul></section>
    <section class="card"><h2>Saving and backups</h2><p>Progress saves automatically on this device. Clearing browser data or removing the home-screen app can erase it, so use <b>Settings → Export progress</b> to save or share a backup file, and <b>Import</b> to restore it.</p></section>`;
  }

  // ---------- actions ----------
  function setSelection(orig) {
    const sess = S.active; if (!sess) return;
    const qid = sess.qids[sess.index];
    if (!E.select(sess, qid, orig)) return;
    persist();
    main.querySelectorAll('.choice').forEach(l => {
      const on = +l.dataset.orig === orig;
      l.classList.toggle('selected', on);
      l.querySelector('input').checked = on;
      const t = l.querySelector('.txt'); const b = t.querySelector('.badge'); if (b) b.remove();
      if (on) t.insertAdjacentHTML('beforeend', ' <span class="badge sel">● Selected</span>');
    });
    const sb = main.querySelector('[data-action="submit"]'); if (sb) sb.disabled = false;
    if (sess.isExam) { const nb = main.querySelector(`.navgrid [data-i="${sess.index}"]`); if (nb) { nb.classList.add('answered'); nb.textContent = (sess.index + 1) + ' ●'; } const st = main.querySelector('.stats'); if (st) st.outerHTML = statsBar(sess); }
  }
  function doSubmit() {
    const sess = S.active; if (!sess || sess.isExam) return;
    const q = MAP[sess.qids[sess.index]];
    if (!E.submit(S, sess, q)) return;
    persist(); render(); focusMain('#verdict');
  }
  function doNext() {
    const sess = S.active; if (!sess) return;
    if (!sess.isExam && !sess.answers[sess.qids[sess.index]]) return;
    if (sess.index < sess.qids.length - 1) { sess.index++; persist(); render(); focusMain('#qtext'); return; }
    const rec = E.archiveSession(S, sess); persist(); go('results', rec.id); focusMain('h1');
  }
  async function endSession() {
    const sess = S.active; if (!sess) return;
    const ok = await confirmBox('End this session?', sess.isExam ? 'Ending now will grade the exam. Unanswered questions count as missed.' : 'Your answers so far are saved to your history.', 'End session');
    if (!ok) return;
    if (sess.isExam) E.finishExam(S, sess, MAP);
    const rec = E.archiveSession(S, sess); persist();
    if (S.history[0] && S.history[0].id === rec.id) { go('results', rec.id); focusMain('h1'); } else go('home');
  }
  async function finishExam() {
    const sess = S.active; if (!sess || !sess.isExam) return;
    const st = E.sessionStats(sess);
    const ok = await confirmBox('Finish the practice exam?', st.remaining ? `You have ${st.remaining} unanswered question${st.remaining > 1 ? 's' : ''}. They will count as missed. You can cancel to go back and review.` : 'All questions are answered. After finishing you will see your score and explanations. Answers can no longer be changed.', 'Finish and see results');
    if (!ok) return;
    E.finishExam(S, sess, MAP); const rec = E.archiveSession(S, sess); persist(); go('results', rec.id); focusMain('h1');
  }
  async function exportProgress() {
    const name = 'dmv-practice-progress-' + new Date().toISOString().slice(0, 10) + '.json';
    try {
      const file = new File([E.exportData(S)], name, { type: 'application/json' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'DMV practice progress backup' }); return; }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    try {
      const blob = new Blob([E.exportData(S)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
      a.download = 'dmv-practice-progress-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch (e) { showBanner('The backup file could not be created: ' + e.message); }
  }

  document.addEventListener('click', async e => {
    const nav = e.target.closest('[data-nav]'); if (nav) { go(nav.dataset.nav); focusMain('h1'); return; }
    const b = e.target.closest('[data-action]'); if (!b || b.disabled) return;
    const act = b.dataset.action;
    if (act === 'start') startMode(b.dataset.mode);
    else if (act === 'resume') { go('quiz'); focusMain('#qtext'); }
    else if (act === 'endActive') endSession();
    else if (act === 'submit') doSubmit();
    else if (act === 'next') doNext();
    else if (act === 'examNext') { if (S.active.index < S.active.qids.length - 1) { S.active.index++; persist(); render(); focusMain('#qtext'); } }
    else if (act === 'prev') { if (S.active.index > 0) { S.active.index--; persist(); render(); focusMain('#qtext'); } }
    else if (act === 'jump') { S.active.index = +b.dataset.i; persist(); render(); focusMain('#qtext'); }
    else if (act === 'finishExam') finishExam();
    else if (act === 'endSession') endSession();
    else if (act === 'bookmark') { const on = E.toggleBookmark(S, S.active.qids[S.active.index]); persist(); b.setAttribute('aria-pressed', on); b.textContent = on ? '★ Bookmarked' : '☆ Bookmark'; }
    else if (act === 'zoom') { const d = document.getElementById('zoom'); const im = document.getElementById('zoomImg'); im.src = b.dataset.src; im.alt = b.dataset.alt; document.getElementById('zoomAlt').textContent = b.dataset.alt; d.showModal(); d.querySelector('[data-close]').focus(); }
    else if (act === 'home') { go('home'); focusMain('h1'); }
    else if (act === 'nav') { go(b.dataset.to); focusMain('h1'); }
    else if (act === 'review') { go('review', b.dataset.id); focusMain('h1'); }
    else if (act === 'startMistakes') startMode('mistakes');
    else if (act === 'topicPractice') { go('home'); const sel = main.querySelector('#qpTopic'); sel.value = b.dataset.topic; startMode('quick'); }
    else if (act === 'export') exportProgress();
    else if (act === 'hbCacheAll') hbCacheAll(b);
    else if (act === 'hbPrev') hbGoPage(hbPage - 1);
    else if (act === 'hbNext') hbGoPage(hbPage + 1);
    else if (act === 'hbJump') hbGoPage(+b.dataset.page, true);
    else if (act === 'hbDelete') { const m = hbMarks(); if (b.dataset.kind === 'note') m.notes = m.notes.filter(n => n.id !== b.dataset.id); else m.hl = m.hl.filter(x => x.id !== b.dataset.id); persist(); hbRefreshLayer(); }
    else if (act === 'reset') {
      const ok = await confirmBox('Reset all progress?', 'This permanently deletes your saved answers, mistakes, bookmarks, history, and any unfinished session in this browser. Appearance settings and your handbook highlights and notes are kept. Consider exporting a backup first.', 'Yes, reset everything');
      if (ok) { S = E.resetProgress(S); persist(); go('progress'); }
    }
  });
  document.addEventListener('change', e => {
    if (e.target.name === 'choice' && view === 'quiz') setSelection(+e.target.value);
  });
  document.querySelector('#zoom [data-close]').addEventListener('click', () => document.getElementById('zoom').close());
  document.addEventListener('keydown', e => {
    if (view === 'handbook' && !document.querySelector('dialog[open]') && !/^(input|textarea|select)$/i.test(e.target.tagName || '')) {
      if (e.key === 'ArrowRight') { e.preventDefault(); hbGoPage(hbPage + 1); return; }
      if (e.key === 'ArrowLeft') { e.preventDefault(); hbGoPage(hbPage - 1); return; }
    }
    if (view !== 'quiz' || !S.active || document.querySelector('dialog[open]')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'select' || tag === 'textarea' || (tag === 'input' && e.target.type !== 'radio')) return;
    const sess = S.active, qid = sess.qids[sess.index], q = MAP[qid];
    const k = e.key.toLowerCase();
    const idx = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
    if (k.length === 1 && idx >= 0 && idx < q.choices.length) {
      if (!sess.isExam && sess.answers[qid]) return;
      e.preventDefault(); setSelection(sess.orders[qid][idx]);
      const inp = main.querySelector(`.choice[data-orig="${sess.orders[qid][idx]}"] input`); if (inp) inp.focus();
    } else if (e.key === 'Enter' && tag !== 'button' && tag !== 'a' && tag !== 'summary' && tag !== 'label') {
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
  document.getElementById('notice').textContent = (META.notice || '') + ' Content checked ' + (META.checkedDate || '') + '.';
  applySettings();
  if (!BANK.length || !E) { main.innerHTML = '<h1>Questions could not be loaded</h1><p>The question files are missing. Make sure the whole app folder was copied, including the "data" folder, then reopen the app.</p>'; }
  else {
    // Optional start page, e.g. index.html#handbook or #progress
    const [start, arg] = location.hash.replace('#', '').split('/');
    if (['handbook', 'progress', 'settings', 'sources', 'help'].includes(start)) view = start;
    if (start === 'handbook' && +arg > 0) hbPage = Math.min(+arg, HBP.length || 1);
    render();
  }
})();
