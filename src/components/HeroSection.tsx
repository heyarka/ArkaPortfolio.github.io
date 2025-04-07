
import React from 'react';
import { FileSpreadsheet, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-40 pb-20 px-6 md:px-16 flex flex-col items-center justify-center text-center">
      <div className="wave-bg"></div>
      <div className="grain"></div>
      
      <h1 className="fade-in oaksun-large-text max-w-6xl mb-6 font-serif">
        Transforming raw data into powerful insights
      </h1>
      
      <p className="fade-in-delay-1 text-xl md:text-2xl text-gray-600 max-w-2xl mb-12">
        A curated portfolio of Excel solutions that drive business decisions through innovative data analysis
      </p>
      
      <div className="fade-in-delay-2 flex flex-col md:flex-row gap-6">
        <Button 
          onClick={scrollToProjects}
          className="rounded-full px-8 py-6 bg-black text-white hover:bg-gray-800 transition-colors"
          size="lg"
        >
          View My Projects
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full px-8 py-6 border-black hover:bg-black hover:text-white transition-colors"
        >
          About My Process
        </Button>
      </div>
      
      <div 
        className="fade-in-delay-3 absolute bottom-10 cursor-pointer animate-bounce"
        onClick={scrollToProjects}
      >
        <ChevronDown className="h-10 w-10 text-gray-400" />
      </div>
      
      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/80 z-10"></div>
    </section>
  );
};

export default HeroSection;
