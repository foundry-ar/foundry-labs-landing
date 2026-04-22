'use client'

import { useState, useRef, useEffect } from 'react'
import type { Messages } from '@/messages'

type Tab = Messages['agents']['calculator']['tabs'][number]

function computeResult(tab: Tab, values: number[]): number {
  switch (tab.id) {
    case 'sales': {
      const [conversations, ticket, conversionPct] = values
      return Math.round(conversations * ticket * (conversionPct / 100))
    }
    case 'support': {
      const [ticketsDay, hourlyCost, resolutionPct] = values
      const monthlyTickets = ticketsDay * 22
      const resolvedByAgent = monthlyTickets * (resolutionPct / 100)
      const hoursSaved = (resolvedByAgent * 2) / 60
      return Math.round(hoursSaved * hourlyCost)
    }
    case 'booking': {
      const [appointments, ticket, recoveryPct] = values
      return Math.round(appointments * ticket * (recoveryPct / 100))
    }
    default:
      return 0
  }
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0)
  const rafRef = useRef<number>(0)
  const prevRef = useRef(0)

  useEffect(() => {
    const from = prevRef.current
    const duration = 500
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(from + (value - from) * eased))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    prevRef.current = value
    return () => cancelAnimationFrame(rafRef.current)
  }, [value])

  return <span className="tabular-nums">{display.toLocaleString()}</span>
}

export function AgentsCalculator({ messages: m }: { messages: Messages }) {
  const a = m.agents.calculator
  const [activeTab, setActiveTab] = useState(0)
  const [sliderValues, setSliderValues] = useState<number[][]>(
    a.tabs.map((tab) => tab.sliders.map((s) => s.default))
  )
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setVisible(true); return }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const currentTab = a.tabs[activeTab]
  const currentValues = sliderValues[activeTab]
  const result = computeResult(currentTab, currentValues)

  const updateSlider = (sliderIndex: number, value: number) => {
    setSliderValues((prev) => {
      const next = [...prev]
      next[activeTab] = [...next[activeTab]]
      next[activeTab][sliderIndex] = value
      return next
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 bg-surface overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 50%, var(--color-brand-navy), transparent 60%)',
        }}
      />

      <div
        className="relative max-w-4xl mx-auto transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              aria-hidden="true"
              className="h-px w-12"
              style={{ backgroundImage: 'var(--gradient-accent-subtle)' }}
            />
            <span className="text-xs uppercase tracking-widest text-gray-400">{a.label}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-3">{a.heading}</h2>
          <p className="text-gray-500 text-lg font-light">{a.description}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {a.tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`flex-shrink-0 px-4 md:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                i === activeTab
                  ? 'bg-ink text-white'
                  : 'bg-white/60 backdrop-blur-[10px] border border-white/80 text-gray-500 hover:text-ink hover:border-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Sliders */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-14">
          {currentTab.sliders.map((slider, si) => (
            <div key={slider.label}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <label className="text-sm text-gray-500">
                  {slider.label}
                </label>
                <span className="text-sm font-medium text-ink tabular-nums">
                  {slider.unit === 'USD' && 'USD '}
                  {currentValues[si].toLocaleString()}
                  {slider.unit === '%' && '%'}
                </span>
              </div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={currentValues[si]}
                onChange={(e) => updateSlider(si, Number(e.target.value))}
                className="w-full accent-ink"
              />
            </div>
          ))}
        </div>

        {/* Result card */}
        <div className="rounded-xl backdrop-blur-[10px] border border-white/80 bg-white/60 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400 block mb-2">
                {currentTab.resultLabel}
              </span>
              <div className="text-3xl md:text-5xl font-medium tracking-tight text-ink">
                USD <AnimatedNumber value={result} />
                <span className="text-base md:text-lg text-gray-400 ml-1">{a.month}</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">{currentTab.resultDetail}</p>
            </div>

            <div
              aria-hidden="true"
              className="h-px w-full md:w-px md:h-16 bg-gray-200"
            />

            <div className="text-left md:text-right">
              <span className="text-xs uppercase tracking-widest text-gray-400 block mb-2">
                {a.lostTodayLabel}
              </span>
              <p className="text-sm text-gray-500 max-w-xs">{a.lostTodayDetail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
