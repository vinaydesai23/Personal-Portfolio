import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "Skills", "Experience", "Projects"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md text-white px-6 md:px-20 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-4">
        <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
        <FaInstagram className="hover:text-pink-400 cursor-pointer" />
        <FaGithub className="hover:text-gray-300 cursor-pointer" />
        <FaEnvelope className="hover:text-red-400 cursor-pointer" />
        <FaPhoneAlt className="hover:text-green-400 cursor-pointer" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 font-medium">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 text-white flex flex-col items-center py-6 gap-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer hover:text-blue-400 text-lg"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
