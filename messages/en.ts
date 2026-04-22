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
  agents: {
    hero: {
      tagline: string
      heading: string
      highlight: string
      description: string
      cta: string
      counter: {
        prefix: string
        suffix: string
      }
    }
    scenarios: {
      label: string
      heading: string
      items: readonly {
        id: string
        title: string
        metric: { value: string; label: string }
        metricComparison: string
        bullets: readonly string[]
        messages: readonly { from: 'customer' | 'agent'; text: string }[]
      }[]
    }
    calculator: {
      label: string
      heading: string
      description: string
      agentCostLabel: string
      agentCostDetail: string
      lostTodayLabel: string
      lostTodayDetail: string
      roiLabel: string
      month: string
      tabs: readonly {
        id: string
        title: string
        sliders: readonly {
          label: string
          min: number
          max: number
          step: number
          default: number
          unit: string
        }[]
        resultLabel: string
        resultDetail: string
      }[]
    }
    cta: {
      heading: string
      subheading: string
      description: string
      button: string
    }
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
  agents: {
    hero: {
      tagline: 'AI Agents for WhatsApp',
      heading: 'Every minute without a response',
      highlight: 'is an opportunity cooling down.',
      description: 'An intelligent agent that quotes, sells, supports, and schedules — 24/7, in seconds, through WhatsApp.',
      cta: 'Book a Call',
      counter: {
        prefix: '',
        suffix: 'messages waiting for a reply right now. Your agent would have handled them.',
      },
    },
    scenarios: {
      label: 'In action',
      heading: 'See how it works',
      items: [
        {
          id: 'quote',
          title: 'Instant quoting',
          metric: { value: '2s', label: 'Average response time' },
          metricComparison: 'Human average: 4 hours',
          bullets: [
            'Responds with real-time updated pricing',
            'Generates personalized proposals automatically',
            'Schedules follow-ups without human intervention',
          ],
          messages: [
            { from: 'customer' as const, text: 'Hi, how much does the premium plan cost?' },
            { from: 'agent' as const, text: 'Hello! The Premium plan is $2,500/mo and includes:\n\n✅ 24/7 support\n✅ Dedicated agent\n✅ Custom integrations\n\nWant me to send you a detailed proposal?' },
            { from: 'customer' as const, text: 'Yes please' },
            { from: 'agent' as const, text: 'Done! I just sent it to your email. I also scheduled a follow-up in 48hs. Any other questions?' },
          ],
        },
        {
          id: 'sale',
          title: 'Intelligent follow-up',
          metric: { value: '+35%', label: 'Conversion rate' },
          metricComparison: 'vs. manual follow-up',
          bullets: [
            'Detects when the client viewed the proposal',
            'Offers alternatives to handle objections',
            'Closes with a direct payment link',
          ],
          messages: [
            { from: 'agent' as const, text: 'Hi María! I noticed you viewed the proposal we sent. Do you have any questions?' },
            { from: 'customer' as const, text: 'The price is a bit high for us right now' },
            { from: 'agent' as const, text: 'I understand. We have a quarterly plan with 15% off that could work better. Want me to generate an updated quote?' },
            { from: 'customer' as const, text: 'Yes, let\'s do that' },
            { from: 'agent' as const, text: 'Perfect ✅ Here\'s your payment link:\n\n🔗 pay.stripe.com/your-company/quarterly\n\nThe team will reach out within 24 hours to start onboarding.' },
          ],
        },
        {
          id: 'support',
          title: 'Automated support',
          metric: { value: '80%', label: 'Tickets resolved without human' },
          metricComparison: 'Only complex cases are escalated',
          bullets: [
            'Checks order status in your system',
            'Provides tracking and delivery estimates',
            'Escalates only the cases that truly need it',
          ],
          messages: [
            { from: 'customer' as const, text: 'My order #4521 hasn\'t arrived yet' },
            { from: 'agent' as const, text: 'Let me check... Order #4521 shipped yesterday via Express. Tracking: XJ-2847.\n\nEstimated delivery: tomorrow before 2pm. Want me to notify you when it arrives?' },
            { from: 'customer' as const, text: 'Yes, thanks!' },
            { from: 'agent' as const, text: 'Done! You\'ll receive a notification when the carrier confirms delivery. Anything else?' },
          ],
        },
        {
          id: 'booking',
          title: 'Appointment scheduling',
          metric: { value: '0', label: 'Missed appointments from no-response' },
          metricComparison: 'Automatic confirmation and reminders',
          bullets: [
            'Shows real-time availability',
            'Confirms and sends automatic reminders',
            'No calls, no waiting, no mistakes',
          ],
          messages: [
            { from: 'customer' as const, text: 'I\'d like to book an appointment for Thursday' },
            { from: 'agent' as const, text: 'Sure! Available slots for Thursday:\n\n🕐 9:00 AM\n🕐 11:30 AM\n🕐 3:00 PM\n\nWhich one works for you?' },
            { from: 'customer' as const, text: '11:30' },
            { from: 'agent' as const, text: 'Confirmed ✅ Thursday at 11:30 AM. I\'ll send you a reminder the day before. See you then!' },
          ],
        },
      ],
    },
    calculator: {
      label: 'Calculate your case',
      heading: 'Real volume, real numbers',
      description: 'Adjust the sliders to match your operation.',
      agentCostLabel: 'Your agent',
      agentCostDetail: '/month · all included',
      lostTodayLabel: 'What you\'re losing today',
      lostTodayDetail: 'Every month without an agent',
      roiLabel: 'ROI',
      month: '/mo',
      tabs: [
        {
          id: 'sales',
          title: 'Sales',
          sliders: [
            { label: 'Conversations per month', min: 500, max: 20000, step: 500, default: 6500, unit: '' },
            { label: 'Average ticket (USD)', min: 10, max: 500, step: 10, default: 80, unit: 'USD' },
            { label: '% inquiries that convert', min: 1, max: 20, step: 1, default: 5, unit: '%' },
          ],
          resultLabel: 'Attributed sales',
          resultDetail: 'over the agent',
        },
        {
          id: 'support',
          title: 'Support',
          sliders: [
            { label: 'Tickets per day', min: 10, max: 500, step: 10, default: 80, unit: '' },
            { label: 'Cost per employee hour (USD)', min: 3, max: 30, step: 1, default: 8, unit: 'USD' },
            { label: '% resolved by agent', min: 30, max: 95, step: 5, default: 70, unit: '%' },
          ],
          resultLabel: 'Monthly savings',
          resultDetail: 'vs. manual support',
        },
        {
          id: 'booking',
          title: 'Appointments',
          sliders: [
            { label: 'Appointments per month', min: 50, max: 2000, step: 50, default: 400, unit: '' },
            { label: 'Average ticket (USD)', min: 10, max: 300, step: 10, default: 50, unit: 'USD' },
            { label: '% no-shows recovered', min: 5, max: 40, step: 5, default: 15, unit: '%' },
          ],
          resultLabel: 'Recovered revenue',
          resultDetail: 'from automated reminders',
        },
      ],
    },
    cta: {
      heading: 'Your next customer won\'t wait.',
      subheading: 'Your agent won\'t either.',
      description: 'Let\'s set up a WhatsApp agent tailored to your business.',
      button: 'Book a Call',
    },
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
