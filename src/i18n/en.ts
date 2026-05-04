export const en = {
  meta: {
    title: 'INTUIT — communications you can trust',
    description:
      'Business communications for leaders: consistency, reputation, and growth—clearly, without chaos.',
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
    eyebrow: 'Business communications',
    title: 'Less chaos. Better results.',
    subtitle: 'Professional communications—from public relations to marketing.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'Four steps',
    logoAlt: 'INTUIT logo',
    diagram: {
      svgTitle: 'Communications control diagram',
      svgDesc:
        'Controlled communications outcome: channels, narrative, execution, and metrics; metrics loop back into the narrative',
      systemStrip: 'Controlled outcomes',
      layerInputs: 'Channels',
      layerStrategy: 'Narrative',
      layerAi: 'Execution',
      layerOutputs: 'Metrics',
    },
  },
  trustedBy: {
    title: 'Clients who trust us',
    hint: '←   →',
    scrollAriaLabel: 'Client logos — scroll horizontally',
    logos: [
      { src: 'clients/pigu.jpg', alt: 'Pigu.lt logo' },
      { src: 'clients/pikas.jpg', alt: 'Pikas logo' },
      { src: 'clients/sirin.jpg', alt: 'Sirin logo' },
    ],
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
        detail: 'PR shows up only for incidents—there is no steady rhythm.',
      },
      {
        signal: 'Split tracks',
        detail: 'Marketing and reputation aren’t pulling in the same direction.',
      },
      {
        signal: 'Tools without rules',
        detail: 'New tools without process—more noise, more risk.',
      },
    ],
    caption: 'A common outcome: volatility and impact that’s hard to explain to the board.',
  },
  chaosVsSystem: {
    chaosTitle: 'Chaos',
    systemTitle: 'Order',
    chaosBadge: 'Reactive',
    systemBadge: 'Rhythm',
    chaosCaption: 'No single line—just campaigns and incidents.',
    systemCaption: 'One path: standards, metrics, and repetition—visible to leadership.',
  },
  solution: {
    title: 'Three directions, one plan',
    intro: 'Reputation, growth, and day-to-day work—connected so the flow and the outcome stay visible.',
    pillars: [
      {
        name: 'Business communications',
        outcome: 'Reputation and trust',
        points: ['Crisis and executive comms', 'Media relations and positioning'],
      },
      {
        name: 'Marketing communications',
        outcome: 'Steady demand',
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
    title: 'Metrics leaders can act on',
    body:
      'We add concrete before / after numbers once you’ve approved them. Until then—a transparent methodology sample, not vanity KPIs.',
    metricsIntro: 'Typical direction after rollout (illustrative):',
    metrics: [
      { label: 'Clarity', value: '↑', hint: 'one narrative' },
      { label: 'Speed', value: '↑', hint: 'repeatable templates' },
      { label: 'Control', value: '↑', hint: 'visible metrics' },
    ],
    demoLabel: 'Sample',
    demoNote: 'Illustrative methodology—real figures only with your consent.',
  },
  offers: {
    title: 'Choose the depth',
    subtitle: 'Clear outcomes—not a laundry list.',
    tiers: [
      {
        name: 'Starter',
        tag: 'Review and plan',
        price: 'Custom',
        bullets: ['Communications review', '90-day plan'],
        cta: 'Book a call',
      },
      {
        name: 'Delivery',
        tag: 'With your team',
        price: 'Project-based',
        bullets: ['Standards and content', 'Campaign and PR rhythm'],
        cta: 'Plan the delivery',
        highlighted: true,
      },
      {
        name: 'Scale',
        tag: 'Operating at scale',
        price: 'Scale-based',
        bullets: ['Workflow template library', 'Content line with QA'],
        cta: 'Discuss scale',
      },
    ],
  },
  about: {
    title: 'Who it’s for',
    paragraphs: [
      'Leaders who need clarity and control—not another slide deck.',
      'B2B tech and services where reputation and growth both matter.',
    ],
  },
  finalCta: {
    title: 'A conversation and clear next steps',
    subtitle: 'Short call to confirm fit and define next steps.',
    cta: 'Book a consultation',
    companyName: 'Intuit Communications, MB',
    contactName: 'Nerijus Mikalajūnas',
    contactRole: 'Managing Director',
    contactPhone: '+370 685 20513',
    contactEmail: 'nerijus@intuit.lt',
    addressLine: 'Gedimino pr. 49-25, LT-01110 Vilnius',
    footnote: 'We reply within 24 hours. The first call is obligation-free.',
    mailBodyTemplate:
      'Hello,\n\nI would like to book a consultation on communications:\n\n• Company / organization:\n• Current goal:\n',
  },
  footer: {
    rights: '© Intuit Communications, MB. All rights reserved.',
    legalLine: 'Company code 305723022 · VAT LT100014758914',
  },
} as const;
