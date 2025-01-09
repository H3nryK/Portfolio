import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, label: "GitHub", href: "https://github.com/h3nryk" },
    { icon: <FaLinkedinIn className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/kimani-henry" },
    { icon: <FaSquareXTwitter className="w-5 h-5" />, label: "Twitter", href: "https://x.com/H3nryKim" },
    { icon: <SiGmail className="w-5 h-5" />, label: "Email", href: "mailto:kimanihenryn@gmail.com" },
    { icon: <FaInstagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/_.h3nry_k/" },
    { icon: <FaWhatsapp className="w-5 h-5" />, label: "Whatsapp", href: "https://wa.me/+254705618424" }
  ];

  return (
    <footer className="text-slate-400 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Me</h3>
            <p className="text-slate-400">
                Crafting innovative solutions with modern technologies.
                Specialized in Android, Web, Blockchain & AI development.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Projects", "CTA", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>📍 Limuru, kenya</li>
              <li>📧 kimanihenryn@gmail.com</li>
              <li>📱 +254705618424</li>
            </ul>
          </div>
        </div>
        
        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm">
            © {currentYear} Kimani Henry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;