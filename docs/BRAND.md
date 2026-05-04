# Brand santrauka (INTUIT)

- **Šaltiniai:** aplankas `INTUIT LOGO/` — vektorius (`ai/`), peržiūra (`pdf/`), raster (`jpg/`), šriftai (`_font/Larsseit/`).
- **Ženklas:** monochromas žodžio ženklas su `/` — tech/system nuojauta; šviesus fonas + juodas ženklas pagal nutylėjimą.
- **Web assetai (`public/brand/`):**
  - `logo-light.svg` — monochromas žodžio ženklas šviesiam fonui (masteliui / LCP; žr. `public/favicon.svg` tą patį path stem); naudojamas su `<picture>` ir `logo-light.jpg` fallback.
  - `logo-light.jpg` — šviesiam fonui (šaltinis: `INTUIT LOGO/jpg/INTUIT_LOGO_.jpg`); fallback, jei SVG neįkeliamas.
  - `logo-dark.jpg` — tamsiam blokui / kontaktams (šaltinis: `INTUIT_LOGO/jpg/INTUIT_LOGO_INVERSE.jpg`).
  - `logo-pattern-light.jpg` — chevron raštas ant šviesaus (Hero dekoracija, žema opacity).
  - `logo-pattern-dark.jpg` — chevron atvirkštinis (pasiruošęs; ant `bg-ink` naudoti atsargiai dėl JPEG fono).
  - `logo-pattern-inverse.jpg` — pilnas žodžio ženklas ir chevron raštas, tamsus (inverse) fonas; **Hero** dešinė per [`BrandPatternPanel.astro`](../src/components/BrandPatternPanel.astro) (i18n: `proof.brandLabel` / `brandPatternAlt`); šaltinis: `INTUIT LOGO/jpg/INTUIT_LOGO_PATTERN_INVERSE.jpg`.
  - `contact-nerijus.webp` / `contact-nerijus.jpg` — kontaktų kortelės portretas (`FinalCta`), kvadratas 480×480 eksportas iš šaltinio nuotraukos.
- **Matmenys:** oficialūs JPG ~**1000×978 px** (beveik kvadratas su laukais); `<img>` naudoti tikrus `width` / `height` dėl CLS (`Header`, `FinalCta`).
- **Web dydžių hierarchija:** header ir `FinalCta` — `logo-light` / `logo-dark` apie `h-10 md:h-11`; TrustedBy inline `logo-light` **vienas žingsnis žemiau** (`h-9 md:h-10`), kad juostos antraštėje ženklas būtų skaitomas, bet lipni juosta liktų pirmuoju prekės ženklu. **Hero** — pilno pločio inverse plakatas (`BrandPatternPanel`); Proof sekcijoje inverse rasterio nėra. Lentelė — [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) poskyris „Prekės ženklas (raster + SVG)“.
- **Larsseit:** komercinis šriftas; prieš `@font-face` įsitikinkite **webfont licencija**. Kol licencija nepatvirtinta, svetainė naudoja **Inter** (`@fontsource/inter`).
- **UI:** daug whitespace, griežtas grid, santūrus radius — dera su geometriniu ženklu. Implementacija: Tailwind tokenai ir `.card` / `.card-muted` — [tailwind.config.mjs](../tailwind.config.mjs), [src/styles/global.css](../src/styles/global.css); turinio plotis dažnai `max-w-content` (1180px).
- **Web spalvos ir diagramos:** pagrindinis akcentas lieka gilus mėlynas (`accent`); antriniai diagramų akcentai (`diagramElectric`, `diagramLoop`) ir švelnus `bg-diagram-glow` sustiprina skaitomumą nekeičiant šviesaus „trust“ režimo (PRD §5.2).
- **Klientų logotipai (TrustedBy):** pagal nutylėjimą rodomi **pilnos spalvos** (originalūs brand failai); monochromas ar desaturated versija tik jei tai numato **INTUIT ar konkretaus kliento** gairės / sutartas naudojimas.
- **Juridinis subjektas (vieša informacija puslapyje):** Intuit Communications, MB — įm. k. 305723022, PVM LT100014758914; kontaktai ir adresas — `finalCta` / `footer` laukai [src/i18n/lt.ts](../src/i18n/lt.ts); production el. paštui — `PUBLIC_CONTACT_EMAIL`.
