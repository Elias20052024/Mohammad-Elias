import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: 'Bachelor of Information Technology (Honours)',
      major: 'Majoring: Software Engineering',
      institution: 'Universiti Tun Abdul Razak (UNIRAZAK)',
      location: '195A, Jln Tun Razak, Hampshire Park, 50400 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia',
      period: '2024 - Present (2nd Year)',
      description: 'Relevant Coursework: Fundamentals of Programming, Operating Systems, Software Engineering, Requirements Engineering, Information Security, Object-Oriented Programming (OOP)',
      status: 'Current Student'
    },
    {
      degree: 'A-Levels',
      institution: 'Al-Baraa bin Malik Elementary School',
      location: 'Amman, Jordan',
      period: '2017 - 2023',
      description: 'Completed A-Level certification with strong foundation in mathematics and science subjects.',
      status: 'Completed'
    }
  ];

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-blue-400' : 'bg-blue-500'
            }`} />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    darkMode 
                      ? 'bg-gray-900 border-blue-400' 
                      : 'bg-white border-blue-500'
                  }`} />

                  {/* Content */}
                  <div className="ml-16 w-full">
                    <div className={`p-8 rounded-lg shadow-lg ${
                      darkMode 
                        ? 'bg-gray-800 border border-gray-700' 
                        : 'bg-white border border-gray-200'
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className={`text-xl font-bold ${
                            darkMode ? 'text-white' : 'text-gray-800'
                          }`}>
                            {edu.degree}
                          </h3>
                          {edu.major && (
                            <p className={`text-lg font-semibold ${
                              darkMode ? 'text-blue-300' : 'text-blue-600'
                            }`}>
                              {edu.major}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-2 md:mt-0">
                          <FiCalendar className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {edu.period}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className={`text-lg font-semibold ${
                          darkMode ? 'text-blue-300' : 'text-blue-600'
                        }`}>
                          {edu.institution}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <FiMapPin className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                          <span className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      <p className={`mb-4 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {edu.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          edu.status === 'Current Student'
                            ? darkMode 
                              ? 'bg-green-900 text-green-300' 
                              : 'bg-green-100 text-green-800'
                            : darkMode 
                              ? 'bg-blue-900 text-blue-300' 
                              : 'bg-blue-100 text-blue-800'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;