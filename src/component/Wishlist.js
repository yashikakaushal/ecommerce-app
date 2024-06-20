import React from 'react'
import BreadCrumb from './BreadCrumb';
import Meta from './Meta';

const Wishlist = () => {
  return (
   <>
     <Meta title={"Wishlist"}/>
      <BreadCrumb title="Wishlist"></BreadCrumb>
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
        <div className="row">
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img src='assests/cross.png' alt='cross' className='position-absolute cross img-fluid'></img>
                    <div className='wishlist-card-image'>
<img src="assests/personal-5.jpg" alt='watch' className='img-fluid w-100'></img>
                    </div>
                    <div className=' py-3 px-3'>
                        <h5 className="title"> Honor T1 7.0 1GB RAM 7Inch with Wi-Fi-3G Tablet</h5>
                    <h6 className="price">$ 100 </h6>

                    </div>
                </div>
            </div>
             <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img src='assests/cross.png' alt='cross' className='position-absolute cross img-fluid'></img>
                    <div className='wishlist-card-image'>
<img src="assests/personal-5.jpg" alt='watch' className='img-fluid w-100'></img>
                    </div>
                    <div className=' py-3 px-3'>
                        <h5 className="title"> Honor T1 7.0 1GB RAM 7Inch with Wi-Fi-3G Tablet</h5>
                    <h6 className="price">$ 100 </h6>

                    </div>
                </div>
            </div>
             <div className='col-3'>
                <div className='wishlist-card position-relative'>
                <img src='assests/cross.png' alt='cross' className='position-absolute cross img-fluid'></img>
                    <div className='wishlist-card-image'>
<img src="assests/personal-5.jpg" alt='watch' className='img-fluid w-100'></img>
                    </div>
                    <div className=' py-3 px-3'>
                        <h5 className="title"> Honor T1 7.0 1GB RAM 7Inch with Wi-Fi-3G Tablet</h5>
                    <h6 className="price">$ 100 </h6>

                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
   </>
  )
}

export default Wishlist
