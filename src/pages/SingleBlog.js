import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft} from 'react-icons/hi';
const SingleBlog = () => {
  return (
   <>
      <Meta title={"Dynamic Blog Name"}/>
      <BreadCrumb title="Dynamic Blog Name"></BreadCrumb>
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className='col-12'>     
                <div className="single-blog-card">
                <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className="fs-5"/>Go back to Blogs</Link>
                  <h3 className='title'>
                    A Beautiful Sunday Morning Renaissance
                  </h3>
                  <img src='assests/blog-3.jpg' className='img-fluid w-100 my-4' alt='' />
                  <p>
                    You're only as good as your last collection,which is an enormus pressure.I think there is something about
                    luxury its not something people need,but its what they want. It really pulls at their heart. I have a fantastic
                    relationship with money. Scelerisque sociosqu ullamcorper urna nist pretium commout inceptos cum condimentum place 
                  .
                  </p>
                </div>
                </div>
              
            </div>
        </div>
      </div>
   </>
  )
}

export default SingleBlog;
