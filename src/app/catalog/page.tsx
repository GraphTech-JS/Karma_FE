import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BgEl1 from '../../../public/bg-el-1.png';
import BgEl2 from '../../../public/bg-el-2.png';
import CardImage1 from '../../../public/card-img-1.png';
import CardImage2 from '../../../public/card-img-2.png';
import StackRotate from '../../../public/stack-rotate.png';
import ListOne from '../../../public/list-one.png';
import ListTwo from '../../../public/list-two.png';
import ListThree from '../../../public/list-three.png';
import OurProductsSection from '../components/sections/OurProductsSection/OurProductsSection';
import AccordionList from '../components/ui/AccordionList/AccordionList';

const CatalogPage = () => {
  return (
    <section className=' bg-white min-h-[600px]'>
      {/* Background decorative elements */}
      <div className='relative overflow-hidden'>
        <Image
          src={BgEl1}
          alt=''
          className='absolute z-[1] top-0 right-0 '
          width={350}
          height={360}
        />
        <Image
          src={BgEl2}
          alt=''
          className='absolute z-[1] bottom-0 left-0 '
          width={420}
          height={380}
        />

        <div className='max-w-[1440px] w-full flex flex-col justify-center mx-auto pt-[40px] mb-[64px]  relative z-[2] '>
          <div className='flex items-center gap-2 text-[var(--color-karma-red)] font-family-montserrat mb-[35px]'>
            <Link href='/'>Головна </Link>
            <span>&rarr;</span>
            <Link href='/'>Політні стеки</Link>
          </div>
          <div className='flex items-center justify-between '>
            <div className='flex flex-col gap-5 max-w-[747px] w-full '>
              <h1 className='!font-family-unbounded uppercase text-[var(--color-karma-red)] font-medium '>
                <span className=' block text-[64px] leading-[1.1] mb-2'>
                  Політні стеки
                </span>
              </h1>
              <p className=' font-montserrat text-[20px] leading-[1.7] text-[#333333] mb-8'>
                Компактна та продуктивна інтегрована система для дронів, що
                об&apos;єднує польотний контролер (FC) на базі потужного
                мікроконтролера STM32F405 та регулятор швидкості (ESC) 4-в-1 з
                підтримкою до 20А (25А піково).
                <br />
                <br />
                Завдяки своїм невеликим розмірам та високій функціональності,
                включаючи вбудований OSD, а часто також барометр і &quot;чорний
                ящик&quot;, він є ідеальним вибором для створення легких та
                маневрених FPV-дронів
              </p>
              <button className='bg-[#ba0108] text-white font-montserrat text-2xl font-normal w-[387px] py-[14px] px-[54px] mt-[60px]  h-[70px] border-none rounded-[25px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#9a0106] hover:-translate-y-1 active:translate-y-0 shadow-lg'>
                Отримати пропозицію
              </button>
            </div>

            <div className='flex justify-center items-center relative '>
              <Image
                src={StackRotate}
                width={602}
                height={536}
                alt='Karma Flights - високотехнологічне українське виробництво'
              />
              <div className='pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 w-[493px] h-[80px] rounded-full bg-black/35 blur-2xl' />
            </div>
          </div>
        </div>
      </div>
      {/* HIDE BG IMAGE */}
      <OurProductsSection hideBgImage />
      <div className='bg-black text-white py-[69px]'>
        <div className='flex flex-col justify-center items-center  max-w-[1237px] w-full mx-auto'>
          <h3 className='max-w-[909px] font-medium text-[48px] font-family-unbounded uppercase text-center mb-[9px]'>
            Чому варто обрати політні стеки від karma?
          </h3>
          <div>
            <ol className=' flex flex-col gap-[25px]'>
              <li className='font-medium text-2xl flex gap-[20px] items-center '>
                <Image src={ListOne} alt='List One' width={57} height={57} />
                Компактність та інтеграція
              </li>
              <li className='font-medium text-2xl flex gap-[20px] items-center '>
                <Image src={ListTwo} alt='List Two' width={57} height={57} />
                Висока продуктивність та універсальність
              </li>
              <li className='font-medium text-2xl flex gap-[20px] items-center '>
                <Image
                  src={ListThree}
                  alt='List Three'
                  width={57}
                  height={57}
                />
                Багатий функціонал та зручність використання
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col max-w-[1240px] w-full mx-auto my-[80px] '>
        <h3 className=' title text-black text-[40px] font-family-unbounded font-medium '>
          <span>Б</span>АЗА ЗНАНЬ. ПОЛІТНІ СТЕКИ
        </h3>

        <div className='flex gap-[21px]'>
          <div className='flex flex-col gap-2.5 '>
            <Image src={CardImage1} alt='' width={400} height={238} />
            <h4 className='text-2xl font-medium font-family-montserrat'>
              Як правильно паяти політний стек. Інструкція
            </h4>
            <p className='text-xl font-normal font-family-montserrat'>
              Короткий опис того, яких помилок потрібно уникати, поради від
              експерта
              <Link className='text-[var(--color-karma-red)] ml-[8px]' href='#'>
                &gt;&gt;
              </Link>
            </p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <Image src={CardImage2} alt='' width={400} height={238} />
            <h4 className='text-2xl font-medium font-family-montserrat'>
              Як правильно паяти політний стек. Інструкція
            </h4>
            <p className='text-xl font-normal font-family-montserrat'>
              Короткий опис того, яких помилок потрібно уникати, поради від
              експерта
              <Link className='text-[var(--color-karma-red)] ml-[8px]' href='#'>
                &gt;&gt;
              </Link>
            </p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <Image src={CardImage1} alt='' width={400} height={238} />
            <h4 className='text-2xl font-medium font-family-montserrat'>
              Як правильно паяти політний стек. Інструкція
            </h4>
            <p className='text-xl font-normal font-family-montserrat'>
              Короткий опис того, яких помилок потрібно уникати, поради від
              експерта
              <Link className='text-[var(--color-karma-red)] ml-[8px]' href='#'>
                &gt;&gt;
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AccordionList
        className='mb-[128px]'
        title='Найпоширеніші запитання про політні стеки'
        titleClassName='!text-[48px] !text-center !uppercase !font-medium ![font-family:var(--font-unbounded)]'
        items={[
          {
            question:
              'Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?',
            answer:
              'Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.',
          },
          {
            question:
              'Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?',
            answer:
              'Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.',
          },
          {
            question:
              'Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?',
            answer:
              'Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.',
          },
          {
            question:
              'Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?',
            answer:
              'Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.',
          },
        ]}
      />
    </section>
  );
};

export default CatalogPage;
