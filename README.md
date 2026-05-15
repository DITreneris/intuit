# 67_Intuit — vieno puslapio landing

Statinė **Astro** svetainė pagal [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md) (dabartinė doc versija faile): LT pagrindinis, EN (`en/`), šviesi tema. **Hero:** dešinėje inverse plakatas per [`BrandPatternPanel.astro`](src/components/BrandPatternPanel.astro) + subtilus `logo-pattern-light` fonas; antrinis CTA „4 žingsniai“ veda į eigą (`#process`). Repo yra [`HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro) (komunikacijos valdymo schema), bet **dabartinėje** landing versijoje jis **neįterptas**. Logotipai iš `public/brand/`. **Produkcinis domenas:** `https://www.intuit.lt/` (deploy šaknyje, `base: /`).

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

Lokalus dev produkcijos režimu (šaknis): nustatykite `ASTRO_BASE=/` ir atidarykite **`http://localhost:4321/`**.

Build:

```bash
npm run build
npm run preview
```

## Aplinkos kintamieji

Žr. [.env.example](.env.example).

- `PUBLIC_CONTACT_EMAIL` — rodomas `mailto:` kontaktinėje sekcijoje.
- `PUBLIC_SITE_URL` — kanoninis **domenas** (pvz. `https://www.intuit.lt`), be kelio; OG, `hreflang`, sitemap. Jei nenurodyta Vercel build’e, naudojamas `https://$VERCEL_URL` (Vercel pats nustato).
- `ASTRO_BASE` — Astro `base`: produkcijoje domeno šaknyje **`/`**; GitHub Pages projektui naudojamas **`/intuit`** (tik jei deploy’inate po subpath).

## GitHub Pages (pasirinktinai)

1. Repozitorijoje: **Settings → Pages → Build and deployment → Source: GitHub Actions** (vieną kartą).
2. Push į `master` arba `main` paleidžia [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml): `npm ci` → `npm run build` → įkelia `dist`.
3. Workflow gali nustatyti `PUBLIC_SITE_URL=https://ditreneris.github.io` ir `ASTRO_BASE=/intuit` (deploy po subpath).

Po sėkmingo deploy: **`https://ditreneris.github.io/intuit/`**, **`…/intuit/en/`**, **`…/intuit/sitemap.xml`**.

### Production checklist (GitHub Pages)

- Pirmame deploy palaukite Actions žalios varnelės; kartais reikia atnaujinti puslapį po 1–2 min.
- Patikrinkite kalbos jungiklį, hero paveikslus, **`/intuit/sitemap.xml`**.
- **SVG ženklas:** [`public/brand/logo-light.svg`](public/brand/logo-light.svg) per `<picture>` su JPG fallback (`Header`, `TrustedBy`). Pilnas vektorinis eksportas iš `INTUIT LOGO/` vėliau gali pakeisti dabartinį stem (sinchronizuota su `favicon.svg`).

## Vercel / custom domenas (produkcinis)

1. Importuokite repo į [Vercel](https://vercel.com).
2. **Build Command** `npm run build`; **Output** `dist`.
3. Nustatykite **`PUBLIC_SITE_URL=https://www.intuit.lt`** kanoniniams URL, OG, `hreflang` ir sitemap. Be papildomų kintamųjų Vercel build automatiškai naudoja **`base: /`** (šaknis).

Projekte yra [vercel.json](vercel.json) su build/output nuorodomis.

## Turinys ir kalbos

- Lietuvių: [src/i18n/lt.ts](src/i18n/lt.ts)
- Anglų: [src/i18n/en.ts](src/i18n/en.ts)

## Brand

- `public/brand/`: `logo-light.jpg`, `logo-dark.jpg`, `logo-pattern-light.jpg`, `logo-pattern-dark.jpg`, `logo-pattern-inverse.jpg` (Hero inverse plakatas per [`BrandPatternPanel.astro`](src/components/BrandPatternPanel.astro); šaltiniai — [docs/BRAND.md](docs/BRAND.md)).
- Šriftas: **Inter** (`@fontsource/inter`). Larsseit žr. [docs/BRAND.md](docs/BRAND.md).

## Sitemap

Build metu [`astro.config.mjs`](astro.config.mjs) integracija **`intuit-sitemap`** įrašo `dist/sitemap.xml` su LT ir EN URL pagal `site` + `base`. Produkcijoje: `https://www.intuit.lt/sitemap.xml`.

Alternatyva ateityje: oficiali `@astrojs/sitemap` integracija po Astro versijos atnaujinimo.

## Licencija

Privatus projektas — papildykite pagal poreikį.
