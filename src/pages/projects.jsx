import React, { useEffect, useState } from 'react';
import { ExternalLink, Star, GitBranch, Calendar, Code, AlertTriangle } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add scroll-to-top on mount
    window.scrollTo(0, 0);

    const fetchRepos = async () => {
      try {
        // Fetch most recently updated public repos
        const response = await fetch('https://api.github.com/users/0KaveenNimsara0/repos?sort=updated&direction=desc&type=public&per_page=9');
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Add animation observer
  useEffect(() => {
    if (loading) return; // Don't run observer until content is loaded

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
  }, [loading]); // Re-run when loading is false

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const pageWrapper = (content) => (
    <section id="projects" className="py-24 pt-40 bg-white dark:bg-gray-950 relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20" data-animate>
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide uppercase">
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent public work from GitHub, demonstrating my skills in action.
          </p>
        </div>
        {/* Content (Loader, Error, or Grid) */}
        {content}
      </div>
    </section>
  );

  if (loading) {
    return pageWrapper(
      <div className="flex justify-center items-center py-20">
        <svg className="animate-spin h-12 w-12 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return pageWrapper(
      <div className="group relative bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-900/50 p-8 rounded-2xl border border-red-200 dark:border-red-800 shadow-sm max-w-2xl mx-auto">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 bg-red-100 dark:bg-red-900/50 border-2 border-red-200 dark:border-red-800 rounded-2xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={24} className="text-red-600 dark:text-red-400" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-xl text-red-900 dark:text-red-100">Failed to load projects</h4>
            <p className="text-red-700 dark:text-red-300 mt-1">There was an error fetching data from the GitHub API. Please try refreshing the page.</p>
            <p className="text-red-500 dark:text-red-400 text-sm mt-2 font-mono">{error}</p>
          </div>
        </div>
      </div>
    );
  }

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
      
      {pageWrapper(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className="group relative h-full flex flex-col bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-2xl hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transform hover:-translate-y-2 transition-all duration-500"
              data-animate
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/30 dark:to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header: Title & Icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:gradient-text transition-all">
                    {repo.name.replace(/[-_]/g, ' ')}
                  </h3>
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-200 dark:border-indigo-800">
                    <Code size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>

                {/* Description (grows to fill space) */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 flex-grow">
                  {repo.description || 'A project repository.'}
                </p>

                {/* Language Tag */}
                <div className="mb-5">
                  {repo.language && (
                    <span className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-xl transition-all duration-300 cursor-default group-hover:border-indigo-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {repo.language}
                    </span>
                  )}
                </div>

                {/* Footer: Stats & Link */}
                <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <span className="flex items-center gap-1.5" title="Stars">
                        <Star size={14} className="text-indigo-600 dark:text-indigo-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1.5" title="Forks">
                        <GitBranch size={14} className="text-indigo-600 dark:text-indigo-400" />
                        {repo.forks_count}
                      </span>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    >
                      View Code <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>Last updated: {formatDate(repo.updated_at)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Projects;