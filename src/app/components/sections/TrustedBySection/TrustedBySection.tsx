'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import MriyaDrone from '../../../../../public/mriadrone.png';
import Magura from '../../../../../public/magura.png';
import Toro from '../../../../../public/toro.png';
import Drone from '../../../../../public/drone.png';

import Image from 'next/image';
import styles from './TrustedBySection.module.css';

const TrustedBySection = () => {
  return (
    <section className={styles.trustedBySection}>
      <h2 className='title text-[40px] text-[#020303]'>
        <span>Н</span>АМ ДОВІРЯЮТЬ
      </h2>
      <div className={styles.container}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          loop={true}
          className={styles.swiperContainer}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoContainer}>
              <Image
                src={MriyaDrone}
                alt='MRIA DRONE'
                width={150}
                height={100}
              />
              <p>MRIA DRONE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoContainer}>
              <Image src={Magura} alt='МАГУРА' width={150} height={100} />
              <p>MAGURA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoContainer}>
              <Image src={Toro} alt='TORO' width={150} height={100} />
              <p>TORO</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoContainer}>
              <Image src={Drone} alt='DRONE' width={150} height={100} />
              <p>DRONE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoContainer}>
              <Image
                src={MriyaDrone}
                alt='MRIA DRONE'
                width={150}
                height={100}
              />
              <p>MRIA DRONE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoContainer}>
              <Image src={Magura} alt='МАГУРА' width={150} height={100} />
              <p>MAGURA</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedBySection;
