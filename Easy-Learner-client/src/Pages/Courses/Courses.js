import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import CourseSummeryCard from '../Shared/CourseSummeryCard/CourseSummeryCard';

const Courses = () => {
    const AllCourses =  useLoaderData();
    return (
        <div>

                <h1 className='text-center my-5'>Total Courses: {AllCourses?.length}</h1>
                <div className="row">
                { 
                    AllCourses?.map( course => <CourseSummeryCard key={course?.id} course={course}></CourseSummeryCard>) 
                
                }
                </div>
        </div>
    );
};

export default Courses;