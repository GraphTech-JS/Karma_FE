import Image from "next/image";
import styles from "./AdvantagesSection.module.css";
import Trust from "../../../../../public/trust.svg";
import Quality from "../../../../../public/quality.svg";
import Service from "../../../../../public/service.svg";
import RD from "../../../../../public/r&d.svg";

const AdvantagesSection = () => {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.container}>
        <div className="flex flex-col items-center h-[254px] max-w-3xs">
          <div className="flex flex-col items-center gap-[15px]">
            <h4 className="text-2xl font-semibold text-white font-family-montserrat">
              Виконання зобов’язань
            </h4>
            <p className="text-xl text-white font-family-montserrat">
              Маємо постійних постачальників
            </p>
          </div>
          <Image
            src={Trust}
            alt="Виконання зобов’язань"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col items-end h-[254px] max-w-3xs">
          <div className="flex flex-col items-center gap-[15px]">
            <h4 className="text-2xl font-semibold text-white font-family-montserrat">
              Гарантована якість
            </h4>
            <p className="text-xl text-white font-family-montserrat">
              Перевірено в екстремальних умовах
            </p>
            <Image
              src={Quality}
              alt="Гарантована якість"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="flex flex-col items-center h-[254px] max-w-3xs">
          <div className="flex flex-col items-center gap-[15px]">
            <h4 className="text-2xl font-semibold text-white font-family-montserrat">
              Сервіс та техпідтримка
            </h4>
            <p className="text-xl text-white font-family-montserrat">
              Консультуємо та допомагаємо
            </p>
            <Image
              src={Service}
              alt="Сервіс та техпідтримка"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="flex flex-col items-center h-[254px] max-w-3xs">
          <div className="flex flex-col items-center gap-[15px]">
            <h4 className="text-2xl font-semibold text-white font-family-montserrat">
              Свій R&D відділ
            </h4>
            <p className="text-xl text-white font-family-montserrat">
              Постійне удосконалення, індивідуальні рішення
            </p>
            <Image src={RD} alt="Свій R&D відділ" width={80} height={80} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
