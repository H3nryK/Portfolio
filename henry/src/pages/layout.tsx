import React, { useEffect, useRef, useState } from 'react';
import ParticleBackground from './particles';
import CV from '../assets/kimani.pdf';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

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

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

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
                {isSidebarOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-md z-40 flex">
          <div ref={sidebarRef} className="w-64 bg-gray-900/80 backdrop-blur-md p-6">
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
