
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  value: number;
  description: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const skills: Skill[] = [
    { 
      name: "Data Analysis", 
      value: 95, 
      description: "Advanced statistical analysis, pivot tables, and data interpretation" 
    },
    { 
      name: "Financial Modeling", 
      value: 90, 
      description: "Creating comprehensive financial projections and sensitivity analyses" 
    },
    { 
      name: "Dashboard Creation", 
      value: 95, 
      description: "Building interactive and visually appealing dashboards" 
    },
    { 
      name: "Data Visualization", 
      value: 85, 
      description: "Creating charts, graphs, and visual representations of complex data" 
    },
    { 
      name: "Automation", 
      value: 80, 
      description: "Macros, VBA, and automated workflows to improve efficiency" 
    },
    { 
      name: "Forecasting", 
      value: 85, 
      description: "Trend analysis and predictive modeling for business outcomes" 
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Excel Expertise</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          My advanced Excel skills span across various domains of data analysis and visualization.
        </p>
        
        <div className="grid gap-10">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              ref={el => skillRefs.current[index] = el}
              className="scroll-animation"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-2">
                <h3 className="text-xl font-medium w-full md:w-1/3">{skill.name}</h3>
                <p className="text-muted-foreground w-full md:w-2/3">{skill.description}</p>
              </div>
              <div className="h-8 bg-white rounded-md overflow-hidden relative">
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
