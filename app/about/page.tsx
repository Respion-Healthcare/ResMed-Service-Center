import React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import {
  CheckCircle,
  Users,
  Award,
  Toolbox,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "About ResMed Service Center in Bhubaneswar | CPAP & BiPAP Experts",

  description:
    "Authorized ResMed Service Center in Bhubaneswar offering CPAP, BiPAP, ventilator support, sleep therapy solutions, oxygen concentrator services, and respiratory care across Odisha.",

  keywords: [
    "ResMed service center Bhubaneswar",
    "CPAP service Odisha",
    "BiPAP machine support",
    "sleep apnea treatment Odisha",
    "CPAP experts Bhubaneswar",
    "oxygen concentrator service",
    "ventilator support Odisha",
    "sleep therapy Odisha",
    "respiratory care Bhubaneswar",
  ],

  alternates: {
    canonical: "https://www.resmedservicecenter.in/about",
  },

  openGraph: {
    title:
      "About ResMed Service Center in Bhubaneswar",

    description:
      "Learn about our CPAP, BiPAP, ventilator, and respiratory care services across Odisha.",

    url: "https://www.resmedservicecenter.in/about",

    siteName: "ResMed Service Center Odisha",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About ResMed Service Center Odisha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About ResMed Service Center in Bhubaneswar",

    description:
      "Trusted CPAP, BiPAP, ventilator, and sleep therapy support services in Odisha.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

const services = [
  "Authorized ResMed CPAP & BiPAP products",
  "Sleep test and sleep apnea support",
  "Ventilator and oxygen concentrator assistance",
  "Technical support and device maintenance",
  "Mask fitting and therapy guidance",
  "Accessories and replacement support",
]

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#FCF7F9] text-gray-900">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#C02668]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-200/20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">

        {/* Soft Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff7fa] to-[#fdebf3]"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#9E1B4F]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-pink-200/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-[#9E1B4F]/10 border border-[#9E1B4F]/10 px-5 py-2 rounded-full mb-6">

                <ShieldCheck
                  size={18}
                  className="text-[#9E1B4F]"
                />

                <span className="text-sm text-[#9E1B4F] font-medium">
                  Authorized ResMed Service Partner
                </span>

              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">

                About Our
                <span className="block text-[#9E1B4F]">
                  Respiratory Care Experts
                </span>

              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-8 max-w-2xl mb-8">

                We provide trusted CPAP, BiPAP, ventilator,
                oxygen concentrator, and sleep therapy support
                services across Bhubaneswar and Odisha.

              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="group bg-[#9E1B4F] text-white
                             hover:bg-[#861845]
                             transition-all duration-300
                             px-8 py-4 rounded-2xl
                             font-semibold flex items-center gap-2
                             shadow-xl"
                >
                  Contact Our Team

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />

                </Link>

                <Link
                  href="/services"
                  className="bg-white border border-gray-200
                             hover:border-[#9E1B4F]
                             hover:text-[#9E1B4F]
                             transition-all duration-300
                             text-gray-800 px-8 py-4 rounded-2xl
                             font-semibold shadow-sm"
                >
                  Explore Services
                </Link>

              </div>

            </div>

            {/* RIGHT CARD */}
            <div>

              <div
                className="bg-[#fff7fa]/90 backdrop-blur-xl
                           border border-pink-100
                           rounded-[32px]
                           p-8 lg:p-10
                           shadow-2xl"
              >

                <div className="space-y-8">

                  <div className="flex items-start gap-5">

                    <div className="bg-[#9E1B4F]/10 p-4 rounded-2xl">
                      <HeartPulse
                        className="text-[#9E1B4F]"
                        size={28}
                      />
                    </div>

                    <div>

                      <h3 className="text-gray-900 text-2xl font-bold mb-2">
                        Patient Focused Care
                      </h3>

                      <p className="text-gray-600 leading-7">
                        We help patients improve breathing,
                        sleep quality, and respiratory wellness
                        with genuine therapy solutions.
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-5">

                    <div className="bg-[#9E1B4F]/10 p-4 rounded-2xl">
                      <Stethoscope
                        className="text-[#9E1B4F]"
                        size={28}
                      />
                    </div>

                    <div>

                      <h3 className="text-gray-900 text-2xl font-bold mb-2">
                        Expert Technical Support
                      </h3>

                      <p className="text-gray-600 leading-7">
                        From machine setup to maintenance and
                        troubleshooting, our team provides
                        complete respiratory care assistance.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="relative py-20">

        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-10">

          {/* Mission + Team */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Mission */}
            <div
              className="bg-white rounded-[32px]
                         shadow-xl border border-[#F3D9E5]
                         p-10 hover:-translate-y-1
                         hover:shadow-2xl
                         transition-all duration-300"
            >

              <div className="bg-[#F7E7EE] w-fit p-4 rounded-2xl mb-6">

                <Award
                  className="text-[#9E1B4F]"
                  size={28}
                />

              </div>

              <h2 className="text-3xl font-bold mb-5">
                Our Mission
              </h2>

              <p className="text-gray-700 leading-8 mb-5">

                Our mission is to provide reliable respiratory
                care solutions through genuine ResMed CPAP,
                BiPAP, and sleep therapy devices.

              </p>

              <p className="text-gray-700 leading-8">

                We are committed to helping patients improve
                sleep quality, breathing comfort, and overall
                health through expert guidance and professional
                support services.

              </p>

            </div>

            {/* Team */}
            <div
              className="bg-gradient-to-br from-[#7C123D] via-[#9E1B4F] to-[#C02668]
                         rounded-[32px]
                         shadow-xl
                         p-10 text-white
                         hover:-translate-y-1
                         hover:shadow-2xl
                         transition-all duration-300"
            >

              <div className="bg-white/10 w-fit p-4 rounded-2xl mb-6">

                <Users
                  className="text-pink-200"
                  size={28}
                />

              </div>

              <h2 className="text-3xl font-bold mb-5">
                Our Expert Team
              </h2>

              <p className="text-pink-100 leading-8 mb-5">

                Our experienced professionals provide support
                for CPAP, BiPAP, ventilator, oxygen concentrator,
                and sleep therapy solutions.

              </p>

              <p className="text-pink-100 leading-8">

                We focus on patient comfort, responsive support,
                and long-term respiratory wellness across Odisha.

              </p>

            </div>

          </div>

          {/* Why Trust Us */}
          <div
            className="bg-white rounded-[32px]
                       shadow-xl border border-[#F3D9E5]
                       p-10 lg:p-14
                       hover:shadow-2xl
                       transition-all duration-300"
          >

            <p className="text-[#9E1B4F] font-semibold mb-3">
              WHY PATIENTS TRUST US
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">

              Trusted Respiratory &
              Sleep Therapy Support

            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Genuine Products
                </h3>

                <p className="text-gray-700 leading-7">
                  Authorized ResMed CPAP and BiPAP devices
                  with reliable support and assistance.
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Expert Guidance
                </h3>

                <p className="text-gray-700 leading-7">
                  Professional therapy consultation, mask
                  fitting, and respiratory care support.
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Long-Term Care
                </h3>

                <p className="text-gray-700 leading-7">
                  Maintenance, troubleshooting, and patient
                  support services throughout Odisha.
                </p>

              </div>

            </div>

          </div>

          {/* Services */}
          <div
            className="bg-gradient-to-br from-[#7C123D] via-[#9E1B4F] to-[#C02668]
                       rounded-[32px]
                       shadow-xl
                       p-10 lg:p-14 text-white"
          >

            <div className="flex items-center gap-4 mb-8">

              <div className="bg-white/10 p-4 rounded-2xl">

                <Toolbox
                  className="text-pink-200"
                  size={28}
                />

              </div>

              <h2 className="text-3xl font-bold">
                Our Services
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {services.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4
                             bg-white/10
                             border border-white/10
                             rounded-2xl p-5
                             hover:bg-white/20
                             transition-all duration-300"
                >

                  <CheckCircle
                    className="text-pink-200 shrink-0 mt-1"
                    size={22}
                  />

                  <p className="text-pink-100 leading-7">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* FAQ */}
          <div
            className="bg-white rounded-[32px]
                       shadow-xl border border-[#F3D9E5]
                       p-10 lg:p-14"
          >

            <h2 className="text-3xl font-bold mb-10">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Do you provide CPAP servicing?
                </h3>

                <p className="text-gray-700 leading-7">
                  Yes, we provide professional CPAP and
                  BiPAP servicing, setup, maintenance,
                  and technical support.
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Do you offer sleep study support?
                </h3>

                <p className="text-gray-700 leading-7">
                  Yes, we assist patients with sleep study
                  guidance and therapy support services.
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Which locations do you serve?
                </h3>

                <p className="text-gray-700 leading-7">
                  We provide respiratory care support
                  across Bhubaneswar and Odisha.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}