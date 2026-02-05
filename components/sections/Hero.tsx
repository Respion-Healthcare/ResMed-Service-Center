'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-[#9E1B4F] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div>
            {/* ONE & ONLY H1 - SEO OPTIMIZED */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              ResMed Service Center in Bhubaneswar - Authorised Dealer
            </h1>

            {/* Supporting SEO text */}
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              Looking for a trusted <strong>ResMed service center in Bhubaneswar</strong>?
              We are Respion Healthcare, an authorised ResMed partner providing
              CPAP and BiPAP machine sales, servicing, repairs, masks and accessories
              across Bhubaneswar and nearby areas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/919937144165"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#9E1B4F] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                WhatsApp
              </Link>

              <Link
                href="tel:+919937144165"
                className="bg-white text-[#9E1B4F] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Call
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://mlbdoiypvhyg.i.optimole.com/w:1080/h:1080/q:mauto/g:sm/f:best/ig:avif/dpr:2/https://resmedservicecenter.com/wp-content/uploads/2025/12/as1111.png"
              alt="ResMed CPAP and BiPAP machine authorised dealer in Bhubaneswar"
              width={520}
              height={300}
              priority
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
