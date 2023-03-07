import React, { useEffect, useState } from 'react'
// import { isRouteErrorResponse } from 'react-router-dom';
import './Common.css';
import { useNavigate } from "react-router-dom";
import { removeFromCart,handleQuan,handleUpdateCart ,handleGrandTot} from './Redux/CartSlice'

import { cardData } from './Data';
// Redux
import {useDispatch, useSelector} from  'react-redux';

export default function Cart() {

  const navigation = useNavigate();


  // const [grandT, setGrandT] = useState(0)
  
  // const handleNumOfItem = (item, i) => {

  //   const ind = cart.indexOf(item);

  //   const arr = cart;

  //   arr[ind].quan = parseInt(arr[ind].quan) + parseInt(i);
  //   console.log(parseInt(arr[ind].quan) + parseInt(i), arr[ind].quan, "inddd")
  //   arr[ind].totPrice = arr[ind].quan * arr[ind].price;
  //   if (arr[ind].quan === 0) {
  //     arr[ind].quan = 1;
  //     arr[ind].totPrice = arr[ind].price;
  //   }
  //   setCart([...arr]);

  // }

  const handleProChek = () => {
    navigation('/CheckOut');
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });


  }

  const handleUpdateCArt=()=>{
  
    dispatch(handleUpdateCart());
  
  }

  const dispatch=useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({
      id:id,
    }));
    cardData.map((item)=>{
      if(item.id== id){
        item.quan =1 ;
      }

    })
  }

  // REdux
const crlist = useSelector((state)=>state.cartData.cart.cartInfo);
// console.log(crlist,"m,nmnm");
const grandTot = useSelector((state)=>state.cartData.cart.grandTot);


// console.log("grandt",grandTot);
const handleNumOfItem=((id,i)=>{
  dispatch(handleQuan({
    id:id,
    val:i,
  }));

})
  useEffect(() => {
    handleNumOfItem();
   
      handleRemove();
  },[])
  
  // console.log(crlist,'Hhhelo')


  return (
    <>
      <div className='container-fluid text-center mb-5 p-4 prodBack'>
        <h5 className="prodCategory"><b>Cart</b></h5>
        <p className="prodhead2">Home / Pages / Shopping Cart</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 col-md-12'>
            <div className='table-responsive'>
              <table className='table'>
                <thead className='table-dark'>
                  <tr>
                    <th className='fhead'>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
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
              {/* {
                 (crlist.length == 0) &&
                 <div><span>No product in Cart</span></div>

              } */}

              {
                (crlist.length > 0) && <div className='d-flex justify-content-between'>
                  <div className='d-flex '>
                    <img src='image/IconDis.png' className='img-fluid dicsImg' />
                    <p className='AvaiHEadinsss  ms-2'> Discount Code</p>
                    <input type="text" className='Enter_your_pincode ms-2' placeholder='Enter discount code here.' />
                    <button className='Check ms-1 '>Apply Coupon</button>
                  </div>

                  <button onClick={handleUpdateCArt} className='UpdateCArt btn-9'>Clear Cart</button>
                </div>
              }


            </div>
          </div>

          {
            (crlist.length > 0) && <div className='col-lg-3 col-md-12 text-md-start '>
              <div className='checksideBAck p-3'>
                <h3 className='prodhead2 pr-5'>Cart Totals Summary</h3>
                <hr />
                <div className='d-flex justify-content-around'>
                  <h3 className='prodhead2'>Subtotal:  </h3>
                  <p className='price'>${grandTot}</p>

                </div>
                <div className='d-flex justify-content-around'>

                  <h3 className='prodhead2'>Shipping:</h3>
                  <p className='price'>20</p>
                </div>
                <h4 className='changeAdd mr-auto'>Change Address <i className="bi bi-pencil-square m-2"></i></h4>
                <hr />
                <div className='d-flex justify-content-around'>
                  <h3 className='prodhead2'>Grand Total</h3>
                  <p className='price'>{(crlist.length == 0) ? "0" : (grandTot + 20)}</p>
                </div>
              </div>

              <button onClick={handleProChek} className='ProcedCheck mt-3 btn-9 '>Proceed To Checkout</button>
            </div>
          }

        </div>

      </div>

    </>
  )
}
