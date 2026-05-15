export const lt = {
  meta: {
    title: 'INTUIT — komunikacija, kuria galima pasitikėti',
    description:
      'Profesionalios konsultacijos, krizių valdymas ir strateginiai sprendimai augančioms įmonėms — aiškiai ir be perteklinio chaoso.',
    ogLocale: 'lt_LT',
    ogImageAlt:
      'INTUIT — komunikacija, kuria galima pasitikėti. Intuicija nėra nuojauta — tai sukaupta patirtis. Konsultacijos, krizės ir strateginiai sprendimai.',
  },
  nav: {
    brand: 'INTUIT',
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
    title: 'Intuicija nėra nuojauta. Tai – sukauptos patirties visuma.',
    subtitleLead: 'Profesionalios konsultacijos, krizių valdymas ir strateginiai sprendimai.',
    subtitleBullets: [],
    subtitleClosing: '',
    ctaPrimary: 'Gauti konsultaciją',
    ctaSecondary: '4 žingsniai',
    logoAlt: 'INTUIT logotipas',
    /** Inverse plakato paveikslas Hero (`BrandPatternPanel`). */
    brandPatternAlt:
      'Monochromas INTUIT ženklas su geometriniu chevron raštu — stilizuotas žodžio ženklas',
    diagram: {
      svgTitle: 'Komunikacijos valdymo schema',
      svgDesc:
        'Keturi žingsniai iš kairės į dešinę: kanalai, žinutė (antras žingsnis pabrėžtas švelniu šešėliu ir foniniu tint), vykdymas, rodikliai. Storesnis solidus vykdymo srautas pieštas tik tarpų ruožuose tarp kortelių su rodyklėmis; mobilėje tas pats vertikaliai. Iteracija (rodikliai į žinutę) — tekstas po schema.',
      systemStrip: 'Nuo žinutės iki KPI',
      diagramCaption: 'Keturi žingsniai vienu srautu; rodikliai grąžina korekcijas į žinutę.',
      /** Matoma antrinė etiketė — kilpos prasmė be ilgo caption */
      diagramLoopLabel: 'Iteracija: rodikliai → žinutė',
      nodeHint1: 'Pasiekiamumas',
      nodeHint2: 'Vieninga žinutė',
      nodeHint3: 'Pagal planą',
      nodeHint4: 'Matomi KPI',
      layerInputs: 'Kanalai',
      layerStrategy: 'Žinutė',
      layerAi: 'Vykdymas',
      layerOutputs: 'Rodikliai',
    },
  },
  trustedBy: {
    /** Tekstas prieš INTUIT ženklą antraštėje (žodis INTUIT — inline logo). */
    titleBefore: 'Klientai, kurie pasitiki',
    /** Palikite tuščią — hint eilutė po antrašte nerodoma. */
    hint: '',
    /** Logotipų tinklo sritis (ekrano skaityklėms). */
    logosRegionAriaLabel: 'Klientų logotipai',
    /** Failai: `public/clients/`; `src` be BASE_URL. */
    logos: [
      { src: 'clients/masterkey-baltics.png', alt: 'MasterKey Baltics logotipas' },
      { src: 'clients/montis-magia.png', alt: 'Montis Magia logotipas' },
      { src: 'clients/phh-group.png', alt: 'PHH Group logotipas' },
      { src: 'clients/pigu.jpg', alt: 'Pigu.lt logotipas' },
      { src: 'clients/pikas.jpg', alt: 'Pikas logotipas' },
      { src: 'clients/sirin.jpg', alt: 'Sirin logotipas' },
      { src: 'clients/tec.png', alt: 'TEC Consulting logotipas' },
    ],
  },
  solution: {
    title: 'Trys kryptys, vienas planas',
    intro: 'Reputacija, augimas, tęstinumas — stebime ir koreguojame.',
    pillars: [
      {
        name: 'Verslo komunikacija',
        outcome: 'Reputacija ir pasitikėjimas',
        points: [
          'Plėtros ir verslo sėkmės komunikacija',
          'Bendravimas su žiniasklaida ir pozicija',
          'Krizių valdymas ir vadovų komunikacija',
        ],
      },
      {
        name: 'Rinkodaros komunikacija',
        outcome: 'Augantis susidomėjimas',
        points: [
          'Turinys ir kampanijos',
          'Naujų tikslinių grupių įtraukimas',
          'Renginiai ir socialiniai tinklai',
        ],
      },
      {
        name: 'Kasdienė veikla',
        outcome: 'Tvarus augimas',
        points: [
          'Patvirtinti šablonai ir ritualai',
          'Organizacinė (vidinė) komunikacija',
          'Dirbtinio intelekto įrankiai ir inovacijos',
        ],
      },
    ],
  },
  process: {
    title: 'Kaip dirbame',
    intro: 'Aiškūs etapai — nuo dabartinės situacijos iki nuolatinio tobulinimo.',
    steps: [
      { name: 'Apžvalga', detail: 'Kas yra dabar: auditorijos, rizikos, įpročiai.' },
      { name: 'Planas', detail: 'Kanalai, rodikliai, turinio kryptis ir pozicionavimas.' },
      { name: 'Vykdymas', detail: 'Komandos įsitraukia — mokymai, įrankiai, šablonai.' },
      { name: 'Tobulinimas', detail: 'Matavimas, koregavimai, augimo žingsniai.' },
    ],
  },
  offers: {
    title: 'Paslaugų paketai',
    subtitle:
      'Nuo audito ir plano iki kasdienio komunikacijos palaikymo ir krizių valdymo strategijų.',
    tiers: [
      {
        name: 'Startas',
        tag: 'Įėjimas',
        price: 'Pagal poreikį',
        bullets: ['Auditas', 'Komunikacijos planas'],
        cta: 'Gauti konsultaciją',
      },
      {
        name: 'Palaikymas',
        tag: 'Kasdienė priežiūra',
        price: 'Pagal sutartį',
        bullets: [
          'Auditas',
          'Komunikacijos planas',
          'Pranešimai spaudai',
          'Atstovavimas',
          'Konsultacijos',
        ],
        cta: 'Aptarti palaikymą',
        highlighted: true,
      },
      {
        name: 'Krizių valdymas',
        tag: 'Įvykis ir rizika',
        price: 'Pagal situaciją',
        bullets: [
          'Analizė',
          'Komunikacijos ir veiksmų planas',
          'Veiksmų įgyvendinimas ir komunikacijos valdymas',
        ],
        cta: 'Aptarti krizių valdymą',
      },
    ],
  },
  about: {
    title: 'Kam skirta',
    paragraphs: [
      'Vadovams, kuriems reikia aiškumo ir kontrolės — ne tik pristatymų.',
      'Verslams, kuriems svarbu reputacija ir augimo galimybės.',
    ],
  },
  finalCta: {
    title: 'Pokalbis ir kiti žingsniai',
    subtitle: '15 min. pokalbis pasitikrinti, ar tinkame vieni kitiems ir ką darytume toliau.',
    cta: 'Užsisakyti konsultaciją',
    /** Kontaktų kortelės nuotrauka (`public/brand/contact-nerijus.*`) */
    contactPhotoAlt: 'Nerijus Mikalajūnas, Intuit Communications direktorius',
    companyName: 'Intuit Communications, MB',
    contactName: 'Nerijus Mikalajūnas',
    contactRole: 'direktorius',
    contactPhone: '+370 685 20513',
    contactEmail: 'nerijus@intuit.lt',
    addressLine: 'Gedimino pr. 49-25, LT-01110 Vilnius',
    mailBodyTemplate:
      'Sveiki,\n\nNorėčiau užsisakyti konsultaciją dėl komunikacijos:\n\n• Įmonė / organizacija:\n• Tikslas dabar:\n',
  },
  footer: {
    rights: '© Intuit Communications, MB. Visos teisės saugomos.',
    legalLine: 'Įm. kodas 305723022 · PVM mokėtojo kodas LT100014758914',
  },
} as const;
