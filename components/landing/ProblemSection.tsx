export function ProblemSection() {
  return (
    <section className="py-32 px-6 bg-surface relative z-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
          <span className="text-xs uppercase tracking-widest text-gray-400">Our belief</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-balance">
          Modernizing your business with AI
          <br />
          shouldn&rsquo;t require an army.
        </h2>

        {/* Decorative bottom accent */}
        <div className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-purple-300 via-purple-400 to-pink-300" />
      </div>
    </section>
  )
}
