import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import ContactForm from '@/components/sections/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Authorised ResMed Service Center in Bhubaneswar | CPAP & BiPAP Dealer',
  description:
    'Authorised ResMed service center and dealer in Bhubaneswar offering CPAP & BiPAP sales, professional servicing, repairs, masks and accessories. Call for genuine support.',
  keywords: [
    'ResMed service center Bhubaneswar',
    'Authorised ResMed dealer Bhubaneswar',
    'CPAP machine service Bhubaneswar',
    'BiPAP service center Bhubaneswar',
    'ResMed CPAP Bhubaneswar',
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



