'use client'

import { Player, type PlayerRef } from '@remotion/player'
import { useEffect, useRef, useState } from 'react'
import type { ComponentType } from 'react'

const desktopCompositions: Record<string, () => Promise<{ default: ComponentType }>> = {
  'whatsapp-agents': () =>
    import('@/video/src/services/WhatsAppAgentVideoEn').then((m) => ({
      default: m.WhatsAppAgentVideoEn as ComponentType,
    })),
  'systems-engineering': () =>
    import('@/video/src/services/SystemsEngineeringVideoEn').then((m) => ({
      default: m.SystemsEngineeringVideoEn as ComponentType,
    })),
  'enterprise-ai': () =>
    import('@/video/src/services/EnterpriseAIVideoEn').then((m) => ({
      default: m.EnterpriseAIVideoEn as ComponentType,
    })),
  'agentes-whatsapp': () =>
    import('@/video/src/services/WhatsAppAgentVideo').then((m) => ({
      default: m.WhatsAppAgentVideo as ComponentType,
    })),
  'ingenieria-de-sistemas': () =>
    import('@/video/src/services/SystemsEngineeringVideo').then((m) => ({
      default: m.SystemsEngineeringVideo as ComponentType,
    })),
  'ia-empresarial': () =>
    import('@/video/src/services/EnterpriseAIVideo').then((m) => ({
      default: m.EnterpriseAIVideo as ComponentType,
    })),
}

const mobileCompositions: Record<string, () => Promise<{ default: ComponentType }>> = {
  'whatsapp-agents': () =>
    import('@/video/src/services/WhatsAppAgentVideoMobileEn').then((m) => ({
      default: m.WhatsAppAgentVideoMobileEn as ComponentType,
    })),
  'agentes-whatsapp': () =>
    import('@/video/src/services/WhatsAppAgentVideoMobile').then((m) => ({
      default: m.WhatsAppAgentVideoMobile as ComponentType,
    })),
  'systems-engineering': () =>
    import('@/video/src/services/SystemsEngineeringVideoMobileEn').then((m) => ({
      default: m.SystemsEngineeringVideoMobileEn as ComponentType,
    })),
  'ingenieria-de-sistemas': () =>
    import('@/video/src/services/SystemsEngineeringVideoMobile').then((m) => ({
      default: m.SystemsEngineeringVideoMobile as ComponentType,
    })),
  'enterprise-ai': () =>
    import('@/video/src/services/EnterpriseAIVideoMobileEn').then((m) => ({
      default: m.EnterpriseAIVideoMobileEn as ComponentType,
    })),
  'ia-empresarial': () =>
    import('@/video/src/services/EnterpriseAIVideoMobile').then((m) => ({
      default: m.EnterpriseAIVideoMobile as ComponentType,
    })),
}

const durations: Record<string, number> = {
  'whatsapp-agents': 440,
  'agentes-whatsapp': 440,
  'systems-engineering': 370,
  'ingenieria-de-sistemas': 370,
  'enterprise-ai': 370,
  'ia-empresarial': 370,
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 767px)').matches
    }
    return false
  })
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    setMobile(mql.matches)
    const onChange = () => setMobile(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return mobile
}

export function ServicePlayer({ slug }: { slug: string }) {
  const [Component, setComponent] = useState<ComponentType | null>(null)
  const playerRef = useRef<PlayerRef>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const durationInFrames = durations[slug] ?? 370
  const isEnterpriseAI = slug === 'enterprise-ai' || slug === 'ia-empresarial'
  const isWhatsApp = slug === 'whatsapp-agents' || slug === 'agentes-whatsapp'

  const compositionWidth = isMobile ? 1080 : 1920
  const compositionHeight = isMobile ? (isWhatsApp ? 2400 : 1920) : 1080
  const mobileAspect = isWhatsApp ? '1080 / 2400' : '3 / 5'

  useEffect(() => {
    setComponent(null) // Reset while loading correct composition
    let cancelled = false
    const mobileLoader = isMobile ? mobileCompositions[slug] : undefined
    const loader = mobileLoader || desktopCompositions[slug]
    if (!loader) return
    loader().then((m) => {
      if (!cancelled) setComponent(() => m.default)
    })
    return () => { cancelled = true }
  }, [slug, isMobile])

  // Play when visible, respecting prefers-reduced-motion
  useEffect(() => {
    const container = containerRef.current
    const player = playerRef.current
    if (!container || !player) return

    const lastFrame = durationInFrames - 1

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      player.seekTo(lastFrame)
      player.pause()
      return
    }

    let ended = false
    const onEnded = () => {
      if (ended) return
      ended = true
      player.pause()
      player.seekTo(lastFrame)
    }
    player.addEventListener('ended', onEnded)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          player.play()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(container)
    return () => {
      observer.disconnect()
      player.removeEventListener('ended', onEnded)
    }
  }, [Component, durationInFrames])

  if (!Component) {
    return (
      <div
        className={`w-full rounded-xl bg-white/60 backdrop-blur-[10px] border border-white/80 animate-pulse ${isMobile ? 'mx-auto' : 'aspect-video'}`}
        style={isMobile ? { aspectRatio: mobileAspect } : undefined}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-xl overflow-hidden ${isMobile ? `mx-auto ${isEnterpriseAI || isWhatsApp ? '' : '-mb-[15%]'}` : 'aspect-video'}`}
      style={isMobile ? { aspectRatio: mobileAspect } : undefined}
    >
      <Player
        ref={playerRef}
        component={Component}
        compositionWidth={compositionWidth}
        compositionHeight={compositionHeight}
        durationInFrames={durationInFrames}
        fps={30}
        style={{ width: '100%', height: '100%' }}
        controls={false}
        showVolumeControls={false}
        clickToPlay={false}
      />
    </div>
  )
}
