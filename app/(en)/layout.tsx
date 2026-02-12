import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'

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
    url: 'https://foundrylabs.com',
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
    canonical: 'https://foundrylabs.com',
    languages: {
      'en-US': 'https://foundrylabs.com',
      'es-AR': 'https://foundrylabs.com/es',
    },
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
