import { getMessages } from '@/lib/i18n'
import { LandingPage } from '@/components/LandingPage'
import { messages as enMessages } from '@/messages/en'

export default function Home() {
  const messages = getMessages('en') as typeof enMessages
  return <LandingPage messages={messages} locale="en" />
}
