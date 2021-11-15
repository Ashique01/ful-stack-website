import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/NotFound/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button className='btn btn-danger'>Go Back</button> </Link>

        </div>
    );
};

export default NotFound;