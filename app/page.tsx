export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl tracking-tight">FOUNDRY LABS</div>
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-md"
            >
              Talk to us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            We design and build critical systems — with senior judgment first.
          </h1>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed max-w-3xl">
            <p>
              Foundry Labs is a senior-led engineering firm.
              <br />
              We help companies redesign workflows, build reliable systems, and execute complex projects — faster — by combining deep process expertise with modern tools.
            </p>
            <p className="text-2xl font-medium text-gray-900">
              We don't sell hype.
              <br />
              We deliver outcomes.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-md"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* Sub-Hero Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            <p className="mb-4">
              Most teams don't fail because of technology.
              <br />
              They fail because of poor decisions upstream.
            </p>
            <p className="text-gray-600">We fix that.</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-semibold text-gray-500 tracking-wide uppercase mb-4">
            What we do
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8">
            What we help companies with
          </h3>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We work with founders, operators, and leadership teams on projects where quality, correctness, and execution matter.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-10">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Typical engagements include:
            </h4>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>Designing and rebuilding operational workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>Building internal tools and critical systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>Automating complex processes without breaking them</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>Shipping MVPs and production systems under real constraints</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span>Taking over stalled or poorly executed projects</span>
              </li>
            </ul>
          </div>

          <p className="text-2xl font-medium text-gray-900">
            We focus on decisions first, software second.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-semibold text-gray-400 tracking-wide uppercase mb-4">
            How we work
          </h2>
          <h3 className="text-4xl font-bold mb-6">
            Senior-first. Systems-driven. Outcome-oriented.
          </h3>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Most firms scale by adding people.
            <br />
            We scale by making better decisions and using leverage responsibly.
          </p>

          <div className="space-y-10">
            <div className="border-l-4 border-gray-700 pl-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-gray-500">1.</span> Understand the process deeply
              </h4>
              <p className="text-lg text-gray-300">
                We map how work actually happens — not how it looks on slides.
              </p>
            </div>

            <div className="border-l-4 border-gray-700 pl-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-gray-500">2.</span> Design the system before writing code
              </h4>
              <p className="text-lg text-gray-300">
                Architecture, constraints, failure modes, and trade-offs come first.
              </p>
            </div>

            <div className="border-l-4 border-gray-700 pl-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-gray-500">3.</span> Execute with leverage
              </h4>
              <p className="text-lg text-gray-300">
                We use modern tooling (including automation and AI) internally to move faster — without sacrificing quality.
              </p>
            </div>
          </div>

          <p className="text-2xl font-medium mt-12 text-gray-300">
            Technology is a multiplier, not a replacement for judgment.
          </p>
        </div>
      </section>

      {/* Why Foundry Labs */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-semibold text-gray-500 tracking-wide uppercase mb-4">
            Why Foundry Labs
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-12">
            Why companies work with us
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700">Senior engineers from day one</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700">No handoffs to juniors or delivery teams</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700">Clear ownership and accountability</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700">Fast feedback loops and direct communication</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700">Built to operate lean, not bloated</span>
              </div>
            </div>
          </div>

          <p className="text-2xl font-medium text-gray-900 mt-12">
            We operate like an internal strike team — not a vendor.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-semibold text-gray-500 tracking-wide uppercase mb-4">
            About us
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8">
            About the founders
          </h3>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Foundry Labs was founded by two senior engineers from Rosario, Argentina, with strong academic backgrounds in engineering and economics, and hands-on experience building real systems in high-constraint environments.
            </p>
            <p>
              We've worked across startups, internal platforms, and complex operational projects where failure is expensive and shortcuts don't survive reality.
            </p>
            <p className="text-xl font-medium text-gray-900 pt-4">
              We're deeply involved in every engagement.
              <br />
              If you talk to Foundry Labs, you talk to the people doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Who this is for
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                We're a good fit if you:
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">✓</span>
                  <span>Need senior judgment, not more headcount</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">✓</span>
                  <span>Are dealing with operational or technical complexity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">✓</span>
                  <span>Care about long-term system quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">✓</span>
                  <span>Want speed without chaos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-2xl">✓</span>
                  <span>Prefer working directly with experienced engineers</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                We're probably not a fit if you:
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-2xl">×</span>
                  <span>Are looking for the cheapest option</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-2xl">×</span>
                  <span>Want a large outsourced team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-2xl">×</span>
                  <span>Expect delivery without involvement or clarity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-semibold text-gray-500 tracking-wide uppercase mb-4">
            Engagement model
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-12">
            How we work with clients
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Fixed-scope projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Short, focused engagements</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Clear deliverables and timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Direct collaboration with founders</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xl text-gray-900 font-medium">
            No long-term lock-in.
            <br />
            No unnecessary overhead.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Let's talk
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            If you have a complex problem to solve,
            <br />
            or a system that needs to be built or fixed properly,
            <br />
            we should talk.
          </p>
          <a
            href="mailto:hello@foundrylabs.com"
            className="inline-flex items-center px-10 py-5 text-lg font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors rounded-md"
          >
            Schedule a conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div>
              <div className="font-bold text-xl mb-2">Foundry Labs</div>
              <div className="text-gray-600">Senior Engineering & Systems Design</div>
            </div>
            <div className="text-gray-600 space-y-1">
              <div>
                Contact:{' '}
                <a
                  href="mailto:hello@foundrylabs.com"
                  className="text-gray-900 hover:underline"
                >
                  hello@foundrylabs.com
                </a>
              </div>
              <div>Based in Argentina — working globally</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

