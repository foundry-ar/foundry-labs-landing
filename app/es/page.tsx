import { getMessages } from '@/lib/i18n'
import { LandingPage } from '@/components/LandingPage'
import { messages as enMessages } from '@/messages/en'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
  description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
  openGraph: {
    title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
    description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    url: 'https://foundrylabs.com/es',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
    description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
  },
  alternates: {
    canonical: 'https://foundrylabs.com/es',
    languages: {
      'en-US': 'https://foundrylabs.com',
      'es-AR': 'https://foundrylabs.com/es',
    },
  },
}

export default function SpanishHome() {
  const messages = getMessages('es') as typeof enMessages
  return <LandingPage messages={messages} locale="es" />
}

