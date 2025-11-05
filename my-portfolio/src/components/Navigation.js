import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, to: 'home' },
    { name: t.nav.about, to: 'about' },
    { name: t.nav.skills, to: 'skills' },
    { name: t.nav.certificates, to: 'certificates' },
    { name: t.nav.projects, to: 'projects' },
    { name: t.nav.contact, to: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode 
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-red-600'
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-red-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg md:text-xl font-semibold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent cursor-pointer"
            >
              {t.brand}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="text-red-600"
                  className={`cursor-pointer transition-colors duration-200 font-medium ${
                    isScrolled 
                      ? isDarkMode ? 'text-gray-300 hover:text-red-600' : 'text-gray-700 hover:text-red-600'
                      : 'text-white hover:text-red-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className={`px-3 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${
                  isScrolled 
                    ? isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    : isDarkMode ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                aria-label="Toggle language"
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    : isDarkMode ? 'bg-white/20 text-yellow-400 hover:bg-white/30' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${
                isScrolled 
                  ? isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
                  : isDarkMode ? 'bg-white/20 text-white' : 'bg-white/20 text-white'
              }`}
              aria-label="Toggle language"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'
                  : isDarkMode ? 'bg-white/20 text-yellow-400' : 'bg-white/20 text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled 
                  ? isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={`md:hidden backdrop-blur-md shadow-lg border-b ${isDarkMode ? 'bg-black/95 border-red-600' : 'bg-white/95 border-gray-200'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors cursor-pointer ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-red-600 hover:bg-gray-900' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

