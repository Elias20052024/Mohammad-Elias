import { motion } from 'framer-motion';

const projects = [
  {
    name: "ShppingList",
    description: "A vanilla JavaScript shopping list application",
    language: "JavaScript",
    demoLink: "https://example.com/shoppinglist"
  },
  {
    name: "tracalorie-project",
    description: "Calorie tracking application",
    language: "JavaScript",
    demoLink: "https://tracaloriespro.netlify.app/"
  },
  {
    name: "Panda-Stream-project",
    description: "Streaming application",
    language: "JavaScript",
    demoLink: "https://pandastream.netlify.app/"
  },
  {
    name: "Randomideas-App",
    description: "Random ideas generator application",
    language: "JavaScript",
    demoLink: "https://5000-i657i4n44dbviyioow2nq-8d3c0b74.manus.computer/"
  }
];

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-900 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className={`text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.name}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <p className={`text-xs ${
                  darkMode ? 'text-blue-300' : 'text-blue-600'
                }`}>
                  Language: {project.language}
                </p>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Live Demo
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;