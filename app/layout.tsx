import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Foundry Labs | Senior Engineering & Systems Design',
  description: 'We design and build critical systems — with senior judgment first. A senior-led engineering firm helping companies redesign workflows, build reliable systems, and execute complex projects.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

