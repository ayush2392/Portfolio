import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <header className="bg-gray-900 p-1 fixed top-0 w-full z-10 shadow-md">
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-3xl font-bold tracking-wide">Port<span className="text-blue-500">folio</span> </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#Home">
          <li className="text-md transition-all duration-300 p-1 md:p-0 no-underline hover:underline text-White-600 hover:text-blue-600 transition duration-300">
            Home
          </li>
        </a>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 no-underline hover:underline text-White-600 hover:text-blue-600 transition duration-300">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0 no-underline hover:underline text-White-600 hover:text-blue-600 transition duration-300">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 no-underline hover:underline text-White-600 hover:text-blue-600 transition duration-300">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0 no-underline hover:underline text-White-600 hover:text-blue-600 transition duration-300">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
    </header>
  );
};

export default Navbar;