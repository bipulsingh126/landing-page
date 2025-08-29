import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <nav className="w-full bg-white/90 backdrop-blur-xl fixed top-0 left-0 z-50 shadow-2xl border-b border-gray-100/80 transition-all duration-500 hover:bg-white/95">
      <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-12 w-32 mt-[10px] sm:mt-0 sm:h-14 sm:w-40 object-contain mx-2  cursor-pointer  "
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8 xl:space-x-12 text-base font-bold tracking-wide">
            <li>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="relative text-gray-800 hover:text-blue-700 transition-all duration-400 ease-out px-5 py-3 rounded-xl hover:bg-blue-50/80 group transform hover:scale-105 hover:shadow-lg"
              >
                Services
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-400 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="relative text-gray-800 hover:text-purple-700 transition-all duration-400 ease-out px-5 py-3 rounded-xl hover:bg-purple-50/80 group transform hover:scale-105 hover:shadow-lg"
              >
                Portfolio
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-600 to-purple-700 transition-all duration-400 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="relative text-gray-800 hover:text-green-700 transition-all duration-400 ease-out px-5 py-3 rounded-xl hover:bg-green-50/80 group transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 transition-all duration-400 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 shadow-xl hover:shadow-2xl ring-2 ring-blue-200 hover:ring-blue-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-end lg:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center space-y-1 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-110"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 origin-center rounded-full ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 rounded-full ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 origin-center rounded-full ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl transition-all duration-500 ease-in-out lg:hidden z-50 ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-6 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-1 text-sm text-gray-700 font-medium py-4">
            <li>
              <Link
                to="/services"
                className="block px-6 py-4 mx-2 rounded-xl transition-all duration-300 ease-in-out hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-blue-100 transform hover:translate-x-2 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="block px-6 py-4 mx-2 rounded-xl transition-all duration-300 ease-in-out hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-blue-100 transform hover:translate-x-2 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-6 py-4 mx-2 rounded-xl transition-all duration-300 ease-in-out hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 active:bg-blue-100 transform hover:translate-x-2 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
