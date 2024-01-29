
import ContactPage from '@/components/ContactPage';
import ShuffleHero from '@/components/ShuffleHero';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import SideNav from '@/components/SideNav';
import * as items from '@/data/faq';
import MyAccordion from '@/components/myComponents/MyAccordion';
import DigitalMarketingPricing from '@/components/pricing/DigitalMarketingPricing';



function Seo() {
  const buttons = [
    { link: "/blog", text: "Write Us" },
    { link: "/contact", text: "Get a Free SEO Audit" },
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
    subTitle="Build a kick-ass brand with our cutting-edge SEO Services in Kenya."
    title="WE PROMISE TO GROW YOUR WEBSITE TRAFFIC, OR YOU DON'T PAY. PARTNER WITH THE HIGHEST-RATED DIGITAL MARKETING AGENCY IN KENYA"
    bgImage="/bg.jpg"
    buttons={buttons}
    />
    
    </div>
    <div className="m-5 rounded-xl">
    <DigitalMarketingPricing />
    </div>
    <div>
    <Services />
    </div>
    <div className="w-[100dvh] mb-10 border-[1px]">
    <MyAccordion
    items= {items.seoFaqs}
    />
    </div>
    <div>
    <ContactPage />
    </div>
    <Footer />
    </div>
    </div>
    </>
    )
  }
  
  
  export default Seo;