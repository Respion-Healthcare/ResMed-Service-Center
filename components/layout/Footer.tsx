"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const FooterHero: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* GLOW */}
      <div className="absolute top-[-30%] left-[-10%] h-[280px] w-[280px] rounded-full bg-[#9E1B4F]/20 blur-[120px]" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[280px] w-[280px] rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* BADGE */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Star
                size={14}
                className="fill-[#9E1B4F] text-[#9E1B4F]"
              />
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-300">
                Authorized ResMed Partner
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              #1 ResMed Service
              <span className="block text-[#9E1B4F]">
                Center in Odisha
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-400">
              CPAP &amp; BiPAP servicing, installation and respiratory care
              support by Respion Healthcare.
            </p>

            {/* NAVIGATION */}
            <div className="mt-6">
              <p className="mb-4 text-sm text-gray-400">Navigation</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/products"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  Products
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  Contact
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* GOOGLE REVIEWS */}
            <div className="mt-5">
              <a
                href="https://www.google.com/maps?cid=14393515399469563994"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline underline-offset-4 transition hover:text-gray-300"
              >
                Google Reviews
              </a>
            </div>

            {/* CONTACT */}
            <div className="mt-6">
              <p className="mb-2 text-sm text-gray-400">Contact Us</p>

              <a
                href="tel:+919937000606"
                className="block text-lg transition hover:text-[#9E1B4F]"
              >
                +91 99370 00606
              </a>

              <a
                href="mailto:resmedservicecenter@gmail.com"
                className="mt-1 block text-lg underline underline-offset-4 transition hover:text-[#9E1B4F]"
              >
                resmedservicecenter@gmail.com
              </a>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919937000606"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#9E1B4F] px-5 py-2.5 text-sm font-semibold transition hover:scale-105"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="tel:+919937000606"
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:bg-white/10"
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
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            {/* PHONE */}
            <a
              href="tel:+919937000606"
              className="mb-4 flex items-center gap-3 transition hover:text-[#9E1B4F]"
            >
              <Phone size={18} />

              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-sm font-semibold">+91 9937000606</p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:resmedservicecenter@gmail.com"
              className="mb-4 flex items-center gap-3 transition hover:text-[#9E1B4F]"
            >
              <Mail size={18} />

              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm font-semibold">
                  resmedservicecenter@gmail.com
                </p>
              </div>
            </a>

            {/* LOCATION */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bhubaneswar+Odisha+Respion+Healthcare"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center gap-3 transition hover:text-[#9E1B4F]"
            >
              <MapPin size={18} />

              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm font-semibold">
                  Bhubaneswar, Odisha
                </p>
              </div>
            </a>

            {/* REVIEWS */}
            <a
              href="https://www.google.com/maps?cid=14393515399469563994"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#9E1B4F]"
            >
              Google Reviews
              <ArrowUpRight size={16} />
            </a>

            {/* SOCIAL */}
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-lg bg-white/5 p-2 transition hover:bg-[#9E1B4F]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="rounded-lg bg-white/5 p-2 transition hover:bg-[#9E1B4F]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-lg bg-white/5 p-2 transition hover:bg-[#9E1B4F]"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/919937000606"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-lg bg-white/5 p-2 transition hover:bg-[#9E1B4F]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 flex flex-col justify-between border-t border-white/10 pt-4 text-xs text-gray-500 md:flex-row">
          <p>© 2026 Respion Healthcare</p>
          <p>Managed by Respion Healthcare</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterHero;