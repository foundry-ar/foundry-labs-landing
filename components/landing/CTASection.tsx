export function CTASection() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight mb-8">
          Let's talk.
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          Have a system that needs to be built properly, or a process ready for AI? We should talk.
        </p>

        <a
          href="mailto:contact@foundry.ar"
          className="inline-block bg-black text-white px-8 py-3 text-lg rounded-full font-medium transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
        >
          Book a Call
        </a>

        <p className="mt-6 text-sm text-gray-400">
          contact@foundry.ar
        </p>
      </div>
    </section>
  )
}
