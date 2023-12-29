
import ContactPage from '@/components/ContactPage';
import Pricing from '@/components/Pricing';
import ShuffleHero from '@/components/ShuffleHero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import SideNav from '@/components/SideNav';

function HomePage() {
  return (
    <>
    
    <div className="flex h-screen relative md:flex-row md:overflow-hidden xl:px-20 md:px-5 bg-transparent mx-auto">
    <nav className="hidden md:flex">
    <SideNav />
    </nav>
    <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p- md:p-12 max-w-7xl mx-auto animate-bounce-custom">
    <div>
    <ShuffleHero />
    </div>
    <div className="m-5 rounded-xl">
    <Pricing />
    </div>
    <div className="rounded-3xl">
    <WhyChooseUs />
    </div>
    <div>
    <Services />
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
  
  export default HomePage;