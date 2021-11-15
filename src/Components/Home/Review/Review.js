import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Review.css'

const Review = ({ review }) => {
    const { name, description, image } = review
    return (
        <div id='reviews'>
            <Card className='card-makeup' style={{ width: '18rem', height: '38vh' }}>
                <Card.Img className='image-circle mt-3 mx-3' variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-danger fw-bolder text-center'>{name}</Card.Title>
                    <Card.Text className='text-secondary fw-bolder'>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Review;