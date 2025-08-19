'use client';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gray-50 py-[80px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Contact Form */}
          <div className="flex-1 max-w-[600px]">
            <h2 className="text-[36px] font-medium font-unbounded text-black mb-2">
              <span className="text-[#ba0108]">З</span>В'ЯЖІТЬСЯ З НАМИ
            </h2>
            <p className="font-montserrat text-lg text-gray-700 mb-8">
              Введіть будь-ласка Ваші дані і ми зв'яжемось з Вами
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше ім'я"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-4 border border-gray-300 rounded-lg font-montserrat text-base focus:outline-none focus:ring-2 focus:ring-[#ba0108] focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+380"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-4 border border-gray-300 rounded-lg font-montserrat text-base focus:outline-none focus:ring-2 focus:ring-[#ba0108] focus:border-transparent"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Ваше повідомлення"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg font-montserrat text-base focus:outline-none focus:ring-2 focus:ring-[#ba0108] focus:border-transparent resize-vertical"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#ba0108] text-white font-montserrat text-xl font-medium py-4 px-8 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#9a0106] hover:-translate-y-1 active:translate-y-0 shadow-lg"
              >
                Відправити
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 max-w-[400px]">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-montserrat text-xl font-medium text-black mb-6">
                Контактний відділ
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-[36px] font-medium text-[#ba0108] font-montserrat">
                    +380 95 61 56713
                  </div>
                </div>
                
                <div>
                  <div className="text-[24px] font-medium text-black font-montserrat">
                    Info@karma.flights
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
