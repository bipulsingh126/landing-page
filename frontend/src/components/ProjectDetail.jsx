import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Add custom CSS for slide-up animation
const slideUpStyles = `
  @keyframes slideUp {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .animate-slide-up {
    animation: slideUp 0.5s ease-out forwards;
  }
`;

// Insert styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = slideUpStyles;
  document.head.appendChild(styleSheet);
}

const ProjectDetail = ({ project, onBack }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);


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

  // Handle double-tap for zoom
  const handleImageTap = (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 500 && tapLength > 0) {
      // Double tap detected
      e.preventDefault();
      setIsZoomed(!isZoomed);
    }
    
    setLastTap(currentTime);
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
      

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          {/* Project Title */}
          	<div className="text-center mb-10">
          	  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          	    {project.title}
          	  </h1>
          	  <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          	</div>

          {/* Project Gallery Section */}
          <div className="mb-10">
            <div className="text-center mb-4">
              <h2 className="text-lg font-bold text-gray-700 mb-2 transform hover:scale-105 transition-transform duration-300">PROJECT GALLERY</h2>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              {/* Main featured image */}
              <div className="mb-3">
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <img 
                    src={imagesToShow[currentImageIndex]} 
                    alt={`project-detail-${currentImageIndex + 1}`} 
                    className="w-full h-[240px] object-cover transition-all duration-300 hover:brightness-105 cursor-pointer"
                    onClick={handleImageTap}
                    onDoubleClick={(e) => {
                      e.preventDefault();
                      setIsZoomed(!isZoomed);
                    }}
                  />
                  
                  {/* Light overlay on hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Navigation arrows - always visible */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-all duration-300 hover:scale-110 z-10"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 shadow-md transition-all duration-300 hover:scale-110 z-10"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Zoom button */}
                  <button 
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110 z-10"
                    title="Zoom Image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                  
                  {/* Image info overlay */}
                  <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Image {currentImageIndex + 1} of {imagesToShow.length}
                  </div>
                </div>
              </div>
              
              {/* Zoom Popup Modal */}
              {isZoomed && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                  <div className="relative max-w-6xl max-h-[90vh] w-full">
                    {/* Close button */}
                    <button                        
                      onClick={() => setIsZoomed(false)}
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    {/* Zoomed image */}
                    <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-700 animate-slide-up">
                      <img 
                        src={imagesToShow[currentImageIndex]} 
                        alt={`project-detail-${currentImageIndex + 1}`} 
                        className="w-full h-full object-contain max-h-[80vh] cursor-pointer"
                        onClick={handleImageTap}
                        onDoubleClick={(e) => {
                          e.preventDefault();
                          setIsZoomed(false);
                        }}
                      />
                      
                      {/* Navigation arrows in popup */}
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
                      
                      {/* Image info in popup */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Image {currentImageIndex + 1} of {imagesToShow.length}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Thumbnail grid */}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-1.5">
                {imagesToShow.map((imgUrl, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 group ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-blue-400 shadow-lg scale-105 transform' 
                        : 'hover:scale-110 hover:shadow-md hover:ring-1 hover:ring-blue-200'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <div className="aspect-w-4 aspect-h-3">
                      <img 
                        src={imgUrl} 
                        alt={`thumbnail-${index + 1}`} 
                        className="w-full h-16 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:saturate-110"
                        onDoubleClick={(e) => {
                          e.preventDefault();
                          setCurrentImageIndex(index);
                          setIsZoomed(true);
                        }}
                      />
                    </div>
                    
                    {/* Overlay for non-selected images */}
                    {index !== currentImageIndex && (
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300"></div>
                    )}
                    
                    {/* Selected indicator */}
                    {index === currentImageIndex && (
                      <div className="absolute top-0.5 right-0.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold animate-bounce">
                        ✓
                      </div>
                    )}
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Image counter */}
              <div className="text-center mt-2">
                <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300">
                  {currentImageIndex + 1} of {imagesToShow.length}
                </span>
              </div>
            </div>
          </div>

          {/* Project Description */}
          	<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-4">
              {project.description || "This project is a comprehensive solution designed to meet specific client needs. Features include seamless operations management and enhanced user engagement."}
            </p>
            <p className="text-gray-600">
              Key features involve advanced management systems, real-time updates, and a responsive design ensuring great user experience across all devices.
            </p>
            </div>

            {/* Technology Used */}
            <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {tech}
                </span>
              )) || [
                <span key="php" className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-sm">PHP</span>,
                <span key="html" className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-sm">HTML&CSS</span>,
                <span key="js" className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-sm">JavaScript</span>,
                <span key="sql" className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-sm">MySQL</span>
              ]}
            </div>
          </div>
          </div>


      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

