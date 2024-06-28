import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/H3nryK' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://ke.linkedin.com/in/kimani-henry-19a1b6305' },
    { name: 'Email', icon: Mail, url: 'mailto:kimanihenryn@gmail.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/_.h3nry_k?igsh=Ym01NjV4NjNrZ2cyK'},
    
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Henry Kimani</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Software Engineer</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Henry Kimani. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Built with Typescript and Tailwind CSS
            <ExternalLink size={16} className="ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;