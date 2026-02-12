'use client'

import { useEffect, useRef } from 'react'

export function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="approach" className="py-24 px-6 bg-surface relative z-20">
      <div
        ref={ref}
        className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-balance">
          Your business has changed. Your software should catch up.
        </h2>
      </div>
    </section>
  )
}
