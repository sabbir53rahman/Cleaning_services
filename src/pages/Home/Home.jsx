import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Arrow from "../../assets/arrow.png";
import homeService1 from "../../assets/homeService1.png";
import homeService2 from "../../assets/homeService2.png";
import homeService3 from "../../assets/homeService3.png";
import homeService4 from "../../assets/homeService4.png";
import TopService1 from "../../assets/TopService1.png";
import TopService2 from "../../assets/TopService2.png";
import bestServices1 from "../../assets/bestServices1.png";
import bestServices2 from "../../assets/bestServices2.png";
import bestServices3 from "../../assets/bestServices3.png";
import bestServices4 from "../../assets/bestServices4.png";
import checkBox from "../../assets/checkBox.png";
import bgDoted from "../../assets/bgDoted.png";
import Book from "../../assets/Book.png";
import Confirm from "../../assets/Confirm.png";
import Enjoy from "../../assets/Enjoy.png";
import Button from "../../components/Button/Button";

const services = [
  {
    title: "Eco-Friendly Initiatives",
    description:
      "Expert workers are highly skilled professional with extensive in their respective fields.",
    backgroundColor: "#EFF2FC",
    imgSrc: homeService1,
  },
  {
    title: "Commercial Cleaning",
    description:
      "Expert workers are highly skilled professional with extensive in their respective fields.",
    backgroundColor: "#FFE9CA",
    imgSrc: homeService2,
  },
  {
    title: "Specialized Cleaning",
    description:
      "Expert workers are highly skilled professional with extensive in their respective fields.",
    backgroundColor: "#FFE5F9",
    imgSrc: homeService3,
  },
  {
    title: "Additional Services",
    description:
      "Expert workers are highly skilled professional with extensive in their respective fields.",
    backgroundColor: "#E1EEE8",
    imgSrc: homeService4,
  },
];

const items1 = [
  "Removal of dust and debris from all surfaces",
  "Cleaning of windows, frames, and sills",
  "Detailed cleaning of floors, including vacuuming and mopping",
  "Wiping down walls, fixtures, and fittings",
  "Disinfection of high-touch areas",
  "Removal of paint splatters and other construction residues",
];

const items2 = [
  "Thoroughly cleaning all areas of your home or office",
  " Addressing build-up in hard-to-reach places, including behind appliances and under furniture",
  "Sanitizing and deodorizing carpets, upholstery, and other fabrics",
  "Cleaning and polishing high-touch surfaces, such as doorknobsand light switches",
  "Scrubbing and disinfecting bathrooms and kitchens to remove grime and bacteria",
];

function Home() {
  return (
    <>
      <HomeBanner />

      {/* mission vision section */}

      <div className="my_container py-[160px] flex flex-col lg:flex-row gap-[20px]">
        <div className="lg:w-1/2 border border-[#939393] rounded-[40px]">
          <h2 className="text-[32px] leading-[50px] font-bold text-center pt-[30px] font-secondary">
            Mission
          </h2>
          <p className="text text-center p-[10px] md:p-[32px]">
            “ At Clean My Space Ltd, our mission is to provide exceptional
            cleaning services that enhance the comfort and well-being of our
            clients. We are dedicated to delivering meticulous, reliable, and
            eco-friendly cleaning solutions while fostering a culture of
            integrity, respect, and professionalism. Our goal is to create
            pristine environments that contribute to healthier and happier
            living and working spaces. ”
          </p>
        </div>
        <div className="lg:w-1/2 border border-[#939393] rounded-[40px]">
          <h2 className="text-[32px] leading-[50px] font-bold text-center pt-[30px] font-secondary">
            Vision
          </h2>
          <p className="text text-center p-[10px] md:p-[32px]">
            “ Our vision at Clean My Space Ltd is to be the leading provider of
            innovative and sustainable cleaning services, renowned for our
            commitment to excellence and customer satisfaction. We aspire to set
            new standards in the cleaning industry by leveraging cutting-edge
            technology, eco-friendly practices, and a passionate team, ensuring
            that every space we touch is not only clean but also contributes to
            a better, more sustainable world. ”
          </p>
        </div>
      </div>

      {/* We Provide Best Services */}

      <div className="my_container pb-[160px]">
        <div>
          <div className="flex justify-center pb-[15px]">
            <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px] text-center">
              Our Services
            </p>
          </div>

          <h2 className="heading_2 text-center pb-[50px]">
            We Provide Best Services
          </h2>
          <p className="text text-center lg:max-w-[774px] lg:mx-auto pb-[50px]">
            We promise to prioritize your and surpass your expectations at every
            turn. Whether you’re seeking professional Expertise, Creative
            solutions or reliable support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[0px] items-start">
          {/* First Div */}
          <div className="relative border-b border-[#D9D9D9] md:border-r lg:p-[60px] p-[20px]">
            <div className="flex items-center gap-[16px] pb-[20px]">
              <div className="p-[24px] bg-[#FFE9CA] border border-[#939393] rounded-[20px]">
                <img src={bestServices1} alt="" />
              </div>
              <div>
                <p className="text">Expert</p>
                <p className="text-[28px] font-semibold leading-[30px]">
                  Workers
                </p>
              </div>
            </div>
            <div>
              <p className="text text-[16px]">
                Expert workers are highly skilled professionals with extensive
                experience in their respective fields.
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="relative border-b border-[#D9D9D9] lg:p-[60px] p-[20px]">
            <div className="flex items-center gap-[16px] pb-[20px]">
              <div className="p-[24px] bg-[#EFF2FC] border border-[#939393] rounded-[20px]">
                <img src={bestServices2} alt="" />
              </div>
              <div>
                <p className="text">Advance</p>
                <p className="text-[28px] font-semibold leading-[30px]">
                  Services
                </p>
              </div>
            </div>
            <div>
              <p className="text text-[16px]">
                Expert workers are highly skilled professionals with extensive
                experience in their respective fields.
              </p>
            </div>
          </div>

          {/* Third Div */}
          <div className="relative border-b md:border-b-0 border-[#D9D9D9] md:border-r lg:p-[60px] p-[20px]">
            <div className="flex items-center gap-[16px] pb-[20px]">
              <div className="p-[24px] bg-[#E1EEE8] border border-[#939393] rounded-[20px]">
                <img src={bestServices3} alt="" />
              </div>
              <div>
                <p className="text">24/7</p>
                <p className="text-[28px] font-semibold leading-[30px]">
                  Services
                </p>
              </div>
            </div>
            <div>
              <p className="text text-[16px]">
                Expert workers are highly skilled professionals with extensive
                experience in their respective fields.
              </p>
            </div>
          </div>

          {/* Fourth Div */}
          <div className="relative border-b md:border-none border-[#D9D9D9] lg:p-[60px] p-[20px]">
            <div className="flex items-center gap-[16px] pb-[20px]">
              <div className="p-[24px] bg-[#FFE5F9] border border-[#939393] rounded-[20px]">
                <img src={bestServices4} alt="" />
              </div>
              <div>
                <p className="text">Customer</p>
                <p className="text-[28px] font-semibold leading-[30px]">
                  Satisfaction
                </p>
              </div>
            </div>
            <div>
              <p className="text text-[16px]">
                Expert workers are highly skilled professionals with extensive
                experience in their respective fields.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services section */}

      <div className="my_container pb-[160px]">
        <div>
          <div className="flex justify-center pb-[15px]">
            <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px] text-center">
              Our Category
            </p>
          </div>

          <h2 className="heading_2 text-center pb-[50px]">
            Explore Current Service
          </h2>
          <p className="text text-center pb-[50px]">
            At CLEAN MY SPACE LTD, we provide a comprehensive range of cleaning
            services designed to meet the needs of both residential and
            commercial clients. Our commitment to quality and eco-friendly
            practices ensures that every space we clean is left in pristine
            condition. Here’s a list of our current services and some exciting
            offerings we’re looking to add in the near future:
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-wrap gap-[20px] justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full lg:w-[32%] border border-[#939393] rounded-[20px] p-[25px]`}
              style={{ backgroundColor: service.backgroundColor }}
            >
              <div className="flex justify-between pb-[25px]">
                <img
                  src={service.imgSrc}
                  className="size-[90px]"
                  alt={service.title}
                />
                <img src={Arrow} className="size-[48px]" alt="Arrow" />
              </div>
              <h3 className="text-[#1F1F1F] text-[22px] leading-[26px] pb-[20px] font-semibold">
                {service.title}
              </h3>
              <p className="text-[14px] text leading-[26px]">
                {service.description}
              </p>
            </div>
          ))}

          {/* "View All" card */}
          <div className="w-full flex items-center justify-center lg:w-[32%] border border-[#939393] rounded-[20px] bg-[#EFF2FC] p-[25px]">
            <h3 className="text-[#1F1F1F] text-[22px] leading-[26px] font-semibold">
              View All
            </h3>
          </div>
        </div>
      </div>

      {/* Exploring the Top Services */}

      <div className="my_container pb-[120px]">
        <div className="text-center pb-[15px]">
          <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px]">
            Featured Services
          </p>
        </div>

        <h2 className="heading_2 text-center pb-[50px]">
          Exploring the Top Services
        </h2>
        <p className="text text-center lg:max-w-[774px] lg:mx-auto pb-[50px]">
          We promise to prioritize your and surpass your expectations at every
          turn. Whether you’re seeking professional expertise, creative
          solutions, or reliable support.
        </p>

        {/* Top Service 1 */}
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[40px] pb-[40px] items-center">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <img
              src={TopService1}
              alt="Top Service image 1"
              className="mx-auto lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="pb-[32px]">
              <div className="flex justify-center lg:justify-start pb-[15px]">
                <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px] text-center">
                  Cleaning
                </p>
              </div>
              <h2 className="font-secondary text-[48px] text-[#1F1F1F] leading-[52px] font-semibold text-center lg:text-left">
                Post-Construction Cleaning
              </h2>
              <p className="text-[16px] leading-[24px] text-[#7A7A7A] pt-[16px] text-center lg:text-left">
                After the dust has settled, our Post-Construction Cleaning
                service ensures that your newly renovated or constructed space
                is spotless and ready for use. We tackle all the remnants of
                construction work, including:
              </p>
            </div>

            <div>
              {items1.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-[10px] pb-[20px] items-center justify-start"
                >
                  <img
                    src={checkBox}
                    className="size-[22px] text-[#48BEF7]"
                    alt=""
                  />
                  <p className="paragraph text-[18px] leading-[21px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[16px] leading-[30px] text-[#7A7A7A] pt-[16px] text-center lg:text-left">
              Our thorough approach guarantees that your space is not only clean
              but also safe and welcoming.
            </p>
            <div className="flex flex-col lg:flex-row gap-[50px] items-center pt-[30px]">
              <h3 className="text-[32px] leading-[35px] font-secondary font-semibold text-center lg:text-left">
                N100,000
              </h3>
              <Button label="Book Now" />
            </div>
          </div>
        </div>

        {/* Top Service 2 */}
        <div className="flex flex-col-reverse lg:flex-row gap-[50px] lg:gap-[40px] items-center">
          <div className="lg:w-1/2 w-full">
            <div className="pb-[32px]">
              <div className="flex justify-center lg:justify-start pb-[15px]">
                <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px] text-center">
                  Cleaning
                </p>
              </div>
              <h2 className="font-secondary text-[48px] text-[#1F1F1F] leading-[52px] font-semibold text-center lg:text-left">
                Deep Cleaning
              </h2>
              <p className="text-[16px] leading-[24px] text-[#7A7A7A] pt-[16px] text-center lg:text-left">
                Our Deep Cleaning service is designed to reach every nook and
                cranny, providing a comprehensive clean that goes beyond the
                surface. This service is ideal for:
              </p>
            </div>

            <div>
              {items2.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-[10px] pb-[20px] items-center justify-start"
                >
                  <img
                    src={checkBox}
                    className="size-[22px] text-[#48BEF7]"
                    alt=""
                  />
                  <p className="paragraph text-[18px] leading-[21px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[16px] leading-[30px] text-[#7A7A7A] pt-[16px] text-center lg:text-left">
              Whether it’s a seasonal refresh or preparation for special
              occasions, our Deep Cleaning service ensures a spotless, hygienic
              environment that enhances your comfort and peace of mind.
            </p>
            <div className="flex flex-col lg:flex-row gap-[50px] items-center pt-[30px]">
              <h3 className="text-[32px] leading-[35px] font-secondary font-semibold text-center lg:text-left">
                N30,000
              </h3>
              <Button label="Book Now" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <img
              src={TopService2}
              alt="Top Service image 2"
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Our working process */}

      <div className="my_container pb-[120px]">
        <div className="text-center pb-[15px]">
          <p className="border border-black inline-block py-[10px] px-[20px] rounded-[20px]">
            Our working process
          </p>
        </div>

        <h2 className="heading_2 text-center pb-[50px]">
          How we can make place clean
        </h2>
        <p className="text text-center lg:max-w-[774px] lg:mx-auto pb-[50px]">
          We promise to prioritize your and surpass your expectations at every
          turn. Whether you’re seeking professional Expertise, Creative
          solutions or reliable support.
        </p>

        <div
          className="w-full lg:h-[300px] bg-none bg-center bg-no-repeat lg:bg-contain"
          style={{ backgroundImage: `url(${bgDoted})` }}
        >
          <div className="grid lg:max-w-[1100px] lg:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px] px-[50px]">
            {/* First Card */}
            <div className="border lg:max-w-[278px] border-[#939393] p-[30px] rounded-[20px] lg:rotate-[-13.36deg] bg-[#E1EEE8]">
              <img src={Book} className="pb-[20px]" alt="Book" />
              <h3 className="text-[24px] font-bold font-secondary pb-[20px] leading-[30px]">
                Book Online
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4F4F4F] pb-[20px]">
                Expert workers are highly skilled professionals with extensive
                experience in their respective fields.
              </p>
            </div>

            {/* Second Card */}
            <div className="border lg:max-w-[278px] border-[#939393] p-[30px] lg:rotate-[11.36deg] rounded-[20px] bg-[#FFE9CA]">
              <img src={Confirm} className="pb-[20px]" alt="Book" />
              <h3 className="text-[24px] font-bold font-secondary pb-[20px] leading-[30px]">
                Get Confirmation
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4F4F4F] pb-[20px]">
                Expert workers are highly skilled professional with extensive in
                their respective fields.
              </p>
            </div>

            {/* Third Card */}
            <div className="border lg:max-w-[278px] border-[#939393] p-[30px] lg:rotate-[-5.71deg] rounded-[20px] bg-[#FFE5F9]">
              <img src={Enjoy} className="pb-[20px]" alt="Book" />
              <h3 className="text-[24px] font-bold font-secondary pb-[20px] leading-[30px]">
                Enjoy Services
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4F4F4F] pb-[20px]">
                Expert workers are highly skilled professional with extensive in
                their respective fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
