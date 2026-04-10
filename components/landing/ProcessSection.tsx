import type { Messages } from '@/messages'

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
            <div
              key={step.title}
              className="relative rounded-xl backdrop-blur-[10px] border border-white/80 bg-white/60 p-8"
            >
              <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-semibold mb-2 text-ink text-xl">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed mt-4 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
