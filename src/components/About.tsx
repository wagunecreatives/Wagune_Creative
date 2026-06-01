import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Jim Carson",
    position: "Lead Designer",
    image: "/uploads/977ce4f9-61ba-436c-804b-6d0e01eabfd3.png",
    bio: "Jim specializes in creating visually stunning designs that capture brand essence. His expertise spans across various digital and print formats.",
    socials: {
      email: "wagunecreatives57@gmail.com",
      phone: "0704284900",
    },
  },
  {
    name: "Everlyne Willy",
    position: "Creative Director",
    image: "/uploads/image-eve.png",
    bio: "With a keen eye for design and a passion for creative writing, Everlyne leads our creative team in delivering exceptional content and design solutions.",
    socials: {
      email: "everlynewilly62@gmail.com ",
      phone: "0757445696",
    },
  },
  {
    name: "Julius Njoroge",
    position: "Brand & social media manager",
    image: "/uploads/julius-wagune.png",
    bio: "Julius helps brands find their voice turning ideas into clear messaging and standout creative. From concept to delivery, he ensures every project feels authentic, intentional, and audience focused.",
    socials: {
      email: "wagunecreatives57@gmail.com",
      phone: "01132285479",
    },
  },
  {
    name: "Mike Kamau",
    position: "Web Developer",
    image: "/uploads/mike-wagune.png",
    bio: "Mike builds fast, responsive websites and web applications, translating design into clean, maintainable code and ensuring smooth performance across devices.",
    socials: {
      email: "ngigimichael76@gmail.com",
      phone: "0715 883594",
    },
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our team</h2>
        <p className="section-subheading">
          Meet the creative minds behind WaguneCreatives, dedicated to bringing your vision to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-heading">{member.name}</h3>
                    <p className="text-brand-red font-medium mb-4">{member.position}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="flex items-center text-sm hover:text-brand-red transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {member.socials.email}
                    </a>
                    <a
                      href={`tel:${member.socials.phone}`}
                      className="flex items-center text-sm hover:text-brand-red transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {member.socials.phone}
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center font-heading">Our Mission</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            At WaguneCreatives, we're passionate about delivering high-quality content and designs that help our clients connect with their audience. We combine creativity, expertise, and professionalism to ensure every project exceeds expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

