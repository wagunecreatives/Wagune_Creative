
import { 
  PenLine, 
  FileText, 
  Briefcase, 
  Image,
  CheckCircle,
  Globe
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Blog Posts & Articles",
    description: "High-quality, engaging content for your website or publication.",
    icon: <PenLine className="h-10 w-10 text-brand-red" />,
    pricing: "KSH 2 per word",
    note: "Negotiable for high word count",
    features: ["SEO-optimized", "Well-researched", "Original content", "Custom tone & style"]
  },
  {
    title: "Academic Writing",
    description: "Professional academic papers with proper citation and research.",
    icon: <FileText className="h-10 w-10 text-brand-green" />,
    pricing: "KSH 1000 per page",
    features: ["Proper formatting", "In-depth research", "Plagiarism-free", "Various citation styles"]
  },
  {
    title: "Business Documents",
    description: "Professional business documents for company needs.",
    icon: <Briefcase className="h-10 w-10 text-brand-black" />,
    pricing: "KSH 1500 per document",
    features: ["Professional formatting", "Industry-specific", "Customizable templates", "Quick turnaround"]
  },
  {
    title: "Web Design",
    description: "Custom website design and development for your business or personal brand.",
    icon: <Globe className="h-10 w-10 text-brand-green" />,
    pricing: "KSH 10,000",
    note: "Price varies with complexity",
    features: ["Responsive design", "SEO-friendly", "Custom features", "Modern UI/UX"]
  },
  {
    title: "Design Services",
    description: "Eye-catching visuals to elevate your brand.",
    icon: <Image className="h-10 w-10 text-brand-red" />,
    pricing: "KSH 200",
    note: "Price varies with complexity",
    features: ["Posters", "Flyers", "Business cards", "Logos & branding"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-subheading">
          We offer a range of professional writing and design services to help you stand out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 h-full border-t-4 hover:border-t-brand-red">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-lg font-bold text-brand-red">{service.pricing}</p>
                  {service.note && <p className="text-sm text-gray-500">{service.note}</p>}
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-brand-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <a href="#contact">Request Quote</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
