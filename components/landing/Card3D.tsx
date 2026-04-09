'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useCardAnimation } from './useCardAnimation'

export function Card3D({ index }: { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef<number | null>(null)
  const delay = index * 100
  const duration = 4000

  const onTick = useCallback((now: number) => {
    const el = cardRef.current
    if (!el) return

    if (startTimeRef.current === null) {
      if (now < delay) return
      startTimeRef.current = now
    }

    const elapsed = now - startTimeRef.current
    const progress = (elapsed % duration) / duration
    const wave = Math.sin(progress * Math.PI * 2)
    const absWave = Math.abs(wave)

    el.style.transform = `rotateX(${wave * 22.5}deg) translateZ(${absWave * 25}px) scale(${1 + absWave * 0.05})`
    el.style.background = `rgba(${220 + absWave * 20}, ${230 - absWave * 10}, ${240 - absWave * 20}, ${0.4 + absWave * 0.4})`
  }, [delay])

  const register = useCardAnimation()

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) return

    const unregister = register(onTick)

    const onChange = () => {
      if (prefersReducedMotion.matches) {
        unregister()
        el.style.transform = ''
        el.style.background = ''
      }
    }
    prefersReducedMotion.addEventListener('change', onChange)

    return () => {
      unregister()
      prefersReducedMotion.removeEventListener('change', onChange)
    }
  }, [register, onTick])

  return (
    <div
      ref={cardRef}
      className="relative w-[40px] h-[200px] sm:w-[50px] sm:h-[250px] md:w-[60px] md:h-[300px] rounded border border-white/90"
      style={{
        boxShadow: '0 10px 30px rgba(15, 36, 64, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.5)',
        transformOrigin: 'center center',
      }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: 'linear-gradient(135deg, rgba(27, 58, 92, 0.15) 0%, rgba(184, 99, 46, 0.12) 100%)',
        }}
      />
    </div>
  )
}
