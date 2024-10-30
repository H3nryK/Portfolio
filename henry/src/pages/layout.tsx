import React from 'react';
import ParticleBackground from './particles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              Kimani Henry
            </span>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#projects" className="text-gray-300 hover:text-indigo-500 transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-gray-300 hover:text-indigo-500 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-6 pt-20">
          <ParticleBackground />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;