
import React from 'react';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h3 className="font-serif text-2xl mb-6">Arka Biswas</h3>
          <p className="text-gray-600 mb-6">
            Data analyst specializing in Excel, Power BI, and SQL solutions that drive business insights and decision-making.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/heyarka" className="text-gray-400 hover:text-black transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-lg mb-6">Navigation</h3>
          <ul className="space-y-4">
            <li><a href="https://heyarka.github.io/" className="text-gray-600 hover:text-black transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Excel Portfolio</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-black transition-colors">Projects</a></li>
            <li><a href="https://heyarka.github.io/#about" className="text-gray-600 hover:text-black transition-colors">About</a></li>
            <li><a href="https://heyarka.github.io/#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-serif text-lg mb-6">Data Services</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Excel Dashboard Development</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Power BI Visualizations</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">SQL Database Management</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Data Analysis & Reporting</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Tableau Dashboards</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Arka Biswas. All rights reserved.
        </p>
        <div className="text-sm text-gray-400">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
