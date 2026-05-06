# Changelog

Visi reikšmingi pakeitimai šiame repozitorijoje dokumentuojami šiame faile.  
Formatas remiasi [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versijos seka [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (kur pritaikoma).

## [Unreleased]

### Added

- [docs/MOBILE-AUDIT.md](docs/MOBILE-AUDIT.md) — mobiliojo UI/UX audito metodika (įrenginių matrica, įrankiai, LT+EN smoke), Takas A (Must/Should/Want su kodinėmis nuorodomis), Takas B (el. parašas), prioritizuotas backlogas; indeksas — [docs/README.md](docs/README.md).
- **TrustedBy — Montis Magia:** [`public/clients/montis-magia.png`](public/clients/montis-magia.png) (permatomas PNG, brand mėlyna iš šaltinio); paruošimas — [`scripts/prep-montis-logo.py`](scripts/prep-montis-logo.py) (įvestis `INTUIT LOGO/client_logo/montis_magia.png`). i18n [`src/i18n/lt.ts`](src/i18n/lt.ts) / [`src/i18n/en.ts`](src/i18n/en.ts): `trustedBy.logos` — naujas įrašas ir **abėcėlinė** eilė (MasterKey → Montis Magia → PHH → Pigu → Pikas → Sirin → TEC).
- **Favicon PNG / Apple touch:** [`public/favicon-32x32.png`](public/favicon-32x32.png), [`public/apple-touch-icon.png`](public/apple-touch-icon.png); generavimas: `npm run gen:favicon` → [`scripts/gen-favicon-png.mjs`](scripts/gen-favicon-png.mjs) (`@resvg/resvg-js`, [`package.json`](package.json)); [`Layout.astro`](src/layouts/Layout.astro) — papildomi `rel="icon"` (PNG) ir `apple-touch-icon` su `base`, šalia esamo `favicon.svg`.
- **Vercel Analytics (pageview):** pridėtas `@vercel/analytics` ([`package.json`](package.json)); `Layout.astro` ([`src/layouts/Layout.astro`](src/layouts/Layout.astro)) įdėtas `<Analytics />`, kad analitika būtų įkelta visuose puslapiuose.

### Changed

- **Header / TrustedBy — wordmark be „baltos dėžės“:** [`scripts/export-wordmark-raster.mjs`](scripts/export-wordmark-raster.mjs) (`npm run gen:wordmark`) iš `logo-light.jpg` po `trim` kuria `logo-wordmark-light.{jpg,png,webp}` — **PNG/WebP** su alfa (šviesūs pikseliai → permatomumas), **JPG** nepermatomas ([`Layout.astro`](src/layouts/Layout.astro) OG `og:image`). [`IntuitWordmark.astro`](src/components/IntuitWordmark.astro): `variant="light"` — `<picture>` su WebP + PNG fallback; tamsus variantas — WebP + JPG. Meta — [`public/brand/logo-wordmark-meta.json`](public/brand/logo-wordmark-meta.json); [`docs/BRAND.md`](docs/BRAND.md).
- **SEO — atskiri OG share paveikslai (LT/EN):** pridėti `public/social/og-lt.jpg` ir `public/social/og-en.jpg` (**1200×630**), generuojami per [`scripts/gen-og-images.mjs`](scripts/gen-og-images.mjs); [`Layout.astro`](src/layouts/Layout.astro) — `og:image` parenkamas pagal kalbą, pridėti `og:image:width/height/alt` ir `twitter:image:alt`; i18n `meta.ogImageAlt` — [`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts).
- **Hero / Proof — valdymo diagrama (HeroSystemDiagram „svoris“):** [`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro) — pridėtas prop `size: 'proof' | 'hero'` (didesnis stage `max-w`, konteinrio `min-h` ir padding), pakelta SVG tipografija (desktop), pastorintos jungtys (2 px) ir chevron (9×9), sustiprintas feedback loop (arc) kontrastas; [`src/components/sections/Hero.astro`](src/components/sections/Hero.astro) — schema įdėta į Hero su `size="hero"`; [`src/components/sections/Proof.astro`](src/components/sections/Proof.astro) — aiškiai nurodyta `size="proof"`.
- **Deploy / dokumentacija — produkcinis domenas `intuit.lt`:** atnaujinti kanoninių URL fallback'ai į `https://www.intuit.lt` ([`astro.config.mjs`](astro.config.mjs), [`src/layouts/Layout.astro`](src/layouts/Layout.astro)); dokumentacijoje aiškiai įtvirtinta produkcija šaknyje (`base: /`) ir `PUBLIC_SITE_URL` naudojimas ([`README.md`](README.md), [`.env.example`](.env.example), [`.cursor/rules/intuit-landing.mdc`](.cursor/rules/intuit-landing.mdc), [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md)).
- **Proof — valdymo diagrama (HeroSystemDiagram v4):** [`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro) — po v3: flow **tik tarpų** segmentai (solid, stroke ~4, rodyklės), piešti **pabaigoje** DOM (virš kortelių fill); pašalinta ilga spine ir **dash** animacija; „Žinutė“ — plonesnis kontūras (~1.15), **feDropShadow**, tint **0.15**; ikonos **scale(1.15)**. HTML hierarchija: strip `text-sm`/`md:text-base`, caption `text-sm`, kilpa `text-xs`. i18n `svgDesc`; DS [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md).
- **Proof — valdymo diagrama (HeroSystemDiagram v5):** [`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro) — connectoriai perdaryti iš filled triangle SVG markerių į **HTML overlay** (`.hsd-connectors`) virš SVG kortelių. Linija **1.5 px @ accent/55 %** + plonas **chevron** (`border-top + border-right`, 6×6 px) arba — per naują prop **`connectorVariant: 'chevron' | 'line'`** (default `chevron`) — tik linija (kryptis aiški per kortelių numerius 1–4). Geometrija perskirstyta: desktop kortelės **110/172/110/110** vnt. su **28 vnt.** tarpais (viewBox 612×200, ~8 px paddingo iš kiekvienos pusės); mobile viewBox **300×412** (vietoj 372) su **24 vnt.** tarpais. Anchor karta („Žinutė“) — be pakeitimų: kontūras **~1.15**, `feDropShadow`, tint **0.15**. **Jokia rodyklė neliečia kortelės bordurai**, jokio filled triangle nelikę. DS [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md).
- **Proof — valdymo diagrama (HeroSystemDiagram v5.1 polish):** [`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro) — 10 micro UI/UX patobulinimų premium SaaS pojūčiui. Connector kontrastas **0.55 → `color-mix` 70 %** linijai ir **80 %** chevron border'iui (2 px vietoj 1.5 px); lygiavimas per **ikonų centrus** (`--cy: 21%`, desktop viewBox 200 → 220). Numerių badge’ų hierarchija: pasyvūs (1, 3, 4) — outline (stroke 0.35), aktyvus (2) — solid accent + white skaičius. Anchor „Žinutė“ gauna **4×4 px active dot** virš kortelės top edge’o. Radius unifikavimas (12/16/6). Heading tipografija — `tracking-[0.18em]`, loop label — `text-2xs`. Ikonos — `stroke-width 1.75` + `scale(1.05)`. Heading → diagram tarpas **`mt-5 md:mt-7`**. Naujas **iteracijos arc** desktop SVG’e — dashed quadratic curve nuo kortelės 4 į kortelę 2, plus dekoratyvus ↺. Backlog’as 7 likusiems polish punktams — [`todo.md`](todo.md). DS [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md).
- **Copy (i18n LT / EN adaptacija):** [`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts) — `hero.diagram.nodeHint3`: be žodinio „Vykdymas“ dubliavimo su antrašte (LT „Pagal planą“, EN „According to plan“); `about.paragraphs[1]`: auditorija — gamyba, statyba, technologijos ir paslaugų verslai (EN — atskira natūrali formulė); `finalCta.subtitle`: 15 min. pokalbio rėmas (LT pilnai; EN „A 15-minute call to check fit…“).
- **GitHub Pages deploy (CI):** [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) — `actions/deploy-pages` **v4 → v5** (JavaScript action runtime ant **Node 24**; mažiau GitHub Actions Node 20 deprecation įspėjimų). `upload-pages-artifact@v3` ir vienas artifact žingsnis build job’e — kaip anksčiau.
- **Landing UX (mobilus + skaitomumas):** [`Hero.astro`](src/components/sections/Hero.astro) — natūralus stulpelių eiliškumas (tekstas viršuje `< md`); [`TrustedBy.astro`](src/components/sections/TrustedBy.astro) + i18n `trustedBy.hint` — aiškus slinkties paaiškinimas, `text-xs` hintui; [`ChaosVsSystem.astro`](src/components/sections/ChaosVsSystem.astro) + `chaosVsSystem.sectionTitle` (LT/EN) — matoma H2; [`Process.astro`](src/components/sections/Process.astro) — vertikali `border-l` jungtis mobiliajame (`md+` be pakeitimo); [`Header.astro`](src/components/Header.astro) — primary CTA pirmoje mobilaus meniu eilėje.
- **Logotipas (wordmark) ir brand failai:** kanoniniai JPG iš `INTUIT LOGO/jpg/` į [`public/brand/`](public/brand/) (`logo-light.jpg`, `logo-dark.jpg`, …); horizontalūs UI rasteriai — `npm run gen:wordmark` → `logo-wordmark-*` (žr. įrašą aukščiau apie permatomą šviesų wordmark). OG — `brand/logo-wordmark-light.jpg` ([`Layout.astro`](src/layouts/Layout.astro)); kontaktų blokas — `logo-dark.jpg`. [`Header.astro`](src/components/Header.astro) / [`TrustedBy.astro`](src/components/sections/TrustedBy.astro) — [`IntuitWordmark`](src/components/IntuitWordmark.astro), `shrink-0`; [`docs/BRAND.md`](docs/BRAND.md), [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md).
- **Hero inverse panelis (hierarchija + stiprus brandingas):** [`Hero.astro`](src/components/sections/Hero.astro) — teksto kolona ≥ prekės ženklo kolonai (`1.1fr` / `0.95fr`), `md:items-start`, inverse blokas su `md:pt-8` ir `max-w-[min(100%,28rem)]` dešinėje; [`BrandPatternPanel.astro`](src/components/BrandPatternPanel.astro) — be viršutinės etiketės, fonas `heroInkFrom` → `heroInkTo`, inset highlight, apatinis gradientinis sluoksnis ant chevron rašto; i18n pašalintas `proof.brandLabel` (LT/EN); Tailwind — [`tailwind.config.mjs`](tailwind.config.mjs) `heroInkFrom` / `heroInkTo`. Dokumentacija: [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md), [`docs/BRAND.md`](docs/BRAND.md), [`docs/COPY-GLOSSARY.md`](docs/COPY-GLOSSARY.md).
- **Premium SaaS polish (P1–P3):** suvienodinta „eyebrow“ (`TrustedBy` — `.label-eyebrow`, `BrandPatternPanel` — `tracking-[0.2em]`); Proof metrikos — `tabular-nums`; ChaosVsSystem — `surface` vietoj `bg-white/*`; Header — klasė `.header-toolbar-control`; [`global.css`](src/styles/global.css) — `transition-colors` ant `a`/`button`/`summary`, `.section-border-standard`; dokumentacija — [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md), [`docs/BRAND.md`](docs/BRAND.md), [`README.md`](README.md).

### Fixed

- **Vercel deploy (stiliai ir statiniai):** [`astro.config.mjs`](astro.config.mjs) — kai `ASTRO_BASE` nenurodytas ir build vyksta Vercel (`VERCEL=1`), `base` automatiškai **`/`** (anksčiau numatytasis `/intuit` kėlė 404 CSS ir paveikslams šakninėje `*.vercel.app` URL). Kanoninis `site` be `PUBLIC_SITE_URL` — `https://$VERCEL_URL`. [README.md](README.md), [.env.example](.env.example).

- **TrustedBy — Montis Magia (GitHub Pages):** [`public/clients/montis-magia.png`](public/clients/montis-magia.png) įtrauktas į git istoriją (anksčiau failas buvo tik lokaliai / nepush’intas) — po deploy nebelieka 404 ties `/intuit/clients/montis-magia.png`, juostoje rodomas logotipas, ne lūžęs `img`.

## [0.2.0] — 2026-05-04

### Added

- [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md) — LT/EN copy glosarijus (nuo v1.2; v1.4 — §**Agentams**): trumpas Hero/Header CTA ir ilgesnis `finalCta` + `mailto`; EN adaptacijos taisyklės Cursor agentams; nuoroda iš [docs/README.md](docs/README.md).
- `public/brand/`: `logo-pattern-light.jpg`, `logo-pattern-dark.jpg` (šaltinis `INTUIT LOGO/jpg/`); Hero — subtilus chevron fonas (`Hero.astro`, `mix-blend-multiply`).
- Sekcijų kortelės su **linijinėmis ikonėlėmis virš antraštės** (inline SVG): `Solution`, `Process`, `Proof`, `Offers`, `About`; `Problem` — vertikalus blokas (ikona virš signalo); `ChaosVsSystem` — mažos ikonos prie etikečių.
- Dokumentacija sinchronizuota su kodu: [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md) **v1.4**; [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) **v1.3** (ikonų šablonas, i18n šaltinis lentelėje); [docs/BRAND.md](docs/BRAND.md) — pilnas `public/brand/` sąrašas ir JPG matmenys; [docs/README.md](docs/README.md), [README.md](README.md), [AGENTS.md](AGENTS.md), [.cursor/rules/intuit-landing.mdc](.cursor/rules/intuit-landing.mdc).
- Landing v2 diagramų tokenai: Tailwind `diagramElectric`, `diagramLoop`, `bg-diagram-glow`; [`global.css`](src/styles/global.css) `--ds-diagram-electric`, `--ds-diagram-loop`, `--ds-success-soft`, `--ds-accent-teal`; klasė `.hero-diagram-dash-animate`; i18n `hero.diagram.controlBadge`, `kpiLabel`.
- GitHub Pages: [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) (build `dist`, `actions/deploy-pages`).
- Astro [`astro.config.mjs`](astro.config.mjs): numatytasis `site` → `https://ditreneris.github.io`, `base` → `/intuit`; aplinkos kintamasis **`ASTRO_BASE`** Vercel šakninei (`/`).
- Design System: [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) (v1.1 → **v1.2** su naujais diagramų tokenais); Tailwind `danger` / `dangerSoft`, `diagramStrokeAi`, `diagramLineSoft`, `fontSize` `2xs`, `boxShadow` `elevated`, `backgroundImage` `diagram-radial`; `:root` `--ds-*` SVG (`global.css`).
- UI primitives: [src/components/ui/ButtonPrimary.astro](src/components/ui/ButtonPrimary.astro) (`size` md/sm, `variant` default/onDark), [ButtonSecondary.astro](src/components/ui/ButtonSecondary.astro); `@layer components` klasė `.card-featured` (Offers highlighted tier).
- i18n: `nav.langSwitchToEn` / `nav.langSwitchToLt`; Header kalbos nuoroda su `aria-label` ekrano skaityklėms.
- i18n: `finalCta.mailBodyTemplate` (LT/EN); kontaktinis CTA — `mailto:` su `subject` ir iš anksto užpildytu `body` (`URLSearchParams`, `FinalCta.astro`).
- Tailwind dizaino tokenai: `warm`, `surface`, `accent`, `accentTeal`, `aiSoft`, `successSoft`, `muted2`, šešėliai `soft` / `softSm`, `max-w-content` (1180px), `bg-hero-premium`.
- `@layer components` klasės `.card` ir `.card-muted` (`src/styles/global.css`).
- `src/components/HeroSystemDiagram.astro` — komunikacijos sistemos SVG schema (desktop + mobile; v2 — storesnis flow, KPI, kontrolė).
- Build metu generuojamas `dist/sitemap.xml` (`astro.config.mjs` — integracija `intuit-sitemap`).
- `Layout.astro`: `<link rel="sitemap" …>` į `/sitemap.xml`.
- i18n: `hero.diagram` ir `chaosVsSystem` (`lt.ts` / `en.ts`).
- Prieinamumas: „Praleisti į pagrindinį turinį“ / „Skip to main content“ (`messages.a11y.skipToMain`), nuoroda į `#main` (`Layout.astro`); `<main id="main" tabindex="-1">` (`LandingPage.astro`).
- `global.css`: matomas `:focus-visible` kontūras nuorodoms / `button` / `summary`; `.skip-to-main` paslėptas iki fokuso.

### Changed

- **Dokumentacija (sinchronas su kodu):** [README.md](README.md) — Hero vs Proof vizualai (diagrama Proof, inverse Hero); [docs/BRAND.md](docs/BRAND.md), [docs/README.md](docs/README.md), [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md) — inverse ženklo vieta; [AGENTS.md](AGENTS.md) — aiški nuoroda į `src/i18n/types.ts`; [.cursor/rules/intuit-landing.mdc](.cursor/rules/intuit-landing.mdc) — Tailwind tokenai (`diagramElectric`, `diagramLoop`, `bg-diagram-glow`).

- **TrustedBy inline ženklas:** `logo-light.jpg` aukštis `h-7 md:h-8` → `h-9 md:h-10` (artėja prie Header, vienu žingsniu mažesnis); [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) lentelė ir hierarchija, [docs/BRAND.md](docs/BRAND.md) web skalė.

- **Hero / Proof vizualų sukeitimas** (i18n nekeista — `proof.brandLabel` / `proof.brandPatternAlt`):
  - Naujas [`src/components/BrandPatternPanel.astro`](src/components/BrandPatternPanel.astro): juodas skydelis + [`public/brand/logo-pattern-inverse.jpg`](public/brand/logo-pattern-inverse.jpg).
  - [`src/components/sections/Hero.astro`](src/components/sections/Hero.astro): dešinėje kolonoje `BrandPatternPanel` vietoj anksčiau buvusios valdymo diagramos.
  - [`src/components/sections/Proof.astro`](src/components/sections/Proof.astro): po metrikų [`HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro); inverse plakatas iš Proof pašalintas (perkeltas į Hero).
  - Dokumentacija: [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md), [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md), [README.md](README.md), [.cursor/rules/intuit-landing.mdc](.cursor/rules/intuit-landing.mdc).

- **Design system — micro polish (v1.5, be turinio / struktūros keitimo):**
  - [`src/styles/global.css`](src/styles/global.css): `.section-shell`, `.section-shell--tight`, `.label-eyebrow`.
  - Sekcijų konteineriai per shell utility: Hero (grid), ChaosVsSystem, Problem, Solution, Process, Proof, Offers, About, FinalCta; TrustedBy — tik `.section-shell--tight` (kompaktiškas vertikalus ritmas; žr. [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)).
  - [`src/components/sections/Problem.astro`](src/components/sections/Problem.astro): kortelės `p-6`, blokas `space-y-10`, caption `text-base text-muted`.
  - [`src/components/sections/About.astro`](src/components/sections/About.astro), [`FinalCta.astro`](src/components/sections/FinalCta.astro): `space-y-10`.
  - [`src/components/sections/Process.astro`](src/components/sections/Process.astro): žingsnių kortelės `p-6`.
  - [`src/components/sections/Hero.astro`](src/components/sections/Hero.astro): eyebrow klasė `.label-eyebrow`.
  - [`src/components/sections/ChaosVsSystem.astro`](src/components/sections/ChaosVsSystem.astro): etiketėms `tracking-[0.2em]`, sekcijai `scroll-mt-28`.
  - [`src/components/Header.astro`](src/components/Header.astro): mobile kalbos jungiklis, meniu `summary` ir dropdown nuorodos su `min-h-11` (didinamas palietimo plotas).
  - [`src/components/Footer.astro`](src/components/Footer.astro): `py-12` (buvo `py-10`).
  - [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md): layout utilities, ikonų slotų lentelė, TrustedBy tight, checklist atnaujinimai.

- **Ženklo matmenys (nav / TrustedBy):** [`Header.astro`](src/components/Header.astro) `logo-light` — `h-10 md:h-11`; [`TrustedBy.astro`](src/components/sections/TrustedBy.astro) inline ženklas — `h-7 md:h-8`; dokumentacija [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) („Prekės ženklas (raster, JPG)“), [docs/BRAND.md](docs/BRAND.md) (hierarchija).

- **Proof — brand momentas (inverse), istorija:** metodikos rasteriai pašalinti; įvesti [`public/brand/logo-pattern-inverse.jpg`](public/brand/logo-pattern-inverse.jpg) ir i18n `brandLabel` / `brandPatternAlt` (LT/EN) vietoje `demoLabel` / `methodologyIllustrationAlt`; [docs/BRAND.md](docs/BRAND.md), [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md). *(Anksčiau inverse skydelis buvo Proof apačioje; dabartinė vieta Hero — žr. įrašą „Hero / Proof vizualų sukeitimas“.)*

- **Proof:** pašalintas `proof.body` (LT/EN) ir antrinis pastraipos blokas [`Proof.astro`](src/components/sections/Proof.astro); lieka H2, metrikų kortelės, papildomas vizualinis blokas ([`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts), [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md)).

- **Procesas (`process.steps`):** trečio žingsnio pavadinimas LT „Paleidimas“ → „Startas“; EN „Rollout“ → „Launch“ ([`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts)); PRD lentelė sinchronizuota ([`docs/PRD-one-page-PR-AI.md`](docs/PRD-one-page-PR-AI.md)).

- **Hero `subtitle` (LT/EN):** LT — „Profesionalios konsultacijos: nuo viešųjų ryšių iki rinkodaros ar krizių valdymo. Reikia pagalbos? Pasikalbam.“; EN — „Professional consulting: from public relations to marketing and crisis support. Need help? Let's talk.“ ([`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts)).

- **Offers paketų punktai (LT/EN):** Įgyvendinimas — „Kampanijų organizavimas ir viešųjų ryšių ciklai“ / „Campaign operations and PR cycles“; Mastelis — „Turinio automatizavimas ir kokybės kontrolė“ / „Content automation and quality control“ ([`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts)).

- **Copy (LT):** „vadovybei“ → „vadovams“ kur tinka žmonėms, ne institucijai — `hero.diagram.nodeHint4` „Vadovams matomi“, `chaosVsSystem.systemCaption`, `proof.title`, `methodologyIllustrationAlt`; EN `nodeHint4` → „Leaders can act“ ([`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts), [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md)).

- **FinalCta portretas** ([`src/components/sections/FinalCta.astro`](src/components/sections/FinalCta.astro), [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)): asimetriškam 1:1 šaltiniui — `overflow-hidden` + `scale` / `origin` kad sumažėtų kairysis „tuščias“ laukas; rekomenduojama vėliau pakeisti `contact-nerijus` failus su centruota kompozicija.

- **Offers — Mastelis / Scale paketas:** LT ženkliukas „Pagal apimtį“, tag „Šablonai ir kokybė“, CTA „Aptarti plėtrą“; EN „By scope“, „Playbooks and quality“, „Discuss growth“ — mažiau „mastelio“ / „scale“ kartojimo prieš pavadinimą ([`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts), [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md)).

- **Hero diagrama — clarity pass (variantas C)** ([`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro), [`src/styles/global.css`](src/styles/global.css), [`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts), [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md)): pašalinta matoma HTML legenda ir kilpos etiketė SVG; punktyrinė kilpa statiška, silpnesnė (~`opacity` 0.52, stroke ~1.75); pašalinta `.hero-diagram-dash-animate` ir `@keyframes hero-diagram-dash`; keturi mazgai vienodu kortelių stiliumi (be išskirto `aiSoft` 2 žingsnyje); suvienodintos linijinės ikonos (wifi / žinutė / tendencija / stulpeliai); sutrumpinti `nodeHint`; `svgDesc` atnaujintas; konteineris `overflow-visible` + horizontalus padding.

- **Proof demoblokas** ([`src/components/sections/Proof.astro`](src/components/sections/Proof.astro), [`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts)): pašalinti `metricsIntro` ir `demoNote` (dubliavo `proof.body`); viena kolona — `demoLabel` + iliustracija; sutrumpintas `methodologyIllustrationAlt`; [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) Raster skyrius.

- **Copy:** LT Hero / Header / Offers Starter CTA → „Gauti konsultaciją“ (vietoje „Užsukam pokalbį“); `chaosVsSystem.systemBadge` LT „Ritmingai“, EN „Cadence“; EN Hero ir Starter CTA — „Book a consultation“. [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md).

- **Mikro vizualinė darna** ([`src/components/Header.astro`](src/components/Header.astro) — nav `text-2xs`; [`src/components/sections/FinalCta.astro`](src/components/sections/FinalCta.astro) — portretas `rounded-xl`; [`todo.md`](todo.md) — PRD/DS v1.5, UTF-8; [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) — Header / kontaktų portretas).

- **Kontaktų kortelė — Nerijaus nuotrauka** ([`src/components/sections/FinalCta.astro`](src/components/sections/FinalCta.astro), [`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts)): optimizuoti rasteriai [`public/brand/contact-nerijus.webp`](public/brand/contact-nerijus.webp) + [`contact-nerijus.jpg`](public/brand/contact-nerijus.jpg) (480×480, `cover`, šaltinis repo šaknis `nerijuss.jpg`); `finalCta.contactPhotoAlt`; `<picture>` blokelyje šalia ženklo ir kontaktų.

- **TrustedBy H2 — INTUIT ženklas antraštėje** ([`src/components/sections/TrustedBy.astro`](src/components/sections/TrustedBy.astro), [`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts)): `trustedBy.title` → `titleBefore` + inline [`brand/logo-light.jpg`](public/brand/logo-light.jpg); `alt` — `hero.logoAlt`; [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md).

- **Premium vizualinė darna — TrustedBy juosta, ChaosVsSystem `--ds-diagram-stroke-*`, Proof WebP, hero diagramos tipografija, DS v1.5** ([`src/components/sections/TrustedBy.astro`](src/components/sections/TrustedBy.astro) — logo slotai iš `trustedBy.logos`; [`src/components/sections/ChaosVsSystem.astro`](src/components/sections/ChaosVsSystem.astro) + [`src/styles/global.css`](src/styles/global.css) — `--ds-diagram-stroke-lg`, `--ds-diagram-stroke-grid`; [`src/components/sections/Proof.astro`](src/components/sections/Proof.astro) — `<picture>` su [`public/illustration_method.webp`](public/illustration_method.webp); [`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro) — HTML blokas ir legenda su `text-2xs`, SVG `<text>` — `font-size` 10–11 (mikro hierarchija); dokumentacija [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) **v1.5**.

- **Hero diagrama — product vizualinė sistema** ([`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro), [`src/styles/global.css`](src/styles/global.css), [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md), [`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts)): ortogonali feedback kilpa (stačiakampis H/V kanalas, ne Bezier); silpnesnis kilpos stroke ir opacity vs forward srautas; `loopPathLabel` po horizontalaus segmento; mobile kilpa per kairį lauką (nekerta kortelių), statiška; `.hero-diagram-dash-animate` tik nuo **md** (~20s); fonas — `bg-diagram-radial` prislopintas mobile, `bg-diagram-glow` tik **md+**; naujas DS skyrius „Hero diagrama (product vizualinė kalba)“; atnaujintas `hero.diagram.svgDesc` LT/EN.

- **TrustedBy — klientų logotipai** ([`public/clients/`](public/clients/), [`src/i18n/lt.ts`](src/i18n/lt.ts), [`src/i18n/en.ts`](src/i18n/en.ts)): atnaujinti failai iš `INTUIT LOGO/client_logo` (Pigu.lt, Pikas, Sirin); pridėti trys PNG, kurių šaltinis buvo nuorodos į `Downloads` (PHH Group → `phh-group.png`, MasterKey Baltics → `masterkey-baltics.png`, TEC Consulting → `tec.png`). `trustedBy.logos` — šeši įrašai LT/EN su `alt` etiketėmis.

- **Problemos sekcijos copy (outcome-first):** [`src/i18n/lt.ts`](src/i18n/lt.ts) ir [`src/i18n/en.ts`](src/i18n/en.ts) — `problem.title`, `caption`, keturi `bullets` (`signal` + `detail`, situacija ir pasekmė); EN — US B2B adaptacija. [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md): §5 atnaujinta nuoroda į `problem.bullets[1]`; iš §9 pašalinta pasenusi eilutė apie `problem.bullets[2].detail`.

- **Landing — mažiau dekoratyvinių ikonų:** pašalintos viršutinės kortelių ikonos iš [`Solution.astro`](src/components/sections/Solution.astro), [`Process.astro`](src/components/sections/Process.astro) (connector linija `top-[2.375rem]` pagal žingsnių numerius), [`Proof.astro`](src/components/sections/Proof.astro), [`Offers.astro`](src/components/sections/Offers.astro), [`About.astro`](src/components/sections/About.astro); [`Problem.astro`](src/components/sections/Problem.astro) ir hero/chaos diagramos nepakitę. [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) **v1.4** — sekcijų šablonas „kortelių akcentas (ikona neprivaloma)“; [AGENTS.md](AGENTS.md), [README.md](README.md), [docs/README.md](docs/README.md), [`.cursor/rules/intuit-landing.mdc`](.cursor/rules/intuit-landing.mdc) — DS nuorodos į v1.4.

- **ChaosVsSystem — „Tvarka“ iliustracija** ([`src/components/sections/ChaosVsSystem.astro`](src/components/sections/ChaosVsSystem.astro)): vienas horizontalus kelias su trimis taškais ant linijos, subtili rodyklė į dešinę; dominuojantis tinklelis ir zigzag pakeisti švelniomis horizontaliomis gidinėmis linijomis — semantika „vienas kelias / ritmas“, ne dekoratyvus grafikas.

- **Hero diagrama (premium SaaS polish)** ([`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro)): matoma antraštė + `diagramCaption`, žingsniai 1–4, kontūrinės ikonos (`<g>` + `<path>`), antrinės eilutės `nodeHint1–4`, HTML legenda (`legendForward` / `legendLoop`), švelnus `feDropShadow` ant akcentinių mazgų, tankesnis išdėstymas; [`src/i18n/lt.ts`](src/i18n/lt.ts) / [`src/i18n/en.ts`](src/i18n/en.ts) — nauji `hero.diagram` laukai ir atnaujintas `svgDesc`; konteineris `role="group"` su `aria-labelledby` / `aria-describedby` (įskaitant legendą); dekoratyvūs SVG su `aria-hidden`. Abu SVG (desktop / mobile) sinchronizuoti.

- **EN adaptacija + agentų gairės:** [`src/i18n/en.ts`](src/i18n/en.ts) suderintas su LT „Verslo komunikacija“ ir atnaujintu hero (`meta`, `hero.eyebrow` / `title` / `subtitle`, `solution.pillars[0].name` — *Business communications*). [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md) v1.4 — skiltis **Agentams** (LT pirminė, EN privaloma adaptacija, ne vertimas); [AGENTS.md](AGENTS.md) ir [`.cursor/rules/intuit-landing.mdc`](.cursor/rules/intuit-landing.mdc) — aiškus reikalavimas atnaujinti EN po LT pozicionavimo pakeitimų.

- **Header, navigacija ir CTA sluoksniai** ([Header.astro](src/components/Header.astro), [src/i18n/lt.ts](src/i18n/lt.ts), [src/i18n/en.ts](src/i18n/en.ts)): kompaktiškesnė lipni juosta — mažesnis logotipas, `text-[11px]` nav, siauresni tarpai, primary CTA su `whitespace-nowrap`; iš desktop ir mobiliojo meniu pašalinta `#contact` nuoroda (į kontaktą veda primary CTA ir [Footer](src/components/Footer.astro)). **Trumpa** etiketė Hero / Header / Offers `Starter`: LT „**Gauti konsultaciją**“, EN „**Book a call**“; **ilgesnė** galiniame bloke ir `mailto:` `subject` (`finalCta.cta`): LT „**Užsisakyti konsultaciją**“, EN „**Book a consultation**“. Žr. [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md) (dabartinė versija faile).

- **Copy: LT/EN editorial rewrite** pagal glosarijų ([src/i18n/lt.ts](src/i18n/lt.ts), [src/i18n/en.ts](src/i18n/en.ts)): gramatika ir tonas (`nedirba`, `solution.intro`, `finalCta.subtitle` „tinkame“); `chaosVsSystem` reaktyvumo linija (LT „Reaktyviai“ ↔ EN „Reactive“); `solution` pillarai („Kasdienė veikla“, „Užklausos ir tęsinys“); `proof` / `trustedBy`; EN (`Metrics leaders can act on`, `Loop back to the narrative`, `Operating at scale`); paketų antriniai CTA („Aptarti įgyvendinimą“ / „Plan the delivery“ ir kt.); `mailBodyTemplate` konsultacijos kontekstui; `SiteMessages` struktūra nepakitę.
- **Landing v2** (evoliucija, funnel nepakitęs): [HeroSystemDiagram.astro](src/components/HeroSystemDiagram.astro) — storesnis flow, kontrolės žiedas, KPI chip, feedback loop su subtilia animacija; [Hero.astro](src/components/sections/Hero.astro) — platesnis diagramos stulpelis, mobile diagrama viršuje.
- [Problem.astro](src/components/sections/Problem.astro): ikona virš signalo, pirmoji kortelė su `danger` hierarchija; i18n `problem.bullets` kaip `{ signal, detail }`.
- [ChaosVsSystem.astro](src/components/sections/ChaosVsSystem.astro): stipresnis chaos / system vizualinis kontrastas (DS tokenai).
- Hero ir CTA kryptis pagal [PRD §4.4](docs/PRD-one-page-PR-AI.md) (outcome-first); [docs/BRAND.md](docs/BRAND.md) — web spalvos ir diagramos (konkretūs CTA tekstai — dabartinėje i18n / glosarijuje).
- [Process.astro](src/components/sections/Process.astro) / [Solution.astro](src/components/sections/Solution.astro): vizualinis ryšys su diagramų kalba (connector, žiedai, outcome spalva).
- FinalCta: įmonė, vadovas, adresas (Maps), tel., el. paštas; footnote „per 24 val.“; `mailto:` iš `PUBLIC_CONTACT_EMAIL` arba `finalCta.contactEmail`; pašalinta `missingEmailNotice` (i18n).
- Footer: `rights` ir `legalLine` (Intuit Communications, MB, įm. / PVM kodai).
- DS v1.1: Hero, Header, Offers, FinalCta — CTA per `ButtonPrimary` / `ButtonSecondary` (Header primary be `uppercase`); Header mobile panel — `shadow-elevated` vietoj `shadow-lg`; ChaosVsSystem — `danger*` badge, `text-2xs`, sekcijos `py` sutapdinta su kitomis sekcijomis; Offers — `card` / `card-featured`; `HeroSystemDiagram` — spalvos per `var(--ds-*)`; `global.css` focus / skip — `theme()` vietoj raw HEX.
- Dokumentacija ir Cursor: [AGENTS.md](AGENTS.md), [.cursor/rules/intuit-landing.mdc](.cursor/rules/intuit-landing.mdc), [docs/README.md](docs/README.md), [README.md](README.md) — atnaujinta nuoroda į DS ir `src/components/ui/`.
- Pozicionavimas: pirmenybė **pasitikėjimui ir kontrolei**, ne „AI-driven“; atnaujinti `src/i18n/lt.ts`, `src/i18n/en.ts`, [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md) (v1.1+).
- Footer: antrinė nuoroda rodo `nav.contact` („Kontaktas“ / „Contact“) ir veda į `#contact`; pašalintas `footer.privacy`.
- Proof: iliustracinės metrikos `value` iš „+“ į „↑“ (LT/EN).
- Offers: sąrašo ženklas „✓“ (`text-accent`) vietoj „/“.
- LT pasiūlymų paketų pavadinimai: „Startas“, „Įgyvendinimas“, „Mastelis“ (EN: Starter / Delivery / Scale).
- `FinalCta.astro`: pašalintas `lang` prop (užtenka `messages`); `LandingPage` atitinkamai atnaujintas.
- Hero: vietoj pakartoto logotipo — diagrama; CTA „pill“ stilius su `accent`; hero fonas `bg-hero-premium`.
- `ChaosVsSystem.astro`: tekstai iš `SiteMessages`, props `messages` (ne `lang`).
- `LandingPage.astro`: `ChaosVsSystem` gauna `messages`.
- Header (anksčiau prieš 2026-05 compact pass): anchor sąrašas pagal `messages.nav`; mobile meniu su `overflow-y`; lipnus fonas `bg-warm/90`; desktop CTA su `accent`.
- Sekcijos: `max-w-content`, pakaitomis `bg-surface` / `bg-paper` / `bg-warm`, kortelės per `.card` / `.card-muted` kur tinkama; procesas — žingsnių ženkleliai `accent`; pasiūlymų vidurinis stulpelis paryškintas `accent`.
- `Offers.astro`: filled CTA vizualiai tik išryškintam (**Delivery** / Įgyvendinimas) paketui; kiti paketai — silpnesnis border CTA (`text-xs` / `md:text-sm`).
- i18n LT/EN: Chaos/System ženkliukai vėlesnėje redakcijoje — LT „Reaktyviai“ / „Ritmu“; EN „Reactive“ / „Rhythm“ (žr. `chaosVsSystem` glosarijuje).
- `Layout`: `body` fonas `bg-warm`.
- LT: pataisymas „Mastelis be chaoso“ (solution pillar).
- README: sitemap aprašas (build hook vietoj išjungtos `@astrojs/sitemap` pastabos kaip vienintelės tiesos); **Production checklist** (`PUBLIC_SITE_URL`, `PUBLIC_CONTACT_EMAIL`, smoke, sitemap, pastaba apie SVG logotipą).
- `todo.md`: pilnas turinys UTF-8 (atkurtos lietuviškos raidės visame faile).
- `.env.example`: išplėsti komentarai apie `PUBLIC_SITE_URL` ir sitemap.

### Fixed

- [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md) v1.2: §4.1 lentelė ir §4.2 funnel sinchronizuoti su kodo sekcija **Chaos vs system** (`ChaosVsSystem.astro`).
- [todo.md](todo.md): atkurtas UTF-8 lietuviškas tekstas (buvo sugadinta koduotė).
- LT `finalCta.subtitle`: pataisytas žodis prieš „žingsniai“ (`kit` → `kiti`).

### Removed

- Footer kūrėjo juosta ir i18n `footer.developerCredit` (LT/EN); nenaudojamas Tailwind tokenas `accentWarm`; `@fontsource/inter/700` importas iš `global.css` (UI naudoja 400/500/600).

## [0.1.0] — 2026-05-03

### Added

- Astro 4 + TypeScript + Tailwind statinis one-page landing (`/`, `/en/`).
- Turinys: `src/i18n/lt.ts`, `src/i18n/en.ts`; sekcijos: Hero, Problema, Sprendimas, Procesas, Įrodymas, Pasiūlymai, Apie, kontaktas.
- UI: monochromas light tema, Inter šriftas, brand logotipai `public/brand/`.
- SEO: meta, Open Graph, `hreflang` LT/EN, `favicon.svg`.
- `vercel.json` ir README su Vercel / env nurodymais.
- `.cursor/rules/intuit-landing.mdc`, `docs/PRD-one-page-PR-AI.md`, `docs/BRAND.md`, `todo.md`.

### Changed

- (pirmasis release; skyrius palikite būsimiems 0.1.x pataisymams)

### Fixed

- (nėra)

### Removed

- `@astrojs/sitemap` (laikinai) — integracija nesuderinama su Astro 4.x hook; žr. README.

---

<!-- Nuorodų į compare/release įrašykite, kai repo bus viešas GitHub/GitLab. -->
