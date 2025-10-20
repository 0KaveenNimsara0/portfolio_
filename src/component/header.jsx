import React, { useState, useContext } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';

const Header = ({ navigation, scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);

  const handleNavClick = (item) => {
    // Navigate to a different page if path is provided
    if (item.path) {
      navigate(item.path);
    } 
    // If on the home page, scroll to the section
    else if (item.id && location.pathname === '/') {
      scrollToSection(item.id);
    }
    // If on another page, navigate to home and then scroll
    else if (item.id) {
      navigate('/');
      // Use a timeout to allow the page to change before scrolling
      setTimeout(() => {
        scrollToSection(item.id);
      }, 100);
    }
    setIsMenuOpen(false);
  };

  // Check if a nav item is active based on path or scroll section
  const isActive = (item) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    if (item.id) {
      return location.pathname === '/' && activeSection === item.id;
    }
    return false;
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick({ path: '/' })}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#2B2B2B] rounded-md flex items-center justify-center font-bold text-white text-sm">
              KN
            </div>
            <span className="text-xl font-semibold text-[#2B2B2B] dark:text-white tracking-tight">
              Kaveen Nimsara
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative px-2 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(item)
                    ? 'text-[#2B2B2B] dark:text-white'
                    : 'text-gray-500 hover:text-[#2B2B2B] dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-[#2B2B2B] dark:bg-white rounded-full"></span>
                )}
              </button>
            ))}
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Social Icons */}
            
            {/* <a href="https://github.com/0KaveenNimsara0" className="text-gray-400 hover:text-[#2B2B2B] dark:hover:text-white transition-colors ml-4"><Github size={20} /></a>
            <a href="http://linkedin.com/in/kaveen-nimsara-5a343b2b8" className="text-gray-400 hover:text-[#2B2B2B] dark:hover:text-white transition-colors"><Linkedin size={20} /></a> */}
          
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#2B2B2B] dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full pointer-events-none'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#2B2B2B] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
