import { motion } from 'framer-motion';
import { IoIosCloudDownload } from "react-icons/io";
import CV from '../assets/kimani.pdf';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95 
    }
  };

  const handleDownload = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Kimani_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      className="py-16" 
      id="cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Interested in Working Together?
        </motion.h2>
        <motion.p 
          className="text-blue-100 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Download my CV to learn more about my experience and skills, 
          or reach out directly to discuss potential opportunities.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4"
          variants={itemVariants}
        >
          <motion.button 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleDownload}
          >
            <IoIosCloudDownload className="w-5 h-5 mr-2" />
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;