export function PhilosophySection() {
  return (
    <section id="approach" className="py-32 px-6 bg-surface relative z-20 overflow-hidden">
      {/* Subtle background gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, #764ba2, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Large decorative quotation mark */}
        <span
          className="block text-[8rem] md:text-[12rem] leading-none font-serif text-gray-200 select-none -mb-16 md:-mb-24"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-balance">
          AI-native, not bolted on.
          <br />
          Boutique, not factory.
        </h2>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          We rethink how your business works first — then build the right software around it. Every project is led by the people you talk to. No layers. No handoffs.
        </p>

        {/* Decorative bottom line matching the gradient palette */}
        <div className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-purple-300 via-purple-400 to-pink-300" />
      </div>
    </section>
  )
}
