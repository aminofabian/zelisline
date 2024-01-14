import Contact from "@/app/contact/page";
import ContactPage from "./ContactPage";
import ButtonAlert from "./myComponents/ButtonAlert";

export default function Pricing() {
  
  const packages = [
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
  return (
    <>
    <div className="bg-slate-100 custom-clip">
    <div className= "bg-cover rounded-e-xl py-7 border-cyan-50">
    <div className="max-w-full mx-auto">
    <div className="w-full clip-angled-both ">
    <h2 className="text-3xl font-bold text-center mb-2 text-flourish-500 p-3 hover:animate-bounce-custom transition-all justify-center">
    CHOOSE YOUR PACKAGE
    </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
    {packages.map((packageItem, index) => (
      <div key={index} className="bg-cyan-50 shadow-md p-6 border-l-8 border-flourish-800 rounded-r-2xl hover:translate-x-7 clip-angled-both">
      <h3 className="text-xl font-semibold mb-4">{packageItem.name}</h3>
      <p className="text-gray-600 mb-4">{packageItem.description}</p>
      <div className="flex justify-center mb-10">
      <div className="border-2 border-cyan-500  hover:bg-cyan-150 text-cyan-500 font-semibold px-5 hover:scale-125 py-2 mt-4 inline animate-bounce-custom">
      <ButtonAlert
      triggerText="Get Started"
      title="Are you absolutely sure?"
      descriptionComponent={<Contact />}
      cancelText="Cancel"
      continueText="Continue"
      />
      </div>
      </div>
      <p className="text-sm font-md text-cyan-400 hover:translate-x-3 scale-70">${packageItem.startingPrice}</p>
      <ul className="text-gray-600 mb-4">
      {packageItem.features.map((feature, i) => (
        <li key={i} className="flex items-center mb-2 pl-5">
        <svg
        className="w-4 h-4 mr-2 flex-shrink-0 text-slate-300 hover:animate-spin"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        >
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" />
        <polyline points="32,50 45,65 70,35" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        </svg>
        
        <span>{feature}</span>
        </li>
        ))}
        </ul>
        </div>
        ))}
        </div>
        </div>
        </div>
        </div>
        </>
        )
      }
      