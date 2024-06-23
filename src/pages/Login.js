import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import Container from './Container';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      navigate('/'); // Navigate to home page after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      setError('Failed to log in. ' + error.message);
    }
  };

  return (
    <>
      <Meta title={"Login"}/>
      <BreadCrumb title="Login"/>
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Login</h3>
              {error && <p className="text-danger text-center">{error}</p>}
              <form onSubmit={handleLogin} className='d-flex flex-column gap-15'>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='mt-1'>
                  <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
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

export default Login;