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

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skillCategories = [
    { 
      name: 'Frontend Development', 
      icon: <Code size={28} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Next.js', 'Tailwind CSS']
    },
    { 
      name: 'UI/UX Design', 
      icon: <Palette size={28} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Responsive Design', 'Design Systems']
    },
    { 
      name: 'Backend Development', 
      icon: <Database size={28} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs']
    },
    { 
      name: 'Database & DevOps', 
      icon: <Server size={28} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['MongoDB', 'PostgreSQL', 'Docker', 'CI/CD', 'Git & GitHub']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1,
    });

    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => elementsToAnimate.forEach(el => observer.unobserve(el));
  }, []);
  
  return (
    <>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        [data-animate] {
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%);
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        
        {/* Hero Section */}
        <section id="hero" className="pt-20 md:pt-16 min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/20 dark:from-gray-900 dark:via-indigo-950/20 dark:to-purple-950/10 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Text Column */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <div className="inline-block mb-4" data-animate>
                  <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    👋 Welcome to my portfolio
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-animate style={{ animationDelay: '200ms' }}>
                  Hi, I'm <br />
                  <span className="gradient-text">Kaveen Nimsara</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto md:mx-0 font-light" data-animate style={{ animationDelay: '400ms' }}>
                  Full Stack Developer
                </p>
                
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto md:mx-0" data-animate style={{ animationDelay: '500ms' }}>
                  Crafting innovative digital experiences that bridge design and technology. 
                  Specialized in building scalable, user-centric applications.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12" data-animate style={{ animationDelay: '600ms' }}>
                  <button 
                    onClick={() => scrollToSection('skills')}
                    className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-indigo-600/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Explore My Work 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="cv.pdf" 
                    download 
                    className="group border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-medium hover:border-indigo-600 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <Download size={18} className="group-hover:animate-bounce" />
                    Download CV
                  </a>
                </div>
                
                <div className="flex justify-center md:justify-start space-x-5" data-animate style={{ animationDelay: '800ms' }}>
                  <a 
                    href="https://github.com/0KaveenNimsara0" 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="http://linkedin.com/in/kaveen-nimsara-5a343b2b8" 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:kaveennimsara12@gmail.com" 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              
              {/* Image Column */}
              <div className="order-1 md:order-2 flex justify-center" data-animate>
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] flex-shrink-0 floating">
                  {/* Gradient Ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple-400 dark:from-indigo-700 dark:to-purple-600 rounded-full opacity-50 blur-2xl"></div>
                  
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 spin-slow"></div>
                  
                  {/* Image Container */}
                  <div className="absolute inset-2 bg-white dark:bg-gray-950 rounded-full overflow-hidden">
                    <img
                      src="33.png"
                      alt="Kaveen Nimsara"
                      className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/4f46e5/FFFFFF?text=KN'; }}
                    />
                  </div>
                  
                  {/* Decorative Dots */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-40"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400 dark:bg-purple-600 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} 
              aria-label="Scroll to skills"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 shadow-lg transition-colors"
            >
              <ChevronDown size={24} className="text-gray-600 dark:text-gray-300 hover:text-white" />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-white dark:bg-gray-950 min-h-screen flex items-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ 
              backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20" data-animate>
              <div className="inline-block mb-4">
                <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase">
                  What I Do
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Expertise
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Building modern digital solutions with clean code, exceptional user experience, 
                and scalable architecture at the core.
              </p>
            </div>
          
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50 p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-2xl hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transform hover:-translate-y-2 transition-all duration-500" 
                  data-animate 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/30 dark:to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-200 dark:border-indigo-800 group-hover:border-indigo-600 dark:group-hover:border-indigo-500 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                    </div>
                  
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-300 cursor-default hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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