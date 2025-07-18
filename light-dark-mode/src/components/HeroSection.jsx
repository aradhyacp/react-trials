import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="flex w-full justify-center mt-12 h-[700px]">
      <div className="flex w-[70%] hero-section bg-no-repeat bg-cover bg-center h-full rounded-2xl flex-col items-center justify-center">
        <div className="flex text-5xl font-bold mb-2">
          Welcome to Project <span className="text-black">Starter</span>
        </div>
        <div className="flex text-2xl mb-5">
          My new go-to template for lauching new web project quickly and
          efficiently
        </div>
        <div className="flex hero-button px-5 py-3 rounded-lg cursor-pointer gap-3">
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
