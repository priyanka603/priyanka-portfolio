import React, { useRef, useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen py-20 bg-projects relative">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ease-in-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Introduction & Professional Goals */}
          <div className="mb-20">
            <h2 className="text-5xl font-bold text-white mb-8 text-center">About Me</h2>
            <div className="space-y-8 text-justify">
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a passionate Software Developer with a strong foundation in computer science and 
                an evolving expertise in data science. Currently based in Cork, Ireland, I completed
                my Postgraduate Diploma in Data Science and Analytics at University College Cork and 
                my Bachelor's in Computer Science and Engineering at Medi-Caps University.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My journey in technology is driven by a curiosity to solve complex problems and create 
                meaningful solutions that make a difference. I specialize in front-end development 
                while maintaining a keen interest in data science and machine learning.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My aim is to bridge the gap between web development and data science, creating 
                intelligent web applications that leverage data analytics and machine learning. 
                I'm particularly interested in developing solutions that make data-driven insights 
                accessible and actionable through intuitive user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative dots background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
        ))}
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded transform rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-purple-500/20 rounded-lg transform -rotate-12"></div>
    </section>
  );
}

export default About; 