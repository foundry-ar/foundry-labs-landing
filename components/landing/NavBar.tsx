'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { usePostHog } from '@posthog/react'
import type { Messages } from '@/messages'
import { CalendlyButton } from './CalendlyButton'

export function NavBar({ messages: m }: { messages: Messages }) {
  const posthog = usePostHog()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const rafRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const menuEl = menuRef.current
    if (menuEl) {
      const focusable = menuEl.querySelectorAll<HTMLElement>('a[href], button, [tabindex]:not([tabindex="-1"])')
      if (focusable.length > 0) focusable[0].focus()
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
        hamburgerRef.current?.focus()
        return
      }
      if (e.key === 'Tab' && menuEl) {
        const focusable = menuEl.querySelectorAll<HTMLElement>('a[href], button, [tabindex]:not([tabindex="-1"])')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    const mainEl = document.getElementById('main')
    if (mainEl) mainEl.setAttribute('inert', '')
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      if (mainEl) mainEl.removeAttribute('inert')
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen, closeMenu])

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-3 sm:px-4">
      <div className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 backdrop-blur-xl border border-white/40 rounded-full transition-[background-color,box-shadow] duration-500 ease-out ${scrolled ? 'bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : 'bg-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'}`}>
        <div className="flex items-center gap-2">
          <svg role="img" viewBox="0 0 32 32" className="w-7 h-7 group/logo" fill="none">
            <title>Foundry</title>
            <rect x="4" y="4" width="14" height="14" stroke="#1a1a1a" strokeWidth="2" className="transition-transform duration-200 ease-out group-hover/logo:-translate-x-[1px] group-hover/logo:-translate-y-[1px] motion-reduce:!transform-none"/>
            <rect x="14" y="14" width="14" height="14" stroke="#1a1a1a" strokeWidth="2" className="transition-transform duration-200 ease-out group-hover/logo:translate-x-[1px] group-hover/logo:translate-y-[1px] motion-reduce:!transform-none"/>
          </svg>
          <span className="font-semibold text-sm tracking-tight">{m.nav.brand}</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-black focus-visible:text-black focus-ring rounded-sm transition-colors duration-300 ease-out">{m.nav.services}</a>
          <a href="#contact" className="hover:text-black focus-visible:text-black focus-ring rounded-sm transition-colors duration-300 ease-out">{m.nav.contact}</a>
        </div>

        <CalendlyButton
          className="hidden md:inline-flex bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-none focus-ring"
          onClick={() => posthog.capture('cta_clicked', { location: 'navbar' })}
        >
          {m.nav.cta}
        </CalendlyButton>

        <div className="md:hidden flex items-center gap-2">
          <CalendlyButton
            className="bg-black text-white px-4 py-2 rounded-full text-xs font-medium transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-none focus-ring"
            onClick={() => posthog.capture('cta_clicked', { location: 'navbar_mobile_bar' })}
          >
            {m.nav.cta}
          </CalendlyButton>
        <button
          ref={hamburgerRef}
          type="button"
          className="flex items-center justify-center w-11 h-11 rounded-full text-gray-700 hover:text-black focus-ring transition-colors"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? m.nav.menuClose : m.nav.menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
        </div>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/90 backdrop-blur-xl transition-opacity duration-300 ease-out overscroll-none touch-none ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute top-8 right-6 flex items-center justify-center w-11 h-11 rounded-full text-gray-700 hover:text-black focus-ring transition-colors"
          aria-label={m.nav.menuClose}
          onClick={closeMenu}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
        <a
          href="#services"
          className="text-2xl font-medium text-gray-800 hover:text-black transition-colors"
          onClick={closeMenu}
        >
          {m.nav.services}
        </a>
        <a
          href="#contact"
          className="text-2xl font-medium text-gray-800 hover:text-black transition-colors"
          onClick={closeMenu}
        >
          {m.nav.contact}
        </a>
        <CalendlyButton
          className="bg-black text-white px-8 py-3 rounded-full text-base font-medium transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-none focus-ring"
          onClick={() => {
            posthog.capture('cta_clicked', { location: 'navbar_mobile' })
            closeMenu()
          }}
        >
          {m.nav.cta}
        </CalendlyButton>
      </div>
    </nav>
  )
}
