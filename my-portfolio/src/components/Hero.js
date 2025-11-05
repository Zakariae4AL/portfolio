import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const iconMap = {
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin
  };

  // Filter social links to only show GitHub and LinkedIn
  const filteredSocialLinks = portfolioData.socialLinks.filter(
    link => link.icon === 'FaGithub' || link.icon === 'FaLinkedin'
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-black relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <img
              src={(function(){
                const src = portfolioData.personalInfo.image;
                if (src.startsWith('http')) return src;
                const trimmed = src.replace(/^\//, '');
                return `${process.env.PUBLIC_URL || ''}/${encodeURIComponent(trimmed)}`;
              })()}
              alt={portfolioData.personalInfo.name}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto object-cover object-top border-4 border-red-600 shadow-2xl"
              loading="lazy"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/logo512.png`; }}
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            {t.hero.greeting} {portfolioData.personalInfo.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-white/90 mb-6"
          >
            {portfolioData.personalInfo.title[language]}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            {portfolioData.personalInfo.bio[language]}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {filteredSocialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={800}
              offset={-80}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
            >
              {t.hero.getInTouch}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;

