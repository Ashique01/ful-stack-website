
import React, { useState } from 'react';
import { FormControl, InputGroup, Button, Alert } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://thawing-castle-81638.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <InputGroup className="w-50 justify-content-center">
                    <FormControl
                        placeholder="Enter Admin Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        type='email'
                        onBlur={handleOnBlur}

                    />
                    <Button type="submit" variant="primary">Make Admin</Button>
                </InputGroup>

            </form>
            {success && <Alert variant="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;