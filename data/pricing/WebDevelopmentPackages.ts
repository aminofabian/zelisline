export const packages = [
  {
    name: "Basic Package",
    description: "Perfect for companies looking to increase their visibility online, connect with their audience, and get more leads with clever, data - informed strategies.",
    features: [
      "Up to 3 pages",
      "Basic theme",
      "Standard website editor",
      "Mobile-friendly design",
      "Standard headers and footers",
      "No photo galleries",
      "Contact form",
      "No social media integration",
      "Basic website analytics",
      "Basic SEO",
      "Standard security measures",
      "No chat support",
      "Google listing",
      "Location display with Google Maps",
      "Ready in 45 days",
      "No additional SEO services"],
    startingPrice: 200
  },
  {
    name: "Standard Package",
    description: "Perfect for growing businesses and new brands looking to boost their online presence, connect with more people, and expand their reach",
    features: [
      "Up to 5 pages",
      "Choice of basic theme",
      "Standard website editor",
      "Mobile-friendly design",
      "Standard headers and footers",
      "No photo galleries",
      "Contact form",
      "Social media links",
      "Basic website analytics",
      "Basic SEO",
      "Standard security measures",
      "No chat support",
      "Google listing",
      "Location display with Google Maps",
      "Ready in 30 days",
      "No additional SEO services"],
    startingPrice: 300
  },

  {
    name: "Professional Package",
    description: "The basic website design package presents perfect WordPress websites for new brands and small businesses.",
    features: [
      "Up to 18 pages",
      "Choice of 2 premium themes",
      "Use WP Bakery or Elementor for editing",
      "Looks great on any device",
      "Customized design for headers, footers, and widgets",
      "Includes 2 photo galleries",
      "One page just for campaigns",
      "Two forms to grab visitor info",
      "Linked with social media and blogs",
      "Tracks visitors with analytics",
      "On-page SEO to get noticed",
      "Top-notch security against hackers",
      "Chat with visitors via WhatsApp",
      "We'll get you listed on Google",
      "Shows your location with a Google Map",
      "Ready in just 14 days",
      "Can add basic SEO for extra help"
    ],
    startingPrice: 500
  },
  {
    name: "Premium Package",
    description: "The basic package is perfect for new businesses and brands looking to grow their online presence and attract more customers.",
    features: [
      "Up to 30 pages included",
      "Everything under the basic plan",
      "5 campaign landing pages for marketing projects",
      "5 forms on the website to gather leads",
      "Integrated with social media and blogs for easy sharing",
      "Every page optimized for search engines and technical details",
      "Up to 50 products listed in your e-commerce shop",
      "Embed up to 20 PDFs directly on your site",
      "Show unlimited locations on Google Maps",
      "1 month of support and maintenance included",
      "Everything's ready in 30 working days",
      "Basic SEO to help site rank better"],
    startingPrice: 1000
  },

  {
    name: "Advanced Package",
    description: "The basic package is perfect for new businesses and brands looking to grow their online presence and attract more customers.",
    features: [
      "Up to 50 pages on the website, plenty for all needs",
      "Show off up to 50 photos or have fancy galleries",
      "Unlimited pages for marketing campaigns",
      "Unlimited forms to grab visitor info",
      "Ongoing technical and SEO optimization",
      "Chat support through WhatsApp and a clever chatbot",
      "Ability to add ads, banners, and promotions",
      "Inclusion in Bing and Google search results",
      "E-commerce shop for up to 100 items",
      "Up to 100 PDFs can be added",
      "No limit on showing maps or locations",
      "Three months of support and maintenance included",
      "Ready in just 60 working days",
      "Additional SEO services to boost online visibility"
    ],
    startingPrice: 2000
  },

  {
    name: "Enterprise Package (custom)",
    description: "Ideal for large businesses or corporations requiring a professional, high-performance website with advanced features.",
    features: [
      "Custom design with unlimited pages and sections",
      "Advanced forms with integration to CRM systems",
      "Advanced SEO with keyword research, on-page optimization, and link building",
      "Top-notch security with SSL, firewall, and regular security audits",
      "Live chat support with AI ChatBot and WhatsApp integration",
      "Full Google and Bing optimization with search engine submission",
      "Interactive maps with custom overlays and directions",
      "Custom e-commerce solution with unlimited products and payment gateways",
      "Document management system for PDFs and media assets",
      "Continuous support and maintenance with regular updates and improvements",
      "Fast turnaround time with dedicated project management",
      "Expert SEO services for ongoing optimization and visibility"],
    startingPrice: 5000
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

