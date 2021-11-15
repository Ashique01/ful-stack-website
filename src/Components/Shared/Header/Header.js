import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={HashLink} to='/home'><span className='fw-bolder fs-1 text-warning'>Local Box Store</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='navLink-style fw-bold style' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold style' as={HashLink} to="/products">Products</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold style' as={HashLink} to="/myOrder">My Order</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold style' as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold style' as={HashLink} to="/aboutUs">About Us</Nav.Link>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/admin">
                            <Button className='btn btn-success mx-2'>Admin</Button>
                        </NavLink>
                        {
                            user?.email ?
                                <Button className='btn-danger' onClick={logout}>Logout</Button>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button className='btn btn-primary'>Login</Button>
                                </NavLink>
                        }
                        <Navbar.Text className='mx-4' style={{ textDecoration: 'none' }}>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;