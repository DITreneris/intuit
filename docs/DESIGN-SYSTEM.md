# Design System v1.5 (INTUIT landing)

Techninė santrauka agentams ir kūrėjams. Strateginis tonas ir funnel — [PRD-one-page-PR-AI.md](PRD-one-page-PR-AI.md); ženklas / šriftas — [BRAND.md](BRAND.md).

## Šaltiniai kode

| Plotmė | Kelias |
|--------|--------|
| Tailwind tokenai | [tailwind.config.mjs](../tailwind.config.mjs) |
| Globalūs stiliai, `:root` CSS kintamieji diagramoms | [src/styles/global.css](../src/styles/global.css) |
| Kortelės | `.card`, `.card-muted`, `.card-featured` (`global.css`) |
| Sekcijų konteineriai, eyebrow, header kompaktiniai valdikliai | `.section-shell`, `.section-shell--tight`, `.label-eyebrow`, `.header-toolbar-control`, `.section-border-standard` ([`global.css`](../src/styles/global.css)) |
| CTA komponentai | [src/components/ui/ButtonPrimary.astro](../src/components/ui/ButtonPrimary.astro), [ButtonSecondary.astro](../src/components/ui/ButtonSecondary.astro) |
| Inverse ženklas Hero (`logo-pattern-inverse`) | [`BrandPatternPanel.astro`](../src/components/BrandPatternPanel.astro) |
| Viešas copy (LT / EN) | [src/i18n/lt.ts](../src/i18n/lt.ts), [src/i18n/en.ts](../src/i18n/en.ts) (`SiteMessages` — [types.ts](../src/i18n/types.ts)) |

## Spalvos (semantic)

| Token | Paskirtis |
|--------|-----------|
| `ink`, `surface`, `paper`, `warm`, `line` | Fonai, tekstas, rėmeliai |
| `heroInkFrom`, `heroInkTo` | tik Hero inverse panelis ([`BrandPatternPanel`](../src/components/BrandPatternPanel.astro)) — minkštas vertikalus gradientas; nekeičia globalaus `ink` |
| `muted`, `muted2` | antrinis tekstas / etiketės |
| `accent` | primary CTA, akcentai, fokusas |
| `accentTeal`, `successSoft` | sėkmės / „tvarkos“ badge |
| `danger`, `dangerSoft` | rizikos / chaos badge (ne Tailwind default `red-*`) |
| `aiSoft` | AI susiję paviršiai |
| `diagramStrokeAi`, `diagramLineSoft` | diagramų stroke (SVG per `--ds-*`) |
| `diagramElectric`, `diagramLoop` | hero diagramos: kontrolės akcentas, feedback loop |
| `bg-diagram-glow` | švelnus diagramos fonas (kartu su `bg-diagram-radial`) |

## Layout utilities (sekcijų shell, etiketė)

| Klasė | Aprašymas | Kada |
|--------|-----------|------|
| `.section-shell` | `mx-auto max-w-content` + `px-4 py-16 md:px-6 md:py-20` | Standartinės sekcijos; papildomai: `space-y-10`, grid ir kt. |
| `.section-shell--tight` | Tas pats horizontaliai + **`py-10 md:py-12`** | Tik **TrustedBy** (logotipų juosta — kompaktiškas vertikalus ritmas). |
| `.label-eyebrow` | `text-xs font-semibold uppercase tracking-[0.2em] text-muted` | Hero eyebrow; **TrustedBy** inline H2 (`flex` + ženklas) — ta pati klasė layoutui antraštėje. Spalvotos etiketės (ChaosVsSystem `text-danger` / `text-accentTeal`) — ta pati `tracking-[0.2em]`, spalvos vietoje `text-muted`. |
| `.header-toolbar-control` | `rounded-lg`, `border-line`, `min-h-11`, uppercase `tracking-[0.2em]`, hover į `ink` | Tik **[`Header.astro`](../src/components/Header.astro)** kalbos nuoroda ir mobile meniu `summary` — bendras šablonas ([`global.css`](../src/styles/global.css)). |
| `.section-border-standard` *(pasirinktinai naujoms sekcijoms)* | `border-b border-line` | Standartinė sekcijos apačia (žr. „Sekcijų ribos“). Esamos sekcijos gali likti su tiesioginiu Tailwind — refactor neprivalomas. |

### Radius scale (kampų sutartis)

| Rolė | Tailwind | Kur |
|------|-----------|-----|
| Pill CTA | `rounded-full` | [`ButtonPrimary`](../src/components/ui/ButtonPrimary.astro), [`ButtonSecondary`](../src/components/ui/ButtonSecondary.astro) |
| Kortelės, diagramos blokas, TrustedBy slotai | `rounded-xl` | `.card` / `.card-muted`, [`HeroSystemDiagram`](../src/components/HeroSystemDiagram.astro), [`TrustedBy`](../src/components/sections/TrustedBy.astro) |
| Hero inverse plakatas | `rounded-2xl` | [`BrandPatternPanel`](../src/components/BrandPatternPanel.astro) |
| Header kompaktiniai valdikliai | `rounded-lg` | `.header-toolbar-control` |
| ChaosVsSystem mažos ikonų dėžutės | `rounded-lg` | [`ChaosVsSystem`](../src/components/sections/ChaosVsSystem.astro) |

### Sekcijų ribos (separatoriai)

- **Standartinė turinio sekcija:** apatinė riba **`border-b border-line`** (dauguma [`sections/*.astro`](../src/components/sections/)).
- **Sticky chrome (header):** **`border-b border-line/80`** — šiek tiek silpnesnis nei pilnas `line`, kad lipni juosta atrodytų lengvesnė už „pilną“ sekciją.

**ChaosVsSystem** sekcija: `scroll-mt-28` (sticky header offset), kaip kitose ankerinėse sekcijose.

### Ikonus slotų dydžiai (inline SVG)

| Kontekstas | Konteineris | SVG (`viewBox 0 0 24 24`, stroke 2) |
|------------|-------------|-------------------------------------|
| Problem kortelės | `h-12 w-12` + `rounded-xl` | `h-6 w-6` |
| ChaosVsSystem antraštės žyma | `h-8 w-8` + `rounded-lg` | `h-4 w-4` |

## Tipografija

- Antraštės: Tailwind `text-3xl md:text-4xl` (H2), `text-4xl md:text-5xl` (H1 Hero).
- **Hero** supporting copy ([`Hero.astro`](../src/components/sections/Hero.astro)): po H1 — `messages.hero.subtitleLead` (**`font-medium text-ink`**), punktai **`subtitleBullets`** (`<ul class="list-disc …">`, **`text-muted`**), uždarymas **`subtitleClosing`** (**`font-semibold text-ink`**); konteineris `max-w-measure space-y-3 text-lg` (kortelės fono šiam blokui nenaudojame, nebent atskirai apsispręsite).
- Body sekcijose: dažnai `text-base md:text-lg` ilgesniam paaiškinimui; kortelėse — `text-sm` su `leading-relaxed`.
- Micro badge: `text-2xs` (11px) — žr. `theme.extend.fontSize` confige.
- **Header** desktop `nav` ([`Header.astro`](../src/components/Header.astro)): **`text-2xs`**, ne savavalis `text-[11px]`.
- **Proof metrikos:** skaičiaus reikšmė (`m.value`) — **`tabular-nums`**, kad skaitmenys nesijudintų keičiant turinį.
- **Valdymo schema ([`HeroSystemDiagram.astro`](../src/components/HeroSystemDiagram.astro)) — naudojama Hero ir Proof:** virš SVG — HTML blokas (**strip** `text-sm` / `md:text-base`, **caption** `text-sm`, **kilpos etiketė** `text-2xs`). SVG viduje `<text>` pakeltas iki aiškesnės mikro skales (desktop `font-size` ~11–12); matomos HTML legendos nėra. `size="hero" | "proof"` parenka plotį ir „svorį“ embed’ui ([`Hero.astro`](../src/components/sections/Hero.astro), [`Proof.astro`](../src/components/sections/Proof.astro)).
- **Kontaktų kortelė** ([`FinalCta.astro`](../src/components/sections/FinalCta.astro)): portreto nuotrauka — **`rounded-xl`**, `overflow-hidden` dėžutė; jei 1:1 šaltinyje subjektas ne centruotas, naudojamas subtilus **`scale` + `origin-[x%_y%]`** (ne keisti be vizualinės patikros). Ilgalaikei — perexportuoti `public/brand/contact-nerijus.{webp,jpg}` su centru ant veido.

## Prekės ženklas (raster + SVG)

Ant **šviesaus** fono — **Header** ir **TrustedBy** inline ženklui: [`IntuitWordmark.astro`](../src/components/IntuitWordmark.astro) su WebP + JPG (`logo-wordmark-light.{webp,jpg}`), matmenys iš [`logo-wordmark-meta.json`](../src/brand/logo-wordmark-meta.json). Kanoniniai `logo-light.jpg` / `logo-dark.jpg` lieka šaltiniu `npm run gen:wordmark` ([BRAND.md](BRAND.md)). [`logo-light.svg`](../public/brand/logo-light.svg) — tik monograma (stem sutampa su [`public/favicon.svg`](../public/favicon.svg)). Ant **`bg-ink`** — tas pats komponentas, `variant="dark"` (`logo-wordmark-dark.*`). Pilnas inverse ženklas + raštas — [`logo-pattern-inverse.jpg`](../public/brand/logo-pattern-inverse.jpg); Hero dešinėje — [`BrandPatternPanel.astro`](../src/components/BrandPatternPanel.astro).

| Kontekstas | Failas | Aukštis (`imgClass`) | Komponentas |
|------------|--------|----------------------|-------------|
| Sticky header (nav) | `logo-wordmark-light.*` | `h-11 md:h-12` | [`Header.astro`](../src/components/Header.astro) |
| TrustedBy H2 inline su tekstu | `logo-wordmark-light.*` | `h-10 md:h-11` | [`TrustedBy.astro`](../src/components/sections/TrustedBy.astro) |
| Kontaktų kortelė ant `bg-ink` | `logo-wordmark-dark.*` | `h-11 md:h-12` | [`FinalCta.astro`](../src/components/sections/FinalCta.astro) |
| Hero dešinė (inverse plakatas) | `logo-pattern-inverse.jpg` | `w-full` konteineryje `max-w-[min(100%,28rem)]`, šaltinis 1000×978 | [`BrandPatternPanel.astro`](../src/components/BrandPatternPanel.astro) (įterpta [`Hero.astro`](../src/components/sections/Hero.astro)) |

**Hierarchija:** nav ir Final Cta ženklas `h-11 md:h-12`; TrustedBy vienu žingsniu žemiau (`h-10 md:h-11`). Hero inverse plakatas — atskiras naudojimas dešinėje, ne maišyti su header.

## Šešėliai

- `shadow-soft`, `shadow-softSm` — kortelės, primary CTA.
- `shadow-elevated` — mobile dropdown / pakeltas panelis (Header).

## Mygtukai (CTA)

- **Primary:** `<ButtonPrimary href="…">` — `size="md"` (default), `size="sm"` (Header). Variantas `onDark` — šviesus blokas ant `bg-ink` (FinalCta `mailto`).
- **Secondary:** `<ButtonSecondary href="…">` — outline; ant Offers neakcentiniams paketams galima `class="… hover:border-accent hover:text-accent"`.

Nenaudoti naujų „pill“ `<a>` su ranka rašytomis klasėmis — tik UI komponentai arba PRD pagrindu atnaujinti komponentą.

## Sekcijų šablonas: kortelės akcentas (ikona neprivaloma)

Venkite **kiekvienoje** sekcijoje kartoti tą patį „h-12 ikona virš antraštės“ šabloną — vizualiai greitai **nusibosta**. Kur ikona **tikrai atskiria** blokus (pvz. skirtingi signalai), naudokite ją; kitur tinka **numeruota eiga**, maži taškai / varnelės sąraše, gryna antraštė ar **didelis skaičius** (metrikos).

- **Kai naudojate ikoną:** inline SVG (be išorinės bibliotekos): `viewBox="0 0 24 24"`, `stroke-width="2"`, `stroke="currentColor"`, dažnai `h-6 w-6` konteineryje `flex h-12 w-12 … rounded-xl border border-accent/15 bg-accent/5 text-accent` (Problem „chaos“ kortelei — `danger*` tokenai).
- **Alternatyvos:** žingsnių numeriai (`Process`), sąrašo taškai ar ✓ (`Solution`, `Offers`), tik tipografija (`About`), dominuojantis skaičius (`Proof`).
- **Dabartinė praktika (landing):** didelės kortelių ikonos — **[`Problem`](../src/components/sections/Problem.astro)**; diagramos (ne kortelių dekoras) — **`HeroSystemDiagram`** (Proof sekcijoje po metrikų), **[`ChaosVsSystem`](../src/components/sections/ChaosVsSystem.astro)**. **`Solution`**, **`Process`**, **`Offers`**, **`About`** — be viršutinės ikonos kortelėje.

## Hero diagrama (product vizualinė kalba)

- **Forward (1→4):** kortelės — SVG, jungtys — **HTML overlay** (`.hsd-connectors`) su CSS kintamaisiais (`--cx-start/--cx-end/--cy` desktop, `--cy-start/--cy-end/--cx` mobile). Linija — **1.5 px** per `color-mix(in srgb, var(--ds-accent) 70%, transparent)`; galvutė — plonas **chevron** iš `border-top + border-right` po **2 px** (color-mix 80 %), be filled triangle. Per komponento prop `connectorVariant: 'chevron' | 'line'` (default `chevron`) galima išjungti chevron — tada kryptis aiški per kortelių numerius **1–4**. Tarpas nuo kortelės **≥ 6 px** kiekvienoje pusėje (desktop 28 vnt. tarpai viewBox, mobile 24 vnt.) — connectoriai **niekada** neliečia kortelės bordurai. Linija lygiuojama **per ikonų centrus** (desktop `--cy: 21%` viewBox 612×220), ne per geometrinį kortelės centrą. **Be** punktyrinės animacijos.
- **Numerių badge'ai (hierarchija):** pasyvūs žingsniai (1, 3, 4) — `outline` (`fill=none`, `stroke=accent` su `stroke-opacity 0.35`, numeris `fill=muted` weight 600); aktyvus žingsnis (2) — `solid` (`fill=accent` opacity 1, numeris `fill=#ffffff` weight 700). Active dot 4×4 px virš anchor kortelės top edge'o. `rx=6` badge'ams, `rx=12` kortelėms, `rx=16` anchor tint — 3 lygmenų radius scale.
- **Iteracijos arc (desktop only):** statinis quadratic curve nuo kortelės 4 (cx=544) į kortelę 2 (cx=237) per `Q 390 175`, dashed `3 4`, `color-mix(in srgb, var(--ds-accent) 35%, transparent)`. Dekoratyvus ↺ ženklas SVG viduje. Mobile lieka tik tekstinė loop label virš diagramos (žr. backlog [todo.md](../todo.md)).
- **Hierarchija:** pagal skyrių „Tipografija“ — matomas HTML blokas su trimis aiškiais šrifto lygiais; SVG viduje tekstas lieka mikro skale.
- **Feedback (rodikliai → žinutė):** **ne** atskiras SVG kelias — iteracija aiškinama **`hero.diagram.diagramLoopLabel`** + caption + `svgDesc`; dekoratyvus ↺ HTML.
- **Mazgų kortelės:** antriniai žingsniai — `surface` / `line`; **žingsnis 2 („Žinutė“)** — plonesnis `accent` kontūras (~1.15), švelnus **SVG drop-shadow** filtras, **tint** už kortelės (`accent` fill ~0.15 opacity); ikonos — 24×24 loginė erdvė, `stroke-width` **1.5**, ~**1.15** centrinis **scale** be mini-kortelės rėmo.
- **Matoma legenda:** nenaudoti — aiškinimas caption + `hero.diagram.svgDesc` (ekrano skaityklėms).
- **Konteineris:** `bg-diagram-radial` visada; `bg-diagram-glow` tik **md+**; mobile radial šiek tiek prislopinta (`opacity-80`); išorėje `overflow-visible` ir horizontalus padding; išorinis blokas — vienas aiškus kontūras (`border`, be `shadow-soft`/`ring` dubliavimo).

Žr. implementaciją: [`HeroSystemDiagram.astro`](../src/components/HeroSystemDiagram.astro).

## `:root` kintamieji (`--ds-*`)

Naudojami **SVG** fill/stroke (`HeroSystemDiagram.astro`), sinchronizuoti su `theme()` iš Tailwind. Papildomai: `--ds-diagram-electric`, `--ds-diagram-loop`, `--ds-success-soft`, `--ds-accent-teal` (KPI chip ir sinchronas su Tailwind).

**Premium vizualinės darnos sutapimas:** [`ChaosVsSystem`](../src/components/sections/ChaosVsSystem.astro) naudoja **`--ds-diagram-stroke-lg`** (storesnė bazinė linija / ritmas) ir **`--ds-diagram-stroke-grid`** (subtilūs gidai), kad hero ir chaos vs system blokai jaustų tą pačią linijos kalbą. Mazgų spinduliai SVG `<circle>` palikti **skaitiniais `r`** (pvz. chaos pusėje `r="5.5"`, system pusėje `r="7"`) — geresnis naršyklių suderinamumas nei CSS kintamieji tiesiai ant `r`. Komentaras ir reikšmės — `:root` bloke [`global.css`](../src/styles/global.css).

Keičiant brand spalvas — pirmiausia `tailwind.config.mjs`, tada patikrinti `global.css` `:root` bloką.

## Anti-patterns (draudžiama)

- Tailwind default `red-*`, `gray-*` semantic reikšmėms — naudoti DS tokenus.
- Atsitiktinis `shadow-lg` ar **savivalis „micro“ šriftas be `text-2xs`** (ne per DS tokeną).
- Naujos sekcijos be `max-w-content` + `px-4 md:px-6` horizontalios ritmikos (preferuoti **`.section-shell`**).
- **`bg-white/xx`** ant Chaos/System ikonų ir badge — naudoti **`surface` / `paper` + opacity** (žr. [`ChaosVsSystem.astro`](../src/components/sections/ChaosVsSystem.astro)).

## Checklist naujai sekcijai

- [ ] Fonas iš leistinų: `surface` / `paper` / `warm` / `hero-premium` / `ink`.
- [ ] Konteineris: preferuoti **`.section-shell`** (arba ekvivalentas `mx-auto max-w-content px-4 md:px-6` + `py-16 md:py-20`); vertikalus padding sutampa su kitomis sekcijomis, nebent PRD „compact“ išimtis — tada **`.section-shell--tight`** (tik įrodytas atvejis, pvz. TrustedBy tipo juosta).
- [ ] Vienas matomas H2 (arba dokumentuotas `sr-only`).
- [ ] Primary CTA tik per `ButtonPrimary`.
- [ ] Kortelės: `.card` / `.card-muted` / `.card-featured`.
- [ ] Jei kortelė su keliais laukais — apsvarstykite akcentą (ikoną, numerį ar tipografiją) ir trumpą body (žr. skyrių „Sekcijų šablonas“).

## Logotipų juosta (TrustedBy)

- **Vertikalus ritmas:** wrapper klasė **`.section-shell--tight`** (ne standartinis `.section-shell`), kad juosta liktų vizualiai „strip“.
- **H2 antraštė:** `messages.trustedBy.titleBefore` + inline **INTUIT** ženklas per [`IntuitWordmark`](../src/components/IntuitWordmark.astro) (WebP + JPG); tas pats `alt` per `messages.hero.logoAlt`; aukštis pagal „Prekės ženklas“ lentelę TrustedBy — vienu `h-*` žingsniu mažesnis už nav; lanksčias išdėstymas `flex` + `flex-wrap`.
- Sekcija: [`TrustedBy.astro`](../src/components/sections/TrustedBy.astro), **`id="clients"`** (ankerinė nuoroda `#clients`), sąrašas iš **`messages.trustedBy.logos`** ([`lt.ts`](../src/i18n/lt.ts) / [`en.ts`](../src/i18n/en.ts)) — „slotų“ šablonas: `src`, `alt`, vienas kartojamas markup kiekvienam įrašui.
- Horizontalus slenkstis (`overflow-x-auto`, `snap-x`), kraštų gradientai `from-paper`, fokusuojamai juostai **`focus-visible`** kontūras (prieinamumas).
- Klientų slotai **be kortelės rėmelio** (be `border` / `bg-surface` ant kiekvieno logotipo); platesnis `min-w` ir vidinis plotis, kad horizontalūs ženklai būtų didesni; **`object-contain`**; failai po [`public/clients/`](../public/clients/) (kelias i18n be leading `/`).
- Vizualinės ir brand gairės dėl pilnos spalvos vs mono — [BRAND.md](BRAND.md).

## Raster iliustracijos (Proof)

- **Metrikos:** šviesios kortelės (`bg-paper`) po H2.
- **Valdymo schema:** po metrikų — [`HeroSystemDiagram.astro`](../src/components/HeroSystemDiagram.astro) (ta pati komunikacijos valdymo diagrama; tekstai iš `messages.hero.diagram`).
- Inverse ženklas (`logo-pattern-inverse`) perkeltas į Hero — [`BrandPatternPanel.astro`](../src/components/BrandPatternPanel.astro); matomas `<img>` `alt` iš **`messages.proof.brandPatternAlt`**.
- **Papildomas rasteris** (jei vėliau grįš iliustracija ar metodikos vaizdas šalia diagramos): neutralus fonas (`paper` / `surface`), **`rounded-xl`**, vizualas neturi konkuruoti su diagramų stroke hierarchija; klientų logotipų spalvų politika — [BRAND.md](BRAND.md).
