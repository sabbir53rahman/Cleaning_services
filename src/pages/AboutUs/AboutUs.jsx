import React from "react";
import Button from "../../components/Button/Button";
import AboutImg3 from "../../assets/aboutUs3.png";
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
      <div className="max-w-[970px] md:mx-[20px] mx-[10px] lg:mx-auto p-[45px] mb-[160px] bg-[#DBECFF] border border-[#939393] rounded-[20px] flex">
        <div className="max-w-[680px]">
          <h3 className="font-secondary font-bold text-[32px] leading-[50px] pb-[10px]">
            About CEO
          </h3>
          <p className="text text-[#464646]">
            Emmanuel Azubuike Nwaka, the visionary behind CLEAN MY SPACE LTD ,
            is an ambitious entrepreneur with a passion for transforming
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
          <h3 className=" font-semibold pt-[20px] text-[24px] leading-[38px]">
            Emmanuel Azubuike Nwaka
          </h3>
          <p className="text-[14px] font-medium">CEO</p>
        </div>
      </div>

      {/* contact us section */}

      <div className="my_container flex flex-col lg:flex-row pb-[160px] gap-[20px]">
        <div className="w-full lg:max-w-[575px] bg-[#FFE9CA] border border-[#939393] rounded-[40px] flex items-center justify-center">
          <h3 className="font-secondary font-bold text-[38px] leading-[60px] text-center p-[55px]">
            Professional & expert cleaning service deep clean or post
            construction cleaning
          </h3>
        </div>

        <div className="w-full lg:max-w-[575px] bg-[#DBECFF] border border-[#939393] rounded-[40px] flex items-end">
          <div className="lg:max-w-[355px] flex flex-col pl-[42px] py-[42px]">
            <h3 className="font-secondary font-bold text-[50px] leading-[60px] pb-[25px] text-left">
              We’re committed to caring
            </h3>
            <Button label="Contact Us" className="self-start" />
          </div>

          <div>
            <img
              src={AboutImg3}
              className="w-full"
              alt="We’re committed to caring"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
