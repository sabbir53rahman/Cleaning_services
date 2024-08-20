import React from "react";
import homeBanner from "../../assets/HomeBanner.png";
import { RiMapPinLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
function HomeBanner() {
  return (
    <>
      <div
        className="w-full h-[90vh] bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div className="lg:max-w-[999px]">
          <div>
            <h1 className="main_heading pt-[150px] md:pt-0">
              Your Space
              <br /> We Clean
            </h1>
            <p className="text-[16px] leading-[34px] text-center paragraph px-[10px] lg:max-w-[849px] pt-[40px]">
              Looking for the best cleaning company in Abuja? Clean My Space
              Ltd. offers top-notch house and office cleaning services. Trust
              our expert team to keep your space spotless and inviting.
              Reliable, efficient, and affordable cleaning solutions in Abuja.
            </p>
          </div>
          <div className="md:max-w-[649px] mx-[30px] md:mx-auto border border-[#939393] mt-[35px] bg-[#FAFAFA] p-[15px] rounded-[20px] flex lg:justify-between flex-col gap-[20px] md:gap-[10px] items-center md:flex-row">
            <div className="w-full">
              <div className="flex gap-[10px] items-center">
                <RiMapPinLine className="text-[18px]" />
                <p className="text-[18px] leading-[34px] font-medium">
                  Enter Location
                </p>
              </div>
              <div className="pl-[25px]">
                <select className="w-full outline-none focus:outline-none bg-[#FAFAFA] border-b border-[#D9D9D9] py-[8px] text-[16px]">
                  <option value="" disabled selected>
                    Write here
                  </option>
                  <option value="Abuja, Nigeria">Abuja, Nigeria</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <div className="flex gap-[10px] items-center">
                <BiCategory className="text-[18px]" />
                <p className="text-[18px] leading-[34px] font-medium">
                  Enter Service
                </p>
              </div>
              <div className="pl-[25px]">
                <select className="w-full outline-none focus:outline-none bg-[#FAFAFA] border-b  border-[#D9D9D9] py-[8px] text-[16px]">
                  <option className="" value="" disabled selected>
                    Write here
                  </option>
                  <option value="House Cleaning">House Cleaning</option>
                  <option value="Oven Cleaning">Oven Cleaning</option>
                  <option value="Commercial Cleaning">
                    Commercial Cleaning
                  </option>
                  <option value="Construction Cleaning">
                    Construction Cleaning
                  </option>
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="Residential Cleaning">
                    Residential Cleaning
                  </option>
                </select>
              </div>
            </div>

            <a href="tel:+23409119178436">
              <div className="p-[20px] bg-[#0073AC] text-white inline-flex items-center justify-center rounded-[14px] cursor-pointer">
                <FiPhone className="text-[18px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
