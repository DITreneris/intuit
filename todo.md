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

## Greita savaitės checklist

- [ ] Patvirtinti Larsseit **web** licenciją arba palikti Inter.
- [ ] Po copy keitimų: sinchronizuoti PRD / DS tik jei keičiasi elgsena (viena tiesa — PRD + i18n).
- [ ] Deploy smoke: `PUBLIC_SITE_URL`, `PUBLIC_CONTACT_EMAIL`, OG, `sitemap.xml`.
