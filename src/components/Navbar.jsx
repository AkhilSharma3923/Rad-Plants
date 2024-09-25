import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimesCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-[80px] md:h-[100px] shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex justify-between items-center h-full px-4 md:px-8">
        {/* Logo */}
        <div className="text-lg md:text-2xl font-bold transition-transform duration-300 hover:scale-105">
          <NavLink to="/">Rad Plants</NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm md:text-xl font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm md:text-xl font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/catalogus"
            className={({ isActive }) =>
              `text-sm md:text-xl font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Catalogus
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm md:text-xl font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `text-sm md:text-xl font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-sm md:text-xl font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Cart(0)
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-xl font-bold">
            {isOpen ? (
              <FaTimesCircle className="text-black z-50 text-2xl" />
            ) : (
              <FaBars className="text-black text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white overflow-auto shadow-md transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-start p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg py-2 font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg py-2 font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/catalogus"
            className={({ isActive }) =>
              `text-lg py-2 font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            Catalogus
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg py-2 font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `text-lg py-2 font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            Search
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-lg py-2 font-normal transition-transform duration-300 hover:scale-105 ${
                isActive ? "text-green-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            Cart(0)
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
