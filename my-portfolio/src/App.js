import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorFollower from './components/CursorFollower';
import { portfolioData } from './data/portfolioData';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';

const AppContent = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="App">
      <CursorFollower />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-black border-red-900' : 'bg-gray-100 border-gray-300'} py-8 border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {isLoading ? (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-red-900 to-black">
            <div className="relative">
              <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-red-800 animate-ping"></div>
              <div className="w-20 h-20 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-white text-2xl font-bold tracking-wide animate-pulse">Loading</div>
              <div className="flex justify-center mt-2 space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
              </div>
            </div>
          </div>
        ) : (
          <AppContent />
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
