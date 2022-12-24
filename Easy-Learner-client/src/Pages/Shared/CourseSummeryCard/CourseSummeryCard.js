import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { TbCurrencyTaka } from 'react-icons/tb';
import { TfiTimer } from 'react-icons/tfi';
import { BsCalendarDate } from 'react-icons/bs';
import './CourseCard.css'
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import { Col } from 'react-bootstrap';



const CourseSummeryCard = ({course}) => {
    const {id, name, price, image, courses_duration, courses_Start_date } = course;

    const [SkeletonItems, setSkeleton] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSkeleton(false);
        }, 3 * 1000);
    }, [])


    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card className='course-card shadow-sm mt-2'>
        {
            SkeletonItems? <Skeleton width="100%" height="200px" />
            : <Card.Img className='card-img-top ' variant="top" src={image} alt={name} />
        }
            <Card.Body className='mt-1'>
            {
                SkeletonItems? <Skeleton width="200px" height="20px" />
                : <Card.Title>{name}</Card.Title>
            }
            <Card.Text>
            {
                SkeletonItems? <Skeleton width="150px" height="15px" />
                : <strong className='d-flex align-items-center mt-3'>Price: {price}<TbCurrencyTaka /></strong>
            }
                <div className="d-flex justify-content-between mt-3">
                {
                    SkeletonItems? <Skeleton width="80px" height="15px" />
                    : <p><TfiTimer /> {courses_duration}</p>
                    
                }
                {
                    SkeletonItems? <Skeleton width="80px" height="15px" />
                       : <p><BsCalendarDate /> {courses_Start_date}</p>
                }
                </div>
                <div className="my-3">
                {
                    SkeletonItems? <Skeleton width="150px" height="30px" />
                    : <Link to={`/course/${id} `} className='spatial-btn'>Show Description</Link>
                }
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
};

export default CourseSummeryCard;