import FaqHero from './sections/FaqHero/FaqHero';
import FaqList from './sections/FaqList/FaqList';
import ContactFormSection from '../components/sections/ContactFormSection/ContactFormSection';
import TrustedBySection from '../components/sections/TrustedBySection/TrustedBySection';

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqList />
      <TrustedBySection />
      <ContactFormSection />
    </>
  );
};

