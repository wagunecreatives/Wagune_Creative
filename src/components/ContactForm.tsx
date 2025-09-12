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
                Text us or reach us on out accounts.will get to you on time.Thank you.
              </CardDescription>
            </CardHeader>
            <CardContent>

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
                        href="tel:0704284900" 
                        className="block text-muted-foreground hover:text-brand-red transition-colors"
                      >
                        0704284900
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
                        href="https://wa.me/254704284900" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-muted-foreground hover:text-brand-red transition-colors"
                      >
                        0704284900
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
