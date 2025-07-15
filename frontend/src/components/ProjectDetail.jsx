import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetail = ({ project, onBack }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [reloadKey]);

  const handleReload = () => {
    setReloadKey(prev => prev + 1);
    setIsLoaded(false);
    setImageLoaded(false);
  };

  if (!project) return null;

  // Default images if no additionalImages provided
  const defaultImages = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  ];

  const imagesToShow = project.additionalImages || defaultImages;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === imagesToShow.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? imagesToShow.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      
      {/* Back Button */}
      <button
        onClick={() => onBack ? onBack() : navigate(-1)}
        className="absolute top-20 left-4 md:top-24 md:left-6 flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 group z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-medium">Back</span>
      </button>
      
      {/* Reload Button */}
      <button
        onClick={handleReload}
        className={`absolute top-20 right-4 md:top-24 md:right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group z-10 ${
          isLoaded ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
        }`}
        style={{ transitionDelay: '1.5s' }}
      >
        <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Project Title */}
        <div className="text-center mb-10">
          <h1 className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {project.title}
          </h1>
          <div className={`w-20 h-1 bg-blue-600 mx-auto rounded-full transition-all duration-1000 delay-300 ${isLoaded ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Main Project Image */}
        <div className={`mb-12 relative group transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full max-h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              {project.category}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className={`lg:col-span-2 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {project.description || "Michket is a comprehensive e-commerce platform we custom-built for a gifting company. This feature-rich solution empowers them to manage their entire online sales operation seamlessly. The platform was developed to streamline the online order process. Our team has developed backend CRM having store data automation. This is a customised developed solution that meets all the specific requirements of the client."}
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              The platform features advanced inventory management, customer relationship management, automated order processing, and comprehensive analytics dashboard. We implemented secure payment gateways, real-time notifications, and mobile-responsive design to ensure optimal user experience across all devices.
            </p>
          </div>

          {/* Technology Used */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((tech, index) => (
                <span 
                  key={index} 
                  className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{
                    transitionDelay: `${1100 + index * 100}ms`
                  }}
                >
                  {tech}
                </span>
              )) || [
                <span key="php" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-shadow duration-300">PHP</span>,
                <span key="html" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-shadow duration-300">HTML&CSS</span>,
                <span key="js" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-shadow duration-300">JavaScript</span>,
                <span key="sql" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-shadow duration-300">MySQL</span>
              ]}
            </div>
          </div>
        </div>

        {/* More Images Section */}
        <div className={`mb-12 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Images Of The Project</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Main carousel container */}
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
              {/* Current image */}
              <div className="relative h-full">
                <img 
                  src={imagesToShow[currentImageIndex]} 
                  alt={`project-detail-${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out" 
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {imagesToShow.length}
              </div>
            </div>
            
            {/* Thumbnail navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {imagesToShow.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'border-blue-500 shadow-lg scale-105' 
                      : 'border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`thumbnail-${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

