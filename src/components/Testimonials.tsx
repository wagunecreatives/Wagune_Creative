
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Esther Kwamboka",
    position: "Small Business Owner",
    testimonial: "WeguneCreatives helped transform my business with their exceptional content writing and design services. Their attention to detail and quick turnaround time exceeded my expectations!",
    rating: 5
  },
  {
    name: "Anne Auma",
    position: "Marketing Director",
    testimonial: "I've worked with many creative agencies, but WeguneCreatives stands out with their professionalism and quality of work. Their blog articles generated significant traffic to our website.",
    rating: 5
  },
  {
    name: "Victor Owuor",
    position: "Student",
    testimonial: "The academic writing services provided by WeguneCreatives were instrumental in helping me complete my research paper. Their work was well-researched, properly formatted, and delivered on time.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Client Testimonials</h2>
        <p className="section-subheading">
          Here's what our clients say about our services and their experience working with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 flex-1">
                  "{testimonial.testimonial}"
                </blockquote>
                <div className="mt-auto">
                  <div className="border-t pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
