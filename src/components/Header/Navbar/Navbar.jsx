
import React, { useContext, useState } from "react";
import { Link, NavLink} from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [menu, setMenu] = useState(false);

  const name = user?.displayName;
  const photo = user?.photoURL;
  const handleLogOut = () => {
    console.log(name, photo); 

    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="relative">
      <nav className="flex justify-between items-center gap-4 my-6 p-4">
        <div>
          <h3 className="text-2xl font-semibold font-young text-orange-600">
          EventMagic
          </h3>
        </div>
        <div className="md:flex gap-12 text-lg hidden list-none">
          <li className="mt-1">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "text-[#FDBF05] font-semibold font-young"
                  : "font-young font-medium text-[#656D76]"
              }
            >
              Home
            </NavLink>
          </li>
          <li  className="mt-1">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FDBF05] font-semibold font-young"
                  : "font-young font-medium text-[#656D76]"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li  className="mt-1">
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FDBF05] font-semibold font-young"
                  : "font-young font-medium text-[#656D76]"
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="flex gap-3  items-center">
            {user ? (
              <>
                {name && photo && (
                  <>
                    <p className="font-young text-sm">{name}</p>
                    <img
                      src={photo}
                      className="inline items-center mr-3 h-10 w-10 rounded-full"
                      alt=""
                    />
                  </>
                )}
                <NavLink onClick={handleLogOut}>
                  <Link className="bg-[#7AA93C] text-white font-young font-thin px-4 py-2 rounded">
                    Sign Out
                  </Link>
                </NavLink>
              </>
            ) : (
              <NavLink>
                <Link
                  to="/login"
                  className="bg-[#7AA93C] text-white font-young font-thin px-4 py-2 rounded"
                >
                  Login
                </Link>
              </NavLink>
            )}
          </li>
        </div>

        <div className="md:hidden flex items-center gap-2">
        {user && (
  <>
    {name && <p className="font-young text-sm">{name}</p>}
    {photo && <img src={photo} className="inline items-center mr-3 h-10 w-10 rounded-full" alt="" />}
  </>
)}
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
                        ? "text-[#FDBF05] font-semibold font-young"
                        : "font-young font-medium text-[#656D76]"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FDBF05] font-semibold font-young"
                        : "font-young font-medium text-[#656D76]"
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
                        ? "text-[#FDBF05] font-semibold font-young"
                        : "font-young font-medium text-[#656D76]"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
               {
                user?  <li>
                <Link
                  onClick={handleLogOut}
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FDBF05] font-semibold font-young"
                      : "font-young font-medium text-[#656D76]"
                  }
                >
                  Sign Out
                </Link>
              </li>
              :
              <li>
                <Link
                  onClick={handleLogOut}
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FDBF05] font-semibold font-young"
                      : "font-young font-medium text-[#656D76]"
                  }
                >
                  Login
                </Link>
              </li>
               }
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
