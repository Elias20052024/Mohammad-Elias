import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ReactTyped } from 'react-typed';

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-300'} rounded-full opacity-20`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-5xl md:text-7xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Mohammad Elias
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl md:text-2xl mb-8 ${
              darkMode ? 'text-blue-300' : 'text-blue-600'
            }`}
          >
            <ReactTyped
              strings={[
                'Software Engineering Student',
                'Aspiring Software Developer',
                'IT Support Specialist',
                'Problem Solver'
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Passionate about programming and building user-centric applications. 
            Committed to continuous learning with a strong foundation in software development principles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/assets/Elias_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              View Resume
            </a>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/Mohammad-Elias"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' 
                    : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500'
                }`}
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-elias-dabbas-b1985232b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' 
                    : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500'
                }`}
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full ${
            darkMode ? 'border-gray-400' : 'border-gray-500'
          } flex justify-center`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 ${
              darkMode ? 'bg-gray-400' : 'bg-gray-500'
            } rounded-full mt-2`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;