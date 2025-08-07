import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-warm rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-warm rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss your project and create a strategy that drives real results. 
            Get in touch with our creative team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">hello@backvue.com</p>
                <p className="text-sm text-primary-foreground/70 mt-2">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">🇲🇦</span>
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">Morocco</p>
                <p className="text-sm text-primary-foreground/70 mt-2">
                  Serving clients worldwide
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">⏰</span>
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">Mon - Fri: 9AM - 6PM</p>
                <p className="text-sm text-primary-foreground/70 mt-2">
                  GMT+1 (Morocco Time)
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-6 text-primary-foreground">
                    Start Your Project Today
                  </h3>
                  
                  <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Whether you need video editing, social media management, graphic design, 
                    or website creation - we're here to help your brand succeed.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-lg mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">Free</div>
                      <div className="text-primary-foreground/80">Initial Consultation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24h</div>
                      <div className="text-primary-foreground/80">Response Time</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="text-lg px-8 py-4 w-full sm:w-auto shadow-warm"
                    >
                      Get Free Consultation
                    </Button>
                    <div className="text-sm text-primary-foreground/70">
                      No commitment required • Quick response guaranteed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-primary-foreground/70 mb-4">Trusted by startups and established brands</p>
          <div className="flex justify-center items-center gap-8 text-primary-foreground/50">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span>|</span>
            <span>50+ Happy Clients</span>
            <span>|</span>
            <span>100% Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};