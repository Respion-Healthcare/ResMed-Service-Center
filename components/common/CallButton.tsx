'use client'
import { Phone } from 'lucide-react'

export default function CallButton() {
  return (
    <a
      href="tel:+919937144165"
      className="fixed bottom-24 right-6 z-50 
                 bg-blue-600 hover:bg-blue-700 
                 text-white p-4 rounded-full shadow-lg
                 transform hover:scale-110 transition-all"
      aria-label="Call us"
    >
      <Phone size={28} />
    </a>
  )
}
