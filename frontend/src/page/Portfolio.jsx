import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatingFilter, setAnimatingFilter] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    // Reset animations on reload
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [reloadKey]);

  const handleFilterChange = (filter) => {
    setAnimatingFilter(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setAnimatingFilter(false);
    }, 200);
  };

  const handleReload = () => {
    setReloadKey(prev => prev + 1);
    setIsLoaded(false);
  };

  const filterButtons = [
    "All",
    "E-commerce",
    "Web Apps",
    "Mobile Apps",
    "SASS",
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Michket: Gifting Products E-commerce Platform",
      category: "E-commerce",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168140753938.png",
      description:
        "Michket is a comprehensive e-commerce platform we custom-built for a gifting company. This feature-rich solution empowers them to manage their entire online sales operation seamlessly.",
      technologies: ["Php", "HTML&CSS", "JS", "MY SQL"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168140752738.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168140752061.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168140751051.png",
      ],
    },
    {
      id: 2,
      title: "E-Auction Ecommerce Platform",
      category: "E-commerce",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168125843069.png",
      description: "E-Auction Ecommerce Platform",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168125843882.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168125843202.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168125843202.png ",
      ],
    },
    {
      id: 3,
      title: "Electric Vehicle Charging System IoT",
      category: "Mobile Apps",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168073711686.png",
      description:
        "This is an Iot Project where we had developed the backend software and mobile apps based on OCPP protocol. ",
      technologies: ["java(Spring Boot), Kotlin, Swfit"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168073715797.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168073711060.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168073711686.png",
      ],
    },
    {
      id: 4,
      title: "Travel Bed",
      category: "Web Apps",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168778982643.png",
      description:
        "Developed a B2B hotel booking platform for travel agents to access and book hotels for their clients. Features: Admin Login: Admin can manage system settings, user accounts, and hotel listings.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168778985246.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168778989409.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168778987338.png",
      ],
    },
    {
      id: 5,
      title: "Kinheritance",
      category: "SASS",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168799405311.png",
      description: "Develop a SAAS platform for a fintech startup offering various financial services. Users can register and book specific services.",
      technologies: ["php", "Html", "CSS", "JS"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168799408405.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168799408290.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168799406050.png",
      ],
    },
    {
      id: 6,
      title: "Building Lasting Connections with Haldiban Matrimonial Platform",
      category: "Web Apps",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717066131.Group%201000003684.png",
      description:
        "Building Lasting Connections with Haldiban Matrimonial Platform",
      technologies: ["Php", "Laravel", "MySQL"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717066131.Group%201000003679.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717066131.Group%201000003683.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717066131.Group%201000003682.png",
      ],
    },
    {
      id: 7,
      title: "CRM System for Customer Service Request , Warranty Tracking",
      category: "Web Apps",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738741664.Final%20Mockup.png",
      description:
        "CRM System for Customer Service Request , Warranty Tracking",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738741664.Banner%2001.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738741664.Banner%2002.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738741664.Banner%2003.png",
      ],
    },
    {
      id: 8,
      title: "Food Delivery mobile app",
      category: "Mobile Apps",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738740725.Final%20Mockup.png",
      description: "Food ordering and delivery app",
      technologies: ["flutter", "Php", "Laravel", "MySQL"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738740725.Product.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738740725.Login.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738740725.Final%20Mockup.png",
      ],
    },
    {
      id: 9,
      title: "Student Ai NLP Based Chatboa",
      category: "Web Apps",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1737137839.Mockup%20Screen%20(2).png",
      description:
        "Ai Chatboat Development for Student Data By Digital Innovations ",
      technologies: ["React", "Python", "Django", "PostgreSQL"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1737137839.Mockup%20Screen%20(2).png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1737137839.Banner%204.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1737137839.Banner%201%20(2).png",
      ],
    },
    {
      id: 10,
      title: "E-commerce Platform (Men's Apparel)",
      category: "Mobile Apps",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717156339.Group%201000003613.png",
      description: "Tahvo is a sophisticated e-commerce platform designed to showcase and sell Tahvo India's collection of men's apparel.",
      technologies: ["Shopify", "React", "Node.js", "MongoDB", "Express"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717156339.Group%201000003614.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717156339.Group%201000003616.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717156339.Group%201000003618.png",
      ],
    },
    {
      id: 11,
      title: "Real Estate Platform with CRM",
      category: "Web Apps",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717157598.Group%201000003619.png",
      description: "Advanced analytics and reporting tool",
      technologies: ["CI Framework", "React", "Node.js", "MongoDB", "Express"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717157598.Group%201000003619.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717157598.Group%201000003622.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717157598.Group%201000003621.png",
      ],
    },
    {
      id: 12,
      title: "Immigration Consultant SAAS Platform",
      category: "SASS",
      image:
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717068964.Group%201000003686.png",
      description: "Develop a SAAS platform where immigration consultants can register, manage client data, and access business tools.",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      additionalImages: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717068964.Group%201000003689.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717068964.Group%201000003687.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1717068964.Group%201000003685.png",
      ],
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // If a project is selected, show project detail
  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Header Section */}
        <div className="pt-28 pb-12 text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            {/* Reload Button */}
            <button
              onClick={handleReload}
              className={`absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${
                isLoaded ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
              }`}
              style={{ transitionDelay: '1.5s' }}
            >
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            
            <div
              className={`flex items-center justify-center mb-6 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className={`flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent max-w-20 transition-all duration-1000 delay-300 ${
                  isLoaded ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
              <h1
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mx-6 transition-all duration-1000 delay-150 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                Our Portfolio
              </h1>
              <div
                className={`flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent max-w-20 transition-all duration-1000 delay-300 ${
                  isLoaded ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
            <h2
              className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              "Elevating Your Brand With A Touch Of Excellence"
            </h2>
            
            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse ${
                    isLoaded ? 'opacity-30' : 'opacity-0'
                  }`}
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 2) * 40}%`,
                    animationDelay: `${i * 0.5}s`,
                    transitionDelay: `${1000 + i * 200}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {filterButtons.map((filter, index) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
              }`}
              style={{
                transitionDelay: `${700 + index * 100}ms`,
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
              animatingFilter ? "opacity-50 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer border border-gray-100 hover:border-blue-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${1200 + index * 100}ms`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300/6366f1/ffffff?text=Project+Image";
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <button
                        onClick={() => setSelectedProject(item)}
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:shadow-xl"
                      >
                        View Project
                      </button>
                      <div className="flex justify-center space-x-2">
                        <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                        <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                        <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                      </div>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.slice(0, 2).map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 2 && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium">
                          +{item.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
