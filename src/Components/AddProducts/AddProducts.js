import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const AddProducts = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://thawing-castle-81638.herokuapp.com/addProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product added Successfully');
                }
            })
    };
    return (
        <div>
            <div>
                <div>
                    <h1 className="mt-5 text-center text-suceess fw-bolder">Please Add Services</h1>
                    <div className="login-box w-25 m-auto mt-5">
                        <div className="event-box border border d-flex justify-content-center align-items-center">
                            <div className="login-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("_id")}
                                        placeholder="Id"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input
                                        {...register("title")}
                                        placeholder="Title"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input
                                        {...register("price", { required: true })}
                                        placeholder="Price"
                                        type="number"
                                        //className="p-2 m-2"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input
                                        {...register("description")}
                                        placeholder="Description"
                                        //className="p-2 m-2"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input
                                        {...register("category")}
                                        placeholder="category"
                                        //className="p-2 m-2"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />

                                    <input
                                        {...register("image", { required: true })}
                                        placeholder="Image Link"
                                        //className="p-2 m-2"
                                        className="p-2 m-2 w-100"
                                    />
                                    <br />
                                    <input
                                        type="submit"
                                        value="Add"
                                        className="btn btn-info w-50"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProducts;
