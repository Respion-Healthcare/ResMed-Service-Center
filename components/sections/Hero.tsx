'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#7A123C] via-[#9E1B4F] to-[#C52C68] text-white">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-28 py-24 md:py-32 relative z-10">

        <div className="grid md:grid-cols-2 items-center gap-14 lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm tracking-widest uppercase font-medium">
                Authorised ResMed Partner
              </span>
            </motion.div>

            {/* Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-8 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              ResMed Service Center
              <br />
              in Bhubaneswar
              <br />
              <span className="text-pink-200">Authorised Dealer</span>
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Looking for a trusted{' '}
              <strong>ResMed service center in Bhubaneswar</strong>?
              We provide premium CPAP & BiPAP machine sales, repairs,
              servicing, masks and accessories across Odisha.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">

              <Link
                href="https://wa.me/9937144165"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 rounded-full bg-white text-[#9E1B4F] text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="group-hover:tracking-wide transition-all">
                  WhatsApp
                </span>
              </Link>

              <Link
                href="tel:+9937144165"
                className="px-10 py-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-[#9E1B4F] hover:scale-105"
              >
                Call Now
              </Link>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              
              {/* glow */}
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-90 group-hover:scale-100 transition duration-700" />

              <Image
                src="https://mlbdoiypvhyg.i.optimole.com/w:1080/h:1080/q:mauto/g:sm/f:best/ig:avif/dpr:2/https://resmedservicecenter.com/wp-content/uploads/2025/12/as1111.png"
                alt="ResMed CPAP and BiPAP machine authorised dealer in Bhubaneswar"
                width={720}
                height={420}
                priority
                className="relative object-contain w-full max-w-[720px] transition duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}