import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://naturopathicdoctorfinder.com'),
  title: {
    default: 'Find Licensed Naturopathic Doctors | NaturopathicDoctorFinder.com',
    template: '%s | NaturopathicDoctorFinder.com',
  },
  description: 'Find licensed Naturopathic Doctors (NDs) near you. The only neutral directory covering all ~7,000 NDs across 25 licensed US states — not just AANP members.',
  keywords: ['naturopathic doctor', 'naturopath near me', 'naturopathic medicine', 'find ND', 'licensed naturopath', 'natural medicine doctor'],
  openGraph: {
    type: 'website',
    siteName: 'NaturopathicDoctorFinder.com',
    title: 'Find Licensed Naturopathic Doctors | NaturopathicDoctorFinder.com',
    description: 'Find licensed Naturopathic Doctors near you. The only neutral directory covering all NDs across 25 licensed US states.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://naturopathicdoctorfinder.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
