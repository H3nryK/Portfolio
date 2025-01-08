import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "#" }
  ];

  return (
    <footer className="text-slate-400">
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