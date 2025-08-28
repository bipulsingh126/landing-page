import React, { useState } from "react";

const Feature1 = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: "Michket: A Gift-Giving Ecommerce Powerhouse",
      description:
        "Michket is a comprehensive e-commerce platform we custom-built for a gifting company. This feature-rich solution empowers them to manage their entire online sales operation seamlessly.",
      images: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168140753938.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168140752738.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168140752061.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168140751051.png",
      ],
      technologies: ["Php", "HTML & CSS", "JS", "MY SQL"],
    },
    {
      title: "Real Estate",
      description:
        " Develop a mobile app allowing property owners to list their properties and users to browse, filter, and book them. Features: Property Listing: Owners can upload property details, photos, and pricing information.",
      images: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168092333127.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168092333396.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168092336211.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168092336199.png",
      ],
      technologies: ["flutter", "Laravel", "Php"],
    },
    {
      title: "Travel Bed",
      description:
        "Developed a B2B hotel booking platform for travel agents to access and book hotels for their clients. Features: Admin Login: Admin can manage system settings, user accounts, and hotel listings. Travel Agent Login: Travel agents can access hotel listings, compare prices, and book rooms on behalf of their clients. Hotel Listing Integration.",
      images: [
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168778982643.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168778985246.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168778989409.png",
        "https://dgtlinnovations.in/admin_asset/Portfolio_Images/17168778987338.png",
      ],
      technologies: ["HTML & CSS", "JS", "Php", "Laravel", "MYSQL"],
    },
    {
      title: "Food Delivery mobile app",
      description:
        "This is a Food Delivery Mobile App created by Digital Innovations team. The app has been created on Flutter for Android and IOS platform backed is on Php, Laravel.  This app has been created for a startup, it provide login to customers and chef. Chef can list their daily dish and menu, customer can place the order",
      images: [
       "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738740725.Final%20Mockup.png",
       "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738740725.Login.png",
       "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738740725.Product.png",
       "https://dgtlinnovations.in/admin_asset/Portfolio_Images/1738740725.Delevery.png"
      ],
      technologies: ["Flutter", "Php", "Laravel", "MYSQL"],
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setCurrentImage(0); // Reset to first image when changing projects
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImage(0); // Reset to first image when changing projects
  };

  const goToProject = (index) => {
    setCurrentProject(index);
    setCurrentImage(0); // Reset to first image when changing projects
  };

  const selectImage = (imageIndex) => {
    setCurrentImage(imageIndex);
  };

  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What We've Built
          </h2>
        </div>

        {/* Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Project Images */}
          <div className="space-y-6">
            {/* Main Project Image */}
            <div className="relative group">
              <img
                src={projects[currentProject].images[currentImage]}
                alt={projects[currentProject].title}
                className="w-full h-96 object-cover rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Thumbnail Images */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Project Gallery
              </p>
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {projects[currentProject].images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`View ${index + 1}`}
                    className={`flex-shrink-0 w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                      index === currentImage
                        ? "ring-4 ring-blue-500 shadow-lg transform scale-105"
                        : "hover:shadow-md opacity-75 hover:opacity-100"
                    }`}
                    onClick={() => selectImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Project Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                {projects[currentProject].title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                {projects[currentProject].description}
              </p>
            </div>

            {/* Technology Stack */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">
                Technology Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {projects[currentProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-12 px-4">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="group relative flex items-center px-6 py-3 text-white font-semibold text-sm rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Previous</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-blue-600 shadow-md transform scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="group relative flex items-center px-6 py-3 text-white font-semibold text-sm rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Next</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </button>
        </div>

            {/* Learn More Button */}
            <div className="pt-6">
              <button className="group relative inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border border-white/20 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl blur-lg bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <span className="relative z-10">Learn More</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
       
      </div>
    </section>
  );
};

export default Feature1;
