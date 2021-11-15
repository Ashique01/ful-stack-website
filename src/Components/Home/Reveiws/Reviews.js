import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://thawing-castle-81638.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='container-fluid'>
            <h1 className='fw-bolder fs-1 text-primary mt-5 mb-5'>Our Customers FeedBack</h1>
            <section className='container-fluid'>
                <Row xs={1} md={3} sm={2} className='mx-auto'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </section>
        </div >
    );
};

export default Reviews;