# Copy glosarijus — LT / EN (US)

**Versija:** 1.4  
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

**Trumpas tekstas** Hero ir Header (bei Offers `Starter` mygtukas) — mažiau perkrovos juostoje ir heroje; **ilgesnis** galinio bloko mygtukas ir `mailto:` `subject` išlieka profesionalesnis.

| Vieta | LT | EN (US) |
|-------|----|---------|
| Hero (`hero.ctaPrimary`) | **Gauti konsultaciją** | **Book a call** |
| Header primary (= hero) | Gauti konsultaciją | Book a call |
| Offers `Starter` (`tiers[0].cta`) | Gauti konsultaciją | Book a call |
| Final CTA (`finalCta.cta`) ir `mailto:` subject | **Užsisakyti konsultaciją** | **Book a consultation** |
| Secondary (`hero.ctaSecondary`) | 4 žingsniai | Four steps |

**Komentaras:** konsultacinė pozicija išlieka; viršuje ir „Startas“ kortelėje — **trumpa** veiksmažodinė etiketė; apačioje ir el. laiške — **pilnesnis** pažadas. Paketo `Starter` bullet’uose toliau aišku, kas įeina (apžvalga, planas).

---

## 3. Paketų CTA suvienodinimas

Paraleli struktūra — visi veiksmažodžio inicijuoti, vienodas „svoris“:

| Paketas | LT cta | EN cta |
|---------|--------|--------|
| Startas / Starter | **Gauti konsultaciją** | **Book a call** |
| Įgyvendinimas / Delivery (`highlighted`) | **Aptarti įgyvendinimą** | **Plan the delivery** |
| Mastelis / Scale | **Aptarti mastelį** | **Discuss scale** |

`Starter` kortelės CTA sutampa su **Hero / Header** trumpu CTA; galinis blokas naudoja `finalCta.cta` (ilgesnė etiketė + `mailto` subject).

---

## 4. Paketų etiketės (`tag`)

| Paketas | LT tag | EN tag | Pastaba |
|---------|--------|--------|---------|
| Startas / Starter | Apžvalga ir planas | Review and plan | Be santrumpos `&` LT pusėje. |
| Įgyvendinimas / Delivery | Kartu su komanda | With your team | OK kaip yra. |
| Mastelis / Scale | Mastelis su sistema | **Operating at scale** | EN buvo `More automated` — keičiame į neutraliau B2B; LT taip pat sušvelniname „daugiau automatizuota“. |

---

## 5. `chaosVsSystem` badge porų suderinimas

Viena semantinė linija — **reaktyvumas vs ritmas** (sutampa su `problem.bullets[1]` „Tik reakcija“).

| Laukas | LT | EN |
|--------|----|----|
| `chaosBadge` | **Reaktyviai** | **Reactive** |
| `systemBadge` | Ritmu | Rhythm |
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
| užklausos ir tęsinys | leads and nurturing | sales/marketing kontekste | LT „kontaktai ir sekimas“ (neaišku) |
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
| `problem.bullets[2].detail` | „Rinkodara ir reputacija **ne dirba** kartu.“ | „Rinkodara ir reputacija **nedirba** kartu.“ |
| `solution.intro` | „...kad **būtų matoma eigą ir rezultatą**.“ | „...kad **eiga ir rezultatas būtų matomi**.“ |
| `finalCta.subtitle` | „...ar **tiksime** vieni kitiems...“ | „...ar **tinkame** vieni kitiems...“ |
| `solution.pillars[2].name` | „Kasdienė **operacija**“ | „Kasdienė **veikla**“ |
| `solution.pillars[1].points[1]` | „Kontaktai ir sekimas“ | „Užklausos ir tęsinys“ |
| `proof.title` | „Rodikliai, kuriuos **supras** vadovybė“ | „Rodikliai, kuriuos pristatote vadovybei“ |
| `proof.body` | „...**prieš/po** skaičiai...“ | „...**prieš / po** skaičius...“ + sakinio perfrazavimas |
| `trustedBy.hint` (matoma) | … | „**←   →**“ (tik rodyklės) |
| `trustedBy.scrollAriaLabel` | — | „Klientų logotipai — slinkite horizontaliai“ (slankiojančios srities `aria-label`) |
| `hero.diagram.systemStrip` | „Kontrolė ir matavimas“ | „Valdomas rezultatas“ (diagrama — vertė, ne procesas) |

---

## 10. Konkretūs EN taisymai (stilius)

| Vieta | Buvo | Bus |
|-------|------|-----|
| `hero.ctaPrimary` | „Get a communications insight“ | „Book a consultation“ |
| `chaosVsSystem.chaosBadge` | „Reactive“ | „Reactive“ (LT pusė pasivyja: „Reaktyviai“) |
| `proof.title` | „Outcomes leadership can read“ | „Metrics leaders can act on“ |
| `proof.body` | „...with your approval...“ | „...once you’ve approved them...“ (natūraliau) |
| `offers.tiers[2].tag` | „More automated“ | „Operating at scale“ |
| `offers.tiers[*].cta` | mišrūs | „Book a consultation“ / „Plan the delivery“ / „Discuss scale“ |
| `finalCta.cta` | „Request a communications review“ | „Book a consultation“ |
| `finalCta.subtitle` | „Short call—mutual fit and what to do next.“ | „Short call to confirm fit and define next steps.“ |
| `trustedBy.hint` (visible) | … | „**←   →**“ (arrows only) |
| `trustedBy.scrollAriaLabel` | — | „Client logos — scroll horizontally“ (`aria-label` on scroll region) |
| `hero.diagram.systemStrip` | „Control and measurement“ | „Controlled outcomes“ |

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
