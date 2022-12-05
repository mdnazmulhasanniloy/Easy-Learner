import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './ShowCourseDetails.css'

import { TbCurrencyTaka } from 'react-icons/tb';
import { TiShoppingCart } from 'react-icons/ti';
import { GoCloudDownload } from 'react-icons/go';

import Pdf from "react-to-pdf";

const ref = React.createRef();


const ShowCourseDetails = () => {

    
    const courseData= useLoaderData();
    const {
                id,
                name,
                image,
                description,
                price,
                courses_duration,
                courses_Start_date
        
        
            }  = courseData;
    
    return (
       
        <div>
        
    
            <Row className=' d-flex align-items-center pb-5'>
                <Col lg='8' ref={ref}>
                        <h1 className='spatial-Font-Family my-5 card-name'>{name}</h1>  
                        




                        <img src={image} className="img-fluid rounded-start" alt={name}/>
                        <p className="card-text description mt-4">{description}</p>
                        <p className="card-text">
                            <small className="text-muted d-flex justify-content-between">
                                <span className=''>Course Duration: {courses_duration}</span>
                                        <span>Courses Start Date: {courses_Start_date}</span> </small></p>
                
                
                </Col>
                <Col lg='4'>

                        <div className="my-5 d-flex align-items-center justify-content-center">
                        
                        <Pdf targetRef={ref} filename="code-example.pdf">
                        {
                            ({ toPdf }) => <button className='spatial-btn border-0' onClick={toPdf}>  Download PDF <GoCloudDownload className='fs-4 ms-2 '/> </button>
                        }
                        </Pdf>
                                
                        </div>


                        <div className='shadow-lg p-3 d-flex flex-column justify-content-center align-items-center' style={{'margin': 'auto', width: '95%', background: 'rgba(255, 255, 255, 0.15)'}}>
                            <h1 className='fs-1'>Price: {price}<TbCurrencyTaka /></h1>
                            <Link className='spatial-btn mt-3 px-5' to={`/checkout/${id}`}>Enroll Now <TiShoppingCart className='fs-4'/></Link>
                        </div>
                        
                
                </Col>
            
            </Row>
                
        </div>
    );
};

export default ShowCourseDetails;