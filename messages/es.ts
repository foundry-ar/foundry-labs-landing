export const messages = {
  nav: {
    brand: "Foundry Labs",
    contact: "Contactanos",
  },
  hero: {
    title: "Diseñamos y construimos sistemas críticos",
    subtitle: "Equipo de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.",
    ctaPrimary: "Agendá una conversación",
    ctaSecondary: "Escribinos",
    selectedExperienceTitle: "Experiencia seleccionada",
    experienceBadges: [
      "Plataformas fintech",
      "Sistemas de salud",
      "Herramientas empresariales",
      "Herramientas asistidas por IA",
    ],
    proofPanelTitle: "Resumen de trabajo",
    typicalEngagementTitle: "Flujo de trabajo típico",
    engagementSteps: [
      { week: "Semana 1-2", description: "Descubrimiento y mapeo de procesos" },
      { week: "Semana 3-4", description: "Arquitectura y diseño de sistemas" },
      { week: "Semana 5-8", description: "Implementación e iteración" },
      { week: "Semana 9+", description: "Despliegue y transferencia" },
    ],
    keyDeliverablesTitle: "Entregables principales",
    deliverables: [
      "Documentación de arquitectura técnica",
      "Sistema en producción funcionando",
      "Transferencia de conocimiento",
    ],
  },
  priorExperience: {
    title: "Experiencia previa",
    subtitle: "Trabajo realizado por los fundadores en roles anteriores",
  },
  problem: {
    line1: "La mayoría de los equipos no fallan por la tecnología",
    line2: "Fallan por malas decisiones previas",
  },
  whatWeDo: {
    title: "Qué hacemos",
    subtitle: "Trabajamos con fundadores y equipos de liderazgo en proyectos donde la calidad, la precisión y la ejecución importan.",
    tagline: "Decisiones primero. Software después.",
    services: [
      {
        title: "Rediseño de flujos",
        description: "Diseñar y reconstruir flujos de trabajo operativos desde cero.",
      },
      {
        title: "Sistemas críticos",
        description: "Construir herramientas internas e infraestructura crítica.",
      },
      {
        title: "Automatización inteligente",
        description: "Automatizar procesos complejos sin romperlos.",
      },
      {
        title: "Entrega rápida",
        description: "Lanzar MVPs y sistemas en producción bajo restricciones reales.",
      },
      {
        title: "Recuperación de proyectos",
        description: "Hacerse cargo de proyectos estancados o mal ejecutados.",
      },
      {
        title: "Desafíos complejos",
        description: "¿Tenés un problema técnico único? Hablemos de eso.",
      },
    ],
  },
  howWeWork: {
    title: "Cómo trabajamos",
    subtitle: "La mayoría de los equipos escalan sumando gente. Nosotros escalamos tomando mejores decisiones y usando el apalancamiento de forma responsable.",
    tagline: "La tecnología es un multiplicador, no un reemplazo del criterio.",
    steps: [
      {
        number: "01",
        title: "Entender en profundidad",
        description: "Mapeamos cómo funciona el trabajo realmente — no cómo se ve en las presentaciones.",
      },
      {
        number: "02",
        title: "Diseñar primero",
        description: "Arquitectura, restricciones, modos de fallo y compromisos vienen antes del código.",
      },
      {
        number: "03",
        title: "Ejecutar con apalancamiento",
        description: "Usamos herramientas modernas y automatización internamente para movernos más rápido — sin sacrificar calidad.",
      },
    ],
  },
  engagementFlows: {
    title: "Cómo se estructura el trabajo",
    intro: "Cada proyecto es distinto. Estos son los flujos más comunes según el tipo de necesidad.",
    closingLine: "El flujo exacto se define en conjunto.\nEstos esquemas nos permiten tomar decisiones claras desde el primer día.",
    tabs: [
      { id: "zero-to-one", label: "Sistemas 0 → 1" },
      { id: "recovery", label: "Recuperación de proyectos" },
      { id: "focused", label: "Intervenciones puntuales" },
    ],
    flows: {
      "zero-to-one": {
        phases: [
          {
            name: "Discovery",
            description: "Entendimiento profundo del problema y del contexto operativo.",
            deliverables: [
              "Problem framing",
              "Objetivos y restricciones del sistema",
            ],
            validation: false,
          },
          {
            name: "Alcance y especificaciones",
            description: "Definición clara de qué se construye y qué no.",
            deliverables: [
              "Documento de alcance",
              "Especificaciones funcionales",
              "Fuera de alcance explícito",
            ],
            validation: true,
          },
          {
            name: "Arquitectura y diseño de datos",
            description: "Diseño técnico antes de escribir código.",
            deliverables: [
              "Diagrama de arquitectura",
              "Modelo de datos",
              "Modos de fallo y trade-offs",
            ],
            validation: true,
          },
          {
            name: "Implementación",
            description: "Desarrollo iterativo con validaciones tempranas.",
            deliverables: [
              "Sistema funcional",
              "Configuración de despliegue",
            ],
            validation: false,
          },
          {
            name: "Transferencia o continuidad",
            description: "Cierre ordenado o acompañamiento continuo.",
            deliverables: [
              "Documentación",
              "Transferencia de conocimiento",
              "Soporte opcional",
            ],
            validation: false,
          },
        ],
      },
      recovery: {
        phases: [
          {
            name: "Auditoría y diagnóstico",
            description: "Análisis de código, arquitectura e infraestructura.",
            deliverables: [
              "Informe de diagnóstico",
              "Evaluación de riesgos",
            ],
            validation: false,
          },
          {
            name: "Estabilización",
            description: "Corrección de fallos críticos y contención.",
            deliverables: [
              "Sistema estabilizado",
              "Fixes prioritarios",
            ],
            validation: false,
          },
          {
            name: "Reestructuración",
            description: "Rediseño donde es necesario.",
            deliverables: [
              "Plan técnico",
              "Refactor o cambios estructurales",
            ],
            validation: true,
          },
          {
            name: "Plan a futuro",
            description: "Decisiones claras sobre próximos pasos.",
            deliverables: [
              "Roadmap realista",
              "Recomendaciones explícitas",
            ],
            validation: false,
          },
        ],
      },
      focused: {
        phases: [
          {
            name: "Contexto y foco",
            description: "Definición precisa del problema a resolver.",
            deliverables: [
              "Alcance acotado",
              "Objetivo técnico claro",
            ],
            validation: false,
          },
          {
            name: "Análisis",
            description: "Evaluación profunda del área específica.",
            deliverables: [
              "Documento de análisis",
              "Opciones y trade-offs",
            ],
            validation: false,
          },
          {
            name: "Ejecución",
            description: "Implementación o acompañamiento técnico.",
            deliverables: [
              "Solución aplicada",
              "Cambios documentados",
            ],
            validation: false,
          },
          {
            name: "Cierre",
            description: "Entrega y recomendaciones.",
            deliverables: [
              "Documentación",
              "Próximos pasos sugeridos",
            ],
            validation: false,
          },
        ],
      },
    },
  },
  whyUs: {
    title: "Por qué Foundry Labs",
    subtitle: "Operamos como un equipo interno de élite — no como un proveedor.",
    reasons: [
      {
        title: "Seniority desde el día uno",
        description: "Solo ingenieros senior. Sin juniors, sin tercerización.",
      },
      {
        title: "Responsabilidad clara",
        description: "Total responsabilidad. Sin confusión sobre quién responde.",
      },
      {
        title: "Decisiones rápidas",
        description: "Comunicación directa. Ciclos de feedback rápidos.",
      },
      {
        title: "Operación eficiente",
        description: "Construidos para operar de forma eficiente, sin sobrecostos inflados.",
      },
      {
        title: "Calidad primero",
        description: "Calidad de sistemas a largo plazo sobre atajos a corto plazo.",
      },
      {
        title: "Liderados por fundadores",
        description: "Hablá con nosotros, trabajá con nosotros. Sin intermediarios.",
      },
    ],
  },
  about: {
    title: "Sobre nosotros",
    paragraph1: "Foundry Labs fue fundada por dos ingenieros senior de Rosario, Argentina.",
    paragraph2: "Antes de fundar el equipo, trabajamos en productos early-stage, plataformas maduras a escala, y sistemas internos complejos — ganando experiencia en entornos donde la corrección, la confiabilidad y la ejecución realmente importan.",
    tagline: "Estamos profundamente involucrados en cada proyecto. Si hablás con Foundry Labs, hablás con las personas que hacen el trabajo.",
  },
  whoFor: {
    contextLine: "Antes de contactarnos",
    kicker: "Ajuste de colaboración",
    title: "Con quién trabajamos mejor",
    goodFitTitle: "Buen ajuste si:",
    goodFit: [
      "Necesitás criterio senior, no más personal",
      "Enfrentás complejidad operativa o técnica",
      "Te importa la calidad del sistema a largo plazo",
      "Querés velocidad sin caos",
      "Preferís trabajar directamente con ingenieros experimentados",
    ],
    notFitTitle: "No es un ajuste si:",
    notFit: [
      "Buscás la opción más barata",
      "Querés un equipo grande tercerizado",
      "Esperás entrega sin involucramiento",
    ],
  },
  engagement: {
    title: "Cómo colaboramos",
    tagline: "Sin equipos inflados. Sin sobrecostos innecesarios.",
    models: [
      {
        title: "Alcance fijo",
        description: "Entregables y tiempos claros desde el día uno.",
      },
      {
        title: "Ciclos cortos y enfocados",
        description: "Colaboraciones intensivas que entregan resultados rápidamente.",
      },
      {
        title: "Colaboración directa",
        description: "Trabajá directamente con los fundadores — sin intermediarios.",
      },
      {
        title: "Sin compromisos largos",
        description: "Trabajo flexible por proyecto. Sin contratos a largo plazo.",
      },
    ],
  },
  cta: {
    title: "Hablemos",
    subtitle: "¿Tenés un problema complejo que resolver, o un sistema que debe construirse correctamente? Deberíamos hablar.",
    ctaPrimary: "Agendá una conversación",
    ctaSecondary: "Escribinos",
    email: "contact@foundry.ar",
  },
  footer: {
    brand: "Foundry Labs",
    tagline: "Ingeniería Senior y Diseño de Sistemas",
    email: "contact@foundry.ar",
    location: "Basados en Argentina • Trabajando globalmente",
    copyright: "Foundry Labs",
  },
} as const;
