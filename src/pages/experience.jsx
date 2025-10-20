import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.',
      achievements: ['Improved app performance by 40%', 'Led team of 5 developers', 'Launched 3 major products']
    },
    {
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Developed responsive websites and web applications for various clients across different industries.',
      achievements: ['Delivered 25+ client projects', 'Reduced load times by 50%', 'Increased client satisfaction to 98%']
    },
    {
      company: 'StartupXYZ',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Contributed to product development, learned modern development practices, and collaborated with cross-functional teams.',
      achievements: ['Built core features for MVP', 'Participated in user research', 'Improved code quality metrics']
    }
  ];

  return (
<section className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through various roles and the impact I've made along the way.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#2B2B2B] dark:text-white">{experience.position}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">{experience.company}</p>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 lg:mt-0">
                  <Calendar size={16} className="mr-2 dark:text-white" />
                  {experience.period}
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-[#2B2B2B] dark:text-white flex items-center">
                  <Award size={16} className="mr-2 text-[#2B2B2B] dark:text-white" />
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 ml-6">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
