import React from 'react';
import { LOGO_URL } from '../utils/constant';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4 text-xl bg-white shadow-sm'>
      <div>
        <img
          src={LOGO_URL}
          alt='Store Logo'
          className='w-20 h-20'
        />
        <h1>SUPER BRAND STORE</h1>
        <h2>Owner:MR. BINAY CHAUDHARY THARU</h2>
      </div>
      <ul className='flex justify-between list-none w-96'>
        <li>
          <a 
            href='#' 
            className='relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 group'
          >
            Home
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>
        <li>
          <a 
            href='#' 
            className='relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 group'
          >
            About
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>
        <li>
          <a 
            href='#' 
            className='relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 group'
          >
            Contact
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>
      </ul>
      <div className='px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer'>
        Cart
      </div>
    </nav>
  );
};

export default Navbar;
