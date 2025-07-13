import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fliproute - Global Logistics Platform',
  description: 'Streamline your global logistics with Fliproute. Track shipments, manage customs, and optimize your supply chain.',
  keywords: 'logistics, shipping, freight, customs, supply chain, tracking',
  authors: [{ name: 'Fliproute Team' }],
  creator: 'Fliproute',
  publisher: 'Fliproute',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://flipnodes.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Fliproute - Global Logistics Platform',
    description: 'Streamline your global logistics with Fliproute. Track shipments, manage customs, and optimize your supply chain.',
    url: '/',
    siteName: 'Fliproute',
    images: [
      {
        url: '/logo-large.svg',
        width: 200,
        height: 60,
        alt: 'Fliproute Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fliproute - Global Logistics Platform',
    description: 'Streamline your global logistics with Fliproute. Track shipments, manage customs, and optimize your supply chain.',
    images: ['/logo-large.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 