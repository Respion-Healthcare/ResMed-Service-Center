import React from "react"
import Link from "next/link"
import { CheckCircle, BookOpen, Video, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CPAP & BiPAP Tutorials, Guides & Setup Videos | Bhubaneswar",
  description:
    "Learn CPAP and BiPAP setup, mask fitting, sleep test preparation, and device maintenance with professional tutorials from ResMed experts in Bhubaneswar.",
  keywords: [
    "CPAP tutorial",
    "BiPAP setup guide",
    "ResMed tutorials",
    "sleep apnea guide",
  ],
  alternates: {
    canonical: "https://www.resmedservicecenter.in/tutorials",
  },
}

interface Tutorial {
  title: string
  description: string
  videoUrl?: string
}

export default function TutorialsPage() {
  const tutorials: Tutorial[] = [
    {
      title: "CPAP Machine Setup",
      description:
        "Step-by-step guide on assembling and starting your CPAP device safely at home.",
      videoUrl: "https://www.youtube.com/embed/do2mdR9tmDU",
    },
    {
      title: "BiPAP Machine Usage",
      description:
        "Learn proper usage and pressure handling for BiPAP therapy.",
    },
    {
      title: "Mask Fitting & Comfort Tips",
      description:
        "How to choose and fit nasal, full-face, and pillow masks comfortably.",
    },
    {
      title: "Sleep Test Preparation",
      description:
        "Simple steps to prepare for an accurate sleep study.",
    },
    {
      title: "Device Cleaning & Maintenance",
      description:
        "Keep your CPAP/BiPAP clean, hygienic, and long-lasting.",
    },
  ]

  const whatsappBase = "https://wa.me/9937144165?text="

  return (
    <main className="bg-gradient-to-b from-[#fff5f8] via-white to-[#fdf2f7] text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#9E1B4F] text-white py-20">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Tutorials & Guides
          </h1>

          <p className="mt-4 text-white/80 text-lg md:text-xl">
            Learn CPAP & BiPAP setup, maintenance and sleep therapy guidance
            from certified experts.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6 space-y-10">

          {tutorials.map((t, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-500 p-7 hover:-translate-y-1"
            >

              {/* HEADER */}
              <div className="flex gap-4">

                <div className="h-12 w-12 rounded-2xl bg-[#9E1B4F]/10 flex items-center justify-center text-[#9E1B4F]">
                  {t.videoUrl ? <Video size={20} /> : <BookOpen size={20} />}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {t.title}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    {t.description}
                  </p>
                </div>

              </div>

              {/* VIDEO */}
              {t.videoUrl && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
                  <iframe
                    src={t.videoUrl}
                    title={t.title}
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                </div>
              )}

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">

                <Link
                  href={`${whatsappBase}${encodeURIComponent(
                    `Hello, I need help with ${t.title}`
                  )}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[#9E1B4F] font-semibold hover:gap-3 transition-all"
                >
                  Ask on WhatsApp
                  <ArrowUpRight size={18} />
                </Link>

                <CheckCircle className="text-green-500" size={18} />

              </div>

            </div>
          ))}

          {/* FINAL CTA */}
          <div className="text-center pt-8">

            <Link
              href="https://wa.me/9937144165"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#9E1B4F] hover:bg-[#861645] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
            >
              Get Full Support on WhatsApp
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>
      </section>
    </main>
  )
}