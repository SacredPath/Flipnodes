import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlipRoutes - Global Logistics Platform',
  description: 'Streamline your global logistics with FlipRoutes. Track shipments, manage customs, and optimize your supply chain.',
  keywords: 'logistics, shipping, freight, customs, supply chain, tracking',
  authors: [{ name: 'FlipRoutes Team' }],
  creator: 'FlipRoutes',
  publisher: 'FlipRoutes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'FlipRoutes - Global Logistics Platform',
    description: 'Streamline your global logistics with FlipRoutes. Track shipments, manage customs, and optimize your supply chain.',
    url: '/',
    siteName: 'FlipRoutes',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlipRoutes - Global Logistics Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlipRoutes - Global Logistics Platform',
    description: 'Streamline your global logistics with FlipRoutes. Track shipments, manage customs, and optimize your supply chain.',
    images: ['/og-image.jpg'],
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
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 