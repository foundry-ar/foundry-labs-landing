export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl tracking-tight">FOUNDRY LABS</div>
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-all rounded-lg shadow-sm hover:shadow-md"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Senior-led engineering firm
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 mb-10 leading-[1.1]">
            Critical systems.
            <br />
            <span className="text-gray-400">Senior judgment.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            We help companies redesign workflows, build reliable systems, and execute complex projects — combining deep process expertise with modern tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gray-900 hover:bg-gray-700 transition-all rounded-lg shadow-lg hover:shadow-xl group"
            >
              Start a conversation
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how-we-work"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all rounded-lg border-2 border-gray-200"
            >
              See how we work
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600 mt-2">Senior engineers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">0</div>
              <div className="text-sm text-gray-600 mt-2">Junior handoffs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">Fast</div>
              <div className="text-sm text-gray-600 mt-2">Decision cycles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">Direct</div>
              <div className="text-sm text-gray-600 mt-2">Communication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Most teams don't fail because
            <br />
            of technology.
          </p>
          <p className="text-3xl md:text-5xl font-bold text-gray-500 leading-tight">
            They fail because of poor
            <br />
            decisions upstream.
          </p>
          <div className="mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-medium">We fix that</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What we do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with founders and leadership teams on projects where quality, correctness, and execution matter.
            </p>
          </div>
          
          {/* Visual Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-gray-900 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow redesign</h3>
              <p className="text-gray-600">Designing and rebuilding operational workflows from the ground up.</p>
            </div>

            <div className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-gray-900 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Critical systems</h3>
              <p className="text-gray-600">Building internal tools and mission-critical infrastructure.</p>
            </div>

            <div className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-gray-900 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart automation</h3>
              <p className="text-gray-600">Automating complex processes without breaking them.</p>
            </div>

            <div className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-gray-900 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid delivery</h3>
              <p className="text-gray-600">Shipping MVPs and production systems under real constraints.</p>
            </div>

            <div className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-gray-900 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project recovery</h3>
              <p className="text-gray-600">Taking over stalled or poorly executed projects.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl text-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">And more</h3>
              <p className="text-gray-300">Have a complex technical challenge? Let's talk about it.</p>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              Decisions first. Software second.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full mb-6">
              OUR APPROACH
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How we work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most firms scale by adding people. We scale by making better decisions and using leverage responsibly.
            </p>
          </div>

          {/* Three Column Process */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-8xl font-bold text-gray-100">1</div>
              <div className="relative bg-white p-10 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Understand deeply
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We map how work actually happens — not how it looks on slides.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 text-8xl font-bold text-gray-100">2</div>
              <div className="relative bg-white p-10 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Design first
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Architecture, constraints, failure modes, and trade-offs come before code.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 text-8xl font-bold text-gray-100">3</div>
              <div className="relative bg-white p-10 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Execute with leverage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern tooling and automation internally — without sacrificing quality.
                </p>
              </div>
            </div>
          </div>

          {/* Key principle */}
          <div className="text-center py-12 px-8 bg-gray-900 rounded-3xl">
            <p className="text-2xl md:text-3xl font-bold text-white">
              Technology is a multiplier,
              <br />
              <span className="text-gray-400">not a replacement for judgment.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Why Foundry Labs */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Foundry Labs
            </h2>
            <p className="text-xl text-gray-600">
              We operate like an internal strike team — not a vendor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Senior from day one
              </h3>
              <p className="text-gray-600">
                Only senior engineers. No juniors, no handoffs.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Clear ownership
              </h3>
              <p className="text-gray-600">
                Full accountability. No confusion about who's responsible.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast decisions
              </h3>
              <p className="text-gray-600">
                Direct communication. Rapid feedback loops.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lean operation
              </h3>
              <p className="text-gray-600">
                Built to operate efficiently, not inflated with overhead.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality first
              </h3>
              <p className="text-gray-600">
                Long-term system quality over short-term hacks.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Founder-led
              </h3>
              <p className="text-gray-300">
                Talk to us, work with us. No middlemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
                ABOUT US
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Founded in Argentina.
                <br />
                <span className="text-gray-400">Working globally.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Two senior engineers from Rosario with strong backgrounds in engineering and economics, and hands-on experience building real systems in high-constraint environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="text-white font-medium">Deep technical expertise</p>
                    <p className="text-gray-400 text-sm">Startups, platforms, and complex operational projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="text-white font-medium">High-constraint experience</p>
                    <p className="text-gray-400 text-sm">Where failure is expensive and shortcuts don't work</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="text-white font-medium">Fully involved</p>
                    <p className="text-gray-400 text-sm">You talk to the people doing the work</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">🇦🇷</div>
                    <h3 className="text-xl font-bold mb-2">Based in Rosario</h3>
                    <p className="text-gray-400">Argentina's tech hub, home to world-class engineering talent</p>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div>
                    <div className="text-5xl font-bold mb-2">🌍</div>
                    <h3 className="text-xl font-bold mb-2">Global reach</h3>
                    <p className="text-gray-400">Working with clients worldwide across timezones</p>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div>
                    <div className="text-5xl font-bold mb-2">💼</div>
                    <h3 className="text-xl font-bold mb-2">Premium quality</h3>
                    <p className="text-gray-400">Top-tier engineering without SF/NYC pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Who this is for
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Good Fit */}
            <div className="bg-white border-2 border-green-100 rounded-3xl p-10">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                You're a good fit if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Need senior judgment, not more headcount</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Face operational or technical complexity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Care about long-term system quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Want speed without chaos</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Prefer working with experienced engineers</span>
                </li>
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-10">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Probably not a fit if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Are looking for the cheapest option</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Want a large outsourced team</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Expect delivery without involvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How we engage
            </h2>
            <p className="text-xl text-gray-600">
              Clear, focused, and direct.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fixed scope</h3>
              <p className="text-sm text-gray-600">Clear deliverables from day one</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Short cycles</h3>
              <p className="text-sm text-gray-600">Focused, intensive engagements</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct access</h3>
              <p className="text-sm text-gray-600">Work with the founders</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No lock-in</h3>
              <p className="text-sm text-gray-600">Flexible, project-based work</p>
            </div>
          </div>

          <div className="mt-16 text-center py-12 px-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              No bloated teams. No unnecessary overhead.
              <br />
              <span className="text-gray-600">Just senior engineering when you need it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-40 px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for new projects
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Let's talk
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Have a complex problem to solve, or a system that needs to be built properly?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center px-10 py-5 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all rounded-xl shadow-2xl hover:shadow-white/20 group"
            >
              Start a conversation
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 text-gray-400">
            <p className="text-sm font-medium">Or email us directly</p>
            <a href="mailto:hello@foundrylabs.com" className="text-xl font-mono text-white hover:text-gray-300 transition-colors">
              hello@foundrylabs.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="font-bold text-2xl mb-3">FOUNDRY LABS</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Senior Engineering & Systems Design
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">Contact</h3>
              <a
                href="mailto:hello@foundrylabs.com"
                className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
              >
                hello@foundrylabs.com
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">Location</h3>
              <p className="text-gray-400">
                Based in Rosario, Argentina
                <br />
                Working globally
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Foundry Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

