import React from 'react';
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import Color from '../component/Color'
import Container from './Container';

const CompareProduct =() =>{
    return (
     <>
         <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container className='compare-product-wrapper py-5 home-wrapper-2'>

<div className='row'>
<div className='col-3'>
<div className='compare-product-card position-relative'>
<img src='assests/cross.png' alt='cross' className='position-absolute cross img-fluid'></img>
    <div className='product-card-image'>
        <img src="assests/personal-5.jpg" alt='watch'/>
    </div>
    <div className="compare-product-details">
        <h5 className="title">Honor T1 7.0 1GB RAM 7Inch with Wi-Fi-3G Tablet</h5>
        <h6 className="price mb-3 mt-3">$ 100</h6>

    </div>
    <div className="product-detail">
        <h5>Brand:</h5>
        <p>Havels</p>
    </div>
    <div className="product-detail">
        <h5>Type:</h5>
        <p>Watch</p>
    </div>
    <div className="product-detail">
        <h5>Availablity:</h5>
        <p>In Stock</p>
    </div>
    <div className="product-detail">
        <h5>Color:</h5>
        <Color/>
    </div>
    <div className="product-detail">
        <h5>Size:</h5>
       <div className='d-flex gap-10'>
        <p>S</p>
        <p>M</p>

       </div>
    </div>
</div>
</div>
<div className='col-3'>
<div className='compare-product-card position-relative'>
<img src='assests/cross.png' alt='cross' className='position-absolute cross img-fluid'></img>
    <div className='product-card-image'>
        <img src="assests/personal-1.jpg" alt='watch'/>
    </div>
    <div className="compare-product-details">
        <h5 className="title">Honor T1 7.0 1GB RAM 7Inch with Wi-Fi-3G Tablet</h5>
        <h6 className="price mb-3 mt-3">$ 100</h6>

    </div>
    <div className="product-detail">
        <h5>Brand:</h5>
        <p>Havels</p>
    </div>
    <div className="product-detail">
        <h5>Type:</h5>
        <p>Watch</p>
    </div>
    <div className="product-detail">
        <h5>Availablity:</h5>
        <p>In Stock</p>
    </div>
    <div className="product-detail">
        <h5>Color:</h5>
        <Color/>
    </div>
    <div className="product-detail">
        <h5>Size:</h5>
       <div className='d-flex gap-10'>
        <p>S</p>
        <p>M</p>

       </div>
    </div>
</div>
</div>
<div className='col-3'>
<div className='compare-product-card position-relative'>
<img src='assests/cross.png' alt='cross' className='position-absolute cross img-fluid'></img>
    <div className='product-card-image'>
        <img src="assests/homepod-3.jpg" alt='watch'/>
    </div>
    <div className="compare-product-details">
        <h5 className="title">Honor T1 7.0 1GB RAM 7Inch with Wi-Fi-3G Tablet</h5>
        <h6 className="price mb-3 mt-3">$ 100</h6>

    </div>
    <div className="product-detail">
        <h5>Brand:</h5>
        <p>Havels</p>
    </div>
    <div className="product-detail">
        <h5>Type:</h5>
        <p>Watch</p>
    </div>
    <div className="product-detail">
        <h5>Availablity:</h5>
        <p>In Stock</p>
    </div>
    <div className="product-detail">
        <h5>Color:</h5>
        <Color/>
    </div>
    <div className="product-detail">
        <h5>Size:</h5>
       <div className='d-flex gap-10'>
        <p>S</p>
        <p>M</p>

       </div>
    </div>
</div>
</div>
<div className='col-3'>
<div className='compare-product-card position-relative'>
<img src='assests/cross.png' alt='cross' className='position-absolute cross img-fluid'></img>
    <div className='product-card-image'>
        <img src="assests/iphone-1.jpg" alt='watch'/>
    </div>
    <div className="compare-product-details">
        <h5 className="title">Honor T1 7.0 1GB RAM 7Inch with Wi-Fi-3G Tablet</h5>
        <h6 className="price mb-3 mt-3">$ 100</h6>

    </div>
    <div className="product-detail">
        <h5>Brand:</h5>
        <p>Havels</p>
    </div>
    <div className="product-detail">
        <h5>Type:</h5>
        <p>Watch</p>
    </div>
    <div className="product-detail">
        <h5>Availablity:</h5>
        <p>In Stock</p>
    </div>
    <div className="product-detail">
        <h5>Color:</h5>
        <Color/>
    </div>
    <div className="product-detail">
        <h5>Size:</h5>
       <div className='d-flex gap-10'>
        <p>S</p>
        <p>M</p>

       </div>
    </div>
</div>
</div>
</div>
</Container>
  
    </>
    )
}
export default CompareProduct;