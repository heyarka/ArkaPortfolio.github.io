
import React from 'react';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-10 bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold text-lg mb-4">Arka Biswas</h3>
          <p className="text-muted-foreground mb-4">
            Data analyst specializing in Excel, Power BI, and SQL solutions that drive business insights and decision-making.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/heyarka" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="https://heyarka.github.io/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Excel Portfolio</a></li>
            <li><a href="https://heyarka.github.io/#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
            <li><a href="https://heyarka.github.io/#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
            <li><a href="https://heyarka.github.io/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Data Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Excel Dashboard Development</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Power BI Visualizations</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">SQL Database Management</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Data Analysis & Reporting</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tableau Dashboards</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-muted flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Arka Biswas. All rights reserved.
        </p>
        <div className="text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
