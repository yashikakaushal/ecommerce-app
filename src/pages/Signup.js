import React from 'react'
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import { Link } from 'react-router-dom';



const Signup = () => {
  return (
    <>
      <Meta title={"SignUp"}/>
      <BreadCrumb title="SignUp"></BreadCrumb>
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Create Account</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                    
                        <div>
                            <input type="text" name="name" placeholder="First Name" className="form-control"/>
                        </div>
                        <div>
                            <input type="text" name="name" placeholder="Last Name" className="form-control"/>
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email" className="form-control"/>
                        </div>
                        <div>
                            <input type="tel" name="mobile" placeholder="Mobile Number" className="form-control"/>
                        </div>
                        <div className='mt-1'>
                            <input type="password" name="password" placeholder='Password' className="form-control"/>
                        </div>
                        <div>
                            <Link to="/forgot-password">Forgot Password?</Link>
                            <div className='mt-3 d-flex justify-content-center gap-20 align-items-center'>
                                <button className='button border-0'>Sign Up</button>
                               
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
