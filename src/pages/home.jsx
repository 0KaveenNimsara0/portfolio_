import React, { useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Github, 
  Linkedin, 
  Code,
  Palette,
  Server,
  Database,
  ArrowRight,
  Download
} from 'lucide-react';

const Portfolio = ({ scrollToSection }) => {
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
      skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL']
    },
    { 
      name: 'Database & DevOps', 
      icon: <Server size={28} className="text-[#2B2B2B]" />,
      skills: ['MongoDB', 'PostgreSQL', 'Docker', 'CI/CD', 'Git & GitHub', 'Vercel']
    }
  ];

  // Effect for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Cleanup observer on component unmount
    return () => elementsToAnimate.forEach(el => observer.unobserve(el));
  }, []);
  
  return (
    <>
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        [data-animate] {
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
      
<div className="min-h-screen bg-white dark:bg-gray-900 text-[#2B2B2B] dark:text-white">
        {/* Hero Section */}
            <section id="hero" className="pt-20 md:pt-16 min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  
                  {/* Image Column */}
                  <div className="order-1 md:order-2 flex justify-center" data-animate>
                      <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] flex-shrink-0">
                           <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full transform rotate-3 transition-transform duration-300 hover:rotate-0"></div>
                          <img 
                            src="../src/images/33.png" 
                            alt="Kaveen Nimsara"
                            className="relative w-full h-full object-cover object-top rounded-full shadow-2xl border-8 border-white dark:border-gray-800"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/EFEFEF/2B2B2B?text=Kaveen'; }}
                          />
                      </div>
                  </div>

                  {/* Text Column */}
                    <div className="order-2 md:order-1 text-center md:text-left">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] dark:text-white mb-6" data-animate style={{ animationDelay: '200ms' }}>

                        Hi, I'm <span className="text-[#2B2B2B] dark:text-white">Kaveen Nimsara</span>
                      </h1>
                      
                      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0" data-animate style={{ animationDelay: '400ms' }}>
                        A passionate Full Stack Developer creating innovative digital solutions 
                        that bridge the gap between design and technology.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center" data-animate style={{ animationDelay: '600ms' }}>
                        <button 
                          onClick={() => scrollToSection('skills')}
                          className="bg-[#2B2B2B] dark:bg-white dark:text-[#2B2B2B] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                          View My Skills <ArrowRight size={18} />
                        </button>
                        <a href="../src/files/cv.pdf" download className="border-2 border-[#D4D4D4] dark:border-white text-gray-700 dark:text-white px-8 py-3 rounded-full font-medium hover:border-[#2B2B2B] hover:text-[#2B2B2B] dark:hover:border-[#2B2B2B] dark:hover:text-white transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                          <Download size={18} />
                           Download Resume
                        </a>
                      </div>
                      
                      {/* <div className="mt-12 flex justify-center md:justify-start space-x-6" data-animate style={{ animationDelay: '800ms' }}>
                        <a href="https://github.com/0KaveenNimsara0" className="text-gray-400 hover:text-[#2B2B2B] transition-colors">
                          <Github size={24} />
                        </a>
                        <a href="http://linkedin.com/in/kaveen-nimsara-5a343b2b8" className="text-gray-400 hover:text-[#2B2B2B] transition-colors">
                          <Linkedin size={24} />
                        </a>
                        <a href="kaveennimsara12@gmail.com" className="text-gray-400 hover:text-[#2B2B2B] transition-colors">
                          <Mail size={24} />
                        </a>
                      </div> */}
                  </div>
              </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} aria-label="Scroll to skills">
              <ChevronDown size={32} className="text-[#B3B3B3] hover:text-[#2B2B2B]" />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-gray-900 rounded-lg">
            <div className="text-center mb-16" data-animate>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">Skills & Expertise</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I build modern digital solutions with a focus on clean code, user experience, and scalability.
              </p>
            </div>
          
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-animate style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg flex items-center justify-center">
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
      </div>
    </>
  );
};

export default Portfolio;

