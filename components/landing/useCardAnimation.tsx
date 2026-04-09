'use client'

import { createContext, useCallback, useContext, useEffect, useRef } from 'react'

type TickFn = (elapsed: number) => void

const CardAnimationContext = createContext<(tick: TickFn) => () => void>(() => () => {})

export function useCardAnimation() {
  return useContext(CardAnimationContext)
}

export function CardAnimationProvider({ children }: { children: React.ReactNode }) {
  const ticksRef = useRef<Set<TickFn>>(new Set())
  const rafRef = useRef(0)
  const startRef = useRef(0)

  const register = useCallback((tick: TickFn) => {
    ticksRef.current.add(tick)
    return () => { ticksRef.current.delete(tick) }
  }, [])

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mql.matches) return

    let stopped = false
    startRef.current = performance.now()

    const loop = () => {
      if (stopped) return
      const elapsed = performance.now() - startRef.current
      ticksRef.current.forEach((fn) => fn(elapsed))
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    const onChange = () => {
      if (mql.matches) {
        stopped = true
        cancelAnimationFrame(rafRef.current)
      }
    }
    mql.addEventListener('change', onChange)

    return () => {
      stopped = true
      cancelAnimationFrame(rafRef.current)
      mql.removeEventListener('change', onChange)
    }
  }, [])

  return (
    <CardAnimationContext.Provider value={register}>
      {children}
    </CardAnimationContext.Provider>
  )
}
