import React from 'react';
import Animation1 from './Animation1.json';
import ServiceDetail, { type ServiceItem } from './ServiceDetail';
import {
  Palette,
  Image as ImageIcon,
  Scissors,
  Layout,
  PenTool,
} from 'lucide-react';

const items: ServiceItem[] = [
  { name: 'Logo design', description: 'Distinct, memorable marks for your brand.', icon: Palette },
  { name: 'Poster design', description: 'Eye-catching collateral for events and campaigns.', icon: ImageIcon },
  { name: 'Cutting & editing', description: 'Precise retouching for a polished finish.', icon: Scissors },
  { name: 'Layout design', description: 'Clear, well-structured print and screen layouts.', icon: Layout },
  { name: 'Digital illustration', description: 'Original artwork that sets you apart.', icon: PenTool },
];

function GraphicalDesign() {
  return (
    <ServiceDetail
      kicker="Brand"
      title="Graphic & brand design"
      lead="Visual identity work that gives your business a consistent, confident presence across every surface it touches."
      animation={Animation1}
      items={items}
    />
  );
}

export default GraphicalDesign;
