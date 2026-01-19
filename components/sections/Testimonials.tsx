'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Rashmi Ranjan Rout",
    text: "Support & response to customers are of high quality. My family member is using a BIPAP machine currently. So far, all good. They are maintaining professionalism with utmost care & dedication. Highly recommended for the service.",
    rating: 5
  },
  {
    name: "Amresh Pal",
    text: "Very good response and prompt service by staff.",
    rating: 5
  },
  {
    name: "Ranjan Pradhan",
    text: "Best BPAP mechanic service and Eco friendly and good prices each and everyone.",
    rating: 5
  },
  {
    name: "Tarakanta Patra",
    text: "Very good service  and good behaviour respion team.",
    rating: 5
  }
  
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Animate slide
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${current * 100}%)`
    }
  }, [current])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
  What Our Customers Say
</h2>


        <div className="relative overflow-hidden max-w-4xl mx-auto">
          {/* Slides Container */}
          <div
            ref={slideRef}
            className="flex transition-transform duration-700 ease-in-out"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-full p-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between">
                  <Quote className="text-blue-500 h-12 w-12 mb-4" />
                  
                  <p className="text-xl text-gray-700 mb-6 italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-bold text-gray-900">{t.name}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={prev}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={next}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === current ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
