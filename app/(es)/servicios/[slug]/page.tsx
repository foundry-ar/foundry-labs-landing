import { notFound } from 'next/navigation'
import { NavBar, ServiceOverview, CTASection, Footer, DotGrid } from '@/components/landing'
import { getMessages } from '@/lib/i18n'
import type { Metadata } from 'next'

const m = getMessages('es')
const validSlugs = m.serviceOverviews.items.map((s) => s.slug)

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }))
}

const enMessages = getMessages('en')

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const index = m.serviceOverviews.items.findIndex((s) => s.slug === slug)
  const overview = index >= 0 ? m.serviceOverviews.items[index] : undefined
  if (!overview) return {}
  const enSlug = enMessages.serviceOverviews.items[index]?.slug
  return {
    title: `${overview.heading} | Foundry Labs`,
    description: overview.subtitle,
    alternates: {
      canonical: `https://foundry.ar/servicios/${slug}`,
      languages: {
        'es-AR': `https://foundry.ar/servicios/${slug}`,
        ...(enSlug ? { 'en-US': `https://foundry.ar/en/services/${enSlug}` } : {}),
      },
    },
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      alternateLocale: 'en_US',
      url: `https://foundry.ar/servicios/${slug}`,
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
  const index = m.serviceOverviews.items.findIndex((s) => s.slug === slug)
  const enSlug = enMessages.serviceOverviews.items[index]?.slug
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
              url: `https://foundry.ar/servicios/${slug}`,
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://foundry.ar' },
                { '@type': 'ListItem', position: 2, name: overview.heading, item: `https://foundry.ar/servicios/${slug}` },
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
      <NavBar messages={m} locale="es" />
      <main id="main">
        <ServiceOverview slug={slug} locale="es" messages={m} />
        <CTASection messages={m} />
      </main>
      <Footer locale="es" messages={m} />
    </div>
  )
}
