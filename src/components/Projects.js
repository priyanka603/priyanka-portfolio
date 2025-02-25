import React, { useRef, useState, useEffect } from 'react';

function Projects() {
  const projects = [
    {
      name: "Open Source Contribution Analysis",
      type: "DATA ANALYSIS & VISUALIZATION PLATFORM",
      description: "Developed a Python Dash application to analyze and visualize trends in open-source contributions, enhancing user engagement and supporting community outreach efforts. The platform provides comprehensive analytics and interactive data visualization.",
      tech: "Built with: Python, Dash, MongoDB, Data Analysis Tools, Machine Learning Libraries (Scikit-learn), Data Visualization (Matplotlib)",
      image: "/contribution-analysis.jpg",
      
    },
    {
      name: "Network Security Dashboard",
      type: "SECURITY MONITORING PLATFORM",
      description: "Server rendered, progressive web application for network security monitoring. Engineered a monitoring dashboard using Python, improving incident response times and providing analytical insights into network performance. Features real-time monitoring and alert systems.",
      tech: "Built with: Python, Security Frameworks, Analytics Tools, Real-time Monitoring Systems, Dashboard Technologies",
      image: "/security-dashboard.png",
      
    },
    {
      name: "Invoice Management System",
      type: "FINANCIAL MANAGEMENT PLATFORM",
      description: "Created a fully functional invoicing system that automated billing processes for over 100 clients, reducing manual input by 30% and ensuring data accuracy. The system includes automated billing, payment tracking, and financial reporting features.",
      tech: "Built with: React.js, Node.js, Database Management Systems, Payment Integration APIs, Financial Reporting Tools",
      image: "/invoice-system.png",
      
    },
    
  ];

  const [visibleProjects, setVisibleProjects] = useState(new Array(projects.length).fill(false));
  const projectRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    projectRefs.current.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleProjects(prev => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        {
          threshold: 0.1,
          rootMargin: '-50px',
        }
      );

      if (ref) {
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="min-h-screen py-20 bg-projects relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">Projects</h2>
        {projects.map((project, index) => (
          <div 
            key={index} 
            ref={el => projectRefs.current[index] = el}
            className="container mx-auto px-6 min-h-screen flex flex-col md:flex-row items-center gap-12 relative"
          >
            <div 
              className={`w-full md:w-1/2 relative group transition-all duration-1000 transform
                ${visibleProjects[index] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-full'
                }`}
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-3xl transition-all duration-300 group-hover:bg-purple-500/30"></div>
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-auto rounded-3xl shadow-xl relative z-10 transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
            
            <div className={`w-full md:w-1/2 space-y-6 transition-all duration-1000 delay-300
              ${visibleProjects[index] 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
              }`}
            >
              <p className="text-purple-400 uppercase tracking-wider">{project.type}</p>
              <h2 className="text-5xl font-bold text-white mb-8">{project.name}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <p className="text-purple-400 mb-8">
                {project.tech}
              </p>
            </div>

            {/* Decorative shapes for second project */}
            {index === 1 && (
              <>
                <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded transform rotate-12 opacity-20"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
                <div className="absolute bottom-40 right-40 w-20 h-20 bg-purple-500/20 rounded-lg transform -rotate-12"></div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Global decorative elements */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-purple-500 rounded-full"></div>
        ))}
      </div>

      {/* Decorative shapes for first project */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded transform rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-purple-500/20 rounded-lg transform -rotate-12"></div>
    </section>
  );
}

export default Projects; 