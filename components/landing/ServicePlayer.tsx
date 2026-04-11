'use client'

import { Player, type PlayerRef } from '@remotion/player'
import { useEffect, useRef, useState } from 'react'
import type { ComponentType } from 'react'

const compositions: Record<string, () => Promise<{ default: ComponentType }>> = {
  // EN slugs → EN videos
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
  // ES slugs → ES videos
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

const durations: Record<string, number> = {
  'whatsapp-agents': 440,
  'agentes-whatsapp': 440,
  'systems-engineering': 370,
  'ingenieria-de-sistemas': 370,
  'enterprise-ai': 370,
  'ia-empresarial': 370,
}

export function ServicePlayer({ slug }: { slug: string }) {
  const [Component, setComponent] = useState<ComponentType | null>(null)
  const playerRef = useRef<PlayerRef>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const loader = compositions[slug]
  const durationInFrames = durations[slug] ?? 370

  useEffect(() => {
    if (!loader) return
    loader().then((m) => setComponent(() => m.default))
  }, [loader])

  // Play when visible, respecting prefers-reduced-motion
  useEffect(() => {
    const container = containerRef.current
    const player = playerRef.current
    if (!container || !player) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // Jump to last frame for reduced motion
      player.seekTo(durationInFrames - 1)
      return
    }

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
    return () => observer.disconnect()
  }, [Component, durationInFrames])

  if (!Component) {
    return (
      <div className="w-full aspect-video rounded-xl bg-white/60 backdrop-blur-[10px] border border-white/80 animate-pulse" />
    )
  }

  return (
    <div ref={containerRef} className="w-full aspect-video rounded-xl overflow-hidden">
      <Player
        ref={playerRef}
        component={Component}
        compositionWidth={1920}
        compositionHeight={1080}
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
