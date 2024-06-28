import React from 'react';
import Profile from '../assets/images/folio.png'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/H3nryK' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://ke.linkedin.com/in/kimani-henry-19a1b6305' },
    { name: 'Email', icon: Mail, url: 'mailto:kimanihenryn@gmail.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://github.com/H3nryK'},
  ];

  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-white drop-shadow-lg">
              Hi, I'm <span className="text-yellow-300">Henry Kimani</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200 text-gray-100 drop-shadow-md">
              A passionate Software Engineer specializing in creating beautiful and functional applications.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mb-8 animate-fade-in-up animation-delay-400">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-800 hover:text-purple-300 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={28} className="drop-shadow-md" />
                </a>
              ))}
            </div>
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-up animation-delay-600">
              <a
                href="#projects"
                className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors text-lg shadow-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-block bg-purple-500 bg-opacity-20 text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-30 transition-colors text-lg shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-up animation-delay-800">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <img
                src={Profile}
                alt="Henry Kimani"
                className="rounded-full w-full h-full object-cover shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;