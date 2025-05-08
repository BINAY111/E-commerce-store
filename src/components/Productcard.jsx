import React from 'react';

const ProductCard = ({image,title,description,price,category}) => {
  return (
    <div className='flex flex-col gap-3 px-4 py-4 border-2 border-slate-200 w-72 bg-white rounded-2xl shadow-md transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 relative'>
      {/* Category Badge */}
      <span className='absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm'>{category}</span>
      {/* Product Image */}
      <div className='overflow-hidden rounded-xl flex justify-center items-center h-44 bg-gray-50 mb-2'>
        <img
          src={image}
          alt={title}
          className='object-contain h-full w-full transition-transform duration-300 hover:scale-105'
        />
      </div>
      {/* Product Title */}
      <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
      {/* Product Description */}
      <p className='text-sm text-gray-600 line-clamp-2'>{description}</p>
      {/* Product Price */}
      <h3 className='text-xl font-semibold text-green-600 mt-2 mb-3'>${price}</h3>
      {/* Add to Cart Button */}
      <button className='mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition-colors duration-200 font-semibold'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
