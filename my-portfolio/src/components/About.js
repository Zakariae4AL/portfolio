import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className={`relative overflow-hidden ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} p-8 rounded-2xl shadow-lg border`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute inset-0 opacity-5 animate-gradient"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(-45deg, #dc2626, #ef4444, #dc2626, #b91c1c)' 
                    : 'linear-gradient(-45deg, #fee2e2, #fef2f2, #fee2e2, #fecaca)',
                  backgroundSize: '400% 400%'
                }}
              ></div>
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {portfolioData.personalInfo.name}
                </h3>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {portfolioData.personalInfo.bio[language]}
                </p>
                <div className="space-y-3">
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="font-semibold mr-2">{t.about.location}</span>
                    <span>{portfolioData.personalInfo.location[language]}</span>
                  </div>
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="font-semibold mr-2">{t.about.email}</span>
                    <a
                      href={`mailto:${portfolioData.personalInfo.email}`}
                      className="text-red-600 hover:text-red-500 hover:underline"
                    >
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>
                  <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="font-semibold mr-2">{t.about.phone}</span>
                    <span>{portfolioData.personalInfo.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              className={`relative overflow-hidden ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} p-6 rounded-2xl shadow-lg border`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="absolute inset-0 opacity-5 animate-gradient"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(-45deg, #dc2626, #ef4444, #dc2626, #b91c1c)' 
                    : 'linear-gradient(-45deg, #fee2e2, #fef2f2, #fee2e2, #fecaca)',
                  backgroundSize: '400% 400%'
                }}
              ></div>
              <div className="relative z-10">
                <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.about.experience}</h4>
                <div className="space-y-4">
                  {portfolioData.experience.map((exp, index) => (
                    <motion.div 
                      key={index} 
                      className="border-l-4 border-red-600 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h5 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.position[language]}</h5>
                      <p className="text-red-600 text-sm">
                        <a href={exp.companyUrl} className="hover:underline" target="_blank" rel="noreferrer">
                          {exp.companyName}
                        </a>
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={`relative overflow-hidden ${isDarkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} p-6 rounded-2xl shadow-lg border`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="absolute inset-0 opacity-5 animate-gradient"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(-45deg, #dc2626, #ef4444, #dc2626, #b91c1c)' 
                    : 'linear-gradient(-45deg, #fee2e2, #fef2f2, #fee2e2, #fecaca)',
                  backgroundSize: '400% 400%'
                }}
              ></div>
              <div className="relative z-10">
                <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.about.education}</h4>
                {portfolioData.education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="border-l-4 border-red-600 pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h5 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree[language]}</h5>
                    <p className="text-red-600 text-sm">{edu.school}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;

