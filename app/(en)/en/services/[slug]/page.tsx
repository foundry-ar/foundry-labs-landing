import { notFound } from 'next/navigation'
import { NavBar, ServiceOverview, CTASection, Footer, DotGrid } from '@/components/landing'
import { getMessages } from '@/lib/i18n'
import type { Metadata } from 'next'

const m = getMessages('en')
const validSlugs = m.serviceOverviews.items.map((s) => s.slug)

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }))
}

const esMessages = getMessages('es')

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const index = m.serviceOverviews.items.findIndex((s) => s.slug === slug)
  const overview = index >= 0 ? m.serviceOverviews.items[index] : undefined
  if (!overview) return {}
  const esSlug = esMessages.serviceOverviews.items[index]?.slug
  return {
    title: `${overview.heading} | Foundry Labs`,
    description: overview.subtitle,
    alternates: {
      canonical: `https://foundry.ar/en/services/${slug}`,
      languages: {
        'en-US': `https://foundry.ar/en/services/${slug}`,
        ...(esSlug ? { 'es-AR': `https://foundry.ar/servicios/${esSlug}` } : {}),
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'es_AR',
      url: `https://foundry.ar/en/services/${slug}`,
      siteName: 'Foundry Labs',
      title: `${overview.heading} | Foundry Labs`,
      description: overview.subtitle,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${overview.heading} | Foundry Labs`,
      description: overview.subtitle,
    },
  }
}

function ServiceJsonLd({ slug, overview }: { slug: string; overview: typeof m.serviceOverviews.items[number] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: overview.heading,
              description: overview.subtitle,
              provider: { '@id': 'https://foundry.ar/#organization' },
              url: `https://foundry.ar/en/services/${slug}`,
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://foundry.ar/en' },
                { '@type': 'ListItem', position: 2, name: overview.heading, item: `https://foundry.ar/en/services/${slug}` },
              ],
            },
          ],
        }),
      }}
    />
  )
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!validSlugs.includes(slug)) notFound()
  const overview = m.serviceOverviews.items.find((s) => s.slug === slug)!

  return (
    <div>
      <ServiceJsonLd slug={slug} overview={overview} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm">
        {m.skipLink}
      </a>
      <DotGrid />
      <NavBar messages={m} locale="en" />
      <main id="main">
        <ServiceOverview slug={slug} locale="en" messages={m} />
        <CTASection messages={m} />
      </main>
      <Footer locale="en" messages={m} />
    </div>
  )
}
