import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Certificates = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="certificates"
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
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
            {t.certificates.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${isDarkMode ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'} rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border group cursor-pointer`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={(cert.image && cert.image.trim())
                    ? cert.image
                    : `https://api.microlink.io/?url=${encodeURIComponent(cert.credentialUrl)}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={cert.name}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo512.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <FaCertificate className="text-red-600 text-xl mb-1" />
                  <h3 className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-white'}`}>
                    {cert.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className={`text-xs mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.issuer}
                </p>
                {(cert.date || cert.credentialId) && (
                  <p className={`text-[11px] mb-3 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {cert.date}{cert.date && cert.credentialId ? ' • ' : ''}{cert.credentialId ? `ID: ${cert.credentialId}` : ''}
                  </p>
                )}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-xs transition-colors"
                >
                  {t.certificates.viewCertificate}
                  <FaExternalLinkAlt className="ml-2 text-[10px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

