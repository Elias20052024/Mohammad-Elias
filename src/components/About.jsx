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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className={`text-2xl font-semibold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-3 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;