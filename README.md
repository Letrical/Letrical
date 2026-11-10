# Safina League — Safina Football

A responsive, static multi-page website for Safina football, built with plain HTML, CSS, and JavaScript. No build step, framework, or server-side code is required.

## Pages

- `index.html` — club landing page and featured players
- `players.html` — full player squad and ratings
- `scorers.html` — goals leaderboard
- `honours.html` — Ballon d'Or and Golden Boot history

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. For example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

Upload the project files to any static hosting provider, such as Netlify, Cloudflare Pages, Vercel, or a traditional web host. Set the publish/output directory to the project root; there is no build command. Ensure all HTML pages, `styles.css`, `data.js`, and `app.js` are uploaded together.

The site uses Google Fonts when online and falls back to system fonts. Player and award data is maintained in `data.js`.
