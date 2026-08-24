# Portfolio — Gustavo Omonte Acevedo

Personal portfolio site: static HTML + SCSS + vanilla JS, deployed on Netlify.

Originally built in 2021 (Gulp + node-sass), modernized in 2026 with an AI-assisted workflow (Claude Code): new AI-Augmented Development section, updated skills and resume, SEO meta tags, and a simplified build toolchain.

## Stack

- HTML5 (single page, `index.html` at repo root)
- SCSS compiled with [Dart Sass](https://sass-lang.com/dart-sass) → `build/css/app.css`
- Vanilla JS minified with [Terser](https://terser.org/) → `build/js/bundle.min.js`
- Netlify Forms for the contact form (`data-netlify="true"`)
- The `build/` folder is committed, so Netlify needs no build step

## Development

```bash
npm install
npm run build       # compile CSS + JS
npm run watch:css   # recompile SCSS on change
npm run serve       # local static server
```

## Deploy (Netlify)

The site deploys from the repo root (see `netlify.toml`, `publish = "."`).

1. Push to `main` on GitHub.
2. In [app.netlify.com](https://app.netlify.com): **Add new site → Import an existing project → GitHub → portfolioV1**.
3. Leave the build command empty; publish directory `.` (picked up from `netlify.toml`).
4. After the first deploy, enable form notifications in **Site → Forms** to receive contact messages.

## Recreate your own

See [PROMPT.md](PROMPT.md) for a reusable prompt to build a similar portfolio with an AI coding assistant.
