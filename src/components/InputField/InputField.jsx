import React from "react";

function InputField({ icon: Icon, placeholder, onChange, type }) {
  return (
    <div className="flex items-center border-b border-[#C6C6C6] py-2">
      {Icon && <Icon className="text-[25px] text-[#200E32] mr-2" />}
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent focus:outline-none text-[18px] placeholder-[#6A6A6A]"
      />
    </div>
  );
}

export default InputField;
