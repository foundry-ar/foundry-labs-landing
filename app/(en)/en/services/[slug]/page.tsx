import { notFound } from 'next/navigation'
import { NavBar, ServiceOverview, CTASection, Footer, DotGrid } from '@/components/landing'
import { getMessages } from '@/lib/i18n'
import type { Metadata } from 'next'

const m = getMessages('en')
const validSlugs = m.serviceOverviews.items.map((s) => s.slug)

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const overview = m.serviceOverviews.items.find((s) => s.slug === slug)
  if (!overview) return {}
  return {
    title: `${overview.heading} | Foundry Labs`,
    description: overview.subtitle,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!validSlugs.includes(slug)) notFound()

  return (
    <div>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm">
        {m.skipLink}
      </a>
      <DotGrid />
      <NavBar messages={m} />
      <main id="main">
        <ServiceOverview slug={slug} locale="en" messages={m} />
        <CTASection messages={m} />
      </main>
      <Footer locale="en" messages={m} />
    </div>
  )
}
