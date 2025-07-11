import React from 'react'
import { logo1, logo2, logo3, logo4 } from '../assets/assets'

const Feature2 = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-15 md:text-3xl sm:text-2xl sm:mb-10">
          Trusted By These Clients
        </h2>
        
        {/* Scrolling Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-right space-x-10">
            {/* First Set of Logos */}
            <div className="flex items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-h-[100px] min-w-[280px] group flex-shrink-0">
              <img 
                src={logo1} 
                alt="World V Capital and Beyond" 
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain transition-all duration-300 md:max-w-[150px] md:max-h-[60px]"
              />
            </div>
            <div className="flex items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-h-[100px] min-w-[280px] group flex-shrink-0">
              <img 
                src={logo2}
                alt="GoClick" 
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain transition-all duration-300 md:max-w-[150px] md:max-h-[60px]"
              />
            </div>
            <div className="flex items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-h-[100px] min-w-[280px] group flex-shrink-0">
              <img 
                src={logo3} 
                alt="HealthPaths" 
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain transition-all duration-300 md:max-w-[150px] md:max-h-[60px]"
              />
            </div>
            <div className="flex items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-h-[100px] min-w-[280px] group flex-shrink-0">
              <img 
                src={logo4} 
                alt="Cata" 
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain transition-all duration-300 md:max-w-[150px] md:max-h-[60px]"
              />
            </div>
            
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-h-[100px] min-w-[280px] group flex-shrink-0">
              <img 
                src={logo1} 
                alt="World V Capital and Beyond" 
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain transition-all duration-300 md:max-w-[150px] md:max-h-[60px]"
              />
            </div>
            <div className="flex items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-h-[100px] min-w-[280px] group flex-shrink-0">
              <img 
                src={logo2}
                alt="GoClick" 
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain transition-all duration-300 md:max-w-[150px] md:max-h-[60px]"
              />
            </div>
            <div className="flex items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-h-[100px] min-w-[280px] group flex-shrink-0">
              <img 
                src={logo3} 
                alt="HealthPaths" 
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain transition-all duration-300 md:max-w-[150px] md:max-h-[60px]"
              />
            </div>
            <div className="flex items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-h-[100px] min-w-[280px] group flex-shrink-0">
              <img 
                src={logo4} 
                alt="Cata" 
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain transition-all duration-300 md:max-w-[150px] md:max-h-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-scroll-right {
          animation: scrollRight 10s linear infinite;
        }
        
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Feature2
