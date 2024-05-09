export const packages = [
  {
    name: "Basic Package",
    description: "The basic package is perfect for new businesses and brands looking to grow their online presence and attract more customers.",
    features: [
      "Up to 6 pages on your site",
      "List up to 20 products online",
      "Choose from 1 basic design sample",
      "Built on the WooCommerce platform",
      "Basic design including headers, footers, and widgets",
      "1 photo gallery",
      "Basic forms for capturing leads",
      "Integration with social media",
      "Website analytics with Google Analytics",
      "Basic SEO optimization",
      "Standard security measures",
      "Contact form for customer communication",
      "Site submission to Google",
      "Display of your location with a Google Map",
      "Basic cookie and privacy policies",
      "Support for simple products",
      "Payment gateway setup (details not included)",
      "2 weeks of support and maintenance",
      "Ready in 45 working days"
    ],
    startingPrice: 500
  },
  {
    name: "Basic Package",
    description: "The basic package is perfect for new businesses and brands looking to grow their online presence and attract more customers.",
    features: [
      "Up to 12 pages on your site",
      "List up to 50 products online",
      "Choose from 2 premium design samples",
      "Built on the WooCommerce platform",
      "Custom design including headers, footers, widgets, and mega menu",
      "2 photo galleries",
      "Page for marketing campaigns",
      "2 forms for capturing leads",
      "Integration with social media and blogs",
      "Website analytics with Google Analytics and Facebook Pixel",
      "Optimized for search engines with on-page and technical SEO",
      "Enhanced security with a premium firewall",
      "Chat support with customers through WhatsApp",
      "Site submission to Google for indexing",
      "Display of your location with a Google Map",
      "Custom cookie and privacy policies",
      "Payment gateway setup (details not included)",
      "1 month of support and maintenance",
      "Ready in 30 working days"
    ],
    startingPrice: 1000
  },

  {
    name: "Basic Package",
    description: "The basic package is perfect for new businesses and brands looking to grow their online presence and attract more customers.",
    features: [
      "Up to 20 pages on your site",
      "List up to 100 products online",
      "Choose from 3 premium design samples",
      "Built on the WooCommerce platform",
      "Custom design including headers, footers, widgets, and mega menu",
      "3 photo galleries",
      "3 forms for capturing leads",
      "Integration with social media, blogs, and email marketing",
      "Advanced website analytics with Google Analytics, Facebook Pixel, and custom tracking",
      "Comprehensive SEO optimization including on-page, technical, and off-page SEO",
      "Enhanced security with a premium firewall and SSL certificate",
      "Chat support with customers through WhatsApp and live chat integration",
      "Site submission to Google, Bing, and other search engines",
      "Display of your location with a Google Map and advanced location features",
      "Custom cookie and privacy policies compliant with GDPR and other regulations",
      "Support for simple, variable, and downloadable products",
      "Advanced payment gateway setup with multiple options",
      "3 months of support and maintenance with regular updates",
      "Ready in 21 working days"
    ],
    startingPrice: 2000
  }

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

