import React from 'react';
import Animation from './Animation.json';
import ServiceDetail, { type ServiceItem } from './ServiceDetail';
import {
  Smartphone,
  Settings,
  LayoutTemplate,
  BookMarked,
  FolderSync,
  Code,
  Braces,
} from 'lucide-react';

const items: ServiceItem[] = [
  { name: 'Mobile app design', description: 'Intuitive, considered interfaces for iOS and Android.', icon: Smartphone },
  { name: 'Customisation', description: 'Tailoring the build to fit the way your team actually works.', icon: Settings },
  { name: 'Frontend development', description: 'Responsive, accessible, interactive front ends.', icon: LayoutTemplate },
  { name: 'WordPress', description: 'Flexible, easy-to-manage sites on a familiar platform.', icon: BookMarked },
  { name: 'Headless WordPress', description: 'Decoupled architecture for speed and editorial freedom.', icon: FolderSync },
  { name: 'Custom themes', description: 'Bespoke themes designed around your brand.', icon: Code },
  { name: 'SaaS platforms', description: 'Scalable, cloud-based products built for growth.', icon: Braces },
];

function WebDesign() {
  return (
    <ServiceDetail
      kicker="Design & build"
      title="Websites & applications"
      lead="From a focused marketing site to a full product, we design and engineer interfaces that are fast, accessible and genuinely pleasant to use."
      animation={Animation}
      items={items}
    />
  );
}

export default WebDesign;
