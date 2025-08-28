import React from 'react';
import './Phone.css';

const Phone = () => {
  const phoneNumber = "+919717755870";
  
  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 animate-float">
      <button
        onClick={handlePhoneClick}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 hover:via-blue-600 hover:to-blue-700 rounded-full shadow-lg hover:shadow-2xl hover:glow-blue transform hover:rotate-12 hover:scale-105 transition-all duration-500 ease-out active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 ripple-white"
        aria-label="Call us directly"
      >
        {/* Phone Icon */}
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:animate-pulse"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        
        {/* Animated Ring */}
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping"></div>
        
        {/* Tooltip - Hidden on mobile */}
        <div className="hidden md:block absolute left-24 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out shadow-lg whitespace-nowrap">
          <span className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call us now</span>
          </span>
          <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-0 h-0 border-r-4 border-r-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </button>
      
      {/* Floating notification badge */}
      <div className="absolute -top-2 -left-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold animate-breathe shadow-lg">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative text-xs font-bold">!</span>
      </div>
    </div>
  );
};

export default Phone;
