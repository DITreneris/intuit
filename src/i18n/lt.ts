export const lt = {
  meta: {
    title: 'INTUIT — komunikacija, kuria galima pasitikėti',
    description:
      'Profesionalios konsultacijos augančioms įmonėms: PR, rinkodara ir krizių komunikacija — aiškiau, be perteklinio chaoso.',
    ogLocale: 'lt_LT',
  },
  nav: {
    brand: 'INTUIT',
    problem: 'Problema',
    solution: 'Sprendimas',
    process: 'Eiga',
    proof: 'Rezultatai',
    offers: 'Planai',
    about: 'Apie',
    contact: 'Kontaktas',
    langShortLt: 'LT',
    langShortEn: 'EN',
    langSwitchToEn: 'Perjungti į anglų kalbą',
    langSwitchToLt: 'Perjungti į lietuvių kalbą',
  },
  a11y: {
    skipToMain: 'Praleisti į pagrindinį turinį',
  },
  hero: {
    eyebrow: 'Verslo komunikacija',
    title: 'Mažiau chaoso. Daugiau aiškumo. Geresni rezultatai.',
    subtitle:
      'Profesionalios konsultacijos: nuo viešųjų ryšių iki rinkodaros ar krizių valdymo. Reikia pagalbos? Pasikalbam.',
    ctaPrimary: 'Gauti konsultaciją',
    ctaSecondary: '4 žingsniai',
    logoAlt: 'INTUIT logotipas',
    diagram: {
      svgTitle: 'Komunikacijos valdymo schema',
      svgDesc:
        'Keturi vienodo dydžio žingsniai iš kairės į dešinę: kanalai, žinutė, vykdymas, rodikliai. Tvirtos linijos su rodyklėmis — nuoseklus vykdymas. Punktyrinė ortogonalinė kilpa apačioje rodo korekciją iš rodiklių atgal į žinutę; linija statiška ir silpnesnė nei pagrindinis srautas. Matomos legendos nėra — paaiškinimas virš diagramos.',
      systemStrip: 'Valdomas rezultatas',
      /** Trumpa matoma eilutė po antrašte — kilpos prasmė */
      diagramCaption:
        'Vienas nuoseklus kelias; rodikliai grąžina korekcijas į žinutę — uždara valdymo kilpa.',
      nodeHint1: 'Pasiekiamumas',
      nodeHint2: 'Vienas pasakojimas',
      nodeHint3: 'Pagal planą',
      nodeHint4: 'Vadovams matomi',
      layerInputs: 'Kanalai',
      layerStrategy: 'Žinutė',
      layerAi: 'Vykdymas',
      layerOutputs: 'Rodikliai',
    },
  },
  trustedBy: {
    /** Tekstas prieš INTUIT ženklą antraštėje (žodis INTUIT — inline logo). */
    titleBefore: 'Klientai, kurie pasitiki',
    hint: '←   →',
    /** Slankiojančios juostos sritis (ekrano skaityklėms) */
    scrollAriaLabel: 'Klientų logotipai — slinkite horizontaliai',
    /** Failai: `public/clients/`; `src` be BASE_URL. */
    logos: [
      { src: 'clients/pigu.jpg', alt: 'Pigu.lt logotipas' },
      { src: 'clients/pikas.jpg', alt: 'Pikas logotipas' },
      { src: 'clients/sirin.jpg', alt: 'Sirin logotipas' },
      { src: 'clients/phh-group.png', alt: 'PHH Group logotipas' },
      { src: 'clients/masterkey-baltics.png', alt: 'MasterKey Baltics logotipas' },
      { src: 'clients/tec.png', alt: 'TEC Consulting logotipas' },
    ],
  },
  problem: {
    title: 'Kodėl jūsų komunikacija neveikia kaip sistema',
    bullets: [
      {
        signal: 'Skirtingos žinutės klientui',
        detail: 'Komandos kalba nevienodai — pasitikėjimas krenta.',
      },
      {
        signal: 'Komunikacija tik reaguoja',
        detail: 'Nėra strategijos — prarandamas kontrolės jausmas.',
      },
      {
        signal: 'Kanalai neveikia kartu',
        detail: 'Marketingas ir reputacija nesusijungia.',
      },
      {
        signal: 'Įrankiai be sistemos',
        detail: 'Daugiau triukšmo, mažiau rezultato.',
      },
    ],
    caption: 'Skirtingos žinutės, chaotiški kanalai ir nuspėjamo rezultato nebuvimas.',
  },
  chaosVsSystem: {
    chaosTitle: 'Chaosas',
    systemTitle: 'Tvarka',
    chaosBadge: 'Reaktyviai',
    systemBadge: 'Ritmingai',
    chaosCaption: 'Nėra vienos linijos — tik kampanijos ir įvykiai.',
    systemCaption: 'Vienas kelias: taisyklės, rodikliai, kartojimas — matoma vadovams.',
  },
  solution: {
    title: 'Trys kryptys, vienas planas',
    intro: 'Reputacija, augimas ir kasdienis darbas — susieti taip, kad eiga ir rezultatas būtų matomi.',
    pillars: [
      {
        name: 'Verslo komunikacija',
        outcome: 'Reputacija ir pasitikėjimas',
        points: ['Krizės ir vadovų komunikacija', 'Žiniasklaida ir pozicija'],
      },
      {
        name: 'Rinkodaros komunikacija',
        outcome: 'Augantis susidomėjimas',
        points: ['Turinys ir kampanijos', 'Užklausos ir tęstinumas'],
      },
      {
        name: 'Kasdienė veikla',
        outcome: 'Augimas be chaoso',
        points: ['Patvirtinti šablonai ir ritualai', 'Dirbtinio intelekto įrankiai ir inovacijos'],
      },
    ],
  },
  process: {
    title: 'Kaip dirbame',
    steps: [
      { name: 'Apžvalga', detail: 'Kas yra dabar: auditorijos, rizikos, įpročiai.' },
      { name: 'Planas', detail: 'Kanalai, rodikliai, turinio kryptis.' },
      { name: 'Startas', detail: 'Komandos įsitraukia — mokymai, įrankiai, šablonai.' },
      { name: 'Tobulinimas', detail: 'Matavimas, koregavimai, augimo žingsniai.' },
    ],
  },
  proof: {
    title: 'Rodikliai, kuriuos pristatote vadovams',
    metrics: [
      { label: 'Aiškumas', value: '↑', hint: 'viena žinutė' },
      { label: 'Greitis', value: '↑', hint: 'kartojami šablonai' },
      { label: 'Kontrolė', value: '↑', hint: 'matomi rodikliai' },
    ],
    brandLabel: 'Ženklas',
    brandPatternAlt:
      'Monochromas INTUIT ženklas su geometriniu chevron raštu — stilizuotas žodžio ženklas',
  },
  offers: {
    title: 'Pasirinkite gylį',
    subtitle: 'Aiškūs rezultatai — ne paslaugų sąrašas.',
    tiers: [
      {
        name: 'Startas',
        tag: 'Apžvalga ir planas',
        price: 'Pagal poreikį',
        bullets: ['Komunikacijos apžvalga', '90 dienų planas'],
        cta: 'Gauti konsultaciją',
      },
      {
        name: 'Įgyvendinimas',
        tag: 'Kartu su komanda',
        price: 'Pagal projektą',
        bullets: [
          'Standartai ir turinys',
          'Kampanijų organizavimas ir viešųjų ryšių ciklai',
        ],
        cta: 'Aptarti įgyvendinimą',
        highlighted: true,
      },
      {
        name: 'Mastelis',
        tag: 'Šablonai ir kokybė',
        price: 'Pagal apimtį',
        bullets: ['Darbo šablonų biblioteka', 'Turinio automatizavimas ir kokybės kontrolė'],
        cta: 'Aptarti plėtrą',
      },
    ],
  },
  about: {
    title: 'Kam skirta',
    paragraphs: [
      'Vadovams, kuriems reikia aiškumo ir kontrolės — ne tik pristatymų.',
      'B2B technologijos ir paslaugos, kur svarbi reputacija ir augimas.',
    ],
  },
  finalCta: {
    title: 'Pokalbis ir kiti žingsniai',
    subtitle: 'Trumpai — ar tinkame vieni kitiems ir kokie tolimesni žingsniai.',
    cta: 'Užsisakyti konsultaciją',
    /** Kontaktų kortelės nuotrauka (`public/brand/contact-nerijus.*`) */
    contactPhotoAlt: 'Nerijus Mikalajūnas, Intuit Communications direktorius',
    companyName: 'Intuit Communications, MB',
    contactName: 'Nerijus Mikalajūnas',
    contactRole: 'direktorius',
    contactPhone: '+370 685 20513',
    contactEmail: 'nerijus@intuit.lt',
    addressLine: 'Gedimino pr. 49-25, LT-01110 Vilnius',
    footnote: 'Atsakome per 24 val. Pirmas pokalbis be įsipareigojimų.',
    mailBodyTemplate:
      'Sveiki,\n\nNorėčiau užsisakyti konsultaciją dėl komunikacijos:\n\n• Įmonė / organizacija:\n• Tikslas dabar:\n',
  },
  footer: {
    rights: '© Intuit Communications, MB. Visos teisės saugomos.',
    legalLine: 'Įm. kodas 305723022 · PVM mokėtojo kodas LT100014758914',
  },
} as const;
