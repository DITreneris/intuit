# Design System v1.1 (INTUIT landing)

Techninė santrauka agentams ir kūrėjams. Strateginis tonas ir funnel — [PRD-one-page-PR-AI.md](PRD-one-page-PR-AI.md); ženklas / šriftas — [BRAND.md](BRAND.md).

## Šaltiniai kode

| Plotmė | Kelias |
|--------|--------|
| Tailwind tokenai | [tailwind.config.mjs](../tailwind.config.mjs) |
| Globalūs stiliai, `:root` CSS kintamieji diagramoms | [src/styles/global.css](../src/styles/global.css) |
| Kortelės | `.card`, `.card-muted`, `.card-featured` (`global.css`) |
| CTA komponentai | [src/components/ui/ButtonPrimary.astro](../src/components/ui/ButtonPrimary.astro), [ButtonSecondary.astro](../src/components/ui/ButtonSecondary.astro) |

## Spalvos (semantic)

| Token | Paskirtis |
|--------|-----------|
| `ink`, `surface`, `paper`, `warm`, `line` | Fonai, tekstas, rėmeliai |
| `muted`, `muted2` | antrinis tekstas / etiketės |
| `accent` | primary CTA, akcentai, fokusas |
| `accentTeal`, `successSoft` | sėkmės / „system“ badge |
| `danger`, `dangerSoft` | rizikos / chaos badge (ne Tailwind default `red-*`) |
| `aiSoft` | AI susiję paviršiai |
| `diagramStrokeAi`, `diagramLineSoft` | diagramų stroke (SVG per `--ds-*`) |

## Tipografija

- Antraštės: Tailwind `text-3xl md:text-4xl` (H2), `text-4xl md:text-5xl` (H1 Hero).
- Micro badge: `text-2xs` (11px) — žr. `theme.extend.fontSize` confige.

## Šešėliai

- `shadow-soft`, `shadow-softSm` — kortelės, primary CTA.
- `shadow-elevated` — mobile dropdown / pakeltas panelis (Header).

## Mygtukai (CTA)

- **Primary:** `<ButtonPrimary href="…">` — `size="md"` (default), `size="sm"` (Header). Variantas `onDark` — šviesus blokas ant `bg-ink` (FinalCta `mailto`).
- **Secondary:** `<ButtonSecondary href="…">` — outline; ant Offers neakcentiniams paketams galima `class="… hover:border-accent hover:text-accent"`.

Nenaudoti naujų „pill“ `<a>` su ranka rašytomis klasėmis — tik UI komponentai arba PRD pagrindu atnaujinti komponentą.

## `:root` kintamieji (`--ds-*`)

Naudojami **SVG** fill/stroke (`HeroSystemDiagram.astro`), sinchronizuoti su `theme()` iš Tailwind. Keičiant brand spalvas — pirmiausia `tailwind.config.mjs`, tada patikrinti `global.css` `:root` bloką.

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
