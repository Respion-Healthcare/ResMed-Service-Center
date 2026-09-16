import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Headphones,
  ArrowRight,
} from "lucide-react";
export const metadata: Metadata = {
  title:
    "Contact ResMed Service Center Bhubaneswar | CPAP & BiPAP Support",

  description:
    "Contact our ResMed Service Center in Bhubaneswar for CPAP, BiPAP, ventilator, oxygen concentrator, sleep apnea therapy, and respiratory care support across Odisha.",

  keywords: [
    "contact ResMed Bhubaneswar",
    "CPAP support Odisha",
    "BiPAP service contact",
    "sleep apnea support Bhubaneswar",
    "oxygen concentrator service Odisha",
    "ventilator support Bhubaneswar",
    "respiratory care Odisha",
    "ResMed support Odisha",
    "CPAP machine support",
  ],

  alternates: {
    canonical: "https://www.resmedservicecenter.in/contact",
  },

  openGraph: {
    title:
      "Contact ResMed Service Center Bhubaneswar",

    description:
      "Get expert support for CPAP, BiPAP, ventilators, oxygen concentrators, and sleep therapy services across Odisha.",

    url: "https://www.resmedservicecenter.in/contact",

    siteName: "ResMed Service Center Odisha",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ResMed Service Center Odisha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact ResMed Service Center Bhubaneswar",

    description:
      "Professional CPAP, BiPAP, ventilator, and respiratory support services in Odisha.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const contactCards = [
  {
    title: "Call Support",
    value: "+91 9937000606",
    href: "tel:+919937000606",
    icon: Phone,
    bg: "bg-[#9E1B4F]/10",
    iconColor: "text-[#9E1B4F]",
  },

  {
    title: "WhatsApp",
    value: "Chat with our team",
    href: "https://wa.me/919937000606",
    icon: MessageCircle,
    bg: "bg-[#9E1B4F]/10",
    iconColor: "text-[#9E1B4F]",
  },

  {
    title: "Visit Us",
    value: "331/A Saheed Nagar, Bhubaneswar",
    href: "#",
    icon: MapPin,
    bg: "bg-[#9E1B4F]/10",
    iconColor: "text-[#9E1B4F]",
  },

  {
    title: "Support Hours",
    value: "Mon - Sat | 9 AM - 8 PM",
    href: "#",
    icon: Clock,
    bg: "bg-[#9E1B4F]/10",
    iconColor: "text-[#9E1B4F]",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#fffafc] text-gray-900">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#9E1B4F]/10 blur-3xl rounded-full"></div>

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

            {/* LEFT CONTENT */}
            <div>

              <div
                className="inline-flex items-center gap-2
                           bg-white/80 backdrop-blur-md
                           border border-[#9E1B4F]/10
                           px-5 py-2 rounded-full mb-6
                           shadow-md"
              >

                <Headphones
                  size={18}
                  className="text-[#9E1B4F]"
                />

                <span className="text-sm text-[#9E1B4F] font-semibold">
                  Professional Respiratory Support
                </span>

              </div>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl
                           font-extrabold text-gray-900
                           leading-[1.05] mb-6"
              >

                Contact Our
                <span className="block text-[#9E1B4F]">
                  ResMed Experts
                </span>

              </h1>

              <p
                className="text-lg md:text-xl
                           text-gray-600 leading-8
                           max-w-2xl mb-8"
              >

                Get expert assistance for CPAP, BiPAP,
                oxygen concentrators, sleep apnea therapy,
                ventilators, and respiratory support services
                across Odisha.

              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="https://wa.me/919937000606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#9E1B4F] text-white
                             hover:bg-[#861845]
                             transition-all duration-300
                             px-8 py-4 rounded-2xl
                             font-semibold flex items-center gap-2
                             shadow-[0_12px_30px_rgba(158,27,79,0.25)]"
                >
                  WhatsApp Support

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />

                </Link>

                <Link
                  href="tel:+919937000606"
                  className="bg-white border border-gray-200
                             hover:border-[#9E1B4F]
                             hover:text-[#9E1B4F]
                             transition-all duration-300
                             text-gray-800 px-8 py-4 rounded-2xl
                             font-semibold shadow-sm"
                >
                  Call Now
                </Link>

              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="relative">

              <div
                className="bg-white/75 backdrop-blur-2xl
                           border border-white/60
                           rounded-[32px]
                           p-8 lg:p-10
                           shadow-[0_20px_60px_rgba(158,27,79,0.15)]"
              >

                <h2 className="text-2xl font-bold text-[#9E1B4F] mb-8">
                  Quick Contact
                </h2>

                <div className="space-y-6">

                  {contactCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <Link
                        key={card.title}
                        href={card.href}
                        target={
                          card.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        className="group flex items-start gap-5
                                   bg-[#9E1B4F]/5
                                   border border-[#9E1B4F]/10
                                   hover:bg-[#9E1B4F]/10
                                   transition-all duration-300
                                   p-5 rounded-2xl"
                      >

                        <div
                          className={`${card.bg} p-4 rounded-2xl shrink-0`}
                        >
                          <Icon
                            className={card.iconColor}
                            size={24}
                          />
                        </div>

                        <div>

                          <p className="text-[#9E1B4F] font-semibold text-lg">
                            {card.title}
                          </p>

                          <p className="text-gray-700 mt-1 leading-7">
                            {card.value}
                          </p>

                        </div>

                      </Link>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INFO SECTION */}
      <section className="relative py-20">

        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <div
            className="bg-white rounded-[32px]
                       shadow-xl border border-pink-100
                       overflow-hidden"
          >

            <div className="grid lg:grid-cols-2">

              {/* LEFT */}
              <div className="p-10 lg:p-14">

                <p className="text-[#9E1B4F] font-semibold mb-3">
                  WHY CONTACT US
                </p>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">

                  Professional CPAP & BiPAP
                  Support Services

                </h2>

                <p className="text-gray-700 leading-8 mb-5">

                  Our ResMed service center in Bhubaneswar
                  provides professional respiratory support
                  for CPAP, BiPAP, oxygen concentrators,
                  ventilators, and sleep therapy devices.

                </p>

                <p className="text-gray-700 leading-8 mb-5">

                  We assist patients with device setup,
                  troubleshooting, maintenance, mask fitting,
                  and sleep apnea therapy guidance across Odisha.

                </p>

                <p className="text-gray-700 leading-8">

                  Whether you need technical support or
                  respiratory care consultation, our team
                  is ready to help.

                </p>

              </div>

              {/* RIGHT */}
              <div className="bg-gradient-to-br from-[#9E1B4F] via-[#861845] to-[#c2185b] p-10 lg:p-14 text-white flex flex-col justify-center">

                <div className="max-w-md">

                  <p className="text-pink-200 font-semibold mb-3">
                    RESPION HEALTHCARE
                  </p>

                  <h3 className="text-3xl font-bold mb-6 leading-tight">

                    Trusted Respiratory
                    Care Support

                  </h3>

                  <div className="space-y-5 text-pink-100 leading-8">

                    <p>
                      • CPAP & BiPAP setup assistance
                    </p>

                    <p>
                      • Sleep apnea therapy guidance
                    </p>

                    <p>
                      • Oxygen concentrator support
                    </p>

                    <p>
                      • Ventilator troubleshooting
                    </p>

                    <p>
                      • Genuine ResMed support services
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}