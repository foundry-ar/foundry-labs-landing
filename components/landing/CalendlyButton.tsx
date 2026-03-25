'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

const CALENDLY_URL =
  'https://calendly.com/contact-foundry/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f5f7fa&text_color=111111&primary_color=111111'

const CALENDLY_FALLBACK_URL = 'https://calendly.com/contact-foundry/30min'

interface CalendlyButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function CalendlyButton({ className, children, onClick }: CalendlyButtonProps) {
  useEffect(() => {
    if (document.getElementById('calendly-css')) return
    const link = document.createElement('link')
    link.id = 'calendly-css'
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)

    if (document.getElementById('calendly-js')) return
    const script = document.createElement('script')
    script.id = 'calendly-js'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

  }, [])

  const handleClick = () => {
    onClick?.()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_FALLBACK_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  )
}
