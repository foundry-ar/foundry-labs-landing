'use client'

import Link from 'next/link'
import { AnimatedCard } from './AnimatedCard'

interface ServiceCardProps {
  title: string
  description: string
  slug?: string
  href?: string
  index?: number
  ctaLabel?: string
}

export function ServiceCard({ title, description, slug, href, index = 0, ctaLabel }: ServiceCardProps) {
  const cardContent = (
    <>
      <h3 className="font-semibold mb-2 text-ink text-xl">{title}</h3>
      <p className="text-gray-500 leading-relaxed mt-4 text-sm">{description}</p>
      {href && ctaLabel && (
        <span className="inline-flex items-center gap-1.5 mt-6 text-xs uppercase tracking-widest text-[#B8632E] group-hover:text-[#9A4F1E] transition-colors">
          {ctaLabel}
          <span className="inline-block md:animate-none md:group-hover:animate-nudge">
            &rarr;
          </span>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <AnimatedCard index={index}>
        <Link href={href} className="absolute inset-0" aria-label={title} />
        {cardContent}
      </AnimatedCard>
    )
  }

  return (
    <AnimatedCard index={index}>
      {cardContent}
    </AnimatedCard>
  )
}
