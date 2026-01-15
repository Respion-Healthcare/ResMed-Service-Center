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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

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
