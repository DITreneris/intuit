# Brand santrauka (INTUIT)

- **Šaltiniai:** aplankas `INTUIT LOGO/` — vektorius (`ai/`), peržiūra (`pdf/`), raster (`jpg/`), šriftai (`_font/Larsseit/`).
- **Ženklas:** monochromas žodžio ženklas su `/` — tech/system nuojauta; šviesus fonas + juodas ženklas pagal nutylėjimą.
- **Web assetai (`public/brand/`):**
  - `logo-light.jpg` — šviesiam fonui (šaltinis: `INTUIT LOGO/jpg/INTUIT_LOGO_.jpg`).
  - `logo-dark.jpg` — tamsiam blokui / kontaktams (šaltinis: `INTUIT_LOGO/jpg/INTUIT_LOGO_INVERSE.jpg`).
  - `logo-pattern-light.jpg` — chevron raštas ant šviesaus (Hero dekoracija, žema opacity).
  - `logo-pattern-dark.jpg` — chevron atvirkštinis (pasiruošęs; ant `bg-ink` naudoti atsargiai dėl JPEG fono).
  - `contact-nerijus.webp` / `contact-nerijus.jpg` — kontaktų kortelės portretas (`FinalCta`), kvadratas 480×480 eksportas iš šaltinio nuotraukos.
- **Matmenys:** oficialūs JPG ~**1000×978 px** (beveik kvadratas su laukais); `<img>` naudoti tikrus `width` / `height` dėl CLS (`Header`, `FinalCta`).
- **Larsseit:** komercinis šriftas; prieš `@font-face` įsitikinkite **webfont licencija**. Kol licencija nepatvirtinta, svetainė naudoja **Inter** (`@fontsource/inter`).
- **UI:** daug whitespace, griežtas grid, santūrus radius — dera su geometriniu ženklu. Implementacija: Tailwind tokenai ir `.card` / `.card-muted` — [tailwind.config.mjs](../tailwind.config.mjs), [src/styles/global.css](../src/styles/global.css); turinio plotis dažnai `max-w-content` (1180px).
- **Web spalvos ir diagramos:** pagrindinis akcentas lieka gilus mėlynas (`accent`); antriniai diagramų akcentai (`diagramElectric`, `diagramLoop`) ir švelnus `bg-diagram-glow` sustiprina skaitomumą nekeičiant šviesaus „trust“ režimo (PRD §5.2).
- **Klientų logotipai (TrustedBy):** pagal nutylėjimą rodomi **pilnos spalvos** (originalūs brand failai); monochromas ar desaturated versija tik jei tai numato **INTUIT ar konkretaus kliento** gairės / sutartas naudojimas.
- **Juridinis subjektas (vieša informacija puslapyje):** Intuit Communications, MB — įm. k. 305723022, PVM LT100014758914; kontaktai ir adresas — `finalCta` / `footer` laukai [src/i18n/lt.ts](../src/i18n/lt.ts); production el. paštui — `PUBLIC_CONTACT_EMAIL`.
