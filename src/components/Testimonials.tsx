
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Global Tech",
      text: "Arka's Excel dashboard revolutionized how we track our marketing campaigns. The insights we gained led to a 32% increase in ROI within just two quarters.",
      avatar: "",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Finance Manager",
      company: "Innovative Solutions",
      text: "The financial model Arka created for our company was exceptional. It provided the clarity we needed to secure our Series A funding and plan our expansion.",
      avatar: "",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Lead",
      company: "Retail Dynamics",
      text: "Our inventory management was in chaos until Arka implemented an Excel-based tracking system. Now we've reduced stockouts by 78% and improved turnover rates.",
      avatar: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Client Feedback</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          What clients say about my Excel solutions and data analysis work
        </p>
        
        <div className="relative">
          <Card className="border-none shadow-xl bg-white">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-secondary/30 mb-6" />
              
              <p className="text-lg md:text-xl mb-8 italic text-muted-foreground">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button 
                key={index}
                variant="outline"
                size="icon"
                className={`w-3 h-3 rounded-full p-0 ${index === currentIndex ? 'bg-primary' : 'bg-muted'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
