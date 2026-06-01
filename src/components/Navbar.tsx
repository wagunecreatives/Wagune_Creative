import { useState } from 'react';
import { Menu, X, PenTool } from 'lucide-react';
import { Button } from './ui/button';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/image-logo.png"
                alt="Wagune Creatives"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight">
                  WAGUNE<span className="text-red-600"> CREATIVES</span>
                </span>
                <span className="text-[10px] font-medium text-gray-500 tracking-wide -mt-1">
                  DESIGN THAT SPEAKS
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <Button
                variant="ghost"
                className="rounded-full text-gray-700 hover:text-red-600 hover:bg-transparent"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 rounded-full" onClick={() => setIsSignupOpen(true)}>
                Signup
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-red-600 font-medium"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex flex-col gap-2 mt-4">
                <Button
                  variant="ghost"
                  className="w-full rounded-full text-gray-700 hover:text-red-600 hover:bg-transparent"
                  onClick={() => {
                    setIsOpen(false);
                    setIsLoginOpen(true);
                  }}
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 rounded-full"
                  onClick={() => {
                    setIsOpen(false);
                    setIsSignupOpen(true);
                  }}
                >
                  Signup
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
};

export default Navbar;

