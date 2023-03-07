import React, { useState } from 'react'
import ConfirmCart from './ConfirmCart'
import { useSelector,useDispatch } from 'react-redux';
import Payment from './Payment';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { useSelector,  } from 'react-redux';
import {removeAddress} from './Redux/CartSlice';


export default function Confirmation({ edit, setEdit }) {
    const [newAdd, setNewAdd] = useState('');
    // const [newState, setNewState] = useState('');
    // const [newCountry, setNewCountry] = useState('');
    const [show, setShow] = useState(false);
    const [changeAdd, setChangeAdd] = useState(false);
    const user = useSelector((state) => state.cartData.cart.UserData);
    const Address = useSelector((state) => state.cartData.cart.Address);
    const dispatch=useDispatch();

    const navigate = useNavigate();
    console.log(Address);

    const edithandle = () => {
        setEdit(true);
        navigate('/CheckOut');

    }
    const handleShow = () => {
        show ? setShow(false) : setShow(true);
    }
    const handleCrossSearch =(add)=>{
        console.log(add);
        dispatch(removeAddress({
            add:add,
        }))

    }
    // const editAddress = (add) => {
    //     console.log(newAdd);
    //     
    // }
    const handleAddress = (data) => {
        setNewAdd(data);
        setChangeAdd(true);
    }
    // const handleCountry = (e) => {
    //     setNewCountry(e.target.value);
    // }
    // const handleState = (e) => {
    //     setNewState(e.target.value);
    // }
    // const handleCrossSearch = () => {
    //     setShow(false);
    // }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 p-4'>
                    <div>
                        <div className='shipBoxx'>
                            <div className='d-flex justify-content-between'>
                                <p><i className="bi bi-truck"></i><span className='shipppngAdd'>Shipping Address</span></p>
                                <button onClick={edithandle} className='editFORRm'><i className="bi bi-pencil-square"> </i> Edit</button>
                            </div>
                            <hr />
                            <div>
                                <h3 className='cartprdnam' > Name : <span className='usernammm'>{user.fname} {user.lname}</span></h3>
                                <p className='cartprdnam'>Email : <span className='usernammm'>{user.email}</span> </p>
                                <div>
                                    {
                                        (!changeAdd) ?
                                            <div>
                                                <p className='cartprdnam '> <> Address  :</><span className='usernammm'  >{user.add1}</span></p>
                                                <p className='cartprdnam '><span className='usernammm'  > {user.state} , {user.country}</span></p>
                                            </div>
                                            :
                                            <div>
                                                <p className='cartprdnam '> <> Address  :</><span className='usernammm'  >{newAdd}</span></p>
                                                {/* <p className='cartprdnam '><span className='usernammm'  > {newState} , {newCountry}</span></p> */}

                                            </div>
                                    }

                                </div>


                                <p className='cartprdnam '>Pincode: <span className='usernammm'>{user.pincode}</span></p>

                                <h4 onClick={handleShow} className='changeAdd mr-auto'>Change Address <i className="bi bi-pencil-square m-2"></i></h4>

                                {(show) &&
                                       (Address.length != 0) && 
                                    Address.map((add, i) => {
                                        return (
                                            <div key={i}>
                                                <label >
                                                    <div className='d-flex m-2'>
                                                        <input type="radio" name="payment" onChange={()=>handleAddress(add)} id="flexRadioDefault1" className=' form-check-input ' value={add} />
                                                        <p className='form-label ps-2'>{add}</p>
                                                        <div className=' pt-3' onClick={()=>handleCrossSearch(add)}>
                                            <span className="editCAncel" ><FontAwesomeIcon icon={faXmark} /></span>
                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        )

                                    })

                                }


                            </div>

                            {/* <p className='editAdd' onClick={handleShow} > <b> Edit : Add a new address</b></p>
                            <div>
                                {
                                    (show) && <div className="mb-3">
                                        <label htmlFor="exampleInputaddress1" className="form-label">New Address:</label>
                                        <input type="text" onChange={handleAddress} className="form-control inputDAta" name='add1' />
                                        <div className=" mb-3">
                                            <label htmlFor="exampleInputaddress02" className="form-label">Country</label>
                                            <select onChange={handleCountry} name="country" id="country" className='form-control'>
                                                <option >Select Country..</option>
                                                <option value="India">India</option>
                                                <option value="Europ">Europ</option>
                                                <option value="China">China</option>
                                            </select>


                                        </div>
                                        <div className=" mb-3">
                                            <label htmlFor="exampleInputaddress02" className="form-label">State</label>
                                            <select onChange={handleState} name="state" id="state" className='form-control'>
                                                <option >Select State..</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="UttarPradesh">Uttar Pradesh</option>
                                                <option value="Maharastra">MAharastra</option>
                                            </select>

                                        </div>


                                        <button onClick={editAddress} className='changeAddd mt-3'>Change Address</button>
                                        <div className=' pt-3' onClick={handleCrossSearch}>
                                            <span className="editCAncel" ><FontAwesomeIcon icon={faXmark} /></span>
                                        </div>
                                    </div>
                                }


                            </div> */}
                        </div>
                    </div>
                    <div className='mt-5' >
                        <div className='shipBoxx'>
                            <Payment payment={user.payment} />
                        </div>
                    </div>
                </div>
                <div className='col-md-6 mt-5 p-4'>
                    <div className='shipBoxx'>
                        <ConfirmCart />
                    </div>
                </div>



            </div>
            <button className='ProcedCheck mt-3 btn-9'>Proceed To Pay</button>

        </div>
    )
}
