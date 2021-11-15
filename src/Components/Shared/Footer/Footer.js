import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3 className='text-danger'>Local Box Store</h3>
                    <p class="footer-links">
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/">Home</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#products">Products</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                    </p>

                    <p className="footer-company-name">Developed By <span className='text-danger'>ASH</span> &copy; 2021</p>
                </div>

                <div className="footer-center">

                    <div>

                        <p><span><FontAwesomeIcon icon={faMapMarkedAlt} />   West Shewrapara</span> Dhaka, Banglades</p>
                        <br />
                        <br />
                    </div>

                    <div>

                        <p> <FontAwesomeIcon icon={faPhone} />  01626484567</p>
                        <br />
                        <br />
                    </div>

                    <div>
                        <p><a href="ashiquemurad@gmail.com"> <FontAwesomeIcon icon={faEnvelope} />  ashiquemurad@gmail.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About Local Box Store</span>
                        Local Box Store is a modern thinking for selling important and necessary products.Here you can find some products for your basic needs

                    </p>

                </div>

            </footer>


        </div>
    );
};

export default Footer;