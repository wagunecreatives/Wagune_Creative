
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import SignupModal from "./SignupModal";

const Hero = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => setVideoLoaded(true));
      return () => {
        videoElement.removeEventListener('loadeddata', () => setVideoLoaded(true));
      };
    }
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-black">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className={`object-cover w-full h-full transition-opacity duration-700 ${videoLoaded ? 'opacity-40' : 'opacity-0'}`}
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/videoblocks-digital-network-connections-and-global-communication-concept-abstract-connected-dots-with-lines-and-geometric-triangular-shapes-moving-waves-of-particles-innovative-technologies_bbp92ixou__9aeec83cb3d9ea089cf08bd0b9b1f5f1__P360.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback background while video loads */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ 
            backgroundImage: "url('https://drive.google.com/uc?export=view&id=1XFfmEEPGJoLRK9ZabsuQMc87pU5UBYyI')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      </div>

      {/* Color overlay to improve text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-white">
              Creative Solutions for Your <span className="gradient-text">Digital Needs</span>
            </h1>
            <p className="text-xl mb-8 text-white">
              Professional writing, stunning designs, and innovative projects 
              tailored for your brand's success
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => setIsSignupOpen(true)}>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-black border-white" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-red to-brand-green rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/10a32cdc-ff3b-4ce5-b367-aafa056eddfa.png" 
                  alt="WaguneCreatives Logo" 
                  className="w-64 h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </section>
  );
};

export default Hero;
