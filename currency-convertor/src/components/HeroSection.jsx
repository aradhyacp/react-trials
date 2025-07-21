import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="flex mt-6 w-full justify-center h-[350px]">
      <div className="flex w-[70%] hero-section bg-no-repeat bg-cover h-full rounded-2xl flex-col items-center justify-center p-15">
        <div className="flex text-white text-5xl font-black text-center">
          Convert currencies at the real exchange rate
        </div>
        <div className="flex text-white mt-3">
          Get fee-free transfers, and hold 40+ currencies with the Currency
          Exchange account.
        </div>
        <div className="flex bg-[#1978e5] text-white h-10 font-bold px-4 cursor-pointer items-center mt-6 rounded-lg py-5 gap-2">
          Get Started
          <svg
            className="w-6 h-6 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
