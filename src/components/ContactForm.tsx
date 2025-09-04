import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";
import AuthWrapper from "./ui/AuthWrapper";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact Us</h2>
        <p className="section-subheading">
          Ready to start your project? Get in touch with us today for a custom quote.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <Card className="lg:col-span-2 border-t-4 border-t-brand-red">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AuthWrapper
                fallback={
                  <div className="text-center py-8">
                    <h3 className="text-lg font-bold mb-2">Sign up or log in to contact us</h3>
                    <p className="text-muted-foreground mb-4">
                      For honest and transparent communication, we require users to create an account before contacting us.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button variant="outline" asChild>
                        <a href="#" onClick={(e) => {
                          e.preventDefault();
                          const navbar = document.querySelector("header");
                          if (navbar) {
                            const buttons = navbar.querySelectorAll("button");
                            // Find login button (second last button)
                            const loginButton = buttons[buttons.length - 2];
                            loginButton?.click();
                          }
                        }}>Log In</a>
                      </Button>
                      <Button asChild>
                        <a href="#" onClick={(e) => {
                          e.preventDefault();
                          const navbar = document.querySelector("header");
                          if (navbar) {
                            const buttons = navbar.querySelectorAll("button");
                            // Find signup button (last button)
                            const signupButton = buttons[buttons.length - 1];
                            signupButton?.click();
                          }
                        }}>Sign Up</a>
                      </Button>
                    </div>
                  </div>
                }
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="blog">Blog Posts & Articles</option>
                        <option value="academic">Academic Writing</option>
                        <option value="business">Business Documents</option>
                        <option value="design">Design Services</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </AuthWrapper>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-brand-red/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a 
                      href="mailto:wagunecreatives57@gmail.com" 
                      className="text-muted-foreground hover:text-brand-red transition-colors"
                    >
                      wagunecreatives57@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:0116108240" 
                        className="block text-muted-foreground hover:text-brand-red transition-colors"
                      >
                        0116108240
                      </a>
                      <a 
                        href="tel:0700432589" 
                        className="block text-muted-foreground hover:text-brand-red transition-colors"
                      >
                        0700432589
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-brand-black/10 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <div className="space-y-1">
                      <a 
                        href="https://wa.me/254116108240" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-muted-foreground hover:text-brand-red transition-colors"
                      >
                        0116108240
                      </a>
                      <a 
                        href="https://wa.me/254700432589" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-muted-foreground hover:text-brand-red transition-colors"
                      >
                        0700432589
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
