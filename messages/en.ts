export const messages = {
  nav: {
    brand: "Foundry Labs",
    contact: "Get in touch",
  },
  hero: {
    title: "We design and build critical systems",
    subtitle: "Senior-led engineering firm helping companies redesign workflows, build reliable systems, and execute complex projects.",
    ctaPrimary: "Schedule a conversation",
    ctaSecondary: "Email us",
    selectedExperienceTitle: "Selected experience",
    experienceBadges: [
      "Fintech platforms",
      "Healthcare systems",
      "Enterprise tools",
      "AI-assisted tooling",
    ],
    proofPanelTitle: "Engagement snapshot",
    typicalEngagementTitle: "Typical engagement flow",
    engagementSteps: [
      { week: "Week 1-2", description: "Discovery & process mapping" },
      { week: "Week 3-4", description: "Architecture & system design" },
      { week: "Week 5-8", description: "Implementation & iteration" },
      { week: "Week 9+", description: "Deployment & handoff" },
    ],
    keyDeliverablesTitle: "Key deliverables",
    deliverables: [
      "Technical architecture docs",
      "Working production system",
      "Knowledge transfer",
    ],
  },
  priorExperience: {
    title: "Prior experience",
    subtitle: "Work performed by founders in previous roles",
  },
  problem: {
    line1: "Most teams don't fail because of technology",
    line2: "They fail because of poor decisions upstream",
  },
  whatWeDo: {
    title: "What we do",
    subtitle: "We work with founders and leadership teams on projects where quality, correctness, and execution matter.",
    tagline: "Decisions first. Software second.",
    services: [
      {
        title: "Workflow redesign",
        description: "Designing and rebuilding operational workflows from the ground up.",
      },
      {
        title: "Critical systems",
        description: "Building internal tools and mission-critical infrastructure.",
      },
      {
        title: "Smart automation",
        description: "Automating complex processes without breaking them.",
      },
      {
        title: "Rapid delivery",
        description: "Shipping MVPs and production systems under real constraints.",
      },
      {
        title: "Project recovery",
        description: "Taking over stalled or poorly executed projects.",
      },
      {
        title: "Complex challenges",
        description: "Have a unique technical problem? Let's talk about it.",
      },
    ],
  },
  howWeWork: {
    title: "How we work",
    subtitle: "Most firms scale by adding people. We scale by making better decisions and using leverage responsibly.",
    tagline: "Technology is a multiplier, not a replacement for judgment.",
    steps: [
      {
        number: "01",
        title: "Understand deeply",
        description: "We map how work actually happens — not how it looks on slides.",
      },
      {
        number: "02",
        title: "Design first",
        description: "Architecture, constraints, failure modes, and trade-offs come before code.",
      },
      {
        number: "03",
        title: "Execute with leverage",
        description: "We use modern tooling and automation internally to move faster — without sacrificing quality.",
      },
    ],
  },
  engagementFlows: {
    title: "How work is structured",
    intro: "Every project is different. These are the most common flows depending on the type of need.",
    closingLine: "The exact flow is defined together.\nThese frameworks allow us to make clear decisions from day one.",
    tabs: [
      { id: "zero-to-one", label: "0 → 1 Systems" },
      { id: "recovery", label: "Project recovery" },
      { id: "focused", label: "Focused interventions" },
    ],
    flows: {
      "zero-to-one": {
        phases: [
          {
            name: "Discovery",
            description: "Deep understanding of the problem and operational context.",
            deliverables: [
              "Problem framing",
              "System objectives and constraints",
            ],
            validation: false,
          },
          {
            name: "Scope & specifications",
            description: "Clear definition of what gets built and what doesn't.",
            deliverables: [
              "Scope document",
              "Functional specifications",
              "Explicit out-of-scope",
            ],
            validation: true,
          },
          {
            name: "Architecture & data design",
            description: "Technical design before writing code.",
            deliverables: [
              "Architecture diagram",
              "Data model",
              "Failure modes and trade-offs",
            ],
            validation: true,
          },
          {
            name: "Implementation",
            description: "Iterative development with early validation.",
            deliverables: [
              "Working system",
              "Deployment configuration",
            ],
            validation: false,
          },
          {
            name: "Handoff or continuity",
            description: "Orderly closure or ongoing support.",
            deliverables: [
              "Documentation",
              "Knowledge transfer",
              "Optional support",
            ],
            validation: false,
          },
        ],
      },
      recovery: {
        phases: [
          {
            name: "Audit & diagnosis",
            description: "Analysis of code, architecture, and infrastructure.",
            deliverables: [
              "Diagnostic report",
              "Risk assessment",
            ],
            validation: false,
          },
          {
            name: "Stabilization",
            description: "Critical bug fixes and containment.",
            deliverables: [
              "Stabilized system",
              "Priority fixes",
            ],
            validation: false,
          },
          {
            name: "Restructuring",
            description: "Redesign where necessary.",
            deliverables: [
              "Technical plan",
              "Refactor or structural changes",
            ],
            validation: true,
          },
          {
            name: "Future plan",
            description: "Clear decisions about next steps.",
            deliverables: [
              "Realistic roadmap",
              "Explicit recommendations",
            ],
            validation: false,
          },
        ],
      },
      focused: {
        phases: [
          {
            name: "Context & focus",
            description: "Precise definition of the problem to solve.",
            deliverables: [
              "Bounded scope",
              "Clear technical objective",
            ],
            validation: false,
          },
          {
            name: "Analysis",
            description: "Deep evaluation of the specific area.",
            deliverables: [
              "Analysis document",
              "Options and trade-offs",
            ],
            validation: false,
          },
          {
            name: "Execution",
            description: "Implementation or technical guidance.",
            deliverables: [
              "Applied solution",
              "Documented changes",
            ],
            validation: false,
          },
          {
            name: "Closure",
            description: "Delivery and recommendations.",
            deliverables: [
              "Documentation",
              "Suggested next steps",
            ],
            validation: false,
          },
        ],
      },
    },
  },
  whyUs: {
    title: "Why Foundry Labs",
    subtitle: "We operate like an internal strike team — not a vendor.",
    reasons: [
      {
        title: "Senior from day one",
        description: "Only senior engineers. No juniors, no handoffs.",
      },
      {
        title: "Clear ownership",
        description: "Full accountability. No confusion about who's responsible.",
      },
      {
        title: "Fast decisions",
        description: "Direct communication. Rapid feedback loops.",
      },
      {
        title: "Lean operation",
        description: "Built to operate efficiently, not inflated with overhead.",
      },
      {
        title: "Quality first",
        description: "Long-term system quality over short-term hacks.",
      },
      {
        title: "Founder-led",
        description: "Talk to us, work with us. No middlemen.",
      },
    ],
  },
  about: {
    title: "About us",
    paragraph1: "Foundry Labs was founded by two senior engineers from Rosario, Argentina.",
    paragraph2: "Before founding the firm, we worked on early-stage products, mature platforms at scale, and complex internal systems — gaining experience in environments where correctness, reliability, and execution truly matter.",
    tagline: "We're deeply involved in every engagement. If you talk to Foundry Labs, you talk to the people doing the work.",
  },
  whoFor: {
    contextLine: "Before reaching out",
    kicker: "Engagement fit",
    title: "Who we work best with",
    goodFitTitle: "A good fit if you:",
    goodFit: [
      "Need senior judgment, not more headcount",
      "Face operational or technical complexity",
      "Care about long-term system quality",
      "Want speed without chaos",
      "Prefer working with experienced engineers",
    ],
    notFitTitle: "Not a fit if you:",
    notFit: [
      "Are looking for the cheapest option",
      "Want a large outsourced team",
      "Expect delivery without involvement",
    ],
  },
  engagement: {
    title: "How we engage",
    tagline: "No bloated teams. No unnecessary overhead.",
    models: [
      {
        title: "Fixed scope",
        description: "Clear deliverables and timelines from day one.",
      },
      {
        title: "Short, focused cycles",
        description: "Intensive engagements that deliver results quickly.",
      },
      {
        title: "Direct collaboration",
        description: "Work directly with the founders — no middlemen.",
      },
      {
        title: "No lock-in",
        description: "Flexible, project-based work. No long-term contracts.",
      },
    ],
  },
  cta: {
    title: "Let's talk",
    subtitle: "Have a complex problem to solve, or a system that needs to be built properly? We should talk.",
    ctaPrimary: "Schedule a conversation",
    ctaSecondary: "Email us",
    email: "contact@foundry.ar",
  },
  footer: {
    brand: "Foundry Labs",
    tagline: "Senior Engineering & Systems Design",
    email: "contact@foundry.ar",
    location: "Based in Argentina • Working globally",
    copyright: "Foundry Labs",
  },
} as const;

