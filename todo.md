# 67_Intuit — detalus darbo planas (todo)

**Paskutinis atnaujinimas:** 2026-05-03  
**Stack:** Astro + statinis build + Vercel  
**PRD:** `docs/PRD-one-page-PR-AI.md`  
**Brand šaltinis:** `INTUIT LOGO/`

---

## Brand analiz? (`INTUIT LOGO`)

### Fail? inventorius

| Kelias | Paskirtis |
|--------|-----------|
| `INTUIT LOGO/ai/INTUIT_LOGO.ai` | Šaltinis vektorius (redaguoti logotip?, eksportuoti SVG webui). |
| `INTUIT LOGO/pdf/INTUIT_LOGO.pdf` | Perži?ra / spaudai; nenaudoti kaip web asset. |
| `INTUIT LOGO/jpg/INTUIT_LOGO_.jpg` | Šviesus fonas — **juodas ženklas** (numatytasis header / hero). |
| `INTUIT LOGO/jpg/INTUIT_LOGO_INVERSE.jpg` | Tamsus fonas — **šviesus ženklas** (footer, „dark“ juosta arba hero akcentas). |
| `INTUIT LOGO/jpg/INTUIT_LOGO_PATTERN.jpg` | Pattern/fonas — naudoti saikingai (ne konkuruoti su tekstu). |
| `INTUIT LOGO/jpg/INTUIT_LOGO_PATTERN_INVERSE.jpg` | Pattern inverse variantas. |
| `INTUIT LOGO/_font/Larsseit/*.otf` | Pilna Larsseit šeima (Thin — ExtraBold + italic). |

### Logotipo esm? (vizualin?)

- **Žodinio ženklo:** minimalistinis sans-serif, **didžiosios raid?s**; priekyje **slash `/`** — asociacija su keliu, sistema, tech („path“, strukt?ra). Tai dera su PRD kryptimi „sistema, ne paslaug? s?rašas“.
- **Spalvos:** monochromas — **juoda ant balto** (pagrindas), **balta ant beveik juodo** (inverse). Premium SaaS „trust“ light režimui tinka **baltas fonas + juodas tekstas + juodas ženklas**.
- **Tipografija:** ženkle naudotas šriftas atitinka ?sigyt? **Larsseit** — svetain?je antrašt?ms naudoti **t? pa?i? šeim?** (Medium/Bold), kad sutapt? su logotipu.

### Šriftas (Larsseit) — web integracija

- **Turimi:** `.otf` failai — gerai dizainui, bet žiniatinkliui dažnai konvertuojama ? **woff2** (mažesnis, greitesnis).
- **Licencija:** Larsseit yra komercinis šriftas. Prieš `@font-face` publikacijoje patikrinkite **webfont / app licencij?**. Jei web naudoti neleidžiama — antrašt?ms naudoti legal? pakaital? (pvz. **Inter**, **Geist Sans**) su panašiu geometriniu charakteriu; logotipas lieka PNG/SVG paveiksle.
- **Rekomenduotas rinkinys puslapiui:** Larsseit **Medium** arba **Regular** body (jei licencija leidžia), **Bold** hero H1; arba body **Inter** + antrašt?s **Larsseit Bold** tik brand zonoje.

### UI gair?s pagal brand

- Daug **whitespace**, griežtas **grid** (PRD §5.2); slash galima naudoti kaip skyri? prefiks? retai ir konsistentiškai (ne „dekoras ant dekoro“).
- **Border radius:** laikytis sant?raus (žemos arba be užapvalinim?) — dera su geometriniu ženklu.
- **Pattern JPG:** tik kaip subtilus fonas (žema kontrasto), niekada už teksto tankiai.

---

## Repo b?sena (santrauka)

| Sritis | B?sena |
|--------|--------|
| Kodas | **Yra:** Astro 4 + Tailwind 3, statinis `output`, LT `/` ir EN `/en/`, turinys `src/i18n/lt.ts` / `en.ts`, sekcijos `src/components/sections/`, Chaos vs System vizualas, Hero komunikacijos sistemos diagrama (SVG). |
| PRD | Yra `docs/PRD-one-page-PR-AI.md` (UTF-8 patikrinkite redaktoriuje). |
| Brand | Yra `INTUIT LOGO/` ir `public/brand/` assetai. |
| Deploy | Vercel (`vercel.json`, build ? `dist`); žr. README ir `.env.example` (`PUBLIC_SITE_URL`, `PUBLIC_CONTACT_EMAIL`). |
| Sitemap | Build generuoja `dist/sitemap.xml` (`astro.config.mjs` ? `intuit-sitemap`). |

---

## Faza 0 — Rules, agentai, repo higiena

**Tikslas:** vienodas AI/žmogaus darbas; PRD ir brand kaip šaltiniai.

- [ ] **0.1** `.cursor/rules/` arba `AGENTS.md`: LT pirmin? / EN antrin?; vienas H1; CTA hierarchija; AI = sistema; tonas pagal PRD (ne agent?ros kliš?s).
- [ ] **0.2** README: projektas, nuorodos ? PRD ir `INTUIT LOGO`, `npm run dev`, deploy santrauka.
- [ ] **0.3** `.editorconfig`: `charset = utf-8`, `insert_final_newline = true`.
- [ ] **0.4** Brand ? projektas (po Astro init): kopijuoti ? `public/brand/` arba `src/assets/brand/` tik reikalingus: **SVG iš .ai eksportas**, `jpg` variantai; šriftus tik po licencijos patvirtinimo.
- [ ] **0.5** `docs/BRAND.md` (pasirinktinai): šio skyriaus santrauka + licencijos pastaba.

**Iš?jimo kriterijus:** rules + README; visi `.md` UTF-8; žinoma kur saugomi brand failai.

---

## Faza 1 — Astro + Vercel: MVP karkasas (light, greitas hero)

**Tikslas:** vienas statinis puslapis, greitas LCP, šviesi tema, PRD sekcij? eil? (?skaitant Chaos vs System).

### 1.1 Astro projektas

- [ ] `npm create astro@latest` — minimal template arba „Empty“ + TypeScript (strict pagal pageidavim?).
- [ ] `output: 'static'` (`astro.config.mjs`) — vienas landing = papras?iausias Vercel hosting.
- [ ] Integracija: `@astrojs/tailwind` (arba Tailwind v4 pagal Astro docs 2026) — greitas layout ir PRD grid.
- [ ] Sitemap: repo naudoja custom **`intuit-sitemap`** (`astro.config.mjs`), ne `@astrojs/sitemap`.
- [ ] `astro.config` ? `site` / `PUBLIC_SITE_URL` kai žinomas domenas.

### 1.2 Vercel

- [ ] Repo prijungti prie Vercel; Build: `npm run build`, Output: `dist` (Astro static default).
- [ ] Env: jei v?liau forma — `PUBLIC_*` raktai tik per Vercel dashboard.
- [ ] `vercel.json` tik jei reikia redirect ar headers (pasirinktinai).

### 1.3 Greitas hero („light“)

- [ ] Hero be sunki? vaizd?: **SVG logotipas** arba vienas optimizuotas PNG/WebP; ne pilno plo?io JPG fonas pirmame fold’e (LCP).
- [ ] Šriftai: **preload** tik kritinis subset (viena Larsseit Bold weight arba sisteminiai fallback kol n?ra woff2).
- [ ] `fetchpriority="high"` hero logo jei `<img>`; tekstas DOM — ne paveiksle.
- [ ] `prefers-reduced-motion`: sumažinti hero animacij?.

### 1.4 Strukt?ra ir komponentai

- [ ] Maršrutai: LT `/`, EN `/en/` (`src/pages/`).
- [ ] Sekcijos komponentai: `Hero`, `Problem`, `ChaosVsSystem`, `Solution`, `Process`, `Proof`, `Offers`, `About`, `FinalCta`.
- [ ] `Layout.astro`: meta, Open Graph, favicon iš logo eksporto (simple `/` favicon optional).

### 1.5 Navigacija ir CTA

- [ ] Anchor menu: `#hero`, `#problem`, … — sutampa su PRD funnel (Chaos vs System gali b?ti be atskiros nav eilut?s).
- [ ] Vienas **primary** CTA komponentas (pvz. „Gauti konsultacij?“) + secondary („Kaip veikia“ ? `#process`).

### 1.6 Prieinamumas

- [ ] Viena `<h1>` hero; sekcijos `<h2>`; prasmingos nuorodos.
- [ ] Kontrastas juoda ant balto — WCAG AA hero zonoje.

**Iš?jimo kriterijus:** `npm run build` be klaid?; Lighthouse Performance skeleton protingas (po tikro turinio dar kart?).

---

## Faza 2 — Minimal LT turinys (skeletas)

- [ ] **2.1–2.7** pagal PRD ir ankstesn? todo: Hero 2 s testas; Problema 3–4; chaos vs system; sistema trimis blokais; procesas 4 žingsniai; Proof placeholder aiškiai pažym?tas; 3 paketai; Apie; final CTA.

**Iš?jimo kriterijus:** visa istorija LT nuo pradžios iki galo.

---

## Faza 3 — Pilnas LT MVP copy

- [ ] Auditas pagal PRD §4–5; terminologijos suvienodinimas; SEO meta LT.

---

## Faza 4 — EN adaptacija + proofread

- [ ] EN adaptacija (ne žodis ? žod?); CTA sinchronas; LT ir EN proofread; kalbos UI pagal PRD.

---

## Faza 5 — Minimal ship (production)

- [ ] Vercel production URL; domenas; bazin? privatumo politika jei yra forma/analytics.
- [ ] Smoke: mobilusis, Safari/Chrome, CTA veikia.

---

## Faza 6 — Pilnas MVP

- [ ] Tikras Proof arba s?žiningas framework demo su dizainu.
- [ ] Chaos vs system + proceso linija (diagrama) — patobulinti jei reikia.
- [ ] Lighthouse: fonts/images optimizuoti; form/booking integracija; backlog A/B.

---

## Prioritet? eil?

1. Faza 0 (rules, README, brand keliai, UTF-8)  
2. Faza 1 (Astro static + Vercel + greitas hero + sekcij? karkasas)  
3. Fazos 2–4 turinys ir kalbos  
4. Faza 5 deploy  
5. Faza 6 produktinis užbaigtumas  

---

## Šios savait?s greita checklist

- [ ] Patvirtinti Larsseit **web naudojim?** (licencija) ar pasirinkti legal? body šrift? (dabartin? svetain?: Inter).
- [ ] Iš **INTUIT_LOGO.ai** eksportuoti **SVG** webui (viena spalva) — header naudoja JPG; SVG sumažins LCP jei reikia.
- [ ] Vercel: `PUBLIC_SITE_URL`, `PUBLIC_CONTACT_EMAIL`; smoke deploy ir `/sitemap.xml` patikra.
