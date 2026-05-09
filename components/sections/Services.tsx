"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, MessageCircle, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const servicesData = [
  {
    title: "Medical Equipment Service",
    description:
      "Advanced servicing and precision maintenance for respiratory and sleep therapy devices.",
    image: "/images/service-1.jpg",
    video: "https://www.youtube.com/watch?v=c6Vwca9kJLE",
  },
  {
    title: "Installation & Setup",
    description:
      "Professional on-site installation with complete device configuration and guidance.",
    image: "/images/service-3.avif",
    video: "https://www.youtube.com/watch?v=slny79QtfFs",
  },
  {
    title: "Repair & Maintenance",
    description:
      "Fast diagnostics and expert repair solutions to ensure uninterrupted performance.",
    image: "/images/service-5.jpg",
    video: "https://www.youtube.com/watch?v=CGjFMrV7Meo&t=199s",
  },
  {
    title: "Customer Support",
    description:
      "Dedicated respiratory care support with fast response and technical assistance.",
    image: "/images/service-4.jpeg",
    link: "/contact",
  },
]

const Services: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#faf7f9] via-white to-[#f7f7f8]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[#9E1B4F]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-pink-200/20 blur-[140px] rounded-full" />

      <div className="relative max-w-[1650px] mx-auto px-6 md:px-12 lg:px-20 xl:px-28">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-5xl mb-20"
        >

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#9E1B4F]/10 text-[#9E1B4F] text-sm font-semibold tracking-[0.18em] uppercase mb-7">
            Premium Respiratory Care
          </span>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-gray-900"
            style={{
              fontFamily: "'Clash Display', 'Inter', sans-serif",
            }}
          >
            Trusted ResMed
            <br />
            Service Center
            <span className="block text-[#9E1B4F]">
              in Odisha
            </span>
          </h2>

          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl font-light">
            Professional CPAP, BiPAP and ventilator servicing with
            installation, maintenance and expert respiratory care
            support across Odisha.
          </p>

        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group relative"
            >

              <div className="relative h-full overflow-hidden rounded-[34px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_15px_60px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_25px_80px_rgba(0,0,0,0.14)]">

                {/* IMAGE SECTION */}
                {service.link ? (
                  <Link href={service.link} className="block">

                    <div className="relative h-[320px] overflow-hidden">

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      {/* ICON */}
                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

                          <MessageCircle
                            size={34}
                            className="text-[#9E1B4F]"
                          />

                        </div>
                      </div>

                      {/* FLOATING TAG */}
                      <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl text-xs font-bold tracking-[0.15em] uppercase text-[#9E1B4F]">
                        Support
                      </div>

                    </div>
                  </Link>
                ) : (
                  <a
                    href={service.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >

                    <div className="relative h-[320px] overflow-hidden">

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      {/* PLAY BUTTON */}
                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

                          <Play
                            size={34}
                            fill="currentColor"
                            className="text-[#9E1B4F] ml-1"
                          />

                        </div>
                      </div>

                      {/* FLOATING TAG */}
                      <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl text-xs font-bold tracking-[0.15em] uppercase text-[#9E1B4F]">
                        Video Guide
                      </div>

                    </div>
                  </a>
                )}

                {/* CONTENT */}
                <div className="p-8">

                  <div className="flex items-start justify-between gap-4 mb-5">

                    <h3 className="text-2xl font-black leading-tight text-gray-900">
                      {service.title}
                    </h3>

                    <div className="w-11 h-11 rounded-full bg-[#9E1B4F]/10 flex items-center justify-center text-[#9E1B4F] group-hover:bg-[#9E1B4F] group-hover:text-white transition-all duration-500">

                      <ArrowUpRight size={20} />

                    </div>
                  </div>

                  <p className="text-[17px] leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                </div>

                {/* BOTTOM BORDER EFFECT */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#9E1B4F] transition-all duration-700 group-hover:w-full" />

              </div>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#9E1B4F] text-white text-lg font-semibold tracking-wide shadow-[0_15px_40px_rgba(158,27,79,0.35)] hover:scale-105 hover:bg-[#861645] transition-all duration-500"
          >
            Explore All Services

            <ArrowUpRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </motion.div>
      </div>
    </section>
  )
}

export default Services