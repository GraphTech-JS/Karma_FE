'use client';
import React from 'react';
import Image from 'next/image';
import ProductDetails from '../../../../../public/product-details.png';
import AnimatedTitle from '../../ui/AnimatedTitle/AnimatedTitle';

const TechnicalSpecs: React.FC = () => {
  const leftTableData = [
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'MCU', value: 'STM32F405' },
    { label: 'Дозволений струм від батареї', value: '2.4 A' },
  ];

  const rightTableData = [
    { label: 'Живлення', value: '4s-6s' },
    { label: 'Струм', value: '4x50A' },
    { label: 'MCU', value: '72Mhz 32Bit' },
    { label: 'Прошивка', value: 'AM32' },
    { label: 'Кріплення', value: '30.5 x 30.5' },
  ];

  return (
    <section className="bg-white py-[69px]">
      <div className="flex flex-col justify-center items-center max-w-[1237px] w-full mx-auto px-4">
        <h2 className="max-w-[909px] font-medium text-[48px] text-black font-family-unbounded uppercase text-center mb-[60px]">
          Характеристика
        </h2>
        
        <div className="w-full flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Table */}
          <div className="flex-1">
            <table className="w-full border-collapse">
              <tbody>
                {leftTableData.map((item, index) => (
                  <tr key={index} className="border border-black">
                    <td className="py-3 px-4 border-r border-black w-[255px] text-left font-family-inter text-lg font-medium text-black">
                      {item.label}
                    </td>
                    <td className="py-3 px-4 text-left font-family-montserrat text-lg text-black">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Table */}
          <div className="flex-1">
            <table className="w-full border-collapse">
              <tbody>
                {rightTableData.map((item, index) => (
                  <tr key={index} className="border border-black">
                    <td className="py-3 px-4 border-r border-black w-[255px] text-left font-family-inter text-lg font-medium text-black">
                      {item.label}
                    </td>
                    <td className="py-3 px-4 text-left font-family-montserrat text-lg text-black">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
             {/* Product images */}
        <div className="flex gap-6 justify-center items-end mt-12">
          <div className="flex justify-center">
            <Image
              src={ProductDetails}
              alt="Деталі продукту - передня сторона"
              width={607}
              height={300}
           
            />
          </div>
        </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default TechnicalSpecs;
