import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiPython } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="w-12 h-12 text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="w-12 h-12 text-blue-400" /> },
    { name: 'Node.js', icon: <FaNode className="w-12 h-12 text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-600" /> },
    { name: 'Express', icon: <SiExpress className="w-12 h-12 text-gray-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-12 h-12 text-cyan-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
    { name: 'Python', icon: <SiPython className="w-12 h-12 text-blue-500" /> },
    { name: 'GitHub', icon: <FaGithub className="w-12 h-12 text-gray-800" /> },
    { name: 'Figma', icon: <FaFigma className="w-12 h-12 text-purple-500" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50"
            >
              {skill.icon}
              <span className="mt-2 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
