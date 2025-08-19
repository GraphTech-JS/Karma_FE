'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Product1 from '../../../../../public/our-product1.png';
import Product2 from '../../../../../public/our-product2.png';
import BgEl3 from '../../../../../public/bg-el-3.png';
import styles from './OurProductsSection.module.css';

const OurProductsSection = ({
  hideBgImage = false,
}: {
  hideBgImage?: boolean;
}) => {
  return (
    <section className={styles.productsSection}>
      <div className={styles.backgroundElement}>
        {!hideBgImage && (
          <Image
            src={BgEl3}
            alt=''
            className={styles.bgImage}
            width={400}
            height={400}
          />
        )}
      </div>
      <h2 className='title text-[40px] text-[#020303]'>
        <span>Н</span>АШІ ТОВАРИ
      </h2>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={true}
          className={styles.swiperContainer}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.card}>
              <Image
                src={Product1}
                alt='Політний стек KARMA F405 V1'
                width={300}
                height={200}
              />
              <h3>
                ПОЛІТНИЙ СТЕК
                <br />
                KARMA F405 V1
              </h3>
              <ul>
                <li>
                  <span>Гіроскоп/акселерометр</span> <span>ICM-42688-P</span>
                </li>
                <li>
                  <span>Робочий струм</span> <span>50А</span>
                </li>
                <li>
                  <span>Розмір</span> <span>48.5 x 40 мм</span>
                </li>
                <li>
                  <span>Монтажні отвори</span> <span>30.5 x 30.5 мм</span>
                </li>
                <li>
                  <span>Піковий струм</span> <span>60А</span>
                </li>
                <li>
                  <span>Роз&apos;єм живлення</span> <span>XT-60</span>
                </li>
              </ul>
              <button className={styles.button}>Докладніше</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.card}>
              <Image
                src={Product2}
                alt='Політний стек KARMA F405 V1'
                width={300}
                height={200}
              />
              <h3>
                ПОЛІТНИЙ СТЕК
                <br />
                KARMA F405 V1
              </h3>
              <ul>
                <li>
                  <span>Гіроскоп/акселерометр</span> <span>ICM-42688-P</span>
                </li>
                <li>
                  <span>Робочий струм</span> <span>50А</span>
                </li>
                <li>
                  <span>Розмір</span> <span>48.5 x 40 мм</span>
                </li>
                <li>
                  <span>Монтажні отвори</span> <span>30.5 x 30.5 мм</span>
                </li>
                <li>
                  <span>Піковий струм</span> <span>60А</span>
                </li>
                <li>
                  <span>Роз&apos;єм живлення</span> <span>XT-60</span>
                </li>
              </ul>
              <button className={styles.button}>Докладніше</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.card}>
              <Image
                src={Product1}
                alt='Політний стек KARMA F405 V1'
                width={300}
                height={200}
              />
              <h3>
                ПОЛІТНИЙ СТЕК
                <br />
                KARMA F405 V1
              </h3>
              <ul>
                <li>
                  <span>Гіроскоп/акселерометр</span> <span>ICM-42688-P</span>
                </li>
                <li>
                  <span>Робочий струм</span> <span>50А</span>
                </li>
                <li>
                  <span>Розмір</span> <span>48.5 x 40 мм</span>
                </li>
                <li>
                  <span>Монтажні отвори</span> <span>30.5 x 30.5 мм</span>
                </li>
                <li>
                  <span>Піковий струм</span> <span>60А</span>
                </li>
                <li>
                  <span>Роз&apos;єм живлення</span> <span>XT-60</span>
                </li>
              </ul>
              <button className={styles.button}>Докладніше</button>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='swiper-button-prev-custom'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
              d='M15 18L9 12L15 6'
              stroke='#ba0108'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='swiper-button-next-custom'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
              d='M9 18L15 12L9 6'
              stroke='#ba0108'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;
