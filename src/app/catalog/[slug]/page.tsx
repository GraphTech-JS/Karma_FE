'use client';
import React from "react";
import { notFound } from "next/navigation";
import AccordionList from "@/app/components/ui/AccordionList/AccordionList";
import ProductHero from "@/app/components/sections/ProductHero/ProductHero";
import TechnicalSpecs from "@/app/components/sections/TechnicalSpecs/TechnicalSpecs";
import Benefits from "@/app/components/sections/Benefits/Benefits";
import PricingCalculator from "@/app/components/sections/PricingCalculator/PricingCalculator";
import Resources from "@/app/components/sections/Resources/Resources";
import ContactForm from "@/app/components/sections/ContactForm/ContactForm";
import ContactFormSection from "@/app/components/sections/ContactFormSection/ContactFormSection";

interface CatalogDetailsPageProps {
  params: {
    slug: string;
  };
}

const CatalogDetailsPage: React.FC<CatalogDetailsPageProps> = ({ params }) => {
  const productData = {
    name: 'Політний стек KARMA F405 V1',
    slug: params.slug,
    description: 'Політний стек спрощує монтаж та підключення електроніки в дроні, роблячи його ідеальним рішенням як для досвідчених пілотів, так і для початківців.',
  };

  if (!productData) {
    notFound();
  }

  return (
    <>
      {/* Product Hero Section */}
      <ProductHero 
        productName={productData.name}
        productSlug={productData.slug}
        description={productData.description}
      />

      {/* Technical Specifications */}
      <TechnicalSpecs />

      {/* Benefits Section */}
      <Benefits />

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* Resources/Downloads */}
      <Resources />

      {/* FAQ Section */}
      <div className="bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-4">
          <AccordionList
            className="mb-[48px]"
            title="Найпоширеніші запитання про політні стеки"
            titleClassName="!text-[48px] !text-center !uppercase !font-medium ![font-family:var(--font-unbounded)]"
            items={[
              {
                question:
                  'Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?',
                answer:
                  'Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.',
              },
              {
                question:
                  'Які основні переваги використання політного стеку KARMA F405 V1?',
                answer:
                  'Політний стек забезпечує стабільний політ, точне керування, ефективне розподілення потужності до моторів та спрощує процес збірки дрона.',
              },
              {
                question:
                  'Чи потрібні спеціальні навички для встановлення політного стеку?',
                answer:
                  'Базові навички пайки та розуміння принципів роботи дронів будуть корисними, але політний стек розроблений для спрощення процесу встановлення.',
              },
              {
                question:
                  'Яка гарантія на політний стек KARMA F405 V1?',
                answer:
                  'На всі наші продукти надається офіційна гарантія виробника. Детальну інформацію про гарантійні умови можна отримати у нашому відділі продажів.',
              },
            ]}
          />
        </div>
      </div>

 <ContactFormSection />
    </>
  );
};

export default CatalogDetailsPage;
