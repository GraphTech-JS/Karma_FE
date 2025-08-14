import HeroSection from "./components/sections/HeroSection/HeroSection";
import AboutSection from "./components/sections/AboutSection/AboutSection";
import ResultsSection from "./components/sections/ResultsSection/ResultsSection";
import ProductCatalogSection from "./components/sections/ProductCatalogSection/ProductCatalogSection";
import AdvantagesSection from "./components/sections/AdvantagesSection/AdvantagesSection";
import OurProductsSection from "./components/sections/OurProductsSection/OurProductsSection";
import TrustedBySection from "./components/sections/TrustedBySection/TrustedBySection";
import ContactFormSection from "./components/sections/ContactFormSection/ContactFormSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResultsSection />
      <ProductCatalogSection />
      <AdvantagesSection />
      <OurProductsSection />
      <TrustedBySection />
      <ContactFormSection />
    </>
  );
}
