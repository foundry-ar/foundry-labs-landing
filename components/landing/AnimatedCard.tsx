'use client'

import { useRef, useEffect, useState, type ReactNode } from 'react'

interface AnimatedCardProps {
  index?: number
  children: ReactNode
  /** Keep gradient border always visible on desktop (e.g. overview cards) */
  alwaysShowBorder?: boolean
  className?: string
}

export function AnimatedCard({ index = 0, children, alwaysShowBorder = false, className = '' }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [nearCenter, setNearCenter] = useState(false)

  // Entrance animation
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Mobile: detect card closest to viewport center for border-top
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNearCenter(entry.isIntersecting)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const borderDesktopClass = alwaysShowBorder ? 'md:opacity-100' : 'md:opacity-0 md:group-hover:opacity-100'

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl backdrop-blur-[10px] border border-white/80 bg-white/60 p-8 overflow-hidden transition-[transform,background-color,box-shadow,border-color,opacity] duration-300 ease-out hover:-translate-y-[5px] hover:bg-white/90 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:border-[#ddd] ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? undefined : 'translateY(16px)',
        transitionDelay: visible ? `${index * 100}ms` : '0ms',
      }}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 ease-out ${
          nearCenter ? 'opacity-100' : 'opacity-0'
        } ${borderDesktopClass}`}
        style={{ backgroundImage: 'var(--gradient-accent)' }}
      />
      {children}
    </div>
  )
}

export function useNearCenter() {
  const ref = useRef<HTMLDivElement>(null)
  const [nearCenter, setNearCenter] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNearCenter(entry.isIntersecting)
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, nearCenter }
}
