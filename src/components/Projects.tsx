
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, BarChart3, PieChart, Table, ExternalLink } from 'lucide-react';

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
      icon: <BarChart3 className="h-10 w-10 text-secondary" />,
      tags: ["Dashboard", "Data Analysis", "Visualization"],
      link: "#"
    },
    {
      id: 2,
      title: "Financial Model",
      description: "Comprehensive financial model for a 5-year business projection with sensitivity analysis.",
      image: "/placeholder.svg", 
      icon: <FileSpreadsheet className="h-10 w-10 text-secondary" />,
      tags: ["Financial Modeling", "Forecasting"],
      link: "#"
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "Automated inventory tracking system with reorder alerts and usage forecasting.",
      image: "/placeholder.svg", 
      icon: <Table className="h-10 w-10 text-secondary" />,
      tags: ["Automation", "Inventory"],
      link: "#"
    },
    {
      id: 4,
      title: "Marketing ROI Analyzer",
      description: "Tool to measure and visualize the ROI of various marketing channels and campaigns.",
      image: "/placeholder.svg", 
      icon: <PieChart className="h-10 w-10 text-secondary" />,
      tags: ["ROI Analysis", "Visualization", "Marketing"],
      link: "#"
    },
    {
      id: 5,
      title: "HR Performance Tracker",
      description: "Employee performance analytics dashboard with KPI tracking and performance reviews.",
      image: "/placeholder.svg", 
      icon: <BarChart3 className="h-10 w-10 text-secondary" />,
      tags: ["HR Analytics", "Dashboard", "KPI Tracking"],
      link: "#"
    },
    {
      id: 6,
      title: "Project Budget Tracker",
      description: "Project management budget tracking tool with variance analysis and projections.",
      image: "/placeholder.svg", 
      icon: <FileSpreadsheet className="h-10 w-10 text-secondary" />,
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
    <section id="projects" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Excel Projects</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Explore my collection of Excel projects showcasing data analysis, visualization, and automation solutions for real-world business problems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Badge 
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`cursor-pointer text-sm py-2 px-4 ${activeFilter === filter ? 'bg-primary' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              ref={el => projectRefs.current[index] = el}
              className="scroll-animation"
            >
              <Card className="project-card h-full flex flex-col overflow-hidden border-2 border-muted hover:border-primary/20">
                <CardHeader className="pb-0 pt-6">
                  <div className="mb-4">{project.icon}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="py-4 flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-6">
                  <Button variant="outline" className="w-full group" asChild>
                    <a href={project.link}>
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
