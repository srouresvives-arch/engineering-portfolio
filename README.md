# Sergi Roures Vives · Engineering portfolio

Static portfolio for reviewing the Full de banc edition. Open `index.html` in a browser. The project list and experience timeline use plain JavaScript. No build, server or account is required for local preview. The site requests Golos Text and Recursive from Google Fonts and uses local fallbacks offline.

## Edit the portfolio

- `content.js` holds the case studies and timeline. Each project has a stable `id` used in links, for example `index.html#boltcheck`. Empty approach or outcome fields are omitted. If you change a project ID, also update any matching shortcut in the opening sheet.
- `index.html` holds the opening sheet, project shortcuts, about and contact copy. The email comes from the October 2026 CV. The phone number, postcode and original CV are excluded.
- `styles.css` holds the typography, colours and responsive layout.
- To add a photo you are allowed to share, put it in `assets/` and fill in the project's `media.src`, `media.alt` and `media.caption` in `content.js`. Use a relative path such as `./assets/formula-ford-workshop.webp`. Leave `src` blank to show the labelled image slot. The opening drawing is a generic illustration.

## Review before public launch

- **Land speed and UAV cases.** Review the anonymised wording before launch. Keep client and programme identifiers, internal images, models, thresholds and results out of the repository unless cleared for disclosure.
- **Cranfield and Formula Student.** Confirm permission and credits for team assets before adding them. Academic simulation comparisons do not establish homologation or certification.
- **BoltCheck.** This portfolio includes a description only. Confirm what can be shown before adding screenshots, source code or examples of the underlying calculations.
- **Personal work.** Add original print photographs and notes when available. Add NIX once the public role and scope can be substantiated.
- Check that the role dates and contact email are still current.

## Optional GitHub Pages deployment

After the disclosure review, select the approved branch and `/ (root)` in **Settings → Pages → Deploy from a branch**. The links and assets work from a repository subpath. For a local server, run `python -m http.server 8000` in this folder and open `http://localhost:8000/`.

## 3D project catalogue

Add an object to `printProjects` in `content.js` for every project, with `title`, `description`, `image` and `alt`. Save approved photos in `assets/` and use a relative path such as `./assets/bracket.jpg`. The catalogue displays an honest placeholder until the first project is added. List only features and services you can substantiate.
