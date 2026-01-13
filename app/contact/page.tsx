// app/contact/page.tsx
import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Reach out to us for any product, rental, or sleep test inquiries.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">

          {/* Address */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-4">
            <MapPin className="text-blue-700" size={28} />
            <div>
              <p className="font-semibold text-xl mb-1">Our Address</p>
              <p className="text-gray-700">
                ResMed Service Center<br />
                123 Medical Street, Bhubaneswar, Odisha, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-4">
            <Phone className="text-blue-700" size={28} />
            <div>
              <p className="font-semibold text-xl mb-1">Call Us</p>
              <p className="text-gray-700">+91 7735812597</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-4">
            <MessageCircle className="text-blue-700" size={28} />
            <div>
              <p className="font-semibold text-xl mb-1">WhatsApp</p>
              <Link
                href="https://wa.me/917735812597"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline"
              >
                Chat with us on WhatsApp
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              href="https://wa.me/917735812597"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600
                         text-white px-10 py-4 rounded-full font-semibold
                         transition-transform hover:scale-105"
            >
              Enquire Now via WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
