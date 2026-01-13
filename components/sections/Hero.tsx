import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-[#9E1B4F] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              #1 Authorised ResMed <br />
              Service Center & Dealer
            </h1>

            <p className="text-lg text-white/90 mb-8 max-w-xl">
              If you are looking for a trusted ResMed Service Center in Odisha, West Bengal,
              this is the right place for you. We’re Respion Healthcare — an
              Authorised ResMed Service Center and Sales Partner Odisha.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://wa.me/917735812597"
                className="bg-white text-[#9E1B4F] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Whatsapp
              </Link>

              <Link
                href="tel:+917735812597"
                className="bg-white text-[#9E1B4F] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Call
              </Link>
            </div>
          </div>

          {/* Right Image (EXTERNAL HQ IMAGE) */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://mlbdoiypvhyg.i.optimole.com/w:1080/h:1080/q:mauto/g:sm/f:best/ig:avif/dpr:2/https://resmedservicecenter.com/wp-content/uploads/2025/12/as1111.png"
              alt="ResMed Device"
              width={520}
              height={300}
              priority
              unoptimized
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
