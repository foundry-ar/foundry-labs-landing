import {
  NavBar,
  HeroSection,
  AudienceSection,
  ServicesSection,
  ProcessSection,
  Footer,
  DotGrid,
  LogoBar,
  CTASection,
} from '@/components/landing'
import { getMessages } from '@/lib/i18n'

export default function Home() {
  const m = getMessages('en')

  return (
    <div>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm">
        {m.skipLink}
      </a>
      <DotGrid />
      <NavBar messages={m} />
      <main id="main">
        <HeroSection messages={m} />
        <LogoBar messages={m} />
        <AudienceSection messages={m} />
        <ServicesSection messages={m} locale="en" />
        <ProcessSection messages={m} />
        <CTASection messages={m} />
      </main>
      <Footer locale="en" messages={m} />
    </div>
  )
}
