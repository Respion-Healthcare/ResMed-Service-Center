import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 
                        text-white min-h-[600px] flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            #1 Authorised ResMed Service Center & Dealer
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Looking for a trusted ResMed Service Center in Odisha? 
            We're your authorized partner for CPAP, BiPAP & Ventilator services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://wa.link/hfi9mj"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 
                         bg-green-500 hover:bg-green-600 text-white 
                         px-8 py-4 rounded-full font-semibold 
                         transition-all transform hover:scale-105"
            >
              <MessageCircle size={24} />
              WhatsApp Us
            </Link>
            
            <Link 
              href="tel:+919147738364"
              className="inline-flex items-center justify-center gap-2 
                         bg-white hover:bg-gray-100 text-blue-900 
                         px-8 py-4 rounded-full font-semibold 
                         transition-all transform hover:scale-105"
            >
              <Phone size={24} />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
