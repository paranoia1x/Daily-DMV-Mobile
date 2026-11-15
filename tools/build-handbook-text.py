"""Turn the DMV handbook PDF into phone-friendly reading text.
Output: data/handbook-text.js (chapters -> blocks) and handbook/fig/*.jpg (diagrams and sign pictures).
Usage: python -I extract.py <pylib> <handbook.pdf> <mobile repo> <handbook-index.js>"""
import sys, os, re, json, html
sys.path.insert(0, sys.argv[1])
import pymupdf as fitz

PDF, REPO, HBI = sys.argv[2], sys.argv[3], sys.argv[4]
FIGDIR = os.path.join(REPO, 'handbook', 'fig')
os.makedirs(FIGDIR, exist_ok=True)
for f in os.listdir(FIGDIR):
    os.remove(os.path.join(FIGDIR, f))
doc = fitz.open(PDF)
SKIP = {1, 2, 3, 4, 5, 6, 38, 91, 92}  # cover, ads, copyright, contents, kiosk/paperless ads
BOLD = re.compile(r'(Bold|Demi|Medium|Heavy|Black)', re.I)

def area(r): return max(0, r[2] - r[0]) * max(0, r[3] - r[1])
def inter(a, b): return not (a[2] < b[0] or b[2] < a[0] or a[3] < b[1] or b[3] < a[1])
def grow(r, d): return (r[0] - d, r[1] - d, r[2] + d, r[3] + d)
def union(a, b): return (min(a[0], b[0]), min(a[1], b[1]), max(a[2], b[2]), max(a[3], b[3]))

def clusters(rects, gap=6):
    out = []
    for r in rects:
        r = tuple(r)
        merged = True
        while merged:
            merged = False
            for i, c in enumerate(out):
                if inter(grow(c, gap), r):
                    r = union(r, c); out.pop(i); merged = True; break
        out.append(r)
    return out

fig_n = 0
def save_fig(page, rect, pno):
    global fig_n
    fig_n += 1
    w = rect[2] - rect[0]
    zoom = min(4.0, max(2.0, 640 / max(w, 1)))
    pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), clip=fitz.Rect(*rect), alpha=False)
    name = 'f%03d-%02d.jpg' % (pno, fig_n)
    pix.save(os.path.join(FIGDIR, name), jpg_quality=72)
    return 'handbook/fig/' + name, round((rect[3] - rect[1]) / max(w, 1), 4)

def span_html(spans):
    out, txt = [], []
    for s in spans:
        t = s['text'].replace('­', '')
        if not t: continue
        b = bool(BOLD.search(s['font'])) and not t.strip() in ('•', '—')
        txt.append(t)
        out.append(('<b>%s</b>' % html.escape(t)) if b and t.strip() else html.escape(t))
    h = ''.join(out)
    h = re.sub(r'</b>(\s*)<b>', r'\1', h)
    return h, ''.join(txt)

chapters = []
cur = None
blocks = []  # current chapter blocks: dicts {type, html, text, page, x}

def new_chapter(title, pno):
    global cur, blocks
    cur = {'title': title, 'page': pno, 'blocks': []}
    blocks = cur['blocks']
    chapters.append(cur)

new_chapter('Before you start', 7)

for pno in range(1, len(doc) + 1):
    if pno in SKIP: continue
    page = doc[pno - 1]
    W, H = page.rect.width, page.rect.height
    d = page.get_text('dict')
    lines = []
    for b in d['blocks']:
        if b['type'] != 0: continue
        for l in b['lines']:
            sp = [s for s in l['spans'] if s['text'].strip() or s['text'] == ' ']
            sp = [s for s in sp if s['size'] >= 9]
            if not any(s['text'].strip() for s in sp): continue
            bb = l['bbox']
            if bb[1] > H - 40 and all(s['size'] < 11.6 for s in sp if s['text'].strip()): continue  # page number
            lines.append({'bbox': bb, 'spans': sp})
    # graphics: raster images + vector drawings, minus page-wide decoration
    g = [b['bbox'] for b in d['blocks'] if b['type'] == 1]
    for dr in page.get_drawings():
        r = dr['rect']
        rr = (r.x0, r.y0, r.x1, r.y1)
        if r.width > W * 0.9 and r.height > H * 0.5: continue  # page background
        if r.height < 2.5 and r.width > 150: continue  # rule lines
        if r.y0 > H - 45: continue  # footer rule
        g.append(rr)
    g = [r for r in g if area(r) > 4]
    cl = [c for c in clusters(g) if (c[2] - c[0]) > 18 and (c[3] - c[1]) > 14]
    # callout boxes: wide clusters full of normal text stay as text
    figs = []
    for c in cl:
        inside = [l for l in lines if inter(grow(c, -1), l['bbox']) and max(s['size'] for s in l['spans']) >= 11.5]
        if (c[2] - c[0]) > 250 and len(inside) >= 3: continue
        figs.append(c)
    # attach text that belongs to a figure (labels inside it, captions right below small icons)
    used = set()
    figinfo = []
    for c in figs:
        cap = []
        for i, l in enumerate(lines):
            bb = l['bbox']
            small = max(s['size'] for s in l['spans']) < 11
            cx = (bb[0] + bb[2]) / 2
            if inter(grow(c, -0.5), bb) and (small or (c[2] - c[0]) < 250):
                if (bb[2] - bb[0]) < (c[2] - c[0]) + 4 and bb[0] >= c[0] - 4: used.add(i); cap.append((bb[1], l)); continue
            if c[0] - 12 <= cx <= c[2] + 12 and 0 <= bb[1] - c[3] <= 50 and (c[2] - c[0]) < 140 and (bb[2] - bb[0]) < 150:
                used.add(i); cap.append((bb[1], l)); continue
            if small and 0 <= bb[1] - c[3] <= 14 and bb[0] >= c[0] - 10 and bb[2] <= c[2] + 40:
                used.add(i); cap.append((bb[1], l))
        inside_cap = [l for (y, l) in cap if l['bbox'][1] < c[3] - 1]
        below_cap = [l for (y, l) in sorted(cap, key=lambda x: (x[0], x[1]['bbox'][0])) if l['bbox'][1] >= c[3] - 1]
        rect = c
        for l in inside_cap: rect = union(rect, l['bbox'])
        rect = grow(rect, 2)
        rect = (max(0, rect[0]), max(0, rect[1]), min(W, rect[2]), min(H, rect[3]))
        src, ratio = save_fig(page, rect, pno)
        caption = ' '.join(span_html(l['spans'])[1].strip() for l in below_cap)
        caption = re.sub(r'\s+', ' ', caption).strip()
        figinfo.append({'y0': c[1], 'y1': c[3], 'x0': c[0], 'src': src, 'ratio': ratio, 'cap': caption, 'small': (c[2] - c[0]) < 140})
    # text elements in reading order
    flow = [l for i, l in enumerate(lines) if i not in used]
    flow.sort(key=lambda l: (round(l['bbox'][1] / 3), l['bbox'][0]))
    elems = []
    last = None
    for l in flow:
        spans = l['spans']
        bb = l['bbox']
        texts = [s for s in spans if s['text'].strip()]
        first = texts[0]['text'].strip()
        body = [s for s in texts if s['text'].strip() not in ('•', '—', '–')] or texts
        size = max(s['size'] for s in body)
        allbold = all(BOLD.search(s['font']) for s in body)
        if first in ('•', '—', '–') and size < 12.8: size = min(size, 12.0)
        h, plain = span_html(spans)
        if first in ('•', '—', '–'): size = min(size, 12.0)
        if size >= 17 and last and last['type'] == 'h1' and last['page'] == pno:
            cur['title'] = (cur['title'] + ' ' + re.sub(r'\s+', ' ', plain).strip()).strip(); continue
        if size >= 17:
            if re.match(r'SECTION\s*\d+', plain.strip()) or (cur and cur['title'] == 'Before you start'):
                title = re.sub(r'\s+', ' ', plain).strip().rstrip('.').replace(' .', '.')
                if last and last['type'] == 'h1' and last['page'] == pno:
                    cur['title'] = (cur['title'] + ' ' + title).strip(); continue
                new_chapter(title, pno); elems = []; last = {'type': 'h1', 'page': pno}
                continue
            typ = 'h2'
        elif size >= 14.3: typ = 'h2'
        elif size >= 12.8 and size < 14.3 and allbold: typ = 'h3'
        elif size >= 12.8: typ = 'h3'
        elif first in ('•',):
            typ = 'li'; h = re.sub(r'^\s*•\s*', '', h); plain = plain.replace('•', '', 1)
        elif first in ('—', '–') and bb[0] > 35:
            typ = 'li2'; h = re.sub(r'^\s*[—–]\s*', '', h); plain = plain.replace(first, '', 1)
        elif re.match(r'^\d{1,2}\.$', first) and allbold is False or re.match(r'^\d{1,2}\.\s', plain.strip()) and bb[0] < 35:
            typ = 'ol'
        elif allbold and size <= 11.9 and len(plain.strip()) < 70 and bb[0] < 35:
            typ = 'h4'
        elif size < 11: typ = 'cap'
        else: typ = 'p'
        y0, y1 = bb[1], bb[3]
        # continuation of the previous element?
        if last and last.get('page') == pno and typ in ('p', 'cap') and last['type'] in ('p', 'li', 'li2', 'ol', 'cap', 'h4', 'h3', 'h2') and y0 - last['y1'] < 4.5:
            if last['type'] in ('li', 'li2', 'ol') and bb[0] < last['x'] - 6: pass
            elif last['type'] in ('h2', 'h3', 'h4') and not allbold: pass
            elif last['type'] in ('h2', 'h3', 'h4') and allbold and typ == 'p': pass
            else:
                sep = '' if last['plain'].endswith('-') and not last['plain'].endswith(' -') and re.search(r'[a-z]-$', last['plain']) and '.gov' in last['plain'] else ' '
                last['html'] += sep + h.strip(); last['plain'] += sep + plain.strip(); last['y1'] = y1; continue
        if last and last.get('page') == pno and typ in ('h2', 'h3') and last['type'] == typ and y0 - last['y1'] < 4.5:
            last['html'] += ' ' + h.strip(); last['plain'] += ' ' + plain.strip(); last['y1'] = y1; continue
        # paragraph continuing from the previous page
        if typ == 'p' and not elems and blocks and blocks[-1]['type'] in ('p', 'li', 'li2', 'ol') and re.match(r'^[a-z(]', plain.strip()):
            prev = blocks[-1]
            prev['html'] += ' ' + h.strip(); prev['plain'] += ' ' + plain.strip(); last = None; continue
        e = {'type': typ, 'html': h.strip(), 'plain': plain.strip(), 'page': pno, 'y0': y0, 'y1': y1, 'x': bb[0] + (15 if typ in ('li', 'li2', 'ol') else 0)}
        if typ == 'ol':
            m = re.match(r'^\s*(?:<b>)?(\d{1,2})\.\s*', e['html'])
            e['num'] = m.group(1) if m else ''
            e['html'] = re.sub(r'^\s*(<b>)?\d{1,2}\.\s*', r'\1', e['html']); e['plain'] = re.sub(r'^\d{1,2}\.\s*', '', e['plain'])
            e['x'] = bb[0] + 15
        elems.append(e); blocks.append(e); last = e
    # put each figure before the first text element on this page that reaches below its top
    page_blocks = [b for b in blocks if b.get('page') == pno and 'y0' in b and b['type'] != 'fig']
    for f in sorted(figinfo, key=lambda f: (f['y0'], f['x0'])):
        fb = {'type': 'fig', 'src': f['src'], 'ratio': f['ratio'], 'cap': f['cap'], 'small': f['small'], 'page': pno, 'y0': f['y0'], 'y1': f['y1'], 'x0': f['x0']}
        target = next((b for b in page_blocks if b['y1'] > f['y0'] + 2), None)
        idx = blocks.index(target) if target in blocks else len(blocks)
        # keep icons that sit in the same row together, left to right
        while idx > 0 and blocks[idx - 1]['type'] == 'fig' and blocks[idx - 1]['page'] == pno and (blocks[idx - 1]['y0'], blocks[idx - 1]['x0']) > (f['y0'], f['x0']):
            idx -= 1
        blocks.insert(idx, fb)

# drop empty "Before you start" if nothing in it; strip helpers
chapters = [c for c in chapters if c['blocks']]

# important passages from the highlighted copy
src = open(HBI, encoding='utf8').read()
imp = json.loads(src[src.index('{'):src.rindex('}') + 1])['highlights']
def norm(s): return re.sub(r'\s+', ' ', s.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"')).strip().lower()
found = 0
for i, hl in enumerate(imp):
    key = norm(hl['text'])
    done = False
    for c in chapters:
        for b in c['blocks']:
            if b['type'] == 'fig' or abs(b['page'] - hl['page']) > 1: continue
            if key and key in norm(b['plain']):
                b.setdefault('imp', []).append(i); done = True; break
        if done: break
    found += done
print('important passages matched: %d of %d' % (found, len(imp)))

def mark(b):
    # wrap important text in <mark>; works on the html by matching the plain words in order
    h = b['html']
    for i in b.get('imp', []):
        words = re.findall(r"[\w½’'%$.,-]+", imp[i]['text'])
        if not words: continue
        pat = r'(?:</?b>|\s)*'.join(re.escape(w) for w in words)
        m = re.search(pat, h)
        if m: h = h[:m.start()] + '<mark data-i="%d">' % i + m.group(0) + '</mark>' + h[m.end():]
        else: h = '<mark data-i="%d" class="whole">' % i + h + '</mark>'
    return h

for c in chapters:  # icons in a grid: order row by row, left to right
    bl, i = c['blocks'], 0
    while i < len(bl):
        if bl[i]['type'] == 'fig' and bl[i]['small']:
            j = i
            while j < len(bl) and bl[j]['type'] == 'fig' and bl[j]['small'] and bl[j]['page'] == bl[i]['page']: j += 1
            bl[i:j] = sorted(bl[i:j], key=lambda f: (round(f['y0'] / 40), f['x0']))
            i = j
        else: i += 1

out = []
for ci, c in enumerate(chapters):
    bl = []
    for b in c['blocks']:
        if b['type'] == 'fig':
            bl.append(['fig', b['src'], b['page'], b['ratio'], b['cap'], 1 if b['small'] else 0])
        else:
            h = mark(b) if b.get('imp') else b['html']
            row = [b['type'], h, b['page']]
            if b['type'] == 'ol': row.append(b.get('num', ''))
            bl.append(row)
    title = re.sub(r'^SECTION\s*(\d+)\.?\s*', r'\1. ', c['title']).strip()
    out.append({'t': title, 'p': c['page'], 'b': bl})

js = '/* Generated by tools/build-handbook-text.py from the DMV handbook PDF (CC BY-NC 4.0).\n   Phone-friendly text: chapters -> blocks [type, html, pdfPage, ...]. Figures are cropped from the pages. */\nwindow.HANDBOOK_TEXT = ' + json.dumps({'chapters': out}, ensure_ascii=False, separators=(',', ':')) + ';\n'
open(os.path.join(REPO, 'data', 'handbook-text.js'), 'w', encoding='utf8').write(js)
nb = sum(len(c['b']) for c in out)
nf = sum(1 for c in out for b in c['b'] if b[0] == 'fig')
print('chapters %d, blocks %d, figures %d, js %d KB' % (len(out), nb, nf, len(js) // 1024))
for c in out: print('  ', c['p'], c['t'], len(c['b']))
