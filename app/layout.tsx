import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ResMed Authorised Service Center | Odisha',
  description:
    'Authorised ResMed Service Center for CPAP, BiPAP & Ventilators in Odisha',
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

        {/* 🔹 Organization Logo Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ResMed Authorised Service Center Odisha",
              url: "https://resmedservicecenter.in",
              logo: "https://resmedservicecenter.in/favicon.png",
            }),
          }}
        />

        {/* Fixed Header */}
        <Header />

        {/* 🔥 OFFSET FOR FIXED HEADER */}
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
