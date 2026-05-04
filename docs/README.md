# Dokumentacija — rodyklė ir tvarka

Šis aplankas yra **vienas įėjimo taškas** strateginiams ir produkto dokumentams. Techninė įgyvendinimo instrukcija — repozitorijos šaknies [README.md](../README.md).

## Dokumentų žemėlapis

| Dokumentas | Paskirtis | Atnaujinti, kai… |
|--------------|-----------|-------------------|
| [PRD-one-page-PR-AI.md](PRD-one-page-PR-AI.md) | Produkto reikalavimai: sekcijos, funnel, LT/EN, CTA, a11y, vizualas (versija faile, pvz. v1.5) | Keičiasi pozicionavimas, sekcijų eilė, copy ar konversijos logika |
| [BRAND.md](BRAND.md) | Logotipų keliai, Larsseit / Inter, UI gairės | Keičiasi brand failai, šriftų licencija ar naudojimas webui |
| [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) | DS v1.5: Tailwind tokenai, CTA, kortelių akcentas (ikona neprivaloma), `--ds-*`, TrustedBy juosta, Hero inverse plakatas (`logo-pattern-inverse.jpg` / `BrandPatternPanel`), Proof diagrama, anti-patterns, checklist | Keičiasi vizualinė sistema, nauji UI primitive ar tokenai |
| [COPY-GLOSSARY.md](COPY-GLOSSARY.md) | LT/EN copy glosarijus: tonas, CTA, terminai, US anglų taisyklės, §**Agentams** (LT pirminė kalba; EN — privaloma **adaptacija**, ne vertimas); šaltinis [lt.ts](../src/i18n/lt.ts) / [en.ts](../src/i18n/en.ts) | Keičiasi terminologija, CTA, tonas ar agentų gairės |
| [MOBILE-AUDIT.md](MOBILE-AUDIT.md) | Mobile UI/UX auditas: metodika (matrica, įrankiai, LT+EN smoke), Must/Should/Want, el. parašo takas, backlogas | Keičiasi responsive elgsena, mobilusis prioritetų sąrašas arba po reikšmingo UI pakeitimo |
| [README.md](README.md) *(šis failas)* | Dokumentų valdymas: kas kur gyvena | Pridedate naują doc tipą ar taisykles |

## Repozitorijoje ne `docs/`

| Kelias | Paskirtis |
|--------|-----------|
| [../AGENTS.md](../AGENTS.md) | Cursor: ką skaityti prieš keičiant kodą; nuoroda į taisykles ir pagrindinius kelius |
| [../README.md](../README.md) | Techninė paleistis, env, Vercel, sitemap (`intuit-sitemap`) |
| [../todo.md](../todo.md) | Darbų planas (fazės, checkbox) — operatyvus darbas |
| [../CHANGELOG.md](../CHANGELOG.md) | Versijuoti release įrašai (Keep a Changelog) |
| [../.cursor/rules/](../.cursor/rules/) | Cursor taisyklės (`intuit-landing.mdc` — stackas ir sutartinė struktūra) |
| `src/` | Astro šaltiniai: `pages/`, `layouts/`, `components/`, `i18n/`, `styles/` |
| [../astro.config.mjs](../astro.config.mjs) | `site`, Tailwind, **`intuit-sitemap`** (generuoja `dist/sitemap.xml`) |
| `INTUIT LOGO/` | Šaltiniai vektorius / raster / šriftai (ne versijuoti pertekliaus kopijas jei galima) |

## Dokumentų valdymo taisyklės

1. **Viena tiesa strategijai:** PRD ir BRAND nesikerta — PRD aprašo *ką* daryti, BRAND *kaip atrodyti*.
2. **Versijos istorija:** reikšmingi produkto/kodo pokyčiai — įrašas [CHANGELOG.md](../CHANGELOG.md) skiltyje `[Unreleased]`, prie release perkelti į datuotą versiją.
3. **UTF-8:** visi `.md` failai saugomi kaip UTF-8 (LT raidės).
4. **Naujas dokumentas:** pridėkite eilutę į lentelę viršuje ir trumpą nuorodą iš šaknies README „Dokumentacija“, jei dokumentas svarbus visiems skaitytojams.

## Archyvavimas (pasirinktinai)

Pasenusius draft’us galima perkelti į `docs/archive/` su data prefiksu, pvz. `archive/2026-05-old-brief.md`, ir nuorodą palikti čia vienoje eilutėje „Archyvas“.
