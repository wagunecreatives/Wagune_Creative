
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/10a32cdc-ff3b-4ce5-b367-aafa056eddfa.png" 
              alt="WaguneCreatives Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold font-display hidden sm:block">WaguneCreatives</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium hover:text-brand-red transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium hover:text-brand-red transition-colors">About Us</a>
          
          <a href="#testimonials" className="text-sm font-medium hover:text-brand-red transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-red transition-colors">Contact</a>
          <Button variant="outline" onClick={() => setIsLoginOpen(true)}>Log In</Button>
          <Button onClick={() => setIsSignupOpen(true)}>Sign Up</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-sm font-medium hover:text-brand-red transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="text-sm font-medium hover:text-brand-red transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            
            <a href="#testimonials" className="text-sm font-medium hover:text-brand-red transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-sm font-medium hover:text-brand-red transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <div className="flex space-x-4">
              <Button variant="outline" className="flex-1" onClick={() => {
                setIsLoginOpen(true);
                setMobileMenuOpen(false);
              }}>
                Log In
              </Button>
              <Button className="flex-1" onClick={() => {
                setIsSignupOpen(true);
                setMobileMenuOpen(false);
              }}>
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}

      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default Navbar;
