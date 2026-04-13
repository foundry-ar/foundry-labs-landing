'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import type { Messages } from '@/messages'
import { ServicePlayer } from './ServicePlayer'

interface Props {
  slug: string
  locale: 'en' | 'es'
  messages: Messages
}

function OverviewCard({ section, index }: { section: { heading: string; description: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [nearCenter, setNearCenter] = useState(false)

  // Entrance animation
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

  // Mobile: detect card closest to viewport center for border-top
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
      className="group relative rounded-xl backdrop-blur-[10px] border border-gray-200/80 bg-white/80 p-8 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-[opacity,transform] duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? undefined : 'translateY(16px)',
        transitionDelay: visible ? `${index * 100}ms` : '0ms',
      }}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 ease-out ${
          nearCenter ? 'opacity-100' : 'opacity-0'
        } md:opacity-100`}
        style={{ backgroundImage: 'var(--gradient-accent)' }}
      />
      <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h2 className="font-semibold mb-2 text-ink text-xl">{section.heading}</h2>
      <p className="text-gray-500 leading-relaxed mt-4 text-sm">{section.description}</p>
    </div>
  )
}

export function ServiceOverview({ slug, locale, messages: m }: Props) {
  const overview = m.serviceOverviews.items.find((s) => s.slug === slug)
  if (!overview) return null

  const backHref = locale === 'es' ? '/#services' : '/en/#services'

  const sections = [overview.problem, overview.solution, overview.deliverable]

  return (
    <div className="py-32 px-6 bg-surface relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          href={backHref}
          className="inline-block text-sm text-gray-400 hover:text-gray-600 transition-colors mb-12"
        >
          {m.serviceOverviews.backLabel}
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div aria-hidden="true" className="h-px w-12" style={{ backgroundImage: 'var(--gradient-accent-subtle)' }} />
            <span className="text-xs uppercase tracking-widest text-gray-400">{m.services.label}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            {overview.heading}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed font-light max-w-2xl">
            {overview.subtitle}
          </p>
        </div>

        {/* Video */}
        <div className="mb-10 md:mb-20">
          <ServicePlayer slug={slug} />
        </div>

        {/* Content grid: problem / solution / deliverable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <OverviewCard key={section.heading} section={section} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
