# Copy glosarijus — LT / EN (US)

**Versija:** 1.5  
**Data:** 2026-05-04  
**Šaltinis:** [PRD-one-page-PR-AI.md](PRD-one-page-PR-AI.md) §5.1 (tonas), §4.4 (CTA hierarchija).  
**Vienintelis tiesos šaltinis** redakcinėms LT ([src/i18n/lt.ts](../src/i18n/lt.ts)) ir EN ([src/i18n/en.ts](../src/i18n/en.ts)) atnaujinimui.

---

## 1. Tonas ir kalba

| Sritis | Sprendimas |
|--------|-----------|
| Toną nustato | Pasitikėjimas, kontrolė, outcome-first; vadovų B2B kalba (CEO, CMO). |
| Vengiame | Agentūrinių klišių („kūrybiniai sprendimai“, „unikali patirtis“); „AI-driven“ etiketės; tuščių superlaipsnių. |
| LT laikymasis | Pilnas — visos antraštės, body, CTA. |
| EN variantas | **US English** (organization, behavior, customize, optimize). |
| EN stilius | Trumpi sakiniai, aktyvi forma, ne žodis į žodį iš LT. |
| Kabutės | LT „lietuviškos“, EN “straight” arba US "double" (paliekame egzistuojantį `’` apostrofą EN failuose). |
| Brūkšniai | Ilgieji `—` su tarpais (LT/EN); EN — galima ir be tarpų pagal US stilių, bet **vienodai per visą failą**. |

### Agentams (Cursor / AI)

- **LT yra pirminė kalba** — naują ar pakeistą viešą tekstą įprastai rašykite pirma [src/i18n/lt.ts](../src/i18n/lt.ts).
- **`en.ts` — privaloma adaptacija:** tas pats pozicionavimas ir išliekamoji **prasmė** kaip LT, bet natūralus **US English** B2B tonas; **draudžiama** žodis į žodį „versti“ pirminį LT sakinių tvarką mechaniškai atkartoti EN faile.
- Pakeitus LT **meta**, **hero**, **solution** stulpelius ar kitą matomą pozicionavimą, **visada** patikrinkite ir atnaujinkite atitinkamus EN raktus tame pačiame PR žingsnyje.

---

## 2. Pagrindinis CTA (trumpa etiketė viršuje / ilgesnis apačioje)

**Trumpas tekstas** Hero ir Header (bei Offers `Starter` mygtukas) — aiški konsultacijos nuoroda; **ilgesnis** galinio bloko mygtukas ir `mailto:` `subject` išlieka formalesni (užsakymas / tema laiške).

| Vieta | LT | EN (US) |
|-------|----|---------|
| Hero (`hero.ctaPrimary`) | **Gauti konsultaciją** | **Book a consultation** |
| Header primary (= hero) | Gauti konsultaciją | Book a consultation |
| Offers `Starter` (`tiers[0].cta`) | Gauti konsultaciją | Book a consultation |
| Final CTA (`finalCta.cta`) ir `mailto:` subject | **Užsisakyti konsultaciją** | **Book a consultation** |
| Secondary (`hero.ctaSecondary`) | 4 žingsniai | Four steps |

**Komentaras:** Hero / Header / Starter — **trumpas** konsultacijos kvietimas; galiniame bloke ir el. laiške — **pilnesnė** užsakymo formulė. Paketo `Starter` bullet’uose toliau aišku, kas įeina (apžvalga, planas).

---

## 3. Paketų CTA suvienodinimas

Paraleli struktūra — visi veiksmažodžio inicijuoti, vienodas „svoris“:

| Paketas | LT cta | EN cta |
|---------|--------|--------|
| Startas / Starter | **Gauti konsultaciją** | **Book a consultation** |
| Įgyvendinimas / Delivery (`highlighted`) | **Aptarti įgyvendinimą** | **Plan the delivery** |
| Mastelis / Scale | **Aptarti plėtrą** | **Discuss growth** |

`Starter` kortelės CTA sutampa su **Hero / Header** trumpu CTA; galinis blokas naudoja `finalCta.cta` (ilgesnė etiketė + `mailto` subject).

---

## 4. Paketų etiketės (`tag`)

| Paketas | LT tag | EN tag | Pastaba |
|---------|--------|--------|---------|
| Startas / Starter | Apžvalga ir planas | Review and plan | Be santrumpos `&` LT pusėje. |
| Įgyvendinimas / Delivery | Kartu su komanda | With your team | OK kaip yra. |
| Mastelis / Scale | **Šablonai ir kokybė** | **Playbooks and quality** | Ženkliukas (`price`): LT „**Pagal apimtį**“, EN „**By scope**“. Tag atitinka sąrašo punktus (šablonų biblioteka, kokybės linija). |

---

## 5. `chaosVsSystem` badge porų suderinimas

Viena semantinė linija — **reaktyvumas vs ritmas** (sutampa su `problem.bullets[1]` „Komunikacija tik reaguoja“).

| Laukas | LT | EN |
|--------|----|----|
| `chaosBadge` | **Reaktyviai** | **Reactive** |
| `systemBadge` | Ritmingai | Cadence |
| `chaosTitle` | Chaosas | Chaos |
| `systemTitle` | Tvarka | Order |

Ankstesnė LT „Atsitiktinai“ keičiama į „Reaktyviai“ — derinasi su EN „Reactive“ ir su problemos sekcija.

---

## 6. Navigacija

| Raktas | LT | EN | Komentaras |
|--------|----|----|------------|
| `nav.solution` | Sprendimas | Approach | Sąmoninga adaptacija (EN „Solution“ skamba per konsultaciškai). |
| `nav.process` | Eiga | Flow | OK. |
| `nav.proof` | Rezultatai | Outcomes | OK. |
| `nav.offers` | Planai | Plans | OK. |
| Kiti | nepakeisti | nepakeisti | |

**Header juosta ([Header.astro](../src/components/Header.astro)):** desktop nav **be** atskiros „Kontaktas“ / „Contact“ nuorodos — į `#contact` veda primary CTA ir [Footer.astro](../src/components/Footer.astro) antrinė nuoroda (`nav.contact`); sumažinama horizontali apkrova. Nav nuorodų stilius: mažesnis šriftas (`text-[11px]`), glaudesni tarpai.

---

## 7. Terminų žodynas (LT — EN)

| LT | EN | Vartoti, kai | Nevartoti |
|----|----|---------------|-----------|
| žinutė | narrative | viename punkte; viena „naratyvo“ linija | „pranešimas“ (LT) |
| eiga | flow | sekcijų / proceso kontekste | „workflow“ EN viešame copy |
| rodikliai | metrics | vadovų skaitytojui | „KPI“ (tik kaip „vanity KPIs“ kontekste) |
| konsultacija | consultation | pagrindinis viešas CTA pažadas | „sesija“ be konteksto |
| peržiūra / apžvalga | review | paketo turinyje (`offers.tiers[0].bullets`), ne būtinai mygtuko etiketėje | „audit“ (per griežta viešame puslapyje) |
| pasitikėjimas | trust | sluoksnio vertė | — |
| reputacija | reputation | corporate communications outcome | — |
| augimas | growth | marketing comms outcome | „lead gen“ (per techninis) |
| kasdienė veikla | day-to-day operations | LT vienaskaita; EN daugiskaita | LT „kasdienė operacija“ |
| užklausos ir tęstinumas | inquiries and continuity | marketing komunikacijos stulpelis | — |
| dirbtinio intelekto įrankiai ir inovacijos | AI tools and innovation | kasdienės veiklos stulpelis | — |
| komunikacijos konsultacija | communications consultation | el. laiško kontekste (`mailto` body) | — |

**Užrakinti** (nesiliesti):

- `Intuit Communications, MB`
- `Nerijus Mikalajūnas`, `direktorius` / `Managing Director`
- `+370 685 20513`, `nerijus@intuit.lt`
- `Gedimino pr. 49-25, LT-01110 Vilnius`
- `Įm. kodas 305723022 · PVM mokėtojo kodas LT100014758914` / `Company code 305723022 · VAT LT100014758914`
- Paketų pavadinimai: `Startas / Įgyvendinimas / Mastelis` ↔ `Starter / Delivery / Scale`
- Sekcijų ID: `#problem`, `#solution`, `#process`, `#proof`, `#offers`, `#about`, `#contact`, `#clients`, `#hero`.

---

## 8. US English stiliaus taisyklės

| Sritis | Taisyklė |
|--------|---------|
| Rašyba | organization, behavior, customize, optimize, color, center. |
| Datos | nereiškiamos viešame copy (jei kada — `May 4, 2026`). |
| Oxford comma | **Naudojame** (B2B aiškumas: `Reputation, growth, and trust`). |
| Brūkšniai | `em-dash` be tarpų US stiliuje, bet visame `en.ts` palaikome **vienodą** stilių (paliekame egzistuojantį „—“ be tarpų ten, kur jau yra). |
| Apostrofai | Kai natūralu — `we’ll`, `doesn’t` (viešame B2B kontekste OK; vengiame `gonna`, `wanna`). |
| Mygtukai | Veiksmažodis pirmas (`Request`, `Plan`, `Discuss`, `Book`). |

---

## 9. Konkretūs LT taisymai (gramatika)

| Vieta | Buvo | Bus |
|-------|------|-----|
| `solution.intro` | „...kad **būtų matoma eigą ir rezultatą**.“ | „...kad **eiga ir rezultatas būtų matomi**.“ |
| `finalCta.subtitle` | „...ar **tiksime** vieni kitiems...“ | „...ar **tinkame** vieni kitiems...“ |
| `solution.pillars[2].name` | „Kasdienė **operacija**“ | „Kasdienė **veikla**“ |
| `solution.pillars[1].points[1]` | „Kontaktai ir sekimas“ | „Užklausos ir tęsinys“ |
| `solution.pillars[1].points[1]` (v2) | „Užklausos ir tęsinys“ | „Užklausos ir tęstinumas“ |
| `solution.pillars[2].points[1]` | „Įrankiai ten, kur aiški atsakomybė“ | „Dirbtinio intelekto įrankiai ir inovacijos“ |
| `process.steps[2].detail` | „Komandos įsitraukia — su mokymais ir kontrole.“ | „Komandos įsitraukia — mokymai, įrankiai, šablonai.“ |
| `proof.title` | „Rodikliai, kuriuos **supras** vadovybė“ | „Rodikliai, kuriuos kontroliuojame“ |
| `proof.body` | (buvo) | **Pašalinta** — lieka H2, metrikos, po jų valdymo diagrama (`HeroSystemDiagram`). Inverse plakatas — **Hero** (`BrandPatternPanel`; `brandPatternAlt` — `<img alt>`). |
| `proof.metricsIntro` / `proof.demoNote` | — | Pašalinta anksčiau; inverse `alt` (`brandPatternAlt`) naudojamas Hero plakatui, ne Proof apačioje. |
| `trustedBy.hint` (matoma) | … | „**←   →**“ (tik rodyklės) |
| `trustedBy.scrollAriaLabel` | — | „Klientų logotipai — slinkite horizontaliai“ (slankiojančios srities `aria-label`) |
| `hero.diagram.systemStrip` | „Kontrolė ir matavimas“ | „Valdomas rezultatas“ (diagrama — vertė, ne procesas) |

---

## 10. Konkretūs EN taisymai (stilius)

| Vieta | Buvo | Bus |
|-------|------|-----|
| `hero.ctaPrimary` | „Get a communications insight“ | „Book a consultation“ |
| `chaosVsSystem.chaosBadge` | „Reactive“ | „Reactive“ (LT pusė pasivyja: „Reaktyviai“) |
| `proof.title` | „Outcomes leadership can read“ | „Metrics we control“ |
| `proof.body` | (buvo) | Pašalinta |
| `offers.tiers[2].tag` | … | LT „Šablonai ir kokybė“; EN „Playbooks and quality“ |
| `offers.tiers[*].cta` | mišrūs | „Book a consultation“ / „Plan the delivery“ / „Discuss growth“ |
| `finalCta.cta` | „Request a communications review“ | „Book a consultation“ |
| `finalCta.subtitle` | „Short call—mutual fit and what to do next.“ | „Short call to confirm fit and define next steps.“ |
| `trustedBy.hint` (visible) | … | „**←   →**“ (arrows only) |
| `trustedBy.scrollAriaLabel` | — | „Client logos — scroll horizontally“ (`aria-label` on scroll region) |
| `hero.diagram.systemStrip` | „Control and measurement“ | „Controlled outcomes“ |
| `solution.pillars[1].points[1]` | „Leads and nurturing“ | „Inquiries and continuity“ |
| `solution.pillars[2].points[1]` | „Tools only where ownership is clear“ | „AI tools and innovation“ |
| `process.steps[2].detail` | „Teams onboard—with training and controls.“ | „Teams onboard—training, tools, and templates.“ |

---

## 11. `mailto` šablonai

LT (`finalCta.mailBodyTemplate`):

```
Sveiki,

Norėčiau užsisakyti konsultaciją dėl komunikacijos:

• Įmonė / organizacija:
• Tikslas dabar:
```

EN (`finalCta.mailBodyTemplate`):

```
Hello,

I would like to book a consultation on communications:

• Company / organization:
• Current goal:
```

---

## 12. Patikra prieš commit

- [ ] `SiteMessages` raktai ir masyvų ilgiai nepakitę (TS strict būna „žalia“).
- [ ] CTA: trumpa etiketė Hero = Header = Offers `Starter`; `finalCta.cta` = `mailto:` subject (gali būti ilgesnis už hero).
- [ ] LT antraštės netampa per ilgos hero (`text-4xl md:text-5xl`) ir sekcijose (`text-3xl md:text-4xl`).
- [ ] `pnpm build` praeina; `dist/sitemap.xml` generuojamas.
- [ ] Vizualinis smoke: Hero, ChaosVsSystem badge’ai, Offers kortelės, FinalCta `mailto:` (subject + body).
