import React, { useRef, useState, useEffect } from 'react';

function Skills() {
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

  const skills = {
    frontend: [
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Redux', icon: '/icons/redux.svg' },
      { name: 'HTML5', icon: '/icons/html5.svg' },
      { name: 'CSS3', icon: '/icons/css3.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'mongoDB', icon: '/icons/mongodb.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
    ],
    tools: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'VS Code', icon: '/icons/vscode.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
    ]
  };

  return (
    <section ref={sectionRef} className="min-h-screen py-20 bg-projects relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-400 mb-4">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
          <h2 className="text-4xl font-bold gradient-text">Skills & Experience</h2>
        </div>

        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 delay-300 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-gray-300 text-lg">
            The main area of expertise is front end development (client side of the web).
            HTML, CSS, JS, building small and medium web applications with React, custom
            plugins, features, animations, and coding interactive layouts.
          </p>
          <a href="https://linkedin.com/in/priyanka-mehta21" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
            Visit my LinkedIn for more details.
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
          {Object.values(skills).flat().map((skill, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center group transition-all duration-700 transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gray-700 rounded-xl p-3 flex items-center justify-center mb-2 transform transition-all duration-300 group-hover:scale-110">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-10 h-10 filter brightness-0 invert opacity-70 group-hover:opacity-100"
                />
              </div>
              <span className="text-gray-400 text-sm group-hover:text-purple-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative dots background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-purple-500 rounded-full"></div>
        ))}
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded transform rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-purple-500/20 rounded-lg transform -rotate-12"></div>
      <div className="absolute top-40 left-40 w-32 h-32 bg-blue-500/20 rounded-full"></div>
    </section>
  );
}

export default Skills; 