import { motion } from 'framer-motion';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiExpress } from 'react-icons/si';
import shoppingListImg from '../assets/Projects images/ShoppingList.png';
import tracalorieImg from '../assets/Projects images/Tracalorie.png';
import pandaStreamImg from '../assets/Projects images/PandaStream.png';
import randomIdeasImg from '../assets/Projects images/randomideas.png';

const getTechStack = (project) => {
  switch(project.name) {
    case "ShoppingList":
      return [
        { name: "JavaScript", icon: DiJavascript1, color: "text-yellow-400" },
        { name: "CSS", icon: DiCss3, color: "text-blue-500" }
      ];
    case "Tracalorie":
      return [
        { name: "JavaScript", icon: DiJavascript1, color: "text-yellow-400" },
        { name: "CSS", icon: DiCss3, color: "text-blue-500" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" }
      ];
    case "Panda Stream":
      return [
        { name: "React", icon: DiReact, color: "text-blue-400" },
        { name: "Node.js", icon: DiNodejs, color: "text-green-500" },
        { name: "MongoDB", icon: DiMongodb, color: "text-green-400" },
        { name: "Express", icon: SiExpress, color: "text-gray-400" }
      ];
    case "Random Ideas":
      return [
        { name: "React", icon: DiReact, color: "text-blue-400" },
        { name: "Node.js", icon: DiNodejs, color: "text-green-500" },
        { name: "MongoDB", icon: DiMongodb, color: "text-green-400" }
      ];
    default:
      return [{ name: project.language, icon: DiJavascript1, color: "text-yellow-400" }];
  }
};

const projects = [
  {
    name: "ShoppingList",
    description: "A vanilla JavaScript shopping list application",
    language: "JavaScript",
    demoLink: "https://shoppinglist2025.netlify.app/",
    image: shoppingListImg
  },
  {
    name: "Tracalorie",
    description: "Calorie tracking application",
    language: "JavaScript",
    demoLink: "https://tracaloriespro.netlify.app/",
    image: tracalorieImg
  },
  {
    name: "Panda Stream",
    description: "Streaming application",
    language: "JavaScript",
    demoLink: "https://pandastream.netlify.app/",
    image: pandaStreamImg
  },
  {
    name: "Random Ideas",
    description: "Random ideas generator application",
    language: "JavaScript",
    demoLink: "https://5000-i657i4n44dbviyioow2nq-8d3c0b74.manus.computer/",
    image: randomIdeasImg
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
                className={`group relative overflow-hidden rounded-xl transition-all duration-500 ${
                  darkMode 
                    ? 'bg-gray-900 hover:bg-gray-800' 
                    : 'bg-white hover:shadow-2xl'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${
                    darkMode 
                      ? 'from-transparent via-gray-900/20 to-gray-900' 
                      : 'from-transparent via-gray-900/10 to-gray-900/80'
                  }`}></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {getTechStack(project).map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className={`flex items-center gap-1 px-3 py-1 rounded-full bg-opacity-20 backdrop-blur-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          } transition-all duration-300 hover:scale-105`}
                        >
                          <tech.icon className={`${tech.color} text-lg`} />
                          <span className="text-xs font-medium text-white">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;