'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../../../../../public/logo.png';
import Facebook from '../../../../../public/facebook.svg';
import Insta from '../../../../../public/insta.svg';
import Signal from '../../../../../public/signal.png';
import Whatsapp from '../../../../../public/whatsapp.svg';

const Footer = () => {
  return (
    <footer className='bg-[#020303] py-12 h-[308px'>
      <div className='w-[1237px] px-5 !mx-auto'>
        <div className='flex justify-between !pt-[26px]'>
          <div className='flex flex-col mt-20'>
            <Link href='#' className='inline-block mb-4'>
              <Image src={Logo} alt='Karma' width={149} height={34} />
            </Link>
          </div>

          {/* Contacts Section */}
          <div className='flex flex-col gap-5'>
            <h3 className='font-montserrat text-2xl font-semibold text-white mb-6'>
              Контакти
            </h3>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-4'>
                <Link
                  href='tel:+380956156713'
                  className='font-montserrat text-xl text-white no-underline transition-colors duration-300 ease-in-out hover:text-[#ba0108]'
                >
                  +380 95 61 56713
                </Link>
                <span className='font-montserrat text-lg text-white opacity-80'>
                  Контактний відділ
                </span>
              </div>
              <div className='flex items-center gap-4'>
                <Link
                  href='tel:+380956156713'
                  className='font-montserrat text-xl text-white no-underline transition-colors duration-300 ease-in-out hover:text-[#ba0108]'
                >
                  +380 95 61 56713
                </Link>
                <span className='font-montserrat text-lg text-white opacity-80'>
                  Контактний відділ
                </span>
              </div>
              <div className='flex items-center gap-4'>
                <Link
                  href='tel:+380956156713'
                  className='font-montserrat text-xl text-white no-underline transition-colors duration-300 ease-in-out hover:text-[#ba0108]'
                >
                  +380 95 61 56713
                </Link>
                <span className='font-montserrat text-lg text-white opacity-80'>
                  Контактний відділ
                </span>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className='flex flex-col gap-5'>
            <h3 className='font-montserrat text-2xl font-semibold text-white mb-6'>
              Меню
            </h3>
            <nav className='flex flex-col gap-3'>
              <Link
                href='#'
                className='block font-montserrat text-xl text-white no-underline transition-colors duration-300 ease-in-out hover:text-[#ba0108]'
              >
                Каталог
              </Link>
              <Link
                href='#'
                className='block font-montserrat text-xl text-white no-underline transition-colors duration-300 ease-in-out hover:text-[#ba0108]'
              >
                FAQ
              </Link>
              <Link
                href='#'
                className='block font-montserrat text-xl text-white no-underline transition-colors duration-300 ease-in-out hover:text-[#ba0108]'
              >
                База знань
              </Link>
              <Link
                href='#'
                className='block font-montserrat text-xl text-white no-underline transition-colors duration-300 ease-in-out hover:text-[#ba0108]'
              >
                Контакти
              </Link>
            </nav>
          </div>

          {/* Social Section */}
          <div className='flex flex-col items-end'>
            <div className='flex flex-col gap-3'>
              <Link
                href='#'
                aria-label='Facebook'
                className='w-12 h-12  rounded-full flex items-center justify-center  transition-colors duration-300'
              >
                <Image
                  src={Facebook}
                  alt='facebook social link'
                  width={36}
                  height={36}
                />
              </Link>
              <Link
                href='#'
                aria-label='Instagram'
                className='w-12 h-12  rounded-full flex items-center justify-center  transition-colors duration-300'
              >
                <Image
                  src={Insta}
                  alt='instagram social link'
                  width={36}
                  height={36}
                />
              </Link>
              <Link
                href='#'
                aria-label='Telegram'
                className='w-12 h-12  rounded-full flex items-center justify-center  transition-colors duration-300'
              >
                <Image
                  src={Signal}
                  alt='signal social link'
                  width={36}
                  height={36}
                />
              </Link>
              <Link
                href='#'
                aria-label='WhatsApp'
                className='w-12 h-12  rounded-full flex items-center justify-center  transition-colors duration-300'
              >
                <Image
                  src={Whatsapp}
                  alt='whatsapp social link'
                  width={36}
                  height={36}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-8 text-center h-[80px]'>
          <Link
            href='#'
            className='font-inter text-lg text-[#929292] no-underline transition-colors duration-300 ease-in-out hover:text-[#ba0108]'
          >
            Політика конфеденційності
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
