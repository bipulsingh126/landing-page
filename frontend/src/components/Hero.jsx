import React, { useState, useEffect } from "react";
import { hero1, hero2, hero3 } from "../assets/assets";

const heroImages = [hero1, hero2, hero3];
const heroCaptions = [
  "We collaborate closely with clients.",
  "We turn ideas into innovative digital solutions.",
  "We are a team of creative professionals.",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section
      className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 bg-gradient-to-r from-gray-100 to-white px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
      >
      <div 
        className="flex-1 max-w-2xl min-w-[260px] flex justify-center lg:justify-end relative order-2 lg:order-1"
      >
        <div
          className="bg-blue-50 rounded-lg p-4 sm:p-6 shadow-xl w-full flex flex-col items-center relative"
        >
          <div className="relative w-full h-64 sm:h-80 lg:h-96">
            <img
              src={heroImages[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-full rounded-lg object-cover shadow-lg transition-all duration-500"
            />
            {/* Caption Overlay */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-85 text-white px-4 py-2 rounded-lg font-medium text-center max-w-[90%] shadow-md z-30"
            >
              {heroCaptions[current]}
            </div>
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border-none rounded-full w-8 h-8 shadow-md cursor-pointer z-20 hover:shadow-lg transition-shadow duration-200"
              aria-label="Previous"
            >
              &#8592;
            </button>
            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border-none rounded-full w-8 h-8 shadow-md cursor-pointer z-20 hover:shadow-lg transition-shadow duration-200"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
      <div className="flex-[2] mt-6 lg:mt-0 px-4 lg:px-0 lg:pr-8 order-1 lg:order-2 text-center lg:text-left">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-2">
          Who We Are
        </h2>
        <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-3">
          We Design. We Build. We Innovate.
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-5">
          At Digital Innovation, we bring your ideas to life with innovative
          designs and reliable solutions. From custom websites to cutting-edge
          apps, our team is dedicated to helping your business grow and succeed
          in the digital world.
        </p>
        <ul className="list-none p-0 mb-6 space-y-2">
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-green-500 text-lg sm:text-xl mr-3 flex-shrink-0">
              ✔
            </span>
            <span className="text-sm sm:text-base">Passionate About Using Technology to Drive Innovation</span>
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-green-500 text-lg sm:text-xl mr-3 flex-shrink-0">
              ✔
            </span>
            <span className="text-sm sm:text-base">Experts in Crafting Tailored Digital Solutions</span>
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-green-500 text-lg sm:text-xl mr-3 flex-shrink-0">
              ✔
            </span>
            <span className="text-sm sm:text-base">Focused on Your Long-Term Success</span>
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-green-500 text-lg sm:text-xl mr-3 flex-shrink-0">
              ✔
            </span>
            <span className="text-sm sm:text-base">Delivering Reliable Results You Can Trust</span>
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-green-500 text-lg sm:text-xl mr-3 flex-shrink-0">
              ✔
            </span>
            <span className="text-sm sm:text-base">Always Here to Help</span>
          </li>
        </ul>
        <a
          href="#contact"
          className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 text-white font-bold rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Contact Us &rarr;
        </a>
      </div>
    </section>
  );
};

export default Hero;
