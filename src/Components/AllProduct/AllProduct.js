import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProduct from './singleProduct/SingleProduct';

const AllProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h1 className='fw-bolder fs-1 mt-3 mb-4 text-primary'>All Availiable Products In Our Stock</h1>
            <section>
                <Row xs={1} md={3} className="mx-5  g-4 justify-content-center">
                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </Row>
            </section>
        </div>
    );
};

export default AllProduct;