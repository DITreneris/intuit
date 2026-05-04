# 67_Intuit — darbo planas (todo)

**Atnaujinta:** 2026-05-04  
**Stack:** Astro 4 + Tailwind 3 + statinis build  
**PRD:** [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md) (v1.5 faile)  
**DS:** [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) (v1.5)  
**Brand šaltinis:** `INTUIT LOGO/` → publikuojami failai `public/brand/`

---

## Brand (`INTUIT LOGO`)

| Kelias | Paskirtis |
|--------|-----------|
| `INTUIT LOGO/ai/INTUIT_LOGO.ai` | šaltinis vektorius (eksportas → SVG webui). |
| `INTUIT LOGO/pdf/INTUIT_LOGO.pdf` | Peržiūra / spauda. |
| `INTUIT LOGO/jpg/*.jpg` | Raster; kopijos → `public/brand/` (`logo-light`, `logo-dark`, `logo-pattern-*`). |
| `INTUIT LOGO/_font/Larsseit/*.otf` | Larsseit šeima → web tik su licencija; dabar body naudoja **Inter**. |

---

## Repo būsena (santrauka)

| Sritis | Būsena |
|--------|--------|
| Kodas | Astro 4, LT `/`, EN `/en/`, `src/i18n/`, sekcijos `src/components/sections/`, Hero diagrama (SVG), Chaos vs tvarka, ikonos virš kortelių, Hero chevron fonas. |
| Dokumentai | PRD v1.5, DS v1.5, BRAND, README, AGENTS, Cursor taisyklės, šis `todo.md`. |
| Deploy | GitHub Pages workflow + Vercel instrukcijos README; `intuit-sitemap` → `dist/sitemap.xml`. |

---

## Faza 0 — taisyklės ir higiena

- [x] `AGENTS.md`, `.cursor/rules/intuit-landing.mdc` — stackas, i18n, DS nuorodos.
- [x] README — paleidimas, env, sitemap, brand keliai.
- [x] `.editorconfig` — UTF-8 (jei repo turi failą — laikyti).
- [x] Brand JPG → `public/brand/` (žr. BRAND.md).

---

## Faza 1 — karkasas

- [x] `output: 'static'`, Tailwind, custom sitemap hook.
- [x] Maršrutai LT + EN.
- [x] Sekcijos pagal PRD funnel.
- [x] Vienas primary CTA (`ButtonPrimary`) + secondary; copy sinchronizuotas su PRD §4.4.

---

## Faza 2–4 — turinys ir kalbos

- [x] LT / EN skeletas ir copy (trumpesnis viešas tonas, žr. i18n + PRD §5.1).
- [ ] Proof: tikri before/after skaičiai su kliento sutikimu (kol kas iliustracija + demo pastaba).
- [ ] SEO / meta peržiūra po kiekvienos didesnės copy bangos.

---

## Faza 5 — ship

- [x] Build be klaidų; GitHub Actions deploy konfigūracija.
- [ ] Production smoke: mobilusis, kalbos jungiklis, `mailto:`, `/sitemap.xml` ant tikro domeno.

---

## Faza 6 — tolesnis poliravimas

- [ ] SVG logotipas iš `.ai` (LCP) — optional, dabar JPG su teisingais matmenimis.
- [ ] Larsseit webfont — tik po licencijos; iki tol Inter.
- [ ] Lighthouse / paveikslų optimizacija pagal realų hostingą.

---

## Hero diagram — micro UX polish backlog

Likučiai iš `v5.1` polish bangos (žr. [CHANGELOG.md](CHANGELOG.md)). Kiekvienas punktas — atskiras commit'as / PR'as, kad bangos liktų reviewable. Komponentas: [`src/components/HeroSystemDiagram.astro`](src/components/HeroSystemDiagram.astro).

- [ ] **Subtle column shading** kortelėms 1, 3, 4 — virš kortelės 1 vnt. aukščio `<rect>` su `fill="white" opacity="0.6"` arba accent/4% top highlight; subtilus „lift" efektas be storo šešėlio.
- [ ] **Subtitle letter-spacing** ant `nodeHint*` SVG `<text>` — `letter-spacing="0.02em"` + `font-feature-settings="tnum"` (jei reikšmingi skaičiai). Dabar `font-size="10"` desktop / `font-size="11"` mobile, weight 500, fill muted.
- [ ] **Hover state per card** — SVG `<g>` su `class="hsd-card hsd-card--passive"`; `:hover` -> `transform: translateY(-1px)`, border opacity 0.55, mažas drop-shadow. Anchor karta — be hover (jau „elevated"). Reikalauja CSS pseudo-klasės palaikymo per scoped `<style>`.
- [ ] **Connector fade-in animacija** — vienkartinė, staggered (0/90/180 ms), `cubic-bezier(.2,.8,.2,1)`, su `prefers-reduced-motion: no-preference` guard'u. Sutrigerinti per `IntersectionObserver` arba CSS `animation-delay`. Naudinga tik kai diagrama matoma.
- [ ] **Density `compact` prop** — `density?: 'standard' | 'compact'`; `compact` slėpia subtitle'us (`nodeHint*`), sumažina kortelių aukštį 80 -> 64 vnt., overlay perskaičiuojamas. Naudojimas — embed'inant į FAQ ar kitas mažesnes erdves.
- [ ] **Tabular metric line** — virš diagramos arba vietoj caption'o: `<p class="font-mono text-[11px] tabular-nums tracking-wider text-muted2">4 ŽINGSNIAI · 1 SRAUTAS · 0 RANKINIŲ ŠOKINĖJIMŲ</p>` (i18n: `messages.hero.diagram.metaLine`). Premium SaaS „tagline metric".
- [ ] **Mobile iteracijos arc** — vertikalus loop'as nuo kortelės 4 (y≈400) iki kortelės 2 (y≈200) dešinėje pusėje (x≈260..280); reikalauja viewBox išplėtimo arba absoliutaus HTML overlay'aus.

Prioritetas — **Hover state** ir **Connector fade-in** turi didžiausią „premium feel" grąžą; **Tabular metric** reikalauja LT/EN copy patvirtinimo; **Mobile arc** — tik jei desktop arc'as pasitvirtins kaip vertingas.

---

## Greita savaitės checklist

- [ ] Patvirtinti Larsseit **web** licenciją arba palikti Inter.
- [ ] Po copy keitimų: sinchronizuoti PRD / DS tik jei keičiasi elgsena (viena tiesa — PRD + i18n).
- [ ] Deploy smoke: `PUBLIC_SITE_URL`, `PUBLIC_CONTACT_EMAIL`, OG, `sitemap.xml`.
