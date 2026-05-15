# PRD: vieno puslapio svetainė — pasitikėjimu grįsta korporatyvinė komunikacijos sistema

**Dokumento versija:** 1.5  
**Data:** 2026-05-03  
**Produktas:** Vieno puslapio (one-page) rinkodaros svetainė B2B sprendimų priėmėjams (CEO, CMO)  
**Pagrindinė kalba:** lietuvių  
**Antrinė kalba:** anglų (švari adaptacija, ne „pusinis vertimas“)

---

## 1. Konteksto santrauka (analizė)

### 1.1 Problema, kurią sprendžiame

| Rizika | Pasekmė |
|--------|---------|
| Gražus išdėstymas be konversijos struktūros | „PowerPoint tinklalapis“ — vizualas be pardavimo logikos |
| Per platus pozicionavimas („PR + marketing + viskas iš karto“) | Niekas per 2–3 s nesupranta, **ką konkrečiai** perkate |
| „Komunikacija“ kaip tema be outcome | Sprendimų priėmėjams rūpi **rezultatas** (leads, reputacija, krizės kontrolė), ne etiketė |
| Silpnas funnel (hero → offers → CTA) | Aukštas bounce, mažai užklausų |
| LT + EN atliktas atmestinai | Atrodo pigiai, mažėja pasitikėjimas |

**Išvada:** kritinis kelias — **aiškus pasiūlymas (message–market fit)** ir **prognozuojami komunikacijos rezultatai**, ne dekoras.

### 1.2 Pozicionavimo šerdis

- **Ne:** fragmentuotų PR / marketing / technologijų „meniu“ be aiškaus atsakomybės rėmo.  
- **Taip:** **pasitikėjimu ir kontrole grįsta korporatyvinė komunikacijos sistema** — viena **sistema**, kurios išeiga: **prognozuojami komunikacijos rezultatai**. AI ir kitos priemonės — tik aiškiai apibrėžtoje darbo eigoje, ne kaip vedanti rinkodaros etiketė.

Trumpas mapping vadovams:

| Sluoksnis | Rezultatas klientui |
|-----------|---------------------|
| Corporate communication | Reputacija, krizė, vadovų komunikacija |
| Marketing communication | Pipeline, kampanijos, content |
| Mastelis ir operacija (įsk. priemonės) | Efektyvumas, mastelis, kartojama kokybė, aiški atsakomybė |

**Vertės žinia:** parduodate **sistemą ir rezultatą**, ne „paslaugų meniu“.

---

## 2. Tikslai ir sėkmės kriterijai

### 2.1 Verslo tikslai

- Generuoti **kvalifikuotas užklausas** (konsultacija / demo), ne tik peržiūras.
- Per **2–3 sekundes** viršuje puslapio aiškiai perskaityti: **kas esate, kam, kokia vertė**.

### 2.2 Produkto (svetainės) tikslai

- Vienas **aiškus primary CTA** visame puslapyje + antriniai CTA be konkurencijos su primary.
- **Socialinis įrodymas** (klientų juosta, metodas, procesas) sutvirtina pasitikėjimą prieš agresyvų pardavimą (paketai).
- LT tekstas — pilnas; EN — lygiavertė adaptacija (ne žodis į žodį „vertimas“).

### 2.3 KPI (pasiūlymas)

| Metrika | Pavyzdinis taikinys (kalibruoti paleidus) |
|---------|-------------------------------------------|
| Scroll depth iki „Offers“ | > X % |
| Primary CTA paspaudimai / sesija | stebėti trendą |
| Form submit / booked call | absoliutus skaičius + šaltinis |

---

## 3. Tikslinė auditorija ir poreikiai

| Segmentas | Kas jiems svarbu |
|-------------|------------------|
| CEO | Rizika, reputacija, predikuojamumas, mažiau chaoso |
| CMO | Pipeline, kampanijų nuoseklumas, mastelis, įrodymas skaičiais |
| Bendras filtras | Nenori „fragmentuotų agentūrų“ — nori **vienos sistemos** ir aiškios atsakomybės už rezultatą |

---

## 4. Funkciniai reikalavimai

### 4.1 Struktūra (sekcijų eilė — „ready-to-build“)

| # | Sekcija | Tikslas | Privalomas turinys |
|---|---------|---------|---------------------|
| 1 | **Hero** | 2 s aiškumas; pozicionavimas + CTA | LT/EN antraštės; dešinėje inverse ženklas / raštas (`BrandPatternPanel`); vienas primary CTA, vienas secondary |
| 1b | **Klientų juosta (trusted by)** | Socialinis įrodymas iškart po hero | Responsive logotipų tinklas (`#clients`); placeholderiai iki tikrų assetų |
| 2 | **Sprendimas (core system)** | Viena sistema, trys sluoksniai | Corporate / Marketing / mastelis ir operacija su **rezultatų** kalba |
| 3 | **Kaip veikia (process)** | Sumažinti „paslaptingumo“ baimę | 4 žingsniai (LT: Apžvalga → Planas → Vykdymas → Tobulinimas; EN: Overview → Plan → Execution → Refinement); schema > ilgas tekstas |
| 4 | **Pasiūlymas (offers)** | Konversija | 3 paslaugų paketai (LT: Startas / Palaikymas / Krizių valdymas; EN: Starter / Ongoing support / Crisis management) — **rezultatai**, trumpi punktai, ne ilgas feature sąrašas |
| 5 | **Apie (trust)** | Žmogiškas patikimumas | Kas esate, patirtis, klientų tipai |
| 6 | **Final CTA** | Uždarymas | Viena stipri žinutė + primary CTA |

### 4.2 Konversijos funnel (privaloma logika)

```
Hero (aiškus „kas“ + CTA) → Klientų juosta → Sprendimas (sistema) → Procesas (kaip)
    → Offers (ką pirkti) → Trust → CTA
```

**Taisyklė:** **Offers** negali būti prieš aiškų „sistema + procesas“, jei auditorija šalta — kitaip bounce iš paketų sekcijos.

### 4.3 Kalbos reikalavimai

- **Pirminė kalba:** lietuvių — visi antraštės body copy hero ir pagrindinės sekcijos.
- **Antrinė:** anglų — po LT arba greta (viena vizuali sistema: pvz. LT pirmoje eilutėje, EN antroje, arba sekcijos antraštė dvikalbė).
- Draudžiama: pusiau išverstos sekcijos, skirtingas tonas LT vs EN, EN kaip „Google vertėjas“.

### 4.4 CTA hierarchija

| Tipas | Pavyzdžiai (galutinius tekstus patvirtinti) |
|-------|---------------------------------------------|
| Primary | „Gauti komunikacijos įžvalgą“ / „Get a communications insight“ (veda į kontaktą) |
| Secondary | „4 žingsniai“ / „Four steps“ (veda į `#process`) |

Vienas primary visame fold’e; secondary ne konkuruoja vizualiai su primary.

---

## 5. Ne funkciniai reikalavimai

### 5.1 Tonas ir copy

- Aiškus, confident, **ne** agentūriniai klichė („kūrybiški sprendimai“, „unikali patirtis“ be įrodymų).
- **UI etiketės ir CTA:** trumpi žodžiai; vengti perteklinės „sistemos“ terminologijos viešame puslapyje, jei tas pats pasakoma paprasčiau.
- AI ir kitos priemonės: **tik kontroliuojamoje darbo eigoje**; vedanti žinutė — **pasitikėjimas, skaidrumas, atsakomybė**, ne „AI-driven“ etiketė.

### 5.2 Vizualinė kryptis (kad ne „PowerPoint“)

| Elementas | Nuoroda |
|-----------|---------|
| Bendras pojūtis | Premium SaaS (Linear / Stripe kryptimi), ne dekoratyvi agentūra |
| Layout | Viena horizontali **flow** nuotaika, tinklelis (grid), didelis tarpai |
| Tekstas | Minimalus; diagramos ir schema vietoj bullet perkrovos |
| Spalva | Light mode kaip default („trust“); dark — tik jei brand reikalauja |
| Sprendimas | Aiški sistema ir planas vietoj ilgos „problemų“ perkrovos |
| Procesas | Linija / 4 žingsniai — **schematiškai**, ne ilgas paragrafas |
| Sekcijų kortelės | Kur tinka: **linijinė ikona virš antraštės** (inline SVG, 24×24), tada trumpas pavadinimas ir body — mažiau teksto, daugiau skaitomumo |
| Hero fonas | Pasirinktinai: subtilus brand **chevron** raštas (`logo-pattern-light`, žema opacity, blend) — ne konkuruoja su dešiniu **inverse ženklu** (plakatas) |

### 5.3 Prieinamumas ir technika (minimaliai)

- Kontrastas, focus būsenos nuorodoms, `prefers-reduced-motion` judesiui.
- Semantinė struktūra antraštėms (viena H1).
- Greitas puslapis: mažai animacijų be naudos; optimizuoti hero.

---

## 6. Turinio šaltiniai ir spragos

| Turinys | Statusas | Veiksmas |
|---------|----------|----------|
| Case study + skaičiai | Jei yra | į atskirą mediją / pardavimo medžiagą (ne šio puslapio sekcija) |
| Be case | Privaloma alternatyva | Framework demo / simuliacija su aiškiu „tai metodikos pavyzdys“ |
| Komanda / trust | Jei plona | pabrėžti patirtį, sektorius, tipinius klientus, ne CV ilgį |

---

## 7. Ne tikslas (ribos)

- Ne multi-page informacija šiame PRD (tik vienas puslapis su anchor navigacija).
- Ne „viskas visiems“ — trečią kartą neplėsti į visas PR + marketing + priemones be sistemos rėmo ir pasitikėjimo logikos.

---

## 8. Priklausomybės ir paleidimas

- Copy finalas LT + EN redakcija (vienas tonas).
- Jei statomas stack’as vėliau: Next/Astro ir pan. — ne šio PRD dalis; čia **turinio ir konversijos specifikacija**.

---

## 9. Patvirtinimas

| Rolė | Veiksmas |
|------|----------|
| Užsakovas / produktas | Patvirtinti pozicionavimą, 3 paketų pavadinimus ir primary CTA |
| Copy | LT + EN lygis |
| Dizainas | Wireframe pagal sekcijų eilę ir „flow“ vizualą |

---

*Šis PRD pagrįstas pateikta kritika, pozicionavimu ir „ready-to-build“ struktūra; skirtas kaip vienintelis šaltinis vieno puslapio statybai ir turinio briefui.*
