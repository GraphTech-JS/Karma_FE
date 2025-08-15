import Accordion from '../../../components/ui/Accordion/Accordion';
import styles from './FaqList.module.css';

const FaqList = () => {
  return (
    <section className='relative flex flex-col items-center  bg-white mt-[122px] m-[80px]'>
      <div className='flex flex-col items-center gap-[30px] '>
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
      <div className='flex flex-col items-center gap-4 px-5'>
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
