import ContactFormSection from '../components/sections/ContactFormSection/ContactFormSection';
import AccordionList from '../components/ui/AccordionList/AccordionList';

export default function Contacts() {
  return (
    <>
    
      <ContactFormSection hideBgImage />
      <AccordionList
        className='mt-[112px] mb-[80px]'
        title='Поширенні питання'
        titleClassName='!text-left'
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
    </>
  );
}
