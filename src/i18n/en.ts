export const en = {
  meta: {
    title: 'INTUIT — corporate communications you can trust',
    description:
      'Corporate communications for leaders: consistency, reputation, and growth—clearly, without chaos.',
    ogLocale: 'en_US',
  },
  nav: {
    brand: 'INTUIT',
    problem: 'Problem',
    solution: 'Approach',
    process: 'Flow',
    proof: 'Outcomes',
    offers: 'Plans',
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
    eyebrow: 'Corporate communications',
    title: 'Less chaos. More clarity and outcomes.',
    subtitle: 'One narrative for PR and marketing—from message to visible results.',
    ctaPrimary: 'Get a communications insight',
    ctaSecondary: 'Four steps',
    logoAlt: 'INTUIT logo',
    diagram: {
      ariaLabel:
        'Communications map: channels, narrative, work and control, outputs, and feedback',
      layerInputs: 'Channels',
      layerStrategy: 'Narrative',
      layerAi: 'Work & control',
      layerOutputs: 'Shipped work & metrics',
      loop: 'Measurement',
      controlBadge: 'Control',
      kpiLabel: 'Metrics',
    },
  },
  trustedBy: {
    title: 'Clients who trust us',
    hint: 'Logo row — scroll horizontally (mouse / touch).',
    slots: ['Logo (1)', 'Logo (2)', 'Logo (3)', 'Logo (4)', 'Logo (5)', 'Logo (6)'],
  },
  problem: {
    title: 'When everything runs in silos',
    bullets: [
      {
        signal: 'Fragmentation',
        detail: 'Teams and channels drift—the story doesn’t line up for buyers.',
      },
      {
        signal: 'Reactive only',
        detail: 'PR is only incident response—no steady rhythm.',
      },
      {
        signal: 'Split tracks',
        detail: 'Marketing and reputation aren’t pulling together.',
      },
      {
        signal: 'Tools without rules',
        detail: 'New tools without process—more noise and risk.',
      },
    ],
    caption: 'Common outcome: volatility and a hard-to-explain impact for leadership.',
  },
  chaosVsSystem: {
    chaosTitle: 'Chaos',
    systemTitle: 'Order',
    chaosBadge: 'Reactive',
    systemBadge: 'Rhythm',
    chaosCaption: 'No single line—only campaigns and incidents.',
    systemCaption: 'One path: standards, metrics, repetition—visible to leadership.',
  },
  solution: {
    title: 'Three directions, one plan',
    intro: 'Reputation, growth, and day-to-day work—connected so flow and outcomes stay visible.',
    pillars: [
      {
        name: 'Corporate communications',
        outcome: 'Reputation and trust',
        points: ['Crisis and executive comms', 'Media and positioning'],
      },
      {
        name: 'Marketing communications',
        outcome: 'Growing demand',
        points: ['Content and campaigns', 'Leads and nurturing'],
      },
      {
        name: 'Day-to-day operations',
        outcome: 'Scale without chaos',
        points: ['Approved templates and rituals', 'Tools only where ownership is clear'],
      },
    ],
  },
  process: {
    title: 'How we work',
    steps: [
      { name: 'Review', detail: 'What exists now: audiences, risks, habits.' },
      { name: 'Plan', detail: 'Channels, metrics, content direction.' },
      { name: 'Rollout', detail: 'Teams onboard—with training and controls.' },
      { name: 'Improve', detail: 'Measure, adjust, next steps to scale.' },
    ],
  },
  proof: {
    title: 'Outcomes leadership can read',
    body:
      'We’ll add concrete before/after numbers with your approval. Until then—a transparent sample, not vanity KPIs.',
    metricsIntro: 'Typical direction after rollout (illustrative):',
    metrics: [
      { label: 'Clarity', value: '↑', hint: 'one narrative' },
      { label: 'Speed', value: '↑', hint: 'repeatable templates' },
      { label: 'Control', value: '↑', hint: 'visible metrics' },
    ],
    demoLabel: 'Sample',
    demoNote: 'Illustrative methodology—real figures only with consent.',
  },
  offers: {
    title: 'Choose the depth',
    subtitle: 'Clear outcomes—not a laundry list.',
    tiers: [
      {
        name: 'Starter',
        tag: 'Review & plan',
        price: 'Custom',
        bullets: ['Communications review', '90-day plan'],
        cta: 'Book the review',
      },
      {
        name: 'Delivery',
        tag: 'With your team',
        price: 'Project-based',
        bullets: ['Standards and content', 'Campaign & PR rhythm'],
        cta: 'Talk to us',
        highlighted: true,
      },
      {
        name: 'Scale',
        tag: 'More automated',
        price: 'Scale-based',
        bullets: ['Workflow template library', 'Content line with QA'],
        cta: 'Discuss scale',
      },
    ],
  },
  about: {
    title: 'Who it’s for',
    paragraphs: [
      'Leaders who need clarity and control—not another slide deck alone.',
      'B2B tech and services where reputation and growth both matter.',
    ],
  },
  finalCta: {
    title: 'A conversation and clear next steps',
    subtitle: 'Short call—mutual fit and what to do next.',
    cta: 'Book a consultation',
    companyName: 'Intuit Communications, MB',
    contactName: 'Nerijus Mikalajūnas',
    contactRole: 'Managing Director',
    contactPhone: '+370 685 20513',
    contactEmail: 'nerijus@intuit.lt',
    addressLine: 'Gedimino pr. 49-25, LT-01110 Vilnius',
    footnote: 'We reply within 24 hours. First call is obligation-free.',
    mailBodyTemplate:
      'Hello,\n\nA quick note for the consultation:\n\n• Company / organization:\n• Current goal:\n',
  },
  footer: {
    rights: '© Intuit Communications, MB. All rights reserved.',
    legalLine: 'Company code 305723022 · VAT LT100014758914',
  },
} as const;
