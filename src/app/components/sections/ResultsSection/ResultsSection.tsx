import React from "react";

const ResultsSection = () => {
  return (
    <section className="bg-[#1d1d1d] h-[241px] py-[39px] flex justify-center">
      <div className="flex w-[1237px] justify-center gap-[155px] mx-auto items-center h-full">
        <div>
          <h3 className="text-8xl font-family-wallpoet text-[#ba0108]">+200</h3>
          <span className="text-2xl text-white font-family-montserrat">
            Задоволених клієнтів
          </span>
        </div>
        <div>
          <h3 className="text-8xl font-family-wallpoet text-[#ba0108]">+200</h3>
          <span className="text-2xl text-white font-family-montserrat">
            Виробничих локацій
          </span>
        </div>
        <div>
          <h3 className="text-8xl font-family-wallpoet text-[#ba0108]">+200</h3>
          <span className="text-2xl text-white font-family-montserrat">
            Знищеної ворожої техніки
          </span>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
