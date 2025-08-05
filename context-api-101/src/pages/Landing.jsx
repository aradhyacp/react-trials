import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen bg-[#171122] text-white flex flex-col">
      <div className="flex px-4 py-3 flex-row justify-between border-solid border-b-[#2f2447] border-b-2">
        <Link className="flex gap-5 flex-row items-center" to="/">
            
          <div className="size-6 text-white">
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
          <div className="text-white text-2xl font-bold logo">Demo App</div>
        </Link>
        <Link className="text-white bg-[#7b47eb] px-6 font-bold h-10 flex items-center rounded-lg" to="/login">
            Login
          </Link>
      </div>
      <div className="flex flex-grow justify-center mt-30 text-4xl">Welcome to Context API demo app</div>
      <div className="flex justify-center border-t-2 border-t-[#2f2447] text-[#a493c8] py-4">Made with ❤️ by © ACP.IO</div>
    </div>
  );
};

export default Landing;
