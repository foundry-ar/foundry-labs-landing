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
  themeColor: '#F5F7FA',
}

export const metadata: Metadata = {
  title: 'Foundry Labs | Ingeniería Senior y Diseño de Sistemas',
  description: 'Firma de ingeniería senior ayudando a empresas a rediseñar flujos de trabajo, construir sistemas confiables y ejecutar proyectos complejos.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
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
