import  React, { useState } from 'react';
import ProductCard from './Productcard'; // Make sure this path is correct
import { productsData } from '../utils/productsData';
// import { BsCursor } from 'react-icons/bs';

const Body = () => {
 const [topratedProducts, settopratedproducts] = useState([]);
 
 
 useeffect(() => {
  fetchproducts();
  }, []);

  const fetchproducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    settopratedproducts(json);
  };

  const topratedproductsData = () => {
  settopratedproducts (topratedProducts.filter((product) => product.rating.rate >= 4));
    console.log(topratedProducts);
  };
  return (
    <section className='flex flex-col gap-4 px-2 py-2'>
      <div className='flex gap-10 items-center'>
        <div className='flex items-center gap-2'>
          <input
            type='text'
            className='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
            placeholder='Search...'
          />

          Search
        </div>
          <button className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'onClick={topratedproductsData}>
            Top Rated Product
          </button>
      </div>
      <div className='flex flex-wrap justify-center gap-6 product-items'>
        {topratedProducts.map((product) => (
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
      </div>
    </section>
  );
};

export default Body;
