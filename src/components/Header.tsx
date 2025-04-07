
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Home } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center bg-background border-b shadow-sm">
      <div className="font-bold text-xl text-primary">
        <a href="https://heyarka.github.io/">Arka Biswas</a>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-6 mr-6">
          {!isMainPage && (
            <Button variant="ghost" size="sm" className="flex items-center gap-2" asChild>
              <Link to="/">
                <Home className="h-4 w-4" />
                Return to Main Page
              </Link>
            </Button>
          )}
          {isMainPage && (
            <>
              <a href="https://heyarka.github.io/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-primary font-medium">Excel Portfolio</a>
              <a href="https://heyarka.github.io/#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="https://heyarka.github.io/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </>
          )}
        </nav>
        <div className="flex items-center space-x-2">
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
