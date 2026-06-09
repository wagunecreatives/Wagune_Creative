import { useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export type ServiceKey = 'social' | 'web' | 'graphic';


type Tier = {
  name: string;
  price: string;
  details: string;
  features: string[];
};

type ServicePackageConfig = {
  title: string;
  fromPrice: string;
  ctaLabel: string;
  tiers: Tier[];
};

const whatsapp = 'https://wa.me/254704284900';


const ServicePackagesModal = ({

  isOpen,
  onClose,
  serviceKey,
}: {
  isOpen: boolean;
  onClose: () => void;
  serviceKey: ServiceKey;
}) => {
  const config: ServicePackageConfig = useMemo(() => {
    if (serviceKey === 'social') {
      return {
        title: 'Social Media Management',
        fromPrice: 'From KSH 15,000',
        ctaLabel: 'Hire this package',
        tiers: [
          {
            name: 'Starter',
            price: 'KSH 15,000/month',
            details: 'Ideal for small businesses starting online.',
            features: [
              '12 posts per month',
              'Content calendar',
              'Basic graphic designs',
              'Facebook & Instagram management',
              'Monthly performance report',
            ],
          },
          {
            name: 'Professional',
            price: 'KSH 30,000/month',
            details: 'For growing businesses that need consistent engagement.',
            features: [
              '20 posts per month',
              'Custom branded graphics',
              'Facebook, Instagram & TikTok management',
              'Community engagement',
              'Monthly analytics report',
              'Content strategy consultation',
            ],
          },
          {
            name: 'Premium',
            price: 'KSH 50,000/month',
            details: 'Complete social media growth solution.',
            features: [
              'Daily posting',
              'Advanced content strategy',
              'Professional graphic design',
              'Community management',
              'Paid ads management',
              'Monthly strategy meetings',
              'Detailed analytics & growth reports',
            ],
          },
        ],
      };
    }

    if (serviceKey === 'graphic') {
      return {
        title: 'Graphic Design',
        fromPrice: 'From KSH 300',
        ctaLabel: 'Hire this package',
        tiers: [
          {
            name: 'Starter',
            price: 'KSH 1,000',
            details: 'Perfect for small businesses.',
            features: [
              '1 Logo Design',
              '1 Flyer Design',
              '1 Poster Design',
              '2 Revisions',
            ],
          },
          {
            name: 'Professional',
            price: 'KSH 2,000',
            details: 'Ideal for businesses running campaigns.',
            features: [
              '1 Logo Design',
              '2 Flyers',
              '2 Posters',
              '5 Certificate Designs',
              'Unlimited minor revisions',
            ],
          },
          {
            name: 'Premium',
            price: 'KSH 5,000',
            details: 'Complete business branding.',
            features: [
              'Professional Logo Design',
              'Business Flyer Set',
              'Marketing Posters',
              'Social Media Graphics',
              'Brand Color Guide',
              'Priority Support',
            ],
          },
        ],
      };
    }

    return {
      title: 'Web Development',
      fromPrice: 'From KSH 25,000',
      ctaLabel: 'Hire this package',
      tiers: [
        {
          name: 'Starter Website',
          price: 'KSH 25,000',
          details: 'Perfect for startups and personal brands.',
          features: [
            'Up to 5 pages',
            'Mobile responsive design',
            'Contact form',
            'Basic SEO setup',
            'SSL security',
            '1 month support',
          ],
        },
        {
          name: 'Business Website',
          price: 'KSH 50,000',
          details: 'Ideal for growing businesses.',
          features: [
            'Up to 15 pages',
            'Custom UI design',
            'Blog integration',
            'Advanced SEO',
            'WhatsApp integration',
            'Google Maps integration',
            '3 months support',
          ],
        },
        {
          name: 'Premium Web Solution',
          price: 'KSH 100,000+',
          details: 'For organizations and enterprises.',
          features: [
            'Unlimited pages',
            'Custom web application',
            'Admin dashboard',
            'User authentication',
            'Database integration',
            'API integrations',
            'Performance optimization',
            '6 months support',
          ],
        },
      ],
    };
  }, [serviceKey]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{config.title}</DialogTitle>
          <DialogDescription>{config.fromPrice}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.name === 'Professional' || tier.name === 'Business Website'
                  ? 'border-t-4 border-t-brand-red shadow-lg'
                  : 'border border-gray-200 shadow-sm'
              }
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-bold leading-tight">{tier.name}</div>
                    <div className="text-brand-red font-semibold mt-1">{tier.details}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-3xl font-bold text-gray-900">{tier.price}</div>
                </div>

                <ul className="mt-4 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start text-sm">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mr-2 mt-0.5" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    tier.name === 'Professional' || tier.name === 'Business Website'
                      ? 'w-full mt-6 bg-brand-red hover:bg-brand-red/90 rounded-full'
                      : 'w-full mt-6 rounded-full'
                  }
                  variant={
                    tier.name === 'Professional' || tier.name === 'Business Website'
                      ? 'default'
                      : 'outline'
                  }
                  asChild
                >
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                    {config.ctaLabel}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePackagesModal;

