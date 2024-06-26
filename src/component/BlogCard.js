import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
      <div className='blog-card'>
        <div className='card-image'>
          <img src="assests/blog-1.jpg" className='img-fluid w-100' alt="blog"/>
        
        <div className='blog-content'>
          <p className='date'> 1 Dec,2022</p>
        <h5 className='title'>
          A beautiful sunday morning renaissance
        </h5>
        <p className='desc'></p>
        <Link to="/blog/:id" className='button'>Read More</Link>
        </div>
        </div>
      </div>
   
  )
}

export default BlogCard
