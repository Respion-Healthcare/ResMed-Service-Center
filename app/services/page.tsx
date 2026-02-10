import type { Metadata } from "next";
import React from "react";
import { CheckCircle } from "lucide-react";

/* ============================
   SEO METADATA (VERY IMPORTANT)
============================ */
export const metadata: Metadata = {
  title:
    "ResMed CPAP & BiPAP Service Center in Bhubaneswar | Installation, Repair & Support",
  description:
    "Authorized ResMed CPAP & BiPAP service center in Bhubaneswar offering installation, repair, maintenance, device training, sleep test assistance, and 24/7 customer support across Odisha.",
  keywords: [
    "ResMed service center Bhubaneswar",
    "CPAP service center Bhubaneswar",
    "BiPAP repair Bhubaneswar",
    "ResMed authorized service Odisha",
    "CPAP machine installation Bhubaneswar",
    "BiPAP maintenance Bhubaneswar",
  ],
};

/* ============================
   SERVICES DATA
============================ */
interface Service {
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    title: "Medical Equipment Service",
    description:
      "Professional servicing and maintenance of respiratory and medical equipment, ensuring devices work optimally for patient safety.",
  },
  {
    title: "Installation & Setup",
    description:
      "On-site installation and proper configuration by certified technicians for CPAP, BiPAP, ventilators, and accessories.",
  },
  {
    title: "Repair & Maintenance",
    description:
      "Quick diagnosis, repair, and preventive maintenance to minimize downtime and ensure uninterrupted therapy.",
  },
  {
    title: "Customer Support",
    description:
      "24/7 assistance for service requests, troubleshooting, and technical guidance for all ResMed devices.",
  },
  {
    title: "Sleep Test Assistance",
    description:
      "Guidance and support for booking and preparing for sleep studies to accurately detect sleep disorders.",
  },
  {
    title: "Device Training",
    description:
      "Hands-on training on device usage, mask fitting, cleaning, and basic troubleshooting for patients and caregivers.",
  },
  {
    title: "Warranty & Product Assurance",
    description:
      "Ensuring all products are genuine, under warranty, and backed by our authorized service commitment.",
  },
];

/* ============================
   PAGE COMPONENT
============================ */
export default function ServicesPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ResMed CPAP & BiPAP Services in Bhubaneswar
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Authorized installation, repair, maintenance, and support for CPAP,
            BiPAP, ventilators, accessories, and sleep test assistance.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-2">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600 shrink-0" size={24} />
                <h2 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <a
            href="https://wa.me/9937000606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600
                       text-white px-10 py-4 rounded-full font-semibold
                       transition-transform hover:scale-105"
          >
            Enquire About Services on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
