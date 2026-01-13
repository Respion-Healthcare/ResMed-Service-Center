// app/tutorials/page.tsx
import React from "react";
import { CheckCircle, BookOpen, Video } from "lucide-react";
import Link from "next/link";

interface Tutorial {
  title: string;
  description: string;
}

export default function TutorialsPage() {
  const tutorials: Tutorial[] = [
    {
      title: "CPAP Machine Setup",
      description: "Step-by-step guide on how to assemble and start your ResMed CPAP device for home use."
    },
    {
      title: "BiPAP Machine Usage",
      description: "Learn how to properly use your BiPAP machine and adjust pressure settings safely."
    },
    {
      title: "Mask Fitting & Comfort Tips",
      description: "Tips on how to fit nasal, full-face, and nasal pillow masks comfortably for effective therapy."
    },
    {
      title: "Sleep Test Preparation",
      description: "Guidelines to prepare for your sleep study to ensure accurate results."
    },
    {
      title: "Device Cleaning & Maintenance",
      description: "Simple cleaning routines and maintenance tips to keep your CPAP/BiPAP machine hygienic and efficient."
    }
  ];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tutorials & Guides
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Learn how to use and maintain your ResMed devices. Step-by-step tutorials for CPAP, BiPAP, masks, and sleep test preparations.
          </p>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.title}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <BookOpen className="text-blue-700" size={28} />
                <div>
                  <p className="font-semibold text-xl">{tutorial.title}</p>
                  <p className="text-gray-700">{tutorial.description}</p>
                </div>
              </div>
              <Link
                href={`https://wa.me/917735812597?text=Hello%20I%20need%20help%20with%20${encodeURIComponent(tutorial.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-700 font-semibold hover:underline mt-2 md:mt-0"
              >
                Ask via WhatsApp
                <CheckCircle className="ml-2" size={18} />
              </Link>
            </div>
          ))}

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
              Get Tutorial Support on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
