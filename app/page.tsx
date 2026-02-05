import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import ContactForm from '@/components/sections/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'ResMed Service Center in Bhubaneswar | CPAP & BiPAP Sales & Support',
  description:
    'Looking for a ResMed service center in Bhubaneswar? We provide CPAP & BiPAP sales, repairs, servicing, masks and accessories with genuine support. Call now.',
  keywords: [
    'ResMed service center in Bhubaneswar',
    'ResMed CPAP service Bhubaneswar',
    'BiPAP service center Bhubaneswar',
    'Authorised ResMed dealer Bhubaneswar',
    'CPAP machine repair Bhubaneswar',
  ],
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



