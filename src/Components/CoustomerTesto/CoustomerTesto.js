// import React from 'react';
import { ReactComponent as Highquality } from '../../img/high-quality.svg';
import { ReactComponent as Warrenty } from '../../img/warrenty.svg';
import { ReactComponent as Shipping } from '../../img/shipping.svg';
import './CoustomerTesto.css';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import customerimg from '../../img/customer.png';
import Testimonial from './Testimonial/Testimonial';
// import customerimg from '../../img/product2.png';


const testimonials = [
    {
        id: 1,
        name: 'James K.',
        role: 'Traveler',
        discription: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        image: customerimg,
        rating: 4.5,
    },
    {
        id: 2,
        name: 'James K.',
        role: 'Traveler',
        discription: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        image: customerimg,
        rating: 3.5,
    },
    {
        id: 3,
        name: 'James K.',
        role: 'Traveler',
        discription: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        image: customerimg,
        rating: 5,
    },
    {
        id: 4,
        name: 'James K.',
        role: 'Traveler',
        discription: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        image: customerimg,
        rating: 5,
    },
    {
        id: 5,
        name: 'James K.',
        role: 'Traveler',
        discription: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        image: customerimg,
        rating: 5,
    },
    // Add more products as
];
function CoustomerTesto() {
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
            return 3;
        } else if (screenWidth >= 992) {
            return 3;
        } else if (screenWidth >= 768) {
            return 2;
        } else {
            return 1;
        }
    }

    const pageCount = Math.ceil(testimonials.length / productsPerPage);

    const displayedProducts = testimonials.slice(
        currentPage * productsPerPage,
        (currentPage + 1) * productsPerPage
    );

    const handlePageClick = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <>
            <div className='container-fluid feature py-5'>
                <div className='row g-5  ms-auto me-auto text-white'>
                    <div className='col-md-4 '>
                        <div className='row'>
                            <div className='col-auto'>

                                <Highquality />
                            </div>
                            <div className='col'>
                                High Quality <br />
                                <span style={{ fontSize: "13px" }}>Crafted from top materials</span>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='row'>
                            <div className='col-auto'>

                                <Warrenty />
                            </div>
                            <div className='col'>
                                Warrany Protection <br />
                                <span style={{ fontSize: "13px" }}>Over 2 years</span>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='row'>
                            <div className='col-auto'>

                                <Shipping />
                            </div>
                            <div className='col'>
                                Free Shipping <br />
                                <span style={{ fontSize: "13px" }}>Order over ₹500 /- </span>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-fluid text-white text-center pt-3'>
                <h3 className='mt-5'>
                    This Is What Our Customers Say
                </h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis


            </div>
            <div className='row ms-auto me-auto width-row mt-3' >
                {displayedProducts.map((testimonial) => (
                    <div key={testimonial.id} className={`col-md-${12 / displayedProducts.length} mb-4`}>
                        <Testimonial testimonials ={testimonial}/>
                    </div>
                ))}
            </div>

            <nav className='d-flex justify-content-center mt-2' aria-label="Page navigation example">
                <ul className="pagination pagination-testimonials">
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

        </>
    );
}

export default CoustomerTesto;
