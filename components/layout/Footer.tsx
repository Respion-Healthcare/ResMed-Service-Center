"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react"
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa"
import { motion } from "framer-motion"

const FooterHero: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">

      {/* GLOW */}
      <div className="absolute top-[-30%] left-[-10%] w-[280px] h-[280px] bg-[#9E1B4F]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[280px] h-[280px] bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-4">
              <Star size={14} className="text-[#9E1B4F] fill-[#9E1B4F]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-gray-300">
                Authorized ResMed Partner
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              #1 ResMed Service
              <span className="block text-[#9E1B4F]">
                Center in Odisha
              </span>
            </h2>

            <p className="mt-4 text-gray-400 text-base leading-relaxed max-w-lg">
              CPAP & BiPAP servicing, installation and respiratory care support by Respion Healthcare.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href="https://wa.me/919937000606"
                target="_blank"
                className="flex items-center gap-2 bg-[#9E1B4F] px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="tel:+919937000606"
                className="flex items-center gap-2 border border-white/20 px-5 py-2.5 rounded-full text-sm hover:bg-white/10 transition"
              >
                <Phone size={16} />
                Call
              </a>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
          >

            {/* PHONE */}
            <a
              href="tel:+919937000606"
              className="flex items-center gap-3 mb-4 hover:text-[#9E1B4F] transition"
            >
              <Phone size={18} />
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-sm font-semibold">+91 9937000606</p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:support@respion.in"
              className="flex items-center gap-3 mb-4 hover:text-[#9E1B4F] transition"
            >
              <Mail size={18} />
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm font-semibold">support@respion.in</p>
              </div>
            </a>

            {/* LOCATION */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bhubaneswar+Odisha+Respion+Healthcare"
              target="_blank"
              className="flex items-center gap-3 mb-4 hover:text-[#9E1B4F] transition"
            >
              <MapPin size={18} />
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm font-semibold">Bhubaneswar, Odisha</p>
              </div>
            </a>

            {/* REVIEWS */}
            <a
              href="https://www.google.com/maps?cid=14393515399469563994"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-semibold mt-2 hover:text-[#9E1B4F] transition"
            >
              Google Reviews
              <ArrowUpRight size={16} />
            </a>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">

              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#9E1B4F] transition">
                <FaInstagram />
              </a>

              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#9E1B4F] transition">
                <FaFacebookF />
              </a>

              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#9E1B4F] transition">
                <FaLinkedinIn />
              </a>

              <a href="https://wa.me/919937000606" className="p-2 rounded-lg bg-white/5 hover:bg-[#9E1B4F] transition">
                <FaWhatsapp />
              </a>

            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <p>© 2026 Respion Healthcare</p>
          <p>Managed by Respion Healthcare</p>
        </div>

      </div>
    </footer>
  )
}

export default FooterHero