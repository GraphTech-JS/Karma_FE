import Link from "next/link";
import React from "react";

const LanguageSwitcher = () => {
  return (
    <div className="flex items-center gap-2">
      <Link 
        href="#" 
        className="font-inter text-xl text-white hover:text-[#ba0108] active:text-[#ba0108] focus:text-[#ba0108] focus-visible:text-[#ba0108] focus-within:text-[#ba0108] active:font-bold focus:font-bold focus-visible:font-bold focus-within:font-bold transition-colors"
      >
        UA
      </Link>
      <span className="text-white text-xl px-2">|</span>
      <Link 
        href="#" 
        className="font-inter text-xl text-white hover:text-[#ba0108] active:text-[#ba0108] focus:text-[#ba0108] focus-visible:text-[#ba0108] focus-within:text-[#ba0108] active:font-bold focus:font-bold focus-visible:font-bold focus-within:font-bold transition-colors"
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
