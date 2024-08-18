import React from 'react';
import banner from '../../assets/Banner.png';

function Banner({ heading }) {
  return (
    <div
      className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="font-extrabold font-secondary text-[120px] leading-[140px] text-center">
        {heading}
      </h1>
    </div>
  );
}

export default Banner;

