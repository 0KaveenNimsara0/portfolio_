import React, { useEffect, useState } from 'react';
import { ExternalLink, Star, GitBranch, Calendar } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/0KaveenNimsara0/repos?sort=updated&per_page=20');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <svg className="animate-spin h-10 w-10 text-gray-600 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Note: Private repositories are indicated accordingly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#2B2B2B] dark:text-white truncate">{repo.name}</h3>
              </div>

              <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitBranch size={14} />
                    <span>{repo.forks_count}</span>
                  </div>
                  <div className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs text-gray-800 dark:text-gray-200">
                    {repo.language || 'N/A'}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                {repo.private ? (
                  <button
                    disabled
                    className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm flex items-center space-x-1 cursor-not-allowed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11v2m0 4h.01"
                      />
                    </svg>
                    <span>Private Repository</span>
                  </button>
                ) : (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#2B2B2B] dark:text-white hover:opacity-75 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    View Code <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
