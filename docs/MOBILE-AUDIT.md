# Mobile UI/UX auditas — Intuit one-page

**Versija:** 1.0  
**Data:** 2026-05-04  
**Apimtis:** Takas A — statinė Astro svetainė (`src/`); Takas B — el. parašo HTML (ne repo).  
**Šaltiniai:** [PRD-one-page-PR-AI.md](PRD-one-page-PR-AI.md), [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md), [COPY-GLOSSARY.md](COPY-GLOSSARY.md).

---

## 1. Metodika

### 1.1 Įrenginių matrica (privaloma paleidimo patikrai)

| Profilis | Plotis / kontekstas | Naršyklė |
|----------|---------------------|----------|
| Mažas telefonas | 320–360 CSS px | iOS Safari arba Android Chrome |
| Standartinis mobilusis | 390 CSS px | Tas pats |
| „Phablet“ | 428 CSS px | Pasirinktinai |
| Mažas planšetės | 768 CSS px | Desktop ChromeDevice toolbar |

**Minimalus plotis 320 px:** patikrinti, ar nėra horizontalaus puslapio slankiklio (`overflow-x`) ir ar hero / diagramos / TrustedBy lieka naudojamos.

### 1.2 Įrankiai

| Įrankis | Paskirtis |
|---------|-----------|
| Chrome DevTools — Device Mode + throttling | Išdėstymas, touch emulation |
| Lighthouse (Mobilusis) | Našumas, SEO, „Accessibility“ orientyras (po deploy ant tikro URL) |
| axe DevTools arba Edge „Inspect“ Accessibility | Antraščių hierarchija, kontrastas, vardai |
| Rankinis | Kalbos jungiklis, `mailto:` / `tel:`, slankiojanti TrustedBy juosta |

### 1.3 LT + EN smoke scenarijus

1. Atidaryti `/` (LT) ir `/en/` (EN).
2. Hero: perskaityti `h1`, primary CTA (`#contact`), secondary (`#process`).
3. Header: kalbos nuoroda LT ↔ EN; mobilusis „Meniu“ — primary CTA viršuje, anchor nuorodos į sekcijas.
4. TrustedBy: horizontalus slankiklis (scroll / swipe).
5. Proof: hero diagrama — mobilusis SVG matomas (`md:hidden` kelias).
6. Final CTA: kontaktinė kortelė — nuotrauka, žodinis ženklas, `tel:`, `mailto:`, primary mygtukas (pilnas plotis).
7. Footer: nuoroda į `#contact`.

---

## 2. Takas A — svetainės auditas (kodas)

### 2.1 Must — patvirtinta arba stebėti

| ID | Radinys | Būsena | Vieta |
|----|---------|--------|-------|
| M1 | Vienas `h1` (Hero) | OK | [Hero.astro](../src/components/sections/Hero.astro) |
| M2 | Sekcijos su `h2`, antrinės antraštės logiškos | OK | Problem, ChaosVsSystem, Solution, Process, Proof, Offers, About, FinalCta |
| M3 | Primary CTA kelias: Header mobilusis meniu + Hero + Offers highlighted + FinalCta | OK | [Header.astro](../src/components/Header.astro), [Offers.astro](../src/components/sections/Offers.astro) |
| M4 | Ink `#contact`: `mailto:` su `URLSearchParams`, `tel:` be tarpų | OK | [FinalCta.astro](../src/components/sections/FinalCta.astro) |
| M5 | Išorinės nuorodos (Maps): `rel="noopener noreferrer"` | OK | FinalCta |
| M6 | Proof valdymo diagrama: atskiras mobilusis SVG (`md:hidden`) ir desktop (`md:block`) | OK | [HeroSystemDiagram.astro](../src/components/HeroSystemDiagram.astro) |
| M7 | `:focus-visible`, skip nuoroda, `prefers-reduced-motion` | OK | [global.css](../src/styles/global.css), [Layout.astro](../src/layouts/Layout.astro) |
| M8 | Sekcijos `scroll-mt-28` lipniam headeriui | OK | Sekcijų failai |
| M9 | Kontrastas ant `bg-ink` (nuorodos `text-white/75` ir kt.) | **Stebėti** paleidus — patvirtinti axe / kontrasto skaičiuokle prie `#0a0a0a` | FinalCta |

### 2.2 Should

| ID | Radinys | Rekomendacija | Vieta |
|----|---------|---------------|-------|
| S1 | Kontaktinė nuotrauka `< sm`: `mx-auto`, tekstas kairėje — dvi vizualinės ašys | Sulygiuoti nuotrauką su tekstu (`mx-0` ir vienoda kairė padding) arba sąmoningai centruoti visą kortelės turinį | [FinalCta.astro](../src/components/sections/FinalCta.astro) (≈38–40 eil.) |
| S2 | Touch 44×44 pt: `ButtonPrimary` `md` dydis — `py-3` ≈ 40 px aukštis | Prireikus `min-h-11` arba šiek tiek didesnis `py` ant primary | [ButtonPrimary.astro](../src/components/ui/ButtonPrimary.astro) |
| S3 | Footer kontaktas — tik tekstinė nuoroda | Padidinti paspaudimo zoną (`inline-block py-2` arba `min-h-11 flex items-center`) | [Footer.astro](../src/components/Footer.astro) |
| S4 | TrustedBy: slankantis konteineris su `tabindex="0"` | Palikti; UX: vartotojui parodyti, kad juosta slankioja (gradientai j yra) | [TrustedBy.astro](../src/components/sections/TrustedBy.astro) |
| S5 | Valdymo diagrama (Proof) mobiliajame: `max-h-[min(72vh,480px)]` | Trumpuose ekranuose diagrama užima daug vertikalės — priimtina; jei bounce didėja, svarstykite `max-h` mažinimą | HeroSystemDiagram |
| S6 | Offers/Solution: viena kolona `< md` | OK; ilgi antraščių žodžiai — stebėti LT/EN realiu tekstu | Offers, Solution |

### 2.3 Want

| ID | Radinys | Rekomendacija |
|----|---------|---------------|
| W1 | Įrenginiai su notch | `padding` su `env(safe-area-inset-*)` ant lipnaus [Header.astro](../src/components/Header.astro) ir galinės CTA sekcijos |
| W2 | Aktyvus nav pagal scroll poziciją | Tik jei atitinka PRD ramų toną — ne prioritetas |
| W3 | Lighthouse LCP | Hero inverse JPG jau `fetchpriority="high"` [BrandPatternPanel.astro](../src/components/BrandPatternPanel.astro); pilnas Lighthouse po deploy ([todo.md](../todo.md)) |

---

## 3. Takas B — el. parašas (ne šio repo kodas)

HTML el. laiškuose galioja kitos taisyklės (Gmail/Outlook apkarpymai, ribotas CSS).

| Prioritetas | Kryptis |
|-------------|---------|
| **Must** | Viena vertikali ašis: nuotrauka ir tekstas ta pačia kairiąja riba *arba* visas blokas centruotas; ne maišyti centro ir kairės be priežasties. |
| **Should** | Vienas aiškus CTA; kontaktai be dubliavimo; tamsus fonas — inline spalvos, nes išoriniai stylesheet dažnai išmetami. |
| **Want** | Vizualinis ryšys su svetainės [FinalCta](../src/components/sections/FinalCta.astro) kortele (spalvos, „pill“ mygtukas) — rankinis derinimas pagal klientą. |

Techninis pastebėjimas: svetainės FinalCta naudoja tą pačią logikos idėją kaip planuotas parašo pataisymas — **viena kolona / bendras konteinerio padding** sumažina „centras + kairė“ įtampą.

---

## 4. Prioritizuotas backlogas

| Eilė | ID | Veiksmas |
|------|-----|----------|
| 1 | M9 | Paleidus: axe + kontrastas FinalCta ant tikro `bg-ink` |
| 2 | S1 | Spręsti FinalCta nuotraukos išlygiavimą `<640px` |
| 3 | S2, S3 | Touch: primary mygtukai ir Footer `#contact` |
| 4 | W1 | Safe-area ant header/footer kontaktų, jei matomas notch problema |
| 5 | W3 | Lighthouse mobiliajam po production URL |

---

## 5. Nuorodos

- Produkcijos smoke: [todo.md](../todo.md) (Faza 5).
- CTA / `mailto` sinchronas: [COPY-GLOSSARY.md](COPY-GLOSSARY.md) §11.
