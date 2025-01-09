import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Folio from '../assets/images/folio.webp';

export default function HeroSection() {
  const [, setIsImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Adjusted parallax effect based on device
  const heroImageY = useTransform(scrollY, [0, 500], [0, isMobile ? 50 : 100]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, isMobile ? 25 : 50]);

  // Enhanced floating animation
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

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4" id='about'>
      <div className="container mx-auto px-4 py-2 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content */}
          <motion.div
            style={{ y: heroTextY }}
            className="w-full md:w-1/2 z-10 mt-16 md:mt-0 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Name tag with gradient border */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10"
              >
                <span className="text-sm md:text-base text-indigo-400 tracking-wider uppercase font-medium">
                  Kimani Henry
                </span>
              </motion.div>

              {/* Animated title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Software{' '}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-transparent bg-clip-text"
                >
                  Engineer
                </motion.span>
              </h1>

              {/* Description with animated gradient underline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="relative mb-8"
              >
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
                  Crafting innovative solutions with modern technologies.
                  Specialized in Android, Web, Blockchain & AI development.
                </p>
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.2 }}
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg relative overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-indigo-600 text-white rounded-lg hover:bg-indigo-600/10 transition-colors text-center"
                >
                  Contact Me
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex gap-6 mt-8 justify-center md:justify-start"
              >
                {[
                  { Icon: FaGithub, href: "https://github.com/h3nryk" },
                  { Icon: FaLinkedinIn, href: "https://linkedin.com/in/kimani-henry" },
                  { Icon: FaInstagram, href: "https://www.instagram.com/_.h3nry_k/" },
                  { Icon: FaWhatsapp, href: "https://wa.me/+254705618424"},
                  { Icon: FaSquareXTwitter, href: "https://x.com/H3nryKim"},
                  { Icon: SiGmail, href: "mailto:kimanihenryn@gmail.com"}
                ].map(({ Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ y: -3 }}
                    className="text-gray-400 hover:text-indigo-400 transition-colors relative group"
                  >
                    <Icon size={24} />
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                      initial={false}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            style={{ y: heroImageY }}
            className="w-full md:w-1/2 relative h-[400px] md:h-[600px]"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={floatingAnimation}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Enhanced glowing effect */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.6 }}
                  transition={{ duration: 1 }}
                  className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-indigo-500/30 to-blue-500/30 blur-3xl"
                />

                {/* Rotating circles with gradient */}
                {[20, 15].map((duration, index) => (
                  <motion.div
                    key={duration}
                    animate={{ rotate: 360 }}
                    transition={{ duration, repeat: Infinity, ease: "linear" }}
                    className={`absolute w-[${320 + index * 30}px] h-[${320 + index * 30}px] md:w-[${420 + index * 30}px] md:h-[${420 + index * 30}px] rounded-full border border-gradient-to-r from-indigo-500/20 to-blue-500/20`}
                  />
                ))}

                {/* Profile image container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden"
                >
                  <img
                    src={Folio}
                    alt="Developer"
                    className="w-full h-full object-cover"
                    onLoad={() => setIsImageLoaded(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-indigo-900/40" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
