'use client'

import { Player } from '@remotion/player'
import { useCallback, useEffect, useState } from 'react'
import type { ComponentType } from 'react'

const compositions: Record<string, () => Promise<{ default: ComponentType }>> = {
  'whatsapp-agents': () =>
    import('@/video/src/services/WhatsAppAgentVideo').then((m) => ({
      default: m.WhatsAppAgentVideo as ComponentType,
    })),
  'agentes-whatsapp': () =>
    import('@/video/src/services/WhatsAppAgentVideo').then((m) => ({
      default: m.WhatsAppAgentVideo as ComponentType,
    })),
  'systems-engineering': () =>
    import('@/video/src/services/SystemsEngineeringVideo').then((m) => ({
      default: m.SystemsEngineeringVideo as ComponentType,
    })),
  'ingenieria-de-sistemas': () =>
    import('@/video/src/services/SystemsEngineeringVideo').then((m) => ({
      default: m.SystemsEngineeringVideo as ComponentType,
    })),
  'enterprise-ai': () =>
    import('@/video/src/services/EnterpriseAIVideo').then((m) => ({
      default: m.EnterpriseAIVideo as ComponentType,
    })),
  'ia-empresarial': () =>
    import('@/video/src/services/EnterpriseAIVideo').then((m) => ({
      default: m.EnterpriseAIVideo as ComponentType,
    })),
}

const durations: Record<string, number> = {
  'whatsapp-agents': 560,
  'agentes-whatsapp': 560,
  'systems-engineering': 490,
  'ingenieria-de-sistemas': 490,
  'enterprise-ai': 490,
  'ia-empresarial': 490,
}

export function ServicePlayer({ slug }: { slug: string }) {
  const [Component, setComponent] = useState<ComponentType | null>(null)

  const loader = compositions[slug]
  const durationInFrames = durations[slug] ?? 270

  useEffect(() => {
    if (!loader) return
    loader().then((m) => setComponent(() => m.default))
  }, [loader])

  // Respect prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mql.matches)
    const onChange = () => setReducedMotion(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  if (!Component) {
    return (
      <div className="w-full aspect-video rounded-xl bg-white/60 backdrop-blur-[10px] border border-white/80 animate-pulse" />
    )
  }

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-white/80">
      <Player
        component={Component}
        compositionWidth={1920}
        compositionHeight={1080}
        durationInFrames={durationInFrames}
        fps={30}
        style={{ width: '100%', height: '100%' }}
        autoPlay={!reducedMotion}
        loop
        controls
      />
    </div>
  )
}
