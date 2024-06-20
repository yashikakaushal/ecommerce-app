import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const ProductCard = () => {

 return (
<>

<div className="col-3">
        <Link to=":id" className='product-card position-relative'>
        <div className='wishlist-icon position-absolute' >
          <button className="border-0 bg-transparent"><AiOutlineHeart/></button>
        </div>
         <div className='action-bar position-absolute'>
              <div className='d-flex  flex-column gap-15'>
                <Link className='text-black'> <FaExpandArrowsAlt/></Link>
                <Link className='text-black'> <FaCommentDots/></Link>
                <Link className='text-black'><FaBell/> </Link>
                
              </div>
            </div>
            <div className='product-image'>
                <img src="assests/personal-2.jpg" className="img-fluid" alt="product-image"/>
                <img src="assests/camera-1.jpg" className="img-fluid"  alt="product-image"/>
      
            </div>
            
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
 <ReactStars
    count={5}
    size={24} value={4}
    edit={false}
    activeColor="#ffd700"
  />
  
                <p className='price'>$100.00</p>
            </div>
           
        </Link>
    </div>
   </>
  );
}

export default ProductCard;
