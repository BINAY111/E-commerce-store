import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-300 py-6'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>&copy; 2024 Your Company. All rights reserved.</p>
        <div className='flex justify-center mt-4 space-x-6'>
          <a href='#' className='text-gray-400 hover:text-gray-200' aria-label='Twitter'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
            
            </svg>
          </a>
          <a href='#' className='text-gray-400 hover:text-gray-200' aria-label='Facebook'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              
            </svg>
          </a>
          <a href='#' className='text-gray-400 hover:text-gray-200' aria-label='Instagram'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
