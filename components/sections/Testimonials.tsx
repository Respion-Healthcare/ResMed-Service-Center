"use client"

import { useState, useEffect } from "react"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Rashmi Ranjan Rout",
    text: "Support & response to customers are of high quality. My family member is using a BIPAP machine currently. Highly recommended.",
    rating: 5,
  },
  {
    name: "Amresh Pal",
    text: "Very good response and prompt service by staff.",
    rating: 5,
  },
  {
    name: "Ranjan Pradhan",
    text: "Best BPAP mechanic service with very good pricing.",
    rating: 5,
  },
  {
    name: "Tarakanta Patra",
    text: "Very good service and excellent behaviour from the Respion team.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    )
  }

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-[#faf7f9] via-white to-[#f8f8f8]">

      {/* GLOW */}
      <div className="absolute top-0 left-[-10%] w-[300px] h-[300px] bg-[#9E1B4F]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[300px] h-[300px] bg-pink-200/20 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <span className="inline-flex px-4 py-2 rounded-full bg-[#9E1B4F]/10 text-[#9E1B4F] text-xs font-semibold tracking-[0.18em] uppercase mb-5">
            Testimonials
          </span>

          <h2
            className="text-4xl md:text-5xl font-black tracking-tight text-gray-900"
            style={{
              fontFamily:
                "'Clash Display', 'Inter', sans-serif",
            }}
          >
            What Our
            <span className="block text-[#9E1B4F]">
              Customers Say
            </span>
          </h2>

        </motion.div>

        {/* CARD */}
        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/75 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] p-8 md:p-10"
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#9E1B4F]/10 blur-[100px] rounded-full" />

              {/* TOP */}
              <div className="relative flex items-start justify-between gap-5 mb-8">

                {/* QUOTE */}
                <div className="w-14 h-14 rounded-2xl bg-[#9E1B4F]/10 flex items-center justify-center text-[#9E1B4F]">

                  <Quote size={26} />

                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-2">

                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-[#9E1B4F] hover:text-white transition-all duration-300"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={next}
                    className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-[#9E1B4F] hover:text-white transition-all duration-300"
                  >
                    <ChevronRight size={20} />
                  </button>

                </div>
              </div>

              {/* REVIEW */}
              <p className="relative text-lg md:text-2xl leading-relaxed text-gray-700 font-light italic mb-10">
                “{testimonials[current].text}”
              </p>

              {/* FOOTER */}
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* USER */}
                <div>

                  <h3 className="text-xl font-black text-gray-900">
                    {testimonials[current].name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Verified Customer
                  </p>

                </div>

                {/* STARS */}
                <div className="flex items-center gap-2">

                  {[...Array(testimonials[current].rating)].map(
                    (_, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center"
                      >
                        <Star
                          className="fill-yellow-500 text-yellow-500"
                          size={15}
                        />
                      </div>
                    )
                  )}

                </div>

              </div>
            </motion.div>

          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">

            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all duration-500 ${
                  idx === current
                    ? "w-8 h-2 bg-[#9E1B4F]"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}