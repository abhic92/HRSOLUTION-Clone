import React from 'react';
import bannerImage from '../assets/banner.webp';

const Banner = () => (
  <header
    className="relative bg-cover bg-center h-120"
    style={{ backgroundImage: `url(${bannerImage})` }}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
        Streamlining HR, Elevating Workforce!
      </h1>
    </div>
  </header>
);

export default Banner;