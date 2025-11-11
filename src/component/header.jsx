import React, { useState, useContext, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ navigation, scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Add a state to track scroll position for header shadow
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);

  // Handle header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to apply theme to a parent element (like <html>)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove(theme === 'dark' ? 'light' : 'dark');
      root.classList.add(theme);
      // Save theme to local storage
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80  dark:bg-gray-950/80 shadow-sm border-b border-gray-200/80 dark:border-gray-800/80`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* UPDATED: Logo with accent color */}
          <div 
            onClick={() => handleNavClick({ path: '/' })}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
          >
            {/* UPDATED: Swapped div for img tag with light/dark mode support */}
            <img
              src={theme === 'dark' ? 'logo112.png' : 'logo113.png'}
              alt="Kaveen Nimsara Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => e.currentTarget.src = 'https://placehold.co/150x50/000000/FFFFFF?text=KAVEEN&font=inter'}
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Kaveen Nimsara
              </span>
            </div>
          </div>
          
          {/* UPDATED: Desktop Navigation (Cleaner active state) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative px-1 py-2 text-base transition-all duration-300 ${
                  isActive(item)
                    ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                    : 'font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.name}
                {/* Optional: A more subtle active indicator */}
                {isActive(item) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* UPDATED: Desktop Theme Toggle (Consistent rounded-lg) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* UPDATED: Mobile Controls (Consistent rounded-lg) */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* UPDATED: Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Slide-out Menu (Using new dark color) */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/80 dark:bg-gray-950/90 shadow-2xl border-l border-gray-200/80 dark:border-gray-800/80 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header (Logo update, close button fix) */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                {/* UPDATED: Mobile Menu Logo */}
                <img
                  src={theme === 'dark' ? 'logo112.png' : 'logo113.png'}
                  alt="Kaveen Nimsara Logo"
                  className="h-10 w-auto object-contain"
                  onError={(e) => e.currentTarget.src = 'https://placehold.co/150x50/000000/FFFFFF?text=KAVEEN&font=inter'}
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-800 dark:text-gray-200" />
              </button>
            </div>

            {/* UPDATED: Navigation Items (Softer active state) */}
            <div className="flex-1 px-4 py-8 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-6 py-4 text-lg rounded-lg transition-all duration-200 ${
                    isActive(item)
                      ? 'bg-indigo-50 dark:bg-gray-900/70 text-indigo-600 dark:text-indigo-400/90 font-semibold'
                      : 'text-gray-800/90 dark:text-gray-200/90 hover:bg-gray-100 dark:hover:bg-gray-800/90 font-medium'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Theme Toggle in Menu */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between p-4 bg-gray-100/90 dark:bg-gray-900/70 rounded-lg">
                <span className="text-base font-medium text-gray-800 dark:text-gray-200">
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow hover:scale-105 transition-all duration-200"
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