'use client';
import Link from 'next/link';
import React from 'react';

const PricingCalculator: React.FC = () => {
  const pricingTiers = [
    { quantity: '1+', warehouse: '100%', contracting: '' },
    { quantity: '100+', warehouse: '93%', contracting: '80%' },
    { quantity: '1000+', warehouse: '85%', contracting: '75%' },
    { quantity: '3000+', warehouse: '78%', contracting: '70%' },
    { quantity: '10 000+', warehouse: '', contracting: '65%' },
  ];

  const PricingTable = ({ title }: { title: string }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex-1 min-w-[300px]">
      <h4 className="text-2xl font-bold font-family-montserrat text-center mb-6 text-black">
        {title}
      </h4>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-3 border border-black font-montserrat font-medium text-gray-700"></th>
            <th className="text-center py-3 border border-black font-montserrat font-medium text-gray-700">Склад</th>
            <th className="text-center py-3 border border-black font-montserrat font-medium text-gray-700">Контрактування</th>
          </tr>
        </thead>
        <tbody>
          {pricingTiers.map((tier, index) => (
            <tr key={index} className="border border-black">
              <td className="py-4 px-4 border-r border-black font-montserrat font-medium text-black">
                {tier.quantity}
              </td>
              <td className="py-4 px-4 border-r border-black text-center font-montserrat text-gray-700">
                {tier.warehouse}
              </td>
              <td className="py-4 px-4 border-r border-black text-center font-montserrat text-gray-700">
                {tier.contracting}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="bg-gray-50 py-[80px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-[48px] font-medium font-family-unbounded uppercase text-center text-black mb-4">
          РОЗРАХУНОК ВАРТОСТІ
        </h2>
        
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <PricingTable title="Відносно обсягів та шляхів придбання" />
          <PricingTable title="Відносно обсягів та шляхів придбання" />
          <PricingTable title="Відносно обсягів та шляхів придбання" />
        </div>

        <div className="text-center">
          <p className="font-montserrat text-lg text-gray-700 mb-8 max-w-[800px] mx-auto">
            Ми прагнемо зробити прозору систему ціноутворення. Ціни залежать від обсягів та шляхів придбання
          </p>
          <Link href="/contacts">
          <button className="bg-[#ba0108] text-white font-family-montserrat text-2xl w-[607px] font-normal py-4 px-12 rounded-[25px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#9a0106] hover:-translate-y-1 active:translate-y-0 shadow-lg">
            Отримати пропозицію
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
