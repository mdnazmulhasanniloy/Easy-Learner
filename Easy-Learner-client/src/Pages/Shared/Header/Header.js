import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from '../../../Assets/Logo/Logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserTie } from 'react-icons/fa';

const Header = () => {
  const {user, userLogout} = useContext(AuthContext);
  
    const [Toggle, setToggle] = useState(false)


    const HandelToSignout = () =>{
      userLogout()

    }


  

    return (
        <div>
            <Navbar className='shadow-lg' collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                <Navbar.Brand href="" className='d-flex align-items-center'>
                            <img
                        src={logo}
                        width="70"
                        height="65"
                        className="d-inline-block align-top image-fluid"
                        alt="Easy Learner"
                        />
                        <h5 style={{"fontFamily": "'Fredoka One', cursive"}}>Easy-Learner</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Link className='nav-link' to='/'>Course</Link>
                    <Link className='nav-link' to='/faq'>FAQ</Link>
                    <Link className='nav-link' to="/blog">Blog</Link>
                    
                  </Nav>
                  <Nav>
                  
                  
                        <Form>
                              <Form.Check 
                                className='p-2'
                                type="switch"
                                id="custom-switch"
                                onClick={()=>{setToggle(!Toggle)}}
                                label={Toggle? "Dark" : "Light"}
                              />
                        </Form>
                  
                    <Nav>
                    {
                        user?.uid?
                            <Nav.Link className='nav-link mx-2 ' onClick={HandelToSignout}>Sign Out</Nav.Link>
                             : <Link className='nav-link mx-2' to="/login">Login</Link>
                    }
                    </Nav>
                    <Nav.Link>
                          {
                            user?.uid? <Image height='35' width='35' className='header-img'   src={user?.photoURL} title={user?.displayName} roundedCircle	/>
                          : <FaUserTie className='fs-3' />
                          }
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;