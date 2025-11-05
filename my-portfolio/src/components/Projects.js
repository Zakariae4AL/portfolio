import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  const filteredProjects = portfolioData.projects;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className={`py-20 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}
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
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-8"></div>

          {/* Filter removed as requested */}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border overflow-hidden cursor-pointer
                ${isDarkMode
                  ? 'bg-gradient-to-br from-black via-gray-900 to-black border-gray-800'
                  : 'bg-gradient-to-br from-white via-gray-50 to-white border-gray-200'}
              `}
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-5">
                <h3 className={`text-xl font-semibold mb-2 leading-snug ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                        isDarkMode 
                          ? 'bg-red-900/50 text-red-300 border-red-800' 
                          : 'bg-red-100 text-red-700 border-red-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center transition-colors font-semibold ${
                      isDarkMode ? 'text-gray-300 hover:text-red-600' : 'text-gray-700 hover:text-red-600'
                    }`}
                  >
                    <FaGithub className="mr-2" />
                    {t.projects.code}
                  </a>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Click for details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-2xl w-full rounded-2xl shadow-2xl border ${isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`px-3 py-1 rounded-md text-sm ${isDarkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    Close
                  </button>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} whitespace-pre-line mb-2`}>
                  {selectedProject.details || selectedProject.description}
                </p>
                {selectedProject.note && (
                  <p className={`text-xs font-medium ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'} mb-4`}>
                    {selectedProject.note}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className={`px-2 py-0.5 rounded-full text-xs font-medium border ${isDarkMode ? 'bg-red-900/50 text-red-300 border-red-800' : 'bg-red-100 text-red-700 border-red-200'}`}>{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-red-600 text-white text-sm font-semibold hover:bg-red-700">{t.projects.code}</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

