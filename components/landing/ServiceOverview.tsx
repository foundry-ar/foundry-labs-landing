import Link from 'next/link'
import type { Messages } from '@/messages'
import { ServicePlayer } from './ServicePlayer'

interface Props {
  slug: string
  locale: 'en' | 'es'
  messages: Messages
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
        <div className="mb-20">
          <ServicePlayer slug={slug} />
        </div>

        {/* Content grid: problem / solution / deliverable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <div
              key={section.heading}
              className="rounded-xl backdrop-blur-[10px] border border-white/80 bg-white/60 p-8"
            >
              <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-semibold mb-2 text-ink text-xl">{section.heading}</h2>
              <p className="text-gray-500 leading-relaxed mt-4 text-sm">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
