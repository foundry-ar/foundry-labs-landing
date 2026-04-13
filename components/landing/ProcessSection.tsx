'use client'

import { useRef, useEffect, useState } from 'react'
import type { Messages } from '@/messages'

function ProcessCard({ step, index }: { step: { title: string; description: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [nearCenter, setNearCenter] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNearCenter(entry.isIntersecting)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative rounded-xl backdrop-blur-[10px] border border-white/80 bg-white/60 p-8 overflow-hidden transition-[opacity,transform] duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? undefined : 'translateY(16px)',
        transitionDelay: visible ? `${index * 100}ms` : '0ms',
      }}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 ease-out ${
          nearCenter ? 'opacity-100' : 'opacity-0'
        } md:opacity-0 md:group-hover:opacity-100`}
        style={{ backgroundImage: 'var(--gradient-accent)' }}
      />
      <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="font-semibold mb-2 text-ink text-xl">{step.title}</h3>
      <p className="text-gray-500 leading-relaxed mt-4 text-sm">{step.description}</p>
    </div>
  )
}

export function ProcessSection({ messages: m }: { messages: Messages }) {
  return (
    <section aria-labelledby="process-heading" className="py-32 px-6 bg-surface relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div aria-hidden="true" className="h-px w-12" style={{ backgroundImage: 'var(--gradient-accent-subtle)' }} />
          <span className="text-xs uppercase tracking-widest text-gray-400">{m.process.label}</span>
        </div>

        <h2 id="process-heading" className="text-3xl md:text-4xl font-medium tracking-tight mb-14">
          {m.process.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {m.process.steps.map((step, i) => (
            <ProcessCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
