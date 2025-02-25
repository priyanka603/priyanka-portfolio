import React from 'react';

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Medi-Caps University",
      year: "2019 - 2023",
      description: "Focused on software development, algorithms, and data structures."
    },
    {
      degree: "Postgraduate Diploma in Data Science",
      institution: "University College Cork",
      year: "2023 - 2024",
      description: "Specialized in machine learning and data analytics."
    },
    // Add more education entries as needed
  ];

  return (
    <section className="min-h-screen py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold gradient-text mb-8 text-center">
          Education
        </h2>
        <div className="relative">
          <div className="border-l-2 border-gray-600">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-8 ml-4">
                <div className="absolute -left-3 w-6 h-6 bg-purple-500 rounded-full"></div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-800/90">
                  <h3 className="text-lg font-semibold text-purple-400">{edu.degree}</h3>
                  <h4 className="text-md text-gray-300">{edu.institution}</h4>
                  <p className="text-sm text-gray-400">{edu.year}</p>
                  <p className="text-sm text-gray-200">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
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
    </section>
  );
}

export default Education; 