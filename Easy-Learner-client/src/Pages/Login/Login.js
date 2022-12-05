import React, { useContext } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {

    const {user, googleLogin, githubLogin,  faceBookLogin, userLoginWidthUserPassword  } = useContext(AuthContext)
    const Navigate = useNavigate();
    const Location = useLocation();
    const from = Location.state?.from?.pathname || '/';


    const HandelToGoogleLogin = () =>{
        googleLogin()
        .then((result) => {
          toast.success('success fully Login')
            Navigate(from, {replace: true})
          }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    }

    //github login
const handleGithubLogin = () => {
        githubLogin()
        .then((result) => {
          toast.success('success fully Login')
          Navigate(from, {replace: true})
        }).catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage)
        });
        
    }
    //facebook login
    const HandelToFacebookLogin = () =>{
        faceBookLogin()
        .then((result) => {
            toast.success('success fully Login')
            Navigate(from, {replace: true})
          }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
        
    }
    const HandelToLogin = (e) => {
      e.preventDefault();
      const form = e.target;;
      const email = form.Email.value;
      const Password = form.Password.value;

      userLoginWidthUserPassword(email, Password)
      .then((result) => {
        toast.success('success fully Login')
        Navigate(from, {replace: true})
      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage)
      });


    }
    return (
        <div >
        
        <div className="form-container col-lg-7 m-auto p-3 mt-5">
            <div>
                <h1 className='text-center fs-1 spatial-Font-Family '> Register</h1>
                <div className='my-4 d-flex justify-content-center'>
                    <Link className="spatial-btn " onClick={HandelToGoogleLogin}> <FcGoogle className='fs-1' /></Link>
                    <Link  className="spatial-btn mx-3" onClick={handleGithubLogin}><FaGithub className='fs-1' /></Link>
                    <Link  className="spatial-btn" onClick={HandelToFacebookLogin}><FaFacebookSquare className='fs-1' /></Link>
                
                </div>
                <Form onSubmit={HandelToLogin} className='p-5'>
                            <FloatingLabel controlId="floatingInputGrid1" label="Email address">
                                     <Form.Control type="email" name='Email' placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel className='mt-4' controlId="floatingInputGrid2" label="Enter Password">
                                     <Form.Control type="password" name='Password' placeholder="Enter Password" />
                            </FloatingLabel>
                            <Link className='mt-3' to='/forgetPassword'>Forget password?</Link>
                            <div className='mt-4'>
                                <button className='spatial-btn w-100 border-0' type="Submit" > Login </button>
                            </div>
                    </Form>
                    <p className='text-center'>Don't have an Account? <Link to='/register'>Register</Link></p>
            
            </div>
        
        </div>
            
        </div>
    );
};

export default Login;