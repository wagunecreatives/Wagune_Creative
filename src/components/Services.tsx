import { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Paintbrush,
  Megaphone,
  LayoutDashboard
} from 'lucide-react';

import LoginModal from './LoginModal';
import ServicePackagesModal, { ServiceKey } from './ServicePackagesModal';

const services = [
  {
    title: 'Social Media Management',
    price: ' KSH 15,000',
    description:
      'Plan, create, and manage content that grows your audience and keeps your brand consistent.',
    icon: Megaphone,
    bullets: [
      'Content planning & posting schedules',
      'Post designs & content templates',
      'Community management & engagement',
      'Monthly performance insights & recommendations'
    ]
  },
  {
    title: 'Web Development',
    price: 'KSH 25,000',
    description:
      'Build fast, modern websites with clean UI and a smooth user experience.',
    icon: LayoutDashboard,
    bullets: [
      'Landing pages & multi-page websites',
      'Responsive design for mobile & desktop',
      'Performance & SEO-friendly structure',
      'Deployment support & basic maintenance'
    ]
  },
  {
    title: 'Graphic Design',
    price: ' KSH 300',
    description:
      'Eye-catching visuals for branding, campaigns, and everyday marketing needs.',
    icon: Paintbrush,
    bullets: [
      'Logos, flyers, posters & branding assets',
      'Social media graphics & marketing creatives',
      'Design consistency using brand guidelines'
    ]
  },
  {
    title: 'Academic & Professional Writing',
    price: 'KSH 1,000 per page',
    description:
      'Well-structured writing with proper formatting and clear research support.',
    icon: Paintbrush,
    bullets: [
      'Research papers & assignments',
      'Editing, proofreading & formatting',
      'Reports and structured documents',
      'Deadline-focused turnaround'
    ]
  }
];




export default function Services() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [selectedServiceKey, setSelectedServiceKey] = useState<ServiceKey>('social');

  const whatsapp = 'https://wa.me/254704284900';

  const isAuthenticated =
    typeof window !== 'undefined' &&
    localStorage.getItem('isAuthenticated') === 'true';

  const openPackagesForService = (key: ServiceKey) => {
    if (!isAuthenticated) {
      setIsLoginOpen(true);
      return;
    }

    setSelectedServiceKey(key);
    setIsPackagesOpen(true);
  };

  const handleOtherServiceClick = () => {
    if (!isAuthenticated) {
      setIsLoginOpen(true);
      return;
    }

    window.open(whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="section-heading">Services</h2>
          <p className="section-subheading">
            A complete set of creative offerings design, writing, and marketing
            support so you can launch faster and look better.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (service.title === 'Social Media Management') {
                      openPackagesForService('social');
                      return;
                    }
                    if (service.title === 'Web Development') {
                      openPackagesForService('web');
                      return;
                    }
                    if (service.title === 'Graphic Design') {
                      openPackagesForService('graphic');
                      return;
                    }
                    handleOtherServiceClick();
                  }}
                  className="w-full text-left"
                  aria-label={`Select service: ${service.title}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-50 to-green-50 border border-gray-200 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-brand-red" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <h3 className="text-xl font-bold tracking-tight">
                            {service.title}
                          </h3>
                          <div className="text-brand-red font-semibold text-sm">
                            From{' '}
                            <span className="text-lg">{service.price}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start text-sm">
                          <CheckCircle2 className="h-5 w-5 text-brand-green mr-2 mt-0.5" />
                          <span className="text-gray-700">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Button
                        type="button"
                        className="w-full rounded-full"
                        variant={isAuthenticated ? 'default' : 'outline'}
                        onClick={(e) => {
                          // keep button click from bubbling twice
                          e.preventDefault();
                          e.stopPropagation();

                          if (service.title === 'Social Media Management') {
                            openPackagesForService('social');
                            return;
                          }
                          if (service.title === 'Web Development') {
                            openPackagesForService('web');
                            return;
                          }
                          if (service.title === 'Graphic Design') {
                            openPackagesForService('graphic');
                            return;
                          }

                          handleOtherServiceClick();
                        }}
                      >
                        {isAuthenticated ? 'Hire this service' : 'Login to view details'}
                      </Button>
                    </div>
                  </CardContent>
                </button>
              </Card>
            );
          })}
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ServicePackagesModal
        isOpen={isPackagesOpen}
        onClose={() => setIsPackagesOpen(false)}
        serviceKey={selectedServiceKey}
      />
    </section>
  );
}

