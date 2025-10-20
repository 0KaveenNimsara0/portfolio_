import React, { useState, useContext } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';

const Header = ({ navigation, scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
    } 
    else if (item.id && location.pathname === '/') {
      scrollToSection(item.id);
    }
    else if (item.id) {
      navigate('/');
      setTimeout(() => {
        scrollToSection(item.id);
      }, 100);
    }
    setIsMenuOpen(false);
  };

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
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick({ path: '/' })}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center font-bold text-white dark:text-black text-base">
              KN
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-black dark:text-white">
                Kaveen Nimsara
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative px-1 py-2 text-base font-medium transition-all duration-300 ${
                  isActive(item)
                    ? 'text-black dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Slide-out Menu - Solid White/Dark Background */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center font-bold text-white dark:text-black text-lg">
                  KN
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-black dark:text-white">
                    Kaveen Nimsara
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Full Stack Developer
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-black dark:text-white" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 px-4 py-8 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-6 py-4 text-lg font-medium rounded-lg transition-all duration-200 ${
                    isActive(item)
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                      : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Theme Toggle in Menu */}
            <div className="p-6 border-t border-gray-200 dark:bg-gray-900 bg-white dark:border-gray-800">
              <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="text-base font-medium text-black dark:text-white">
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-full bg-white dark:bg-gray-700 text-black dark:text-white shadow hover:scale-105 transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;