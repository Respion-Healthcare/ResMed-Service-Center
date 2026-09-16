import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import ContactForm from '@/components/sections/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    "ResMed Service Center in Bhubaneswar | CPAP & BiPAP Sales & Support",

  description:
    "Authorized ResMed Service Center in Bhubaneswar providing CPAP, BiPAP, ventilator support, oxygen concentrators, sleep therapy services, repairs, accessories, and respiratory care across Odisha.",

  keywords: [
    "ResMed service center in Bhubaneswar",
    "ResMed CPAP service Bhubaneswar",
    "BiPAP service center Bhubaneswar",
    "Authorised ResMed dealer Bhubaneswar",
    "CPAP machine repair Bhubaneswar",
    "sleep apnea treatment Odisha",
    "oxygen concentrator Bhubaneswar",
    "CPAP machine Odisha",
    "BiPAP machine Odisha",
    "respiratory care Bhubaneswar",
  ],

  alternates: {
    canonical: "https://www.resmedservicecenter.in",
  },

  openGraph: {
    title:
      "ResMed Service Center in Bhubaneswar | CPAP & BiPAP Support",

    description:
      "Professional CPAP, BiPAP, ventilator, oxygen concentrator, and respiratory care services across Odisha.",

    url: "https://www.resmedservicecenter.in",

    siteName: "ResMed Service Center Odisha",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResMed Service Center Bhubaneswar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ResMed Service Center in Bhubaneswar",

    description:
      "Authorized CPAP, BiPAP, sleep therapy, and respiratory support services in Odisha.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
}


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ContactForm />
      <Testimonials />
    </>
  )
}



