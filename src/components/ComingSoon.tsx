import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo-simple.svg";

export const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <img 
          src={logo} 
          alt="Backvue" 
          className="h-16 md:h-20 mx-auto mb-12"
        />
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto">
          We're working on something special. Stay tuned!
        </p>
        
        <div className="pt-8">
          <Button 
            size="lg"
            onClick={() => window.open('https://wa.me/212649643446', '_blank')}
            className="gap-2"
          >
            <Phone className="h-5 w-5" />
            Contact Us on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};
