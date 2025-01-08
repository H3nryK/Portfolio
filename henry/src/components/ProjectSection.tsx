import Cow from '../assets/images/cow.jpeg';
import MD from '../assets/images/md.jpg';
import Campus from '../assets/images/campus.webp';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectSection() {  
    const projects = [
      {
        title: "Campus-Connect",
        description: "Mobile application to streamline the student & campus interaction.",
        tags: ["Typescript", "React Native", "Ruby"],
        image: Campus
      },
      {
        title: "Mascular-Dystrophy",
        description: "A machine learning-based predictive model for individualized exercise response in muscular dystrophy.",
        tags: ["pandas", "scikit-learn", "numpy", "python"],
        image: MD
      },
      {
        title: "Dairy Farm Management System",
        description: "Backend canister written in Rust for managing dairy farming operations, including adding cows, recording milk production, and retrieving cow data. The canister is deployed on the Internet Computer (IC) blockchain.",
        tags: ["Rust", "Shell", "Blockchain", "ICP"],
        image: Cow
      }
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
                Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                    >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative overflow-hidden"
                    >
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    </motion.div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                            <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * idx }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm"
                            >
                            {tag}
                            </motion.span>
                        ))}
                        </div>
                        <motion.a
                        href="https://github.com/h3nryk"
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 group"
                        >
                        View Project 
                        <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ExternalLink className="ml-2 w-4 h-4 group-hover:stroke-2" />
                        </motion.span>
                        </motion.a>
                    </div>
                    </motion.div>
                ))}
                </div>
            </motion.div>
        </section>
    );
}
