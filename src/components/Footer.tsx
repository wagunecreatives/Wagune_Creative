


import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
src="/uploads/image-logo.png"
                alt="WaguneCreatives Logo" 
                className="h-10 w-auto mr-3 bg-white p-1 rounded"
              />
              <h3 className="text-xl font-bold font-heading">WaguneCreatives</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Professional writing, stunning designs, and innovative projects tailored for your brand's success.
            </p>

          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-red transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-brand-red transition-colors">
                  Our team 
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-brand-red transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-red transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 font-heading">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-brand-red mt-0.5" />
                <span className="text-gray-400">wagunecreatives57@gmail.com</span>
              </li>

              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-brand-red mt-0.5" />
                <span className="text-gray-400">0704284900</span>
                
              </li>

              <li className="flex items-start">
                <a
                  href="https://www.facebook.com/WaguneCreatives"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start"
                  aria-label="Visit WaguneCreatives on Facebook"
                >
                  <Facebook className="h-5 w-5 mr-3 text-brand-red mt-0.5" />
                </a>
                <a
                  href="https://www.facebook.com/WaguneCreatives"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WaguneCreatives
                </a>
              </li>
              <li className="flex items-start">
                <a
                  href="https://www.instagram.com/WaguneCreatives/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start"
                  aria-label="Visit WaguneCreatives on Instagram"
                >
                  <Instagram className="h-5 w-5 mr-3 text-brand-red mt-0.5" />
                </a>
                <a
                  href="https://www.instagram.com/WaguneCreatives/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @WaguneCreatives
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} WaguneCreatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
