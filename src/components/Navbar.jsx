import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 bg-opacity-80 flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20">
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/vinaydesai23/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/vinay._.desai/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors"
          title="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/vinaydesai23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors"
          title="Github"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:vinaydesai2303@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors"
          title="Email"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="+91 8296338415"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors"
          title="Call"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 items-center`}
      >
        <a href="#Home">
          <li className="text-md transition-all duration-300ms p-1 md:p-0">
            Home
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300ms p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300ms p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300ms p-1 md:p-0">
            Projects
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
  );
};

export default Navbar;
