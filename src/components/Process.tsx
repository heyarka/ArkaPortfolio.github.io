
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, BarChart3, LineChart, Lightbulb, Share2 } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Process = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const steps: ProcessStep[] = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Data Collection",
      description: "I begin by gathering and organizing raw data from various sources, ensuring accuracy and completeness."
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Analysis & Cleaning",
      description: "The data is cleaned, normalized, and prepared for analysis, removing inconsistencies and outliers."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Visualization",
      description: "I create clear, insightful visualizations that tell a story and highlight key patterns in the data."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Insights & Recommendations",
      description: "From the analysis, I extract actionable insights and develop data-driven recommendations."
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: "Implementation",
      description: "Finally, I implement automated solutions or dashboards that provide ongoing value and insights."
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
        }
      });
    }, observerOptions);
    
    stepsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      stepsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Process</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          A systematic approach to transforming raw data into meaningful insights and solutions
        </p>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepsRef.current[index] = el}
                className="scroll-animation"
              >
                <Card className="relative border-none shadow-lg">
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-md hidden md:block">
                    {step.icon}
                  </div>
                  <CardContent className="p-6 md:pl-16">
                    <div className="md:hidden flex items-center mb-4">
                      {step.icon}
                      <div className="w-full h-0.5 bg-muted ml-4" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
