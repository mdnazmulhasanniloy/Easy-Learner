import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from './../Courses/Courses';

const Checkout = (params) => {
    const course = useLoaderData() 
    return (
        <div style={{height:'70vh'}}>
            <h1 className='text-center mt-5'>you are successfully enroll Course: {course?.name} </h1>
        </div>
    );
};

export default Checkout;