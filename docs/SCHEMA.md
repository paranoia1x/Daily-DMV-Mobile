# Question schema

Question files in `app/data/q-*.js` call `Q({...})` (defined in `app/data/sources.js`).
Each call is expanded into the full object below and pushed to `window.DMV_QUESTIONS`.
Files are plain scripts (not JSON) so the app works from `file://` with no web server.

## Authoring form (what you write)

| Key | Required | Meaning |
|---|---|---|
| `id` | yes | Unique ID, e.g. `PRK-001` (prefix = topic) |
| `t` | yes | Topic key from `DMV_TOPICS` (`signs`, `signals`, `markings`, `rightofway`, `turns`, `freeway`, `speed`, `parking`, `sharing`, `emergency`, `trucks`, `railroad`, `conditions`, `impairment`, `laws`) |
| `d` | yes | Difficulty: 1 easy, 2 medium, 3 hard |
| `q` | yes | Question text |
| `c` | yes | 3–4 choices: `['choice text', 'explanation for this choice']`. Every choice has its own explanation. The correct choice's explanation starts with `Correct.` |
| `a` | yes | Index (0-based) of the one correct choice |
| `s` | yes | Source key from `DMV_SOURCES` (official handbook page) |
| `sec` | yes | Handbook subsection the rule comes from |
| `img` | no | Picture path under `app/img/` without `.svg`, e.g. `signs/stop` |
| `alt` | with `img` | Picture description. Describe what is shown; never state the answer |
| `tip` | no | Short memory tip |
| `tags` | no | e.g. `['trouble']` puts it in the trouble-spots set |
| `fixed` | no | `true` keeps choice order (used when choices are picture labels like "Car A") |

## Expanded object (what the app uses)

```js
{
  id, topic, difficulty: 'easy'|'medium'|'hard', question,
  image: 'img/signs/stop.svg' | null, imageAlt,
  choices: [{ text, explain, correct: boolean }],   // exactly one correct
  tip, tags: [], fixedOrder: boolean,
  source: { key, title, url, section }
}
```

## Answer mapping

Each session stores a display order per question (`orders[qid]` = list of original
indexes). Selections and answers are always stored as the **original** index, so
shuffling cannot change which choice or explanation is graded.

## Saved progress (localStorage key `caDmvPractice.v1`)

`settings`, `attempts` (every graded answer: question, correct, time, mode, session,
retry flag), `qstats` (per-question totals), `mistakes` (first miss, misses, retries,
improved flag), `bookmarks`, `history` (finished sessions with full answers for
review), `active` (unfinished session). Export/import writes this object to a JSON
file wrapped as `{ app: 'ca-dmv-practice', exportVersion: 1, exportedAt, data }`.

## Checks

`node tools/validate.js` checks IDs, one correct answer, explanations for every
choice, sources, pictures, near-duplicates, answer balance, shuffle mapping, and
runs the engine tests (scoring, locking, sessions, exam hiding, mistakes,
bookmarks, save/reload, export/import, reset).
