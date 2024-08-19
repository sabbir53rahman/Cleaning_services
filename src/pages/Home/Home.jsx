import React from "react";
import Banner from "../../components/Banner/Banner";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

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
          <p className="text text-center p-[32px]">
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
          <p className="text text-center p-[32px]">
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
    </>
  );
}

export default Home;
