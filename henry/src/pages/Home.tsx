import { motion } from 'framer-motion';
import Layout from './layout';

const HomePage = () => {
  return (
    <Layout>
      <section id="home" className="min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-blue-400 mb-6">
            Software Engineer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building elegant solutions to complex problems with modern technologies
          </p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#projects" 
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-500/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards go here */}
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">Get In Touch</h2>
        <div className="max-w-xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;