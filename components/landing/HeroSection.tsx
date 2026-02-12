'use client'

import { useEffect, useRef, useState } from 'react'
import { Card3D } from './Card3D'
import { GradientText } from './GradientText'

const CARD_INDICES = Array.from({ length: 40 }, (_, i) => i)

const ROTATING_WORDS = [
  'Intelligence.',
  'Smarter Workflows.',
  'Digital Experiences.',
  'Your Next Product.',
]

export function HeroSection() {
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const el = cardsContainerRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) return

    const handleScroll = () => {
      const scrollX = window.scrollY * 0.5
      el.style.transform = `translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(${scrollX}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const onChange = () => {
      if (prefersReducedMotion.matches) {
        window.removeEventListener('scroll', handleScroll)
        el.style.transform = 'translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(0px)'
      }
    }
    prefersReducedMotion.addEventListener('change', onChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      prefersReducedMotion.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <header className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-full h-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden z-0 pointer-events-none" style={{ perspective: '1000px' }}>
        <div
          ref={cardsContainerRef}
          className="absolute top-1/2 left-1/2 w-[400vw] flex justify-center gap-5"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translate(-50%, -50%) rotateZ(-30deg) rotateY(20deg) translateX(0px)',
          }}
        >
          {CARD_INDICES.map((i) => (
            <Card3D key={i} index={i} />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl h-full flex flex-col justify-center pointer-events-none">
        <div className="max-w-2xl mt-12 pointer-events-auto">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
            Boutique AI &amp; Software Studio
          </p>

          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.1] mb-12 text-balance">
            Forging <br />
            <span className="relative block min-h-[2.6em]">
              {ROTATING_WORDS.map((word, index) => (
                <span
                  key={word}
                  className="absolute left-0 top-0 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: index === currentIndex ? 1 : 0 }}
                >
                  <GradientText className="font-serif italic font-normal">
                    {word}
                  </GradientText>
                </span>
              ))}
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed font-light max-w-xl mb-8">
            You know AI can transform your workflow — you just need the right people to make it happen. Two senior engineers who work directly with founders. No project managers. No bloat. Just the people doing the work.
          </p>

          <a
            href="mailto:contact@foundry.ar"
            className="inline-block px-8 py-3 text-sm font-medium tracking-wide uppercase border border-gray-400 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
          >
            Book a Call
          </a>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest uppercase text-gray-500 opacity-80 pointer-events-none">
        Scroll Down
        <div className="mt-2 w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center animate-bounce-slow">
          <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
            <path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </header>
  )
}
