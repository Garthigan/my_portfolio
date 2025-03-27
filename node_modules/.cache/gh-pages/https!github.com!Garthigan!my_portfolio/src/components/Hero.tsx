
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { aboutMe } from '@/constants/data';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="subheading text-accent mb-3 animate-fade-in">
            {aboutMe.role}
          </p>
          <h1 className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Hi, I'm {aboutMe.name}<span className="text-accent">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Machine learning engineer and data scientist specializing in building
            intelligent systems that solve complex problems.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/projects">
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/contact">
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
