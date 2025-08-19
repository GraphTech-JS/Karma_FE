'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Product1 from '../../../../../public/our-product1.png';
import Product2 from '../../../../../public/our-product2.png';
import BgEl3 from '../../../../../public/bg-el-3.png';
import Arrow from "../../../../../public/nav_arrow.svg";
import styles from './OurProductsSection.module.css';
import Link from 'next/link';

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
               <Link href={`/catalog/2233`}>
              <button className={styles.button}>Докладніше</button>
             </Link>
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
              <Link href={`/catalog/2233`}>
              <button className={styles.button}>Докладніше</button>
             </Link>
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
               <Link href={`/catalog/2233`}>
              <button className={styles.button}>Докладніше</button>
             </Link>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='swiper-button-prev-custom rotate-180'>
          <img src={Arrow.src} alt="navigation prev arrow" />
        </div>
        <div className='swiper-button-next-custom'>
          <img src={Arrow.src} alt="navigation next arrow" />
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;
