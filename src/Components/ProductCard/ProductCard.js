//// ProductCard.js

import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="card m-2  bg-transparent border-0 text-white"  onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <img  src={isHovered ? product.fullimage : product.image}  className="card-img-top bg-white  rounded-0" alt={product.name} />
      <div className=" my-2">
        <p className="card-title">{product.name}</p>
        <p className="card-text">₹ {product.disprice} <span className='text-secondary text-decoration-line-through'>₹ {product.oriprice}</span></p>
       <a className='card-text text-decoration-underline' href='./'>Quick Shop</a>
      </div>
    </div>
  );
}

export default ProductCard;
