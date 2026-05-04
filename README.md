# 67_Intuit — vieno puslapio landing

Statinė **Astro** svetainė pagal [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md) (dabartinė doc versija faile): LT pagrindinis, EN (`en/`), šviesi tema, hero su diagrama ir pasirinktiniu brand raštu, logotipai iš `public/brand/`. **Numatytasis hostingas:** [GitHub Pages](https://pages.github.com/) (`https://ditreneris.github.io/intuit/`); statiniai keliai naudoja Astro `base` (`/intuit`).

## Dokumentacija

- **[AGENTS.md](AGENTS.md)** — Cursor agentams: ką skaityti pirmiausia, pagrindiniai keliai, nuoroda į taisykles.
- **[docs/README.md](docs/README.md)** — dokumentų rodyklė ir valdymo taisyklės (PRD, BRAND, DS, changelog, darbo planas).
- **[docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)** — Design System v1.5 (tokenai, CTA, kortelių akcentas, checklist).
- **[CHANGELOG.md](CHANGELOG.md)** — versijų istorija (Keep a Changelog).
- **[todo.md](todo.md)** — vykdymo planas ir checklist.
- **Cursor taisyklės:** [.cursor/rules/intuit-landing.mdc](.cursor/rules/intuit-landing.mdc) (stackas, i18n, Tailwind, `intuit-sitemap`, komponentai).

## Reikalavimai

- Node.js 20+
- npm 10+

## Paleistis

```bash
npm install
npm run dev
```

Lokalus dev su numatytuoju GitHub Pages `base`: atidarykite **`http://localhost:4321/intuit/`** (ne šaknį `/`).

Build:

```bash
npm run build
npm run preview
```

## Aplinkos kintamieji

Žr. [.env.example](.env.example).

- `PUBLIC_CONTACT_EMAIL` — rodomas `mailto:` kontaktinėje sekcijoje.
- `PUBLIC_SITE_URL` — kanoninis **domenas** (pvz. `https://ditreneris.github.io`), be repo kelio; OG, `hreflang`, sitemap.
- `ASTRO_BASE` — Astro `base`: GitHub projektui **`/intuit`** (numatytasis faile); Vercel šakninei URL reikės **`/`**.

## GitHub Pages

1. Repozitorijoje: **Settings → Pages → Build and deployment → Source: GitHub Actions** (vieną kartą).
2. Push į `master` arba `main` paleidžia [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml): `npm ci` → `npm run build` → įkelia `dist`.
3. Workflow jau nustato `PUBLIC_SITE_URL=https://ditreneris.github.io` ir `ASTRO_BASE=/intuit` (sutampa su [`astro.config.mjs`](astro.config.mjs) numatytaisiais).

Po sėkmingo deploy: **`https://ditreneris.github.io/intuit/`**, **`…/intuit/en/`**, **`…/intuit/sitemap.xml`**.

### Production checklist (GitHub Pages)

- Pirmame deploy palaukite Actions žalios varnelės; kartais reikia atnaujinti puslapį po 1–2 min.
- Patikrinkite kalbos jungiklį, hero paveikslus, **`/intuit/sitemap.xml`**.
- **SVG logotipas** (iš `INTUIT LOGO/ai/`) — pasirinktinai vėliau vietoj JPG geresniam masteliui ir LCP; iki tol galioja `public/brand/*.jpg`.

## Vercel (vėliau)

1. Importuokite repo į [Vercel](https://vercel.com).
2. **Build Command** `npm run build`; **Output** `dist`.
3. Aplinkos kintamieji: **`PUBLIC_SITE_URL`** = pilnas jūsų domenas (pvz. `https://xxx.vercel.app`), **`ASTRO_BASE=/`** (privaloma — kitaip liktų `/intuit` prefiksas iš numatytojo).

Projekte yra [vercel.json](vercel.json) su build/output nuorodomis.

## Turinys ir kalbos

- Lietuvių: [src/i18n/lt.ts](src/i18n/lt.ts)
- Anglų: [src/i18n/en.ts](src/i18n/en.ts)

## Brand

- `public/brand/`: `logo-light.jpg`, `logo-dark.jpg`, `logo-pattern-light.jpg`, `logo-pattern-dark.jpg`, `logo-pattern-inverse.jpg` (Proof brand blokas; šaltiniai ir pastabos — [docs/BRAND.md](docs/BRAND.md)).
- Šriftas: **Inter** (`@fontsource/inter`). Larsseit žr. [docs/BRAND.md](docs/BRAND.md).

## Sitemap

Build metu [`astro.config.mjs`](astro.config.mjs) integracija **`intuit-sitemap`** įrašo `dist/sitemap.xml` su LT ir EN URL pagal `site` + `base` (GitHub Pages: `…/intuit/` ir `…/intuit/en/`). Po deploy tikrinkite pilną sitemap URL savo domene.

Alternatyva ateityje: oficiali `@astrojs/sitemap` integracija po Astro versijos atnaujinimo.

## Licencija

Privatus projektas — papildykite pagal poreikį.
