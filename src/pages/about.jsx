import React, { useEffect } from 'react';
import { GraduationCap, Code, Target, Cpu, Database, School, Star, Server, Cog } from 'lucide-react';

const About = () => {
  // Effect for scroll animations
  useEffect(() => {
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

    return () => elementsToAnimate.forEach(el => observer.unobserve(el));
  }, []);
  
  // Data for the Technical Expertise section
  const technicalExpertise = [
    { 
      name: 'Frontend', 
      icon: <Code size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    { 
      name: 'Backend', 
      icon: <Server size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: ['Java EE', 'PHP', 'Python', 'Node.js', 'Flask', 'Express']
    },
    { 
      name: 'Database', 
      icon: <Database size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: ['MySQL', 'MongoDB']
    },
    { 
      name: 'AI & Machine Learning', 
      icon: <Cpu size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: ['TensorFlow', 'Scikit-learn', 'CNN']
    },
    {
      name: 'DevOps & Tools',
      icon: <Cog size={24} className="text-gray-600 dark:text-gray-400" />,
      skills: ['Git', 'GitHub', 'REST APIs', 'MVC Architecture']
    }
  ];

  // Education data from your CV, including O/L
  const educationHistory = [
    {
      institution: 'Cardiff Metropolitan University',
      degree: 'BSc (Hons) Software Engineering',
      duration: 'In Progress (Expected Nov 2024)',
      description: 'Currently expanding my practical skills in modern software development, with a focus on delivering scalable, high-performance solutions for real-world problems.',
      icon: <GraduationCap />
    },
    {
      institution: 'Cardiff Metropolitan University',
      degree: 'Higher Diploma in Computing and Software Engineering',
      duration: 'Mar 2023 - Sep 2024',
      description: 'Completed a comprehensive program that built a strong foundation in software engineering principles, object-oriented programming, and database management.',
      icon: <GraduationCap />
    },
    {
      institution: 'P. De S. Kularathna College',
      degree: 'G.C.E Advance Level (A/L)',
      duration: '2020 - 2022',
      description: 'Focused on the Physical Science stream, developing strong analytical and problem-solving skills.',
      icon: <School />
    },
    {
      institution: 'P. De S. Kularathna College',
      degree: 'G.C.E Ordinary Level (O/L)',
      duration: '2014 - 2019',
      description: 'Successfully completed my secondary education, which established a strong academic foundation for my advanced studies in the science and technology stream.',
      icon: <School />
    }
  ];

  // Volunteering & Memberships data
  const volunteeringHistory = [
    {
      role: 'Student Member',
      organization: 'IEEE',
      duration: 'Dec 2024 - Present',
      description: 'Active member of the global engineering and technology community, participating in professional development and networking.',
      icon: <Star />
    },
    {
      role: 'Student Member',
      organization: 'IEEE Computer Society',
      duration: 'Dec 2024 - Present',
      description: 'Engaged member connecting with global computing professionals and utilizing resources for technical growth.',
      icon: <Star />
    }
  ];

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

      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- EXPANDED ABOUT ME SECTION --- */}
          <div className="max-w-4xl mx-auto text-center mb-24" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-6">About Me</h2>
            <h3 className="text-2xl font-semibold text-[#2B2B2B] dark:text-white mb-4">My Journey & Philosophy</h3>
            <div className="text-left space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                My journey into the world of software engineering began with a deep curiosity for how technology can solve real-world problems. This curiosity has since evolved into a dedicated passion for developing efficient, scalable, and user-friendly solutions. My academic path at <strong>Cardiff Metropolitan University</strong> has been instrumental, providing me with a robust foundation in computer science principles while constantly challenging me to apply this knowledge through hands-on, project-based learning.
              </p>
              <p>
                From architecting backend systems with Java EE and Python to crafting dynamic user interfaces with React, I have embraced the full development stack. I am particularly drawn to the intersection of data and software, which led me to explore AI and Machine Learning, culminating in projects like a venomous species prediction system. My philosophy is centered on the belief that the best software is not only technically sound but also intuitive and maintainable. This principle guides my approach to writing clean code, adhering to industry best practices, and pursuing continuous learning in this ever-evolving field.
              </p>
            </div>
             <div className="inline-flex items-start gap-4 pt-8 mt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <Target size={24} className="text-[#2B2B2B] dark:text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-[#2B2B2B] dark:text-white">Career Goal</h4>
                  <p className="text-gray-600 dark:text-gray-400">Seeking a challenging software engineering internship to apply my skills, contribute to impactful projects, and learn from experienced professionals.</p>
                </div>
              </div>
          </div>
          
          {/* --- NEW TECHNICAL EXPERTISE SECTION --- */}
          <div className="mt-24">
              <div className="text-center mb-16" data-animate>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">Technical Expertise</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">The tools and technologies I use to build modern software solutions.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {technicalExpertise.map((category, index) => (
                      <div key={category.name} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-animate style={{ animationDelay: `${index * 150}ms` }}>
                          <div className="flex items-center gap-4 mb-4">
                              {category.icon}
                              <h4 className="text-xl font-semibold text-[#2B2B2B] dark:text-white">{category.name}</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                              {category.skills.map((skill) => (
                                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* --- EDUCATION TIMELINE SECTION --- */}
          <div className="mt-24">
              <div className="text-center mb-16" data-animate>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">Education</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">My academic background and qualifications.</p>
              </div>
              <div className="relative max-w-2xl mx-auto" data-animate>
                  <div className="absolute left-3 sm:left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  {educationHistory.map((edu, index) => (
                      <div key={index} className="relative mb-8 flex items-center w-full">
                          <div className={`hidden sm:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full items-center justify-center`}>
                              <div className="w-3 h-3 bg-[#2B2B2B] dark:bg-white rounded-full"></div>
                          </div>
                          <div className="flex sm:hidden absolute left-0 w-6 h-6 items-center justify-center">
                             <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                               <div className="w-3 h-3 bg-[#2B2B2B] dark:bg-white rounded-full"></div>
                             </div>
                          </div>
                          <div className={`w-full sm:w-[calc(50%-2rem)] p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 ml-10 sm:ml-0 ${index % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'}`}>
                              <p className="text-sm font-medium text-[#2B2B2B] dark:text-white mb-1">{edu.duration}</p>
                              <h4 className="text-lg font-bold text-[#2B2B2B] dark:text-white">{edu.degree}</h4>
                              <p className="text-md text-gray-600 dark:text-gray-400 mb-3">{edu.institution}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-300">{edu.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          
          {/* --- VOLUNTEERING & MEMBERSHIPS SECTION --- */}
          <div className="mt-24">
              <div className="text-center mb-16" data-animate>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">Volunteering & Memberships</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">My involvement in professional communities.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {volunteeringHistory.map((item, index) => (
                      <div key={item.role} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col" data-animate style={{ animationDelay: `${index * 150}ms` }}>
                          <div className="flex justify-between items-start mb-2">
                             <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                      {item.icon}
                                  </div>
                                  <div>
                                      <h4 className="text-lg font-bold text-[#2B2B2B] dark:text-white">{item.role}</h4>
                                      <p className="text-md text-gray-600 dark:text-gray-400">{item.organization}</p>
                                  </div>
                             </div>
                             <p className="text-sm font-medium text-gray-500 dark:text-gray-300 flex-shrink-0">{item.duration}</p>
                          </div>
                          <p className="text-gray-500 dark:text-gray-300 text-sm mt-2">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;

