import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ResMed CPAP, BiPAP & Oxygen Concentrator Products | Bhubaneswar",

  description:
    "Explore ResMed CPAP machines, BiPAP devices, oxygen concentrators, masks, and respiratory accessories in Bhubaneswar with professional support across Odisha.",

  keywords: [
    "ResMed CPAP products",
    "BiPAP machine Bhubaneswar",
    "oxygen concentrator Odisha",
    "ResMed AirSense 10",
    "ResMed AirSense 11",
    "AirCurve 10 VAuto",
    "CPAP masks Odisha",
    "sleep apnea devices",
    "respiratory products Bhubaneswar",
    "CPAP accessories",
  ],

  alternates: {
    canonical: "https://www.resmedservicecenter.in/products",
  },

  openGraph: {
    title:
      "ResMed CPAP, BiPAP & Oxygen Concentrator Products",

    description:
      "Browse CPAP, BiPAP, oxygen concentrators, masks, and respiratory care products with support across Odisha.",

    url: "https://www.resmedservicecenter.in/products",

    siteName: "ResMed Service Center Odisha",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResMed Respiratory Products Odisha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ResMed CPAP, BiPAP & Oxygen Concentrator Products",

    description:
      "Professional respiratory care products including CPAP, BiPAP, masks, and oxygen concentrators.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
interface Product {
  name: string;
  description: string;
}

export default function ProductsPage() {
  // Product categories
  const cpapProducts: Product[] = [
    {
      name: "ResMed AirMini Portable CPAP Machine",
      description: "Compact, lightweight CPAP solution for sleep apnea.",
    },
    {
      name: "ResMed AirSense 11 AutoSet CPAP",
      description: "Automatic CPAP device with advanced pressure adjustment.",
    },
    {
      name: "ResMed AirSense 10 AutoSet CPAP",
      description: "Reliable CPAP machine for long-term therapy.",
    },
  ];

  const bipapProducts: Product[] = [
    {
      name: "ResMed Lumis 100 VPAP ST BiPAP Machine",
      description: "Advanced BiPAP system with multiple breath modes.",
    },
    {
      name: "ResMed AirCurve 10 VAuto BiPAP",
      description: "Adaptive BiPAP for comfort-focused therapy.",
    },
  ];

  const masksAccessories: Product[] = [
    {
      name: "ResMed AirFit N20 Nasal Mask",
      description: "Comfortable nasal mask with superior seal.",
    },
    {
      name: "ResMed AirFit P30i Under-Nose Mask",
      description: "Ergonomic mask for maximum comfort.",
    },
    {
      name: "CPAP & BiPAP Filters",
      description: "HEPA filters for clean airflow and maintenance.",
    },
  ];

  const oxygenProducts: Product[] = [
    {
      name: "Philips SimplyGo Mini Oxygen Concentrator",
      description: "Portable oxygen concentrator for mobility.",
    },
    {
      name: "Compact Oxygen Concentrator (3–5L)",
      description: "Reliable oxygen therapy support for home use.",
    },
  ];

  const whatsappBase = "https://wa.me/9937000606?text=";

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our ResMed & Respiratory Products
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Authorized ResMed dealer and service center offering CPAP, BiPAP,
            ventilators, masks, and accessories.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* CPAP Machines */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">CPAP Machines</h2>
            <ul className="space-y-4">
              {cpapProducts.map((product) => (
                <li
                  key={product.name}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                >
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  <Link
                    href={`${whatsappBase}${encodeURIComponent(
                      `Hello, I need product price for ${product.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 font-semibold hover:underline"
                  >
                    Enquire
                    <CheckCircle className="ml-2" size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BiPAP Machines */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">BiPAP Machines</h2>
            <ul className="space-y-4">
              {bipapProducts.map((product) => (
                <li
                  key={product.name}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                >
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  <Link
                    href={`${whatsappBase}${encodeURIComponent(
                      `Hello, I need product price for ${product.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 font-semibold hover:underline"
                  >
                    Enquire
                    <CheckCircle className="ml-2" size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Masks & Accessories */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Masks & Accessories</h2>
            <ul className="space-y-4">
              {masksAccessories.map((product) => (
                <li
                  key={product.name}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                >
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  <Link
                    href={`${whatsappBase}${encodeURIComponent(
                      `Hello, I need product price for ${product.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 font-semibold hover:underline"
                  >
                    Enquire
                    <CheckCircle className="ml-2" size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Oxygen & Support Products */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">
              Oxygen & Support Products
            </h2>
            <ul className="space-y-4">
              {oxygenProducts.map((product) => (
                <li
                  key={product.name}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                >
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  <Link
                    href={`${whatsappBase}${encodeURIComponent(
                      `Hello, I need product price for ${product.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 font-semibold hover:underline"
                  >
                    Enquire
                    <CheckCircle className="ml-2" size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              href="https://wa.me/9937000606"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600
                         text-white px-10 py-4 rounded-full font-semibold
                         transition-transform hover:scale-105"
            >
              Enquire About Products on WhatsApp
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
