import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
<footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand Info */} 
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Kaveen Nimsara</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
              A passionate developer creating modern and responsive web applications.
            </p>
          </div>

          {/* Quick Links */} 
          <div>
             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Quick Links</h3>
             <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Home</a></li>
                <li><a href="/#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Skills</a></li>
                <li><a href="/#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Projects</a></li>
             </ul>
          </div>
          
          {/* Social Links */} 
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Connect With Me</h3>
            <div className="mt-4 flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/0KaveenNimsara0" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={22} />
              </a>
              <a href="http://linkedin.com/in/kaveen-nimsara-5a343b2b8" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={22} />
              </a>
              <a href="kaveennimsara12@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail size={22} />
              </a>
            </div>
          </div>

        </div>
        
        {/* Copyright */} 
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Kaveen Nimsara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

