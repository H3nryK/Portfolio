import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, ChevronDown, Instagram } from 'lucide-react';
import Folio from '../assets/images/folio.png';

export default function HeroSection() {
    const [, setIsImageLoaded] = useState(false);
    const { scrollY } = useScroll();
    
    // Parallax effect for hero section
    const heroImageY = useTransform(scrollY, [0, 500], [0, 100]);
    const heroTextY = useTransform(scrollY, [0, 500], [0, 50]);
    
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
    )
}