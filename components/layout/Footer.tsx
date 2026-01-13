import React from "react";
import Link from "next/link";

const FooterHero: React.FC = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-10">
            #1 ResMed Service <br /> Center in Odisha
          </h2>

          <button className="flex items-center gap-3 bg-white text-black w-fit px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            <span className="w-5 h-5 border border-black rounded-full flex items-center justify-center">
              ⦿
            </span>
            Get Support
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between gap-12">

          {/* TOP LINKS */}
          <div className="grid grid-cols-2 gap-12">

            {/* Navigation */}
            <div>
              <p className="text-sm text-gray-400 mb-4">Navigation</p>
              <Link
                href="#"
                className="text-lg underline underline-offset-4"
              >
                Google reviews
              </Link>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm text-gray-400 mb-4">Contact Us</p>
              <p className="text-lg mb-2">+91 7077720507</p>
              <p className="text-lg underline underline-offset-4">
            respishop.in@gmail.com
              </p>
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <p className="text-sm text-gray-400 text-right">
            © Managed by Respion Healthcare
          </p>
        </div>
      </div>

      {/* bottom thin border */}
      <div className="h-px bg-gray-800 w-full" />
    </section>
  );
};

export default FooterHero;
