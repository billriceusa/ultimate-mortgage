import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ultimatemortgage.com'),
  title: 'Ultimate Mortgage Brokers - Find Your Perfect Mortgage',
  description: 'Get pre-approved in minutes with competitive rates and expert guidance. Professional mortgage brokers helping you find the perfect home loan.',
  keywords: 'mortgage, home loan, refinance, FHA, VA, conventional loan, mortgage broker, home financing, Ultimate Mortgage',
  authors: [{ name: 'Ultimate Mortgage Brokers' }],
  creator: 'Ultimate Mortgage Brokers',
  publisher: 'Ultimate Mortgage Brokers',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ultimatemortgage.com',
    siteName: 'Ultimate Mortgage Brokers',
    title: 'Ultimate Mortgage Brokers - Find Your Perfect Mortgage',
    description: 'Get pre-approved in minutes with competitive rates and expert guidance. Professional mortgage brokers helping you find the perfect home loan.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ultimate Mortgage Brokers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Mortgage Brokers - Find Your Perfect Mortgage',
    description: 'Get pre-approved in minutes with competitive rates and expert guidance.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#C60904' },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C60904',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
