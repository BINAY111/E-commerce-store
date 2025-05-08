import React from 'react';
import ProductCard from './Productcard'; // Make sure this path is correct
import { productsData } from '../utils/productsData';

const Body = () => {
  return (
    <section className='flex flex-col gap-4 px-2 py-2'>
      <div className='flex gap-3 items-center'>
        <input
          type='text'
          className='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
          placeholder='Search...'
        />
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
          Search
        </button>
      </div>
      <ul className='flex flex-wrap justify-center gap-6 product-items'>
        {productsData.map((product) => (
          <li 
            key={product.id}
            className='transform transition-all duration-300 hover:scale-105 hover:z-10'
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Body;
