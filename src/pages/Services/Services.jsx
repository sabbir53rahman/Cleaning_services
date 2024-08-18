import React from "react";
import serviceImg1 from "../../assets/serviceImg1.png";
import Banner from "../../components/Banner/Banner";
function Services() {
  return (
    <>
      {/* Banner */}

      <Banner heading="Services" />

      {/* Service image section */}
      <div className="my_container py-[80px] ">
        <img src={serviceImg1} className="object-cover" alt="" />
      </div>

      {/* Job done section */}
      <div className="max-w-[971px] mx-[10px] md:mx-[20px] lg:mx-auto flex flex-col lg:flex-row lg:gap-[40px] lg:pb-[160px] pb-[80px]">
        <div>
          <p className="text text-[#4F4F4F]">
            We promise to prioritize your and surpass your expectations at every
            turn. Whether you’re seeking professional Expertise, Creative
            solutions or reliable support.
            <br />
            <br />
            We promise to prioritize your and surpass your expectations at every
            turn. Whether you’re seeking professional Expertise, Creative
            solutions or reliable support.
          </p>
        </div>
        <div className="border border-[#939393] rounded-[20px] flex ">
          <div className="p-[40px] border-r border-[#939393]">
            <h3 className="text-[60px] leading-[72px] pb-[15px] font-bold font-secondary">
              120+
            </h3>
            <p className="font-medium text-[24px] paragraph leading-[33px]">
              Customers Across Abuja
            </p>
          </div>
          <div className="p-[40px]">
            <h3 className="text-[60px] leading-[72px] pb-[15px] font-bold font-secondary">
              100+
            </h3>
            <p className="font-medium text-[24px] paragraph leading-[33px]">
              Office Cleaning Projects
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
