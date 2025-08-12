import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoSimple from "@/assets/logo-simple.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoSimple} 
              alt="Backvue" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};