import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { TbCurrencyTaka } from 'react-icons/tb';
import { TfiTimer } from 'react-icons/tfi';
import { BsCalendarDate } from 'react-icons/bs';
import './CourseCard.css'
import { Link } from 'react-router-dom';
const CourseSummeryCard = ({course}) => {
    const {id, name, price, image, courses_start_date, description, courses_duration, courses_Start_date } = course;
    return (
        <Col>
        <Card className='course-card shadow-sm'>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body className='mt-1'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <strong className='d-flex align-items-center mt-3'>Price: {price}<TbCurrencyTaka /></strong>
                <div className="d-flex justify-content-between mt-3">
                    <p><TfiTimer /> {courses_duration}</p>
                    <p><BsCalendarDate /> {courses_Start_date}</p>
                </div>
                <Link to={`/course/${id} `} className='spatial-btn'>Show Description</Link>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default CourseSummeryCard;