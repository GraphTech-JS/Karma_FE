import Accordion from '../Accordion/Accordion';
import styles from './AccordionList.module.css';

export default function AccordionList({
  title,
  items,
  className,
  titleClassName,
}: {
  title: string;
  items: { question: string; answer: string }[];
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={`w-full  mx-auto px-5 flex flex-col gap-[30px] max-w-[600px] md:max-w-[740px] lg:max-w-[970px] xl:max-w-[1148px] ${className}`}
    >
      <h3 className={`${styles.title} ${titleClassName} }`}>{title}</h3>
      {items.map((item, idx) => {
        return (
          <Accordion key={idx} question={item.question} answer={item.answer} />
        );
      })}
    </div>
  );
}
