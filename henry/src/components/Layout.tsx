import React from 'react'; // Import your Navbar component
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 text-gray-800 py-8">
        <div className="container mx-auto px-4">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;