import Hero from "./components/Hero";
import FeaturedServices from "./components/FeaturedServices";
import Achievement from "./components/Achievement";
import Services from "./components/Services";
import HowToGetStarted from "./components/HowToGetStarted";
import InfoImageGrid from "./components/InfoImageGrid";
import PartnersCarousel from "./components/PartnersCarousel";
import Faq from "./components/Faq";
import GlobalCoverage from "./components/GlobalCoverage";
import HiddenChargesSection from "./components/HiddenCharges";
import CostComparision from "./components/CostComparision";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <main>
        <Hero />
        <FeaturedServices />
        <PartnersCarousel />
        <Achievement />
        <GlobalCoverage />
        <Services />
        <HowToGetStarted />
        {/* <CostComparision /> */}
        <HiddenChargesSection />
        <InfoImageGrid />
        <Faq />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
