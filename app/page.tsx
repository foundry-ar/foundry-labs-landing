import {
  NavBar,
  HeroSection,
  ServicesSection,
  Footer,
  DotGrid,
  LogoBar,
  CTASection,
} from '@/components/landing'

export default function Home() {
  return (
    <div className="antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm">
        Skip to main content
      </a>
      <DotGrid />
      <NavBar />
      <main id="main">
        <HeroSection />
        <LogoBar />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
