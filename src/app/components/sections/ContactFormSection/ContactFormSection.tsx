'use client';

import Image from 'next/image';
import BgEl5 from '../../../../../public/bg-el-5.png';
import BgEl6 from '../../../../../public/bg-el-6.png';
import styles from './ContactFormSection.module.css';

const ContactFormSection = ({ hideBgImage = false }: { hideBgImage?: boolean }) => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.backgroundElement1}>
        {!hideBgImage && (
          <Image
            src={BgEl6}
            alt='bg element 6'
            className={styles.bgImage}
            width={400}
            height={400}
          />
        )}
      </div>
      <div className={styles.backgroundElement2}>
        <Image
          src={BgEl5}
          alt=''
          className={styles.bgImage}
          width={400}
          height={400}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>З</span>В&apos;ЯЖІТЬСЯ З
            НАМИ
          </h2>
          <p className={styles.subtitle}>
            Введіть будь-ласка Ваші данні і ми зв&apos;яжемось з Вами
          </p>
          <form className={styles.form}>
            <div className={styles.inputRow}>
              <input
                type='text'
                placeholder="Ваше ім'я"
                className={styles.input}
              />
              <input type='tel' placeholder='+380' className={styles.input} />
            </div>
            <textarea
              placeholder='Ваше повідомлення'
              className={styles.textarea}
              rows={5}
            />
            <button type='submit' className={styles.button}>
              Відправити
            </button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h3>Контактний відділ</h3>
            <a href='tel:+380956156713' className={styles.phone}>
              +380 95 61 56713
            </a>
            <a href='mailto:Info@karma.flights' className={styles.email}>
              Info@karma.flights
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
