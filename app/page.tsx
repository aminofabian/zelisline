
import ContactPage from '@/components/ContactPage';
import Pricing from '@/components/pricing/Pricing';
import ShuffleHero from '@/components/ShuffleHero';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import SideNav from '@/components/SideNav';
import * as items from '@/data/faq';
import MyAccordion from '@/components/myComponents/MyAccordion';
import { TabsDemo } from '@/components/myComponents/Tabs';



function HomePage() {
  const buttons = [
    { link: "/contact", text: "Write Us" },
    { link: "/blog", text: "Read our Blog" },
  ];
  
  return (
    <>
    <div className="flex h-screen relative md:flex-row md:overflow-hidden xl:px-10 md:px-2 bg-transparent mx-auto">
    <nav className="hidden md:flex mt-5 pl-2">
    <SideNav />
    </nav>
    <div className="flex-grow mt-7 md:mt-0 flex-1 w-9xl md:overflow-y-auto md:p-5 max-w-6xl mx-auto">
    <div>
    <ShuffleHero
    subTitle="Driving Growth from Series A to IPO"
    title="YOUR ONE-STOP-SHOP FOR WEB DEVELOPMENT AND DIGITAL MARKETING SERVICES IN KENYA"
    bgImage="/bg.jpg"
    buttons={buttons}
    />
    
    </div>
    <div className="m-5 rounded-xl">
    <Pricing />
    </div>
    <div>
    <Services />
    </div>
    <div className="w-7xl justify-center mb-5 mt-0 pt-0 h-fit overflow-y-auto">
    <TabsDemo />
    </div>
    <div className="w-7xl mt-10">
    <ContactPage />
    </div>
    <Footer />
    </div>
    </div>
    </>
    )
  }
  
  
  export default HomePage;