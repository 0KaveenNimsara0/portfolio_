import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
      <a
        href="https://github.com/0KaveenNimsara0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#2B2B2B] hover:text-white dark:hover:bg-white dark:hover:text-[#2B2B2B] transition-colors duration-300"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href="http://linkedin.com/in/kaveen-nimsara-5a343b2b8"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#2B2B2B] hover:text-white dark:hover:bg-white dark:hover:text-[#2B2B2B] transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="mailto:kaveennimsara12@gmail.com"
        className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#2B2B2B] hover:text-white dark:hover:bg-white dark:hover:text-[#2B2B2B] transition-colors duration-300"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default Sidebar;
