import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import Container from './Container';

const Login = () => {
  return (
    <>
      <Meta title={"Login"}/>
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
                <div>
                </div>
                <div className='mt-1'>
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
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

