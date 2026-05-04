# Design System v1.5 (INTUIT landing)

Techninė santrauka agentams ir kūrėjams. Strateginis tonas ir funnel — [PRD-one-page-PR-AI.md](PRD-one-page-PR-AI.md); ženklas / šriftas — [BRAND.md](BRAND.md).

## Šaltiniai kode

| Plotmė | Kelias |
|--------|--------|
| Tailwind tokenai | [tailwind.config.mjs](../tailwind.config.mjs) |
| Globalūs stiliai, `:root` CSS kintamieji diagramoms | [src/styles/global.css](../src/styles/global.css) |
| Kortelės | `.card`, `.card-muted`, `.card-featured` (`global.css`) |
| CTA komponentai | [src/components/ui/ButtonPrimary.astro](../src/components/ui/ButtonPrimary.astro), [ButtonSecondary.astro](../src/components/ui/ButtonSecondary.astro) |
| Viešas copy (LT / EN) | [src/i18n/lt.ts](../src/i18n/lt.ts), [src/i18n/en.ts](../src/i18n/en.ts) (`SiteMessages` — [types.ts](../src/i18n/types.ts)) |

## Spalvos (semantic)

| Token | Paskirtis |
|--------|-----------|
| `ink`, `surface`, `paper`, `warm`, `line` | Fonai, tekstas, rėmeliai |
| `muted`, `muted2` | antrinis tekstas / etiketės |
| `accent` | primary CTA, akcentai, fokusas |
| `accentTeal`, `successSoft` | sėkmės / „tvarkos“ badge |
| `danger`, `dangerSoft` | rizikos / chaos badge (ne Tailwind default `red-*`) |
| `aiSoft` | AI susiję paviršiai |
| `diagramStrokeAi`, `diagramLineSoft` | diagramų stroke (SVG per `--ds-*`) |
| `diagramElectric`, `diagramLoop` | hero diagramos: kontrolės akcentas, feedback loop |
| `bg-diagram-glow` | švelnus diagramos fonas (kartu su `bg-diagram-radial`) |

## Tipografija

- Antraštės: Tailwind `text-3xl md:text-4xl` (H2), `text-4xl md:text-5xl` (H1 Hero).
- Body sekcijose: dažnai `text-base md:text-lg` ilgesniam paaiškinimui; kortelėse — `text-sm` su `leading-relaxed`.
- Micro badge: `text-2xs` (11px) — žr. `theme.extend.fontSize` confige.
- **Header** desktop `nav` ([`Header.astro`](../src/components/Header.astro)): **`text-2xs`**, ne savavalis `text-[11px]`.
- **Hero diagrama ([`HeroSystemDiagram.astro`](../src/components/HeroSystemDiagram.astro)):** antraštė, caption ir HTML legenda — **`text-2xs`**; SVG viduje `<text>` etiketes laikyti **mikro skale** (`font-size` 10–11, atitinka `text-2xs`), **ne** įvedinėti vidutinio body dydžio šrifto.
- **Kontaktų kortelė** ([`FinalCta.astro`](../src/components/sections/FinalCta.astro)): portreto nuotrauka — **`rounded-xl`** (ta pati radius kalba kaip `.card` ir diagramų konteineriai).

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
- **Dabartinė praktika (landing):** didelės kortelių ikonos — **[`Problem`](../src/components/sections/Problem.astro)**; diagramos (ne kortelių dekoras) — **[`HeroSystemDiagram`](../src/components/HeroSystemDiagram.astro)**, **[`ChaosVsSystem`](../src/components/sections/ChaosVsSystem.astro)**. **`Solution`**, **`Process`**, **`Proof`**, **`Offers`**, **`About`** — be viršutinės ikonos kortelėje.

## Hero diagrama (product vizualinė kalba)

- **Forward (1→4):** `accent`, storesnis stroke (~2.5) — pagrindinis vykdymo srautas.
- **Feedback (rodikliai → žinutė):** `diagramElectric`, plonesnis stroke (~2.25), žemesnė matoma masė (`opacity` ~0.88), **ortogonalus** kelias (H/V, `stroke-linejoin: round`), ne Bezier „ovalas“.
- **Konteineris:** `bg-diagram-radial` visada; `bg-diagram-glow` tik **md+**; mobile radial šiek tiek prislopinta (`opacity-80`), mažiau konkurencijos su kortelėmis.
- **Animacija:** punktyrinės kilpos judesys tik **desktop (md+)** per `.hero-diagram-dash-animate` (~20s); mobile kilpa statiška. `prefers-reduced-motion` toliau sutrumpina animacijas globaliai.

Žr. implementaciją: [`HeroSystemDiagram.astro`](../src/components/HeroSystemDiagram.astro), animacija — [`global.css`](../src/styles/global.css) `@keyframes hero-diagram-dash`.

## `:root` kintamieji (`--ds-*`)

Naudojami **SVG** fill/stroke (`HeroSystemDiagram.astro`), sinchronizuoti su `theme()` iš Tailwind. Papildomai: `--ds-diagram-electric`, `--ds-diagram-loop`, `--ds-success-soft`, `--ds-accent-teal` (KPI chip ir sinchronas su Tailwind).

**Premium vizualinės darnos sutapimas:** [`ChaosVsSystem`](../src/components/sections/ChaosVsSystem.astro) naudoja **`--ds-diagram-stroke-lg`** (storesnė bazinė linija / ritmas) ir **`--ds-diagram-stroke-grid`** (subtilūs gidai), kad hero ir chaos vs system blokai jaustų tą pačią linijos kalbą. Mazgų spinduliai SVG `<circle>` palikti **skaitiniais `r`** (pvz. chaos pusėje `r="5.5"`, system pusėje `r="7"`) — geresnis naršyklių suderinamumas nei CSS kintamieji tiesiai ant `r`. Komentaras ir reikšmės — `:root` bloke [`global.css`](../src/styles/global.css).

Keičiant brand spalvas — pirmiausia `tailwind.config.mjs`, tada patikrinti `global.css` `:root` bloką.

## Anti-patterns (draudžiama)

- Tailwind default `red-*`, `gray-*` semantic reikšmėms — naudoti DS tokenus.
- Atsitiktinis `shadow-lg` ar **savivalis „micro“ šriftas be `text-2xs`** (ne per DS tokeną).
- Naujos sekcijos be `max-w-content` + `px-4 md:px-6` horizontalios ritmikos.

## Checklist naujai sekcijai

- [ ] Fonas iš leistinų: `surface` / `paper` / `warm` / `hero-premium` / `ink`.
- [ ] `mx-auto max-w-content px-4 md:px-6`; vertikalus padding sutampa su kitomis sekcijomis (`py-16 md:py-20`), nebent PRD „compact“ išimtis.
- [ ] Vienas matomas H2 (arba dokumentuotas `sr-only`).
- [ ] Primary CTA tik per `ButtonPrimary`.
- [ ] Kortelės: `.card` / `.card-muted` / `.card-featured`.
- [ ] Jei kortelė su keliais laukais — apsvarstykite akcentą (ikoną, numerį ar tipografiją) ir trumpą body (žr. skyrių „Sekcijų šablonas“).

## Logotipų juosta (TrustedBy)

- **H2 antraštė:** `messages.trustedBy.titleBefore` + inline **INTUIT** ženklas (`public/brand/logo-light.jpg`, tie patys matmenys / `alt` kaip [Header](../src/components/Header.astro) per `messages.hero.logoAlt`); lanksčias išdėstymas `flex` + `flex-wrap`, kad tekstas ir logotipas centruotųsi ir mažuose plotiuose susilankstytų.
- Sekcija: [`TrustedBy.astro`](../src/components/sections/TrustedBy.astro), **`id="clients"`** (ankerinė nuoroda `#clients`), sąrašas iš **`messages.trustedBy.logos`** ([`lt.ts`](../src/i18n/lt.ts) / [`en.ts`](../src/i18n/en.ts)) — „slotų“ šablonas: `src`, `alt`, vienas kartojamas markup kiekvienam įrašui.
- Horizontalus slenkstis (`overflow-x-auto`, `snap-x`), kraštų gradientai `from-paper`, fokusuojamai juostai **`focus-visible`** kontūras (prieinamumas).
- Logotipo konteineryje fiksuoti **`max-h` / `max-w` + `object-contain`**; failai viešinti po [`public/clients/`](../public/clients/) (kelias i18n be leading `/`).
- Vizualinės ir brand gairės dėl pilnos spalvos vs mono — [BRAND.md](BRAND.md).

## Raster iliustracijos (Proof)

- Metodikos blokas: [`Proof.astro`](../src/components/sections/Proof.astro) — `<picture>` su **`illustration_method.webp`** (`type="image/webp"`) ir PNG atsarginiu [`public/illustration_method.png`](../public/illustration_method.png); `width` / `height` atitinka šaltinio matmenis (mažinti LCP ir CLS).
- Bloką juosia dashed rėmelis ir `bg-aiSoft/40`, kad iliustracija būtų aiškiai atskirta nuo metrikų kortelių aukščiau.
