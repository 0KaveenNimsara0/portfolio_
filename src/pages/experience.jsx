import React, { useEffect } from 'react';
import { Award, Calendar, CheckCircle, Briefcase } from 'lucide-react';

const Experience = () => {
  // Mock data as provided
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

  // Effect for scroll animations
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => {
      const elementsToClean = document.querySelectorAll('[data-animate]');
      elementsToClean.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        [data-animate] { opacity: 0; }
        .animate-fade-in-up { animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .gradient-text {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%);
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* UPDATED: Section container */}
      <section id="experience" className="py-24 pt-40 bg-white dark:bg-gray-950 relative overflow-hidden min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* UPDATED: Section Heading */}
          <div className="text-center mb-20" data-animate>
            <div className="inline-block mb-4">
              <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase">
                Career
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey through various roles and the impact I've made along the way.
            </p>
          </div>
          
          {/* UPDATED: Experience Cards */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-2xl hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transform hover:-translate-y-2 transition-all duration-500" 
                data-animate 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/30 dark:to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
                      <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">{experience.company}</p>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 sm:mt-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full flex-shrink-0">
                      <Calendar size={14} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                      {experience.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{experience.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 dark:text-white flex items-center">
                      <Briefcase size={16} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2 ml-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2.5">
                          <CheckCircle size={16} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;