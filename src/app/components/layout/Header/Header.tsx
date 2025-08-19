'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '../../../../../public/logo.png';
import Link from 'next/link';
import LanguageSwitcher from '../../ui/LanguageSwitcher/LanguageSwitcher';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className='bg-[#020303] h-[82px] flex items-center justify-center'>
      <div className='flex gap-20 w-[1237px] justify-between items-center px-5'>
        {/* Logo */}

        <div className=''>
          <Link href='#' className='font-inter text-xl font-normal text-white'>
            <Image src={Logo.src} alt='logo' width={149} height={34} />
          </Link>
        </div>

        <div>
          <nav className='flex items-center  gap-[50px] '>
            <div className={styles.dropdown}>
              <Link
                href='/catalog'
                className='font-family-inter text-xl focus:font-bold text-[#ffffff] hover:text-[#ba0108] transition-colors'
              >
                Каталог
              </Link>
              <div className={styles.dropdownContent}>
                <div className='flex w-full'>
                  <Link href='#'>Політні стеки</Link>
                  <Link href='#'>Відеопередавачі VTX</Link>
                  <Link href='#'>ESC</Link>
                </div>
              </div>
            </div>
            <Link
              href='/faq'
              className='font-family-inter text-xl font-normal text-white hover:text-[#ba0108] transition-colors'
            >
              FAQ
            </Link>
            <Link
              href='#'
              className='font-family-inter text-xl font-normal text-white hover:text-[#ba0108] transition-colors'
            >
              База знань
            </Link>
            <Link
              href='/contacts'
              className='font-family-inter text-xl font-normal text-white hover:text-[#ba0108] transition-colors'
            >
              Контакти
            </Link>
          </nav>
        </div>
        {/* Navigation - centered with proper spacing */}
        <div className='flex gap-[50px] justify-center'>
          <nav className='flex items-center gap-[30px]'>
            <Link
              href='tel:(067) 298-29-29'
              className='font-montserrat text-xl font-normal text-white hover:text-[#ba0108] transition-colors'
            >
              (067) 298-29-29
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
