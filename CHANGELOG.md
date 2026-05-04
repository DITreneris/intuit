# Changelog

Visi reikšmingi pakeitimai šiame repozitorijoje dokumentuojami šiame faile.  
Formatas remiasi [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versijos seka [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (kur pritaikoma).

## [Unreleased]

### Changed

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
