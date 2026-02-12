import { en, es } from '@/messages'
import type { Messages } from '@/messages'

export type Locale = 'en' | 'es'

const messages: Record<Locale, Messages> = { en, es }

export function getMessages(locale: Locale): Messages {
  return messages[locale]
}
