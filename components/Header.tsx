import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, EXPERIENCE_DATA } from '../constants';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  ...(EXPERIENCE_DATA.length > 0 ? [{ href: '#experience', label: 'Experience' }] : []),
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'home';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSection = section.id;
          break;
        }
      }
      
      if (window.scrollY < window.innerHeight / 2) {
        currentSection = 'home';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-lg sticky top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-md dark:shadow-dark-border' : ''}`}>
      <nav className="container mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-accent">IS.</a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)} 
              className={`nav-link transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-accent font-semibold nav-link-active' : 'text-light-text/70 dark:text-dark-text/70 hover:text-accent'}`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-light-text/70 dark:text-dark-text/70 hover:text-accent transition-colors duration-300"
          >
            {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-4">
           <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-light-text/70 dark:text-dark-text/70 hover:text-accent transition-colors duration-300"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-text dark:text-dark-text focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border">
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <li key={link.href} className="py-2">
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-accent font-semibold' : 'text-light-text/80 dark:text-dark-text/80 hover:text-accent'}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;