import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import InputField from "../../components/InputField/InputField";
import { MdPersonOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

function Contacts() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      {/* Banner section */}
      <Banner heading="Contacts" />

      <div className="my_container py-[160px] ">
        <div className="flex flex-wrap gap-4 max-w-[700px] border border-[#939393] rounded-[20px] px-[50px] pt-[90px]">
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
              icon={IoMailOutline }
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
        </div>
      </div>
    </>
  );
}

export default Contacts;
