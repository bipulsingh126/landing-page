import React, { useState, useEffect } from "react";

const animatedTexts = [
  "Web Development",
  "Android Development",
  "Software Development",
  "AI/ML Development",
  "Digital Marketing",
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
      setDisplayedText("");
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
    <div className="w-full min-h-screen relative flex items-stretch bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
        {/* Geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Left: Headline */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 px-4">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              🚀 Innovation Meets Excellence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Digital Future
              </span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-8 h-12">
              <span className="text-blue-600">Specialized in </span>
              <span
                className={`inline-block min-w-[200px] text-left bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ${
                  typing ? "typewriter" : ""
                } ${animateOut ? "swipe-up-fade" : ""}`}
                key={currentTextIdx}
              >
                {displayedText}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              We transform ideas into powerful digital solutions that drive growth and innovation. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transform hover:scale-110 transition-all duration-500 shadow-md hover:shadow-lg"
              >
                View Our Work
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="w-full xs:w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 flex justify-center px-2 sm:px-4">
            <form className="group relative bg-white/95 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md backdrop-blur-sm transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] border border-white/30 overflow-hidden">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-gray-800 text-xl md:text-2xl font-bold mb-2">
                    Let's Connect! 🚀
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    Ready to transform your ideas?
                  </p>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Write Your Query"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-blue-300/50 bg-white/90 placeholder-gray-500 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-400/70 resize-none min-h-[80px]"
                      rows={3}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full mt-4 sm:mt-6 px-4 py-2 sm:py-3 md:py-3.5 text-white font-semibold rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-2 hover:scale-110 backdrop-blur-sm border border-white/20 overflow-hidden text-xs sm:text-sm md:text-base"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-lg bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Now
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
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
  );
};

export default Header;
// Animation styles for .typewriter, .swipe-up-fade, and .neon-glow are defined in App.css
