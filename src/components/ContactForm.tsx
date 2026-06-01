import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";

const TypingQuote = ({ text }: { text: string }) => {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIdx(text.length);
      return;
    }

    const speedMs = 28;
    const total = text.length;
    let raf: number | null = null;
    let timeoutId: number | null = null;

    const tick = () => {
      setIdx((prev) => {
        const next = prev + 1;
        return next > total ? total : next;
      });
    };

    timeoutId = window.setTimeout(() => {
      tick();
    }, speedMs);

    const intervalId = window.setInterval(() => {
      tick();
    }, speedMs);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timeoutId) window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion, text]);

  return <>{text.slice(0, idx)}</>;
};

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
                Text us or reach us on our accounts.will get to you on time.Thank you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-brand-red/10 via-brand-green/10 to-gray-100 p-6 md:p-8">
                {/* Floating shapes */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-brand-red/20 blur-2xl" style={{ animation: "floatSlow 9s ease-in-out infinite" }} />
                  <div className="absolute top-10 -right-12 h-28 w-28 rounded-full bg-brand-green/20 blur-2xl" style={{ animation: "floatSlow2 11s ease-in-out infinite" }} />
                  <div className="absolute -bottom-12 left-1/3 h-16 w-16 rotate-12 rounded-xl bg-brand-red/10 blur-2xl" style={{ animation: "floatSlow3 10s ease-in-out infinite" }} />
                  <div className="absolute bottom-6 right-8 h-10 w-10 rotate-45 rounded-lg bg-brand-green/10 blur-2xl" style={{ animation: "floatSlow4 12s ease-in-out infinite" }} />
                </div>

                <div className="relative">
                  

                  <div className="flex flex-col items-start sm:items-center text-left sm:text-center">
                    <p className="font-heading text-xl md:text-2xl font-semibold text-gray-900">
                      <span className="gradient-text">Design</span>
                      <span className="text-gray-700"> is </span>
                      <span className="text-gray-900">intelligence made </span>
                      <span className="gradient-text">visible</span>
                      <span className="text-gray-700">.</span>
                    </p>

                    {/* Typing effect */}
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-gray-700 text-base md:text-lg">&ldquo;</span>
                      <span className="font-mono text-gray-800 text-base md:text-lg">
                        <span
                          className="inline-block border-r-2 border-brand-red/60 pr-1"
                          style={{ minHeight: "1.2em" }}
                        >
                          <TypingQuote text="Design is intelligence made visible." />
                        </span>
                      </span>
                      <span className="text-gray-700 text-base md:text-lg">&rdquo;</span>
                    </div>

                    <p className="mt-4 text-muted-foreground text-sm md:text-base">
                      We craft bold ideas into standout brands.
                    </p>

                    {/* Clickable icons */}
                    <div className="mt-6 w-full flex items-center justify-start sm:justify-center gap-4">
                      <a
                        href="https://instagram.com/wagunecreatives57"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group h-11 w-11 rounded-full bg-white/75 border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        aria-label="Instagram"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 text-brand-red group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.1-2.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
                        </svg>
                      </a>

                      <a
                        href="https://facebook.com/WaguneCreatives"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group h-11 w-11 rounded-full bg-white/75 border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        aria-label="Facebook"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 text-brand-red group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M14 2h3a1 1 0 0 1 1 1v3h-4v4h4l-1 4h-3v9h-4v-9H9v-4h3V6a4 4 0 0 1 4-4Z" />
                        </svg>
                      </a>

                      <a
                        href="https://wa.me/254704284900"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group h-11 w-11 rounded-full bg-white/75 border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        aria-label="WhatsApp"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5 text-brand-red group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M20.5 3.5A11 11 0 0 0 3.3 17.4L2 22l4.7-1.2A11 11 0 0 0 20.5 3.5ZM12 20a8 8 0 0 1-4.2-1.2l-.3-.2-2.4.6.6-2.3-.2-.3A8 8 0 1 1 12 20Zm4.3-5.7c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.2.2-.6.7-.7.8-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.3-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.3-.3c.1-.1.2-.2.3-.3.1-.1.1-.2.1-.3 0-.1 0-.3-.1-.4-.1-.2-.4-1-.6-1.5-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.3.1-.4.2-.2.2-.7.7-.7 1.7s.7 2 1 2.3c.1.2 1.8 2.7 4.4 3.8.6.3 1.1.4 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          
                </div>
          
            
          </div>
        
      
    </section>
  );
};

export default ContactForm;
