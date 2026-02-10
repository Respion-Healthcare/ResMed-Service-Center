import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface TestService {
  name: string;
  description: string;
}

export default function SleepTestPage() {
  const sleepTests: TestService[] = [
    {
      name: "Polysomnography (PSG)",
      description:
        "Comprehensive overnight sleep study to diagnose sleep disorders such as sleep apnea, insomnia, and restless legs syndrome.",
    },
    {
      name: "Home Sleep Apnea Test (HSAT)",
      description:
        "Simple, at-home diagnostic test for detecting obstructive sleep apnea in adults.",
    },
    {
      name: "CPAP Titration Study",
      description:
        "Overnight study to determine the optimal CPAP pressure settings for effective therapy.",
    },
    {
      name: "Multiple Sleep Latency Test (MSLT)",
      description:
        "Daytime test to measure excessive daytime sleepiness and evaluate narcolepsy.",
    },
    {
      name: "Maintenance of Wakefulness Test (MWT)",
      description:
        "Assesses your ability to stay awake during the day under supervised conditions.",
    },
  ];

  const whatsappBase = "https://wa.me/9937000606?text=";

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sleep Test Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Authorized ResMed Service Center offering professional sleep
            diagnostic studies to detect and manage sleep disorders.
          </p>
        </div>
      </section>

      {/* Sleep Test Services */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {sleepTests.map((test) => (
            <div
              key={test.name}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-xl">{test.name}</p>
                <p className="text-gray-700">{test.description}</p>
              </div>
              <Link
                href={`${whatsappBase}${encodeURIComponent(
                  `Hello, I want to book a ${test.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-700 font-semibold hover:underline"
              >
                Book via WhatsApp
                <CheckCircle className="ml-2" size={18} />
              </Link>
            </div>
          ))}

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
              Enquire About Sleep Tests on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
