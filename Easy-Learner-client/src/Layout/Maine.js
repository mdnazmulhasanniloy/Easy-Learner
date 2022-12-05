import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNave from '../Pages/Shared/LeftSideNave/LeftSideNave';
import Footer from '../Pages/Shared/Footer/Footer';

const Maine = () => {
    return (
        <div>
            <Header></Header>
            <Container className="container-fluid">
            <Row>
                    <Col lg='3' className='d-lg-block '>
                        <LeftSideNave></LeftSideNave>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Maine;