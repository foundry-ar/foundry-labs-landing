'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  slug?: string
  href?: string
  index?: number
}

export function ServiceCard({ title, description, slug, href, index = 0 }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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

  const cardContent = (
    <>
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
        style={{ backgroundImage: 'var(--gradient-accent)' }}
      />
      <h3 className="font-semibold mb-2 text-ink text-xl">{title}</h3>
      <p className="text-gray-500 leading-relaxed mt-4 text-sm">{description}</p>
      {href && (
        <span className="inline-block mt-6 text-xs uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">
          Ver más →
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
