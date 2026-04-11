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
    cta: string
    cards: readonly { title: string; description: string; slug: string }[]
  }
  serviceOverviews: {
    backLabel: string
    items: readonly {
      slug: string
      heading: string
      subtitle: string
      problem: { heading: string; description: string }
      solution: { heading: string; description: string }
      deliverable: { heading: string; description: string }
    }[]
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
    cta: 'Learn more',
    cards: [
      {
        title: 'AI Agents for WhatsApp',
        slug: 'whatsapp-agents',
        description:
          'We automate your WhatsApp conversations with artificial intelligence. Support, sales, internal communication — the agent understands, responds, and acts without human intervention.',
      },
      {
        title: 'Systems Engineering',
        slug: 'systems-engineering',
        description:
          'We analyze how your company operates and build the systems you need to grow without depending on key people. Every solution is designed to last, scale, and be delegated from day one.',
      },
      {
        title: 'Enterprise AI',
        slug: 'enterprise-ai',
        description:
          'We power artificial intelligence with your company\'s knowledge. The result is an internal knowledge base that answers with your business context, not generic information.',
      },
    ],
  },
  serviceOverviews: {
    backLabel: '\u2190 Back to services',
    items: [
      {
        slug: 'whatsapp-agents',
        heading: 'AI Agents for WhatsApp',
        subtitle: 'Your business, always available. AI that understands, responds, and resolves \u2014 24/7 on WhatsApp.',
        problem: {
          heading: 'The problem',
          description: 'Your team spends hours answering the same questions on WhatsApp. Customers wait, conversations get lost, and there\u2019s no traceability of what was said or promised.',
        },
        solution: {
          heading: 'What we build',
          description: 'An AI agent connected to your systems that answers on WhatsApp with real data: order status, prices, availability, support. It understands context, handles follow-ups, and knows when to escalate to a human.',
        },
        deliverable: {
          heading: 'What you get',
          description: 'A WhatsApp channel that operates autonomously. Fewer tickets, faster response times, and a complete log of every interaction for your team to review.',
        },
      },
      {
        slug: 'systems-engineering',
        heading: 'Systems Engineering',
        subtitle: 'We turn fragile, people-dependent processes into systems that scale and can be delegated.',
        problem: {
          heading: 'The problem',
          description: 'Critical processes run on spreadsheets, verbal agreements, and key people. When someone leaves or gets sick, the operation breaks.',
        },
        solution: {
          heading: 'What we build',
          description: 'Custom software that digitizes and automates your core workflows. From quoting to production to delivery \u2014 every step is traceable, measurable, and operable by anyone on your team.',
        },
        deliverable: {
          heading: 'What you get',
          description: 'A system that runs your operation independently of specific individuals. Documented, tested, and ready for your team to own from day one.',
        },
      },
      {
        slug: 'enterprise-ai',
        heading: 'Enterprise AI',
        subtitle: 'Artificial intelligence powered by your company\u2019s knowledge \u2014 not generic information.',
        problem: {
          heading: 'The problem',
          description: 'Your company\u2019s knowledge lives scattered across documents, emails, and people\u2019s heads. Finding the right answer takes hours and depends on who you ask.',
        },
        solution: {
          heading: 'What we build',
          description: 'An internal AI assistant trained on your company\u2019s documents, policies, and history. It answers questions with your business context and cites its sources.',
        },
        deliverable: {
          heading: 'What you get',
          description: 'A knowledge base that any team member can query in natural language. Faster onboarding, consistent answers, and institutional knowledge that doesn\u2019t walk out the door.',
        },
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
