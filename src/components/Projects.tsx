
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, BarChart3, PieChart, Table, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  tags: string[];
  link: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Sales Dashboard",
      description: "Interactive dashboard for regional sales performance analysis with dynamic filtering.",
      image: "/placeholder.svg", 
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      tags: ["Dashboard", "Data Analysis", "Visualization"],
      link: "#"
    },
    {
      id: 2,
      title: "Financial Model",
      description: "Comprehensive financial model for a 5-year business projection with sensitivity analysis.",
      image: "/placeholder.svg", 
      icon: <FileSpreadsheet className="h-10 w-10 text-blue-600" />,
      tags: ["Financial Modeling", "Forecasting"],
      link: "#"
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "Automated inventory tracking system with reorder alerts and usage forecasting.",
      image: "/placeholder.svg", 
      icon: <Table className="h-10 w-10 text-blue-600" />,
      tags: ["Automation", "Inventory"],
      link: "#"
    },
    {
      id: 4,
      title: "Marketing ROI Analyzer",
      description: "Tool to measure and visualize the ROI of various marketing channels and campaigns.",
      image: "/placeholder.svg", 
      icon: <PieChart className="h-10 w-10 text-blue-600" />,
      tags: ["ROI Analysis", "Visualization", "Marketing"],
      link: "#"
    },
    {
      id: 5,
      title: "HR Performance Tracker",
      description: "Employee performance analytics dashboard with KPI tracking and performance reviews.",
      image: "/placeholder.svg", 
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      tags: ["HR Analytics", "Dashboard", "KPI Tracking"],
      link: "#"
    },
    {
      id: 6,
      title: "Project Budget Tracker",
      description: "Project management budget tracking tool with variance analysis and projections.",
      image: "/placeholder.svg", 
      icon: <FileSpreadsheet className="h-10 w-10 text-blue-600" />,
      tags: ["Project Management", "Budgeting", "Forecasting"],
      link: "#"
    }
  ];

  const filters = ['All', 'Dashboard', 'Data Analysis', 'Visualization', 'Forecasting', 'Automation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-24 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Excel Projects</h2>
        <p className="text-xl text-gray-600 max-w-3xl mb-12">
          Explore my collection of Excel projects showcasing data analysis, visualization, and automation solutions.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <Badge 
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`cursor-pointer text-sm py-1.5 px-4 rounded-full ${
                activeFilter === filter 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'border-blue-200 text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              ref={el => projectRefs.current[index] = el}
              className="scroll-animation"
            >
              <Card className="project-card glass-effect hover-card h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">{project.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full justify-between group" asChild>
                    <a href={project.link}>
                      View Project
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
