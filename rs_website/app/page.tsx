import Hero from "./components/Hero";
import Achievement from "./components/Achievement";
import Services from "./components/Services";
import HowToGetStarted from "./components/HowToGetStarted";
import InfoImageGrid from "./components/InfoImageGrid";
import PartnersCarousel from "./components/PartnersCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <main>
        <Hero />
        <PartnersCarousel />

        <Achievement />

        <Services />
        <HowToGetStarted />
        <InfoImageGrid />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
