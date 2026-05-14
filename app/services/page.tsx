import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Headphones,
  Activity,
  Moon,
  HeartPulse,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "ResMed CPAP & BiPAP Service Center in Bhubaneswar | Installation, Repair & Support",

  description:
    "Authorized ResMed CPAP & BiPAP service center in Bhubaneswar offering installation, repair, maintenance, sleep test assistance, oxygen concentrator support, ventilator services, and respiratory care across Odisha.",

  keywords: [
    "ResMed service center Bhubaneswar",
    "CPAP service center Bhubaneswar",
    "BiPAP repair Bhubaneswar",
    "ResMed authorized service Odisha",
    "CPAP machine installation Bhubaneswar",
    "BiPAP maintenance Bhubaneswar",
    "sleep apnea support Odisha",
    "oxygen concentrator support Odisha",
    "ventilator support Bhubaneswar",
    "sleep therapy Odisha",
    "respiratory care services",
  ],

  alternates: {
    canonical: "https://www.resmedservicecenter.in/services",
  },

  openGraph: {
    title:
      "ResMed CPAP & BiPAP Service Center in Bhubaneswar",

    description:
      "Professional CPAP, BiPAP, sleep therapy, ventilator, and respiratory support services across Odisha.",

    url: "https://www.resmedservicecenter.in/services",

    siteName: "ResMed Service Center Odisha",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResMed CPAP & BiPAP Services Odisha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ResMed CPAP & BiPAP Service Center in Bhubaneswar",

    description:
      "Authorized respiratory care services including CPAP, BiPAP, ventilator, and sleep therapy support.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const servicesData = [
  {
    title: "Medical Equipment Service",
    description:
      "Professional servicing and maintenance of respiratory and medical equipment for long-term therapy performance.",
    icon: Activity,
  },

  {
    title: "Installation & Setup",
    description:
      "Complete installation and configuration support for CPAP, BiPAP, ventilators, and oxygen concentrators.",
    icon: Wrench,
  },

  {
    title: "Repair & Maintenance",
    description:
      "Technical troubleshooting, preventive maintenance, and repair services for uninterrupted therapy.",
    icon: ShieldCheck,
  },

  {
    title: "Customer Support",
    description:
      "Reliable support and respiratory care guidance for patients across Odisha.",
    icon: Headphones,
  },

  {
    title: "Sleep Test Assistance",
    description:
      "Professional guidance for sleep studies and sleep apnea therapy support.",
    icon: Moon,
  },

  {
    title: "Device Training",
    description:
      "Hands-on support for device usage, cleaning, mask fitting, and therapy management.",
    icon: HeartPulse,
  },
];

/* ============================
   PAGE COMPONENT
============================ */
export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#f8fafc] text-gray-900">

      {/* Soft Background Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#9E1B4F]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-rose-200/20 blur-3xl rounded-full"></div>

{/* HERO */}
<section className="relative overflow-hidden bg-white">

  {/* Soft Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff7fa] to-[#fdebf3]"></div>

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#9E1B4F]/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-pink-200/20 blur-3xl rounded-full"></div>

  {/* Extra Floating Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9E1B4F]/5 blur-3xl rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div className="relative z-10">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2
                     bg-white/80 backdrop-blur-md
                     border border-[#9E1B4F]/10
                     px-5 py-2 rounded-full mb-6
                     shadow-md"
        >

          <ShieldCheck
            size={18}
            className="text-[#9E1B4F]"
          />

          <span className="text-sm text-[#9E1B4F] font-semibold tracking-wide">
            Authorized ResMed Support Services
          </span>

        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl
                     font-extrabold text-gray-900
                     leading-[1.05] mb-6"
        >

          CPAP & BiPAP
          <span
            className="block text-[#9E1B4F]
                       drop-shadow-sm"
          >
            Respiratory Services
          </span>

        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl
                     text-gray-600 leading-8
                     max-w-2xl mb-10"
        >

          Professional installation, repair,
          maintenance, sleep therapy support,
          and respiratory care services across Odisha.

        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <Link
            href="/contact"
            className="group bg-[#9E1B4F] text-white
                       hover:bg-[#861845]
                       transition-all duration-300
                       px-8 py-4 rounded-2xl
                       font-semibold flex items-center gap-2
                       shadow-[0_12px_30px_rgba(158,27,79,0.25)]
                       hover:scale-[1.03]"
          >
            Contact Support

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />

          </Link>

          <Link
            href="/about"
            className="bg-white/80 backdrop-blur-md
                       border border-gray-200
                       hover:border-[#9E1B4F]
                       hover:text-[#9E1B4F]
                       hover:bg-white
                       transition-all duration-300
                       text-gray-800 px-8 py-4 rounded-2xl
                       font-semibold shadow-md
                       hover:shadow-xl"
          >
            About Our Team
          </Link>

        </div>

      </div>

      {/* RIGHT */}
      <div className="relative z-10">

        <div
          className="bg-white/75 backdrop-blur-2xl
                     border border-white/60
                     rounded-[32px]
                     p-8 lg:p-10
                     shadow-[0_20px_60px_rgba(158,27,79,0.15)]"
        >

          {/* Top Glow */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#9E1B4F]/5 to-transparent pointer-events-none"></div>

          <div className="relative">

            <h2 className="text-2xl font-bold text-[#9E1B4F] mb-8">
              Core Support Areas
            </h2>

            <div className="space-y-5">

              {[
                "CPAP & BiPAP Installation",
                "Sleep Apnea Therapy Guidance",
                "Machine Repair & Maintenance",
                "Oxygen Concentrator Support",
                "Mask Fitting & Device Training",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-4
                             bg-[#9E1B4F]/5
                             border border-[#9E1B4F]/10
                             rounded-2xl p-5
                             hover:bg-[#9E1B4F]/10
                             hover:translate-x-1
                             transition-all duration-300"
                >

                  <div
                    className="bg-white shadow-sm
                               rounded-xl p-2
                               group-hover:scale-110
                               transition-all duration-300"
                  >

                    <CheckCircle
                      className="text-[#9E1B4F] shrink-0"
                      size={20}
                    />

                  </div>

                  <p className="text-gray-700 leading-7 font-medium">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* INTRO */}
      <section className="relative py-20">

        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <div
            className="bg-white rounded-[32px]
                       shadow-xl border border-gray-100
                       overflow-hidden"
          >

            <div className="grid lg:grid-cols-2">

              {/* LEFT */}
              <div className="p-10 lg:p-14">

                <p className="text-[#9E1B4F] font-semibold mb-3">
                  COMPLETE RESPIRATORY SUPPORT
                </p>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">

                  Trusted CPAP & BiPAP
                  Therapy Services

                </h2>

                <p className="text-gray-700 leading-8 mb-5">

                  Our ResMed service center in Bhubaneswar
                  provides complete respiratory and sleep
                  therapy support including CPAP setup,
                  BiPAP maintenance, ventilator assistance,
                  and oxygen concentrator support.

                </p>

                <p className="text-gray-700 leading-8">

                  We help patients with installation,
                  troubleshooting, sleep study support,
                  therapy guidance, and long-term care
                  assistance throughout Odisha.

                </p>

              </div>

              {/* RIGHT */}
              <div className="bg-gradient-to-br from-[#7A123C] via-[#9E1B4F] to-[#B3265D] p-10 lg:p-14 text-white flex flex-col justify-center">

                <div className="max-w-md">

                  <p className="text-pink-200 font-semibold mb-3">
                    WHY CHOOSE US
                  </p>

                  <h3 className="text-3xl font-bold mb-6 leading-tight">

                    Reliable Respiratory
                    Care Assistance

                  </h3>

                  <div className="space-y-5 text-pink-100 leading-8">

                    <p>
                      • Genuine ResMed product support
                    </p>

                    <p>
                      • Professional technical guidance
                    </p>

                    <p>
                      • Sleep apnea therapy consultation
                    </p>

                    <p>
                      • Long-term device maintenance
                    </p>

                    <p>
                      • Trusted patient support services
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-14">

            <p className="text-[#9E1B4F] font-semibold mb-3">
              OUR SERVICES
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Professional Respiratory Solutions
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-[28px]
                             border border-gray-100
                             shadow-lg hover:shadow-2xl
                             hover:-translate-y-1
                             transition-all duration-300
                             p-8"
                >

                  <div
                    className="bg-[#9E1B4F]/10 w-fit p-4 rounded-2xl
                               mb-6 group-hover:scale-110
                               transition-all duration-300"
                  >

                    <Icon
                      className="text-[#9E1B4F]"
                      size={28}
                    />

                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 leading-8">
                    {service.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <div
            className="bg-white rounded-[32px]
                       shadow-xl border border-gray-100
                       p-10 lg:p-14"
          >

            <h2 className="text-3xl font-bold mb-10">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Do you repair CPAP machines?
                </h3>

                <p className="text-gray-700 leading-7">
                  Yes, we provide CPAP and BiPAP machine
                  repair, troubleshooting, and maintenance
                  support services.
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Do you offer sleep study assistance?
                </h3>

                <p className="text-gray-700 leading-7">
                  Yes, we provide sleep test guidance and
                  sleep apnea therapy consultation.
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-xl mb-3">
                  Which areas do you serve?
                </h3>

                <p className="text-gray-700 leading-7">
                  We provide respiratory care support
                  throughout Bhubaneswar and Odisha.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <div
            className="relative overflow-hidden
                       rounded-[36px]
                       bg-gradient-to-br
                       from-[#7A123C] via-[#9E1B4F] to-[#B3265D]
                       p-12 lg:p-16 text-center text-white"
          >

            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/10 blur-3xl rounded-full"></div>

            <div className="relative">

              <p className="text-pink-200 font-semibold mb-3">
                NEED SUPPORT?
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">

                Get Professional
                Respiratory Care Assistance

              </h2>

              <p className="text-pink-100 text-lg leading-8 max-w-3xl mx-auto mb-8">

                Contact our ResMed support team for
                CPAP, BiPAP, sleep therapy, oxygen
                concentrator, and respiratory support services.

              </p>

              <a
                href="https://wa.me/919937000606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                           bg-white text-[#9E1B4F]
                           hover:bg-pink-100
                           transition-all duration-300
                           px-8 py-4 rounded-2xl
                           font-semibold shadow-2xl"
              >
                Enquire on WhatsApp

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}