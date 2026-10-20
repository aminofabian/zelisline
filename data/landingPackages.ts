import type { PackageLandingConfig } from "@/types/content";

export const personalWebsitePackage: PackageLandingConfig = {
  eyebrow: "Personal website package",
  proofLine: "For independent professionals",
  title: [
    { text: "A professional site, ready in" },
    { text: "seven days.", emphasis: true },
  ],
  description: "A custom site, written and structured so the right clients can find you. ",
  descriptionHighlight: "Thirty days to change your mind.",
  price: {
    strike: "KES 35,000/month",
    discount: "Introductory rate",
    amount: "KES 25,000",
    note: "for a fully functional website",
  },
  perks: ["Launch in 7 days or less", "30-day money-back guarantee", "Unlimited revisions"],
  ctaLabel: "Begin this package",
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
  featuresTitle: "What is included",
  featuresDescription: "Design, domain, pages, search setup and hosting. One scope, agreed before we begin.",
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
      content: "Enquiries started arriving in the first week. The site looks like the practice I wanted people to find.",
    },
    {
      name: "James Smith",
      role: "Professional Photographer",
      content: "The process was smooth and the results exceeded my expectations. My portfolio has never looked better.",
    },
  ],
  finalTitle: "When you are ready",
  finalDescription: "Tell us about the practice. We will confirm the pages, the timeline and the date we can begin.",
  finalCtaLabel: "Begin this package",
  finalGuarantee: "30-day money-back guarantee · No hidden fees · Cancel anytime",
};

export const smallBusinessPackage: PackageLandingConfig = {
  eyebrow: "Small business package",
  proofLine: "For shops, clinics and local teams",
  title: [
    { text: "A complete website for a" },
    { text: "small business.", emphasis: true },
  ],
  description: "Ten pages, search setup, hosting and a template chosen for your trade. ",
  descriptionHighlight: "Thirty days to change your mind.",
  price: {
    strike: "KES 65,000/month",
    discount: "Introductory rate",
    amount: "KES 50,000",
    note: "per month",
  },
  perks: ["Choose from premium templates", "10 custom pages included", "Social media integration"],
  ctaLabel: "Begin this package",
  guarantee: "30-day money-back guarantee · No hidden fees · Cancel anytime",
  stats: [],
  launches: [],
  featuresTitle: "What the package covers",
  featuresDescription: "A template, ten pages, search setup, social links, a domain and help with the words.",
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
      content: "The template saved us time, and the site still looks like the restaurant. That was the brief.",
    },
    {
      name: "Jane Muthoni",
      role: "Retail Shop Owner",
      content: "Perfect solution for our small business. The social media integration really helped boost our online presence.",
    },
  ],
  finalTitle: "Tell us about the business",
  finalDescription: "We will confirm the template, the pages and when the site can go live.",
  finalCtaLabel: "Begin this package",
  finalGuarantee: "30-day money-back guarantee · No hidden fees · Cancel anytime",
};
