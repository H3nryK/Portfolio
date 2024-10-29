import { motion } from 'framer-motion';
import Layout from './layout';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Software{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              Engineer
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building elegant solutions to complex problems with cutting-edge technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default HomePage;