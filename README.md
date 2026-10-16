# electripedia-frontend

React frontend for the Electripedia website. This is an **exact port of
[deepsolar-1](https://github.com/kobe0938/deepsolar-1)** (the code behind
https://deepsolar.web.app/) — same Stanford Decanter styling, fonts, pages,
components, and nav structure — migrated from Create React App to **Vite**.
Pairs with [electripedia-backend](../electripedia-backend) (FastAPI).

## Quickstart

Requires Node.js 20+ (`brew install node` on macOS).

```bash
git clone <this repo> && cd electripedia-frontend
npm install --legacy-peer-deps   # template libs pin React 17 peers
npm run dev                      # http://localhost:5173
```

For live data on the Data Analytics page, also start the backend in another
terminal (`make dev` in electripedia-backend, serves on port 8000).

## Pages (same inventory as deepsolar-1)

| Route | Page |
|---|---|
| `/` | Home (hero slider, overview tabs, latest news, sub-projects, sponsors, media coverage) |
| `/team` | Team roster |
| `/story` | Story + ZIP-code lookup and AI-query demos |
| `/interactiveMap` | Solar maps → State/County (Tableau embed) |
| `/interactiveMapZipcode` | Solar maps → Zipcode (Tableau embed) |
| `/comparisonMap` | Solar maps → Comparison maps (Tableau embed) |
| `/contact` | Contact Us |
| `/dataAnalytics` | Live Electripedia API explorer (not in the nav, same as deepsolar) |

Nav structure is copied exactly: Home · Team · Story · **Solar maps ▾**
(State/County, Zipcode, Comparison maps) · Contact Us.

## What differs from deepsolar-1 (intentionally)

- **Branding**: the header/footer lockup and `<title>` say *Electripedia*
  instead of *DeepSolar*. All other content is verbatim from deepsolar-1 —
  edit the page components under `src/pages/` to write Electripedia copy.
- **Firebase removed**: deepsolar-1 shipped its Firebase analytics keys in
  `App.js`; they were stripped. Add your own project config if you want
  analytics.
- **Backend URL** ([src/config.js](src/config.js)): points at the local
  Electripedia API (`http://127.0.0.1:8000`), override with `VITE_API_URL`.
  Note: the Story page widgets (`Story1`/`Story2`) still call deepsolar-backend
  endpoints (`/api/record/{zip}/{year}`, `/api/chatGPTPipeline/...`) that the
  Electripedia backend does not implement yet — they will show errors if used.
- **Data Analytics page**: deepsolar's version embedded a now-defunct flask
  iframe; this one queries the Electripedia API (filters, totals, leaderboard).
- **Tableau dashboards**: the embed URLs (in `src/components/TableauCom*.jsx`)
  still point at the DeepSolar dashboards. Publish Electripedia dashboards on
  Tableau Public and swap the URLs there.

## CRA → Vite migration notes (why files differ from deepsolar-1)

- JSX files renamed `.js` → `.jsx` (Vite requires it); imports unchanged.
- Entry is `src/index.jsx`, loaded from `index.html` (CRA's `public/index.html`
  merged in; vendor CSS + Tableau v2 script kept).
- Webpack `~package` imports stripped from the SCSS; Vite resolves bare
  imports via `loadPaths: ['node_modules']` (see [vite.config.js](vite.config.js)).
- Decanter's `$su-image-path` and a few template `url('../img/...')`
  references were made absolute (`/assets/...`) because Vite does not rebase
  relative URLs inside nested SCSS the way webpack did.
- `react-slick` imports use a `SliderModule.default ?? SliderModule` shim
  (CJS/ESM interop under Vite).
- React is pinned at 17 (like deepsolar-1) because several template libraries
  (react-image-lightbox, react-visibility-sensor, @material-ui v4) predate
  React 18+.

## Build & deploy

```bash
npm run build     # static site in dist/
npm run preview   # serve the production build locally
```

Host `dist/` anywhere static (Firebase Hosting like deepsolar.web.app,
Netlify, Vercel). Configure SPA rewrites (all paths → `/index.html`). For
Firebase: `firebase init hosting` (public dir `dist`, single-page app: yes),
then `npm run build && firebase deploy`. Set `VITE_API_URL` at build time to
point at the deployed backend.
