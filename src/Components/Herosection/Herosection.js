
import './herosection.css';
import bgimg from '../../img/hero-img.png';

function Herosection() {
  return (
    <div >
        <div className='heroimg'>
            <img src={bgimg} width={"100%"}/>
        </div>
        <div className='herotext '>
            <h3 className='mb-3'>SUMMER COLLECTION 2024</h3> 
            <h1>STEP INTO COMFORT,<br/>
                STEP INTO STYLE</h1><br/>
        <button type='button'className='btn btn-dark btn-sm rounded-0'>EXPLORE NOW</button>
        </div>
    </div>
  );
}

export default Herosection;
