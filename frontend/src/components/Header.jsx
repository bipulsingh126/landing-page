import React, { useState, useEffect } from 'react'
import { header } from '../assets/assets'

const animatedTexts = [
  'Web Development',
  'Android Development',
  'Software Development',
  'AI/ML Development',
  'Digital Marketing',
];

const Header = () => {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState(animatedTexts[0]);
  const [typing, setTyping] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    let typingTimeout;
    if (typing) {
      let i = 0;
      setDisplayedText('');
      typingTimeout = setInterval(() => {
        setDisplayedText(animatedTexts[currentTextIdx].slice(0, i + 1));
        i++;
        if (i === animatedTexts[currentTextIdx].length) {
          clearInterval(typingTimeout);
        }
      }, 40);
    }
    return () => clearInterval(typingTimeout);
  }, [currentTextIdx, typing]);

  useEffect(() => {
    if (!typing) return;
    const timer = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => {
        setAnimateOut(false);
        setTyping(true);
        setCurrentTextIdx((prev) => (prev + 1) % animatedTexts.length);
      }, 500); // swipe up duration
    }, 2000);
    return () => clearTimeout(timer);
  }, [typing, currentTextIdx]);

  useEffect(() => {
    if (animateOut) setTyping(false);
  }, [animateOut]);

  return (
    <div className='w-full min-h-[400px] xs:min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-screen relative flex items-stretch'>
      <div className="absolute inset-0 z-0 overflow-hidden shadow-xl lg:shadow-2xl group transition-all duration-700">
        <img 
          className='w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out' 
          src={header} 
          alt="header" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/30 to-black/70"></div>
      </div>
      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8'>
        <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between h-full py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20'>
          {/* Left: Headline */}
          <div className='w-full lg:w-1/2 text-center lg:text-left mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-0 px-2 sm:px-4'>
            <h2 className='text-white text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 sm:mb-3 md:mb-4 tracking-wide drop-shadow-lg leading-tight'>
              INNOVATING THE
            </h2>
            <h1 className='text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-wide drop-shadow-lg relative inline-block leading-tight'>
              FUTURE OF
              <span className="block h-0.5 sm:h-1 lg:h-1.5 w-2/3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-2 sm:mt-3 animate-pulse mx-auto lg:mx-0"></span>
            </h1>
            <h1 className='text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x leading-tight'>
              <span
                className={`inline-block min-w-[120px] xs:min-w-[150px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px] text-center neon-glow ${typing ? 'typewriter' : ''} ${animateOut ? 'swipe-up-fade' : ''}`}
                key={currentTextIdx}
              >
                {displayedText}
              </span>
            </h1>
          </div>
          {/* Right: Contact Form */}
          <div className='w-full xs:w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 flex justify-center px-2 sm:px-4'>
            <form className='relative bg-white/20 rounded-xl sm:rounded-2xl shadow-xl lg:shadow-2xl p-3 xs:p-4 sm:p-6 md:p-8 w-full max-w-xs xs:max-w-sm lg:max-w-md backdrop-blur-2xl transition-all duration-300'>
              <div className='relative z-10'>
                <h3 className='text-[#1a355e] text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2'>Let&apos;s connect!</h3>
                <p className='text-[#1a355e] text-xs sm:text-sm md:text-base mb-3 sm:mb-4'>Send us a quick inquiry</p>
                <input 
                  type='text' 
                  placeholder='Full Name*' 
                  className='w-full mb-2 sm:mb-3 px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg border border-gray-200 bg-white/60 focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm md:text-base transition-all shadow-sm'
                />
                <input 
                  type='email' 
                  placeholder='Email Address*' 
                  className='w-full mb-2 sm:mb-3 px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg border border-gray-200 bg-white/60 focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm md:text-base transition-all shadow-sm'
                />
                <input 
                  type='tel' 
                  placeholder='Phone Number*' 
                  className='w-full mb-2 sm:mb-3 px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg border border-gray-200 bg-white/60 focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm md:text-base transition-all shadow-sm'
                />
                <textarea 
                  placeholder='Write Your Query' 
                  className='w-full mb-3 sm:mb-4 px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg border border-gray-200 bg-white/60 focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm md:text-base transition-all shadow-sm resize-none' 
                  rows={2}
                ></textarea>
                <button 
                  type='submit' 
                  className='w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg font-semibold shadow-lg transition-transform duration-200 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-sm md:text-base'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
// Animation styles for .typewriter, .swipe-up-fade, and .neon-glow are defined in App.css