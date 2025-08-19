'use client';
import React from 'react';
import BgEl3 from '../../../../../public/bg-el-3.png';
import About from '../../../../../public/about.png';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='relative bg-white'>
      {/* Background decorative element */}
      <Image
        src={BgEl3}
        alt=''
        className='absolute z-[1] bottom-0 right-0 w-[200px] h-auto'
        width={200}
        height={270}
      />

      <div className='w-[1237px]  relative z-[2]'>
        <div className='flex items-center gap-5'>
          {/* Left Image */}
          <div className='flex flex-col h-[400px]'>
            <Image
              src={About}
              alt='Про нас - українська компанія високотехнологічного виробництва'
              width={500}
              height={400}
              className='w-full h-full rounded-t-[8px] object-cover shadow-lg'
            />
          </div>

          {/* Right Content */}
          <div className='flex flex-1 flex-col w-full'>
            <h2 className='title text-[40px] text-left text-[#020303]  font-semibold leading-[1.2]'>
              <span>П</span>РО НАС
            </h2>
            <p className='font-family-montserrat text-xl w-[649px] text-[#333333] mb-6'>
              Ми — українська компанія, що спеціалізується на розробці та
              виробництві високотехнологічної техніки для сучасного світу. Наше
              виробництво поєднує іновації, точну інженерію та найсучасніше
              обладнання, щоб створювати надійні рішення для промисловості,
              енергетики, агросектору та оборонної сфери.
            </p>
            <p className='font-montserrat text-xl leading-[1.7] text-[#333333]'>
              Ми впроваджуємо повний цикл: від ідеї та прототипу — до серійного
              виробництва. Усе — на українських потужностях, з дотриманням
              міжнародних стандартів якості.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
