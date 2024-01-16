
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
    
    <div className="flex h-screen relative md:flex-row md:overflow-hidden xl:px-10 md:px-2 bg-transparent mx-auto">
    <nav className="hidden md:flex mt-5 pl-2">
    <SideNav />
    </nav>
    <div className="flex-grow mt-7 md:mt-0 flex-1 w-9xl md:overflow-y-auto md:p-5 max-w-6xl mx-auto">
    <div>
    <ShuffleHero />
    </div>
    <div className="m-5 rounded-xl">
    <Pricing />
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