'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BgEl4 from '../../../../../public/bg-el-4.png';
import ProductImage from '../../../../../public/product.png';
import AnimatedTitle from '../../ui/AnimatedTitle/AnimatedTitle';

interface ProductHeroProps {
  productName: string;
  productSlug: string;
  description: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  productName = 'Політний стек KARMA F405 V1',
  productSlug = '222',
  description = 'Політний стек спрощує монтаж та підключення електроніки в дроні, роблячи його ідеальним рішенням як для досвідчених пілотів, так і для початківців.',
}) => {
  return (
    <section className="bg-white min-h-[600px]">
      {/* Background decorative elements */}
      <div className="relative overflow-hidden">
        <Image
          src={BgEl4}
          alt=""
          className="absolute z-[1] top-0 right-0"
          width={350}
          height={360}
        />

        <div className="w-[1237px] flex flex-col items-start justify-center mx-auto pt-[40px] mb-[64px] relative z-[2]">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[var(--color-karma-red)] font-family-montserrat mb-[35px]">
            <Link href="/">Головна</Link>
            <span>&rarr;</span>
            <Link href="/catalog">Політні стеки</Link>
            <span>&rarr;</span>
            <Link href={`/catalog/${productSlug}`}>{productName}</Link>
          </div>

          {/* Main content */}
          <div className="flex items-center justify-between gap-8 flex-col lg:flex-row">
            {/* Product image */}
            <div className="flex justify-center items-center relative flex-shrink-0">
              <Image
                src={ProductImage}
                width={602}
                height={536}
                alt={`${productName} - високотехнологічне українське виробництво`}
                className="max-w-full h-auto"
              />
              <div className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 w-[493px] h-[80px] rounded-full bg-black/35 blur-2xl" />
            </div>

            {/* Product details */}
            <div className="flex flex-col gap-5 max-w-[747px] w-full">
              <AnimatedTitle 
                as="h1"
                className="text-[48px] font-medium text-black font-family-unbounded uppercase leading-tight mb-4"
              >
                {productName}
              </AnimatedTitle>

              <p className="font-montserrat text-[20px] leading-[1.7] text-[#333333] mb-8">
                {description}
                <br /><br />
                Він забезпечує стабільний політ, точне керування та ефективне розподілення потужності до моторів.
              </p>

              <span className="bg-[#ba0108] text-white font-family-montserrat text-[24px] text-center font-normal w-full py-5 border-none rounded-[25px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#9a0106] hover:-translate-y-1 active:translate-y-0 shadow-lg">
                Отримати пропозицію
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
