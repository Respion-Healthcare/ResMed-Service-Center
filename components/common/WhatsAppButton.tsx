'use client'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/hfi9mj"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 
                 text-white p-4 rounded-full shadow-lg 
                 transform hover:scale-110 transition-all
                 animate-bounce"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
