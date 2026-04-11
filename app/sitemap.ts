import { MetadataRoute } from 'next'
import { getMessages } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://foundry.ar'
  const esMessages = getMessages('es')
  const enMessages = getMessages('en')

  const esServices = esMessages.serviceOverviews.items.map((s) => ({
    url: `${baseUrl}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: {
      languages: {
        es: `${baseUrl}/servicios/${s.slug}`,
        en: `${baseUrl}/en/services/${enMessages.serviceOverviews.items[esMessages.serviceOverviews.items.indexOf(s)].slug}`,
      },
    },
  }))

  const enServices = enMessages.serviceOverviews.items.map((s, i) => ({
    url: `${baseUrl}/en/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/en/services/${s.slug}`,
        es: `${baseUrl}/servicios/${esMessages.serviceOverviews.items[i].slug}`,
      },
    },
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          es: baseUrl,
        },
      },
    },
    ...esServices,
    ...enServices,
  ]
}
