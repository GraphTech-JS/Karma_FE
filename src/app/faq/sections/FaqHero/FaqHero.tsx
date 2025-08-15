import Image from "next/image";
import FaqHeroBg from "../../../../../public/faq-hero-bg.png";
import DroneLeft from "../../../../../public/drone-left.png";
import DroneRight from "../../../../../public/drone-right.png";

const FaqHero = () => {
  return (
    <section className="relative bg-white">
      <Image src={FaqHeroBg} alt="Faq Hero" />

    </section>
  );
};

export default FaqHero;