import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky z-50 top-0 mb-5">
      <div className="flex bg-white px-5 py-4 border-b-2 border-b-[#dadada] items-center justify-between">
        <div className="flex">
          <Link to="/">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="logo"
              className="h-12"
            />
          </Link>
        </div>
        <div className="flex gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Github
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          {/* <div className=" cursor-pointer">Login</div>
                <div className="text-white bg-orange-600 px-5 py-3 rounded-lg cursor-pointer">Get started</div> */}
          <Link to="#" className=" cursor-pointer">
            Login
          </Link>
          <Link
            to="#"
            className="text-white bg-orange-600 px-5 py-3 rounded-lg cursor-pointer"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
