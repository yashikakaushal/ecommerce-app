import React from 'react'
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import BlogCard1 from '../component/BlogCard1';
import BlogCard2 from '../component/BlogCard2';
import BlogCard3 from '../component/BlogCard3';
import Blog4 from '../component/Blog4'
import Container from './Container';

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className='col-3'>     
                <div className='filter-card'>
                        <h3 className='filter-title'>Find By Categories</h3>
                        <div>
                    <ul className='ps-0'>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Camera</li>
                        <li>Laptop</li>

                    </ul>
                        </div>
                    </div>
                     <div className='filter-card'>
                        <h3 className='filter-title'>SHOP By Categories</h3>
                        <div>
                    <ul className='ps-0'>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Camera</li>
                        <li>Laptop</li>

                    </ul>
                        </div>
                    </div>
                    </div>
                    
                <div  className='col-9'>
                    <div className='row'>
                      <div className='col-6 mb-3'>
                    <BlogCard1/>
                      </div>
                     <div className='col-6 mb-3'>
                    <BlogCard2/>
                      </div>
                       <div className='col-6 mb-3'>
                    <BlogCard3/>
                      </div>
                       <div className='col-6 mb-3'>
                    <Blog4/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Blog
