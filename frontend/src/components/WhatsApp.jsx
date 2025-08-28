import React, { useEffect } from "react";
import "./WhatsApp.css";

const WhatsApp = () => {
  useEffect(() => {
    const getParam = (name) => {
      try {
        const url = new URL(window.location.href);
        return url.searchParams.get(name);
      } catch (e) {
        console.error("Error parsing URL:", e);
        return null;
      }
    };

    const gclid = getParam("gclid");
    if (gclid) {
      localStorage.setItem("gclid", gclid);
    }
  }, []); // Run only once on component mount

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919717755870";
    const baseMessage =
      "Hi, I saw your ad and would like to inquire about your services.";
    const gclidStored = localStorage.getItem("gclid");

    const finalMessage = gclidStored
      ? `${baseMessage} GCLID:${gclidStored}`
      : baseMessage;

    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-float">
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:via-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-2xl hover:glow-green transform hover:rotate-12 hover:scale-105 transition-all duration-500 ease-out active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 ripple-white"
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:animate-pulse"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
        </svg>

        {/* Animated Ring */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>

        {/* Tooltip - Hidden on mobile */}
        <div className="hidden md:block absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out shadow-lg whitespace-nowrap">
          <span className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Chat on WhatsApp</span>
          </span>
          <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </button>

      {/* Floating notification badge */}
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold animate-breathe shadow-lg">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative text-xs font-bold">1</span>
      </div>
    </div>
  );
};

export default WhatsApp;
