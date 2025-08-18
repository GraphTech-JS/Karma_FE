import Image from 'next/image';
import Arrow from '../../../../../public/arrow.svg';
import styles from './Accordion.module.css';

const Accordion = ({
  question,
  answer,
  className,
}: {
  question: string;
  answer: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <details className={`group border-b border-[#303030]  ${styles.root}`}>
        <summary
          className={` cursor-pointer  select-none ${styles.summary} py-4`}
        >
          <h4 className={`font-montserrat text-2xl  ${styles.title}`}>
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
          <p className='font-montserrat font-normal text-lg  text-[#1f2937] whitespace-pre-line'>
            {answer}
          </p>
        </div>
      </details>
    </div>
  );
};

export default Accordion;
