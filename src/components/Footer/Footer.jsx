import React from "react";
import logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="max-w-[1170px] md:mx-[20px] mx-[10px] lg:mx-auto bg-[#F3F3F3] rounded-[30px] p-[60px] border border-[#939393]">
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[70px]">
          <div className="max-w-[529px]">
            <img src={logo} alt="Logo" className="max-w-full h-auto" />
            <h3 className="text-[24px] font-semibold pt-[25px] leading-[50px] pb-[12px]">
              Subscribe to our newsletter
            </h3>
            <Button label="Subscribe" />
            <div className="max-w-[529px] flex flex-col lg:flex-row pt-[25px]">
              <div className="pr-[20px] lg:border-r border-[#D9D9D9]">
                <p className="text-[24px] leading-[40px] font-semibold">
                  +00 88 55 645 000
                </p>
                <p className="underline text-[18px] leading-[50px]">
                  business@cleanmyspace.ng
                </p>
              </div>
              <div className="pl-[0] lg:pl-[34px] pt-[10px] lg:pt-0">
                <p className="text-[24px] leading-[40px] font-semibold">
                  +00 88 55 645 000
                </p>
                <p className="underline text-[18px] leading-[50px]">
                  ceo@cleanmyspace.ng
                </p>
              </div>
            </div>
            <div className="pt-[10px]">
              <p className="text-[18px] leading-[40px]">
                123/4 East 27th street, Fifteen floor, Abuja, Nigeria
              </p>
              <p className="underline text-[18px] leading-[40px]">VIEW MAP</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[70px]">
            <div>
              <h3 className="font-semibold text-[24px] pb-[10px] leading-[50px]">
                Useful Links
              </h3>
              <Link to="/">
                <p className="text-[18px] leading-[50px]">Home</p>
              </Link>
              <Link to="/about">
                <p className="text-[18px] leading-[50px]">About Us</p>
              </Link>
              <Link to="/services">
                <p className="text-[18px] leading-[50px]">Services</p>
              </Link>
              <Link to="/projects">
                <p className="text-[18px] leading-[50px]">Projects</p>
              </Link>
              <Link to="/contacts">
                <p className="text-[18px] leading-[50px]">Contacts</p>
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-[24px] pb-[10px] leading-[50px]">
                Services
              </h3>
              <p className="text-[18px] leading-[50px]">House Cleaning</p>
              <p className="text-[18px] leading-[50px]">Oven Cleaning</p>
              <p className="text-[18px] leading-[50px]">Commercial Cleaning</p>
              <p className="text-[18px] leading-[50px]">
                Construction Cleaning
              </p>
              <p className="text-[18px] leading-[50px]">Office Cleaning</p>
              <p className="text-[18px] leading-[50px]">Residential Cleaning</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1170px] lg:mx-auto md:mx-[20px] mx-[10px] py-[28px] flex flex-col lg:flex-row items-center justify-between gap-[20px] lg:gap-0">
        <div className="text-center lg:text-left">
          <p className="text-[12px] leading-[50px]">
            Copyright@2023 CMS Clean. All Rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <div className="w-[48px] h-[48px] rounded-full bg-[#E7F7FD] flex items-center justify-center">
            <FaFacebookF className="text-[#4267B2] text-[18px]" />
          </div>
          <div className="w-[48px] h-[48px] rounded-full bg-[#F8F0FB] flex items-center justify-center">
            <FaInstagram className="text-[#BB6BD9] text-[18px]" />
          </div>
        </div>
        <div className="text-center lg:text-right">
          <p className="text-[12px] leading-[50px]">
            Developed by Volume Technologies International Limited
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
