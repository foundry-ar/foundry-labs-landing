import { ServiceCard } from './ServiceCard'
import type { Messages } from '@/messages'

export function ServicesSection({ messages: m }: { messages: Messages }) {
  return (
    <section id="services" className="py-24 px-6 bg-surface relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-gradient-to-r from-purple-300 to-pink-300" />
          <span className="text-xs uppercase tracking-widest text-gray-400">{m.services.label}</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{m.services.heading}</h2>
          <span className="text-sm uppercase tracking-widest text-gray-500">{m.services.tagline}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {m.services.cards.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
