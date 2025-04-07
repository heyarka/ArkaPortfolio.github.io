import React from 'react';
import { FileSpreadsheet, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen pt-40 pb-20 px-6 md:px-16 flex flex-col items-center justify-center text-center">
      <h1 className="fade-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
        Transforming Raw Data into <br />
        <span className="text-blue-600">Powerful Insights</span>
      </h1>
      
      <p className="fade-in-delay-1 text-xl md:text-2xl text-gray-600 max-w-2xl mb-12">
        A curated portfolio of Excel solutions that drive business decisions through innovative data analysis
      </p>
      
      <div className="fade-in-delay-2 flex flex-col md:flex-row gap-6">
        <Button onClick={scrollToProjects} className="primary-button" size="lg">
          View My Projects
        </Button>
        <Button variant="outline" size="lg" className="outline-button text-teal-400">
          About My Process
        </Button>
      </div>
      
      <div className="fade-in-delay-3 absolute bottom-10 cursor-pointer animate-bounce" onClick={scrollToProjects}>
        <ChevronDown className="h-10 w-10 text-gray-400" />
      </div>
    </section>;
};
export default HeroSection;