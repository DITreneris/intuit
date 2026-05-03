export const en = {
  meta: {
    title: 'INTUIT — corporate communications you can trust',
    description:
      'Corporate communications for leadership: consistency, reputation, and pipeline—a disciplined system with visible outcomes, not chaos.',
    ogLocale: 'en_US',
  },
  nav: {
    brand: 'INTUIT',
    problem: 'Problem',
    solution: 'System',
    process: 'Process',
    proof: 'Proof',
    offers: 'Offers',
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
    eyebrow: 'Corporate communications & trust',
    title: 'Less chaos. Communication outcomes you can plan for.',
    subtitle:
      'One system connecting PR and marketing with clear process and controls—from reputation to pipeline.',
    ctaPrimary: 'Book a consultation',
    ctaSecondary: 'See how it works',
    logoAlt: 'INTUIT logo',
    diagram: {
      ariaLabel:
        'Communication system diagram: inputs, strategy layer, workflows and controls, outputs, and feedback loop',
      layerInputs: 'Channels & signals',
      layerStrategy: 'Strategy & narrative',
      layerAi: 'Workflows & controls',
      layerOutputs: 'Shipped comms & KPIs',
      loop: 'Measure & iterate',
    },
  },
  problem: {
    title: 'When communication is a pile of projects—not a system',
    bullets: [
      'Teams and channels drift apart—the narrative doesn’t line up.',
      'PR becomes reactive firefighting instead of a measured cadence.',
      'Marketing and reputation run on separate tracks—you lose leverage.',
      'Tools and quick fixes land without a clear process—risk and noise compound.',
    ],
    caption: 'Outcome: volatility and a story finance doesn’t trust.',
  },
  chaosVsSystem: {
    chaosTitle: 'Chaos',
    systemTitle: 'System',
    chaosBadge: 'Reactive',
    systemBadge: 'Cadence',
    chaosCaption:
      'Nothing resolves into one narrative—only events and campaigns.',
    systemCaption:
      'One path: standards + KPI + repetition—visible to leadership.',
  },
  solution: {
    title: 'One system: reputation, pipeline, scale',
    intro:
      'Three layers tied into one operating model—so you can measure flow, quality, and outcomes.',
    pillars: [
      {
        name: 'Corporate communication',
        outcome: 'Reputation and trust',
        points: ['Crisis and executive comms', 'Media and positioning', 'Consistency under pressure'],
      },
      {
        name: 'Marketing communication',
        outcome: 'Pipeline growth',
        points: ['Content and campaign system', 'Lead generation and nurturing', 'One narrative for the market'],
      },
      {
        name: 'Scale & operations',
        outcome: 'Scale without chaos',
        points: [
          'Approved workflow templates',
          'Repeatable rituals for content',
          'Technology (including AI) only where ownership and controls are explicit',
        ],
      },
    ],
  },
  process: {
    title: 'How it works',
    steps: [
      { name: 'Audit', detail: 'Data, audiences, risks, current rituals.' },
      { name: 'System design', detail: 'Standards, channels, KPIs, content architecture.' },
      { name: 'Implementation', detail: 'Rollout with teams—training and controls included.' },
      { name: 'Optimization', detail: 'Measurement, iteration, scaling roadmap.' },
    ],
  },
  proof: {
    title: 'Proof leadership actually understands',
    body:
      'We’ll place concrete before/after indicators here with your approval. Until then—a transparent framework demo, not vanity metrics.',
    metricsIntro: 'Typical lift after system rollout (illustrative):',
    metrics: [
      { label: 'Clarity', value: '↑', hint: 'one narrative and aligned channels' },
      { label: 'Velocity', value: '↑', hint: 'repeatable templates and rituals' },
      { label: 'Control', value: '↑', hint: 'visible KPIs and risk handling' },
    ],
    demoLabel: 'Framework demo',
    demoNote: 'Illustrative methodology—real figures shared with consent.',
  },
  offers: {
    title: 'Choose your depth',
    subtitle: 'Clear outcomes and deliverables—not a laundry list of services.',
    tiers: [
      {
        name: 'Starter',
        tag: 'Audit & plan',
        price: 'Custom',
        bullets: ['Communications and channel audit', 'Priority map and risk strip', '90-day action plan'],
        cta: 'Book the audit',
      },
      {
        name: 'System',
        tag: 'Implementation',
        price: 'Project-based',
        bullets: ['Standards and content system rollout', 'Campaign & PR cadence', 'Executive reporting templates'],
        cta: 'Discuss the system',
        highlighted: true,
      },
      {
        name: 'Scale',
        tag: 'Scale & automation',
        price: 'Scale-based',
        bullets: ['Automated workflow library', 'Content production line with QA', 'Ongoing optimization & training'],
        cta: 'Discuss scale',
      },
    ],
  },
  about: {
    title: 'Built for executives who need control',
    paragraphs: [
      'We work with decision-makers who want clarity—not another slide deck.',
      'Communication runs as a system: standards, metrics, ownership, iteration.',
      'Typical clients: B2B tech and services organizations where reputation and growth both matter.',
    ],
  },
  finalCta: {
    title: 'Let’s build a communication system that holds day-to-day.',
    subtitle: 'A short conversation—clear next steps and mutual fit.',
    cta: 'Book a consultation',
    companyName: 'Intuit Communications, MB',
    contactName: 'Nerijus Mikalajūnas',
    contactRole: 'Managing Director',
    contactPhone: '+370 685 20513',
    contactEmail: 'nerijus@intuit.lt',
    addressLine: 'Gedimino pr. 49-25, LT-01110 Vilnius',
    footnote: 'We respond within 24 hours. No obligation on the first call.',
    mailBodyTemplate:
      'Hello,\n\nA quick note for the consultation:\n\n• Company / organization:\n• Current goal:\n',
  },
  footer: {
    rights: '© Intuit Communications, MB. All rights reserved.',
    legalLine: 'Company code 305723022 · VAT LT100014758914',
  },
} as const;
