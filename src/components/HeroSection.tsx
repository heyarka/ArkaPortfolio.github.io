
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
    <section className="py-20 md:py-32 px-6 md:px-10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-background to-muted">
      <div className="animate-float mb-8">
        <div className="bg-primary/10 p-4 rounded-full">
          <FileSpreadsheet className="h-12 w-12 md:h-16 md:w-16 text-primary" />
        </div>
      </div>
      <h1 className="fade-in text-4xl md:text-6xl font-bold mb-4 text-primary">Excel Portfolio</h1>
      <p className="fade-in-delay-1 text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
        Transforming raw data into powerful insights through innovative Excel solutions
      </p>
      <div className="fade-in-delay-2 flex flex-col md:flex-row gap-4">
        <Button onClick={scrollToProjects} size="lg" className="bg-secondary hover:bg-secondary/90">
          View My Projects
        </Button>
        <Button variant="outline" size="lg">
          About My Process
        </Button>
      </div>
      <div className="fade-in-delay-3 absolute bottom-10 animate-bounce cursor-pointer" onClick={scrollToProjects}>
        <ChevronDown className="h-8 w-8 text-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;
