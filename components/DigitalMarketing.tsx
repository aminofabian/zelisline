import React from 'react';
import Animation2 from './Animation2.json';
import ServiceDetail, { type ServiceItem } from './ServiceDetail';
import {
  Globe,
  Share2,
  MousePointerClick,
  FileText,
  Mail,
} from 'lucide-react';

const items: ServiceItem[] = [
  { name: 'SEO', description: 'Earn visibility in the searches that matter to you.', icon: Globe },
  { name: 'Social media', description: 'Build an audience and keep it engaged.', icon: Share2 },
  { name: 'Paid advertising', description: 'Targeted campaigns with measurable returns.', icon: MousePointerClick },
  { name: 'Content marketing', description: 'Writing and resources that attract and retain customers.', icon: FileText },
  { name: 'Email marketing', description: 'Campaigns that nurture relationships over time.', icon: Mail },
];

const DigitalMarketing = () => {
  return (
    <ServiceDetail
      kicker="Growth"
      title="Digital marketing & SEO"
      lead="Strategy, content and campaigns that put your business in front of the right people — and turn attention into enquiries."
      animation={Animation2}
      items={items}
    />
  );
};

export default DigitalMarketing;
