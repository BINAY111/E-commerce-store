import React, { useState, useEffect } from "react";
import ProductCard from "./Productcard"; // Make sure this path is correct
import { productsData } from "../utils/productsData";
import ProductCardShimmer from "./productscardshimmer";
import Navbar from "../components/Navbar";

// import { BsCursor } from 'react-icons/bs';

const Body = () => {
  const [products, setProducts] = useState([]);
  const [topratedProducts, setTopratedProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const changetext = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
    setTopratedProducts(json);
  };

  const topratedproductsData = () => {
    setTopratedProducts(products.filter((product) => product.rating.rate >= 4));
  };
  const searchproducts = () => {
    const filteredProducts = topratedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setTopratedProducts(filteredProducts);
  };

  if (topratedProducts.length === 0) {
    return (
      <div className="flex flex-wrap justify-center gap-10 product-items">
        {Array.from({ length: 14 }).map((_, index) => (
          <ProductCardShimmer key={index} />
        ))}
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-4 px-2 py-2">
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Search..."
            value={searchText}
            onChange={changetext}
          />
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={searchproducts}>
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={topratedproductsData}
        >
          Top Rated Product
        </button>
      </div>
      <ul className="flex flex-wrap justify-center gap-6 product-items">
        {topratedProducts.map((product) => (
          <li
            key={product.id}
            className="transform transition-all duration-300 hover:scale-105 hover:z-10"
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
