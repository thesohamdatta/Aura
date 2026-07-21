import {SiteNav} from '../components/layout/TopNav';
import {Footer} from '../components/layout/Footer';
import {Hero} from '../components/landing/Hero';
import {Capabilities} from '../components/landing/Capabilities';
import {HowItWorks} from '../components/landing/HowItWorks';
import {Thesis} from '../components/landing/Thesis';
import {ProductDetails} from '../components/landing/ProductDetails';
import {OpenSource} from '../components/landing/OpenSource';
import {Research} from '../components/landing/Research';
import {Team} from '../components/landing/Team';
import {FAQ} from '../components/landing/FAQ';

export function LandingPage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Capabilities />
        <HowItWorks />
        <Thesis />
        <ProductDetails />
        <OpenSource />
        <Research />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
