import { motion } from 'framer-motion';
import { Code, Database, Cloud } from 'lucide-react';

const Preloader = () => {
  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }
    }
  };

  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const iconContainerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-900/95 z-50 overflow-hidden"
    >
      <div className="relative w-64 h-64">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
        
        {/* Rotating circles */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute inset-0 border-2 rounded-full ${
              index === 0 ? 'border-indigo-500/30' :
              index === 1 ? 'border-blue-500/30' :
              'border-purple-500/30'
            }`}
            style={{
              transform: `scale(${1 + index * 0.1})`,
            }}
          />
        ))}

        {/* Pulsing circles */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={`pulse-${index}`}
            variants={circleVariants}
            animate="animate"
            className="absolute inset-0 flex items-center justify-center"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className={`w-32 h-32 rounded-full ${
              index === 0 ? 'bg-indigo-500/10' :
              index === 1 ? 'bg-blue-500/10' :
              'bg-purple-500/10'
            }`} />
          </motion.div>
        ))}

        {/* Rotating icons */}
        <motion.div
          variants={iconContainerVariants}
          animate="animate"
          className="absolute inset-0"
        >
          {[Code, Database, Cloud].map((Icon, index) => (
            <motion.div
              key={`icon-${index}`}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="absolute"
              style={{
                top: `${50 + 35 * Math.sin(2 * Math.PI * index / 3)}%`,
                left: `${50 + 35 * Math.cos(2 * Math.PI * index / 3)}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Icon 
                className={`w-8 h-8 ${
                  index === 0 ? 'text-indigo-500' :
                  index === 1 ? 'text-blue-500' :
                  'text-purple-500'
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Center logo */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">KH</span>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          variants={textVariants}
          animate="animate"
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white text-lg font-medium mb-2">Loading</span>
          <div className="flex space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`dot-${index}`}
                animate={{
                  y: [-2, 2, -2],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="w-2 h-2 bg-indigo-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Particle effects */}
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-indigo-500 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;