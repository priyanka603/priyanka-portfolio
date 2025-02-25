import React, { useRef, useState, useEffect } from 'react';
import CVButton from './CVButton';
import '../styles/Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center px-6 relative">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center page-transition">
        <div>
          <h1 className="text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Priyanka</span>
            <br />
            Web Developer
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            Front End Developer / JavaScript Fan / Data Science enthusiast
          </p>
          <div className="space-y-4 text-gray-300">
            <p>Professionally connected with the web development industry.</p>
            <p>
              Problem solver, well-organised person, loyal employee with high attention to detail.
              Fan of outdoor activities, video games, and coding of course.
            </p>
            <p className="text-gray-400">
              +353 83 319 3708 | mehtapriyanka2127@gmail.com
            </p>
            <div className="flex gap-4 mt-6">
              <CVButton />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[-20px] right-[-20px] w-16 h-16 bg-purple-500 rounded transform rotate-12"></div>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full max-w-md mx-auto rounded-lg shadow-2xl relative z-10"
          />
          <div className="absolute bottom-[-40px] left-[-40px] w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
        </div>
      </div>

      {/* Decorative dots background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-10">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
        ))}
      </div>
    </section>
  );
}

export default Home; 