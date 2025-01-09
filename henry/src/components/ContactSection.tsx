import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                  <p className="text-gray-400 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-colors"
                  >
                    <motion.a
                      href="mailto:kimanihenryn@gmail.com"
                      className="flex items-center text-gray-400 hover:text-white group"
                    >
                      <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="ml-4">kimanihenryn@gmail.com</span>
                    </motion.a>
                  </motion.div>
  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-colors"
                  >
                    <motion.a
                      href="https://linkedin.com/in/kimani-henry"
                      className="flex items-center text-gray-400 hover:text-white group"
                    >
                      <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <span className="ml-4">LinkedIn Profile</span>
                    </motion.a>
                  </motion.div>
                </div>
  
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-indigo-500/10 rounded-lg border border-indigo-500/20"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">Current Availability</h4>
                  <p className="text-gray-400">
                    I'm currently available for freelance work and full-time opportunities. If you have a project that needs coding, don't hesitate to contact me.
                  </p>
                </motion.div>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50">
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
                      />
                      <div className="absolute inset-0 border border-indigo-500/0 rounded-lg pointer-events-none transition-opacity peer-focus:border-indigo-500/50" />
                    </motion.div>
  
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
                      />
                    </motion.div>
  
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
                      />
                    </motion.div>
  
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative"
                    >
                      <textarea
                        placeholder="Message"
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 text-white resize-none transition-colors"
                      ></textarea>
                    </motion.div>
                  </div>
  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    <span>Send Message</span>
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </section>
    );
}