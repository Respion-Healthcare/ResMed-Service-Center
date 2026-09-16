import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://resmedservicecenter.in'),

  title: {
    default: 'ResMed Authorised Service Center | Odisha',
    template: '%s | ResMed Service Center Odisha',
  },

  description:
    'Authorised ResMed Service Center in Odisha for CPAP, BiPAP, ventilators, sleep study services, respiratory equipment support, installation, and maintenance.',

  keywords: [
    'ResMed Service Center',
    'CPAP service Odisha',
    'BiPAP service Odisha',
    'sleep study Odisha',
    'oxygen concentrator',
    'ventilator service',
    'CPAP rental',
    'BiPAP rental',
    'respiratory care',
    'ResMed Odisha',
  ],

  authors: [{ name: 'ResMed Service Center Odisha' }],

  creator: 'ResMed Service Center Odisha',

  publisher: 'ResMed Service Center Odisha',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://resmedservicecenter.in',
  },

  openGraph: {
    title: 'ResMed Authorised Service Center | Odisha',
    description:
      'Professional CPAP, BiPAP, ventilator and sleep care services in Odisha.',
    url: 'https://resmedservicecenter.in',
    siteName: 'ResMed Service Center Odisha',
    locale: 'en_IN',
    type: 'website',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ResMed Service Center Odisha',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ResMed Authorised Service Center | Odisha',
    description:
      'Professional CPAP, BiPAP, ventilator and sleep care services in Odisha.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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

        {/* 🔹 Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',

              name: 'ResMed Authorised Service Center Odisha',

              url: 'https://resmedservicecenter.in',

              logo: 'https://resmedservicecenter.in/favicon.png',

              image: 'https://resmedservicecenter.in/og-image.jpg',

              description:
                'Authorised ResMed Service Center in Odisha providing CPAP, BiPAP, ventilator and sleep study services.',

              areaServed: {
                '@type': 'State',
                name: 'Odisha',
              },

              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: 'English',
              },
            }),
          }}
        />

        {/* Fixed Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-[110px] min-h-screen">
          {children}
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

      </body>
    </html>
  )
}