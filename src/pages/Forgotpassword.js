import React from 'react'
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import { Link } from 'react-router-dom';
import Container from './Container';

const Forgotpassword = () => {
  return (
    <>
         <Meta title={"Forgot Password"}/>
      <BreadCrumb title="Forgot Password"></BreadCrumb>
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center'>Reset Your Password</h3>
                    <p className='text-center mt-2 mb-3'>We will send you an email to Reset your password</p>
                    <form action='' className='d-flex flex-column gap-15'>
                    
                        <div>
                            <input type="email" name="email" placeholder="Email" className="form-control"/>
                        </div>
                    
                        <div>
                         
                            <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                <button className='button border-0' type="submit">Submit</button>
                                  <Link to="/login">Cancel</Link>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Forgotpassword
