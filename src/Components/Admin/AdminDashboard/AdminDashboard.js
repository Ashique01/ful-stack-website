import React, { useState } from 'react';
import AddProducts from '../../AddProducts/AddProducts';
import AllProduct from '../../AllProduct/AllProduct';
import MangeOrder from '../../MAnageOrder/ManageOrder';
import './AdminDashboard.css'
import MakeAdmin from './MakeAdmin/MakeAdmin';

const AdminDashboard = () => {
    const [control, setControl] = useState("addServices");
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area h-100">
                                <h6 className=''>Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("addProducts")}
                                        className="admin-menu p-2"
                                    >
                                        Add Products
                                    </li>

                                    <li
                                        onClick={() => setControl("products")}
                                        className="admin-menu p-2"
                                    >
                                        All Products
                                    </li>
                                    <li
                                        onClick={() => setControl("MangeOrder")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Orders
                                    </li>
                                    <li
                                        onClick={() => setControl("makeAdmin")}
                                        className="admin-menu p-2"
                                    >
                                        Make Admin
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "products" && <AllProduct></AllProduct>}
                            {control === "MangeOrder" && <MangeOrder></MangeOrder>}
                            {control === "addProducts" && <AddProducts></AddProducts>}
                            {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;