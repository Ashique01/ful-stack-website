import React from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/1.jpg';
import banner2 from '../../../Images/Banner/2.jpg';
import banner3 from '../../../Images/Banner/3.jpg';

const Banner = () => {
    return (
        <div>
            <section className='container-fluid'>
                <Row>
                    <Col >
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 h-50"
                                    src={banner1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 h-50"
                                    src={banner2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 h-50"
                                    src={banner3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </section>


        </div>
    );
};

export default Banner;