# Dokumentacija — rodyklė ir tvarka

Šis aplankas yra **vienas įėjimo taškas** strateginiams ir produkto dokumentams. Techninė įgyvendinimo instrukcija — repozitorijos šaknies [README.md](../README.md).

## Dokumentų žemėlapis

| Dokumentas | Paskirtis | Atnaujinti, kai… |
|--------------|-----------|-------------------|
| [PRD-one-page-PR-AI.md](PRD-one-page-PR-AI.md) | Produkto reikalavimai: sekcijos, funnel, LT/EN, a11y, vizualas | Keičiasi pozicionavimas, sekcijų eilė ar konversijos logika |
| [BRAND.md](BRAND.md) | Logotipų keliai, Larsseit / Inter, UI gairės | Keičiasi brand failai, šriftų licencija ar naudojimas webui |
| [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) | DS v1.1: Tailwind tokenai, CTA komponentai, `--ds-*`, anti-patterns, checklist | Keičiasi vizualinė sistema, nauji UI primitive ar tokenai |
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
