import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
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
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* Address */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-4">
            <MapPin className="text-blue-700 shrink-0" size={28} />
            <div>
              <p className="font-semibold text-xl mb-1">Our Address</p>
              <p className="text-gray-700">
                Respion Healthcare <br />
                331/A Saheed Nagar, Bhubaneswar, Odisha, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-4">
            <Phone className="text-blue-700 shrink-0" size={28} />
            <div>
              <p className="font-semibold text-xl mb-1">Call Us</p>
              <Link
                href="tel:+919937144165"
                className="text-gray-700 hover:underline"
              >
                +91 9937144165
              </Link>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-4">
            <MessageCircle className="text-blue-700 shrink-0" size={28} />
            <div>
              <p className="font-semibold text-xl mb-1">WhatsApp</p>
              <Link
                href="https://wa.me/919937144165"
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
              href="https://wa.me/919937144165"
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
