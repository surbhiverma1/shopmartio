import React, { useState } from 'react'
import './Common.css'
import { useSelector, useDispatch } from 'react-redux';
import { userDetails, AddAddress } from './Redux/CartSlice';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';



export default function CheckOut({ edit }) {
    const [formData, setFormData] = useState([]);
    const [chnge, setChnge] = useState(false);
    const [editData, setEditData] = useState([]);

    const cart = useSelector((state) => state.cartData.cart.cartInfo);
    const grandTot = useSelector((state) => state.cartData.cart.grandTot);
    const user = useSelector((state) => state.cartData.cart.UserData);
    const Address = useSelector((state) => state.cartData.cart.Address);



    const navigate = useNavigate();
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    console.log("edit", edit);
    console.log(Address);
    useEffect(() => {
        setEditData({ ...formData, ...user });
        console.log("usseEffect");
    }, [edit == true])


    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (edit) {
            setChnge(true);
            setEditData({ ...user, ...formData });
        }
    }
    const handleSubmit = () => {
        if (!formData.name) {
            toast.error("Name can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!formData.email) {
            toast.error("Email can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!pattern.test(formData.email)) {
            toast.error("Enter valid email", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!formData.fname) {
            toast.error("First Name  can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!formData.lname) {
            toast.error("Last Name  can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!formData.add1) {
            toast.error("Address  can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }


        else if (!formData.pincode) {
            toast.error("Pincode  can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if ((!formData.payment) || (!formData.cardHolder) || (!formData.cardName) || (!formData.cvv)) {
            toast.error("Enter Payment details", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        } else {
            navigate('/Confirmation');
        }

        //  console.log( formData.add1,formData.add2);
        let addd1 = formData.add1;
        console.log("addd1", addd1);

        dispatch(userDetails({
            UserData: formData,
        }));
        let isAdd1Present = false;
        let isAdd2Present = false;
        // dispatch(AddAddress({
        //     address:addd1,
        // }));
        // dispatch(AddAddress({
        //     address: formData.add2,
        // }));
        if (Address.length == 0) {
            dispatch(AddAddress({
                address: addd1,
            }));
            dispatch(AddAddress({
                address: formData.add2,
            }));

        } else {


            Address.forEach((itm) => {
                if (itm == addd1) {
                    isAdd1Present = true;
                } else if (itm == formData.add2) {
                    isAdd2Present = true;
                }
            })
            if (!isAdd1Present) {
                dispatch(AddAddress({
                    address: addd1,
                }));

            }
            if (!isAdd2Present) {
                dispatch(AddAddress({
                    address: formData.add2,
                }));
            }

        }


    }
    const handleEditSubmit = () => {

        if (!editData.name) {
            toast.error("Name can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!editData.email) {
            toast.error("Email can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!pattern.test(editData.email)) {
            toast.error("Enter valid email", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!editData.fname) {
            toast.error("First Name  can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!editData.lname) {
            toast.error("Last Name  can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if (!editData.add1) {
            toast.error("Address  can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }

        else if (!editData.pincode) {
            toast.error("Pincode  can't be blank", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        }
        else if ((!editData.payment) || (!editData.cardHolder) || (!editData.cardName) || (!editData.cvv)) {
            toast.error("Enter Payment details", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "err1",
            });
        } else {
            navigate('/Confirmation');
        }
        // console.log("editData", editData);
        dispatch(userDetails({
            UserData: editData,
        }));
        let addd1 = editData.add1;
        // dispatch(AddAddress({
        //     address: addd1,
        // }));
        // dispatch(AddAddress({
        //     address: editData.add2,
        // }));
        let isAdd1Present = false;
        let isAdd2Present = false;

        Address.forEach((itm) => {
            if (itm == addd1) {
                isAdd1Present = true;
            } else if (itm == editData.add2) {
                isAdd2Present = true;
            }
        })
        if (!isAdd1Present) {
            dispatch(AddAddress({
                address: addd1,
            }));

        }
        if (!isAdd2Present) {
            dispatch(AddAddress({
                address: editData.add2,
            }));
        }

    }



    return (
        <>
            <div className='container-fluid text-center p-4 mb-5  prodBack'>

                <h5 className="prodCategory"><b>CHECK OUT  </b></h5>
                <p className="prodhead2">Home/Pages/Check Out</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-9 col-md-12'>
                        <form className='FormBackground'>
                            <div className='container checkOutHeadBAck '>
                                Check Out
                            </div>

                            <div className='p-4'>
                                <h3 className="labelss mt-1">CONTACT INFORMATION</h3>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="exampleInputname" className="form-label" >Name</label>
                                            <input type="text" value={(edit) && (!chnge) ? user.name : formData.name} onChange={handleChange} className="form-control inputDAta" name='name' id="exampleInputName" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" value={(edit) && (!chnge) ? user.email : formData.email} onChange={handleChange} className="form-control inputDAta" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>
                                    </div>
                                </div>
                                <h3 className="labelss mt-2">SHIPPING ADDRESS</h3>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className="col-md-6  mb-3">
                                            <label htmlFor="exampleInputfirstname" className="form-label">First Name</label>
                                            <input type="text" value={(edit) && (!chnge) ? user.fname : formData.fname} onChange={handleChange} name='fname' className="form-control inputDAta" id="exampleInputFirstName" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="exampleInputlastname" className="form-label">Last Name</label>
                                            <input type="text" value={(edit) && (!chnge) ? user.lname : formData.lname} onChange={handleChange} name='lname' className="form-control inputDAta" id="exampleInputLastName" />
                                        </div>
                                    </div>
                                </div>
                                <div className='container'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputaddress1" className="form-label">Address 01</label>
                                        <input type="text" value={(edit) && (!chnge) ? user.add1 : formData.add1} onChange={handleChange} className="form-control inputDAta" name='add1' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputaddress02" className="form-label">Address 02</label>
                                        <input type="text" value={(edit) && (!chnge) ? user.add2 : formData.add2} onChange={handleChange} className="form-control inputDAta" name='add2' />
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="exampleInputaddress02" className="form-label">Country</label>
                                            <select value={(edit) && (!chnge) ? user.country : formData.country} onChange={handleChange} name="country" id="country" className='form-control'>
                                                <option >Select Country..</option>
                                                <option value="India">India</option>
                                                <option value="Europ">Europ</option>
                                                <option value="China">China</option>
                                            </select>


                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="exampleInputaddress02" className="form-label">State</label>
                                            <select value={(edit) && (!chnge) ? user.state : formData.state} onChange={handleChange} name="state" id="state" className='form-control'>
                                                <option >Select State..</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="UttarPradesh">Uttar Pradesh</option>
                                                <option value="Maharastra">MAharastra</option>
                                            </select>

                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="exampleInputaddress02" className="form-label">Pincode</label>
                                            <input type="text" value={(edit) && (!chnge) ? user.pincode : formData.pincode} onChange={handleChange} className="form-control" name='pincode' />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="labelss mt-2">PAYMENT OPTION</h3>
                                <div className='container mt-4'>
                                    <div className='row'>
                                        <label className='col'>
                                            <div className=' payBox ' >

                                                <input onChange={handleChange} type="radio" name="payment" id="flexRadioDefault1" className=' form-check-input' value="MasterCard" />
                                                <img src='image/pay.jpg' className='img-fluid payImg' />
                                                <p className='form-label '>Master Card</p>

                                            </div>
                                        </label>
                                        <label className='col'>
                                            <div className=' payBox ' >
                                                <input type="radio" onChange={handleChange} name="payment" id="flexRadioDefault1" className=' form-check-input ' value="VisaCard" />

                                                <img src='image/visa.png' className='img-fluid  payImg' />
                                                <p className='form-label '>Visa Card</p>

                                            </div>
                                        </label>
                                        <label className='col'>
                                            <div className=' payBox '>
                                                <input type="radio" onChange={handleChange} name="payment" id="flexRadioDefault1" className=' form-check-input ' value="Paypal" />

                                                <img src='image/paypal.png' className='img-fluid  payImg' />
                                                <p className='form-label '>PayPal</p>

                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="exampleInputfirstname" className="form-label">Card Holder Name</label>
                                            <input type="text" value={(edit) && (!chnge) ? user.cardHolder : formData.cardHolder} onChange={handleChange} name='cardHolder' className="form-control" id="exampleInputCardholder" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="exampleInputlastname" className="form-label">Card Name</label>
                                            <input type="text" value={(edit) && (!chnge) ? user.cardName : formData.cardName} onChange={handleChange} name='cardName' className="form-control" id="exampleInputCArdName" />
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className="mb-3 m-3">
                                        <label htmlFor="exampleInputfirstname" className="form-label">Expiry Date</label>
                                        <input type="date" className="form-control" id="exampleInputExpiry" />
                                    </div>
                                    <div className="mb-3  m-3">
                                        <label htmlFor="exampleInputlastname" className="form-label">CVV Code</label>
                                        <input value={(edit) && (!chnge) ? user.cvv : formData.cvv} type="password" onChange={handleChange} name='cvv' className="form-control" id="exampleInputCvv" />
                                    </div>
                                </div>
                            </div>

                        </form>

                        {
                            (!edit) ? <button onClick={handleSubmit} className='ProcedCheck mt-3 btn-9'>Proceed To Checkout</button>
                                :
                                <button onClick={handleEditSubmit} className='ProcedCheck mt-3 btn-9'>Proceed To Checkout</button>
                        }


                    </div>
                    {

                        (cart.length > 0) && <div className='col-lg-3 col-md-12 p-3'>
                            <div className='checksideBAck p-3'>
                                <h3 className='prodhead2 pr-5'>Cart Totals Summary</h3>
                                <hr />
                                <div className='d-flex justify-content-around'>
                                    <h3 className='prodhead2'>Subtotal:  </h3>
                                    <p className='price'>${grandTot - 20}</p>

                                </div>
                                <div className='d-flex justify-content-around'>

                                    <h3 className='prodhead2'>Shipping:</h3>
                                    <p className='price'>$20</p>
                                </div>
                                <h4 className='changeAdd mr-auto'>Change Address <i className="bi bi-pencil-square m-2"></i></h4>
                                <hr />
                                <div className='d-flex justify-content-around'>

                                    <h3 className='prodhead2'>Grand Total</h3>
                                    <p className='price'>${grandTot}</p>
                                </div>
                            </div>
                        </div>
                    }

                </div>

            </div>

            <ToastContainer />
        </>
    )
}
