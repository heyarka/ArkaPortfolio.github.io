
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Home } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <header className="py-6 px-6 md:px-16 flex justify-between items-center fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="font-serif text-xl">
        <Link to="/" className="hover:opacity-70 transition-opacity">Arka Biswas</Link>
      </div>
      <div className="flex items-center space-x-8">
        <nav className="hidden md:flex space-x-8">
          {!isMainPage && (
            <Button variant="ghost" size="sm" className="hover:bg-transparent hover:text-primary" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Return to Main Page
              </Link>
            </Button>
          )}
          {isMainPage && (
            <>
              <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
              <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Excel Portfolio</a>
              <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
            </>
          )}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
            <Download className="h-4 w-4" />
            Resume
          </Button>
          <Button size="sm" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="hidden md:inline">Contact</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
