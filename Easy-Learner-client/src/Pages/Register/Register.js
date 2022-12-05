import React, { useContext, useState } from 'react';
import { Form, Col, Row, FloatingLabel, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const {user, googleLogin, githubLogin, faceBookLogin, registerWidthUserId, updateUserProfile, emailVerify  } = useContext(AuthContext)
    const [Error, setError] = useState({emailError:'', passwordError:''})
    const Navigate = useNavigate();

    const HandelToGoogleReg = () =>{
        googleLogin()
        .then((result) => {
            const user = result.user;
            toast.success('you are successfully signup');
            Navigate('/')
          }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    }
    const HandelToGithubReg = () =>{
        githubLogin()
        .then((result) => {
            toast.success('You are successfully signup ')
            const user = result.user;
            Navigate('/');
          }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    }
    const HandelToFacebookReg = () =>{
        faceBookLogin()
        .then((result) => {
            toast.success('You are successfully signup ')
            Navigate('/');
          }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    }


    //user id password register
    const HandelSubmitToRegister = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const ImageUrl = form.imageUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, ImageUrl, email, password)

        const profile = {
            displayName: name,
            photoURL: ImageUrl

        }

         //set error
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                 setError({...Error, emailError: "please provide email"})
        }
        setError({...Error, emailError: ""})

        //password error conditions

        if(!/(?=.*[A-Z])/.test(password)){
            setError({...Error, passwordError: 'Please provide at last uppercase'})
            return;
        }
        if(password.length < 6){
            setError({...Error, passwordError: 'Please should be at least 6 characters'})
            return;
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setError({...Error, passwordError: 'Please add at least one special character'})
            return;
        }
        if(!/(?=.*?[0-9])/.test(password)){
            setError({...Error, passwordError: 'Please add at least one special number'})
            return;
        }
        setError('')



        //user login
        registerWidthUserId(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            form.reset();
            
            //  start update profile
           HandelToSetUserProfile(profile)

            verification();
            
            toast.success('Sent you an Verification Email please verify before Login');
            Navigate('/login');
            
          })
          .catch((error) => {
            toast.error(error.message);
          });

    }
    const HandelToSetUserProfile = (Userprofile) =>{

        updateUserProfile(Userprofile)
        .then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            toast.error(error.message)
          });
    }
    //email verify

    const verification = () =>{
        emailVerify()
        .then((result) => {
            
            toast.success('Sent you an Verification Email Please chick .');
           
            // ...
          })
          .catch((error) => {
            toast.error(error.message);

          });
    }
   
    return (
        <div >
        
        <div className="form-container col-lg-7 m-auto p-3 mt-5">
            <div>
                <h1 className='text-center fs-1 spatial-Font-Family '> Register</h1>
                <div className='my-4 d-flex justify-content-center'>
                    <Link className="spatial-btn " onClick={HandelToGoogleReg}> <FcGoogle className='fs-1' /></Link>
                    <Link  className="spatial-btn mx-3" onClick={HandelToGithubReg}><FaGithub className='fs-1' /></Link>
                    <Link  className="spatial-btn" onClick={HandelToFacebookReg}><FaFacebookSquare className='fs-1' /></Link>
                
                </div>
                <Form action="" className='p-5' onSubmit={HandelSubmitToRegister}>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid1" label="Enter Your Name">
                                     <Form.Control type="text" name='name' placeholder="Enter Your Name"  required/>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid4"  label="Enter Image Url">
                                    <Form.Control type="text" name='imageUrl' placeholder="Enter Image Url" required />
                            </FloatingLabel>
                        </Col>
        
                    </Row>
                    <FloatingLabel className='mt-3' controlId="floatingInputGrid2" label="Email address">
                        <Form.Control type="email" name='email' placeholder="name@example.com"  required />
                        <p className='text-danger'>{Error.emailError}</p>
                    </FloatingLabel>
                    <FloatingLabel className='mt-4' controlId="floatingInputGrid3" label="Enter Password">
                        <Form.Control type="password"  placeholder="Enter Password" name='password' required/>
                        <p className='text-danger' >{Error.passwordError}</p>
                    </FloatingLabel>
                    
                    <div className='mt-4'>
                        <button className='spatial-btn w-100' type="Submit"  style={{border: 'none'}}> Register </button>
                    </div>
                    </Form>
                    <p className='text-center'>have an Account? <Link to='/login'>Login</Link></p>
            
            </div>
        
        </div>
            
        </div>
    );
};

export default Register;