import React, { useState, useEffect } from "react";
import { logo } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-lg fixed top-0 left-0 z-50 shadow-lg border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <img
          className="h-10 w-28 sm:h-12 sm:w-36 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
          src={logo}
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-sm font-semibold">
          <li>
            <a
              href="#services"
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-full hover:bg-blue-50 group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-full hover:bg-blue-50 group"
            >
              Portfolio
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-full hover:bg-blue-50 group"
            >
              Contact Us
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center space-y-1 p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#1a355e] transition-all duration-300 origin-center ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#1a355e] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#1a355e] transition-all duration-300 origin-center ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-gray-300 shadow-xl transition-all duration-300 ease-in-out lg:hidden z-50 ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-0 text-sm text-[#1a355e] font-normal py-2">
            <li>
              <a
                href="#home"
                className="block px-6 py-4 transition-all duration-200 ease-in-out hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-6 py-4 transition-all duration-200 ease-in-out hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-6 py-4 transition-all duration-200 ease-in-out hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
