import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Suspense } from 'react'
import '../../globals.css'
import { PHProvider } from '../../providers'
import { PostHogPageView } from '../../PostHogPageView'
import { getBootstrapData } from '../../utils/getBootstrapData'
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
  title: 'Foundry Labs | Senior Engineering & Systems Design',
  description: 'We design and build critical systems — with senior judgment first. A senior-led engineering firm helping companies redesign workflows, build reliable systems, and execute complex projects.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'senior engineering',
    'systems design',
    'software architecture',
    'engineering consulting',
    'technical consulting',
    'enterprise software',
    'system design',
    'engineering firm',
  ],
  authors: [{ name: 'Foundry Labs' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://foundry.ar/en',
    siteName: 'Foundry Labs',
    title: 'Foundry Labs | Senior Engineering & Systems Design',
    description: 'We design and build critical systems — with senior judgment first. A senior-led engineering firm helping companies redesign workflows, build reliable systems, and execute complex projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundry Labs | Senior Engineering & Systems Design',
    description: 'We design and build critical systems — with senior judgment first.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://foundry.ar/en',
    languages: {
      'en-US': 'https://foundry.ar/en',
      'es-AR': 'https://foundry.ar',
    },
  },
}

export default async function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bootstrapData = await getBootstrapData()
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
