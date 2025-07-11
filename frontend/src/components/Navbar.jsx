import React, { useState, useEffect } from 'react'
import { logo } from '../assets/assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav className="w-full bg-white border-b border-gray-300 flex items-center justify-between px-4 sm:px-6 py-3 relative z-50">
      {/* Logo */}
      <img className="h-8 w-24 sm:h-10 sm:w-32 object-contain" src={logo} alt="logo" />
      
      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-4 lg:space-x-6 text-xs lg:text-sm text-[#1a355e] font-normal">
        <li>
          <a href="#home" className="transition-all duration-200 ease-in-out hover:text-blue-600 hover:scale-110 hover:shadow-md px-2 py-1 rounded">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="transition-all duration-200 ease-in-out hover:text-blue-600 hover:scale-110 hover:shadow-md px-2 py-1 rounded">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="transition-all duration-200 ease-in-out hover:text-blue-600 hover:scale-110 hover:shadow-md px-2 py-1 rounded">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center space-y-1 p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`block w-6 h-0.5 bg-[#1a355e] transition-all duration-300 origin-center ${
          isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}></span>
        <span className={`block w-6 h-0.5 bg-[#1a355e] transition-all duration-300 ${
          isMenuOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`block w-6 h-0.5 bg-[#1a355e] transition-all duration-300 origin-center ${
          isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}></span>
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
      <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-300 shadow-xl transition-all duration-300 ease-in-out lg:hidden z-50 ${
        isMenuOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-4 pointer-events-none'
      }`}>
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
    </nav>
  )
}

export default Navbar
