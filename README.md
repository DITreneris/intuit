# 67_Intuit — vieno puslapio landing

Statinė **Astro** svetainė pagal [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md): LT pagrindinis (`/`), EN (`/en/`), šviesi tema, greitas hero, brand iš `INTUIT LOGO/`.

## Dokumentacija

- **[AGENTS.md](AGENTS.md)** — Cursor agentams: ką skaityti pirmiausia, pagrindiniai keliai, nuoroda į taisykles.
- **[docs/README.md](docs/README.md)** — dokumentų rodyklė ir valdymo taisyklės (PRD, BRAND, DS, changelog, darbo planas).
- **[docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)** — Design System v1.1 (tokenai, CTA komponentai, checklist).
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

Build:

```bash
npm run build
npm run preview
```

## Aplinkos kintamieji

Žr. [.env.example](.env.example).

- `PUBLIC_CONTACT_EMAIL` — rodomas `mailto:` kontaktinėje sekcijoje.
- `PUBLIC_SITE_URL` — kanoninis URL (OG, `hreflang`). Jei nenurodysite, naudojamas numatytasis iš `astro.config.mjs`.

## Vercel

1. Importuokite repo į [Vercel](https://vercel.com).
2. Framework: **Other** arba autodetect; **Build Command** `npm run build`; **Output** `dist`.
3. Nustatykite `PUBLIC_SITE_URL` ir `PUBLIC_CONTACT_EMAIL` (Production / Preview).

Projekte yra [vercel.json](vercel.json) su build/output nuorodomis.

### Production checklist (prieš viešą domeną)

- **PUBLIC_SITE_URL** — pilnas kanoninis URL su `https://` (be gale `/` arba su — kaip naudosite pastoviai); įtakoja OG, `hreflang`, sitemap.
- **PUBLIC_CONTACT_EMAIL** — `mailto:` adresas; jei nenustatyta, naudojamas el. paštas iš `finalCta.contactEmail` (i18n).
- Po deploy: atidaryti `/` ir `/en/`, patikrinti primary CTA ir **`/sitemap.xml`** (URL turi sutapti su `PUBLIC_SITE_URL`).
- **SVG logotipas** (iš `INTUIT LOGO/ai/`) — pasirinktinai vėliau vietoj JPG geresniam masteliui ir LCP; iki tol galioja `public/brand/*.jpg`.

## Turinys ir kalbos

- Lietuvių: [src/i18n/lt.ts](src/i18n/lt.ts)
- Anglų: [src/i18n/en.ts](src/i18n/en.ts)

## Brand

- Logotipai: `public/brand/` (kopijuoti iš `INTUIT LOGO/jpg/`).
- Šriftas: **Inter** (`@fontsource/inter`). Larsseit žr. [docs/BRAND.md](docs/BRAND.md).

## Sitemap

Build metu [`astro.config.mjs`](astro.config.mjs) integracija **`intuit-sitemap`** įrašo `dist/sitemap.xml` su `/` ir `/en/` URL pagal tą patį kanoninį `site` kaip ir OG (`PUBLIC_SITE_URL` / `SITE_URL` arba numatytasis `astro.config.mjs`). Po deploy tikrinkite, kad `https://<jūsų-domenas>/sitemap.xml` grąžina XML.

Alternatyva ateityje: oficiali `@astrojs/sitemap` integracija po Astro versijos atnaujinimo.

## Licencija

Privatus projektas — papildykite pagal poreikį.
