# Cursor agentams — 67_Intuit

Trumpa orientacija, kad AI pakeitimai atitiktų **dabartinį** kodą ir dokumentus.

## Prieš didesnius pakeitimus perskaitykite

1. [docs/PRD-one-page-PR-AI.md](docs/PRD-one-page-PR-AI.md) — sekcijų eilė, funnel, tonas (pasitikėjimas pirmiau).
2. [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) — DS v1.5: tokenai, mygtukai (`src/components/ui/`), kortelių akcentas (ikona neprivaloma), checklist.
3. [.cursor/rules/intuit-landing.mdc](.cursor/rules/intuit-landing.mdc) — stackas, failų struktūra, Tailwind tokenai, sitemap (`intuit-sitemap`), a11y.
4. [README.md](README.md) — paleidimas, env, Vercel, sitemap patikra.
5. [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md) — redaguojant **viešą tekstą** LT/EN: §**Agentams** (LT pirminė kalba; EN — **adaptacija**, ne vertimas).

## Kur kas gyvena

| Plotmė | Kelias |
|--------|--------|
| LT / EN tekstai | `src/i18n/lt.ts`, `src/i18n/en.ts` (struktūra turi atitikti `SiteMessages` iš [`src/i18n/types.ts`](src/i18n/types.ts)). **LT — pirminė kalba; EN — adaptacija** (ne žodis į žodį): žr. [docs/COPY-GLOSSARY.md](docs/COPY-GLOSSARY.md) §1 „Agentams“. |
| Puslapio komponavimas | `src/components/LandingPage.astro` + `src/components/sections/*.astro` |
| UI primitives (CTA) | `src/components/ui/*.astro` |
| Globalūs stiliai | `src/styles/global.css` + `tailwind.config.mjs` |
| Build / site URL / sitemap | `astro.config.mjs` (`intuit-sitemap` hook) |
| Mobile UI/UX auditas (metodika, backlog) | [docs/MOBILE-AUDIT.md](docs/MOBILE-AUDIT.md) |
| Dokumentų rodyklė | [docs/README.md](docs/README.md) |

## Agentų „taisyklių“ failas

Vienintelė specializuota Cursor taisyklė šiam projektui: **`.cursor/rules/intuit-landing.mdc`**.  
Jei norite, kad ji visada būtų įjungta, `intuit-landing.mdc` frontmatter galite pakeisti į `alwaysApply: true` (dabar `false` — įjungiama pagal `globs`).

## UTF-8

Strateginiai `.md` failai (`docs/`, `CHANGELOG.md`, `todo.md`) — saugokite UTF-8, kad lietuviškos raidės nesulūžtų.
