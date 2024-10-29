import { motion } from 'framer-motion';
import Layout from './layout';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud } from 'lucide-react';
import Folio from '../assets/images/folio.png';

const HomePage = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform built with React, D3.js, and TensorFlow",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "AWS infrastructure as code using Terraform and GitHub Actions",
      tags: ["AWS", "Terraform", "GitHub Actions"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "E-commerce Microservices",
      description: "Scalable microservices architecture using Node.js and Docker",
      tags: ["Node.js", "Docker", "MongoDB"],
      image: "/api/placeholder/600/400"
    }
  ];

  const skills = [
    {
      icon: <Code className="w-8 h-8 mb-4 text-indigo-500" />,
      title: "Frontend Development",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-8 h-8 mb-4 text-indigo-500" />,
      title: "Backend Development",
      items: ["Node.js", "Python", "PostgreSQL", "Redis"]
    },
    {
      icon: <Cloud className="w-8 h-8 mb-4 text-indigo-500" />,
      title: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-between px-4 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Software{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              Engineer
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Crafting innovative solutions with modern technologies. 
            Specialized in full-stack development and cloud architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-indigo-600 text-white rounded-lg hover:bg-indigo-600/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
          <div className="flex gap-6 mt-8">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-white"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block flex-1"
        >
          <img 
            src={Folio}
            alt="Developer" 
            className="rounded-full w-96 h-96 object-cover mx-auto"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg"
              >
                {skill.icon}
                <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:contact@example.com"
                  className="flex items-center text-gray-400 hover:text-white"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  contact@example.com
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  className="flex items-center text-gray-400 hover:text-white"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </motion.a>
              </div>
            </div>
            <div>
              <form className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default HomePage;