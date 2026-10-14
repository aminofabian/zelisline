import type { PackageLandingConfig } from "@/types/content";

export const personalWebsitePackage: PackageLandingConfig = {
  eyebrow: "Personal website package",
  proofLine: "Trusted by 500+ Professionals",
  title: [
    { text: "Launch Your Professional Website in Just" },
    { text: "7 Days", emphasis: true },
  ],
  description:
    "Get a custom-designed, SEO-optimized website that converts visitors into clients - ",
  descriptionHighlight: "or your money back",
  price: {
    strike: "KES 35,000/month",
    discount: "28% OFF",
    amount: "KES 25,000",
    note: "for a fully functional website",
  },
  perks: ["Launch in 7 days or less", "30-day money-back guarantee", "Unlimited revisions"],
  ctaLabel: "Get started now — limited time offer",
  guarantee: "30-day money-back guarantee · No hidden fees · Cancel anytime",
  stats: [
    { value: "50+", label: "Websites launched" },
    { value: "98%", label: "Client satisfaction" },
    { value: "7 days", label: "Average delivery" },
  ],
  launches: [
    { name: "Eppico Interiors", sector: "Interior Design & Decoration", tags: ["Modern Design", "Portfolio", "E-commerce"], url: "https://go.eppicointeriors.co.ke" },
    { name: "Verto FX", sector: "Financial Services Platform", tags: ["Fintech", "Web App", "Corporate"], url: "https://www.vertofx.com/" },
    { name: "Astra Dental", sector: "Dental Healthcare Services", tags: ["Healthcare", "Booking System", "Professional"], url: "https://astradental.co.ke/" },
    { name: "Style Parfait", sector: "Fashion & Lifestyle", tags: ["E-commerce", "Fashion", "Lifestyle"], url: "https://estyleparfait.co.ke" },
    { name: "Mavuno Church", sector: "Religious Organization", tags: ["Non-Profit", "Events", "Community"], url: "https://mavunochurch.org" },
    { name: "Style Connection", sector: "Fashion Retail", tags: ["E-commerce", "Fashion", "Retail"], url: "https://styleconnection.co.ke" },
  ],
  featuresTitle: "Everything You Need to Succeed Online",
  featuresDescription:
    "Our all-inclusive package is designed to give you everything you need to establish a strong online presence and attract more clients.",
  features: [
    {
      title: "Professional Design",
      description: "Stand out with modern, mobile-friendly layouts proven to engage visitors",
      benefits: ["Customizable color schemes", "Mobile-first design", "Professional typography"],
    },
    {
      title: "Custom Domain",
      description: "Get a memorable web address that builds your brand",
      benefits: ["Free domain for 1 year", "SSL security included", "Professional email setup"],
    },
    {
      title: "5 Essential Pages",
      description: "Everything you need to showcase your work and attract clients",
      benefits: ["Optimized content structure", "Call-to-action optimization", "Contact form included"],
    },
    {
      title: "SEO Optimization",
      description: "Get found by your target audience on Google",
      benefits: ["Keyword research", "Meta tags setup", "Google Analytics integration"],
    },
    {
      title: "Premium Hosting",
      description: "Fast, secure hosting with 99.9% uptime guarantee",
      benefits: ["Daily backups", "Security monitoring", "24/7 support"],
    },
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content: "My website started generating leads within the first week. Best investment I've made for my business!",
    },
    {
      name: "James Smith",
      role: "Professional Photographer",
      content: "The process was smooth and the results exceeded my expectations. My portfolio has never looked better.",
    },
  ],
  finalTitle: "Ready to Transform Your Online Presence?",
  finalDescription:
    "Join 500+ successful professionals who've already taken their business to the next level with our website package.",
  finalCtaLabel: "Start your 7-day website journey",
  finalGuarantee: "30-day money-back guarantee · No hidden fees · Cancel anytime",
};

export const smallBusinessPackage: PackageLandingConfig = {
  eyebrow: "Small business package",
  proofLine: "Trusted by 200+ Small Businesses",
  title: [
    { text: "Launch Your Business Website with Our" },
    { text: "Templated Solution", emphasis: true },
  ],
  description: "Get a professional, feature-rich website perfect for small businesses - ",
  descriptionHighlight: "at an affordable price",
  price: {
    strike: "KES 65,000/month",
    discount: "23% OFF",
    amount: "KES 50,000",
    note: "per month",
  },
  perks: ["Choose from premium templates", "10 custom pages included", "Social media integration"],
  ctaLabel: "Start your business website now",
  guarantee: "30-day money-back guarantee · No hidden fees · Cancel anytime",
  stats: [],
  launches: [],
  featuresTitle: "Everything Your Business Needs Online",
  featuresDescription:
    "Our small business package includes all the essential features to establish your professional online presence",
  features: [
    {
      title: "Templated Design",
      description: "Choose from our collection of professional pre-made layouts",
      benefits: ["Modern, responsive templates", "Easy customization", "Industry-specific designs"],
    },
    {
      title: "10 Essential Pages",
      description: "Complete website structure with all necessary pages",
      benefits: ["Home & About pages", "Services & Portfolio", "Blog & Contact form"],
    },
    {
      title: "SEO Setup",
      description: "Get found by your target audience online",
      benefits: ["Keyword optimization", "Meta tags setup", "Search console integration"],
    },
    {
      title: "Social Integration",
      description: "Connect with your audience across platforms",
      benefits: ["Social media links", "Share buttons", "Feed integration"],
    },
    {
      title: "Domain & Hosting",
      description: "Everything you need to go live",
      benefits: ["Custom domain name", "Fast, secure hosting", "SSL certificate"],
    },
    {
      title: "Content Support",
      description: "Help with your website content",
      benefits: ["Content structure", "Basic copywriting", "Image optimization"],
    },
  ],
  testimonials: [
    {
      name: "David Kamau",
      role: "Restaurant Owner",
      content: "The templated approach saved us time and money while still giving us a professional look. Exactly what we needed!",
    },
    {
      name: "Jane Muthoni",
      role: "Retail Shop Owner",
      content: "Perfect solution for our small business. The social media integration really helped boost our online presence.",
    },
  ],
  finalTitle: "Ready to Grow Your Business Online?",
  finalDescription:
    "Join 200+ successful small businesses who've transformed their online presence with our templated solution.",
  finalCtaLabel: "Get your business online today",
  finalGuarantee: "30-day money-back guarantee · No hidden fees · Cancel anytime",
};
