import React, { useEffect } from 'react'
import { removeFromCart, handleQuan, handleGrandTot } from './Redux/CartSlice'

import { cardData } from './Data';
// Redux
import { useDispatch, useSelector } from 'react-redux';

export default function ConfirmCart() {

    const crlist = useSelector((state) => state.cartData.cart.cartInfo);
    // console.log(crlist,"m,nmnm");
    const grandTot = useSelector((state) => state.cartData.cart.grandTot);
    const handleNumOfItem = ((id, i) => {
        dispatch(handleQuan({
            id: id,
            val: i,
        }));

    })
    useEffect(() => {
        handleNumOfItem();

        handleRemove();
    }, [])


    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart({
            id: id,
        }));
        cardData.map((item) => {
            if (item.id == id) {
                item.quan = 1;
            }

        })
    }

    return (
        <div>
            <div>
                <p><i class="bi bi-bag"></i><span className='shipppngAdd'>Your Order Summery</span></p>
            </div>
            <table className='table'>
                <thead >
                    <tr>
                        <th className='fhead'>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (crlist.length) ?
                            crlist.map((data) => {

                                return (
                                    <tr key={data.id} className='tdata text-center'>
                                        <td>
                                            <div className='row'>
                                                <div className='col-md-4 '>
                                                    <img src={data.image} className='img-fluid prodImgCart' />

                                                </div>
                                                <div className='col-md-8'>
                                                    <p className='cartprdnam mt-4'>{data.name}</p>
                                                    <p className='form-label'>Size: Medium</p>

                                                </div>
                                            </div>
                                        </td>
                                        <td><div className='outBtnBox'><div className='intquan'>  {data.quan}</div><div className='inbtnbox'><button className='Addquanbtn' onClick={(e) => handleNumOfItem(data.id, 1)}><i className="bi bi-chevron-up"></i></button>
                                            <button className='Addquanbtn' onClick={(e) => handleNumOfItem(data.id, -1)}><i className="bi bi-chevron-down"></i></button></div></div>

                                        </td>

                                        <td className='cartPrice mt-5'>${data.price}</td>
                                        <td className='cartPrice mt-5' >${data.totPrice}</td>
                                        <td ><i className="bi bi-x-lg" onClick={() => handleRemove(data.id)}></i></td>
                                    </tr>
                                )
                            })
                            :
                            <><tr className='text-center'><td className='NoDAta'>Currently your <i className="bi bi-bag"> </i>cart is empty</td></tr></>
                    }
                </tbody>
            </table>
            <div className='d-flex justify-content-around'>
                <p className='prodhead2'>Subtotal:  </p>
                <p className='cPrice'>${grandTot}</p>

            </div>
            <div className='d-flex justify-content-around'>
                <p className='prodhead2'>Shipping :  </p>
                <p className='cPrice'>+  $20</p>

            </div>
            <div className='d-flex justify-content-around'>
                <p className='prodhead2'>Grand Total</p>
                <p className='cPrice'>${(crlist.length == 0) ? "0" :(grandTot + 20)}</p>
            </div>

        </div>
    )
}
