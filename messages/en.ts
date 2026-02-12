export interface Messages {
  skipLink: string
  nav: {
    brand: string
    services: string
    contact: string
    cta: string
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
      'Senior engineers who embed directly with founders to design, build, and ship AI-driven products.',
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
        title: 'AI Integration',
        description:
          'Modernize your existing tools and workflows with AI that actually fits. We augment your team — not replace them.',
      },
      {
        title: 'Web & Landing Pages',
        description:
          'High-performance, conversion-focused web experiences. Design, motion, and code — all in-house.',
      },
      {
        title: 'Software Architecture',
        description:
          'Scalable, maintainable systems for companies that need to build right the first time. From MVPs to production infrastructure.',
      },
      {
        title: 'Workflow Automation',
        description:
          'Automate the grunt work. We connect your tools, kill the repetitive tasks, and free your team to do real work.',
      },
    ],
  },
  cta: {
    label: 'Get in touch',
    heading: 'Let\u2019s talk.',
    description:
      'Have a system that needs to be built properly, or a process ready for AI? We should talk.',
    button: 'Book a Call',
  },
  footer: {
    brand: 'Foundry Labs',
    tagline: 'Senior Engineering & Systems Design',
    studioLabel: 'Studio',
    services: 'Services',
    contactLabel: 'Contact',
    copyright: '\u00A9 Foundry Labs 2026',
    location: 'Based in Argentina \u00B7 Working globally',
  },
}
