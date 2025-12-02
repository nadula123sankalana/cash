import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fund Rise Capital - Fast Business Financing in 24 Hours',
  description: 'Get the fast, flexible capital you need to seize opportunities, manage cash flow, and take your business to the next level.',
  keywords: 'business funding, fast loans, business financing, 24 hour funding, capital funding',
  authors: [{ name: 'Fund Rise Capital' }],
  openGraph: {
    title: 'Fund Rise Capital - Fast Business Financing in 24 Hours',
    description: 'Get the fast, flexible capital you need to seize opportunities, manage cash flow, and take your business to the next level.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&family=Lato:wght@400;500;600&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

