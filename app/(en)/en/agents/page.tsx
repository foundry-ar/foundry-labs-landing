import { NavBar, Footer, DotGrid } from '@/components/landing'
import { AgentsHero, AgentScenarios, AgentsCalculator, AgentsCTA } from '@/components/agents'
import { getMessages } from '@/lib/i18n'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agents for WhatsApp | Foundry Labs',
  description:
    'Automate your WhatsApp conversations with AI. Quotes, sales, support, and scheduling — 24/7, in seconds.',
  alternates: {
    canonical: 'https://foundry.ar/en/agents',
    languages: {
      'en-US': 'https://foundry.ar/en/agents',
      'es-AR': 'https://foundry.ar/agents',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_AR',
    url: 'https://foundry.ar/en/agents',
    siteName: 'Foundry Labs',
    title: 'AI Agents for WhatsApp | Foundry Labs',
    description:
      'Automate your WhatsApp conversations with AI. Quotes, sales, support, and scheduling — 24/7, in seconds.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for WhatsApp | Foundry Labs',
    description: 'An intelligent agent that quotes, sells, supports, and schedules — 24/7 on WhatsApp.',
  },
}

export default function AgentsPage() {
  const m = getMessages('en')

  return (
    <div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
      >
        {m.skipLink}
      </a>
      <DotGrid />
      <NavBar messages={m} locale="en" />
      <main id="main">
        <AgentsHero messages={m} />
        <AgentScenarios messages={m} />
        <AgentsCalculator messages={m} />
        <AgentsCTA messages={m} />
      </main>
      <Footer locale="en" messages={m} />
    </div>
  )
}
