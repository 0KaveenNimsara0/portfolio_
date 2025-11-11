import React from 'react';
import { Code, Palette, Smartphone, Database, Server, Wind, Feather } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { 
      name: 'Frontend Development', 
      icon: <Code size={28} className="text-[#2B2B2B]" />,
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Next.js', 'Tailwind CSS']
    },
    { 
      name: 'UI/UX Design', 
      icon: <Palette size={28} className="text-[#2B2B2B]" />,
      skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Responsive Design', 'Design Systems']
    },
    { 
      name: 'Backend Development', 
      icon: <Database size={28} className="text-[#2B2B2B]" />,
      skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs']
    },
    { 
      name: 'Database & DevOps', 
      icon: <Server size={28} className="text-[#2B2B2B]" />,
      skills: ['MongoDB', 'PostgreSQL', 'Docker', 'CI/CD', 'Git & GitHub']
    }
  ];

  return (
<section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I build modern digital solutions with a focus on clean code, user experience, and scalability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#2B2B2B] dark:text-white">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
