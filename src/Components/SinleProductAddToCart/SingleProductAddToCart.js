import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './SingleProductAddToCart.css'

const SingleProductAddToCart = () => {
    let { productId } = useParams();
    const [details, setDetails] = useState([])
    const [singleDetail, setSingleDetail] = useState({})
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://thawing-castle-81638.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    useEffect(() => {
        const foundDetail = (details.find(product => product._id === parseInt(productId)));
        setSingleDetail(foundDetail);
        console.log(foundDetail)


    }, [details])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://thawing-castle-81638.herokuapp.com/confirmOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                }
            })
    };
    return (
        <div>
            <section className='container-fluid'>
                <Row>
                    <Col className='container-fluid'>
                        <Container>
                            <div className="container mt-5">

                                <div className="cardcontainer">
                                    <h1 className='fs-4 fw-bolder  text-success mx-auto mt-2'>{singleDetail?.title}</h1>
                                    <div className="photo">
                                        <img src={singleDetail?.image} alt="" />
                                        <div className="photos">Photo</div>
                                    </div>
                                    <div className="content">
                                        <p className="txt4">{singleDetail?.description}</p>
                                        <p className="fs-3 text-danger mt-5 fw-bolder">Price: <span className='text-success fw-bold'>{singleDetail?.price} $</span></p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col className='container-fluid'>
                        <Container>
                            <div className='cardcontainer mt-5'>
                                <h1 className='fs-2 fw-bolder  text-primary mx-auto  mt-2 mb-4'>Fill Up for Order</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p>Name: <input {...register("firstName")} placeholder='Enter your name' /></p>
                                    <p>Gender: <select {...register("gender")}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select></p>
                                    <p>Mobile No: <input {...register("number")} type="number" placeholder='01XXXXXXXXX' /></p>
                                    <p>Email: <input {...register("email")} type="email" defaultValue={user?.email} placeholder='Enter Your Email' /></p>
                                    <p>Date: <input {...register("date")} type="date" placeholder='Enter Current Date' /></p>
                                    <p>Products Category: <select {...register("category")}>
                                        <option value="electronics">Electronics</option>
                                        <option value="clothes">Clothes</option>
                                        <option value="assesories">Assesories</option>
                                    </select></p>
                                    <p className='text-primary fw-bolder mt-2 mb-2'>Please just click once in all of the input field</p>

                                    <p>Image: <input {...register("imgUrl")} defaultValue={singleDetail?.image} /></p>
                                    <p>Title: <input {...register("title")} defaultValue={singleDetail?.title} /></p>
                                    <p>Price: <input {...register("price")} defaultValue={singleDetail?.price} /></p>
                                    <br />
                                    <input className='btn btn-primary' type="submit" />
                                </form>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </section>

        </div>
    );
};

export default SingleProductAddToCart;