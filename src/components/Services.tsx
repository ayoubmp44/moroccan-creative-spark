import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "🎞️",
    title: "Video Editing",
    description: "High-quality edits for YouTube, ads, reels, and brand content that captivate your audience.",
    features: ["YouTube Content", "Social Media Ads", "Brand Videos", "Motion Graphics"]
  },
  {
    icon: "🧠",
    title: "Social Media Marketing",
    description: "Strategic planning and management to boost your online presence and engagement.",
    features: ["Strategy & Planning", "Content Creation", "Page Management", "Paid Advertising"]
  },
  {
    icon: "🖼️",
    title: "Graphic Design",
    description: "Eye-catching visuals that communicate your brand message effectively across all platforms.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Assets"]
  },
  {
    icon: "🌐",
    title: "Website Creation",
    description: "Modern, responsive websites that reflect your brand and drive conversions.",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-warm bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From video editing to complete digital marketing strategies, we provide comprehensive 
            creative solutions to help your brand stand out in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-warm" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="warm" size="lg" className="text-lg px-8 py-4">
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};