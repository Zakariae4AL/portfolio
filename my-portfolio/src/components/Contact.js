import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t.contact.thankYou);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-black via-red-900 to-black' : 'bg-gradient-to-br from-gray-100 via-red-50 to-gray-100'}`}
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
            {t.contact.title}
          </h2>
          <div className={`w-24 h-1 mx-auto ${isDarkMode ? 'bg-white' : 'bg-red-600'}`}></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-white/90' : 'text-gray-700'}`}>
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className={`${isDarkMode ? 'bg-white/10 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} p-6 rounded-2xl border ${isDarkMode ? 'border-white/20' : 'border-gray-200'}`}>
              <div className="flex items-center mb-4">
                <div className={`${isDarkMode ? 'bg-white/20' : 'bg-red-100'} p-3 rounded-full mr-4`}>
                  <FaEnvelope className={`${isDarkMode ? 'text-white' : 'text-red-600'} text-xl`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.contact.email}</h3>
                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className={`transition-colors ${isDarkMode ? 'text-white/90 hover:text-white' : 'text-red-600 hover:text-red-700'}`}
                  >
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-white/10 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} p-6 rounded-2xl border ${isDarkMode ? 'border-white/20' : 'border-gray-200'}`}>
              <div className="flex items-center mb-4">
                <div className={`${isDarkMode ? 'bg-white/20' : 'bg-red-100'} p-3 rounded-full mr-4`}>
                  <FaPhone className={`${isDarkMode ? 'text-white' : 'text-red-600'} text-xl`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.contact.phone}</h3>
                  <a
                    href={`tel:${portfolioData.personalInfo.phone}`}
                    className={`transition-colors ${isDarkMode ? 'text-white/90 hover:text-white' : 'text-red-600 hover:text-red-700'}`}
                  >
                    {portfolioData.personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-white/10 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} p-6 rounded-2xl border ${isDarkMode ? 'border-white/20' : 'border-gray-200'}`}>
              <div className="flex items-center mb-4">
                <div className={`${isDarkMode ? 'bg-white/20' : 'bg-red-100'} p-3 rounded-full mr-4`}>
                  <FaMapMarkerAlt className={`${isDarkMode ? 'text-white' : 'text-red-600'} text-xl`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.contact.location}</h3>
                  <p className={isDarkMode ? 'text-white/90' : 'text-gray-700'}>{portfolioData.personalInfo.location[language]}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`${isDarkMode ? 'bg-white/10 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} p-8 rounded-2xl border ${isDarkMode ? 'border-white/20' : 'border-gray-200'}`}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border focus:outline-none focus:ring-2 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-white/20 border-white/30 text-white placeholder-white/60 focus:ring-white' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500'
                  }`}
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border focus:outline-none focus:ring-2 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-white/20 border-white/30 text-white placeholder-white/60 focus:ring-white' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500'
                  }`}
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                    isDarkMode 
                      ? 'bg-white/20 border-white/30 text-white placeholder-white/60 focus:ring-white' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-red-500'
                  }`}
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:scale-105"
              >
                {t.contact.sendMessage}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

