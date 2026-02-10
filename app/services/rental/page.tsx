import React from "react";
import Link from "next/link";
import { CheckCircle, Clock } from "lucide-react";

export default function RentalProductsPage() {
  const whatsappLink =
    "https://wa.me/9937000606?text=" +
    encodeURIComponent(
      "Hello, I need details about ResMed rental devices (CPAP / BiPAP / Ventilator)."
    );

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ResMed Rental Devices
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Short-term and long-term rental solutions for sleep and respiratory
            care, backed by authorized ResMed service support.
          </p>
        </div>
      </section>

      {/* Rental Products */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* CPAP Rental */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">CPAP Machines on Rent</h2>
            <p className="mb-4 text-gray-700">
              CPAP rentals are ideal for patients undergoing sleep evaluation,
              short-term therapy, or trial before purchase.
            </p>
            <ul className="space-y-2">
              {[
                "ResMed AirSense series",
                "Auto CPAP & fixed CPAP options",
                "Hygienically sanitized devices",
                "Ready-to-use with accessories",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* BiPAP Rental */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">BiPAP Machines on Rent</h2>
            <p className="mb-4 text-gray-700">
              BiPAP rentals are suitable for patients with advanced respiratory
              conditions requiring variable pressure support.
            </p>
            <ul className="space-y-2">
              {[
                "ResMed AirCurve series",
                "Suitable for COPD & neuromuscular cases",
                "Comfort-focused pressure delivery",
                "Professional setup & guidance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Ventilator Rental */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Ventilators on Rent</h2>
            <p className="mb-4 text-gray-700">
              Our ventilator rental services support hospital discharge,
              home-care requirements, and temporary respiratory assistance.
            </p>
            <ul className="space-y-2">
              {[
                "Home-care & portable ventilators",
                "Clinically tested & maintained units",
                "24/7 technical service availability",
                "Flexible rental duration",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Rental Benefits */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
              <Clock size={22} />
              Rental Service Benefits
            </h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Flexible daily, weekly, and monthly rental plans",
                "Fully sanitized and quality-checked devices",
                "Authorized ResMed service support",
                "On-call technical assistance when required",
                "Upgrade or purchase options available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-700" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600
                         text-white px-10 py-4 rounded-full font-semibold
                         transition-transform hover:scale-105"
            >
              Enquire About Rentals on WhatsApp
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
