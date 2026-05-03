# Brand santrauka (INTUIT)

- **Šaltiniai:** aplankas `INTUIT LOGO/` — vektorius (`ai/`), peržiūra (`pdf/`), raster (`jpg/`), šriftai (`_font/Larsseit/`).
- **Ženklas:** monochromas žodžio ženklas su `/` — tech/system nuojauta; šviesus fonas + juodas ženklas pagal nutylėjimą.
- **Web assetai:** `public/brand/logo-light.jpg`, `logo-dark.jpg` (kopijuoti iš repo brand aplanko).
- **Larsseit:** komercinis šriftas; prieš `@font-face` įsitikinkite **webfont licencija**. Kol licencija nepatvirtinta, svetainė naudoja **Inter** (`@fontsource/inter`).
- **UI:** daug whitespace, griežtas grid, santūrus radius — dera su geometriniu ženklu. Implementacija: Tailwind tokenai ir `.card` / `.card-muted` — [tailwind.config.mjs](../tailwind.config.mjs), [src/styles/global.css](../src/styles/global.css); turinio plotis dažnai `max-w-content` (1180px).
- **Juridinis subjektas (vieša informacija puslapyje):** Intuit Communications, MB — įm. k. 305723022, PVM LT100014758914; kontaktai ir adresas — `finalCta` / `footer` laukai [src/i18n/lt.ts](../src/i18n/lt.ts); production el. paštui — `PUBLIC_CONTACT_EMAIL`.
