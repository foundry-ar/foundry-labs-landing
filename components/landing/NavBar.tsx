'use client'

import { usePostHog } from '@posthog/react'
import type { Messages } from '@/messages'
import { CalendlyButton } from './CalendlyButton'

export function NavBar({ messages: m }: { messages: Messages }) {
  const posthog = usePostHog()
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-2">
          <svg role="img" viewBox="0 0 32 32" className="w-7 h-7" fill="none">
            <title>Foundry</title>
            <rect x="4" y="4" width="14" height="14" stroke="#1a1a1a" strokeWidth="2"/>
            <rect x="14" y="14" width="14" height="14" stroke="#1a1a1a" strokeWidth="2"/>
          </svg>
          <span className="font-semibold text-sm tracking-tight">{m.nav.brand}</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-black focus-visible:text-black focus-ring rounded-sm transition-colors duration-300 ease-out">{m.nav.services}</a>
          <a href="#contact" className="hover:text-black focus-visible:text-black focus-ring rounded-sm transition-colors duration-300 ease-out">{m.nav.contact}</a>
        </div>

        <CalendlyButton
          className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] focus-ring"
          onClick={() => posthog.capture('cta_clicked', { location: 'navbar' })}
        >
          {m.nav.cta}
        </CalendlyButton>
      </div>
    </nav>
  )
}
