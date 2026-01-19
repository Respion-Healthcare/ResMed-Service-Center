import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    title: "Medical Equipment Service",
    description:
      "Professional servicing and maintenance of respiratory and medical equipment.",
    image: "/images/service-1.jpg",
  },
  {
    title: "Installation & Setup",
    description:
      "On-site installation and proper configuration by certified technicians.",
    image: "/images/service-3.avif",
  },
  {
    title: "Repair & Maintenance",
    description:
      "Quick diagnosis and repair to ensure uninterrupted performance.",
    image: "/images/service-5.jpg",
  },
  {
    title: "Customer Support",
    description:
      "24/7 assistance for service requests and technical guidance.",
    image: "/images/service-4.jpeg",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-4 text-gray-900">
          Visit ResMed Service Center in Odisha
        </h2>

        <h4 className="text-xl mb-12 text-gray-900">
          We provide service & calibration for any ResMed CPAP, BiPAP & Ventilators
        </h4>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-full h-44">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
