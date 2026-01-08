'use client'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sucheta Kargupta",
    text: "Great purchase experience of AirSense 11 AutoSet with Tara Medical authorised service centre and quality demonstrate experience.",
    rating: 5
  },
  {
    name: "Ronita Sarkar",
    text: "The door step delivery service was very good. Mr. Biswarup has patiently demonstrated the whole process. Very satisfactory service.",
    rating: 5
  },
  {
    name: "Gautam Ghosh",
    text: "The service is very good. I have rented one CPAP machine for two months, being satisfied I bought a CPAP machine from them!",
    rating: 5
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Quote className="text-blue-500 h-12 w-12 mb-4" />
            
            <p className="text-xl text-gray-700 mb-6 italic">
              "{testimonials[current].text}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900">
                  {testimonials[current].name}
                </p>
                <div className="flex gap-1 mt-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={prev}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={next}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
