
import ContactPage from '@/components/ContactPage';
import ShuffleHero from '@/components/ShuffleHero';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import SideNav from '@/components/SideNav';
import * as items from '@/data/faq';
import MyAccordion from '@/components/myComponents/MyAccordion';
import WebDevelopersPricing from '@/components/pricing/WebDevelopersPricing';
import FooterRev from '@/components/FooterRev';
import EcommercePricing from '@/components/pricing/EcommercePricing';



function EcommercePage () {
  const buttons = [
    { link: "/contact", text: "Talk to Us" },
    { link: "/contact", text: "Get a Quote" },
  ];
  
  return (
    <>
    <div className="flex h-screen relative md:flex-row md:overflow-hidden xl:px-10 md:px-2 mx-auto">
    <nav className="hidden md:flex mt-5 pl-2">
    <SideNav />
    </nav>
    <div className="flex-grow mt-7 md:mt-0 flex-1 w-9xl md:overflow-y-auto md:p-5 max-w-6xl mx-auto">
    <div>
    <ShuffleHero
    subTitle=" Ecommerce Website Design and Development"
    title=" The Leading eCommerce Website Design & Development Service in Kenya"
    bgImage="/bg.jpg"
    buttons={buttons}
    />
    
    </div>
    <div className="m-5 rounded-xl">
    <EcommercePricing />
    </div>
    <div>
    <Services />
    </div>
    <div className="w-[100dvh] mb-10 border-[1px]">
    <MyAccordion
    items={items.webDesignFaqs}
    />
    </div>
    <div>
    <ContactPage />
    </div>
    <FooterRev />
    </div>
    </div>
    </>
  )
}


export default EcommercePage;