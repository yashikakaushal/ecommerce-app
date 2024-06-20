import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import Container from './Container';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    const auth = getAuth();
    const db = getFirestore();

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      });

      // Store all user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        mobile,
        createdAt: new Date(),
        lastLogin: new Date(),
        uid: user.uid
      });

      console.log("User signed up successfully and data stored in Firestore");
      navigate('/'); // Navigate to home page after successful signup
    } catch (error) {
      console.error("Error signing up:", error);
      setError('Failed to sign up. ' + error.message);
    }
  };

  return (
    <>
      <Meta title={"SignUp"}/>
      <BreadCrumb title="SignUp"/>
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Create Account</h3>
              {error && <p className="text-danger text-center">{error}</p>}
              <form onSubmit={handleSignup} className='d-flex flex-column gap-15'>
                <div>
                  <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    className="form-control" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    className="form-control" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    required
                  />
                </div>
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
                <div>
                  <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="Mobile Number" 
                    className="form-control" 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} 
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
                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button type="submit" className='button border-0'>Sign Up</button>
                    <Link to="/login" className='button signup'>Login</Link>
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

export default Signup;