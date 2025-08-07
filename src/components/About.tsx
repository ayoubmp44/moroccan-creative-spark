import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-warm text-secondary-foreground text-sm font-medium mb-6">
              About Backvue
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Creative Excellence
              <span className="block text-primary">From Morocco</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Based in the vibrant creative landscape of Morocco, Backvue combines local 
              cultural richness with international digital marketing expertise. We understand 
              both traditional values and modern digital trends.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cultural Authenticity</h3>
                  <p className="text-muted-foreground">We bring authentic Moroccan creativity and hospitality to every project.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Global Standards</h3>
                  <p className="text-muted-foreground">International quality standards with competitive pricing and timely delivery.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Touch</h3>
                  <p className="text-muted-foreground">Every client receives personalized attention and dedicated project management.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>
          
          {/* Stats & Values */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Why Choose Backvue?</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Client Retention Rate</span>
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Project Success Rate</span>
                  <span className="text-2xl font-bold text-secondary">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Delivery Time</span>
                  <span className="text-2xl font-bold text-accent">7 Days</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-warm rounded-2xl p-8 text-secondary-foreground">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Let's discuss your project and create something amazing together. 
                We're here to help bring your vision to life.
              </p>
              <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};