import React from 'react';

const ProductCardShimmer = () => {
  return (
    <div className='flex flex-col gap-3 px-4 py-4 border-2 border-slate-200 w-72 bg-white rounded-2xl shadow-md animate-pulse relative'>
      {/* Category Badge Placeholder */}
      <span className='absolute top-3 left-3 h-5 w-16 bg-blue-200 rounded-full'></span>
      
      {/* Image Placeholder */}
      <div className='overflow-hidden rounded-xl flex justify-center items-center h-44 bg-gray-200 mb-2'>
        <div className='h-full w-full bg-gray-300'></div>
      </div>

      {/* Title Placeholder */}
      <div className='h-5 bg-gray-300 rounded w-3/4'></div>

      {/* Description Placeholder */}
      <div className='h-4 bg-gray-300 rounded w-full'></div>
      <div className='h-4 bg-gray-300 rounded w-5/6'></div>

      {/* Price Placeholder */}
      <div className='h-6 bg-gray-300 rounded w-1/3 mt-2 mb-3'></div>

      {/* Button Placeholder */}
      <div className='h-10 bg-blue-300 rounded-lg mt-auto'></div>
    </div>
  );
};

export default ProductCardShimmer;
