import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
      <div className='blog-card'>
        <div className='card-image'>
          <img src="assests/blog-3.jpg" className='img-fluid w-200' alt="blog"/>
        
        <div className='blog-content'>
          <p className='date'> 1 Dec,2022</p>
        <h5 className='title'>
          A beautiful sunday morning renaissance
        </h5>
        <p className='desc'></p>
        <Link to="/" className='button'>Read More</Link>
        </div>
        </div>
      </div>
   
  )
}

export default BlogCard
