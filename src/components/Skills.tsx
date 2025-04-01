
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { Database, BarChart, ChartLine, ChartPie, Table } from 'lucide-react';

interface Skill {
  name: string;
  value: number;
  description: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const skills: Skill[] = [
    { 
      name: "Excel", 
      value: 95, 
      description: "Advanced formulas, pivot tables, and interactive dashboards", 
      icon: <Table className="h-6 w-6 text-primary/70" />
    },
    { 
      name: "SQL", 
      value: 90, 
      description: "Database design, complex queries, and data extraction", 
      icon: <Database className="h-6 w-6 text-primary/70" />
    },
    { 
      name: "Power BI", 
      value: 85, 
      description: "Interactive reports, DAX formulas, and data modeling", 
      icon: <BarChart className="h-6 w-6 text-primary/70" />
    },
    { 
      name: "Tableau", 
      value: 80, 
      description: "Data visualization, dashboarding, and story-telling", 
      icon: <ChartPie className="h-6 w-6 text-primary/70" />
    },
    { 
      name: "Data Analysis", 
      value: 90, 
      description: "Statistical analysis, forecasting, and business intelligence", 
      icon: <ChartLine className="h-6 w-6 text-primary/70" />
    },
    { 
      name: "Financial Modeling", 
      value: 85, 
      description: "Budgeting, forecasting, and scenario analysis", 
      icon: <Table className="h-6 w-6 text-primary/70" />
    }
  ];

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
          
          // Find all progress bars inside this element and animate them
          const progressBars = entry.target.querySelectorAll('[role="progressbar"]');
          progressBars.forEach((bar: Element) => {
            if (bar instanceof HTMLElement) {
              const value = bar.getAttribute('data-value');
              if (value) {
                setTimeout(() => {
                  bar.style.width = `${value}%`;
                }, 100);
              }
            }
          });
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    skillRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      skillRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-10 bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Data Analysis Expertise</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          My extensive skills span across various tools and technologies in the data analytics ecosystem.
        </p>
        
        <div className="grid gap-10">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              ref={el => skillRefs.current[index] = el}
              className="scroll-animation"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-2">
                <div className="flex items-center w-full md:w-1/3">
                  <div className="mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-medium">{skill.name}</h3>
                </div>
                <p className="text-muted-foreground w-full md:w-2/3">{skill.description}</p>
              </div>
              <div className="h-8 bg-white dark:bg-gray-800 rounded-md overflow-hidden relative">
                <Progress 
                  value={0} 
                  max={100}
                  data-value={skill.value} 
                  className="h-full transition-all duration-1000 ease-out"
                />
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xs font-bold text-primary-foreground">
                  {skill.value}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
