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

        {/* 🔹 TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              #No.1 ResMed Service Center in Odisha
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Looking for a reliable ResMed service center in Odisha? Need
              ResMed CPAP service near you or ResMed BiPAP service near you?
              You’ve come to the right place.{" "}
              <strong>Respion Healthcare</strong> is your trusted partner
              for all your ResMed device servicing needs in Odisha and the
              surrounding areas.
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
              alt="ResMed Service Center"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 🔹 BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* MAP */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
            <iframe
              title="Respion Healthcare"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29938.346641839362!2d85.83669662475586!3d20.28812216681011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190be0e70177ad%3A0xc7c009fee67f805a!2sRespion%20Healthcare%20Pvt%20Ltd%20%2C%20Bhubaneswar%20-%20Oxygen%20Concentrator%20%2C%20Resmed%20Auto%20CPAP%20%2C%20BiPAP%20%2C%20Home%20Sleep%20Study!5e0!3m2!1sen!2sin!4v1768299496803!5m2!1sen!2sin"
              className="w-full h-full border-0 min-h-[480px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b-2 border-gray-300 py-3 focus:border-blue-500 outline-none"
                  placeholder="Name"
                />
                <label className="absolute left-0 -top-2.5 text-sm text-gray-500">
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b-2 border-gray-300 py-3 focus:border-indigo-500 outline-none"
                  placeholder="Email"
                />
                <label className="absolute left-0 -top-2.5 text-sm text-gray-500">
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b-2 border-gray-300 py-3 focus:border-pink-500 outline-none resize-none"
                  placeholder="Message"
                />
                <label className="absolute left-0 -top-2.5 text-sm text-gray-500">
                  Message
                </label>
              </div>
            </div>

            {submitted && (
              <p className="text-green-600 font-semibold text-center">
                ✅ Thank you! We will contact you soon.
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
