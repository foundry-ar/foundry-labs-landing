import { ServiceCard } from './ServiceCard'
import type { Messages } from '@/messages'

interface Props {
  messages: Messages
  locale?: 'en' | 'es'
}

export function ServicesSection({ messages: m, locale = 'es' }: Props) {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-32 px-6 bg-surface relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div aria-hidden="true" className="h-px w-12" style={{ backgroundImage: 'var(--gradient-accent-subtle)' }} />
          <span className="text-xs uppercase tracking-widest text-gray-400">{m.services.label}</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-4">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-medium tracking-tight">{m.services.heading}</h2>
          <span className="text-sm uppercase tracking-widest text-gray-500">{m.services.tagline}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {m.services.cards.map((service, i) => {
            const href = locale === 'es'
              ? `/servicios/${service.slug}`
              : `/en/services/${service.slug}`
            return (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                slug={service.slug}
                href={href}
                index={i}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
