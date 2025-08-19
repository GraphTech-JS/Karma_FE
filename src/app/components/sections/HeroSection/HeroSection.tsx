'use client';
import React from 'react';
import Image from 'next/image';
import Stack from '../../../../../public/stack.png';
import BgEl1 from '../../../../../public/bg-el-1.png';
import BgEl2 from '../../../../../public/bg-el-2.png';

const HeroSection = () => {
  return (
    <section className='bg-white min-h-[600px] relative overflow-hidden py-16 flex justify-center items-center'>
      {/* Background decorative elements */}
      <Image
        src={BgEl1}
        alt=''
        className='absolute z-[1] top-0 right-0 w-[350px] h-auto'
        width={350}
        height={360}
      />
      <Image
        src={BgEl2}
        alt=''
        className='absolute z-[1] bottom-0 left-0 w-[320px] h-auto'
        width={320}
        height={280}
      />

      <div className='max-w-[1237px] flex justify-center mx-auto px-5 relative z-[2] '>
        <div className='flex items-center justify-between gap-16'>
          {/* Left Content */}
          <div className='flex flex-col gap-5'>
            <h1 className='!font-family-unbounded font-bold leading-[1.1] text-black mb-6'>
              <span className='text-[#ba0108] block text-[64px] leading-[1.1] mb-2'>
                НОВИЙ СТЕК
              </span>
              <span className='text-black text-[52px] leading-[1.1]'>
                KARMA FLIGHTS
              </span>
            </h1>
            <p className='font-family-unbounded text-xl font-[300]  text-black mb-8 '>
              Високотехнологічне українське виробництво
            </p>
            <button className='bg-[#ba0108] text-white font-montserrat text-2xl font-normal w-[387px] px-12 !mt-[40px] h-[70px] border-none rounded-[25px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#9a0106] hover:-translate-y-1 active:translate-y-0 shadow-lg'>
              Докладніше
            </button>
          </div>

          {/* Right Image */}
          <div className='flex justify-center items-center relative flex-1 max-w-[600px]'>
            <img
              src={Stack.src}
              alt='Karma Flights - високотехнологічне українське виробництво'
              className='w-full h-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
