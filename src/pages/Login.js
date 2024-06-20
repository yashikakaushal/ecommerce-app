import React from 'react';
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import { Link } from 'react-router-dom';
import Container from './Container';


const Login = () => {
  return (
   <>
         <Meta title={"Login"}/>
      <BreadCrumb title="Login"></BreadCrumb>
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center'>Login</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                    
                        <div>
                            <input type="email" name="email" placeholder="Email" className="form-control"/>
                        </div>
                        <div className='mt-1'>
                            <input type="password" name="password" placeholder='Password' className="form-control"/>
                        </div>
                        <div>
                            <Link to="/forgot-password">Forgot Password?</Link>
                            <div className='mt-3 d-flex justify-content-center gap-20 align-items-center'>
                                <button className='button border-0' type='submit'>Login</button>
                                <Link to="/signup" className='button signup'>SignUp</Link>
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

export default Login
