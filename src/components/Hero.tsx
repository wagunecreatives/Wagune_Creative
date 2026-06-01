import { Button } from './ui/button';
import { Sparkles, Zap, Star, Clock, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" />
              Full-service creative agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Creative solutions for <span className="text-red-600">your</span>
              <br />Digital <span className="text-green-700">needs</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-xl">
              Professional writing, stunning designs, and innovative projects tailored for your brand's success
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full" asChild>
                <a href="#services">Get Service Pricing</a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 rounded-full" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-green-600" /> 50+ projects
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" /> 4.9 client rating
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 48h delivery
              </span>
            </div>
          </div>
            <div className="relative">
            <div className="bg-gradient-to-tr from-red-50 to-green-50 rounded-2xl p-2 shadow-xl">
              <img 
                src="/lovable-uploads/wagune-pic.png"
                alt="Wagune Creatives"
                className="rounded-xl w-full object-contain shadow-md bg-white"
              />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;