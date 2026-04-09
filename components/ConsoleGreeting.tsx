'use client'

import { useEffect } from 'react'

export function ConsoleGreeting() {
  useEffect(() => {
    console.log(
      '%c⬛⬜\n⬜⬛ Foundry',
      'font-size:14px;font-weight:bold;color:#1a1a1a',
    )
    console.log(
      '%cBuilt with senior judgment.\nhttps://foundry.ar',
      'font-size:11px;color:#666',
    )
  }, [])
  return null
}
