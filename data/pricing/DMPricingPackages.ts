export const packages = [
  {
    name: "Basic Package",
    description: "The basic package is perfect for new businesses and brands looking to grow their online presence and attract more customers.",
    features: [
      "Basic SEO analysis and recommendations",
      "3 500-word blog posts, human-written and optimized for search engines",
      "Creation of 5 engaging social media posts per month, including visuals and captions",
      "Monthly email newsletter to engage customers",
      "Optimization for 1 local keyword to improve geographic visibility",
      "Basic website performance audit and recommendations",
      "Monthly website traffic and engagement analysis",
      "Setup and management of 1 social media platform",
      "Regular social media content scheduling and management",
      "Bi-monthly email campaign for customer engagement",
      "Basic on-page SEO optimization",
      "Monthly progress report on digital marketing efforts"
    ],
    startingPrice: 100
  },
  {
    name: "Basic Package",
    description: "The basic package is perfect for new businesses and brands looking to grow their online presence and attract more customers.",
    features: [
      "Custom SEO strategy tailored to your business goals and target audience",
      "5 1000-word blog posts, human-written and optimized for search engines",
      "Creation of 10 engaging social media posts per month, including visuals and captions",
      "Bi-weekly email marketing campaigns to nurture leads and retain customers",
      "Conversion rate optimization for website performance and user experience",
      "Bi-monthly online reputation reports and management to enhance brand presence",
      "Creation of 1 promotional videos per month for YouTube and social media",
      "Optimization for up to 2 local keywords to improve geographic visibility"
    ],
    startingPrice: 300
  },

  {
    name: "Basic Package",
    description: "The basic package is perfect for new businesses and brands looking to grow their online presence and attract more customers.",
    features: [
      "Custom SEO strategy tailored to your business goals and target audience",
      "5 1000-word blog posts, human-written and optimized for search engines",
      "Management of up to 2 PPC campaigns across search engines and social media platforms",
      "Creation of 15 engaging social media posts per month, including visuals and captions",
      "Monthly email marketing campaigns to nurture leads and retain customers",
      "Conversion rate optimization for website performance and user experience",
      "Collaboration with 1 influencer per quarter to expand brand reach",
      "Bi-monthly online reputation reports and management to enhance brand presence",
      "Creation of 2 promotional videos per month for YouTube and social media",
      "Optimization for up to 2 local keywords to improve geographic visibility"],
    startingPrice: 500
  },
  {
    name: "Premium Package",
    description: "Perfect for growing businesses and new brands looking to boost their online presence, connect with more people, and expand their reach",
    features: [
      "Custom SEO strategy tailored to your business goals and target audience",
      "10 1000-word blog posts, human-written and optimized for search engines",
      "Management of up to 3 PPC campaigns across search engines and social media platforms",
      "Creation of 20 engaging social media posts per month, including visuals and captions",
      "Bi-weekly email marketing campaigns to nurture leads and retain customers",
      "Conversion rate optimization for improved website performance and user experience",
      "Collaboration with 2 influencers per quarter to expand brand reach",
      "Monthly online reputation reports and management to enhance brand presence",
      "Creation of 4 promotional videos per month for YouTube and social media",
      "Optimization for up to 3 local keywords to improve geographic visibility"
    ],
    startingPrice: 1000
  },
  {
    name: "Local SEO",
    description: "Perfect for companies looking to increase their visibility online, connect with their audience, and get more leads with clever, data - informed strategies.",
    features: [
      "Custom SEO strategy tailored to your business goals and target audience",
      "20 1000-word blog posts, human-written and optimized for search engines",
      "Management of up to 5 PPC campaigns across search engines and social media platforms",
      "Creation of 30 engaging social media posts per month, including visuals and captions",
      "Weekly email marketing campaigns to nurture leads and retain customers",
      "Advanced conversion rate optimization for improved website performance and user experience",
      "Collaboration with 4 influencers per quarter to expand brand reach",
      "Bi-weekly online reputation reports and management to enhance brand presence",
      "Creation of 8 promotional videos per month for YouTube and social media",
      "Optimization for up to 5 local keywords to improve geographic visibility"
    ],
    startingPrice: 2000
  },
  {
    name: "Enterprise Package (custom)",
    description: "Ideal for large businesses or corporations requiring a professional, high-performance website with advanced features.",
    features: [
      "Custom SEO strategy tailored to your business goals and target audience",
      "30 1000-word blog posts, human-written and optimized for search engines",
      "Management of up to 7 PPC campaigns across search engines and social media platforms",
      "Creation of 40 engaging social media posts per month, including visuals and captions",
      "Bi-weekly email marketing campaigns to nurture leads and retain customers",
      "Advanced conversion rate optimization for website performance and user experience",
      "Collaboration with 6 influencers per quarter to expand brand reach",
      "Weekly online reputation reports and management to enhance brand presence",
      "Creation of 12 promotional videos per month for YouTube and social media",
      "Optimization for up to 7 local keywords to improve geographic visibility"
    ],
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

