import { CheckCircle2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Basic',
    price: 'KSH 5,000',
    tagline: 'Starter for quick wins',
    description:
      'Perfect for small projects and simple designs that still look professional.',
    highlight: false,
    features: [
      '1 concept revision',
      'Basic design layout',
      'Standard delivery (48h–72h)',
      'Email support',
    ],
  },
  {
    name: 'Standard',
    price: 'KSH 15,000',
    tagline: 'Most popular choice',
    description:
      'A complete package for businesses that want strong visuals and consistency.',
    highlight: true,
    features: [
      '2 concept revisions',
      'Brand-aligned design system',
      'Priority delivery (24h–48h)',
      'WhatsApp support',
    ],
  },
  {
    name: 'Premium',
    price: 'KSH 35,000',
    tagline: 'For full campaigns',
    description:
      'Best for launch-ready work with deeper customization and quality.',
    highlight: false,
    features: [
      'Unlimited refinement (within scope)',
      'Advanced design & branding',
      'Fast delivery (within 24h)',
      'Dedicated support',
    ],
  },
];

const Pricing = () => {
  // Using the same WhatsApp numbers already present in ContactForm
  const whatsappA = 'https://wa.me/254704284900';
  const whatsappB = 'https://wa.me/254704284900';

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:items-center md:text-center gap-4">
          <h2 className="section-heading">Pricing Packages</h2>
          <p className="section-subheading max-w-2xl">
            Choose the package that fits your project goals. Then message us on WhatsApp to start.
          </p>
        </div>

        {/* Primary CTA row (more visible/professional) */}
        <div className="mt-10 bg-gradient-to-r from-red-50 via-white to-green-50 border border-gray-200 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-xl font-bold text-gray-900">Ready to start?</div>
              <div className="text-sm text-gray-600 mt-1">
                Tap below to message us on WhatsApp and get started immediately.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full" asChild>
                <a href={whatsappA} target="_blank" rel="noopener noreferrer">
                  Hire Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href={whatsappB} target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={
                pkg.highlight
                  ? 'border-t-4 border-t-brand-red shadow-lg'
                  : 'border border-gray-200'
              }
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <CardDescription className="text-brand-red font-semibold">
                  {pkg.tagline}
                </CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-gray-900">{pkg.price}</div>
                  <p className="mt-2 text-sm text-gray-500">{pkg.description}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start text-sm">
                      <CheckCircle2 className="h-5 w-5 text-brand-green mr-2 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    pkg.highlight
                      ? 'w-full mt-6 bg-brand-red hover:bg-brand-red/90 rounded-full'
                      : 'w-full mt-6 rounded-full'
                  }
                  variant={pkg.highlight ? 'default' : 'outline'}
                  asChild
                >
                  <a href={whatsappA} target="_blank" rel="noopener noreferrer">
                    Get this package
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

