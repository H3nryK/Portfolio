import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InstitutionsSection = () => {
  const logos = [
    { src: 'https://jetbrainscollege.com/static/assets/images/logo.webp', name: 'Jetbrains College' },
    { src: 'https://guild-code.com/static/assets/media/light.png', name: 'Guild-Code' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Machakos_University_Logo.png/285px-Machakos_University_Logo.png', name: 'Machakos University' },
    { src: 'https://olpmonitor.com/static/images/logo.webp', name: 'Northum Tech' },
    { src: 'https://icphubkenya.io/images/brand3.png', name: 'ICP HUB Kenya' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      className="py-16"
      id="institutions"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Institutions & Companies I've Worked With
        </motion.h2>
        <Slider {...sliderSettings}>
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="p-4 flex justify-center"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-16 w-auto object-contain"
                style={{ background: 'transparent' }} // Ensure no background
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default InstitutionsSection;
