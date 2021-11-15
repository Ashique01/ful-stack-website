import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Nav, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://thawing-castle-81638.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id='products'>
            <h2 className="text-primary mt-5 mb-4 fs-1 fw-bolder">Some of our Products</h2>
            <p className='fs-6 fw-bold text-start p-4 mx-4'>We are providing whatever you want.We have many products like clothes,electronics,cars,bikes etc.You can buy these things in many occations.We are availiable all the time to give you services</p>
            <section>
                <Row xs={1} md={3} className="mx-5  g-4 justify-content-center">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>).slice(0, 6)
                    }
                </Row>
                <br />
                <br />
                <Nav.Link className='navLink-style fw-bold' as={Link} to="/products"><Button className='btn btn-danger'>Load More</Button></Nav.Link>
            </section>

        </div>
    );
};

export default Products;
