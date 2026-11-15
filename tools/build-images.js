// Generates every road-sign, signal, and diagram SVG used by the app.
// Run:  node tools/build-images.js
// Signs follow the standard shapes and colors shown in the California Driver's
// Handbook sign charts (Section 7) and the CA MUTCD. Pictograms are simplified
// line drawings; colors are fixed in the files and never themed.
'use strict';
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'img');

const C = {
  red: '#C8102E', yellow: '#FFD100', orange: '#F58220', green: '#00704A', blue: '#0B4EA2',
  black: '#111111', white: '#FFFFFF', fyg: '#C8DC28', road: '#5B5F64', roadLine: '#FFFFFF',
  dyellow: '#F2C200', grass: '#D5E6C3', walk: '#DCD6C8', curb: '#B9B3A6', dark: '#2B2B2B',
  you: '#1F6FEB', other: '#D9480F', other2: '#7048E8', sky: '#EAF3FB'
};
const F = 'font-family="Arial, Helvetica, sans-serif" font-weight="700"';

function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${body}</svg>\n`;
}
function T(x, y, size, txt, fill = C.black, anchor = 'middle', extra = '') {
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" ${F} ${extra}>${txt}</text>`;
}
function head(x, y, angle, size = 1, fill = C.black) {
  return `<polygon points="0,0 ${-17 * size},${24 * size} ${17 * size},${24 * size}" fill="${fill}" transform="translate(${x},${y}) rotate(${angle})"/>`;
}
function line(x1, y1, x2, y2, w = 12, col = C.black, cap = 'butt', extra = '') {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}" stroke-linecap="${cap}" ${extra}/>`;
}
function pathS(d, w = 12, col = C.black, extra = '') {
  return `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linejoin="round" ${extra}/>`;
}

// ---------- sign shells ----------
function diamond(inner, fill = C.yellow, border = C.black) {
  return svg(200, 200,
    `<polygon points="100,6 194,100 100,194 6,100" fill="${fill}" stroke="${fill}" stroke-width="8" stroke-linejoin="round"/>` +
    `<polygon points="100,2 198,100 100,198 2,100" fill="none" stroke="#666" stroke-width="1" stroke-linejoin="round"/>` +
    `<polygon points="100,14 186,100 100,186 14,100" fill="none" stroke="${border}" stroke-width="5" stroke-linejoin="round"/>` + inner);
}
function rectSign(w, h, inner, fill = C.white, border = C.black, r = 10) {
  return svg(w, h,
    `<rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="${r}" fill="${fill}" stroke="#777" stroke-width="1.2"/>` +
    `<rect x="7" y="7" width="${w - 14}" height="${h - 14}" rx="${r - 3}" fill="none" stroke="${border}" stroke-width="4"/>` + inner);
}
function prohibit() { // red circle + slash, 200x200 frame inside square sign
  return `<circle cx="100" cy="100" r="70" fill="none" stroke="${C.red}" stroke-width="13"/>` + line(51, 51, 149, 149, 13, C.red);
}

// ---------- pictograms ----------
function walker(x = 0, y = 0, s = 1, col = C.black) {
  return `<g transform="translate(${x},${y}) scale(${s})" stroke="${col}" fill="${col}" stroke-linecap="round" stroke-linejoin="round">` +
    `<circle cx="104" cy="50" r="12" stroke="none"/>` +
    line(101, 70, 95, 112, 17, col, 'round') +
    pathS('M100 76 L86 92 L80 108', 9, col) + pathS('M100 76 L114 90 L124 96', 9, col) +
    pathS('M95 112 L84 132 L74 152', 11, col) + pathS('M95 112 L110 130 L114 152', 11, col) + `</g>`;
}
function child(x, y, s, col = C.black) { // simple child figure, origin top
  return `<g transform="translate(${x},${y}) scale(${s})" stroke="${col}" fill="${col}" stroke-linecap="round" stroke-linejoin="round">` +
    `<circle cx="0" cy="0" r="10" stroke="none"/>` + line(0, 14, -3, 48, 15, col, 'round') +
    pathS('M-1 20 L-14 36', 8, col) + pathS('M-1 20 L12 34', 8, col) +
    pathS('M-3 48 L-14 74', 9, col) + pathS('M-3 48 L8 74', 9, col) + `</g>`;
}
function carTop(x, y, ang, col, label = '', wheelAng = null, scale = 1) {
  const wa = wheelAng === null ? 0 : wheelAng;
  const wheel = (cx, cy, r) => `<rect x="${cx - 4.5}" y="${cy - 9}" width="9" height="18" rx="2.5" fill="#111" stroke="#fff" stroke-width="1.2" transform="rotate(${r} ${cx} ${cy})"/>`;
  const wheels = wheelAng === null ? '' : wheel(-17, -15, wa) + wheel(17, -15, wa) + wheel(-17, 16, 0) + wheel(17, 16, 0);
  return `<g transform="translate(${x},${y}) rotate(${ang}) scale(${scale})">` +
    `<rect x="-15" y="-28" width="30" height="56" rx="8" fill="${col}" stroke="#222" stroke-width="1.5"/>` +
    `<rect x="-11" y="-16" width="22" height="10" rx="2" fill="#CFE3F5"/>` +
    `<rect x="-11" y="12" width="22" height="7" rx="2" fill="#CFE3F5"/>` + wheels +
    (label ? `<text x="0" y="5" font-size="9" fill="#fff" text-anchor="middle" ${F} transform="rotate(${-ang})">${label}</text>` : '') + `</g>`;
}
function truckTop(x, y, ang, col = '#868E96', label = '') {
  return `<g transform="translate(${x},${y}) rotate(${ang})">` +
    `<rect x="-18" y="-30" width="36" height="120" rx="3" fill="${col}" stroke="#222" stroke-width="1.5"/>` +
    `<rect x="-17" y="-62" width="34" height="28" rx="6" fill="#495057" stroke="#222" stroke-width="1.5"/>` +
    `<rect x="-13" y="-58" width="26" height="8" rx="2" fill="#CFE3F5"/>` +
    (label ? `<text x="0" y="35" font-size="11" fill="#fff" text-anchor="middle" ${F}>${label}</text>` : '') + `</g>`;
}
function carSide(x, y, ang, col, flip = false, label = '') {
  const sx = flip ? -1 : 1;
  return `<g transform="translate(${x},${y}) rotate(${ang}) scale(${sx},1)">` +
    `<path d="M-60 -10 L-56 -26 L-30 -28 L-16 -46 L24 -46 L40 -28 L58 -24 L62 -10 Z" fill="${col}" stroke="#222" stroke-width="2"/>` +
    `<path d="M-12 -42 L-24 -29 L2 -29 L2 -42 Z M6 -42 L6 -29 L34 -29 L22 -42 Z" fill="#CFE3F5"/>` +
    `<circle cx="-36" cy="-8" r="11" fill="#222"/><circle cx="38" cy="-8" r="11" fill="#222"/>` +
    `<circle cx="-36" cy="-8" r="4" fill="#bbb"/><circle cx="38" cy="-8" r="4" fill="#bbb"/>` +
    `<circle cx="60" cy="-20" r="3" fill="#FFF3A0"/></g>` +
    (label ? T(x, y - 58, 14, label, C.black) : '');
}
function flash(cx, cy, r, col) { // radiating lines to show a flashing light
  let s = '';
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    s += line((cx + Math.cos(a) * (r + 4)).toFixed(1), (cy + Math.sin(a) * (r + 4)).toFixed(1),
      (cx + Math.cos(a) * (r + 12)).toFixed(1), (cy + Math.sin(a) * (r + 12)).toFixed(1), 3, col, 'round');
  }
  return s;
}
function octagon(cx, cy, r, withText = true) {
  const pts = [], inner = [];
  for (let i = 0; i < 8; i++) {
    const a = Math.PI / 8 + i * Math.PI / 4;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
    inner.push(`${(cx + (r * 0.9) * Math.cos(a)).toFixed(1)},${(cy + (r * 0.9) * Math.sin(a)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${C.red}"/>` +
    `<polygon points="${inner.join(' ')}" fill="none" stroke="#fff" stroke-width="${(r * 0.05).toFixed(1)}"/>` +
    (withText ? T(cx, cy + r * 0.2, r * 0.56, 'STOP', '#fff', 'middle', '') : '');
}
function yieldTri(cx, cy, r, withText = true) {
  const p = (k) => `${(cx - k * 0.866 * r).toFixed(1)},${(cy - k * 0.5 * r).toFixed(1)} ${(cx + k * 0.866 * r).toFixed(1)},${(cy - k * 0.5 * r).toFixed(1)} ${cx},${(cy + k * r).toFixed(1)}`;
  return `<polygon points="${p(1)}" fill="${C.red}" stroke="${C.red}" stroke-width="${r * 0.06}" stroke-linejoin="round"/>` +
    `<polygon points="${p(0.55)}" fill="#fff"/>` +
    (withText ? T(cx, cy - r * 0.08, r * 0.2, 'YIELD', C.red) : '');
}

// ---------- signs ----------
const signs = {};
signs['stop'] = svg(200, 200, octagon(100, 100, 96));
signs['yield'] = svg(220, 200, yieldTri(110, 66, 124));
signs['do-not-enter'] = rectSign(200, 200,
  `<circle cx="100" cy="100" r="80" fill="${C.red}"/><rect x="34" y="88" width="132" height="24" fill="#fff"/>` +
  T(100, 76, 26, 'DO NOT', '#fff') + T(100, 142, 26, 'ENTER', '#fff'), C.white, C.white);
signs['wrong-way'] = rectSign(260, 170, T(130, 76, 44, 'WRONG', '#fff') + T(130, 128, 44, 'WAY', '#fff'), C.red, C.white);
const uturn = pathS('M120 150 L120 85 A26 26 0 0 0 68 85 L68 112', 16) + head(68, 140, 180, 1.2);
signs['no-u-turn'] = rectSign(200, 200, uturn + prohibit());
signs['no-left-turn'] = rectSign(200, 200, pathS('M118 155 L118 98 Q118 72 92 72 L72 72', 16) + head(52, 72, -90, 1.2) + prohibit());
signs['no-right-turn'] = rectSign(200, 200, pathS('M82 155 L82 98 Q82 72 108 72 L128 72', 16) + head(148, 72, 90, 1.2) + prohibit());
signs['no-turn-on-red'] = rectSign(170, 210, T(85, 62, 34, 'NO') + T(85, 102, 34, 'TURN') + T(85, 142, 34, 'ON') + T(85, 182, 34, 'RED', C.red));
signs['one-way-horizontal'] = svg(300, 100,
  `<rect x="1" y="1" width="298" height="98" rx="8" fill="${C.black}"/>` +
  `<polygon points="22,36 220,36 220,18 282,50 220,82 220,64 22,64" fill="#fff"/>` + T(118, 59, 25, 'ONE WAY', C.black));
signs['one-way-vertical'] = rectSign(170, 210, T(85, 62, 38, 'ONE') + T(85, 108, 38, 'WAY') +
  `<polygon points="30,150 112,150 112,132 146,160 112,188 112,170 30,170" fill="${C.black}"/>`);
signs['do-not-pass'] = rectSign(170, 210, T(85, 62, 36, 'DO') + T(85, 112, 36, 'NOT') + T(85, 162, 36, 'PASS'));
signs['slower-traffic-keep-right'] = rectSign(170, 230, T(85, 54, 26, 'SLOWER') + T(85, 98, 26, 'TRAFFIC') + T(85, 142, 26, 'KEEP') + T(85, 186, 26, 'RIGHT'));
signs['keep-right-arrow'] = rectSign(170, 210, T(85, 62, 34, 'KEEP') + `<polygon points="40,95 104,95 104,78 142,108 104,138 104,121 40,121" fill="${C.black}"/>` + T(85, 182, 34, 'RIGHT'));
signs['no-turns'] = rectSign(190, 160, T(95, 70, 42, 'NO') + T(95, 122, 42, 'TURNS'));
signs['do-not-block'] = rectSign(190, 170, T(95, 60, 32, 'DO NOT') + T(95, 102, 32, 'BLOCK') +
  `<rect x="22" y="118" width="146" height="32" fill="${C.black}"/>` + T(95, 141, 19, 'INTERSECTION', '#fff'));
signs['left-turn-yield-on-green'] = rectSign(170, 230, T(85, 48, 21, 'LEFT TURN') + T(85, 90, 30, 'YIELD') + T(85, 120, 21, 'ON GREEN') + `<circle cx="85" cy="170" r="30" fill="#1FA34A" stroke="#111" stroke-width="2"/>`);
signs['yield-to-uphill'] = rectSign(180, 220, T(90, 56, 32, 'YIELD') + T(90, 98, 24, 'TO') + T(90, 140, 32, 'UPHILL') + T(90, 182, 32, 'TRAFFIC'));
signs['two-way-traffic-ahead-white'] = rectSign(180, 200, T(90, 60, 32, 'TWO WAY') + T(90, 108, 32, 'TRAFFIC') + T(90, 156, 32, 'AHEAD'));
signs['emergency-parking-only'] = rectSign(240, 170, T(120, 52, 28, 'EMERGENCY') + T(120, 96, 28, 'PARKING') + T(120, 140, 28, 'ONLY'));
signs['no-parking-any-time'] = rectSign(150, 210, T(75, 58, 30, 'NO', C.red) + T(75, 104, 26, 'PARKING', C.red) + T(75, 142, 20, 'ANY', C.red) + T(75, 172, 20, 'TIME', C.red), C.white, C.red);
signs['left-turn-only'] = rectSign(170, 210, pathS('M100 160 L100 92 Q100 70 78 70 L66 70', 18) + head(46, 70, -90, 1.4) + T(85, 196, 30, 'ONLY'));
signs['speed-limit-65'] = rectSign(170, 220, T(85, 58, 30, 'SPEED') + T(85, 98, 30, 'LIMIT') + T(85, 190, 82, '65'));
signs['speed-limit-25'] = rectSign(170, 220, T(85, 58, 30, 'SPEED') + T(85, 98, 30, 'LIMIT') + T(85, 190, 82, '25'));
signs['turnout'] = rectSign(220, 200, T(110, 54, 26, 'SLOWER') + T(110, 96, 26, 'TRAFFIC') + T(110, 138, 26, 'USE') + T(110, 180, 26, 'TURNOUTS'));
signs['three-tracks'] = rectSign(170, 120, `<rect x="62" y="20" width="46" height="44" fill="none" stroke="#111" stroke-width="4"/>` + T(85, 56, 38, '3') + T(85, 102, 30, 'TRACKS'));
signs['rr-crossbuck'] = svg(240, 240,
  `<g transform="rotate(45 120 120)"><rect x="4" y="98" width="232" height="44" fill="#fff" stroke="#111" stroke-width="4"/>${T(58, 131, 26, 'RAIL')}${T(184, 131, 26, 'ROAD')}</g>` +
  `<g transform="rotate(-45 120 120)"><rect x="4" y="98" width="232" height="44" fill="#fff" stroke="#111" stroke-width="4"/>${T(58, 131, 26, 'CROSS')}${T(186, 131, 26, 'ING')}</g>`);
signs['rr-advance'] = svg(200, 200,
  `<circle cx="100" cy="100" r="96" fill="${C.yellow}" stroke="#666" stroke-width="1"/><circle cx="100" cy="100" r="88" fill="none" stroke="#111" stroke-width="5"/>` +
  line(45, 38, 155, 162, 14) + line(155, 38, 45, 162, 14) + T(52, 116, 44, 'R') + T(148, 116, 44, 'R'));
signs['school'] = svg(200, 220,
  `<polygon points="100,4 196,90 196,216 4,216 4,90" fill="${C.fyg}" stroke="#666" stroke-width="1" stroke-linejoin="round"/>` +
  `<polygon points="100,14 188,94 188,208 12,208 12,94" fill="none" stroke="#111" stroke-width="5" stroke-linejoin="round"/>` +
  child(78, 96, 1.25) + child(126, 106, 1.05) + line(40, 196, 160, 196, 4));
// warning diamonds
signs['slippery-when-wet'] = diamond(
  `<path d="M70 82 L76 64 Q78 58 86 58 L114 58 Q122 58 124 64 L130 82 L134 82 Q138 82 138 88 L138 104 L62 104 L62 88 Q62 82 66 82 Z" fill="#111"/>` +
  `<rect x="66" y="104" width="12" height="10" rx="2" fill="#111"/><rect x="122" y="104" width="12" height="10" rx="2" fill="#111"/>` +
  `<rect x="80" y="64" width="40" height="14" rx="2" fill="${C.yellow}"/>` +
  pathS('M80 120 Q66 134 80 146 Q94 158 80 172', 6) + pathS('M120 120 Q106 134 120 146 Q134 158 120 172', 6));
signs['merging-traffic'] = diamond(line(112, 172, 112, 66, 14) + head(112, 44, 0, 1.3) + pathS('M66 160 Q70 118 110 100', 12));
signs['divided-highway'] = diamond(
  `<path d="M90 42 L110 42 L110 98 Q110 110 100 118 Q90 110 90 98 Z" fill="#111"/>` +
  pathS('M74 48 L74 104 Q74 124 88 136 L88 150', 11) + head(88, 172, 180, 0.9) +
  pathS('M112 172 L112 138 Q126 124 126 104 L126 62', 11) + head(126, 40, 0, 0.9));
signs['end-divided-highway'] = diamond(
  `<path d="M90 160 L110 160 L110 104 Q110 92 100 84 Q90 92 90 104 Z" fill="#111"/>` +
  pathS('M88 46 L88 62 Q74 76 74 96 L74 146', 11) + head(74, 168, 180, 0.9) +
  pathS('M126 162 L126 96 Q126 76 112 64 L112 60', 11) + head(112, 38, 0, 0.9));
signs['two-way-traffic'] = diamond(line(78, 160, 78, 62, 13) + head(78, 40, 0, 1.1) + line(122, 40, 122, 138, 13) + head(122, 160, 180, 1.1));
signs['lane-ends'] = diamond(line(72, 170, 72, 30, 9) + `<line x1="100" y1="170" x2="100" y2="110" stroke="#111" stroke-width="7" stroke-dasharray="14 10"/>` +
  pathS('M128 170 L128 112 L102 78 L102 30', 9));
signs['added-lane'] = diamond(line(126, 172, 126, 62, 12) + head(126, 40, 0, 1.0) +
  `<line x1="100" y1="168" x2="100" y2="40" stroke="#111" stroke-width="5" stroke-dasharray="12 9"/>` +
  pathS('M58 156 Q62 110 80 96 L80 70', 12) + head(80, 48, 0, 1.0));
signs['signal-ahead'] = diamond(`<rect x="78" y="40" width="44" height="120" rx="8" fill="#111"/>` +
  `<circle cx="100" cy="62" r="13" fill="#E03131"/><circle cx="100" cy="100" r="13" fill="#FCC419"/><circle cx="100" cy="138" r="13" fill="#2F9E44"/>`);
signs['pedestrian-crossing'] = diamond(walker(-4, 2, 1));
signs['crossroad'] = diamond(line(100, 40, 100, 160, 22) + line(40, 100, 160, 100, 22));
signs['stop-ahead'] = diamond(line(100, 104, 100, 62, 13) + head(100, 40, 0, 1.1) + octagon(100, 132, 30, false));
signs['yield-ahead'] = diamond(line(100, 100, 100, 62, 13) + head(100, 40, 0, 1.1) + yieldTri(100, 120, 40, false));
signs['directional-arrow'] = svg(300, 120, `<rect x="1" y="1" width="298" height="118" rx="10" fill="${C.yellow}" stroke="#666" stroke-width="1"/>` +
  `<rect x="8" y="8" width="284" height="104" rx="7" fill="none" stroke="#111" stroke-width="5"/>` +
  `<polygon points="30,60 92,22 92,46 268,46 268,74 92,74 92,98" fill="#111"/>`);
signs['curve-left'] = diamond(pathS('M112 166 L112 112 Q112 84 90 70', 14) + head(76, 58, -55, 1.15));
signs['curve-right'] = diamond(pathS('M88 166 L88 112 Q88 84 110 70', 14) + head(124, 58, 55, 1.15));
signs['t-intersection'] = diamond(line(42, 76, 158, 76, 22) + line(100, 76, 160 - 0, 160, 0) + line(100, 70, 100, 160, 22));
signs['winding-road'] = diamond(pathS('M96 168 Q74 150 96 132 Q118 114 96 96 Q74 78 96 62', 12) + head(102, 42, 18, 1.0));
signs['side-road'] = diamond(line(90, 40, 90, 160, 20) + line(90, 100, 152, 100, 20));
// construction (orange)
const orangeText = (lines, size = 22) => diamond(lines.map((t, i) => T(100, 100 - (lines.length - 1) * size * 0.62 + i * size * 1.24 + size * 0.36, size, t)).join(''), C.orange);
signs['road-work-ahead'] = orangeText(['ROAD', 'WORK', 'AHEAD'], 26);
signs['road-closed-ahead'] = orangeText(['ROAD', 'CLOSED', 'AHEAD'], 24);
signs['shoulder-work-ahead'] = orangeText(['SHOULDER', 'WORK', 'AHEAD'], 20);
signs['thru-traffic-merge-left'] = orangeText(['THRU', 'TRAFFIC', 'MERGE', 'LEFT'], 21);
signs['flagger'] = diamond(
  `<g stroke="#111" fill="#111" stroke-linecap="round" stroke-linejoin="round">` +
  `<circle cx="96" cy="58" r="12" stroke="none"/>` + line(96, 76, 96, 122, 20, '#111', 'round') +
  pathS('M96 84 L126 76', 9) + line(128, 46, 128, 104, 4) + `<rect x="129" y="46" width="30" height="22" fill="#111"/>` +
  pathS('M96 86 L80 108', 9) + pathS('M92 122 L86 160', 11) + pathS('M100 122 L106 160', 11) + `</g>`, C.orange);
// guide, emblems, placards
signs['rest-area'] = svg(260, 150, `<rect x="1" y="1" width="258" height="148" rx="12" fill="${C.blue}"/><rect x="8" y="8" width="244" height="134" rx="8" fill="none" stroke="#fff" stroke-width="4"/>` +
  T(130, 68, 36, 'REST AREA', '#fff') + T(130, 118, 32, '1 MILE', '#fff'));
signs['airport'] = svg(180, 180, `<rect x="1" y="1" width="178" height="178" rx="12" fill="${C.green}"/><rect x="8" y="8" width="164" height="164" rx="8" fill="none" stroke="#fff" stroke-width="4"/>` +
  `<path d="M90 28 Q98 28 98 44 L98 76 L148 104 L148 118 L98 102 L98 136 L114 148 L114 158 L90 150 L66 158 L66 148 L82 136 L82 102 L32 118 L32 104 L82 76 L82 44 Q82 28 90 28 Z" fill="#fff"/>`);
signs['slow-moving-vehicle'] = svg(220, 200,
  `<polygon points="110,8 212,190 8,190" fill="${C.red}" stroke="${C.red}" stroke-width="10" stroke-linejoin="round"/>` +
  `<polygon points="110,52 174,166 46,166" fill="${C.orange}"/>`);
signs['hazmat-flammable'] = svg(200, 200,
  `<polygon points="100,4 196,100 100,196 4,100" fill="${C.red}" stroke="#555" stroke-width="1"/>` +
  `<polygon points="100,14 186,100 100,186 14,100" fill="none" stroke="#fff" stroke-width="3"/>` +
  `<path d="M100 36 Q122 62 114 82 Q126 74 124 60 Q142 82 130 104 L70 104 Q60 84 78 66 Q80 80 88 84 Q80 58 100 36 Z" fill="#fff"/>` +
  T(100, 132, 17, 'FLAMMABLE', '#fff') + T(100, 172, 24, '3', '#fff'));

// ---------- traffic and pedestrian signals ----------
const signals = {};
function signalHead(states, opts = {}) {
  // states: array of 3 objects {color, lit, arrow:'left'|null, flash}
  const w = 130, h = 330;
  let s = `<rect x="0" y="0" width="${w}" height="${h}" fill="${C.sky}"/>` +
    `<rect x="25" y="20" width="80" height="290" rx="14" fill="#222" stroke="#000" stroke-width="2"/>`;
  states.forEach((st, i) => {
    const cy = 68 + i * 97;
    const lamp = st.lit ? st.color : '#3d3d3d';
    if (st.arrow) {
      s += `<circle cx="65" cy="${cy}" r="34" fill="#151515"/>`;
      const col = st.lit ? st.color : '#3d3d3d';
      s += `<g transform="translate(65,${cy})">` + line(18, 0, -6, 0, 12, col) + head(-20, 0, -90, 0.9, col) + `</g>`;
    } else {
      s += `<circle cx="65" cy="${cy}" r="34" fill="${lamp}"/>`;
    }
    if (st.lit && st.flash) s += flash(65, cy, 38, st.color);
  });
  return svg(w, h, s);
}
const L = (color, lit, extra = {}) => Object.assign({ color, lit }, extra);
signals['solid-red'] = signalHead([L('#FA2A2A', true), L('#FFC400', false), L('#22C55E', false)]);
signals['flashing-red'] = signalHead([L('#FA2A2A', true, { flash: true }), L('#FFC400', false), L('#22C55E', false)]);
signals['solid-yellow'] = signalHead([L('#FA2A2A', false), L('#FFC400', true), L('#22C55E', false)]);
signals['flashing-yellow'] = signalHead([L('#FA2A2A', false), L('#FFC400', true, { flash: true }), L('#22C55E', false)]);
signals['solid-green'] = signalHead([L('#FA2A2A', false), L('#FFC400', false), L('#22C55E', true)]);
signals['red-arrow'] = signalHead([L('#FA2A2A', true, { arrow: 'left' }), L('#FFC400', false, { arrow: 'left' }), L('#22C55E', false, { arrow: 'left' })]);
signals['yellow-arrow'] = signalHead([L('#FA2A2A', false, { arrow: 'left' }), L('#FFC400', true, { arrow: 'left' }), L('#22C55E', false, { arrow: 'left' })]);
signals['green-arrow'] = signalHead([L('#FA2A2A', false, { arrow: 'left' }), L('#FFC400', false, { arrow: 'left' }), L('#22C55E', true, { arrow: 'left' })]);
signals['flashing-yellow-arrow'] = signalHead([L('#FA2A2A', false, { arrow: 'left' }), L('#FFC400', true, { arrow: 'left', flash: true }), L('#22C55E', false, { arrow: 'left' })]);
signals['dark-signal'] = signalHead([L('#FA2A2A', false), L('#FFC400', false), L('#22C55E', false)]);
function pedHead(inner) {
  return svg(200, 200, `<rect width="200" height="200" fill="${C.sky}"/><rect x="20" y="20" width="160" height="160" rx="12" fill="#1b1b1b" stroke="#000" stroke-width="2"/>` + inner);
}
signals['ped-walk'] = pedHead(walker(-4, 6, 0.95, '#F1F3F5'));
const hand = (x, col) => `<path d="M${x - 24} 150 L${x - 24} 96 Q${x - 24} 88 ${x - 18} 88 Q${x - 12} 88 ${x - 12} 96 L${x - 12} 66 Q${x - 12} 58 ${x - 6} 58 Q${x} 58 ${x} 66 L${x} 60 Q${x} 52 ${x + 6} 52 Q${x + 12} 52 ${x + 12} 60 L${x + 12} 66 Q${x + 12} 60 ${x + 18} 60 Q${x + 24} 60 ${x + 24} 68 L${x + 24} 104 L${x + 34} 92 Q${x + 42} 86 ${x + 46} 94 L${x + 30} 132 Q${x + 22} 150 ${x} 150 Z" fill="${col}"/>`;
signals['ped-dont-walk'] = pedHead(hand(96, '#FF8C1A'));
signals['ped-flashing-hand-countdown'] = pedHead(hand(66, '#FF8C1A') + flash(70, 100, 46, '#FF8C1A').replace(/stroke-width="3"/g, 'stroke-width="2"') +
  T(146, 118, 46, '12', '#FF8C1A'));

// ---------- diagrams ----------
const D = {};
function frame(w, h, body) { return svg(w, h, `<rect width="${w}" height="${h}" fill="${C.grass}"/>` + body); }
function hroad(y, h, lanes) { // horizontal road band
  return `<rect x="0" y="${y}" width="400" height="${h}" fill="${C.road}"/>`;
}
function dashH(y, col = '#fff', x1 = 0, x2 = 400, w = 3) { return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${col}" stroke-width="${w}" stroke-dasharray="18 14"/>`; }
function solidH(y, col = '#fff', x1 = 0, x2 = 400, w = 3) { return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${col}" stroke-width="${w}"/>`; }
function dottedPath(d, col = C.you) { return `<path d="${d}" fill="none" stroke="${col}" stroke-width="4" stroke-dasharray="8 7" stroke-linecap="round"/>`; }
function arrowTip(x, y, ang, col = C.you) { return `<polygon points="0,0 -8,12 8,12" fill="${col}" transform="translate(${x},${y}) rotate(${ang})"/>`; }
function labelBox(x, y, txt, size = 13) {
  const w = txt.length * size * 0.62 + 12;
  return `<rect x="${x - w / 2}" y="${y - size}" width="${w}" height="${size + 8}" rx="4" fill="#fff" stroke="#333" stroke-width="1"/>` + T(x, y + 1, size, txt);
}

// Hill parking, side views
function hillSide(dir, curb) {
  // slope rising to the right; dir 'up' = car faces right
  const ang = -12;
  let s = `<rect width="420" height="260" fill="${C.sky}"/>` +
    `<polygon points="0,236 420,146 420,260 0,260" fill="#8A8F94"/>`;
  if (curb) s += `<polygon points="0,244 420,154 420,170 0,260" fill="${C.curb}" stroke="#777" stroke-width="1"/>` + labelBox(330, 205, 'CURB');
  else s += `<polygon points="0,244 420,154 420,170 0,260" fill="#B08D57"/>` + labelBox(300, 212, 'NO CURB (dirt shoulder)');
  s += carSide(200, 194, ang, C.you, dir === 'down');
  s += dir === 'up' ? labelBox(110, 60, 'Car is facing UPHILL') + `<path d="M60 92 L160 70" stroke="#333" stroke-width="3"/>` + arrowTip(160, 70, 78, '#333')
    : labelBox(110, 60, 'Car is facing DOWNHILL') + `<path d="M170 70 L70 92" stroke="#333" stroke-width="3"/>` + arrowTip(70, 92, -102, '#333');
  return svg(420, 260, s);
}
D['hill-uphill-curb'] = hillSide('up', true);
D['hill-downhill-curb'] = hillSide('down', true);
D['hill-uphill-no-curb'] = hillSide('up', false);
D['hill-downhill-no-curb'] = hillSide('down', false);
// three wheel positions (top view), curb on right, car faces top of picture
(function () {
  let s = `<rect width="420" height="260" fill="${C.road}"/>`;
  const pos = [['A', 25], ['B', 0], ['C', -25]];
  pos.forEach(([lab, wa], i) => {
    const x0 = i * 140;
    s += `<rect x="${x0 + 104}" y="0" width="12" height="230" fill="${C.curb}"/><rect x="${x0 + 116}" y="0" width="22" height="230" fill="${C.walk}"/>`;
    s += carTop(x0 + 72, 120, 0, C.you, '', wa, 1.6);
    s += `<rect x="${x0 + 50}" y="232" width="44" height="24" rx="4" fill="#fff"/>` + T(x0 + 72, 251, 18, lab);
    s += T(x0 + 127, 118, 10, 'CURB', '#333', 'middle', `transform="rotate(90 ${x0 + 127} 118)"`);
  });
  s += `<rect x="0" y="0" width="420" height="22" fill="rgba(255,255,255,0.85)"/>` + T(210, 16, 13, 'Front of car points to the top of the picture. Curb is on the right.');
  D['wheel-positions'] = svg(420, 260, s);
})();

// two-lane road helpers (traffic drives on the right; your lane is the bottom lane heading right)
function twoLane(center, extra = '') {
  return frame(400, 260, `<rect x="0" y="70" width="400" height="120" fill="${C.road}"/>` + solidH(74, '#fff') + solidH(186, '#fff') + center + extra);
}
const dbl = (y = 130) => solidH(y - 4, C.dyellow, 0, 400, 3.5) + solidH(y + 4, C.dyellow, 0, 400, 3.5);
D['double-yellow-driveway'] = twoLane(dbl(),
  `<rect x="250" y="0" width="70" height="72" fill="#A9A49A"/>` + labelBox(285, 30, 'Driveway') +
  carTop(150, 160, 90, C.you, 'YOU') + dottedPath('M180 160 Q260 160 280 90') + arrowTip(282, 82, 10) +
  carTop(60, 100, -90, C.other));
D['double-yellow-pass'] = twoLane(dbl(),
  carTop(90, 160, 90, C.you, 'YOU') + `<rect x="170" y="144" width="90" height="34" rx="4" fill="#868E96" stroke="#222"/>` + T(215, 166, 12, 'SLOW TRUCK', '#fff') +
  dottedPath('M120 156 Q150 100 215 100 Q280 100 300 156') + arrowTip(302, 162, 160));
D['double-double-yellow'] = frame(400, 260, `<rect x="0" y="70" width="400" height="130" fill="${C.road}"/>` + solidH(74, '#fff') + solidH(196, '#fff') +
  solidH(116, C.dyellow, 0, 400, 3.5) + solidH(123, C.dyellow, 0, 400, 3.5) + solidH(147, C.dyellow, 0, 400, 3.5) + solidH(154, C.dyellow, 0, 400, 3.5) +
  labelBox(335, 140, '2 ft or more', 11) + `<rect x="200" y="0" width="70" height="72" fill="#A9A49A"/>` + labelBox(235, 30, 'Driveway') +
  carTop(110, 176, 90, C.you, 'YOU') + dottedPath('M140 176 Q210 176 232 92', '#C92A2A') + arrowTip(234, 84, 10, '#C92A2A') + T(170, 236, 14, 'Planned left turn (dotted line)'));
D['yellow-broken-your-side'] = twoLane(solidH(126, C.dyellow, 0, 400, 3.5) + `<line x1="0" y1="134" x2="400" y2="134" stroke="${C.dyellow}" stroke-width="3.5" stroke-dasharray="18 14"/>`,
  carTop(110, 160, 90, C.you, 'YOU') + carTop(230, 160, 90, '#868E96') + T(200, 236, 13, 'Your lane is the bottom lane, moving right'));
D['yellow-solid-your-side'] = twoLane(`<line x1="0" y1="126" x2="400" y2="126" stroke="${C.dyellow}" stroke-width="3.5" stroke-dasharray="18 14"/>` + solidH(134, C.dyellow, 0, 400, 3.5),
  carTop(110, 160, 90, C.you, 'YOU') + carTop(230, 160, 90, '#868E96') + T(200, 236, 13, 'Your lane is the bottom lane, moving right'));
D['center-left-turn-lane'] = frame(400, 260, `<rect x="0" y="50" width="400" height="160" fill="${C.road}"/>` + solidH(54) + solidH(206) +
  solidH(100, C.dyellow, 0, 400, 3.5) + `<line x1="0" y1="108" x2="400" y2="108" stroke="${C.dyellow}" stroke-width="3.5" stroke-dasharray="18 14"/>` +
  `<line x1="0" y1="152" x2="400" y2="152" stroke="${C.dyellow}" stroke-width="3.5" stroke-dasharray="18 14"/>` + solidH(160, C.dyellow, 0, 400, 3.5) +
  carTop(150, 130, 90, C.you, 'YOU') + carTop(80, 184, 90, '#868E96') + carTop(300, 78, -90, C.other) +
  `<rect x="290" y="0" width="60" height="52" fill="#A9A49A"/>` + labelBox(320, 26, 'Store'));
D['yield-line'] = frame(400, 260, `<rect x="140" y="0" width="120" height="260" fill="${C.road}"/>` + `<rect x="0" y="40" width="400" height="80" fill="${C.road}"/>` +
  [0, 1, 2, 3, 4].map(i => `<polygon points="${148 + i * 22},128 ${168 + i * 22},128 ${158 + i * 22},146" fill="#fff"/>`).join('') +
  `<line x1="200" y1="160" x2="200" y2="260" stroke="${C.dyellow}" stroke-width="3"/>` + carTop(230, 210, 0, C.you, 'YOU') + carTop(170, 210, 0, '#868E96'));
D['hov-lane'] = frame(400, 260, `<rect x="0" y="40" width="400" height="180" fill="${C.road}"/>` + solidH(44, C.dyellow, 0, 400, 3.5) + solidH(216) +
  solidH(96, '#fff', 0, 230, 3) + solidH(104, '#fff', 0, 230, 3) + dashH(100, '#fff', 230, 400) + dashH(158) +
  `<polygon points="80,58 98,70 80,82 62,70" fill="none" stroke="#fff" stroke-width="3"/>` + T(150, 76, 13, 'CARPOOL LANE', '#fff') +
  carTop(110, 130, 90, C.you, 'YOU') + labelBox(115, 240, 'Double solid white lines', 12) + labelBox(320, 240, 'Single broken white line', 12));
D['following-distance'] = frame(400, 260, `<rect x="0" y="90" width="400" height="90" fill="${C.road}"/>` + solidH(94) + solidH(176) + dashH(135, C.dyellow) +
  `<rect x="250" y="138" width="110" height="34" rx="4" fill="#868E96" stroke="#222"/>` + T(305, 160, 12, 'VEHICLE AHEAD', '#fff') +
  carTop(110, 156, 90, C.you, 'YOU') + `<rect x="246" y="186" width="6" height="50" fill="#555"/><rect x="232" y="186" width="34" height="18" fill="#fff" stroke="#333"/>` +
  labelBox(250, 252, 'Fixed point (signpost)', 11));
function intersection(extra) {
  return frame(400, 300, `<rect x="160" y="0" width="80" height="300" fill="${C.road}"/><rect x="0" y="110" width="400" height="80" fill="${C.road}"/>` +
    `<line x1="200" y1="0" x2="200" y2="110" stroke="${C.dyellow}" stroke-width="3"/><line x1="200" y1="190" x2="200" y2="300" stroke="${C.dyellow}" stroke-width="3"/>` +
    `<line x1="0" y1="150" x2="160" y2="150" stroke="${C.dyellow}" stroke-width="3"/><line x1="240" y1="150" x2="400" y2="150" stroke="${C.dyellow}" stroke-width="3"/>` + extra);
}
const miniStop = (x, y) => octagon(x, y, 13, false) + T(x, y + 3, 8, 'STOP', '#fff');
D['four-way-stop'] = intersection(miniStop(260, 210) + miniStop(140, 90) + miniStop(140, 210) + miniStop(260, 90) +
  carTop(220, 222, 0, C.you, 'YOU') + carTop(272, 130, -90, C.other) + labelBox(320, 285, 'Both cars stopped at the same time', 11));
D['t-intersection'] = frame(400, 300, `<rect x="0" y="70" width="400" height="80" fill="${C.road}"/><rect x="160" y="150" width="80" height="150" fill="${C.road}"/>` +
  `<line x1="0" y1="110" x2="400" y2="110" stroke="${C.dyellow}" stroke-width="3"/><line x1="200" y1="150" x2="200" y2="300" stroke="${C.dyellow}" stroke-width="3"/>` +
  carTop(220, 196, 0, C.you, 'YOU') + carTop(90, 130, 90, C.other) + labelBox(200, 30, 'No STOP or YIELD signs', 12));
D['roundabout'] = frame(400, 300, `<rect x="165" y="0" width="70" height="300" fill="${C.road}"/><rect x="0" y="115" width="400" height="70" fill="${C.road}"/>` +
  `<circle cx="200" cy="150" r="92" fill="${C.road}"/><circle cx="200" cy="150" r="44" fill="${C.grass}" stroke="#aaa" stroke-width="3"/>` +
  carTop(218, 270, 0, C.you, 'YOU') + carTop(140, 118, -40, C.other));
D['freeway-merge'] = frame(420, 260, `<rect x="0" y="40" width="420" height="120" fill="${C.road}"/>` + solidH(44, C.dyellow, 0, 420) + dashH(100, '#fff', 0, 420) + solidH(156, '#fff', 0, 170) +
  `<polygon points="0,230 0,180 170,156 420,156 420,160 200,200 0,250" fill="${C.road}"/>` + `<line x1="0" y1="205" x2="190" y2="160" stroke="#fff" stroke-width="3"/>` +
  carTop(90, 205, 77, C.you, 'YOU') + carTop(250, 130, 90, '#868E96') + carTop(150, 70, 90, C.other) + labelBox(80, 248, 'On-ramp', 12));
D['truck-side-car'] = frame(400, 260, `<rect x="0" y="40" width="400" height="180" fill="${C.road}"/>` + dashH(130) + solidH(44) + solidH(216) +
  `<g transform="rotate(90 200 85)">${truckTop(200, 85, 0, '#868E96', '')}</g>` + carTop(150, 175, 90, C.you, 'YOU') +
  labelBox(330, 245, 'Truck is moving right', 11));
D['school-bus-two-lane'] = twoLane(dashH(130, C.dyellow),
  `<rect x="200" y="82" width="120" height="40" rx="5" fill="#F8B400" stroke="#222"/>` + T(260, 107, 12, 'SCHOOL BUS') +
  `<circle cx="206" cy="90" r="4" fill="#E03131"/><circle cx="206" cy="114" r="4" fill="#E03131"/>` + flash(206, 90, 5, '#E03131') + flash(206, 114, 5, '#E03131') +
  `<polygon points="300,124 316,124 316,140 300,140" fill="#E03131"/>` + T(308, 135, 7, 'STOP', '#fff') +
  carTop(90, 160, 90, C.you, 'YOU') + T(200, 236, 13, 'Two-lane road. Red lights on the bus are flashing.'));
D['school-bus-divided'] = frame(400, 300, `<rect x="0" y="30" width="400" height="100" fill="${C.road}"/><rect x="0" y="130" width="400" height="30" fill="#8AA36A"/><rect x="0" y="160" width="400" height="100" fill="${C.road}"/>` +
  dashH(80) + dashH(210) + `<rect x="230" y="40" width="120" height="36" rx="5" fill="#F8B400" stroke="#222"/>` + T(290, 63, 12, 'SCHOOL BUS') +
  flash(236, 48, 5, '#E03131') + `<circle cx="236" cy="48" r="4" fill="#E03131"/>` + carTop(90, 236, 90, C.you, 'YOU') + T(200, 150, 12, 'MEDIAN (divider)', '#24361a') +
  T(200, 290, 12, 'Divided highway, two lanes each way. Bus red lights flashing.'));
D['railroad-gates'] = frame(400, 300, `<rect x="160" y="0" width="80" height="300" fill="${C.road}"/>` +
  `<rect x="0" y="96" width="400" height="48" fill="#9C8A72"/>` + [0, 1].map(k => line(0, 108 + k * 24, 400, 108 + k * 24, 4, '#444')).join('') +
  Array.from({ length: 20 }, (_, i) => `<rect x="${i * 21}" y="100" width="8" height="40" fill="#5c4a35"/>`).join('') +
  `<rect x="248" y="160" width="10" height="70" fill="#444"/><circle cx="246" cy="164" r="8" fill="#E03131"/>` + flash(246, 164, 9, '#E03131') +
  `<g>${Array.from({ length: 8 }, (_, i) => `<rect x="${250 - (i + 1) * 12}" y="176" width="12" height="7" fill="${i % 2 ? '#fff' : '#E03131'}"/>`).join('')}</g>` +
  carTop(200, 255, 0, C.you, 'YOU'));
D['bike-passing'] = twoLane(dashH(130, C.dyellow),
  `<g transform="translate(250,168)"><circle cx="-14" cy="0" r="9" fill="none" stroke="#111" stroke-width="3"/><circle cx="14" cy="0" r="9" fill="none" stroke="#111" stroke-width="3"/>` +
  line(-14, 0, 2, -12, 3) + line(14, 0, 2, -12, 3) + `<circle cx="2" cy="-22" r="5" fill="#111"/></g>` +
  carTop(120, 150, 90, C.you, 'YOU') + `<line x1="190" y1="142" x2="190" y2="160" stroke="#C92A2A" stroke-width="3"/>` + labelBox(165, 236, 'Space between car and bicyclist = ?', 12));
function curbColor(col) {
  return svg(400, 220, `<rect width="400" height="90" fill="${C.walk}"/><rect x="0" y="90" width="400" height="22" fill="${col}" stroke="#555" stroke-width="1"/>` +
    `<rect x="0" y="112" width="400" height="108" fill="${C.road}"/>` + labelBox(200, 50, 'Sidewalk') + labelBox(200, 175, 'Street'));
}
D['curb-red'] = curbColor('#D7263D');
D['curb-white'] = curbColor('#FFFFFF');
D['curb-green'] = curbColor('#2B9348');
D['curb-yellow'] = curbColor('#F5C400');
D['curb-blue'] = curbColor('#1C64F2');
function handSignal(kind) {
  let arm;
  if (kind === 'left') arm = line(150, 118, 40, 118, 16, '#E0A47A', 'round');
  if (kind === 'right') arm = line(150, 118, 84, 118, 16, '#E0A47A', 'round') + line(84, 118, 84, 52, 16, '#E0A47A', 'round');
  if (kind === 'stop') arm = line(150, 118, 84, 118, 16, '#E0A47A', 'round') + line(84, 118, 84, 182, 16, '#E0A47A', 'round');
  return svg(400, 260, `<rect width="400" height="260" fill="${C.sky}"/><rect x="0" y="220" width="400" height="40" fill="${C.road}"/>` +
    `<path d="M130 220 L130 120 Q130 80 170 74 L300 74 Q340 80 340 120 L340 220 Z" fill="${C.you}" stroke="#222" stroke-width="2"/>` +
    `<rect x="150" y="92" width="170" height="48" rx="8" fill="#CFE3F5"/><rect x="150" y="160" width="190" height="16" fill="#E03131" opacity="0.8"/>` +
    `<circle cx="180" cy="114" r="12" fill="#5c4033"/>` + arm + T(235, 205, 12, 'Driver seen from behind', '#fff'));
}
D['hand-left'] = handSignal('left');
D['hand-right'] = handSignal('right');
D['hand-stop'] = handSignal('stop');
D['emergency-behind'] = twoLane(dashH(130, C.dyellow),
  carTop(230, 160, 90, C.you, 'YOU') + `<rect x="40" y="144" width="96" height="32" rx="4" fill="#E03131" stroke="#222"/>` + T(88, 165, 11, 'FIRE ENGINE', '#fff') +
  flash(130, 150, 4, '#E03131') + flash(130, 170, 4, '#1C64F2') + T(200, 236, 13, 'Siren on, red lights flashing, coming up behind you'));
D['blind-spot-zones'] = frame(400, 300, `<rect x="0" y="0" width="400" height="300" fill="${C.road}"/>` + dashH(0) +
  `<line x1="140" y1="0" x2="140" y2="300" stroke="#fff" stroke-width="3" stroke-dasharray="18 14"/><line x1="260" y1="0" x2="260" y2="300" stroke="#fff" stroke-width="3" stroke-dasharray="18 14"/>` +
  carTop(200, 150, 0, C.you, 'YOU', null, 1.6) +
  `<circle cx="200" cy="40" r="16" fill="#fff"/>` + T(200, 46, 16, 'A') + `<circle cx="100" cy="190" r="16" fill="#fff"/>` + T(100, 196, 16, 'B') +
  `<circle cx="200" cy="270" r="16" fill="#fff"/>` + T(200, 276, 16, 'C') + labelBox(320, 20, 'Car faces up', 11));
D['lane-numbers'] = frame(400, 260, `<rect x="40" y="0" width="320" height="260" fill="${C.road}"/>` + `<line x1="44" y1="0" x2="44" y2="260" stroke="${C.dyellow}" stroke-width="3"/>` +
  [120, 200, 280].map(x => `<line x1="${x}" y1="0" x2="${x}" y2="260" stroke="#fff" stroke-width="3" stroke-dasharray="18 14"/>`).join('') +
  `<line x1="356" y1="0" x2="356" y2="260" stroke="#fff" stroke-width="3"/>` +
  ['A', 'B', 'C', 'D'].map((l, i) => `<circle cx="${82 + i * 80}" cy="200" r="16" fill="#fff"/>` + T(82 + i * 80, 206, 16, l)).join('') +
  `<polygon points="200,30 216,58 184,58" fill="#fff"/>` + T(200, 80, 12, 'All lanes travel this way', '#fff') + T(20, 130, 11, 'Median', '#24361a', 'middle', 'transform="rotate(-90 20 130)"'));
D['limit-line'] = frame(400, 300, `<rect x="140" y="0" width="120" height="300" fill="${C.road}"/><rect x="0" y="40" width="400" height="80" fill="${C.road}"/>` +
  Array.from({ length: 6 }, (_, i) => `<rect x="${148 + i * 19}" y="128" width="10" height="34" fill="#fff"/>`).join('') +
  `<rect x="200" y="176" width="60" height="7" fill="#fff"/>` + `<line x1="200" y1="176" x2="200" y2="300" stroke="${C.dyellow}" stroke-width="3"/>` +
  carTop(230, 250, 0, C.you, 'YOU') + `<circle cx="290" cy="196" r="13" fill="#fff"/>` + T(290, 201, 14, 'A') +
  `<circle cx="290" cy="145" r="13" fill="#fff"/>` + T(290, 150, 14, 'B') + `<circle cx="290" cy="80" r="13" fill="#fff"/>` + T(290, 85, 14, 'C') +
  line(270, 196, 262, 180, 2, '#fff') + labelBox(330, 290, 'Wide white line + crosswalk', 11));
D['stalled-on-tracks'] = frame(420, 300, `<rect x="180" y="0" width="70" height="300" fill="${C.road}"/>` + `<rect x="0" y="126" width="420" height="48" fill="#9C8A72"/>` +
  [0, 1].map(k => line(0, 138 + k * 24, 420, 138 + k * 24, 4, '#444')).join('') +
  `<rect x="10" y="132" width="120" height="36" rx="6" fill="#495057" stroke="#222"/>` + T(70, 155, 12, 'TRAIN', '#fff') + `<polygon points="130,140 146,150 130,160" fill="#222"/>` +
  carTop(215, 150, 0, C.you, 'YOU') + labelBox(90, 200, 'Train is moving this way →', 11) +
  dottedPath('M200 120 L120 40', '#111') + arrowTip(116, 36, -45, '#111') + `<circle cx="104" cy="28" r="13" fill="#fff"/>` + T(104, 33, 14, 'A') +
  dottedPath('M232 120 L312 40', '#111') + arrowTip(316, 36, 45, '#111') + `<circle cx="328" cy="28" r="13" fill="#fff"/>` + T(328, 33, 14, 'B') +
  `<circle cx="290" cy="230" r="13" fill="#fff"/>` + T(290, 235, 14, 'C') + labelBox(330, 275, 'C = stay inside the car', 11));
D['mountain-road'] = svg(420, 260, `<rect width="420" height="260" fill="${C.sky}"/><polygon points="0,250 420,90 420,260 0,260" fill="#8A8F94"/>` +
  `<polygon points="0,260 420,100 420,260" fill="#7a6a55" opacity="0.4"/>` +
  carSide(130, 214, -21, C.you, false, '') + carSide(300, 150, -21, C.other, true, '') +
  labelBox(120, 140, 'Blue car is going UP', 12) + labelBox(320, 70, 'Orange car is going DOWN', 12) + T(210, 248, 12, 'Steep, narrow road. Neither car can pass.', '#fff'));
D['passing-hill'] = svg(420, 240, `<rect width="420" height="240" fill="${C.sky}"/><path d="M0 220 Q260 200 330 120 Q360 90 420 96 L420 240 L0 240 Z" fill="#8A8F94"/>` +
  carSide(120, 212, -2, C.you, false) + carSide(230, 196, -12, '#868E96', false) + labelBox(330, 60, 'Hilltop: cannot see beyond', 12));
D['bike-lane-right-turn'] = frame(420, 260, `<rect x="0" y="60" width="330" height="130" fill="${C.road}"/><rect x="330" y="0" width="90" height="260" fill="${C.road}"/>` +
  `<rect x="0" y="160" width="330" height="30" fill="#2F9E44" opacity="0.55"/>` + `<line x1="0" y1="158" x2="200" y2="158" stroke="#fff" stroke-width="3"/>` +
  `<line x1="200" y1="158" x2="330" y2="158" stroke="#fff" stroke-width="3" stroke-dasharray="12 10"/>` + dashH(110, C.dyellow, 0, 330) +
  T(120, 182, 11, 'BIKE LANE', '#fff') + carTop(110, 136, 90, C.you, 'YOU') +
  `<line x1="200" y1="210" x2="330" y2="210" stroke="#333" stroke-width="2"/>` + line(200, 202, 200, 218, 2, '#333') + line(330, 202, 330, 218, 2, '#333') + labelBox(265, 236, '200 feet', 12));
D['left-turn-end-lane'] = frame(400, 300, `<rect x="140" y="0" width="120" height="300" fill="${C.road}"/><rect x="0" y="40" width="400" height="120" fill="${C.road}"/>` +
  `<line x1="200" y1="160" x2="200" y2="300" stroke="${C.dyellow}" stroke-width="3"/><line x1="200" y1="0" x2="200" y2="40" stroke="${C.dyellow}" stroke-width="3"/>` +
  `<line x1="0" y1="100" x2="140" y2="100" stroke="${C.dyellow}" stroke-width="3"/><line x1="260" y1="100" x2="400" y2="100" stroke="${C.dyellow}" stroke-width="3"/>` +
  dashH(130, '#fff', 0, 140) + dashH(70, '#fff', 0, 140) + carTop(215, 240, 0, C.you, 'YOU') +
  `<circle cx="60" cy="115" r="13" fill="#fff"/>` + T(60, 120, 14, 'A') + `<circle cx="60" cy="145" r="13" fill="#fff"/>` + T(60, 150, 14, 'B') +
  `<circle cx="60" cy="55" r="13" fill="#fff"/>` + T(60, 60, 14, 'C') + labelBox(320, 285, 'You will turn left onto a two-way street', 11));

// ---------- write ----------
// Signs listed in docs/official-signs.json were replaced with public-domain MUTCD artwork; never overwrite them.
const OFFICIAL = new Set(Object.keys(JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'docs', 'official-signs.json'), 'utf8'))));
function writeAll(dir, map) {
  const d = path.join(OUT, dir);
  fs.mkdirSync(d, { recursive: true });
  let n = 0;
  for (const [k, v] of Object.entries(map)) { if (dir === 'signs' && OFFICIAL.has(k)) continue; fs.writeFileSync(path.join(d, k + '.svg'), v); n++; }
  return n;
}
const n = writeAll('signs', signs) + writeAll('signals', signals) + writeAll('diagrams', D);
console.log(`Wrote ${n} SVG files to ${OUT}`);
