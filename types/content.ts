import type { ReactNode } from "react";

export interface PricingPackage {
  name: string;
  description: string;
  features: string[];
  startingPrice: number;
  href?: string;
}

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceDiscipline {
  id: string;
  tabLabel: string;
  kicker: string;
  title: string;
  lead: string;
  animation: object;
  items: ServiceItem[];
}

export interface ServiceTab {
  id: string;
  label: string;
  panel: ReactNode;
}

export interface FaqItem {
  value: string;
  triggerText: string;
  content: string;
}

export interface FaqGroup {
  id: string;
  label: string;
  items: FaqItem[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export interface ProjectTestimonial {
  text: string;
  author: string;
}

export interface PackageTitlePart {
  text: string;
  emphasis?: boolean;
}

export interface PackageFeature {
  title: string;
  description: string;
  benefits: string[];
}

export interface PackageLaunch {
  name: string;
  sector: string;
  tags: string[];
  url: string;
}

export interface PackageStat {
  value: string;
  label: string;
}

export interface PackagePrice {
  strike: string;
  discount: string;
  amount: string;
  note: string;
}

export interface PackageLandingConfig {
  eyebrow: string;
  proofLine: string;
  title: PackageTitlePart[];
  description: string;
  descriptionHighlight: string;
  price: PackagePrice;
  perks: string[];
  ctaLabel: string;
  guarantee: string;
  stats: PackageStat[];
  launches: PackageLaunch[];
  featuresTitle: string;
  featuresDescription: string;
  features: PackageFeature[];
  testimonials: Testimonial[];
  finalTitle: string;
  finalDescription: string;
  finalCtaLabel: string;
  finalGuarantee: string;
}
