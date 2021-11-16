import React, { useRef, useState } from 'react';
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirbase';
import RegisterImg from '../../../Images/Register/1.png'
import './../Login.css';
import './Register.css'
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.displayName, history);
        e.preventDefault();
    }

    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="container mt-2">
                            <div className="d-flex justify-content-center h-100">
                                <div className="card-makeup-login">
                                    <div className="card-header">
                                        <h3>Sign Up</h3>
                                    </div>
                                    <div className="card-body">
                                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                </div>
                                                <input onBlur={handleOnBlur} name="displayName" className="form-control" placeholder="Your Name" />

                                            </div>
                                            <br />
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                </div>
                                                <input onBlur={handleOnBlur} type="text" name="email" className="form-control" placeholder="Eamil" />

                                            </div>
                                            <br />
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input onBlur={handleOnBlur} type="password" className="form-control" name='password' placeholder="password" />
                                            </div>
                                            <br />
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input onBlur={handleOnBlur} type="password" className="form-control" name='password2' placeholder="Re-type password" />
                                            </div>
                                            <br />
                                            <div className="row align-items-center remember">
                                                <input type="checkbox" />Remember Me
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Sign Up" className="btn float-right login_btn" />
                                            </div>
                                            <div className="card-footer">

                                                <div className="d-flex justify-content-center ">
                                                    <NavLink
                                                        style={{ textDecoration: 'none' }}
                                                        to="/login">
                                                        <Button className='btn btn-danger mt-2'>Already Registered? Please Login</Button>
                                                    </NavLink>
                                                </div>
                                                <Button onClick={signInWithGoogle} className="btn btn-lg btn-google  text-uppercase mt-2 "><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> Signin Using Google</Button>
                                            </div>
                                        </form>}
                                        {isLoading && <Spinner animation="border" variant="warning" />}
                                        {user?.email && <Alert variant="success">User Created successfully!</Alert>}
                                        {authError && <Alert variant="error">{authError}</Alert>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='mt-2'>
                            <img style={{ width: '100%', height: '100%' }} src={RegisterImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Register;