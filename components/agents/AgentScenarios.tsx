'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { WhatsAppPhone } from './WhatsAppPhone'
import type { Messages } from '@/messages'

type Scenario = Messages['agents']['scenarios']['items'][number]

export function AgentScenarios({ messages: m }: { messages: Messages }) {
  const a = m.agents.scenarios
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-surface">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div
            aria-hidden="true"
            className="h-px w-12"
            style={{ backgroundImage: 'var(--gradient-accent-subtle)' }}
          />
          <span className="text-xs uppercase tracking-widest text-gray-400">{a.label}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">{a.heading}</h2>
      </div>

      {/* Desktop carousel */}
      <div className="hidden md:block">
        <ScenarioCarousel items={a.items} active={visible} />
      </div>

      {/* Mobile: stacked */}
      <div className="md:hidden space-y-20">
        {a.items.map((item, i) => (
          <MobileScenarioCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

/* ─── Desktop Carousel ─── */

function ScenarioCarousel({ items, active }: { items: readonly Scenario[]; active: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [showTyping, setShowTyping] = useState(false)
  const [animationDone, setAnimationDone] = useState(false)
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([])
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current)
  }, [])

  const playScenario = useCallback((index: number) => {
    clearTimeouts()
    setActiveIndex(index)
    setVisibleMessages(0)
    setShowTyping(false)
    setAnimationDone(false)

    const msgs = items[index].messages
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setVisibleMessages(msgs.length)
      setAnimationDone(true)
      return
    }

    let delay = 500
    msgs.forEach((msg, i) => {
      if (msg.from === 'agent') {
        timeoutRefs.current.push(setTimeout(() => setShowTyping(true), delay))
        delay += 1400
      }

      timeoutRefs.current.push(
        setTimeout(() => {
          setShowTyping(false)
          setVisibleMessages(i + 1)
        }, delay)
      )
      delay += msg.from === 'customer' ? 1200 : 1000
    })

    // Mark done + auto-advance after pause
    timeoutRefs.current.push(
      setTimeout(() => {
        setAnimationDone(true)
        autoAdvanceRef.current = setTimeout(() => {
          const next = (index + 1) % items.length
          playScenario(next)
        }, 20000)
      }, delay)
    )
  }, [items, clearTimeouts])

  // Start playing when section becomes visible
  useEffect(() => {
    if (active) playScenario(0)
    return clearTimeouts
  }, [active, playScenario, clearTimeouts])

  const handleTabClick = (index: number) => {
    if (index === activeIndex && !animationDone) return
    playScenario(index)
  }

  const activeItem = items[activeIndex]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-12 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleTabClick(i)}
            className={`relative flex-shrink-0 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              i === activeIndex
                ? 'bg-ink text-white'
                : 'bg-white/60 backdrop-blur-[10px] border border-white/80 text-gray-500 hover:text-ink hover:border-gray-200'
            }`}
          >
            <span className="text-xs opacity-50 mr-2">{String(i + 1).padStart(2, '0')}</span>
            {item.title}
            {/* Progress bar for active tab */}
            {i === activeIndex && !animationDone && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden rounded-b-full">
                <span
                  className="block h-full bg-white/30"
                  style={{
                    animation: `tab-progress ${items[activeIndex].messages.length * 2.5}s linear forwards`,
                  }}
                />
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: phone */}
        <div>
          <WhatsAppPhone
            messages={activeItem.messages}
            visibleCount={visibleMessages}
            showTyping={showTyping}
          />
        </div>

        {/* Right: info */}
        <div
          key={activeItem.id}
          className="animate-[fade-in_0.4s_ease-out_both]"
        >
          {/* Number label */}
          <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>

          {/* Title */}
          <h3 className="font-semibold text-ink text-xl mb-6">
            {activeItem.title}
          </h3>

          {/* Metric */}
          <div className="mb-8">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl md:text-5xl font-medium tracking-tight text-ink">
                {activeItem.metric.value}
              </span>
              <span className="text-sm text-gray-400">{activeItem.metricComparison}</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">{activeItem.metric.label}</p>
          </div>

          {/* Divider */}
          <div
            aria-hidden="true"
            className="h-px w-12 mb-6"
            style={{ backgroundImage: 'var(--gradient-accent-subtle)' }}
          />

          {/* Bullets */}
          <ul className="space-y-3">
            {activeItem.bullets.map((bullet, bi) => (
              <li
                key={bi}
                className="flex items-start gap-3 text-gray-500 leading-relaxed text-sm"
                style={{
                  animation: `fade-in 0.4s ease-out ${0.15 + bi * 0.1}s both`,
                }}
              >
                <div
                  className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundImage: 'var(--gradient-accent)' }}
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ─── Mobile ─── */

function MobileScenarioCard({ item, index }: { item: Scenario; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [showTyping, setShowTyping] = useState(false)
  const [entered, setEntered] = useState(false)
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisibleMessages(item.messages.length)
      setEntered(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !entered) {
          setEntered(true)
          let delay = 400
          item.messages.forEach((msg, i) => {
            if (msg.from === 'agent') {
              timeoutRefs.current.push(setTimeout(() => setShowTyping(true), delay))
              delay += 1200
            }
            timeoutRefs.current.push(
              setTimeout(() => {
                setShowTyping(false)
                setVisibleMessages(i + 1)
              }, delay)
            )
            delay += msg.from === 'customer' ? 1000 : 800
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      timeoutRefs.current.forEach(clearTimeout)
    }
  }, [entered, item.messages])

  return (
    <div ref={containerRef}>
      <span className="text-xs uppercase tracking-widest text-gray-400 mb-3 block">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="text-xl font-medium tracking-tight mb-2">{item.title}</h3>

      <div className="mb-4">
        <span className="text-3xl font-medium tracking-tight text-ink">{item.metric.value}</span>
        <span className="text-sm text-gray-500 ml-2">{item.metric.label}</span>
        <div className="text-xs text-gray-400 mt-1">{item.metricComparison}</div>
      </div>

      <ul className="space-y-2 mb-6">
        {item.bullets.map((bullet, bi) => (
          <li key={bi} className="flex items-start gap-2 text-gray-500 text-sm">
            <div
              className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
              style={{ backgroundImage: 'var(--gradient-accent)' }}
            />
            {bullet}
          </li>
        ))}
      </ul>

      <WhatsAppPhone
        messages={item.messages}
        visibleCount={visibleMessages}
        showTyping={showTyping}
      />
    </div>
  )
}
