export const en = {
  meta: {
    title: 'INTUIT — communications you can trust',
    description:
      'Senior communications consulting, crisis leadership, and strategic decisions for growing teams—clear execution, less noise.',
    ogLocale: 'en_US',
    ogImageAlt:
      'INTUIT — communications you can trust. Intuition is earned judgment—not a guess. Consulting, crisis, and strategy.',
  },
  nav: {
    brand: 'INTUIT',
    about: 'About',
    contact: 'Contact',
    langShortLt: 'LT',
    langShortEn: 'EN',
    langSwitchToEn: 'Switch to English',
    langSwitchToLt: 'Switch to Lithuanian',
  },
  a11y: {
    skipToMain: 'Skip to main content',
  },
  hero: {
    eyebrow: 'Business communications',
    title: "Intuition isn't a gut feeling. It's judgment earned from experience.",
    subtitleLead: 'Senior consulting on communications, crisis leadership, and strategic decisions.',
    subtitleBullets: [],
    subtitleClosing: '',
    ctaPrimary: 'Book a consultation',
    ctaSecondary: 'Four steps',
    logoAlt: 'INTUIT logo',
    /** Inverse panel image in Hero (`BrandPatternPanel`). */
    brandPatternAlt:
      'Monochrome INTUIT wordmark with geometric chevron pattern—stylized brand lockup',
    diagram: {
      svgTitle: 'Communications control diagram',
      svgDesc:
        'Four steps left to right: channels, narrative (second step emphasized with soft shadow and tint), execution, and metrics. Thick accent flow connectors sit only in the gaps between cards with arrow markers; on mobile the same idea runs vertically. How metrics feed back into the narrative is explained in text below the diagram.',
      systemStrip: 'From message to KPIs',
      diagramCaption: 'Four steps in one flow; metrics feed corrections back into the narrative.',
      diagramLoopLabel: 'Iteration: metrics → narrative',
      nodeHint1: 'Reach',
      nodeHint2: 'One aligned message',
      nodeHint3: 'According to plan',
      nodeHint4: 'Visible KPIs',
      layerInputs: 'Channels',
      layerStrategy: 'Narrative',
      layerAi: 'Execution',
      layerOutputs: 'Metrics',
    },
  },
  trustedBy: {
    /** Copy adapts to logo replacing spelled brand name; not literal LT translation. */
    titleBefore: 'Clients who trust',
    /** Leave empty to hide the line below the heading. */
    hint: '',
    /** Accessible name for the logo grid region. */
    logosRegionAriaLabel: 'Client logos',
    logos: [
      { src: 'clients/masterkey-baltics.png', alt: 'MasterKey Baltics logo' },
      { src: 'clients/montis-magia.png', alt: 'Montis Magia logo' },
      { src: 'clients/phh-group.png', alt: 'PHH GROUP logo' },
      { src: 'clients/pigu.jpg', alt: 'Pigu.lt logo' },
      { src: 'clients/pikas.jpg', alt: 'Pikas logo' },
      { src: 'clients/sirin.jpg', alt: 'Sirin logo' },
      { src: 'clients/tec.png', alt: 'TEC Consulting logo' },
    ],
  },
  solution: {
    title: 'Three directions, one plan',
    intro: 'Reputation, growth, continuity—we monitor and adjust.',
    pillars: [
      {
        name: 'Business communications',
        outcome: 'Reputation and trust',
        points: [
          'Growth and business-success communications',
          'Media relations and positioning',
          'Crisis management and leadership communications',
        ],
      },
      {
        name: 'Marketing communications',
        outcome: 'Stronger engagement',
        points: [
          'Content and campaigns',
          'Reaching new target audiences',
          'Events and social media',
        ],
      },
      {
        name: 'Day-to-day operations',
        outcome: 'Sustainable growth',
        points: [
          'Approved templates and rituals',
          'Organizational (internal) communications',
          'AI tools and innovation',
        ],
      },
    ],
  },
  process: {
    title: 'How we work',
    intro: 'A clear sequence—from where you are today to steady refinement.',
    steps: [
      { name: 'Overview', detail: 'What exists now: audiences, risks, and habits.' },
      { name: 'Plan', detail: 'Channels, metrics, narrative direction, and positioning.' },
      { name: 'Execution', detail: 'Teams onboard—training, tools, and templates.' },
      { name: 'Refinement', detail: 'Measurement, course corrections, and growth moves.' },
    ],
  },
  offers: {
    title: 'Service packages',
    subtitle:
      'From audit and planning through day-to-day communications support to crisis-management strategies.',
    tiers: [
      {
        name: 'Starter',
        tag: 'Kickoff',
        price: 'Custom',
        bullets: ['Audit', 'Communications plan'],
        cta: 'Book a consultation',
      },
      {
        name: 'Ongoing support',
        tag: 'Retained support',
        price: 'By agreement',
        bullets: [
          'Audit',
          'Communications plan',
          'Press releases',
          'Spokesperson coverage',
          'Advisory sessions',
        ],
        cta: 'Discuss ongoing support',
        highlighted: true,
      },
      {
        name: 'Crisis management',
        tag: 'Rapid response',
        price: 'Situation-based',
        bullets: [
          'Analysis',
          'Communications and action plan',
          'Execution and communications management',
        ],
        cta: 'Discuss crisis response',
      },
    ],
  },
  about: {
    title: 'Who it’s for',
    paragraphs: [
      'Leaders who need clarity and control—not another slide deck.',
      'Businesses where reputation and growth opportunities matter.',
    ],
  },
  finalCta: {
    title: 'A conversation and clear next steps',
    subtitle: 'A 15-minute call to check fit and agree what we’d do next.',
    cta: 'Book a consultation',
    contactPhotoAlt: 'Nerijus Mikalajūnas, Managing Director, Intuit Communications',
    companyName: 'Intuit Communications, MB',
    contactName: 'Nerijus Mikalajūnas',
    contactRole: 'Managing Director',
    contactPhone: '+370 685 20513',
    contactEmail: 'nerijus@intuit.lt',
    addressLine: 'Gedimino pr. 49-25, LT-01110 Vilnius',
    mailBodyTemplate:
      'Hello,\n\nI would like to book a consultation on communications:\n\n• Company / organization:\n• Current goal:\n',
  },
  footer: {
    rights: '© Intuit Communications, MB. All rights reserved.',
    legalLine: 'Company code 305723022 · VAT LT100014758914',
  },
} as const;
