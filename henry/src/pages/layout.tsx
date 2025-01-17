import React, { useState } from 'react';
import ParticleBackground from './particles';
import CV from '../assets/kimani.pdf';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              Kimani Henry
            </span>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-indigo-500 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-indigo-500 transition-colors">
                Skills
              </a>
              <a href="#cta" className="text-gray-300 hover:text-indigo-500 transition-colors">
                CTA
              </a>
              <a href="#projects" className="text-gray-300 hover:text-indigo-500 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-indigo-500 transition-colors">
                Contact
              </a>
              <button
                onClick={handleDownload}
                className="text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md transition-colors"
              >
                Download CV
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-gray-300 hover:text-indigo-500 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-md z-40 flex">
          <div className="w-64 bg-gray-900/80 backdrop-blur-md p-6">
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-indigo-500 focus:outline-none mb-6"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-300 hover:text-indigo-500 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-indigo-500 transition-colors">
                Skills
              </a>
              <a href="#cta" className="text-gray-300 hover:text-indigo-500 transition-colors">
                CTA
              </a>
              <a href="#projects" className="text-gray-300 hover:text-indigo-500 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-indigo-500 transition-colors">
                Contact
              </a>
              <button
                onClick={handleDownload}
                className="text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md transition-colors"
              >
                Download CV
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <div className="container mx-auto pt-20">
          <ParticleBackground />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
