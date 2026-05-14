"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react"

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setSubmitted(true)

    setFormData({
      name: "",
      email: "",
      message: "",
    })

    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf7f9] via-white to-[#f7f7f8] py-16 md:py-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-[-10%] w-[350px] h-[350px] bg-[#9E1B4F]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[350px] h-[350px] bg-pink-200/20 blur-[120px] rounded-full" />

      <div className="relative max-w-[1450px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 space-y-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >

            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9E1B4F]/10 text-[#9E1B4F] text-xs font-semibold tracking-[0.16em] uppercase mb-6">

              <CheckCircle2 size={14} />

              Trusted Respiratory Care

            </div>

            {/* HEADING */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight text-gray-900"
              style={{
                fontFamily:
                  "'Clash Display', 'Inter', sans-serif",
              }}
            >
              ResMed Service
              <br />
              Center
              <span className="block text-[#9E1B4F]">
                Bhubaneswar
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Premium CPAP & BiPAP servicing,
              repairs, accessories and expert respiratory
              care support by
              <strong className="text-gray-900">
                {" "}Respion Healthcare
              </strong>
              .
            </p>

            {/* CONTACT INFO */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#9E1B4F]">

                  <MapPin size={20} />

                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">
                    Location
                  </p>

                  <p className="text-base font-semibold text-gray-900">
                    Bhubaneswar, Odisha
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#9E1B4F]">

                  <Phone size={20} />

                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">
                    Phone
                  </p>

                  <p className="text-base font-semibold text-gray-900">
                    +91 9937000606
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#9E1B4F]">

                  <Mail size={20} />

                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">
                    Email
                  </p>

                  <p className="text-base font-semibold text-gray-900">
                    support@respionhealthcare.com
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <button
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="group mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9E1B4F] text-white text-base font-semibold shadow-[0_12px_30px_rgba(158,27,79,0.25)] hover:scale-105 hover:bg-[#861645] transition-all duration-500"
            >
              Contact Us

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute inset-0 bg-[#9E1B4F]/10 blur-[100px] rounded-full" />

            <div className="relative h-[420px] md:h-[500px] rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

              <Image
                src="/images/sleep.webp"
                alt="ResMed CPAP and BiPAP service center in Bhubaneswar Odisha"
                fill
                priority
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-2xl rounded-[24px] p-5 shadow-xl border border-white/40">

                <p className="text-xs uppercase tracking-[0.15em] text-[#9E1B4F] font-bold mb-2">
                  Authorized ResMed Partner
                </p>

                <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                  Expert Sleep &
                  Respiratory Care
                </h3>

              </div>

            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-start">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.08)]"
          >

            <iframe
              title="Respion Healthcare - ResMed Service Center Bhubaneswar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29938.346641839362!2d85.83669662475586!3d20.28812216681011!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190be0e70177ad%3A0xc7c009fee67f805a!2sRespion%20Healthcare%20Pvt%20Ltd%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1768299496803"
              className="w-full h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="p-6">

              <p className="text-base leading-relaxed text-gray-600">
                Visit
                <strong className="text-gray-900">
                  {" "}Respion Healthcare
                </strong>
                {" "}for premium CPAP & BiPAP sales,
                servicing and respiratory care support.
              </p>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            id="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col justify-between"
          >

            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-6">
                Let’s Talk
              </h3>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full mb-4 px-5 py-4 rounded-2xl border"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mb-4 px-5 py-4 rounded-2xl border"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full px-5 py-4 rounded-2xl border"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-[#9E1B4F] text-white py-4 rounded-2xl font-bold"
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default ContactSection