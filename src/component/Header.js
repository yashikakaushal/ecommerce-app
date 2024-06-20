import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return(
    <>

<header className='header-upper py-3'>
  <div className='container-xxl'>
<div className='row'>
  <div className='col-4'><h2><Link className='text-white me-3'>Dev Corner</Link></h2></div>
 <div className='col-4'> <h4><Link className='text-white me-3'>E-commerce Online Shopping</Link></h4></div>
 
<div className='col-2'>
<div className='header-upper-links d-flex align-items-center justify-content-between text-white'>
  
    <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
  <div>
    <i class="fa-regular fa-user text-white fa-2x"></i><p className='mb-0'>Log in <br/> My Account</p>
  </div>
  </Link>
  <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
  <div className='d-flex flex-column '>
<i class="fa-solid fa-cart-shopping text-white fa-2x"></i>
    <span className='badge bg-white text-dark'>0</span>
    <p className='mb-0'> $ 500</p>
  </div>
</Link>
  </div>
</div>
</div>
</div>
</header>
<header className='header-bottom py-3'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className='menu-bottom d-flex  align-items-center gap-30'>
       
          <div className='menu-links'>
            <div className='d-flex align-items-center gap-15'>
              <NavLink to="/"> Home</NavLink>
              <NavLink to="/product">Our Store</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/contact">Contact</NavLink>

            </div>
          </div>
          <div></div>
          <div></div>

        </div>
      </div>
    </div>
  </div>
</header>
    </>
  )
};
export default Header;
