import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Web Designing",
      description:
        "Create stunning and responsive websites that capture your brand essence and engage your audience.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      features: [
        "Responsive Design",
        "User Experience",
        "Brand Integration",
        "SEO Optimization",
      ],
    },
    {
      title: "Web Development",
      description:
        "Build robust, scalable web applications with modern technologies and best practices.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      features: [
        "Frontend Development",
        "Backend Development",
        "Database Integration",
        "API Development",
      ],
    },
    {
      title: "App Development",
      description:
        "Develop native and cross-platform mobile applications for iOS and Android platforms.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform",
        "App Store Deployment",
      ],
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs and requirements.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      features: [
        "Custom Solutions",
        "System Integration",
        "Enterprise Software",
        "Maintenance Support",
      ],
    },
    {
      title: "AI/ML Tools Development",
      description:
        "Cutting-edge AI and machine learning solutions to automate and optimize your processes.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      features: [
        "Machine Learning",
        "Data Analytics",
        "Automation",
        "Predictive Models",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence and reach.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      features: [
        "SEO/SEM",
        "Social Media Marketing",
        "Content Marketing",
        "Analytics & Reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-5 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help your business grow and thrive in
              the digital world
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Service Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <button className="w-full bg-white text-gray-800 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Get Quote
                </button>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
