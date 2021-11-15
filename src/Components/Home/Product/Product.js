import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { title, price, image, description, _id } = product
    return (
        <div>
            <Col>
                <Card className='bg-transparent style-product'>
                    <Card.Img className='mx-auto img-style-products mt-3 ' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='text-center text-white fw-bolder fs-6'><span className='text-danger fw-bolder'>{title.toUpperCase()}</span></Card.Title>
                        <Card.Text className='text-center text-dark fw-bolder fs-4'>Price: <span className='text-success'>{price} $</span></Card.Text>
                        <Link to={`/detail/${_id}`}>
                            <button className='btn btn-warning rounded-pill fw-bolder' >Add To Cart</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Product;