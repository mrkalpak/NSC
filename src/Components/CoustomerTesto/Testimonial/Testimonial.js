//// ProductCard.js

import React from 'react';
import './Testimonial.css';

function Testimonial({ testimonials }) {
    const rating = testimonials.rating;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = hasHalfStar ? 4 - filledStars : 5 - filledStars;
  
   

    const stars = Array.from({ length: filledStars }, (_, index) => (
        <i  key={index} className="bi bi-star-fill"></i>
      ));
    
      if (hasHalfStar) {
        stars.push(<i key="half"  className="bi bi-star-half"></i>);
        
      }
    
      stars.push(
        ...Array.from({ length: emptyStars }, (_, index) => (
        
           <i  key={filledStars + (hasHalfStar ? 1 : 0) + index} className="bi bi-star"></i>
        ))
      );

  return (
    <div className="card m-2   border-0 text-white">
      <img src={testimonials.image}  className="card-img-top-testimonials bg-white my-4 rounded-circle" alt={testimonials.name} />
      <div className=" my-2 text-center">
        <p className=" desc px-2">{testimonials.discription}</p>
        <div className="stars-container">{stars }</div>
        <h4>
        {testimonials.name}
        </h4>
       
      </div>
    </div>
  );
}

export default Testimonial;
