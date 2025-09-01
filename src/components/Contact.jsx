import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { useState, useRef, useEffect } from 'react';

// Initialize EmailJS
emailjs.init('10RKq3hOGrCU1YRgy');

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_4c8ccnd',
      'template_v6n0tjk',
      form.current,
      '10RKq3hOGrCU1YRgy'
    )
      .then((result) => {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully!' 
        });
        form.current.reset();
      })
      .catch((error) => {
        setStatus({ 
          type: 'error', 
          message: 'Failed to send message. Please try again.' 
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-blue-600' : 'bg-blue-200'
        }`} />
        <div className={`absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-purple-600' : 'bg-purple-200'
        }`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600`}>
              Get in Touch
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's connect and create something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-2xl backdrop-blur-sm ${
                darkMode 
                  ? 'bg-gray-900/80 border border-gray-700' 
                  : 'bg-white/80 border border-gray-200 shadow-xl'
              }`}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {status.message}
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } border focus:outline-none`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } border focus:outline-none`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } border focus:outline-none`}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } border focus:outline-none resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
              {[
                {
                  icon: <FiMail className={`text-2xl ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />, 
                  title: 'Email', 
                  content: 'meprogramer2024@gmail.com',
                  link: 'mailto:meprogramer2024@gmail.com'
                },
              {
                icon: <FiMessageSquare className={`text-2xl ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />, 
                title: 'WhatsApp', 
                content: '+6011-12253151',
                link: 'https://wa.me/601112253151'
              },
              {
                icon: <FiMapPin className={`text-2xl ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />, 
                title: 'Address', 
                content: 'Petaling Jaya, Selangor, Malaysia',
                link: 'https://www.google.com/maps?q=Petaling+Jaya,+Selangor,+Malaysia'
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`block p-8 rounded-2xl shadow-lg transition-all duration-300 group backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-gray-900/80 hover:bg-gray-800/80 border border-gray-700 hover:border-blue-500' 
                    : 'bg-white/80 hover:bg-white border border-gray-200 hover:border-blue-500 hover:shadow-2xl'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <span className={`p-4 rounded-full ${
                    darkMode 
                      ? 'bg-gray-800 group-hover:bg-blue-500/20' 
                      : 'bg-gray-100 group-hover:bg-blue-50'
                    } transition-colors duration-300`}
                  >
                    {item.icon}
                  </span>
                  <h3 className={`text-lg font-bold group-hover:text-blue-500 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm group-hover:text-blue-400 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.content}
                  </p>
                  <span className={`inline-flex items-center text-sm font-semibold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Connect →
                  </span>
                </div>
              </motion.a>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;