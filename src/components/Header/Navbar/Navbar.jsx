import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const [menu, setMenu] = useState(false);

  const handleLogOut = () => {
       logOut()
       .then(() => console.log("user logged in"))
       .catch(error => console.error(error))
  }

  return (
    <div className="relative">
      <nav className="flex justify-between items-center gap-4 my-8 p-4">
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
        {
          user? <>
          <li> 
          <NavLink onClick={handleLogOut}
            className={({ isActive, isPending }) => 
              isPending
                ? "pending"
                : isActive
                ? "text-[#FF444A] underline"
                : ""
            }
          >
           <Link className="bg-[#7AA93C] text-white font-young font-thin px-4 py-2 rounded">Sign Out</Link>
          </NavLink>
        </li>
          </>
          :
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#FF444A] underline"
                : ""
            }
          >
          <Link to="/login" className="bg-[#7AA93C] text-white font-young font-thin px-4 py-2 rounded">Login</Link>
          </NavLink>
        </li>
        }
       
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
          {
            user && <span>{user.email}</span> 
          }
          <li>
            <Link onClick={handleLogOut}
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Sign Out         
            </Link>
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


