import type { Messages } from './en'

export const es: Messages = {
  skipLink: 'Saltar al contenido principal',
  nav: {
    brand: 'Foundry',
    services: 'Servicios',
    contact: 'Contacto',
    cta: 'Agendar Llamada',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },
  hero: {
    tagline: 'Estudio Boutique de IA y Software',
    headingPrefix: 'Forjando',
    rotatingWords: [
      'Inteligencia.',
      'Flujos Inteligentes.',
      'Experiencias Digitales.',
      'Tu Próximo Producto.',
    ],
    description:
      'Sistemas, no servicios. Transformamos procesos complejos en soluciones concretas para empresas que no pueden permitirse quedarse atrás.',
    cta: 'Agendar Llamada',
    scroll: 'Desplazar',
  },
  logoBar: {
    title: 'Anteriormente en',
  },
  audience: {
    label: '¿Para quién?',
    heading: '¿Para quién trabajamos?',
    subtitle: 'No trabajamos con todos. Trabajamos bien con empresas que:',
    items: [
      'Tienen entre 50 y 500 empleados y operan en Latinoamérica',
      'Tienen procesos críticos que dependen de personas clave o sistemas frágiles',
      'Quieren incorporar inteligencia artificial sin reemplazar a su equipo',
      'Necesitan resultados concretos, no diagnósticos ni roadmaps interminables',
    ],
  },
  services: {
    label: 'Servicios',
    heading: 'Lo que construimos',
    tagline: 'Sistemas, no servicios.',
    cards: [
      {
        title: 'Agentes IA para WhatsApp',
        description:
          'Automatizamos tus conversaciones de WhatsApp con inteligencia artificial. Soporte, ventas, comunicación interna — el agente entiende, responde y actúa sin intervención humana.',
      },
      {
        title: 'Ingeniería de Sistemas',
        description:
          'Analizamos cómo opera tu empresa y construimos los sistemas que necesitás para crecer sin depender de personas clave. Cada solución se diseña para durar, escalar y poder delegarse desde el primer día.',
      },
      {
        title: 'IA Empresarial',
        description:
          'Potenciamos la inteligencia artificial con el conocimiento de tu empresa. El resultado es una fuente de consulta interna que responde con el contexto de tu negocio, no con información genérica.',
      },
    ],
  },
  process: {
    label: 'Proceso',
    heading: 'Cómo trabajamos',
    steps: [
      {
        title: 'Diagnóstico',
        description: 'Nos sentamos con vos, entendemos cómo opera tu empresa y mapeamos el problema real.',
      },
      {
        title: 'Construcción',
        description: 'Diseñamos y construimos la solución. Sin burocracia, sin intermediarios, con foco en entregar.',
      },
      {
        title: 'Entrega',
        description: 'Dejamos el sistema funcionando, documentado y en manos de tu equipo. Podés operar sin depender de nosotros.',
      },
    ],
  },
  cta: {
    label: 'Contacto',
    heading: 'Hablemos.',
    description:
      'Si tu empresa tiene procesos críticos que merecen mejor tecnología, es el momento de hablar.',
    button: 'Agendar Llamada',
    email: 'contact@foundry.ar',
  },
  languageSwitcher: {
    switchToEs: 'Cambiar a español',
    switchToEn: 'Switch to English',
  },
  footer: {
    brand: 'Foundry Labs',
    tagline: 'Ingeniería Senior y Diseño de Sistemas',
    studioLabel: 'Estudio',
    services: 'Servicios',
    contactLabel: 'Contacto',
    copyright: `\u00A9 Foundry Labs ${new Date().getFullYear()}`,
    location: 'Con base en Argentina \u00B7 Trabajando globalmente',
  },
}
