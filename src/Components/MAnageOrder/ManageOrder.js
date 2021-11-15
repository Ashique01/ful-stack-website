import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const MangeOrder = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");

    const [dlt, setDlt] = useState(false);

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
        fetch("https://thawing-castle-81638.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [dlt]);

    // const status = "apporved";
    const handleUpdate = (id) => {
        fetch(`https://thawing-castle-81638.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };
    const handleDelete = id => {
        fetch(`https://thawing-castle-81638.herokuapp.com/allOrders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount)
                    setDlt(!dlt)
            })
    }

    return (
        <div className="container">
            <h1 className='bg-success text-warning'>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Product Title</th>
                        <th>Date</th>
                        <th>Phone No.</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.firstName}</td>
                            <td>{pd.title}</td>
                            <td>{pd.date}</td>
                            <td>{pd.number}</td>
                            <td>{pd.email}</td>
                            <td>
                                <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status}
                                />
                            </td>
                            <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2 m-1 text-white">Delete</button>
                            <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn bg-success p-2 m-1 text-white"
                            >
                                Update
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MangeOrder;