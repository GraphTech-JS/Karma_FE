'use client';
import React, { useState } from 'react';

const Resources: React.FC = () => {

  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-[48px] font-medium font-family-unbounded uppercase text-center text-black mb-12">
          ЗАВАНТАЖИТИ
        </h2>

        {/* Tabs */}
        <div className="flex w-[1237px] flex-wrap mx-auto justify-center gap-4 mb-8">
          <button
               className={`px-8 py-4 w-[47%] border border-black rounded-[5px] text-[#BA0108] font-family-montserrat font-[600] text-lg transition-all duration-300 hover:bg-[#BA0108] hover:text-white hover:border-0 cursor-pointer`}
            >
           Технічна інформація
            </button>
            <button
               className={`px-8 py-4 w-[47%] border border-black rounded-[5px] text-[#BA0108] font-family-montserrat font-[600] text-lg transition-all duration-300 hover:bg-[#BA0108] hover:text-white hover:border-0 cursor-pointer`}
            >
           Ціноутворення
            </button>
            <button
               className={`px-8 py-4 w-[47%] border border-black rounded-[5px] text-[#BA0108] font-family-montserrat font-[600] text-lg transition-all duration-300 hover:bg-[#BA0108] hover:text-white hover:border-0 cursor-pointer`}
            >
         Прошивки
            </button>
            <button
              className={`px-8 py-4 w-[47%] border border-black rounded-[5px] text-[#BA0108] font-family-montserrat font-[600] text-lg transition-all duration-300 hover:bg-[#BA0108] hover:text-white hover:border-0 cursor-pointer`}
            >
         Інструкції
            </button>
        </div>

      
      </div>
    </section>
  );
};

export default Resources;
