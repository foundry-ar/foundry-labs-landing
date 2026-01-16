'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { messages as enMessages } from '@/messages/en'
import { LanguageSwitcher } from './LanguageSwitcher'

type Messages = typeof enMessages

export function LandingPage({ messages, locale }: { messages: Messages; locale: 'en' | 'es' }) {
  const [selectedFlow, setSelectedFlow] = useState<string>('zero-to-one')
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set())

  const togglePhase = (flowId: string, phaseIndex: number) => {
    const key = `${flowId}-${phaseIndex}`
    const newExpanded = new Set(expandedPhases)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedPhases(newExpanded)
  }

  const isPhaseExpanded = (flowId: string, phaseIndex: number) => {
    return expandedPhases.has(`${flowId}-${phaseIndex}`)
  }

  // Reset expanded phases when flow changes
  useEffect(() => {
    setExpandedPhases(new Set())
  }, [selectedFlow])

  return (
    <main className="min-h-screen bg-paper">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-paper/80 backdrop-blur-sm z-50 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="font-medium tracking-tight text-ink">{messages.nav.brand}</div>
            <div className="flex items-center gap-6">
              <LanguageSwitcher currentLocale={locale} />
              <a
                href="mailto:hello@foundrylabs.com"
                className="text-sm text-gray-600 hover:text-ink transition-colors px-4 py-2 rounded-full hover:bg-gray-100/50"
              >
                {messages.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Two Column */}
      <section className="pt-24 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-ink mb-6 leading-[1.1]">
                {messages.hero.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {messages.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-paper bg-ink hover:bg-gray-800 transition-colors rounded-lg"
                >
                  {messages.hero.ctaPrimary}
                </a>
                <a
                  href="mailto:hello@foundrylabs.com"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-ink hover:bg-gray-100/50 transition-colors rounded-lg"
                >
                  {messages.hero.ctaSecondary}
                </a>
              </div>

              {/* Selected Experience */}
              <div className="pt-8 border-t border-gray-200/60">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">{messages.hero.selectedExperienceTitle}</p>
                <div className="flex flex-wrap gap-3">
                  {messages.hero.experienceBadges.map((badge, i) => (
                    <div key={i} className="px-4 py-2 bg-white border border-gray-200/60 rounded-full text-sm text-gray-600">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Proof Panel - Engagement Snapshot */}
            <div className="lg:pl-8">
              <div className="bg-white border border-gray-200/60 rounded-2xl shadow-sm overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200/60 bg-gray-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="text-xs text-gray-500 ml-2">{messages.hero.proofPanelTitle}</div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-ink mb-4">{messages.hero.typicalEngagementTitle}</h3>
                    <div className="space-y-4">
                      {messages.hero.engagementSteps.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="text-xs font-medium text-gray-400 mt-0.5 w-24 flex-shrink-0">{step.week}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60">
                    <h4 className="text-xs font-semibold text-gray-500 mb-3">{messages.hero.keyDeliverablesTitle}</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {messages.hero.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prior Experience */}
      <section className="py-12 px-6 lg:px-12 border-y border-gray-200/60 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-3">
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              {messages.priorExperience.title}
            </p>
            <p className="text-xs text-gray-400 font-light italic">
              {messages.priorExperience.subtitle}
            </p>
          </div>
          <div className="overflow-hidden relative mt-5">
            <div className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap">
              {/* Rue Gilt Groupe */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/rgg.svg"
                  alt="Rue Gilt Groupe"
                  width={160}
                  height={56}
                  className="h-12 w-auto"
                />
              </div>
              
              {/* Letsbit */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/lb-finanzas.png"
                  alt="Let's Bit"
                  width={160}
                  height={48}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* Paytient */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/paytient.svg"
                  alt="Paytient"
                  width={140}
                  height={48}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* HomeVision */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/homevision.svg"
                  alt="HomeVision"
                  width={140}
                  height={48}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* Eve Vehicles */}
              <div className="flex-shrink-0 opacity-50 hover:opacity-70 transition-opacity flex items-center grayscale">
                <Image
                  src="/eve.png"
                  alt="Eve Vehicles"
                  width={200}
                  height={64}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Reduced */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-3xl lg:text-4xl font-semibold text-ink leading-tight mb-2">
            {messages.problem.line1}
          </p>
          <p className="font-serif text-3xl lg:text-4xl font-semibold text-gray-400 leading-tight">
            {messages.problem.line2}
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-6">
              {messages.whatWeDo.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {messages.whatWeDo.subtitle}
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.whatWeDo.services.map((service, i) => (
              <div key={i} className={`p-8 ${i === 5 ? 'bg-gray-50' : 'bg-white'} border border-gray-200/60 rounded-2xl ${i !== 5 ? 'hover:border-gray-300' : ''} transition-colors`}>
                <h3 className="text-lg font-semibold text-ink mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-serif text-2xl font-semibold text-ink">
              {messages.whatWeDo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-24 px-6 lg:px-12 bg-white border-y border-gray-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-6">
              {messages.howWeWork.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {messages.howWeWork.subtitle}
            </p>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            {messages.howWeWork.steps.map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="text-sm font-medium text-gray-300 pt-1 w-12 flex-shrink-0">{step.number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 pt-12 border-t border-gray-200/60">
            <p className="font-serif text-xl font-semibold text-ink max-w-2xl mx-auto">
              {messages.howWeWork.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Flows */}
      <section className="py-24 px-6 lg:px-12 bg-white border-y border-gray-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-6">
              {messages.engagementFlows.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {messages.engagementFlows.intro}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {messages.engagementFlows.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFlow(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedFlow === tab.id
                    ? 'bg-ink text-paper'
                    : 'bg-white border border-gray-200/60 text-gray-600 hover:border-gray-300 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Flow Display */}
          <div className="max-w-4xl mx-auto">
            {messages.engagementFlows.flows[selectedFlow as keyof typeof messages.engagementFlows.flows]?.phases.map((phase, index) => {
              const isExpanded = isPhaseExpanded(selectedFlow, index)
              return (
                <div key={index} className="mb-4">
                  <div className="bg-white border border-gray-200/60 rounded-xl p-6 hover:border-gray-300 transition-colors">
                    <div className="flex items-start gap-4">
                      {/* Phase Number */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-600">{index + 1}</span>
                      </div>

                      {/* Phase Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-ink mb-1">{phase.name}</h3>
                            <p className="text-sm text-gray-600">{phase.description}</p>
                          </div>
                          
                          {/* Validation Badge */}
                          {phase.validation && (
                            <div className="flex-shrink-0 flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{locale === 'es' ? 'Validación' : 'Validation'}</span>
                            </div>
                          )}
                        </div>

                        {/* Expandable Deliverables */}
                        {!isExpanded ? (
                          <button
                            onClick={() => togglePhase(selectedFlow, index)}
                            className="mt-3 text-sm text-gray-500 hover:text-ink transition-colors flex items-center gap-1.5"
                          >
                            <span>{locale === 'es' ? 'Ver entregables' : 'View deliverables'}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        ) : (
                          <div className="mt-4">
                            <button
                              onClick={() => togglePhase(selectedFlow, index)}
                              className="text-sm text-gray-500 hover:text-ink transition-colors flex items-center gap-1.5 mb-3"
                            >
                              <span>{locale === 'es' ? 'Ocultar entregables' : 'Hide deliverables'}</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            </button>
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200/60">
                              <ul className="space-y-2">
                                {phase.deliverables.map((deliverable, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-gray-400 mt-0.5">•</span>
                                    <span>{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Arrow Connector - More Compact */}
                  {index < messages.engagementFlows.flows[selectedFlow as keyof typeof messages.engagementFlows.flows].phases.length - 1 && (
                    <div className="flex justify-center py-2">
                      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Closing Line */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200/60">
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {messages.engagementFlows.closingLine}
            </p>
          </div>
        </div>
      </section>

      {/* Why Foundry Labs */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-6">
              {messages.whyUs.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {messages.whyUs.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
            {messages.whyUs.reasons.map((reason, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-ink mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 px-6 lg:px-12 bg-white border-y border-gray-200/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12 text-center">
            {messages.about.title}
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
            <p>{messages.about.paragraph1}</p>
            <p>{messages.about.paragraph2}</p>
          </div>

          <div className="pt-8 border-t border-gray-200/60 text-center">
            <p className="text-xl font-semibold text-ink">
              {messages.about.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Contextual Line */}
          <p className="text-sm text-gray-500 text-center mb-10 font-light">
            {messages.whoFor.contextLine}
          </p>
          
          {/* Container with subtle background */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl p-10 lg:p-16 shadow-sm">
            {/* Editorial Kicker */}
            <p className="text-xs uppercase tracking-wider text-gray-400 text-center mb-6">
              {messages.whoFor.kicker}
            </p>
            
            {/* Main Heading */}
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-16 text-center">
              {messages.whoFor.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
              {/* Good Fit Column - More Prominent */}
              <div className="relative">
                <h3 className="text-xl font-bold text-ink mb-8">
                  {messages.whoFor.goodFitTitle}
                </h3>
                <ul className="space-y-5 text-gray-700 leading-relaxed font-medium">
                  {messages.whoFor.goodFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gray-400 mt-1 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Vertical divider - hidden on mobile */}
                <div className="hidden md:block absolute top-0 -right-6 lg:-right-8 bottom-0 w-px bg-gray-200/60"></div>
              </div>

              {/* Not a Fit Column - Intentionally Secondary */}
              <div className="md:pt-2">
                <h3 className="text-lg font-semibold text-gray-600 mb-8">
                  {messages.whoFor.notFitTitle}
                </h3>
                <ul className="space-y-5 text-gray-500 leading-relaxed">
                  {messages.whoFor.notFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gray-300 mt-1 flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-24 px-6 lg:px-12 bg-white border-y border-gray-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-16">
              {messages.engagement.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto mb-16">
            {messages.engagement.models.map((model, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-ink mb-3">{model.title}</h3>
                <p className="text-gray-600 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-gray-200/60">
            <p className="font-serif text-xl font-semibold text-ink">
              {messages.engagement.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
            {messages.cta.title}
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {messages.cta.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-paper bg-ink hover:bg-gray-800 transition-colors rounded-lg"
            >
              {messages.cta.ctaPrimary}
            </a>
            <a
              href="mailto:hello@foundrylabs.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 hover:text-ink hover:bg-gray-100/50 transition-colors rounded-lg"
            >
              {messages.cta.ctaSecondary}
            </a>
          </div>

          <p className="text-sm text-gray-500">
            {messages.cta.email}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-gray-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-center md:text-left">
            <div>
              <div className="font-semibold text-ink mb-1">{messages.footer.brand}</div>
              <p className="text-sm text-gray-500">
                {messages.footer.tagline}
              </p>
            </div>
            
            <div className="text-sm text-gray-500">
              <div className="mb-1">
                <a
                  href="mailto:hello@foundrylabs.com"
                  className="text-ink hover:text-gray-600 transition-colors"
                >
                  {messages.footer.email}
                </a>
              </div>
              <div>
                {messages.footer.location}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200/60 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} {messages.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

