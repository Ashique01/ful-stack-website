import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


import login from '../../Images/Login/login.png'
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="container mt-5">
                            <div className="d-flex justify-content-center h-100">
                                <div className="card-makeup-login">
                                    <div className="card-header">
                                        <h3>Sign In</h3>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleLoginSubmit}>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                </div>
                                                <input onChange={handleOnChange} type="text" name='email' className="form-control" placeholder="email" />

                                            </div>
                                            <br />
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input onChange={handleOnChange} type="password" className="form-control" name='password' placeholder="password" />
                                            </div>
                                            <div className="row align-items-center remember">
                                                <input type="checkbox" />Remember Me
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Login" className="btn float-right login_btn" />
                                            </div>
                                            {isLoading && <Spinner animation="border" variant="warning" />}
                                            {user?.email && <Alert variant="success">Login successfully!</Alert>}
                                            {authError && <Alert variant="danger">{authError}</Alert>}
                                        </form>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-center ">
                                            <NavLink
                                                style={{ textDecoration: 'none' }}
                                                to="/register">
                                                <Button className='btn btn-danger mt-2'>New User? Please Register</Button>
                                            </NavLink>
                                        </div>
                                        <Button onClick={signInWithGoogle} className="btn btn-lg btn-google mt-3  text-uppercase "><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> Signin Using Google</Button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img style={{ width: '100%', height: '100%' }} src={login} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default Login;