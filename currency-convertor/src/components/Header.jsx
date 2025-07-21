import React from "react";

const Header = () => {
  return (
    <div className="flex px-10 py-4 border-b-2 border-solid border-b-[#f0f2f4] justify-between">
      <div className="flex flex-row items-center gap-3">
        <div class="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="font-bold text-2xl">Currency Exchange</div>
      </div>
      <div className="flex items-center gap-10">
        <div className="relative group cursor-pointer">
          <span className="">Rates</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#adadad] transition-all duration-200 group-hover:w-full"></span>
        </div>
        <div className="relative group cursor-pointer">
          <span className="">Charts</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#adadad] transition-all duration-200 group-hover:w-full"></span>
        </div>
        <div className="flex gap-3">
          <div className="cursor-pointer bg-[#1978e5] text-white px-4 py-2 rounded-xl hover:bg-[#1978e5da]">
            Get started
          </div>
          <div className="cursor-pointer bg-[#f0f2f4] px-5 py-2 rounded-xl">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
