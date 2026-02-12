import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../../globals.css'

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
    url: 'https://foundrylabs.com/es',
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
    canonical: 'https://foundrylabs.com/es',
    languages: {
      'en-US': 'https://foundrylabs.com',
      'es-AR': 'https://foundrylabs.com/es',
    },
  },
}

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
