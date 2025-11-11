import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import logoLight from 'logo113.png';
import logoDark from 'logo112.png';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const logoSrc = theme === 'dark' ? logoDark : logoLight;

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        <div className="flex flex-col items-center text-center gap-8">

          {/* Brand Info */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={logoSrc}
              alt="Kaveen Nimsara Logo"
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-3xl font-bold gradient-text">
              Kaveen Nimsara
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              A passionate developer crafting innovative digital experiences that bridge design and technology.
            </p>
          </div>

          {/* Quick Links */} 
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/" className="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
            {/* Note: Update these to use scrollToSection if they are on the same page, or keep as /path if they are separate routes */}
            <Link to="/#skills" className="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Skills
            </Link>
            <Link to="/projects" className="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Social Links (Styled to match Hero) */} 
          <div className="flex justify-center space-x-5">
            <a 
              href="https://github.com/0KaveenNimsara0" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="http://linkedin.com/in/kaveen-nimsara-5a343b2b8" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
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
        
        {/* Copyright */} 
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Kaveen Nimsara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;