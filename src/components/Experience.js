import { useState } from 'react';

function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      title: "Data Science Research Intern",
      company: "Indian Institute of Technology (IIT) Indore",
      period: "Jan 2023 - Apr 2023",
      location: "Madhya Pradesh, India",
      description: [
        "Developed a Python Dash application to analyze and display trends in open-source project contributions, enhancing user engagement for over 100 users.",
        "Implemented machine learning algorithms to predict contribution patterns and identify key contributors.",
        "Created interactive data visualizations to showcase project metrics and community growth.",
      ],
      skills: ["Python", "Dash", "MongoDB", "Data Analysis", "Machine Learning", "Data Visualization"]
    },
    {
      title: " Full-Stack Development Intern",
      company: "Indian Institute of Technology (IIT) Indore",
      period: "Jun 2022 -  Sep 2022",
      location: "Madhya Pradesh, India",
      description: [
        " Designed and developed a React-based web application for tracking security issues, improving manual tracking efficiency by 30%.",
        " Collaborated with backend developers to integrate secure APIs, enhancing data protection and user experience.",
        " Participated in code reviews and agile sprints, fostering a culture of teamwork and continuous improvement.",
      ],
      skills: ["React", "Node.js", "Python", "AWS", "MongoDB", "Data Visualization", "Machine Learning"]
    },
    {
      title: "Front-end Developer Intern",
      company: "Techdome Pvt. Ltd.",
      period: "Jun 2021 - Sep 2021",
      location: "Madhya Pradesh, India",
      description: [
        "Developed an invoice management system using React.js, significantly improving client billing efficiency by 25%.",
        "Collaborated with cross-functional teams to optimize website load times, enhancing overall user experience.",
        "Assisted in UI/UX design, leading to a measurable increase in client satisfaction by 10%.",
      ],
      skills: ["JavaScript", "React", "CSS", "HTML5", "Git"]
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-gray-800/90 border border-gray-700"
              onClick={() => setExpandedId(expandedId === index ? null : index)}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-400">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${
                      expandedId === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div 
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  expandedId === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-700 pt-4 mt-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-purple-400">{exp.period}</span>
                    <span className="text-gray-400">{exp.location}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {exp.description.map((desc, idx) => (
                      <p key={idx} className="text-gray-300">• {desc}</p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {exp.website && (
                    <a 
                      href={`https://${exp.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {exp.website}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
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

export default Experience; 