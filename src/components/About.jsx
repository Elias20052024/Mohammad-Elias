import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'JavaScript', level: 100 },
    { name: 'React', level: 50 },
    { name: 'Python', level: 20 },
    { name: 'Java', level: 50 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Git & GitHub', level: 80 },
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <img
                  src="/assets/images/profile photo.jpg"
                  alt="Profile"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-2xl shadow-xl border-4 border-blue-500 hover:scale-105 transition-transform duration-300 object-cover"
                />
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t ${
                  darkMode ? 'from-gray-900' : 'from-white'
                } to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <p className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-blue-300' : 'text-blue-600'
              }`}>
                Software Engineering Student
              </h3>
              <p className={`text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I am a motivated and detail-oriented second-year Bachelor of Information Technology (Honours) 
                student majoring in Software Engineering at Universiti Tun Abdul Razak (UNIRAZAK). I have a 
                growing foundation in programming and software development principles.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I am skilled in problem-solving, requirements understanding, and translating ideas into working code. 
                I am familiar with the Software Development Life Cycle (SDLC) and eager to strengthen my knowledge 
                of Agile practices and testing frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'SDLC Knowledge'].map((trait) => (
                  <span
                    key={trait}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-blue-900 text-blue-200' 
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 max-w-5xl mx-auto"
          >
            <h3 className={`text-4xl font-bold text-center mb-16 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className={`group relative overflow-hidden ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } rounded-xl p-6 shadow-lg border border-transparent hover:border-blue-500 transition-all duration-300`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className={`font-bold text-xl ${
                        darkMode ? 'text-white' : 'text-gray-800'
                      } group-hover:text-blue-500 transition-colors duration-300`}>
                        {skill.name}
                      </span>
                      <span className={`text-lg font-semibold ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-4 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                        className={`h-full rounded-full relative group-hover:scale-105 transition-transform duration-300
                          ${skill.level >= 80 ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' :
                            skill.level >= 50 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                            'bg-gradient-to-r from-blue-400 to-blue-600'}`}
                      >
                        <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                    darkMode ? 'bg-blue-400' : 'bg-blue-600'
                  } rounded-xl blur-2xl`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
