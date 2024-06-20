import React from 'react'
import {Link} from 'react-router-dom'
import { IoIosGift  } from "react-icons/io";
import {BsHeadset} from "react-icons/bs";
import {FaRegCreditCard} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa6";
import Marquee from 'react-fast-marquee';
import BlogCard from '../component/BlogCard';
import Blog2 from '../component/Blog2'
import Specialproduct from '../component/Specialproduct';
import ProductCard from '../component/ProductCard';
import ProductC from '../component/ProductC';
import ProductC2 from '../component/ProductC2';
import ProductC3 from '../component/ProductC3';
import Blog3 from '../component/Blog3';
import BlogCard4 from '../component/BlogCard4'
import Container from './Container';
import { services } from '../util/Data'

const Home = () => {
  return (
    <>
    
  <img src="assests/online-1.jpg" class="img-fluid" alt="..."></img>


     
      <Container class1 ="home-wrapper-2 py-5">
<div className='row'>
 <div className='col-12'>
      <div className='servies d-flex align-items-center justify-content-between'>
     
        <div  className="d-flex align-items-center gap-15">
         <FaTruckFast className='fs-2'/>
          <div>
            <h6>Free Shipping</h6>
            <p className="mb-0">From all orders over $5</p>
          </div>
        </div>
        <div  className="d-flex align-items-center gap-15">
          <IoIosGift className='fs-2'/> 
          <div>
            <h6>Daily Surprise Offers</h6>
            <p className="mb-0">Save upto 25% off</p>
          </div>
        </div>
        <div  className="d-flex align-items-center gap-15">
        <BsHeadset className='fs-2'/>
          <div>
            <h6>Support 24/7</h6>
            <p className="mb-0">Shop with an expert</p>
          </div>
        </div>
        <div  className="d-flex align-items-center gap-15">
<FaPaperclip className='fs-2'/>
          <div>
            <h6>Affordable Prices</h6>
            <p className="mb-0">Get Factory Default Price</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-15">
          <FaRegCreditCard className='fs-2'/>
          <div>
            <h6>Secure Payments</h6>
            <p className="mb-0">100% Protected Payment</p>
          </div>
        </div>

      </div>
    </div>
    </div>
      </Container>
      <Container class1 ="featured-wrapper py-5 home-wrapper-2">
  <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
              <img src="assests/famous-1.jpg" className='img-fluid' alt="famous"/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-white'>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo."</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
              <img src="assests/famous-0.jpg" className='img-fluid' alt="famous"/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>STUDIO DISPLAY</h5>
                <h6 className='text-dark'>600 nits of brightness.</h6>
                <p className='text-dark'>27-inch 5k Retina display</p>
                </div>
              </div>
            </div>
             <div className='col-3'>
              <div className='famous-card position-relative'>
              <img src="assests/famous-3.jpg" className='img-fluid' alt="famous"/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>SMART  PHONES</h5>
                <h6 className='text-dark'>Smartphone 13 Pro</h6>
                <p className='text-dark'>Now in Green From $999.00 or $41.62/mo for 24 mo Footnote*</p>
                </div>
              </div>
            </div>
             <div className='col-3'>
              <div className='famous-card position-relative'>
              <img src="assests/famous-4.jpg" className='img-fluid' alt="famous"/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>HOME SPEAKERS</h5>
                <h6 className='text-dark'>Room-filling sound</h6>
                <p className='text-dark'>From $699 or $116.58/mo. for 12 mo*</p>
                </div>
              </div>
            </div>
          </div>
      </Container>
    

      
  
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
<div className='row'>
<div className='col-15'>
  <h3 className='section-heading'>Our Popular Products</h3>
</div>
<div className='row'>
  
<ProductCard />
<ProductC />
<ProductC2 />
<ProductC3/>
</div>
</div>
      </Container>

      <Container class1='marque-wrapper py-5'>
  <div className='row'>
    <div className='col-12'>
      <div className='marquee-inner-wrapper card-wrapper'>
        <Marquee className='d-flex'>
<div className='mx-4 w-25'>
<img src="assests/brand-1.png" alt="brand"/>
</div>
<div className='mx-4 w-25'>
<img src="assests/brand-2.jpg" alt="brand"/>
</div>
<div className='mx-4 w-25'>
<img src="assests/brand-3.png" alt="brand" />
</div>
<div className='mx-4 w-25'>
  <img src="assests/brand-4.png" alt="brand" />
</div>
<div className='mx-4 w-25'>
  <img src="assests/brand-5.png" alt="brand" />
</div>
<div className='mx-4 w-25'>
  <img src="assests/brand-6.png" alt="brand" />
</div>
<div className='mx-4 w-25'>
  <img src="assests/brand-7.png" alt="brand" />
</div>
<div className='mx-4 w-25'>
  <img src="assests/brand-8.png" alt="brand" />
</div>
        </Marquee>
      </div>
    </div>
  </div>

      </Container>

      <Container class1='blog-wrapper py-5 home-wrapper-2'>

<div className='row'>
<div className='col-12'>
  <h3 className='section-heading'>Our Latest Blogs</h3>
</div>
</div>
<div className="row">
  <div className='col-3'>
    <BlogCard />
  </div>
   <div className='col-3'>
    <Blog2 />
  </div> 
  <div className='col-3'>
    <Blog3 />
  </div> 
  <div className='col-3'>
    <BlogCard4 />
  </div>
  </div>
      </Container>
    </>
  );
  
}

export default Home;
