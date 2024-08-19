import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import InputField from "../../components/InputField/InputField";
import { MdPersonOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import Button from "../../components/Button/Button";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiMapPinLine } from "react-icons/ri";

function Contacts() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {/* Banner section */}
      <Banner heading="Contacts" />

      <div className="my_container py-[80px] lg:py-[160px] flex items-center flex-col lg:flex-row gap-[50px]">
        {/* Form Section */}
        <div className="flex flex-wrap gap-4 max-w-[700px] border border-[#939393] rounded-[20px] px-[20px] lg:px-[50px] pt-[50px] lg:pt-[90px] pb-[40px] lg:pb-[80px]">
          <div className="w-full lg:w-[calc(50%-8px)] pb-[40px]">
            <InputField
              type="text"
              icon={MdPersonOutline}
              placeholder="Your Name"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="w-full lg:w-[calc(50%-8px)] pb-[40px]">
            <InputField
              type="email"
              icon={IoMailOutline}
              placeholder="Your Email"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="w-full lg:w-[calc(50%-8px)] pb-[40px]">
            <InputField
              type="phone"
              icon={FiPhone}
              placeholder="Phone"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="w-full lg:w-[calc(50%-8px)] pb-[40px]">
            <InputField
              type="text"
              icon={BiCategory}
              placeholder="Enter service"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <p className="contact_heading">Drop us a line for us</p>
          <div className="w-full pb-[30px]">
            <InputField
              type="textarea"
              icon={IoMailOutline}
              placeholder="Enter your message"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Button label="Get In Touch" className="mb-[45px]" />
            <p className="contact_heading">You may know from here</p>
            <Button
              label="Instagram"
              className="bg-inherit border border-[#666666] rounded-[10px]"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-[40px]">
          <div className="border-b pb-[40px] border-[#D9D9D9] w-full">
            <div className="p-[20px] bg-[#DBECFF] border border-[#939393] text-black inline-flex items-center justify-center rounded-[20px]">
              <TfiHeadphoneAlt className="text-[18px]" />
            </div>
            <h2 className="contact_heading">Support Request</h2>
            <p className="text">Get help now! Contact our support team</p>
            <p className="text-[20px] leading-[50px] underline">Explore More</p>
          </div>
          <div className="border-b pb-[40px] border-[#D9D9D9] w-full">
            <div className="p-[20px] bg-[#FFE5F9] border border-[#939393] text-black inline-flex items-center justify-center rounded-[20px]">
              <FiPhone className="text-[18px]" />
            </div>
            <h2 className="contact_heading">Need to help</h2>
            <p className="text-[32px] leading-[50px]">+234 88 55 645 000</p>
            <p className="text-[20px] leading-[50px] underline">cmscleaning@gmail.com</p>
          </div>
          <div className="border-b pb-[40px] border-[#D9D9D9] w-full">
            <div className="p-[20px] bg-[#FFE9CA] border border-[#939393] text-black inline-flex items-center justify-center rounded-[20px]">
              <RiMapPinLine className="text-[18px]" />
            </div>
            <h2 className="contact_heading">Location Info</h2>
            <p className="text">123/4 East 27th street, Fiftin floow, Abuja, Naigeria</p>
            <p className="text-[20px] leading-[50px] underline">Location on map</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
