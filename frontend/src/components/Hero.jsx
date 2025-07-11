import React, { useState, useEffect } from 'react'
import { hero1, hero2, hero3 } from '../assets/assets'

const heroImages = [hero1, hero2, hero3];
const heroCaptions = [
  'We collaborate closely with clients.',
  'We turn ideas into innovative digital solutions.',
  'We are a team of creative professionals.'
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
    <section className="hero-section" style={{ display: 'flex', alignItems: 'center', gap: 40, background: 'linear-gradient(45deg, #f8f9fa, #ffffff)' }}>
      
      <div className="hero-image" style={{ flex: 1, maxWidth: 400, minWidth: 260, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
        <div style={{ background: '#e9f0fa', borderRadius: 16, padding: 24, boxShadow: '0 8px 30px rgba(0,0,0,0.12)', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={heroImages[current]}
              alt={`Slide ${current + 1}`}
              style={{ width: '100%', borderRadius: 12, marginTop: 8, boxShadow: '0 4px 16px rgba(102,126,234,0.10)', transition: 'all 0.5s' }}
            />
            {/* Caption Overlay */}
            <div style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(44,62,80,0.85)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: 8,
              fontWeight: 500,
              fontSize: '1rem',
              textAlign: 'center',
              maxWidth: '90%',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              zIndex: 3
            }}>
              {heroCaptions[current]}
            </div>
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', cursor: 'pointer', zIndex: 2 }}
              aria-label="Previous"
            >
              &#8592;
            </button>
            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', background: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', cursor: 'pointer', zIndex: 2 }}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
      <div className="hero-content" style={{ flex: 2, paddingRight: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: 8 }}>Who We Are</h2>
        <h3 style={{ fontWeight: 600, fontSize: '1.3rem', marginBottom: 12 }}>
          We Design. We Build. We Innovate.
        </h3>
        <p style={{ color: '#555', fontSize: '1rem', marginBottom: 18 }}>
          At Digital Innovation, we bring your ideas to life with innovative designs and reliable solutions. 
          From custom websites to cutting-edge apps, 
          our team is dedicated to helping your business grow and succeed in the digital world.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#22c55e', fontSize: 20, marginRight: 10 }}>✔</span>
            Passionate About Using Technology to Drive Innovation
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#22c55e', fontSize: 20, marginRight: 10 }}>✔</span>
            Experts in Crafting Tailored Digital Solutions
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#22c55e', fontSize: 20, marginRight: 10 }}>✔</span>
            Focused on Your Long-Term Success
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#22c55e', fontSize: 20, marginRight: 10 }}>✔</span>
            Delivering Reliable Results You Can Trust
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#22c55e', fontSize: 20, marginRight: 10 }}>✔</span>
            Always Here to Help
          </li>
        </ul>
        <a href="#contact"
           className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 text-white font-bold rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Contact Us &rarr;
        </a>
      </div>
     
    </section>
  )
}

export default Hero