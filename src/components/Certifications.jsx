import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';

const Certifications = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google (Coursera)',
      date: '2024',
      description: 'Comprehensive IT support certification covering technical support fundamentals, computer networking, operating systems, system administration, and IT security.',
      modules: [
        'Technical Support Fundamentals',
        'The Bits and Bytes of Computer Networking',
        'Operating Systems and You: Becoming a Power User',
        'System Administration and IT Infrastructure Services',
        'IT Security: Defense against the Digital Dark Arts'
      ],
      status: 'Completed'
    },
    {
      title: 'Computer Hardware and Software',
      issuer: 'University of California, Irvine (Coursera)',
      date: '2024',
      description: 'Authorized certification covering computer hardware components, software systems, and their interactions.',
      status: 'Completed'
    },
    {
      title: 'Introduction to Java',
      issuer: 'LearnQuest (Coursera)',
      date: '2024',
      description: 'Fundamental Java programming concepts, object-oriented programming principles, and software development practices.',
      status: 'Completed'
    },
    {
      title: 'Complete React Developer (with Redux, Hooks, GraphQL)',
      issuer: 'Udemy',
      date: '2024',
      description: 'Comprehensive React development course covering modern React patterns, state management with Redux, hooks, and GraphQL integration.',
      status: 'In Progress'
    },
    {
      title: 'Modern JavaScript From The Beginning 2.0',
      issuer: 'Udemy',
      date: '2025',
      description: 'Advanced JavaScript concepts, ES6+ features, DOM manipulation, and modern development practices.',
      status: 'Completed'
    },
    {
      title: 'Social Engineering & Phishing in the Age of AI',
      issuer: 'Webinar Participation',
      date: '2025',
      description: 'Cybersecurity awareness training focusing on social engineering tactics and phishing prevention in AI-enhanced environments.',
      status: 'Completed'
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
            Certifications & Training
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group p-6 rounded-xl shadow-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-900 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <FiAward className="text-white" size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FiCalendar className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Completed'
                      ? darkMode 
                        ? 'bg-green-900 text-green-300' 
                        : 'bg-green-100 text-green-800'
                      : darkMode 
                        ? 'bg-yellow-900 text-yellow-300' 
                        : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {cert.status}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className={`text-lg font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {cert.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${
                    darkMode ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    {cert.issuer}
                  </p>
                  <p className={`text-sm mb-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {cert.description}
                  </p>
                  
                  {/* Modules for Google IT Support */}
                  {cert.modules && (
                    <div className="mt-3">
                      <h4 className={`text-sm font-semibold mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Course Modules:
                      </h4>
                      <ul className="space-y-1">
                        {cert.modules.map((module, moduleIndex) => (
                          <li key={moduleIndex} className={`text-xs ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            • {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '6+', label: 'Certifications' },
              { number: '3+', label: 'Platforms' },
              { number: '100+', label: 'Hours of Learning' },
              { number: '2024', label: 'Latest Cert' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className={`text-3xl md:text-4xl font-bold mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {stat.number}
                </motion.div>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;