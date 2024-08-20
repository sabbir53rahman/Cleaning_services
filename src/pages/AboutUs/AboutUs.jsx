import React from "react";
import Button from "../../components/Button/Button";
import AboutImg1 from "../../assets/aboutUs1.png";
import AboutImg2 from "../../assets/aboutUs2.png";
import AboutImg3 from "../../assets/aboutUs3.png";
import checkBox from "../../assets/checkBox.png";
import AboutIcon from "../../assets/aboutIcon.png";
import Banner from "../../components/Banner/Banner";

function AboutUs() {
  return (
    <>
      {/* Banner */}

      <Banner heading="About Us" />

      {/* welcome section */}
      <div className="my_container flex flex-col lg:flex-row pt-[90px] pb-[160px] gap-[20px]">
        <div className=" lg:max-w-[377px]">
          <h2 className="font-secondary font-bold text-[36px] lg:text-[44px] leading-[50px] lg:leading-[70px] text-center lg:text-left">
            Welcome to Clean My Space Ltd.
          </h2>
        </div>
        <div className="max-w-full lg:max-w-[773px]">
          <p className="text text-[#7A7A7A] text-[14px] lg:text-[16px]">
            Founded on August 18, 2022, CLEAN MY SPACE LTD was born out of a
            deep-seated passion for maintaining clean and healthy environments.
            Our journey began with a simple but powerful desire: to promote
            eco-friendly living through exceptional cleaning services.
            <br />
            <br />
            Our CEO’s love for cleaning extends beyond just a hobby—it’s a
            driving force behind our company. With a genuine commitment to
            creating pristine spaces, we decided to turn this passion into a
            profession, ensuring that our services are not only thorough but
            also aligned with our vision for a cleaner, greener community.
            <br />
            <br />
            At CLEAN MY SPACE LTD, we believe that a clean space is essential
            for a healthier lifestyle. Our team is dedicated to providing
            meticulous cleaning solutions that meet the highest standards of
            excellence. We’re proud to offer services that are not only
            effective but also environmentally responsible, reflecting our
            commitment to sustainability.
            <br />
            <br />
            Join us in our mission to enhance the quality of your living and
            working spaces while contributing to a cleaner planet. Discover the
            difference that passion and dedication can make with CLEAN MY SPACE
            LTD —where your space is our priority.
          </p>
        </div>
      </div>

      {/* about ceo section */}
      <div className="max-w-[970px] md:mx-[20px] mx-[10px] lg:mx-auto pt-[45px] pl-[45px] mb-[160px] bg-[#DBECFF] border border-[#939393] rounded-[20px] flex flex-col lg:flex-row lg:items-end">
        <div className=" lg:max-w-[680px] w-full">
          <h3 className="font-secondary font-bold text-[32px] leading-[50px] pb-[10px]">
            About CEO
          </h3>
          <p className="text text-[#464646] pr-[20px] lg:pr-0">
            Emmanuel Azubuike Nwaka, the visionary behind CLEAN MY SPACE LTD, is
            an ambitious entrepreneur with a passion for transforming
            environments through meticulous cleaning. Hailing from Kwale, Delta
            State, Emmanuel’s journey has taken him from his roots in the
            vibrant Delta region to the bustling city of Abuja, FCT, where he
            currently resides.
            <br />
            Emmanuel’s deep-seated love for cleaning, which began as a personal
            hobby, evolved into a driving force behind the establishment of
            CLEAN MY SPACE LTD. His dedication to creating clean and healthy
            spaces reflects his broader commitment to fostering eco-friendly
            practices and enhancing community well-being.
            <br />
            Under Emmanuel’s leadership, CLEAN MY SPACE LTD embodies a blend of
            passion, professionalism, and environmental consciousness. His
            ambitious vision and entrepreneurial spirit are the cornerstones of
            our company’s mission to deliver outstanding cleaning services that
            are both effective and sustainable.
            <br />
            <br />
            With a keen eye for detail and a relentless drive for excellence,
            Emmanuel continues to steer Clean My Space Ltd towards new heights,
            ensuring that every space we touch is left spotless and contributes
            positively to a cleaner, greener future.
          </p>
          <h3 className="font-semibold pt-[20px]  text-[24px] leading-[38px]">
            Emmanuel Azubuike Nwaka
          </h3>
          <p className="text-[14px] pb-[45px] font-medium">CEO</p>
        </div>
        <div className="flex md:items-center lg:items-end">
          <img
            src={AboutImg1}
            className=" lg:w-full w-[40%] md:w-[27%]  "
            alt="CEO Emmanuel Azubuike Nwaka"
          />
        </div>
      </div>

      {/* About Cleaning Agency */}

      <div className="my_container pb-[80px] md:pb-[110px] lg:pb-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-[30px]">
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <div className="p-[24px] bg-[#FFE9CA] border border-[#939393] rounded-[20px] flex gap-[20px] items-center">
              <div className="p-[15px] bg-white border border-[#000000] rounded-full">
                <img src={AboutIcon} className="w-[30px] h-[30px]" alt="Icon" />
              </div>
              <h3 className="text-[20px] leading-[30px] font-medium lg:max-w-[179px] text-center lg:text-left">
                We make the cleaning effortless
              </h3>
            </div>
            <img
              src={AboutImg2}
              className="bg-[#FFE5F9] border border-[#D9D9D9] rounded-[30px] mt-[20px] lg:max-w-none"
              alt="About"
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <div className="pb-[15px] text-center lg:text-left">
              <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px]">
                About Cleaning Agency
              </p>
              <h3 className="heading_2 pt-[10px]">
                We are committed to give our best services
              </h3>
              <div className="grid md:grid-cols-2 grid-cols-1 pt-[20px] border-b border-[#D9D9D9]">
                <div className="flex items-center gap-[10px] pb-[25px] justify-center lg:justify-start">
                  <img
                    src={checkBox}
                    className="w-[22px] h-[22px]"
                    alt="Checkbox"
                  />
                  <p className="text text-[16px]">Flexible Scheduling</p>
                </div>
                <div className="flex items-center gap-[10px] pb-[25px] justify-center lg:justify-start">
                  <img
                    src={checkBox}
                    className="w-[22px] h-[22px]"
                    alt="Checkbox"
                  />
                  <p className="text text-[16px]">Experienced Team</p>
                </div>
                <div className="flex items-center gap-[10px] pb-[25px] justify-center lg:justify-start">
                  <img
                    src={checkBox}
                    className="w-[22px] h-[22px]"
                    alt="Checkbox"
                  />
                  <p className="text text-[16px]">Eco-Friendly Cleaning</p>
                </div>
                <div className="flex items-center gap-[10px] pb-[25px] justify-center lg:justify-start">
                  <img
                    src={checkBox}
                    className="w-[22px] h-[22px]"
                    alt="Checkbox"
                  />
                  <p className="text text-[16px]">Flexible Scheduling</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button label="Contact us" className="mt-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my_container pb-[80px] md:pb-[110px] lg:pb-[160px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {/* First Row */}
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-2 p-[20px] 
                  lg:border-r-0 lg:border-t-0 border-[#D9D9D9] 
                 border lg:border-l-0  lg:border-[#D9D9D9]"
          >
            <h2 className="text-[72px] leading-[87px] font-bold text-center">
              120+
            </h2>
            <p className="text-[20px] text-center">Happy Clients</p>
          </div>
          <div
            className="col-span-1 p-[20px] 
                 border-t-0 lg:border-l lg:border-r-0 lg:border-t-0  
                 border border-[#D9D9D9]  lg:border-[#D9D9D9]"
          >
            <h2 className="text-[72px] leading-[87px] font-bold text-center">
              150+
            </h2>
            <p className="text-[20px] text-center">Project Complete</p>
          </div>
          <div
            className="col-span-1 p-[20px] 
                 border-t-0 lg:border-l lg:border-t-0 border-[#D9D9D9] 
                 border lg:border-r-0  lg:border-[#D9D9D9]"
          >
            <h2 className="text-[72px] leading-[87px] font-bold text-center">
              20+
            </h2>
            <p className="text-[20px] text-center">Team Members</p>
          </div>

          {/* Second Row */}
          <div
            className="col-span-1 p-[20px] 
                 border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r lg:border-t-0 border-[#D9D9D9] 
                 border border-b-0 lg:border-[#D9D9D9]"
          >
            <h2 className="text-[72px] leading-[87px] font-bold text-center">
              2+
            </h2>
            <p className="text-[20px] text-center">Year Experience</p>
          </div>
          <div
            className="col-span-1 sm:col-span-2 lg:col-span-3 p-[20px] 
                 border-t lg:border-l-0 lg:border-b-0 lg:border-r-0 lg:border-t-0 lg:border-[#D9D9D9] 
                 border border-[#D9D9D9] "
          >
            <h2 className="text-[72px] leading-[87px] font-bold text-center">
              5+
            </h2>
            <p className="text-[20px] text-center">Awards Won</p>
          </div>
        </div>
      </div>

      {/* contact us section */}

      <div className="my_container flex flex-col lg:flex-row pb-[160px] gap-[20px]">
        <div className="w-full lg:max-w-[575px] bg-[#FFE9CA] border border-[#939393] rounded-[40px] flex items-center justify-center">
          <h3 className="font-secondary font-bold text-[28px] md:text-[38px] leading-[60px] text-center p-[55px]">
            Professional & expert cleaning service deep clean or post
            construction cleaning
          </h3>
        </div>

        <div className="w-full lg:max-w-[575px] bg-[#DBECFF] border border-[#939393] rounded-[40px] flex items-end">
          <div className="lg:max-w-[355px] flex flex-col pl-[42px] py-[42px]">
            <h3 className="font-secondary font-bold text-[32px] md:text-[50px] leading-[40px] md:leading-[60px] pb-[25px] text-center md:text-left">
              We’re committed to caring
            </h3>
            <Button label="Contact Us" className=" md:self-start" />
          </div>

          <div>
            <img
              src={AboutImg3}
              className="w-full block"
              alt="We’re committed to caring"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
