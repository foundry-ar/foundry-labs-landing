'use client'

import { useEffect, useRef, useState } from 'react'
import { usePostHog } from '@posthog/react'
import type { Messages } from '@/messages'
import { CalendlyButton } from './CalendlyButton'

export function CTASection({ messages: m }: { messages: Messages }) {
  const posthog = usePostHog()
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
    <section ref={sectionRef} id="contact" className="relative py-36 px-6 bg-surface overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 100%, var(--color-brand-purple), transparent 70%)',
        }}
      />

      <div className={`relative max-w-4xl mx-auto text-center transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-200" />
          <span className="text-xs uppercase tracking-widest text-gray-400">{m.cta.label}</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-200" />
        </div>

        <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight mb-8">
          {m.cta.heading}
        </h2>

        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto">
          {m.cta.description}
        </p>

        <CalendlyButton
          className="inline-block bg-black text-white px-8 py-3 text-lg rounded-full font-medium transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-none focus-ring"
          onClick={() => posthog.capture('cta_clicked', { location: 'cta_section' })}
        >
          {m.cta.button}
        </CalendlyButton>

        <p className="mt-6 text-sm text-gray-500">
          {m.cta.email}
        </p>

        <div aria-hidden="true" className="mt-16 mx-auto w-24 h-px" style={{ backgroundImage: 'var(--gradient-accent-subtle)' }} />
      </div>
    </section>
  )
}
