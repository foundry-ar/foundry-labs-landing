'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Card3D } from './Card3D'
import { CardAnimationProvider } from './useCardAnimation'
import { GradientText } from './GradientText'
import { CalendlyButton } from './CalendlyButton'
import type { Messages } from '@/messages'

const CARD_INDICES_DESKTOP = Array.from({ length: 24 }, (_, i) => i)
const CARD_INDICES_MOBILE = Array.from({ length: 10 }, (_, i) => i)

type Phase = 'idle' | 'exiting' | 'entering'

function ScrollIndicator({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mql.matches) return

    const onScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 200)
      el.style.opacity = String(opacity)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest uppercase text-gray-500 opacity-80">
      {label}
      <div className="mt-2 w-5 h-5 border border-gray-200 rounded-full flex items-center justify-center animate-float">
        <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
          <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    setMobile(mql.matches)
    const onChange = () => setMobile(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return mobile
}

export function HeroSection({ messages: m }: { messages: Messages }) {
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')
  const isMobile = useIsMobile()

  const words = m.hero.rotatingWords

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p === 'idle' ? 'exiting' : p))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleAnimationEnd = useCallback(() => {
    if (phase === 'exiting') {
      setCurrentIndex((prev) => (prev + 1) % words.length)
      setPhase('entering')
    } else if (phase === 'entering') {
      setPhase('idle')
    }
  }, [phase, words.length])

  useEffect(() => {
    const el = cardsContainerRef.current
    if (!el) return

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mql.matches) return

    let rafId = 0
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const scrollX = window.scrollY * 0.5
        el.style.transform = `translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(${scrollX}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const onChange = () => {
      if (mql.matches) {
        window.removeEventListener('scroll', handleScroll)
        el.style.transform = 'translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(0px)'
      } else {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
      }
    }
    mql.addEventListener('change', onChange)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', handleScroll)
      mql.removeEventListener('change', onChange)
    }
  }, [])

  const animationClass =
    phase === 'exiting'
      ? 'animate-slide-up-out'
      : phase === 'entering'
        ? 'animate-slide-up-in'
        : ''

  return (
    <header className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 w-full h-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden z-0 pointer-events-none" style={{ perspective: '1000px' }}>
        <div
          ref={cardsContainerRef}
          className="absolute top-1/2 left-1/2 w-[400vw] flex justify-center gap-5"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(0px)',
          }}
        >
          <CardAnimationProvider>
            {(isMobile ? CARD_INDICES_MOBILE : CARD_INDICES_DESKTOP).map((i) => (
              <Card3D key={i} index={i} />
            ))}
          </CardAnimationProvider>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl h-full flex flex-col justify-center">
        <div className="max-w-2xl mt-12">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
            {m.hero.tagline}
          </p>

          <h1 className="sr-only">{m.hero.headingPrefix} {words[0]}</h1>
          <div aria-hidden="true" className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-12">
            {m.hero.headingPrefix} <br />
            <span className="relative block min-h-[2.6em] sm:min-h-[2.5em] md:min-h-[2.4em] overflow-hidden text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              <span
                className={`inline-block ${animationClass}`}
                onAnimationEnd={handleAnimationEnd}
              >
                <GradientText className="font-serif italic font-normal">
                  {words[currentIndex]}
                </GradientText>
              </span>
            </span>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed font-light max-w-xl mb-8">
            {m.hero.description}
          </p>

          <CalendlyButton
            className="inline-block bg-black text-white px-8 py-3 text-sm font-medium tracking-wide uppercase rounded-full transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-none focus-ring"
          >
            {m.hero.cta}
          </CalendlyButton>
        </div>

      </div>

      <ScrollIndicator label={m.hero.scroll} />
    </header>
  )
}
