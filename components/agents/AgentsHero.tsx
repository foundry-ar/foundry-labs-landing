'use client'

import { useEffect, useRef, useState } from 'react'
import { GradientText } from '@/components/landing/GradientText'
import { CalendlyButton } from '@/components/landing/CalendlyButton'
import type { Messages } from '@/messages'

function ScrollIndicator({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mql.matches) return

    const onScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 200)
      el.style.opacity = String(opacity)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest uppercase text-gray-500 opacity-80">
      {label}
      <div className="mt-2 w-5 h-5 border border-gray-200 rounded-full flex items-center justify-center animate-float">
        <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
          <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export function AgentsHero({ messages: m }: { messages: Messages }) {
  const a = m.agents.hero
  const [count, setCount] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(7)
      return
    }

    // Increment by 1 every 1.5-3 seconds (random)
    const tick = () => {
      setCount((c) => c + 1)
      const next = 1500 + Math.random() * 1500
      intervalRef.current = setTimeout(tick, next)
    }
    // First message appears after 1s
    intervalRef.current = setTimeout(tick, 1000)
    return () => { if (intervalRef.current) clearTimeout(intervalRef.current) }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 bg-surface overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 30%, var(--color-brand-navy), transparent 60%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-[fade-in_0.6s_ease-out_both]">
          <div
            aria-hidden="true"
            className="h-px w-12"
            style={{ backgroundImage: 'var(--gradient-accent-subtle)' }}
          />
          <span className="text-xs uppercase tracking-widest text-gray-400">{a.tagline}</span>
          <div
            aria-hidden="true"
            className="h-px w-12"
            style={{ backgroundImage: 'var(--gradient-accent-subtle)' }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 animate-[fade-in_0.8s_ease-out_0.1s_both]">
          {a.heading}
          <br />
          <GradientText className="font-serif italic">{a.highlight}</GradientText>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto mb-10 animate-[fade-in_0.8s_ease-out_0.3s_both]">
          {a.description}
        </p>

        {/* CTA */}
        <div className="animate-[fade-in_0.8s_ease-out_0.5s_both]">
          <CalendlyButton className="inline-block bg-black text-white px-8 py-3 text-lg rounded-full font-medium transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-none focus-ring">
            {a.cta}
          </CalendlyButton>
        </div>

        {/* Live counter */}
        <div className="mt-16 animate-[fade-in_1s_ease-out_0.8s_both]">
          <div className="inline-flex items-center gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-full bg-white/60 backdrop-blur-[10px] border border-white/80 max-w-[90vw]">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs md:text-sm text-gray-600">
              {a.counter.prefix}
              <span className="font-semibold text-ink tabular-nums mx-1">{count}</span>
              {a.counter.suffix}
            </span>
          </div>
        </div>
      </div>

      <ScrollIndicator label={m.hero.scroll} />
    </section>
  )
}
