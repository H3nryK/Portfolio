import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from './layout';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, ChevronDown, Instagram } from 'lucide-react';
import Folio from '../assets/images/folio.png';
import Cow from '../assets/images/cow.jpeg';
import MD from '../assets/images/md.jpg';
import Campus from '../assets/images/campus.webp';

const HomePage = () => {
  const [, setIsImageLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for hero section
  const heroImageY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 50]);
  
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

  const skills = [
    {
      icon: <Code className="w-8 h-8 mb-4 text-indigo-500" />,
      title: "Frontend Development",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-8 h-8 mb-4 text-indigo-500" />,
      title: "Backend Development",
      items: ["Node.js", "Python", "PostgreSQL", "MySQL"]
    },
    {
      icon: <Cloud className="w-8 h-8 mb-4 text-indigo-500" />,
      title: "Cloud & DevOps",
      items: ["Firebase", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  // Floating animation for the hero image
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Scroll prompt animation
  const scrollPromptAnimation = {
    initial: { y: 0, opacity: 1 },
    animate: {
      y: [0, 10, 0],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 overflow-hidden">
        <motion.div
          style={{ y: heroTextY }}
          className="flex-1 z-10 mt-20 lg:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative inline-block mb-6"
            >
              <span className="text-sm text-indigo-400 tracking-wider uppercase">Kimani Henry</span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-0.5 bg-indigo-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              Software{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text"
              >
                Engineer
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl"
            >
              Crafting innovative solutions with modern technologies. 
              Specialized in Android, Web, Web3 & AI development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg transition-colors text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-indigo-600 text-white rounded-lg transition-colors text-center"
              >
                Contact Me
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex gap-6 mt-8"
            >
              <motion.a
                href="https://github.com/h3nryk"
                whileHover={{ y: -3, color: "#4F46E5" }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kimani-henry"
                whileHover={{ y: -3, color: "#4F46E5" }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/_.h3nry_k/"
                whileHover={{ y: -3, color: "#4F46E5" }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: heroImageY }}
          className="flex-1 relative w-full lg:w-auto h-[400px] lg:h-[600px] mt-12 lg:mt-0"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Glowing circle behind image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-indigo-500/20 blur-3xl"
              />
              
              {/* Rotating circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-indigo-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-indigo-500/20"
              />
              
              {/* Profile image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden"
              >
                <img
                  src={Folio}
                  alt="Developer"
                  className="w-full h-full object-cover"
                  onLoad={() => setIsImageLoaded(true)}
                />
                
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          variants={scrollPromptAnimation}
          initial="initial"
          animate="animate"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={20} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-colors"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      className="text-gray-400 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                      {item}
                    </motion.li>
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
    </Layout>
  );
};

export default HomePage;