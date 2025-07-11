import React, { useState } from 'react'

const Feature1 = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const projects = [
    {
      title: "Michket: A Gift-Giving Ecommerce Powerhouse",
      description: "Michket is a comprehensive e-commerce platform we custom-built for a gifting company. This feature-rich solution empowers them to manage their entire online sales operation seamlessly.",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop",
        "https://imgs.search.brave.com/BiyaX_RM_sZtDsyGGnc1_bvwSvpZRi9vf4cDOY3Rd-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9vbmxpbmUt/c3RvcmUtbGFwdG9w/LXNtYWxsLXNob3Bw/aW5nLTI2MG53LTIz/NTIyMDY5NzcuanBn"
      ],
      technologies: ["Php", "HTML & CSS", "JS", "MY SQL"]
    },
    {
      title: "TechFlow: Modern Business Management System",
      description: "A comprehensive business management platform designed to streamline operations, enhance productivity, and provide real-time analytics for growing businesses.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&h=400&fit=crop",
        "https://imgs.search.brave.com/w5Lfs7-Tj0bKS1h6qET9GBS0lDH0odqQwIiyLC2LOYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzAzLzEzLzk2/LzM2MF9GXzUwMzEz/OTY2Ml8zb2JTeW1n/anBHODRCRWJGTkJ5/UDJnaWpXWE5YRXV4/ZC5qcGc",
        "https://imgs.search.brave.com/TDuSfJVQPP2GSvZ1trX7o2qyLw5HAJz_XAriPIa3Ifw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9idXNpbmVzc21h/bi1zaG93LXNtYXJ0/LWhvbWUtbW9kZWwt/YnVpbGRpbmctd2l0/aC1yZXNwb25zaWJs/ZS1lbnZpcm9ubWVu/dF8yODYyOS0xMTI0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "HealthCare Pro: Digital Health Platform",
      description: "An innovative healthcare management system that connects patients with healthcare providers, enabling seamless appointment scheduling and health monitoring.",
      images: [
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=400&fit=crop",
        "https://imgs.search.brave.com/KRH2akqMyKY9keF_kxkRHwWQbM0SPlUPf5qA3tFd7EU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjA2/MjAuanBn",
        "https://imgs.search.brave.com/PZWEv1NWR0oWHdKym2mY_ZJeKtTARVNJY0ElB3CL7vw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTM2/OTM0LmpwZw"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"]
    },
    {
      title: "EduLearn: Interactive Learning Platform",
      description: "A modern educational platform that revolutionizes online learning with interactive courses, real-time collaboration, and advanced progress tracking.",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        "https://imgs.search.brave.com/rGHRZbc4b9wR7AvG7qy8OALCnMGn5l8YbBiHkbeyYcE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzcxLzU4Lzk5/LzM2MF9GXzM3MTU4/OTkwOV9KOFZDdTI1/cW9COUczd09Pc2k4/bkpxNFZxV2l3VUxZ/ZC5qcGc",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
      ],
      technologies: ["React Js", "Firebase", "TypeScript", "Material UI"]
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setCurrentImage(0) // Reset to first image when changing projects
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImage(0) // Reset to first image when changing projects
  }

  const goToProject = (index) => {
    setCurrentProject(index)
    setCurrentImage(0) // Reset to first image when changing projects
  }

  const selectImage = (imageIndex) => {
    setCurrentImage(imageIndex)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
              <p className="text-sm font-medium text-gray-700 uppercase tracking-wide">Project Gallery</p>
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {projects[currentProject].images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`View ${index + 1}`}
                    className={`flex-shrink-0 w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                      index === currentImage 
                        ? 'ring-4 ring-blue-500 shadow-lg transform scale-105' 
                        : 'hover:shadow-md opacity-75 hover:opacity-100'
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

            {/* Learn More Button */}
            <div className="pt-6">
              <button className="group relative inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border border-white/20 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl blur-lg bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <span className="relative z-10">Learn More</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="group relative flex items-center px-4 py-2 text-white font-medium text-sm rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 hover:from-purple-700 hover:via-blue-700 hover:to-blue-800 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border border-white/20 overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl blur-lg bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-blue-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="relative z-10">Previous</span>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-blue-600 shadow-lg transform scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="group relative flex items-center px-4 py-2 text-white font-medium text-sm rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border border-white/20 overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl blur-lg bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <span className="relative z-10">Next</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Feature1
