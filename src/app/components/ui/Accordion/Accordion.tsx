import Image from 'next/image';
import Arrow from '../../../../../public/arrow.svg';
import styles from './Accordion.module.css';

const Accordion = ({ question, answer, className }: { question: string; answer: string; className?: string }) => {
  return (
    <div className={className}>
      <details className={`group  border-b border-[#303030] ${styles.root}`}>
        <summary
          className={`py-4 cursor-pointer text-left select-none ${styles.summary}`}>
          <h4 className={`font-montserrat text-xl text-left ${styles.title}`}>
            {question}
          </h4>
          <Image
            src={Arrow}
            alt='Arrow'
            width={20}
            height={20}
            className={` ${styles.icon}`}
          />
        </summary>

        <div className={`${styles.content}`}>
          <p className='font-montserrat text-base text-left text-[#1f2937] whitespace-pre-line'>
            {answer}
          </p>
        </div>
      </details>
    </div>
  );
};

export default Accordion;
