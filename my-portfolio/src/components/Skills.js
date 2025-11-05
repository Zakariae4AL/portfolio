import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { 
  FaReact, FaJs, FaHtml5, FaAngular, FaGitAlt, FaDocker, FaAws, FaNodeJs, FaPython, FaJava, FaPhp, FaCloud, FaGithub, FaLinux, FaRobot, FaBrain, FaProjectDiagram, FaWind, FaChartBar
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, SiFlutter, SiPostman, SiSelenium, SiJenkins, SiGnubash, SiSpring, SiCplusplus, SiFlask, SiTrello, SiCanva, SiSonarcloud, SiOracle, SiSqlite, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiDotnet 
} from 'react-icons/si';
import { MdApi, MdStorage, MdViewKanban } from 'react-icons/md';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  const iconMap = {
    // Frontend
    'React': FaReact,
    'JavaScript': FaJs,
    'TypeScript': SiTypescript,
    'HTML/CSS': FaHtml5,
    'Tailwind CSS': SiTailwindcss,
    'NativeWind CSS': SiTailwindcss,
    'Next.js': SiNextdotjs,
    'React Native': FaReact,
    'Angular': FaAngular,
    'Redux': SiRedux,
    'Flutter': SiFlutter,
    // Backend
    'Node.js': FaNodeJs,
    'Python': FaPython,
    'REST APIs': MdApi,
    'Spring Boot': SiSpring,
    'Java': FaJava,
    'PHP': FaPhp,
    'JEE': FaJava,
    'C# (.NET)': SiDotnet,
    'C++': SiCplusplus,
    'Flask': SiFlask,
    // Tools & Others
    'Git': FaGitAlt,
    'GitHub': FaGithub,
    'Docker': FaDocker,
    'AWS': FaAws,
    'CI/CD': FaGitAlt,
    'Agile': FaGitAlt,
    'Jenkins': SiJenkins,
    'UML': FaGitAlt,
    'Script bash': SiGnubash,
    'Scripting Shell': SiGnubash,
    'Linux': FaLinux,
    'Kanban': MdViewKanban,
    'Trello': SiTrello,
    'Gantt': FaProjectDiagram,
    'Canva': SiCanva,
    'PowerAMC': FaProjectDiagram,
    'Odoo': FaGitAlt,
    'Postman': SiPostman,
    'Microsoft Azure': FaCloud,
    'Selenium': SiSelenium,
    'Jira': FaGitAlt,
    'JMeter': FaGitAlt,
    'Selenium IDE': SiSelenium,
    'SonarCloud': SiSonarcloud,
    'Aiven': FaCloud,
    // Databases
    'Oracle': SiOracle,
    'SQLite': SiSqlite,
    'Database Administration': MdStorage,
    // Data Engineering & IA
    'Pandas': SiPandas,
    'NumPy': SiNumpy,
    'Scikit-learn': SiScikitlearn,
    'TensorFlow (bases)': SiTensorflow,
    'Collecte et nettoyage des données': FaBrain,
    'Analyse exploratoire': FaBrain,
    'Visualisation (Matplotlib, Power BI)': FaChartBar,
    'RAG': FaBrain,
    'Ollama': FaRobot,
    'Mistral': FaWind,
    'LLaMA 3.2': FaBrain
  };

  return (
    <section
      id="skills"
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
            {t.skills.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border group`}
            >
              <h3 className={`text-2xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t.skills.categories?.[category.category] || category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <div className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-red-900 to-red-800 text-red-200 border border-red-700 hover:from-red-800 hover:to-red-700 hover:shadow-lg hover:shadow-red-900/50' 
                        : 'bg-gradient-to-r from-red-100 to-red-50 text-red-700 border border-red-200 hover:from-red-200 hover:to-red-100 hover:shadow-lg hover:shadow-red-200/50'
                    }`}>
                      {(() => {
                        const IconComponent = iconMap[skill.name];
                        if (IconComponent) {
                          return <IconComponent size={16} />;
                        }
                        if (category.category === 'Databases') {
                          return <MdStorage size={16} />;
                        }
                        return null;
                      })()}
                      <span>{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

