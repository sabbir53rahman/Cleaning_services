import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import { FiPhoneCall, FiX } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-md py-4 relative">
      <div className="my_container flex items-center justify-between">
        {/* Logo */}
        <img src={Logo} alt="Logo" />

        {/* Navigation Links */}
        <nav className="hidden xl:flex gap-8 items-center">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/projects", label: "Projects" },
            { to: "/contacts", label: "Contacts" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[16px] leading-[24px] ${
                  isActive ? "text-[#1F1F1F] font-bold" : "text-[#929292]"
                } hover:text-[#1F1F1F]`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Phone and Social Icons */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-800">
            <div className="p-[15px] bg-[#48BEF7] rounded-[50px]">
              <FiPhoneCall className="text-xl text-black" />
            </div>
            <span className="font-medium text-[16px]">(+234) 125 487 471</span>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#E7F7FD] flex items-center justify-center">
              <FaFacebookF className="text-[#4267B2] text-[18px]" />
            </div>
            <div className="w-[48px] h-[48px] rounded-full bg-[#F8F0FB] flex items-center justify-center">
              <FaInstagram className="text-[#BB6BD9] text-[18px]" />
            </div>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FiX /> : <HiMenuAlt1 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-[#939393] shadow-md mt-2 p-4 xl:hidden flex flex-col gap-4 items-center">
          <nav className="flex flex-col gap-4 items-center">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/contacts", label: "Contacts" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[16px] leading-[24px] ${
                    isActive ? "text-[#1F1F1F] font-bold" : "text-[#929292]"
                  } hover:text-[#1F1F1F]`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-800">
              <div className="p-[15px] bg-[#48BEF7] rounded-[50px]">
                <FiPhoneCall className="text-xl text-black" />
              </div>
              <span className="font-medium text-[16px]">
                (+234) 125 487 471
              </span>
            </div>
            <div className="flex gap-4">
              <div className="w-[48px] h-[48px] rounded-full bg-[#E7F7FD] flex items-center justify-center">
                <FaFacebookF className="text-[#4267B2] text-[18px]" />
              </div>
              <div className="w-[48px] h-[48px] rounded-full bg-[#F8F0FB] flex items-center justify-center">
                <FaInstagram className="text-[#BB6BD9] text-[18px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
