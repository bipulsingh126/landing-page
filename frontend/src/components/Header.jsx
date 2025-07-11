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
            <form className='group relative bg-white/10 rounded-2xl sm:rounded-3xl shadow-2xl lg:shadow-3xl p-4 xs:p-5 sm:p-6 md:p-8 w-full max-w-xs xs:max-w-sm lg:max-w-md backdrop-blur-3xl transition-all duration-500 hover:bg-white/15 hover:shadow-3xl hover:scale-105 border border-white/20 overflow-hidden'>
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-xl bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <div className='relative z-10'>
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className='text-white text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 drop-shadow-lg'>Let&apos;s Connect!</h3>
                  <p className='text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 drop-shadow-md'>Send us a quick inquiry</p>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto animate-pulse"></div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative group">
                    <input 
                      type='text' 
                      placeholder='Full Name*' 
                      className='w-full px-3 sm:px-4 py-2 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl border border-white/30 bg-white/10 placeholder-white/70 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-xs sm:text-sm md:text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/15 hover:border-white/40'
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type='email' 
                      placeholder='Email Address*' 
                      className='w-full px-3 sm:px-4 py-2 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl border border-white/30 bg-white/10 placeholder-white/70 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-xs sm:text-sm md:text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/15 hover:border-white/40'
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type='tel' 
                      placeholder='Phone Number*' 
                      className='w-full px-3 sm:px-4 py-2 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl border border-white/30 bg-white/10 placeholder-white/70 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-xs sm:text-sm md:text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/15 hover:border-white/40'
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                  </div>
                  
                  <div className="relative group">
                    <textarea 
                      placeholder='Write Your Query' 
                      className='w-full px-3 sm:px-4 py-2 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl border border-white/30 bg-white/10 placeholder-white/70 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-xs sm:text-sm md:text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/15 hover:border-white/40 resize-none min-h-[60px] sm:min-h-[80px]' 
                      rows={2}
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                  </div>
                </div>
                
                <button 
                  type='submit' 
                  className='group relative w-full mt-4 sm:mt-6 px-4 py-2 sm:py-3 md:py-3.5 text-white font-semibold rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border border-white/20 overflow-hidden text-xs sm:text-sm md:text-base'
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-lg bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <span className="relative z-10 flex items-center justify-center">
                    Submit Inquiry
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
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