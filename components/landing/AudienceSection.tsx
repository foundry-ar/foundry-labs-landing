import type { Messages } from '@/messages'

export function AudienceSection({ messages: m }: { messages: Messages }) {
  return (
    <section aria-labelledby="audience-heading" className="py-32 px-6 bg-surface relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div aria-hidden="true" className="h-px w-12" style={{ backgroundImage: 'var(--gradient-accent-subtle)' }} />
          <span className="text-xs uppercase tracking-widest text-gray-400">{m.audience.label}</span>
        </div>

        <h2 id="audience-heading" className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
          {m.audience.heading}
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed font-light max-w-2xl mb-10">
          {m.audience.subtitle}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {m.audience.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl backdrop-blur-[10px] border border-white/80 bg-white/60 p-6"
            >
              <span aria-hidden="true" className="mt-1.5 block h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundImage: 'var(--gradient-accent)' }} />
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
