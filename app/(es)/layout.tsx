import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Suspense } from 'react'
import '../globals.css'
import { PHProvider } from '../providers'
import { PostHogPageView } from '../PostHogPageView'
import { getBootstrapData } from '../utils/getBootstrapData'
import { ConsoleGreeting } from '@/components/ConsoleGreeting'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '600'],
})

export const viewport: Viewport = {
  themeColor: '#FAFBFC',
}

export const metadata: Metadata = {
  title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
  description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  keywords: [
    'ingeniería senior',
    'diseño de sistemas',
    'arquitectura de software',
    'consultoría técnica',
    'software empresarial',
    'firma de ingeniería',
  ],
  authors: [{ name: 'Foundry Labs' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    url: 'https://foundry.ar',
    siteName: 'Foundry Labs',
    title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
    description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
    images: [
      {
        url: 'https://foundry.ar/logo-forge-twitter.png',
        width: 1200,
        height: 630,
        alt: 'Foundry Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
    description: 'Diseñamos y construimos sistemas críticos — con criterio senior.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://foundry.ar',
    languages: {
      'x-default': 'https://foundry.ar',
      'en-US': 'https://foundry.ar/en',
      'es-AR': 'https://foundry.ar',
    },
  },
}

export default async function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bootstrapData = await getBootstrapData()
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://foundry.ar/#organization',
                  name: 'Foundry Labs',
                  url: 'https://foundry.ar',
                  logo: 'https://foundry.ar/logo-forge.svg',
                  email: 'contact@foundry.ar',
                  description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://foundry.ar/#website',
                  url: 'https://foundry.ar',
                  name: 'Foundry Labs',
                  publisher: { '@id': 'https://foundry.ar/#organization' },
                  inLanguage: ['es-AR', 'en-US'],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <PHProvider bootstrapData={bootstrapData}>
          <Suspense>
            <PostHogPageView />
          </Suspense>
          <ConsoleGreeting />
          {children}
        </PHProvider>
      </body>
    </html>
  )
}
