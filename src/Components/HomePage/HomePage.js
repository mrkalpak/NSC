
import './HomePage.css';

import React, { useState, useEffect } from 'react';
import Featuredpro from "../Featuredproducts/Featuredpro";
import bgimg from "../../img/hero-img.png";
import newcollection from "../../img/newcollection1.png"
import newcollection1 from "../../img/newcollection2.png"
import newcollection2 from "../../img/newcollection3.png"
import newcollection3 from "../../img/newcollection4.png"
import CoustomerTesto from '../CoustomerTesto/CoustomerTesto';
const imageList = [newcollection, newcollection1, newcollection2, newcollection3];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 2) % imageList.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div >
      <div className='heroimg'>
        <img src={bgimg} width={"100%"} alt='bgimg' />
      </div>
      <div className='herotext '>
        <h3 className='mb-3'>SUMMER COLLECTION 2024</h3>
        <h1>STEP INTO COMFORT,<br />
          STEP INTO STYLE</h1><br />
        <button type='button' className='btn btn-dark btn-sm rounded-0'>EXPLORE NOW</button>
      </div>
      <Featuredpro />
      <div className='new-collection container mt-5'>
        <div className='row ms-auto me-auto w-100'>
          <div className='col-md-6 text-white my-2'>
            <h1 className='mb-5 mt-2'>
              NEW COLLECTION <br />
              OF 2024
            </h1>
            

            <img src={imageList[currentImageIndex]} className='newcollectionimg bg-white px-5 mt-5  py-3' alt="New Collection" />
          
          </div>
          <div className='col-md-6 my-2'>
            <img src={imageList[(currentImageIndex + 1) % imageList.length]} className='newcollectionimg1 bg-white px-5 w-100 py-3' alt="New Collection" />
          </div>
            <button className='btn btn-trasperant btn-lg fs-4 my-3 px-0 text-white border-0'>SHOW THE COLLECTION <i className="bi bi-arrow-right"></i></button>
        </div>
      </div>

<CoustomerTesto/>


    </div>
  );
}

export default HomePage;
