export const packages = [
  {
    name: "Personal Website Package (templated)",
    description: "This package is perfect for individuals who want to create a basic website to showcase their portfolio or personal information.",
    features: [
      "Templated design with option to choose from pre-made layouts",
      "Custom domain name",
      "Up to 5 pages including home, about, services, portfolio, and contact",
      "SEO setup",
      "Hosting included"
    ],
    startingPrice: 250
  },
  {
    name: "Small Business Package (templated)",
    description: "This package is ideal for small businesses looking for a professional online presence without breaking the bank.",
    features: [
      "Templated design with option to choose from pre-made layouts",
      "Custom domain name",
      "Up to 10 pages including home, about, services, portfolio, blog, and contact",
      "SEO setup",
      "Social media integration",
      "Contact form setup",
      "Hosting included"
    ],
    startingPrice: 500
  },
  {
    name: "E-Commerce Website Package (custom)",
    description: "Perfect for businesses looking to sell products online with a custom design tailored to their brand.",
    features: [
      "Custom website design with unlimited revisions",
      "Domain name registration",
      "Up to 20 product pages including home, about, services, portfolio, blog, and contact",
      "SEO setup",
      "Social media integration",
      "Payment gateway integration",
      "Shopping cart setup and customization",
      "Hosting included"
    ],
    startingPrice: 1000
  },
  {
    name: "Enterprise Package (custom)",
    description: "Ideal for large businesses or corporations requiring a professional, high-performance website with advanced features.",
    features: [
      "Custom website design with unlimited revisions",
      "Unlimited pages and subpages",
      "SEO setup",
      "Payment gateway integration",
      "Advanced security measures for data protection",
      "Content management system (CMS) integration for easy website updates",
    ],
    startingPrice: 2000
  },
  {
    name: "Maintenance Package (monthly)",
    description: "Perfect for individuals or businesses needing ongoing maintenance and updates for their existing website.",
    features: [
      "Regular software updates for optimal performance",
      "Content updates and changes (up to 5 hours per month)",
      "Website backups in case of issues",
      "Technical support for website-related inquiries"
    ],
    startingPrice: 100 // Per month
  },
  {
    name: "Additional Services",
    description: "We also offer these additional services for a more personalized and comprehensive web design experience.",
    features: [
      "Logo design",
      "Branding and identity development",
      "Custom graphics a",
      "Copywriting and content creation",
      "Photography and videog",
    ],
    startingPrice: 50// Per month
  },
];
interface Package {
  name: string;
  description: string;
  features: string[];
  startingPrice: number;
}

interface Props {
  packages: Package[];
}

