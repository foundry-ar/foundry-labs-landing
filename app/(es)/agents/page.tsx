import { NavBar, Footer, DotGrid } from '@/components/landing'
import { AgentsHero, AgentScenarios, AgentsCalculator, AgentsCTA } from '@/components/agents'
import { getMessages } from '@/lib/i18n'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agentes IA para WhatsApp | Foundry Labs',
  description:
    'Automatizá tus conversaciones de WhatsApp con inteligencia artificial. Cotizaciones, ventas, soporte y turnos — 24/7, en segundos.',
  alternates: {
    canonical: 'https://foundry.ar/agents',
    languages: {
      'es-AR': 'https://foundry.ar/agents',
      'en-US': 'https://foundry.ar/en/agents',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    url: 'https://foundry.ar/agents',
    siteName: 'Foundry Labs',
    title: 'Agentes IA para WhatsApp | Foundry Labs',
    description:
      'Automatizá tus conversaciones de WhatsApp con inteligencia artificial. Cotizaciones, ventas, soporte y turnos — 24/7, en segundos.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentes IA para WhatsApp | Foundry Labs',
    description: 'Un agente inteligente que cotiza, vende, da soporte y agenda — 24/7 por WhatsApp.',
  },
}

export default function AgentsPage() {
  const m = getMessages('es')

  return (
    <div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
      >
        {m.skipLink}
      </a>
      <DotGrid />
      <NavBar messages={m} locale="es" />
      <main id="main">
        <AgentsHero messages={m} />
        <AgentScenarios messages={m} />
        <AgentsCalculator messages={m} />
        <AgentsCTA messages={m} />
      </main>
      <Footer locale="es" messages={m} />
    </div>
  )
}
