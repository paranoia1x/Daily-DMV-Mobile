# Daily-DMV Mobile — CA Driver Test Practice for phones

**▶ Open the app: https://paranoia1x.github.io/Daily-DMV-Mobile/**

This is the phone and tablet version of the Daily-DMV desktop app. It has the same 326 questions, road signs, explanations, practice modes, progress tracking, and handbook reader, with a layout made for touch screens. You can add it to your home screen, and after the first visit it works offline.

> **Independent practice app. Not affiliated with the California DMV. Use the current DMV handbook as the official reference.** Using this app does not guarantee you will pass.

## What's different from the desktop version

- **Bottom tab bar** (Home, Handbook, Progress, Settings, Sources, Help) and bigger tap targets.
- **Submit / Next buttons stay visible** above the tab bar while you answer.
- **Handbook:** swipe left or right to turn pages, pinch to zoom, and draw your own highlights with your finger. One button saves all 92 pages for offline reading (about 21 MB).
- **Installable:** it works offline after the first visit (this is called a Progressive Web App). It uses an app icon and opens full-screen from your home screen.
- **Backups:** Export progress opens your phone's share sheet, so you can save the backup to Files or Drive, or send it to yourself.
- **Handbook PDF:** the downloadable PDF links to dmv.ca.gov instead of being stored in the app, which keeps the download small. The in-app reader has every page.

## Use it on a phone

Open **https://paranoia1x.github.io/Daily-DMV-Mobile/** on your phone. Then:

- **iPhone / iPad (Safari):** open the site, tap **Share → Add to Home Screen**.
- **Android (Chrome):** open the site, tap **⋮ → Install app** (or **Add to Home screen**).

Progress is saved on the device, in that browser or home-screen app. Use **Settings → Export progress** to make a backup.

To try it on a computer: run `python -m http.server 8766` in this folder and open `http://localhost:8766`.

## For developers

- Plain HTML, CSS, and JavaScript with no build step. `index.html` is the entry point.
- `css/mobile.css` holds the mobile layout. Everything else matches the desktop app.
- `node tools/validate.js` checks the question bank and the handbook data and tests the scoring engine.
- **After changing any file, run `node tools/build-sw.js`.** It regenerates `sw.js` with a new version number, so installed copies pick up the update.

## Credits and licenses

- **California Driver's Handbook:** California Department of Motor Vehicles, licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Non-commercial use only. The highlights and notes are added by this app and are not part of the DMV publication.
- **45 road-sign pictures:** public-domain MUTCD artwork from Wikimedia Commons. The remaining signs, traffic lights, and diagrams are drawn for this app. File-by-file details are in [`docs/CREDITS.md`](docs/CREDITS.md).
- **Questions and explanations:** written for this app. They are not real DMV test questions.
