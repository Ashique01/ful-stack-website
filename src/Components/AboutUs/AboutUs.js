import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Ashique from "../../Images/About/250510274_1343651812718869_1911445637510818636_n.jpg";
import Chowa from "../../Images/About/56721602_131279881331470_2883760283711438848_n.jpg"
import './AboutUs.css'




const AboutUs = () => {
    return (
        <div>
            <section className="about-section">
                <h1 className='text-dark fw-bolder fs-1'>About Us Page</h1>
                <h3 className='mt-5 mb-5'>Some text about who we are and what we do.</h3>
                <p className='fw-bolder fs-6'>Its not an Ecommerce site.We have imports products from outside of the country sell those products with a slide profit.We assure that no one will be unsetisfied </p>
            </section>
            <h1 className='text-center text-dark fw-bolder mt-3 mb-3'>Our Team</h1>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="card">
                                <img src={Ashique} alt="Ashique" className=' img-style mx-auto mt-2' />
                                <div className="container">
                                    <h2 className='text-dark fw-bolder'>Ashique</h2>
                                    <p className="text-secondary fw-bolder">CEO & Founder</p>
                                    <p className='text-success fw-bolder'>Nothing is More Than Hard Work.So Work Hard And Reach The Destination.</p>
                                    <p className='text-primary fw-bolder'>ashiquemurad@gmail.com</p>
                                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=SxfkdtDFzLZnJTtPfrrQmxVmZGDNTlmZnGGFpcfqNZlMLjvlrRqKsjlmsbmdwfNXwkrSZdZsxWPZlFGNThhKlhlHPFLmTkwjwsltgPXFtNZBvtvcvBV"> <Button variant="dark" size="lg">
                                        Contact
                                    </Button></a>


                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <img src={Chowa} alt="Chowa" className='img-style mx-auto mt-2' />
                                <div className="container">
                                    <h2 className='text-dark fw-bolder'>Chowa</h2>
                                    <p className="text-secondary fw-bolder">Designer</p>
                                    <p className='text-success fw-bolder'>Doing Everything With Your Patience & Keep Faith In ALLAH.The Success Will Reach You One Day</p>
                                    <p className='text-primary fw-bolder'>chowa@example.com</p>
                                    <a href='#'><Button variant="dark" size="lg">
                                        Contact
                                    </Button></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    );
};

export default AboutUs;






