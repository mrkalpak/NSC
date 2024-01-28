// Featuredpro.js

import React, { useEffect, useState } from 'react';
import './Featuredpro.css';
import ProductCard from '../ProductCard/ProductCard';
import product1Image from '../../img/product1.png';
import product1Image1 from '../../img/product2.png';


// const productsPerPage = 4;

const products = [
  {
    id: 1,
    name: 'Full sleeves plain Tshirt ',
    oriprice: 800,
    disprice : 500,
    image: product1Image,
    // Add more product details as needed
  },
  {
    id: 2,
    name: 'Full sleeves plain Tshirt ',
    
    oriprice: 800,
    disprice : 500,
    image: product1Image1,
    // Add more product details as needed
  },
  {
    id: 3,
    name: 'Full sleeves plain Tshirt ',
    oriprice: 800,
    disprice : 500,
    image: product1Image,
    // Add more product details as needed
  },
  {
    id: 4,
    name: 'Full sleeves plain Tshirt ',
    oriprice: 800,
    disprice : 500,
    image: product1Image1,
    // Add more product details as needed
  },
  {
    id: 5,
    name: 'Full sleeves plain Tshirt ',
    oriprice: 800,
    disprice : 500,
    image: product1Image1,
    // Add more product details as needed
  },
  // Add more products as needed
];
function Featuredpro() {
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(getProductsPerPage());

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setProductsPerPage(getProductsPerPage());
    setCurrentPage(0); // Reset current page on resize
  };

  function getProductsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 4;
    } else if (screenWidth >= 992) {
      return 3;
    } else if (screenWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  const pageCount = Math.ceil(products.length / productsPerPage);

  const displayedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="mt-5 text-white container">
      <div className=" mt-5 container  feature-head">
      <div className='d-flex '>

          <h3 className=''>Featured Products</h3>
          <a className=' ms-5 mt-2' href=''>View All</a>
      </div>
    
        <nav className='d-flex justify-content-center mt-2' aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
              <button className="page-link  rounded-circle" onClick={() => handlePageClick(currentPage - 1)}>
                <i className="bi bi-caret-left-fill"></i>
              </button>
            </li>
            <div className="m-2">
              {currentPage + 1} / {pageCount}
            </div>
            <li className={`page-item ${currentPage === pageCount - 1 ? 'disabled' : ''}`}>
              <button className="page-link rounded-circle" onClick={() => handlePageClick(currentPage + 1)}>

                <i className="bi bi-caret-right-fill"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='row ms-auto me-auto width-row' >
        {displayedProducts.map((product) => (
          <div key={product.id} className={`col-md-${12 / displayedProducts.length} mb-4`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featuredpro;