export interface Messages {
  skipLink: string
  nav: {
    brand: string
    services: string
    contact: string
    cta: string
    menuOpen: string
    menuClose: string
  }
  hero: {
    tagline: string
    headingPrefix: string
    rotatingWords: readonly string[]
    description: string
    cta: string
    scroll: string
  }
  logoBar: {
    title: string
  }
  audience: {
    label: string
    heading: string
    subtitle: string
    items: readonly string[]
  }
  services: {
    label: string
    heading: string
    tagline: string
    cards: readonly { title: string; description: string }[]
  }
  process: {
    label: string
    heading: string
    steps: readonly { title: string; description: string }[]
  }
  cta: {
    label: string
    heading: string
    description: string
    button: string
    email: string
  }
  languageSwitcher: {
    switchToEs: string
    switchToEn: string
  }
  footer: {
    brand: string
    tagline: string
    studioLabel: string
    services: string
    contactLabel: string
    copyright: string
    location: string
  }
}

export const en: Messages = {
  skipLink: 'Skip to main content',
  nav: {
    brand: 'Foundry',
    services: 'Services',
    contact: 'Contact',
    cta: 'Book a Call',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    tagline: 'Boutique AI & Software Studio',
    headingPrefix: 'Forging',
    rotatingWords: [
      'Intelligence.',
      'Smarter Workflows.',
      'Digital Experiences.',
      'Your Next Product.',
    ],
    description:
      'Systems, not services. We turn complex processes into concrete solutions for companies that can\'t afford to fall behind.',
    cta: 'Book a Call',
    scroll: 'Scroll Down',
  },
  logoBar: {
    title: 'Previously at',
  },
  audience: {
    label: 'Who we work with',
    heading: 'Who do we work with?',
    subtitle: 'We don\u2019t work with everyone. We work well with companies that:',
    items: [
      'Have between 50 and 500 employees and operate in Latin America',
      'Have critical processes that depend on key people or fragile systems',
      'Want to incorporate artificial intelligence without replacing their team',
      'Need concrete results, not endless diagnostics or roadmaps',
    ],
  },
  services: {
    label: 'Services',
    heading: 'What we build',
    tagline: 'Systems over services.',
    cards: [
      {
        title: 'AI Agents for WhatsApp',
        description:
          'We automate your WhatsApp conversations with artificial intelligence. Support, sales, internal communication — the agent understands, responds, and acts without human intervention.',
      },
      {
        title: 'Systems Engineering',
        description:
          'We analyze how your company operates and build the systems you need to grow without depending on key people. Every solution is designed to last, scale, and be delegated from day one.',
      },
      {
        title: 'Enterprise AI',
        description:
          'We power artificial intelligence with your company\'s knowledge. The result is an internal knowledge base that answers with your business context, not generic information.',
      },
    ],
  },
  process: {
    label: 'Process',
    heading: 'How we work',
    steps: [
      {
        title: 'Diagnosis',
        description: 'We sit down with you, understand how your company operates, and map the real problem.',
      },
      {
        title: 'Build',
        description: 'We design and build the solution. No bureaucracy, no middlemen, focused on delivering.',
      },
      {
        title: 'Handoff',
        description: 'We leave the system running, documented, and in your team\u2019s hands. You can operate without depending on us.',
      },
    ],
  },
  cta: {
    label: 'Get in touch',
    heading: 'Let\u2019s talk.',
    description:
      'If your company has critical processes that deserve better technology, it\'s time to talk.',
    button: 'Book a Call',
    email: 'contact@foundry.ar',
  },
  languageSwitcher: {
    switchToEs: 'Cambiar a español',
    switchToEn: 'Switch to English',
  },
  footer: {
    brand: 'Foundry Labs',
    tagline: 'Senior Engineering & Systems Design',
    studioLabel: 'Studio',
    services: 'Services',
    contactLabel: 'Contact',
    copyright: `\u00A9 Foundry Labs ${new Date().getFullYear()}`,
    location: 'Based in Argentina \u00B7 Working globally',
  },
}
