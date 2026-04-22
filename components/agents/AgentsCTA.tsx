'use client'

import { useEffect, useRef, useState } from 'react'
import { usePostHog } from '@posthog/react'
import type { Messages } from '@/messages'
import { CalendlyButton } from '@/components/landing/CalendlyButton'

export function AgentsCTA({ messages: m }: { messages: Messages }) {
  const posthog = usePostHog()
  const a = m.agents.cta
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-36 px-6 bg-surface overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 100%, var(--color-brand-navy), transparent 70%)',
        }}
      />

      <div
        className={`relative max-w-4xl mx-auto text-center transition-[opacity,transform] duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-2">
          {a.heading}
        </h2>
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 md:mb-8 text-gray-400">
          {a.subheading}
        </h2>

        <p className="text-lg md:text-2xl text-gray-500 leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto">
          {a.description}
        </p>

        <CalendlyButton
          className="inline-block bg-black text-white px-8 py-3 text-lg rounded-full font-medium transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-none focus-ring"
          onClick={() => posthog.capture('cta_clicked', { location: 'agents_page' })}
        >
          {a.button}
        </CalendlyButton>

        <p className="mt-6 text-sm text-gray-500">{m.cta.email}</p>

        <div
          aria-hidden="true"
          className="mt-16 mx-auto w-24 h-px"
          style={{ backgroundImage: 'var(--gradient-accent-subtle)' }}
        />
      </div>
    </section>
  )
}
