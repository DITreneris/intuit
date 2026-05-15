# Brand santrauka (INTUIT)

- **Šaltiniai:** aplankas `INTUIT LOGO/` — vektorius (`ai/`), peržiūra (`pdf/`), raster (`jpg/`), šriftai (`_font/Larsseit/`).
- **Ženklas:** monochromas žodžio ženklas su `/` — tech/system nuojauta; šviesus fonas + juodas ženklas pagal nutylėjimą.
- **Web assetai (`public/brand/`):**
  - `logo-light.svg` — 32×32 monograma (tai pats path stem kaip `public/favicon.svg`); pagrindiniam UI wordmark **nenaudojama**.
  - `logo-light.jpg` / `logo-dark.jpg` — kanoniniai pilni ženklai su laukais (~1000×978); šaltiniai kopijuojami iš `INTUIT LOGO/jpg/`. Iš jų generuojami horizontalesni wordmark rasteriai (žemiau).
  - `logo-wordmark-light.{jpg,png,webp}` / `logo-wordmark-dark.{jpg,webp}` — **UI ir OG:** `npm run gen:wordmark` ([`scripts/export-wordmark-raster.mjs`](../scripts/export-wordmark-raster.mjs)) — `trim` nuo kanoninių JPG; šviesiam ženklui **PNG + WebP su permatomu fonu** (šviesūs pikseliai → alpha), kad nesikirstų su `bg-warm` / `bg-paper`; **JPG** lieka nepermatomas (**OG** / social per [`Layout.astro`](../src/layouts/Layout.astro)). Tipinė išvestis ~**623×147**. Komponentas [`IntuitWordmark.astro`](../src/components/IntuitWordmark.astro) (`variant="light"` naudoja PNG fallbacką); matmenys — [`src/brand/logo-wordmark-meta.json`](../src/brand/logo-wordmark-meta.json).
  - `logo-pattern-light.jpg` — chevron raštas ant šviesaus (Hero dekoracija, žema opacity).
  - `logo-pattern-dark.jpg` — chevron atvirkštinis (pasiruošęs; ant `bg-ink` naudoti atsargiai dėl JPEG fono).
  - `logo-pattern-inverse.jpg` — pilnas žodžio ženklas ir chevron raštas, tamsus (inverse) fonas; **Hero** dešinė per [`BrandPatternPanel.astro`](../src/components/BrandPatternPanel.astro) (i18n: `hero.brandPatternAlt` `<img alt>`; Tailwind `heroInkFrom` / `heroInkTo` + apatinis gradientinis nutildymas); šaltinis: `INTUIT LOGO/jpg/INTUIT_LOGO_PATTERN_INVERSE.jpg`.
  - `contact-nerijus.webp` / `contact-nerijus.jpg` — kontaktų kortelės portretas (`FinalCta`), kvadratas 480×480 eksportas iš šaltinio nuotraukos.
- **Matmenys:** kanoniniai JPG ~**1000×978 px**; wordmark UI — žr. `logo-wordmark-meta.json`. OG / social: [`Layout.astro`](../src/layouts/Layout.astro) — `brand/logo-wordmark-light.jpg`.
- **Web dydžių hierarchija:** header ir `FinalCta` — wordmark `h-11 md:h-12`; TrustedBy inline **vienas žingsnis žemiau** (`h-10 md:h-11`). Plotis ekrane didesnis nei su kvadratiniu JPG tame pačiame aukštyje. **Hero** — inverse plakatas (`BrandPatternPanel`) iki `28rem` pločio. Lentelė — [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) poskyris „Prekės ženklas“.
- **Larsseit:** komercinis šriftas; prieš `@font-face` įsitikinkite **webfont licencija**. Kol licencija nepatvirtinta, svetainė naudoja **Inter** (`@fontsource/inter`).
- **UI:** daug whitespace, griežtas grid, santūrus radius — dera su geometriniu ženklu. Implementacija: Tailwind tokenai ir `.card` / `.card-muted` — [tailwind.config.mjs](../tailwind.config.mjs), [src/styles/global.css](../src/styles/global.css); turinio plotis dažnai `max-w-content` (1180px).
- **Web spalvos ir diagramos:** pagrindinis akcentas lieka gilus mėlynas (`accent`); antriniai diagramų akcentai (`diagramElectric`, `diagramLoop`) ir švelnus `bg-diagram-glow` sustiprina skaitomumą nekeičiant šviesaus „trust“ režimo (PRD §5.2).
- **Klientų logotipai (TrustedBy):** pagal nutylėjimą rodomi **pilnos spalvos** (originalūs brand failai); monochromas ar desaturated versija tik jei tai numato **INTUIT ar konkretaus kliento** gairės / sutartas naudojimas.
- **Juridinis subjektas (vieša informacija puslapyje):** Intuit Communications, MB — įm. k. 305723022, PVM LT100014758914; kontaktai ir adresas — `finalCta` / `footer` laukai [src/i18n/lt.ts](../src/i18n/lt.ts); production el. paštui — `PUBLIC_CONTACT_EMAIL`.
