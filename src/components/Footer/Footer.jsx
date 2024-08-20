import React from "react";
import logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="my_container bg-[#F3F3F3] rounded-[30px] p-[20px] md:p-[30px] xl:p-[60px] border border-[#939393]">
        <div className="flex flex-col md:flex-row gap-[40px] items-center md:justify-between lg:gap-[70px]">
          <div className="flex flex-col items-center md:items-start max-w-[549px]  lg:text-left">
            <img src={logo} alt="Logo" className="max-w-full h-auto" />
            <h3 className="contact_heading pt-[25px] pb-[12px]">
              Subscribe to our newsletter
            </h3>
            <Button label="Subscribe" />
            <div className="flex flex-col lg:flex-row gap-[20px] pt-[25px]">
              <div className="border-t lg:border-r lg:border-t-0 border-[#D9D9D9] pt-[10px] lg:pt-0 pr-[20px]">
                <p className="contact_heading">+00 88 55 645 000</p>
                <p className="underline text-[18px] leading-[50px]">
                  business@cleanmyspace.ng
                </p>
              </div>
              <div className=" pt-[10px] lg:pt-0">
                <p className="contact_heading">+00 88 55 645 000</p>
                <p className="underline text-[18px] leading-[50px]">
                  ceo@cleanmyspace.ng
                </p>
              </div>
            </div>
            <div className="pt-[20px]">
              <p className="text-[18px] leading-[30px]">
                123/4 East 27th street, Fifteen floor, Abuja, Nigeria
              </p>
              <p className="underline text-[18px] leading-[30px]">VIEW MAP</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[70px]  lg:text-left">
            <div>
              <h3 className="contact_heading pb-[12px]">Useful Links</h3>
              <Link to="/">
                <p className="text-[18px] leading-[40px]">Home</p>
              </Link>
              <Link to="/about">
                <p className="text-[18px] leading-[40px]">About Us</p>
              </Link>
              <Link to="/services">
                <p className="text-[18px] leading-[40px]">Services</p>
              </Link>
              <Link to="/projects">
                <p className="text-[18px] leading-[40px]">Projects</p>
              </Link>
              <Link to="/contacts">
                <p className="text-[18px] leading-[40px]">Contacts</p>
              </Link>
            </div>
            <div>
              <h3 className="contact_heading pb-[12px]">Services</h3>
              <p className="text-[18px] leading-[40px]">House Cleaning</p>
              <p className="text-[18px] leading-[40px]">Oven Cleaning</p>
              <p className="text-[18px] leading-[40px]">
                Commercial Cleaning
              </p>
              <p className="text-[18px] leading-[40px]">
                Construction Cleaning
              </p>
              <p className="text-[18px] leading-[40px]">Office Cleaning</p>
              <p className="text-[18px] leading-[40px]">
                Residential Cleaning
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1170px] mx-auto py-[28px] flex flex-col lg:flex-row items-center justify-between gap-[20px] text-center lg:text-left">
        <p className="text-[12px] leading-[20px] lg:leading-[50px]">
          Copyright@2023 CMS Clean. All Rights reserved.
        </p>
        <div className="flex items-center justify-center gap-[10px]">
          <div className="w-[48px] h-[48px] rounded-full bg-[#E7F7FD] flex items-center justify-center">
            <FaFacebookF className="text-[#4267B2] text-[18px]" />
          </div>
          <div className="w-[48px] h-[48px] rounded-full bg-[#F8F0FB] flex items-center justify-center">
            <FaInstagram className="text-[#BB6BD9] text-[18px]" />
          </div>
        </div>
        <p className="text-[12px] leading-[20px] lg:leading-[50px]">
          Developed by Volume Technologies International Limited
        </p>
      </div>
    </>
  );
}

export default Footer;
