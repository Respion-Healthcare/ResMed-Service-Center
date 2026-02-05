"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* H2 - Correct hierarchy */}
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              ResMed Service Center in Bhubaneswar, Odisha
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Looking for a reliable <strong>ResMed service center in Bhubaneswar</strong>?
              If you need CPAP or BiPAP servicing, repairs, accessories, or expert
              guidance, <strong>Respion Healthcare</strong> is here to help.
              We proudly serve Bhubaneswar and nearby areas across Odisha.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Contact Us
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[360px] rounded-3xl overflow-hidden">
            <Image
              src="/images/sleep.webp"
              alt="ResMed CPAP and BiPAP service center in Bhubaneswar Odisha"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* MAP + LOCAL SEO */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
            <iframe
              title="Respion Healthcare - ResMed Service Center Bhubaneswar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29938.346641839362!2d85.83669662475586!3d20.28812216681011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190be0e70177ad%3A0xc7c009fee67f805a!2sRespion%20Healthcare%20Pvt%20Ltd%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1768299496803"
              className="w-full h-full border-0 min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Local SEO reinforcement */}
            <div className="p-6 text-gray-700 text-sm">
              <p>
                Visit <strong>Respion Healthcare</strong>, an authorised
                ResMed service center located in Bhubaneswar, Odisha,
                for CPAP and BiPAP sales, servicing, and support.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="relative bg-gray-100/90 backdrop-blur-md p-12 rounded-3xl shadow-xl space-y-10 flex flex-col justify-between min-h-[480px]"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 text-center">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent border-b-2 border-gray-300 py-3 focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent border-b-2 border-gray-300 py-3 focus:border-indigo-500 outline-none"
              />

              <textarea
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-transparent border-b-2 border-gray-300 py-3 focus:border-pink-500 outline-none resize-none"
              />
            </div>

            {submitted && (
              <p className="text-green-600 font-semibold text-center">
                Thank you. We will contact you shortly.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
