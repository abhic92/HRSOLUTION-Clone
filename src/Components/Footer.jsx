import React from 'react';
import left from '../assets/left.png'
import right from '../assets/right.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t py-5 border-black px-4 md:px-30 relative ">
      <div className="absolute top-0 left-0 w-28 h-28">
      <img src={left} alt className='hidden lg:block w-full h-full object-contain'></img>
      </div>
      <div className='absolute top-0 right-0 w-28 h-28'>
        <img src={right} alt className='hidden lg:block w-full h-full object-contain'></img>
      </div>
    </footer>
  );
};

export default Footer;