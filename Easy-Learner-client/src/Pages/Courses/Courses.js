import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import CourseSummeryCard from '../Shared/CourseSummeryCard/CourseSummeryCard';

const Courses = () => {
    const AllCourses =  useLoaderData();
    return (
        <div>

                <h1 className='text-center my-5'>Total Courses: {AllCourses?.length} </h1>
                <Row xs={1} md={3} className="g-4">
                { 
                    AllCourses?.map( course => <CourseSummeryCard key={course?.id} course={course}></CourseSummeryCard>) 
                
                }
                </Row>
        </div>
    );
};

export default Courses;