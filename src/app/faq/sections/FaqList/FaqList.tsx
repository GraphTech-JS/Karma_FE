'use client';
import { motion } from 'framer-motion';
import Accordion from '../../../components/ui/Accordion/Accordion';
import styles from './FaqList.module.css';


const FaqList = () => {
  return (
    <section className='relative flex flex-col items-center  bg-white mt-[122px] mb-[134px] z-[10]'>
      <div className='w-full mx-auto flex flex-col gap-[30px] max-w-[600px] md:max-w-[740px] lg:max-w-[970px] xl:max-w-[1148px]'>
        <h3 className={styles.title}>Загальні питання</h3>
        <Accordion
          className={styles.question}
          question='Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?'
          answer='Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.'
        />
        <Accordion
          className={styles.question}
          question='Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?'
          answer='Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.'
        />
        <Accordion
          className={styles.question}
          question='Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?'
          answer='Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.'
        />
        <Accordion
          className={styles.question}
          question='Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?'
          answer='Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.'
        />
      </div>

      <div className='w-full mx-auto px-5 flex flex-col gap-[30px] max-w-[600px] md:max-w-[740px] lg:max-w-[970px] xl:max-w-[1148px]'>
        <h3 className={`${styles.title} mt-[80px]`}>Поширені питання</h3>
        <Accordion
          className={styles.question}
          question='Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?'
          answer='Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.'
        />
        <Accordion
          className={styles.question}
          question='Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?'
          answer='Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.'
        />
        <Accordion
          className={styles.question}
          question='Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?'
          answer='Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.'
        />
        <Accordion
          className={styles.question}
          question='Для яких типів дронів найкраще підходить польотний стек KARMA F405 V1?'
          answer='Ідеально підходить для мікро- та невеликих FPV-дронів, а також для легких 3-дюймових або деяких 4-дюймових квадрокоптерів.'
        />
      </div>
    </section>
  );
};

export default FaqList;
