import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import Meta from './Meta';
import ReactStars from "react-rating-stars-component";
import { FiAlignJustify } from "react-icons/fi";
import ProductCard from './ProductCard';
import ProductC from './ProductC';
import ProductC2 from './ProductC2';
import ProductC3 from './ProductC3';

const OurStore = () => {
   const [grid ,setGrid ] = useState(4);
  return (
    <div>
   <Meta title={"Our Store"}/>
      <BreadCrumb title="Our Store"></BreadCrumb>
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Shop By Categories</h3>
                        <div>
                    <ul className='ps-0'>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Camera</li>
                        <li>Laptop</li>

                    </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Filter By</h3>
<div>
    <h5 className='sub-title'>Availabilty</h5>
    <div>
        <div className='form-check'>
        <input className='form-check-input' type="checkbox" value="" id="" />
            <label className='form-check-label' for="">In Stock {1}</label>
    </div>
     <div className='form-check'>
        <input className='form-check-input' type="checkbox" value="" id="" />
            <label className='form-check-label' for="">Out of Stock {0}</label>
    </div>
    </div>
</div>
    <h5 className='sub-title'>Price</h5>
<div className='d-flex align-items-center gap-10'>
    <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
        <label htmlfor="floatingInput">From</label>
    </div>
    <div className="form-floating ">
        <input type="email" className="form-control"  id="floatingInput" placeholder="To"/>
        <label htmlfor="floatingInput">To</label>
    </div>
</div>
    <h5 className='sub-title'>Colors</h5>
<div>
    <ul className='colors ps-0'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>

    </ul>
</div>
    <h5 className='sub-title'>Size</h5>
<div>
     <div>
        <div className='form-check'>
        <input className='form-check-input' type="checkbox" value="" id="color-1" />
            <label className='form-check-label' htmlfor="color-1"> S {2}</label>
    </div>
     <div className='form-check'>
        <input className='form-check-input' type="checkbox" value="" id="color-2" />
            <label className='form-check-label' htmlfor="color-2">M {2}</label>
    </div>
    </div>
</div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Product Tags</h3>
<div>
    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Oppo</span>
        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Speaker</span>
        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Tablet</span>
        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Vivo</span>
        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>

 </div>
</div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Random Product</h3>
<div>
    <div className='random-products mb-5 d-flex'>
<div className='w-50'>
    <img src='assests/personal-5.jpg' className='img-fluid' alt="" />
</div>
  <div className='w-50'>
                    <h5>Kids watch Smart bulk 10 pack multi colored for students</h5>
                    <ReactStars
    count={5}
    size={24} value={4}
    edit={false}
    activeColor="#ffd700"
  />
  <b>$ 300</b>
                </div>
                  </div>
                   <div className='random-products d-flex'>
<div className='w-50'>
    <img src='assests/TV.jpg' className='img-fluid' alt="" />
</div>
  <div className='w-50'>
                    <h5>Kids watch Smart bulk 10 pack multi colored for students</h5>
                    <ReactStars
    count={5}
    size={24} value={4}
    edit={false}
    activeColor="#ffd700"
  />
  <b>$ 300</b>
                </div>
                  </div>
</div>
                </div>
            </div>
            <div className='col-9'>
                <div className='filter-sort-grid mb-4'>
                   <div className='d-flex justify-content-between align-items-center'>
                     <div className='d-flex align-items-center gap-10'>
                        <p className='mb-0 d-block' style={{"width" : "100px"}}>Sort By :</p>
                        <select name=''className='form-control form-select' id=''>
                            <option value="manual">Featured</option>
                            <option value="best-selling" selected="selected">Best Selling</option>
                            <option value="title-ascending">Alphabetically, A-Z</option>
                            <option value="price-ascending">Price, Low to high</option>
                            <option value="price-ascending">Price, high to Low </option>
                            <option value="created-ascending">Date, old to new</option>
                            <option value="created-descending">Date, new toold</option>


                        </select>
                    </div>
                    <div className='d-flex align-items-center gap-10'>
                        <p className='totalproducts mb-0'>21 Products</p>
                        <div className='d-flex gap-10 align-items-center grid'>
                          <img src ="assests/align-3.png" onClick={()=>{setGrid(3);}} className='d-block img-fluid' />
                          <img src ="assests/align-2.jpg" onClick={()=>{setGrid(4);}} className='d-block img-fluid' />
                          <img src="assests/align-1.jpg" onClick={()=>{setGrid(6);}} className='d-block img-fluid' />
                          <FiAlignJustify onClick={()=>{setGrid(12);}} className='d-block img-fluid' />
                        </div>
                    </div>
                   </div>
                </div>
                <div className="products-list pb-5">
                    <div className="d-flex gap-10 flex-wrap">
                        <ProductCard grid={grid} />
                        <ProductC grid={grid} />
                        <ProductC2 grid={grid} />
                        <ProductC3 grid={grid} />


                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
      </div>
    
  );
}

export default OurStore;



