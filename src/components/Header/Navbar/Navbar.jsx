import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center gap-4 my-8 p-4 shadow-md">
        <div>
        <h3 className="text-2xl font-semibold font-young text-orange-600">PartyPulse</h3>
        </div>
        <div className="md:flex gap-12 text-lg hidden list-none">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
            Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </div>
        <div className="md:hidden flex items-center gap-2">
        {menu ? (
            <AiOutlineClose 
              onClick={() => setMenu(false)}
              className="text-center cursor-pointer text-3xl"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setMenu(true)}
              className="text-center cursor-pointer text-3xl"
            />
          )}
          {menu && (
            <div className="absolute top-20 right-0 text-lg  bg-gray-400 w-40 z-10 rounded-lg p-5">
              <ul className="flex flex-col gap-4 list-none ">
              <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
            Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


