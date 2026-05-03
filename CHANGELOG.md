# Changelog

Visi reikšmingi pakeitimai šiame repozitorijoje dokumentuojami šiame faile.  
Formatas remiasi [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versijos seka [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (kur pritaikoma).

## [Unreleased]

### Removed

- Footer kūrėjo juosta ir i18n `footer.developerCredit` (LT/EN); nenaudojamas Tailwind tokenas `accentWarm`; `@fontsource/inter/700` importas iš `global.css` (UI naudoja 400/500/600).

### Added

- Design System v1.1: [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md); Tailwind tokenai `danger` / `dangerSoft`, `diagramStrokeAi`, `diagramLineSoft`, `fontSize` `2xs`, `boxShadow` `elevated`, `backgroundImage` `diagram-radial`; `:root` `--ds-*` kintamieji SVG (`global.css`).
- UI primitives: [src/components/ui/ButtonPrimary.astro](src/components/ui/ButtonPrimary.astro) (`size` md/sm, `variant` default/onDark), [ButtonSecondary.astro](src/components/ui/ButtonSecondary.astro); `@layer components` klasė `.card-featured` (Offers highlighted tier).
- i18n: `nav.langSwitchToEn` / `nav.langSwitchToLt`; Header kalbos nuoroda su `aria-label` ekrano skaityklėms.
- i18n: `finalCta.mailBodyTemplate` (LT/EN); kontaktinis CTA — `mailto:` su `subject` ir iš anksto užpildytu `body` (`URLSearchParams`, `FinalCta.astro`).
- Tailwind dizaino tokenai: `warm`, `surface`, `accent`, `accentTeal`, `aiSoft`, `successSoft`, `muted2`, šešėliai `soft` / `softSm`, `max-w-content` (1180px), `bg-hero-premium`.
- `@layer components` klasės `.card` ir `.card-muted` (`src/styles/global.css`).
- `src/components/HeroSystemDiagram.astro` — lengva komunikacijos sistemos SVG schema (desktop + mobile).
- Build metu generuojamas `dist/sitemap.xml` (`astro.config.mjs` — integracija `intuit-sitemap`).
- `Layout.astro`: `<link rel="sitemap" …>` į `/sitemap.xml`.
- i18n: `hero.diagram` ir `chaosVsSystem` (`lt.ts` / `en.ts`).
- Prieinamumas: „Praleisti į pagrindinį turinį“ / „Skip to main content“ (`messages.a11y.skipToMain`), nuoroda į `#main` (`Layout.astro`); `<main id="main" tabindex="-1">` (`LandingPage.astro`).
- `global.css`: matomas `:focus-visible` kontūras nuorodams / `button` / `summary`; `.skip-to-main` paslėptas iki fokuso.

### Changed

- FinalCta: įmonė, vadovas, adresas (Maps), tel., el. paštas; footnote „per 24 val.“; `mailto:` iš `PUBLIC_CONTACT_EMAIL` arba `finalCta.contactEmail`; pašalinta `missingEmailNotice` (i18n).
- Footer: `rights` ir `legalLine` (Intuit Communications, MB, įm. / PVM kodai).
- DS v1.1: Hero, Header, Offers, FinalCta — CTA per `ButtonPrimary` / `ButtonSecondary` (Header primary be `uppercase`); Header mobile panel — `shadow-elevated` vietoj `shadow-lg`; ChaosVsSystem — `danger*` badge, `text-2xs`, sekcijos `py` sutapdinta su kitomis sekcijomis; Offers — `card` / `card-featured`; `HeroSystemDiagram` — spalvos per `var(--ds-*)`; `global.css` focus / skip — `theme()` vietoj raw HEX.
- Dokumentacija ir Cursor: [AGENTS.md](AGENTS.md), [.cursor/rules/intuit-landing.mdc](.cursor/rules/intuit-landing.mdc), [docs/README.md](docs/README.md), [README.md](README.md) — atnaujinta nuoroda į DS v1.1 ir `src/components/ui/`.
- Pozicionavimas: pirmenybė **pasitikėjimui ir kontrolei**, ne „AI-driven“; atnaujinti `src/i18n/lt.ts`, `src/i18n/en.ts`, [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md) (v1.1).
- Footer: antrinė nuoroda rodo `nav.contact` („Kontaktas“ / „Contact“) ir veda į `#contact`; pašalintas `footer.privacy`.
- Proof: iliustracinės metrikos `value` iš „+“ į „↑“ (LT/EN).
- Offers: sąrašo ženklas „✓“ (`text-accent`) vietoj „/“.
- LT pasiūlymų paketų pavadinimai: „Startas“, „Sistema“, „Mastelis“ (EN lieka Starter / System / Scale).
- `FinalCta.astro`: pašalintas `lang` prop (užtenka `messages`); `LandingPage` atitinkamai atnaujintas.
- Hero: vietoj pakartoto logotipo — diagrama; CTA „pill“ stilius su `accent`; hero fonas `bg-hero-premium`.
- `ChaosVsSystem.astro`: tekstai iš `SiteMessages`, props `messages` (ne `lang`).
- `LandingPage.astro`: `ChaosVsSystem` gauna `messages`.
- Header: anchor navigacija sutapdinta su `messages.nav` (įskaitant įrodymą, pasiūlymą, apie); kompaktesnis desktop meniu (`text-xs` / `lg:text-sm`); mobile meniu platesnis, su `overflow-y` ilgesniam sąrašui; lipnus fonas `bg-warm/90`; desktop CTA su `accent`.
- Sekcijos: `max-w-content`, pakaitomis `bg-surface` / `bg-paper` / `bg-warm`, kortelės per `.card` / `.card-muted` kur tinkama; procesas — žingsnių ženkleliai `accent`; pasiūlymų vidurinis stulpelis paryškintas `accent`.
- `Offers.astro`: filled CTA vizualiai tik išryškintam (System) paketui; kiti paketai — silpnesnis border CTA (`text-xs` / `md:text-sm`).
- i18n LT: Chaos/System ženkliukai lietuviškai („Atsitiktinai“ / „Ritmu“); hero antrinis CTA — „Pamatyti, kaip veikia“. EN: ženkliukai „Reactive“ / „Cadence“; antrinis CTA — „See how it works“.
- `Layout`: `body` fonas `bg-warm`.
- LT: pataisymas „Mastelis be chaoso“ (solution pillar).
- README: sitemap aprašas (build hook vietoj išjungtos `@astrojs/sitemap` pastabos kaip vienintelės tiesos); **Production checklist** (`PUBLIC_SITE_URL`, `PUBLIC_CONTACT_EMAIL`, smoke, sitemap, pastaba apie SVG logotipą).
- `todo.md`: pilnas turinys UTF-8 (atkurtos lietuviškos raidės visame faile).
- `.env.example`: išplėsti komentarai apie `PUBLIC_SITE_URL` ir sitemap.

### Fixed

- LT `finalCta.subtitle`: pataisytas žodis prieš „žingsniai“ (`kit` → `kiti`).

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
