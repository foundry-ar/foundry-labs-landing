'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  slug?: string
  href?: string
  index?: number
  ctaLabel?: string
}

export function ServiceCard({ title, description, slug, href, index = 0, ctaLabel }: ServiceCardProps) {
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

  const cardContent = (
    <>
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 ease-out ${
          nearCenter ? 'opacity-100' : 'opacity-0'
        } md:opacity-0 md:group-hover:opacity-100`}
        style={{ backgroundImage: 'var(--gradient-accent)' }}
      />
      <h3 className="font-semibold mb-2 text-ink text-xl">{title}</h3>
      <p className="text-gray-500 leading-relaxed mt-4 text-sm">{description}</p>
      {href && ctaLabel && (
        <span className="inline-flex items-center gap-1.5 mt-6 text-xs uppercase tracking-widest text-[#B8632E] group-hover:text-[#9A4F1E] transition-colors">
          {ctaLabel}
          <span
            className={`inline-block ${
              nearCenter ? 'animate-nudge' : ''
            } md:animate-none md:group-hover:animate-nudge`}
          >
            &rarr;
          </span>
        </span>
      )}
    </>
  )

  const className = "group relative block rounded-xl backdrop-blur-[10px] border border-white/80 no-underline transition-[transform,background-color,box-shadow,border-color,opacity] duration-300 ease-out overflow-hidden bg-white/60 hover:-translate-y-[5px] hover:bg-white/90 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:border-[#ddd] p-8"

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? undefined : 'translateY(16px)',
    transitionDelay: visible ? `${index * 100}ms` : '0ms',
  }

  if (href) {
    return (
      <div ref={ref} style={style}>
        <Link href={href} className={className}>
          {cardContent}
        </Link>
      </div>
    )
  }

  return (
    <div ref={ref} className={className} style={style}>
      {cardContent}
    </div>
  )
}
