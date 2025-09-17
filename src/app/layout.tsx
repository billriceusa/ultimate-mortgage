import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ultimate Mortgage - A better way to your best mortgage',
  description: 'Transparent pricing. Fast approvals. Human loan experts. Get your mortgage payment calculated and connect with loan experts.',
  keywords: 'mortgage, home loans, refinance, FHA, VA, conventional loans, mortgage calculator',
  openGraph: {
    title: 'Ultimate Mortgage - A better way to your best mortgage',
    description: 'Transparent pricing. Fast approvals. Human loan experts.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Mortgage - A better way to your best mortgage',
    description: 'Transparent pricing. Fast approvals. Human loan experts.',
  },
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
