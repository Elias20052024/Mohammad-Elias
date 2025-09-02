import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiGlobe, 
  FiSmartphone, 
  FiTool, 
  FiShield 
} from 'react-icons/fi';

const Skills = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FiCode size={24} />,
      skills: ['JavaScript', 'Python (Basic)', 'Java', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Development',
      icon: <FiGlobe size={24} />,
      skills: ['React', 'Modern JavaScript', 'Responsive Design', 'Redux', 'Hooks', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Development Tools',
      icon: <FiTool size={24} />,
      skills: ['Visual Studio Code', 'NetBeans IDE', 'Git & GitHub', 'Command Line Interface', 'Microsoft Office Suite'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'IT Support & Systems',
      icon: <FiDatabase size={24} />,
      skills: ['IT Support & Troubleshooting', 'Operating Systems', 'System Administration', 'Computer Hardware & Software'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Security & Networking',
      icon: <FiShield size={24} />,
      skills: ['Information Security', 'IT Security Defense', 'Computer Networking', 'Social Engineering Awareness'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Software Engineering',
      icon: <FiSmartphone size={24} />,
      skills: ['SDLC', 'Agile & Scrum', 'Requirements Engineering', 'Unit Testing', 'Integration Testing', 'UAT'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className={`group p-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-900 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                        darkMode 
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Languages
            </h2>
            <div className="flex justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-8 py-6 rounded-2xl backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                    : 'bg-gray-50 hover:bg-gray-100/80'
                } transition-all duration-300`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  English
                </h3>
                <p className={`text-lg ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Fluent
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-8 py-6 rounded-2xl backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                    : 'bg-gray-50 hover:bg-gray-100/80'
                } transition-all duration-300`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Arabic
                </h3>
                <p className={`text-lg ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Native
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;