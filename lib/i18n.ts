import { messages as enMessages } from '@/messages/en';
import { messages as esMessages } from '@/messages/es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function getMessages(locale: Locale) {
  switch (locale) {
    case 'es':
      return esMessages;
    case 'en':
    default:
      return enMessages;
  }
}

export function getLocaleMetadata(locale: Locale) {
  const messages = getMessages(locale);
  
  if (locale === 'es') {
    return {
      title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
      description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
      openGraph: {
        title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
        description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
        locale: 'es_AR',
        alternateLocale: 'en_US',
      },
    };
  }
  
  // Default English
  return {
    title: 'Foundry Labs | Senior Engineering & Systems Design',
    description: 'Senior-led engineering firm helping companies redesign workflows, build reliable systems, and execute complex projects.',
    openGraph: {
      title: 'Foundry Labs | Senior Engineering & Systems Design',
      description: 'Senior-led engineering firm helping companies redesign workflows, build reliable systems, and execute complex projects.',
      locale: 'en_US',
      alternateLocale: 'es_AR',
    },
  };
}


