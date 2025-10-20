import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Sidebar from './component/sidebar';
import Portfolio from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Contact from './pages/contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Navigation scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <Router>
      <Header navigation={navigation} activeSection={activeSection} scrollToSection={scrollToSection} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Portfolio activeSection={activeSection} scrollToSection={scrollToSection} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        {/* Additional routes can be added here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
