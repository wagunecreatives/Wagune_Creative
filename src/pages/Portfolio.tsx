
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  // Effect to scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <Link to="/" className="inline-flex items-center text-brand-red hover:text-brand-green transition-colors mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="section-heading mb-4">Our Portfolio</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore our creative works including web design, graphic design, and content writing projects.
              </p>
            </div>
            
            <Button className="mt-6 md:mt-0" asChild>
              <a href="https://realistic-carnation-pwvxkq.mystrikingly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                Visit Full Portfolio
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 font-heading">We're redirecting you to our complete portfolio</h2>
            <p className="text-muted-foreground mb-8">
              Our complete portfolio is hosted on a separate website. Click the button below to explore our work.
            </p>
            <Button size="lg" className="bg-brand-red hover:bg-brand-black" asChild>
              <a href="https://realistic-carnation-pwvxkq.mystrikingly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                Visit Our Portfolio
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
