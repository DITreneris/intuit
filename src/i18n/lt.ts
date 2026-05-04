export const lt = {
  meta: {
    title: 'INTUIT — komunikacija, kuria galima pasitikėti',
    description:
      'Verslo komunikacija vadovams: nuoseklumas, reputacija ir augimas — aiškiai, be chaoso.',
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
    title: 'Mažiau chaoso. Geresni rezultatai.',
    subtitle: 'Profesionali komunikacija — nuo viešųjų ryšių iki rinkodaros.',
    ctaPrimary: 'Gauti konsultaciją',
    ctaSecondary: '4 žingsniai',
    logoAlt: 'INTUIT logotipas',
    diagram: {
      svgTitle: 'Komunikacijos valdymo schema',
      svgDesc:
        'Keturi žingsniai: kanalai, žinutė, vykdymas ir rodikliai. Nuoseklus vykdymas eina iš kairės į dešinę; punktyrinė linija rodo korekciją pagal rodiklius atgal į žinutę.',
      systemStrip: 'Valdomas rezultatas',
      /** Trumpa matoma eilutė po antrašte — kilpos prasmė */
      diagramCaption:
        'Rodikliai grąžina korekcijas į žinutę — uždara valdymo kilpa.',
      legendForward: 'Nuoseklus vykdymas',
      legendLoop: 'Korekcija pagal rodiklius',
      nodeHint1: 'Kur pasiekiate auditoriją',
      nodeHint2: 'Vieningas paaiškinimas',
      nodeHint3: 'Darbas pagal planą',
      nodeHint4: 'Matomas poveikis vadovybei',
      layerInputs: 'Kanalai',
      layerStrategy: 'Žinutė',
      layerAi: 'Vykdymas',
      layerOutputs: 'Rodikliai',
    },
  },
  trustedBy: {
    title: 'Klientai, kurie mumis pasitiki',
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
    systemBadge: 'Ritmu',
    chaosCaption: 'Nėra vienos linijos — tik kampanijos ir įvykiai.',
    systemCaption: 'Vienas kelias: taisyklės, rodikliai, kartojimas — matoma vadovybei.',
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
        points: ['Turinys ir kampanijos', 'Užklausos ir tęsinys'],
      },
      {
        name: 'Kasdienė veikla',
        outcome: 'Augimas be chaoso',
        points: ['Patvirtinti šablonai ir ritualai', 'Įrankiai ten, kur aiški atsakomybė'],
      },
    ],
  },
  process: {
    title: 'Kaip dirbame',
    steps: [
      { name: 'Apžvalga', detail: 'Kas yra dabar: auditorijos, rizikos, įpročiai.' },
      { name: 'Planas', detail: 'Kanalai, rodikliai, turinio kryptis.' },
      { name: 'Paleidimas', detail: 'Komandos įsitraukia — su mokymais ir kontrole.' },
      { name: 'Tobulinimas', detail: 'Matavimas, koregavimai, augimo žingsniai.' },
    ],
  },
  proof: {
    title: 'Rodikliai, kuriuos pristatote vadovybei',
    body:
      'Konkrečius prieš / po skaičius pridėsime gavę jūsų sutikimą. Kol renkame — skaidrus metodikos pavyzdys, be dirbtinių KPI.',
    metricsIntro: 'Tipinė kryptis po įvedimo (iliustracija):',
    metrics: [
      { label: 'Aiškumas', value: '↑', hint: 'viena žinutė' },
      { label: 'Greitis', value: '↑', hint: 'kartojami šablonai' },
      { label: 'Kontrolė', value: '↑', hint: 'matomi rodikliai' },
    ],
    demoLabel: 'Pavyzdys',
    demoNote: 'Metodikos iliustracija — tikri skaičiai tik su sutikimu.',
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
        bullets: ['Standartai ir turinys', 'Kampanijų ir PR ritmas'],
        cta: 'Aptarti įgyvendinimą',
        highlighted: true,
      },
      {
        name: 'Mastelis',
        tag: 'Mastelis su sistema',
        price: 'Pagal mastelį',
        bullets: ['Darbo šablonų biblioteka', 'Turinio linija su kokybe'],
        cta: 'Aptarti mastelį',
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
