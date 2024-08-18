import React, { useState } from "react";
import serviceImg1 from "../../assets/serviceImg1.png";
import serviceImg2 from "../../assets/serviceImg2.png";
import star from "../../assets/star.png";
import Question from "../../assets/Question.png";
import Banner from "../../components/Banner/Banner";
import FAQ from "../../components/FAQ/FAQ";
function Services() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Banner */}

      <Banner heading="Services" />

      {/* Service image section */}
      <div className="my_container py-[80px] ">
        <img src={serviceImg1} className="object-cover" alt="" />
      </div>

      {/* Job done section */}
      <div className="max-w-[971px] mx-[10px] md:mx-[20px] lg:mx-auto flex flex-col lg:flex-row  lg:pb-[160px] pb-[80px]">
        <div className="lg:max-w-[496px]">
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
        <div className="lg:max-w-[475px] border border-[#939393] rounded-[20px] flex ">
          <div className=" p-[40px] border-r border-[#939393]">
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

      {/* Benefits section */}

      <div className="my_container bg-[#E1EEE8] border border-[#939393] flex flex-col lg:flex-row rounded-[30px] lg:mb-[160px] mb-[80px]">
        <div className="lg:w-1/2 w-full">
          <img src={serviceImg2} className="p-[40px] w-full" alt="Service" />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center p-[20px] lg:p-[40px]">
          <h3 className="heading_3 pt-[40px] pb-[13px]">Benefits</h3>
          <p className="font-medium text-[20px] leading-[28px] pb-[40px]">
            Empowering 120+ clients for success and satisfaction
          </p>

          <div className="flex gap-[15px] pb-[20px]">
            <img src={star} className="w-[25px] h-[25px]" alt="Star" />
            <p className="text">
              We office cleaning team members daily and each adheres to social
              distancing.
            </p>
          </div>
          <div className="flex gap-[15px] pb-[20px]">
            <img src={star} className="w-[25px] h-[25px]" alt="Star" />
            <p className="text">
              Sinks drains and faucets cleaned and disinfected
            </p>
          </div>
          <div className="flex gap-[15px]">
            <img src={star} className="w-[25px] h-[25px]" alt="Star" />
            <p className="text">
              Service means you have no contacts with our team members.
            </p>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="my_container pb-[160px] flex flex-col lg:flex-row ">
        <FAQ />
        <img
          src={Question}
          className="w-[30%] pt-[50px] lg:pt-0 lg:pl-[116px] mx-auto lg:mx-0"
          alt=""
        />
      </div>
    </>
  );
}

export default Services;
