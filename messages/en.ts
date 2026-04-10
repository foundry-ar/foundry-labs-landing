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
  services: {
    label: string
    heading: string
    tagline: string
    cards: readonly { title: string; description: string }[]
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
      'We turn complex processes into concrete solutions. Software and artificial intelligence for companies that can\'t afford to fall behind.',
    cta: 'Book a Call',
    scroll: 'Scroll Down',
  },
  logoBar: {
    title: 'Previously at',
  },
  services: {
    label: 'Services',
    heading: 'What we build',
    tagline: 'Systems over services.',
    cards: [
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
      {
        title: 'AI Agents for WhatsApp',
        description:
          'We automate your WhatsApp conversations with artificial intelligence. Support, sales, internal communication — the agent understands, responds, and acts without human intervention.',
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
