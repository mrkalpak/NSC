//// ProductCard.js

import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="card m-2  bg-transparent border-0 text-white">
      <img src={product.image}  className="card-img-top bg-white  rounded-0" alt={product.name} />
      <div className=" my-2">
        <p className="card-title">{product.name}</p>
        <p className="card-text">₹ {product.disprice} <span className='text-secondary text-decoration-line-through'>₹ {product.oriprice}</span></p>
       <a className='card-text text-decoration-underline' href='./'>Quick Shop</a>
      </div>
    </div>
  );
}

export default ProductCard;
