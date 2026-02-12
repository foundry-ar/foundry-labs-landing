import type { Messages } from '@/messages'

export function CTASection({ messages: m }: { messages: Messages }) {
  return (
    <section id="contact" className="relative py-32 px-6 bg-surface overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 100%, #764ba2, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
          <span className="text-xs uppercase tracking-widest text-gray-400">{m.cta.label}</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
        </div>

        <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight mb-8">
          {m.cta.heading}
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          {m.cta.description}
        </p>

        <a
          href="mailto:contact@foundry.ar"
          className="inline-block bg-black text-white px-8 py-3 text-lg rounded-full font-medium transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
        >
          {m.cta.button}
        </a>

        <p className="mt-6 text-sm text-gray-500">
          contact@foundry.ar
        </p>

        <div className="mt-16 mx-auto w-24 h-px bg-gradient-to-r from-purple-300 via-purple-400 to-pink-300" />
      </div>
    </section>
  )
}
