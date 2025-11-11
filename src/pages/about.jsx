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

    return () => {
      // Clean up observers
      const elementsToClean = document.querySelectorAll('[data-animate]');
      elementsToClean.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Data for the Technical Expertise section
  // UPDATED: Icons with accent color
  const technicalExpertise = [
    {
      name: 'Frontend',
      icon: <Code size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      icon: <Server size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['Java EE', 'PHP', 'Python', 'Node.js', 'Flask', 'Express']
    },
    {
      name: 'Database',
      icon: <Database size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      name: 'AI & Machine Learning',
      icon: <Cpu size={24} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['TensorFlow', 'Scikit-learn', 'CNN']
    },
    {
      name: 'DevOps & Tools',
      icon: <Cog size={24} className="text-indigo-600 dark:text-indigo-400" />,
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
      icon: <GraduationCap size={22} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      institution: 'Cardiff Metropolitan University',
      degree: 'Higher Diploma in Computing and Software Engineering',
      duration: 'Mar 2023 - Sep 2024',
      description: 'Completed a comprehensive program that built a strong foundation in software engineering principles, object-oriented programming, and database management.',
      icon: <GraduationCap size={22} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      institution: 'P. De S. Kularathna College',
      degree: 'G.C.E Advance Level (A/L)',
      duration: '2020 - 2022',
      description: 'Focused on the Physical Science stream, developing strong analytical and problem-solving skills.',
      icon: <School size={22} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      institution: 'P. De S. Kularathna College',
      degree: 'G.C.E Ordinary Level (O/L)',
      duration: '2014 - 2019',
      description: 'Successfully completed my secondary education, which established a strong academic foundation for my advanced studies in the science and technology stream.',
      icon: <School size={22} className="text-indigo-600 dark:text-indigo-400" />
    }
  ];

  // Volunteering & Memberships data
  const volunteeringHistory = [
    {
      role: 'Student Member',
      organization: 'IEEE',
      duration: 'Dec 2024 - Present',
      description: 'Active member of the global engineering and technology community, participating in professional development and networking.',
      icon: <Star size={22} className="text-indigo-600 dark:text-indigo-400" />
    },
    {
      role: 'Student Member',
      organization: 'IEEE Computer Society',
      duration: 'Dec 2024 - Present',
      description: 'Engaged member connecting with global computing professionals and utilizing resources for technical growth.',
      icon: <Star size={22} className="text-indigo-600 dark:text-indigo-400" />
    }
  ];

  return (
    <>
      {/* UPDATED: Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        [data-animate] {
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
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

      {/* UPDATED: Section with new background and text colors */}
      <section id="about" className="py-24 pt-40 bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* --- EXPANDED ABOUT ME SECTION --- */}
          <div className="max-w-4xl mx-auto mb-24">
            {/* UPDATED: Section Heading */}
            <div className="text-center mb-12" data-animate>
              <div className="inline-block mb-4">
                <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Who I Am
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            </div>

            {/* UPDATED: Prose Text Colors */}
            {/* UPDATED: Professional & Engaging About Section for Portfolio */}
            <div
              className="text-left space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12"
              data-animate
              style={{ animationDelay: '150ms' }}
            >
              <p>
                As a passionate <strong>Full Stack Developer</strong>, I thrive on transforming ideas into impactful digital solutions that blend creativity, functionality, and technical precision. My journey in software engineering began with a deep curiosity about how technology can solve real-world problems a curiosity that has evolved into a career dedicated to developing <strong>efficient, scalable, and user-centered</strong> applications.
              </p>

              <p>
                My academic foundation at <strong>Cardiff Metropolitan University</strong> has strengthened my expertise in computing and software engineering while encouraging hands-on learning through practical projects. Over time, I’ve gained comprehensive experience across the entire development stack from architecting secure backend systems with <strong>Java EE</strong>, <strong>Python</strong>, and <strong>Node.js</strong> to designing intuitive frontends using <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
              </p>

              <p>
                I have developed and deployed several real-world projects, including a <strong>Java EE Cab Booking Platform</strong> with MVC and design patterns, an <strong>AI-powered House Price Prediction System</strong>, and a <strong>Venomous Species Identification Platform</strong> leveraging <strong>TensorFlow</strong> and <strong>Flask APIs</strong>. These projects reflect not only my technical skillset but also my commitment to clean code, modular architecture, and continuous innovation.
              </p>

              <p>
                I’m driven by a growth mindset always eager to learn emerging technologies and apply them to create intelligent, high-performance systems. Currently, I’m seeking <strong>internship</strong>, <strong>part-time</strong>, or <strong>full-time opportunities</strong> where I can contribute my technical expertise, collaborate with talented teams, and deliver software that truly makes a difference.
              </p>
            </div>
            {/* UPDATED: Career Goal Callout Card */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-900/50 p-8 rounded-2xl border border-indigo-200 dark:border-gray-800 shadow-sm" data-animate style={{ animationDelay: '300ms' }}>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-200 dark:border-indigo-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl text-gray-900 dark:text-white">Career Goal</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Seeking a challenging software engineering internship to apply my skills, contribute to impactful projects, and learn from experienced professionals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- TECHNICAL EXPERTISE SECTION --- */}
          <div className="mt-24">
            {/* UPDATED: Section Heading */}
            <div className="text-center mb-16" data-animate>
              <div className="inline-block mb-4">
                <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase">
                  My Toolbox
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Technical <span className="gradient-text">Expertise</span>
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            </div>

            {/* UPDATED: Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {technicalExpertise.map((category, index) => (
                <div
                  key={category.name}
                  className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-2xl hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transform hover:-translate-y-2 transition-all duration-500"
                  data-animate
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/30 dark:to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-200 dark:border-indigo-800 group-hover:border-indigo-600 dark:group-hover:border-indigo-500 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {category.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{category.name}</h4>
                    </div>
                    {/* UPDATED: Skill Pills */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-300 cursor-default hover:scale-105"
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

          {/* --- EDUCATION TIMELINE SECTION --- */}
          <div className="mt-24">
            {/* UPDATED: Section Heading */}
            <div className="text-center mb-20" data-animate>
              <div className="inline-block mb-4">
                <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase">
                  My Journey
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="gradient-text">Education</span>
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            </div>

            {/* UPDATED: Timeline */}
            <div className="relative max-w-3xl mx-auto" data-animate>
              <div className="absolute left-3 sm:left-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              {educationHistory.map((edu, index) => (
                <div key={index} className="relative mb-10 flex items-center w-full">
                  {/* UPDATED: Timeline Dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full items-center justify-center ring-4 ring-white dark:ring-gray-950">
                    <div className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  </div>
                  <div className="flex sm:hidden absolute left-0 w-6 h-6 items-center justify-center ring-4 ring-white dark:ring-gray-950">
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* UPDATED: Timeline Cards */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transform hover:-translate-y-1 transition-all duration-300 ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">{edu.duration}</p>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-md text-gray-600 dark:text-gray-400 mb-3">{edu.institution}</p>
                      </div>
                      {/* ADDED: Icon from data */}
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-200 dark:border-indigo-800">
                        {edu.icon}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- VOLUNTEERING & MEMBERSHIPS SECTION --- */}
          <div className="mt-24">
            {/* UPDATED: Section Heading */}
            <div className="text-center mb-16" data-animate>
              <div className="inline-block mb-4">
                <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Community
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Volunteering & <span className="gradient-text">Memberships</span>
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            </div>

            {/* UPDATED: Volunteering Cards */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {volunteeringHistory.map((item, index) => (
                <div
                  key={item.role}
                  className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-2xl hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transform hover:-translate-y-2 transition-all duration-500"
                  data-animate
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-200 dark:border-indigo-800">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h4>
                          <p className="text-md text-gray-600 dark:text-gray-400">{item.organization}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{item.description}</p>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-4">{item.duration}</p>
                  </div>
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