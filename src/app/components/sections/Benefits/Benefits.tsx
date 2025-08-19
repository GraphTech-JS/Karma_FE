'use client';
import React from 'react';
import Image from 'next/image';
import BenefitsBg from '../../../../../public/benefits-bg.png';

const Benefits: React.FC = () => {
  return (
    <section className="relative py-[80px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BenefitsBg}
          alt=""
          fill
          className="object-cover w-full h-full opacity-80"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-[1237px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          
          {/* High Productivity */}
          <div className="text-center md:text-left">
            <h3 className="text-[28px] font-medium text-center mb-6 leading-tight">
              Висока продуктивність
            </h3>
            <p className="font-montserrat text-center text-[18px] leading-relaxed">
              Сучасні контролери польоту оснащені потужними мікроконтролерами (наприклад, F4, F7, H7), які здатні обробляти дані з датчиків з високою частотою.
            </p>
          </div>

          {/* Setup Flexibility */}
          <div className="text-center md:text-left">
            <h3 className="text-[28px] font-medium text-center mb-6 leading-tight">
              Гнучкість у налаштуваннях
            </h3>
            <p className="text-center text-[18px] leading-relaxed">
              Можна тонко налаштовувати PID-коефіцієнти, фільтри, режими польоту (акро, стабілізація, GPS-режими), функції OSD (On-Screen Display) та багато іншого. Оптимізована поведінка дрона.
            </p>
          </div>

          {/* Easy Installation */}
          <div className="text-center md:text-left">
            <h3 className="text-[28px] font-medium text-center mb-6 leading-tight">
              Легке встановлення
            </h3>
            <p className="text-center text-[18px] leading-relaxed">
              Політні стеки об'єднують контролер польоту та ESC на одній платі або в єдиному модулі. Це значно зменшує кількість проводів, спрощує монтаж та зменшує загальну вагу та розмір системи.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
