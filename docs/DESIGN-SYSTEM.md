# Design System v1.3 (INTUIT landing)

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

## Šešėliai

- `shadow-soft`, `shadow-softSm` — kortelės, primary CTA.
- `shadow-elevated` — mobile dropdown / pakeltas panelis (Header).

## Mygtukai (CTA)

- **Primary:** `<ButtonPrimary href="…">` — `size="md"` (default), `size="sm"` (Header). Variantas `onDark` — šviesus blokas ant `bg-ink` (FinalCta `mailto`).
- **Secondary:** `<ButtonSecondary href="…">` — outline; ant Offers neakcentiniams paketams galima `class="… hover:border-accent hover:text-accent"`.

Nenaudoti naujų „pill“ `<a>` su ranka rašytomis klasėmis — tik UI komponentai arba PRD pagrindu atnaujinti komponentą.

## Sekcijų šablonas: ikona virš teksto

- **Inline SVG** (be išorinės icon bibliotekos): `viewBox="0 0 24 24"`, `stroke-width="2"`, `stroke="currentColor"`, dažnai `h-6 w-6` konteineryje.
- **Konteineris:** `flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/5 text-accent` (Problem chaos variantas — `danger*` tokenai).
- **Eilė:** ikona → antraštė (`font-semibold`) → antrinis tekstas (`text-muted` kur tinka).
- **Taikoma:** `Problem`, `Solution`, `Process`, `Proof`, `Offers`, `About`; `ChaosVsSystem` — maža ikona šalia etiketės.

## `:root` kintamieji (`--ds-*`)

Naudojami **SVG** fill/stroke (`HeroSystemDiagram.astro`), sinchronizuoti su `theme()` iš Tailwind. Papildomai: `--ds-diagram-electric`, `--ds-diagram-loop`, `--ds-success-soft`, `--ds-accent-teal` (KPI chip ir sinchronas su Tailwind). Subtilus feedback loop judesys: klasė `.hero-diagram-dash-animate` (`global.css`; išjungia `prefers-reduced-motion`). Keičiant brand spalvas — pirmiausia `tailwind.config.mjs`, tada patikrinti `global.css` `:root` bloką.

## Anti-patterns (draudžiama)

- Tailwind default `red-*`, `gray-*` semantic reikšmėms — naudoti DS tokenus.
- Atsitiktinis `shadow-lg` / `text-[11px]` be tokeno.
- Naujos sekcijos be `max-w-content` + `px-4 md:px-6` horizontalios ritmikos.

## Checklist naujai sekcijai

- [ ] Fonas iš leistinų: `surface` / `paper` / `warm` / `hero-premium` / `ink`.
- [ ] `mx-auto max-w-content px-4 md:px-6`; vertikalus padding sutampa su kitomis sekcijomis (`py-16 md:py-20`), nebent PRD „compact“ išimtis.
- [ ] Vienas matomas H2 (arba dokumentuotas `sr-only`).
- [ ] Primary CTA tik per `ButtonPrimary`.
- [ ] Kortelės: `.card` / `.card-muted` / `.card-featured`.
- [ ] Jei kortelė su keliais laukais — apsvarstykite **ikoną virš antraštės** ir trumpą body (žr. skyrių „Sekcijų šablonas“).
