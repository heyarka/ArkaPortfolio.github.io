
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <FileSpreadsheet className="h-16 w-16 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your data?</h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Let's collaborate on turning your raw data into actionable insights and powerful Excel solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            View My Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
