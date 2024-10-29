import React from 'react';
import ParticleBackground from './particles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <ParticleBackground
        color="#4a90e2"
        particleCount={3000}
        particleSize={0.02}
        speed={0.001}
      />
      <div className="relative z-10">
        <header className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-sm z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-blue-400">Your Name</h1>
              <ul className="hidden md:flex space-x-8">
                <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-6 pt-24">
          {children}
        </main>
        <footer className="bg-gray-800/80 backdrop-blur-sm mt-20">
          <div className="container mx-auto px-6 py-8">
            <p className="text-center text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;