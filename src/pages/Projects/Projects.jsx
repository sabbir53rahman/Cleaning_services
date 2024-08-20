import React from "react";
import Banner from "../../components/Banner/Banner";
import projectImg1 from "../../assets/projectImg1.png";
import projectImg2 from "../../assets/projectImg2.png";
import { RiMapPinLine } from "react-icons/ri";
import Button from "../../components/Button/Button";

function Projects() {
  return (
    <>
      {/* banner section */}
      <Banner heading="Projects" />

      {/* Recent Projects section */}

      <div className="my_container ">
        <h2 className="heading_2 text-center py-[80px]">Recent Projects</h2>
        <div className="flex flex-col lg:flex-row gap-[20px] pb-[160px]">
          <div className="lg:w-1/2 w-full">
            <img src={projectImg1} alt="" />
            <h3 className="text-[24px] font-semibold leading-[28px] pb-[10px] pt-[20px]">
              Tokyo Nightlife Abuja
            </h3>
            <div className="flex gap-[10px]">
              <RiMapPinLine className="size-[20px]" />
              <p className="text">
                5 Lobito Cres, Wuse, Abuja 900288, Federal Capital
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img src={projectImg2} alt="" />
            <h3 className="text-[24px] font-semibold leading-[28px] pb-[10px] pt-[20px]">
              Moscow Underground
            </h3>
            <div className="flex gap-[10px]">
              <RiMapPinLine className="size-[20px]" />
              <p className="text">
                35 Adetokunbo Ademola Cres, Wuse, Abuja 904101, Federal
                Capital Territory
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my_container flex flex-col lg:flex-row gap-[50px] pb-[160px]">
        <div className="lg:max-w-[535px] flex flex-col items-center lg:items-start w-full mb-[50px] lg:mb-0">
          <p className="border border-black inline text py-[10px] px-[20px] rounded-[20px] text-center">
            We are expert
          </p>
          <h2 className="heading_2 pt-[15px] text-center lg:text-start">
            The future being with happy clients
          </h2>
          <p className="text pt-[30px] pb-[40px] text-center lg:text-start">
            We promise to prioritize your and surpass your expectations at every
            turn. Whether you’re seeking professional Expertise, Creative
            solutions or reliable support.
          </p>
          <Button label="More information's here" />
        </div>

        <div className="lg:max-w-[576px] w-full">
          <div className="flex flex-col items-center lg:flex-row gap-[20px] pb-[20px]">
            <div className="bg-[#DBECFF] border border-[#939393] py-[18px] px-[50px] rounded-[30px] mb-[20px] lg:mb-0 lg:max-w-[278px]">
              <h3 className="font-secondary font-bold text-[55px] xl:text-[60px] 2xl:text-[72px]  leading-[86px] pb-[10px]">
                120+
              </h3>
              <p className=" 2xl:text-[20px] xl:text-[18px] text-[20px] font-medium leading-[28px] paragraph pb-[30px]">
                Customers all Across Abuja
              </p>
            </div>
            <div className="bg-[#FFE5F9] border border-[#939393] py-[18px] px-[50px] rounded-[30px] mb-[20px] lg:mt-[-50px] lg:mb-[50px] lg:max-w-[278px]">
              <h3 className="font-secondary font-bold text-[55px] xl:text-[60px] 2xl:text-[72px]  leading-[86px] pb-[10px]">
                5X
              </h3>
              <p className="2xl:text-[20px] xl:text-[18px] text-[20px] font-medium leading-[28px] paragraph pb-[30px]">
                Growth each and every year
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#FFE9CA] border border-[#939393] py-[18px] px-[50px] rounded-[30px] lg:ml-[100px] lg:max-w-[278px]">
              <h3 className="font-secondary font-bold text-[55px] xl:text-[60px] 2xl:text-[72px] leading-[86px] pb-[10px]">
                90%
              </h3>
              <p className="2xl:text-[20px] xl:text-[18px] text-[20px] font-medium leading-[28px] paragraph pb-[30px]">
                Current stock exchange price
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
