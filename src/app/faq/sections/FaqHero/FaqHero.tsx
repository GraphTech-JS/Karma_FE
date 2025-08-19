'use client';
import Image from 'next/image';
import DroneLeft from '../../../../../public/drone-left.png';
import DroneRight from '../../../../../public/drone-right.png';

const FaqHero = () => {
  return (
    <section className='relative bg-no-repeat bg-cover bg-center  text-center '>
      <Image
        src='/faq-hero-bg.png'
        alt='faq hero bg'
        fill
        className='object-cover -z-10'
        loading='lazy'
        priority={false}
      />
      <div className='absolute bottom-0 left-0 z-[1]'>
        <Image
          className='w-[340px] h-[220px]'
          src={DroneLeft}
          alt='Drone Left'
        />
      </div>
      <div className='absolute bottom-0 right-0 z-[1]'>
        <Image
          className='w-[340px] h-[220px]'
          src={DroneRight}
          alt='Drone Right'
        />
      </div>
      <div className='max-w-[1055px] w-full mx-auto text-center  pt-[80px] pb-[142px]'>
        <h2 className='title text-5xl font-normal text-[#fefefe]'>
          <span>П</span>ОШИРЕНІ ПИТАННЯ
        </h2>
        <p className='max-w-[1155px] text-[#fefefe] text-xl text-center  leading-[1.7] mt-3 '>
          Якщо Ви не знайшли інформації, яка вас цікавить, Ви можете відправити
          нам запит за допомогою форми зворотнього зв’язку.
        </p>
      </div>
    </section>
  );
};

export default FaqHero;
