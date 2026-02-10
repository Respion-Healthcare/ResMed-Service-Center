import React from "react";
import { CheckCircle, Users, Award, Toolbox } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Service Center
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Authorized ResMed dealer and service center committed to delivering
            trusted respiratory and sleep therapy solutions in Odisha.
          </p>
        </div>
      </section>

      {/* About Details */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* Our Mission */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start">
            <Award className="text-blue-700 shrink-0" size={28} />
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-gray-700">
                To provide high-quality ResMed products and professional
                services, ensuring every patient receives optimal therapy for
                better health and sleep quality.
              </p>
            </div>
          </div>

          {/* Our Team */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start">
            <Users className="text-blue-700 shrink-0" size={28} />
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Team</h2>
              <p className="text-gray-700">
                Experienced and certified professionals provide expert advice,
                device setup, maintenance, and follow-up support for all ResMed
                therapies.
              </p>
            </div>
          </div>

          {/* Our Services */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 items-start">
            <Toolbox className="text-blue-700 shrink-0" size={28} />
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Services</h2>
              <ul className="space-y-2 mt-3">
                {[
                  "Authorized ResMed CPAP & BiPAP products",
                  "Sleep test and diagnostic services",
                  "Ventilator support & accessories",
                  "Technical support and device maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <a
              href="https://wa.me/9937000606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600
                         text-white px-10 py-4 rounded-full font-semibold
                         transition-transform hover:scale-105"
            >
              Connect With Us on WhatsApp
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
