import React from "react";

const servicesData = [
  {
    title: "Medical Equipment Service",
    description:
      "Professional servicing and maintenance of respiratory and medical equipment.",
  },
  {
    title: "Installation & Setup",
    description:
      "On-site installation and proper configuration by certified technicians.",
  },
  {
    title: "Repair & Maintenance",
    description:
      "Quick diagnosis and repair to ensure uninterrupted performance.",
  },
  {
    title: "Customer Support",
    description:
      "24/7 assistance for service requests and technical guidance.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
