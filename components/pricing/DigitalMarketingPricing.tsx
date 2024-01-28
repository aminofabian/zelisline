import Contact from "@/app/contact/page";
import ContactPage from "../ContactPage";
import ButtonAlert from "../myComponents/ButtonAlert";
import {packages} from "@/data/pricing/DMPricingPackages";

export default function Pricing() {
  
  
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
    <div className="w-full custom-clip">
    <div className= "bg-cover rounded-e-xl py-7 border-white">
    <div className="max-w-7xl mx-auto">
    <div className="w-9xl clip-angled-both ">
    <h2 className="text-3xl font-semibold text-center mb-2 text-sky-600 p-3 transition-all justify-center">
    CHOOSE YOUR PACKAGE
    </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-6xl">
    {packages.map((packageItem, index) => (
      <div key={index} className="bg-green-50 shadow-md p-4 border-l-8 border-flourish-800 hover:bg-slate-100 rounded-r-2xl rounded-2xl">
      <h3 className="text-xl font-semibold mb-4 text-slate-600">{packageItem.name}</h3>
      <p className="text-gray-600 mb-4">{packageItem.description}</p>
      <div className="flex justify-center mb-10">
      <div className="border-[1px] border-orange-500  hover:bg-cyan-150 text-orange-500 px-5 hover:scale-125 py-2 mt-4 inline rounded-md">
      <ButtonAlert
      triggerText="Get Started"
      title="Are you absolutely sure?"
      descriptionComponent="Fill in the form"
      // {<Contact />}
      cancelText="Cancel"
      continueText="Continue"
      />
      </div>
      </div>
      <p className="text-sm font-md text-orange-500 hover:translate-x-3 scale-70">${packageItem.startingPrice}</p>
      <ul className="text-slate-500 mb-4">
      {packageItem.features.map((feature, i) => (
        <li key={i} className="flex items-center mb-2 pl-5">
        <svg
        className="w-4 h-4 mr-2 flex-shrink-0 text-cyan-400 hover:animate-spin"
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
      