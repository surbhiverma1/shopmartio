import React, { useState, useEffect } from 'react'
import './Common.css'
import { cardData } from './Data'
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import JacketCatSide from './JacketCatSide';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { handleProdNum, addToCart } from './Redux/CartSlice'



export default function JacketCAtegory() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartData.cart.cartInfo);
    const [currPage, setCurrpage] = useState(1);
    const totDataLen = cardData.length;
    const totPAge = totDataLen / 6;
    const first = (currPage - 1) * 6
    const last = first + 6;
    const navigation = useNavigate();
    // console.log("nnoooww",totDataLen,first,last);

    const handleAddtoCArt = (data) => {

        let isPresent = false;
        cart.forEach((prod) => {
            if (data.id === prod.id) {
                isPresent = true;
            }

        })
        if (isPresent) {
            console.log("tem is already added to your cart");
            toast.warn('Item is already added to your cart', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "add",
            });

        } else {
            toast.info('Item added to cart', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                toastId: "add",

            });
            dispatch(addToCart({
                id: data.id,
                image: data.image,
                name: data.nam,
                price: data.price,
                quan: data.quan,
                totPrice: data.totPrice,

            }))
        }

    }

    const handlePageClick = (data) => {
        // console.log(data.selected + 1, "pageno");
        setCurrpage(data.selected + 1);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    }
    const handleFilter = () => {
        navigation('/jackets');
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const handleProductDetails = (num) => {
        dispatch(handleProdNum({
            prodNum: num,
        }));

        // setProdNum(num);
        navigation('/Product');
    }


    return (
        <>
            <div className='container-fluid text-center p-4 prodBack'>

                <h5 className="prodCategory"><b>PRODUCTS CATEGORY  </b></h5>
                <p className="prodhead2">Home/Men's Category/Jackets</p>

            </div>


            <div className='container mt-5'>

                <div className='row'>
                    <div className='col-lg-8 col-md-12'>
                        <div className='row'>
                            <div className='col-lg-8  col-sm-8 show'>
                               <p>  Showing items 1 to 12 of 40 total</p>
                            </div>

                            <div className='col-lg-4  col-sm-4 '>
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0  Filter text-center">
                                    <div className='d-flex justify-content-end'>
                                        <li  ><i className="bi bi-grid ms-3"></i></li>
                                        <li onClick={handleFilter} ><i className="bi bi-list-task ms-3"></i></li>
                                    </div>

                                </ul>

                            </div>
                        </div>
                        <div className='row'>

                            {
                                cardData.slice(first, last).map((data) => {
                                    // console.log();


                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-4" key={data.id} >
                                                <div className="jacketBG">


                                                    <img onClick={() => handleProductDetails(data.id)} src={data.image} className="img-fluid card-img-top m-3" alt="..." />



                                                    <div className="back from-right">

                                                        <ul className="social-icon">
                                                            <li data-bs-toggle="tooltip" data-bs-placement="left" title="Share"><div><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18" width="16" height="18">
                                                                <path fill='#fff' d="m8.5 7.6c-0.2-0.5-0.5-1-0.8-1.5q0.1-0.1 0.2-0.2c0.9-0.9 2.2-1.3 3.8-1.3v-2.6l3.3 3.5-3.3 3.4v-2.6c-1.7 0-2.6 0.5-3.2 1.3zm3.2 2.5l3.3 3.4-3.3 3.5v-2.6c-1.6 0-2.9-0.4-3.8-1.3-0.9-0.7-1.3-1.7-1.8-2.6-0.7-1.7-1.4-3-4.1-3v-1.7c1.7 0 2.9 0.4 3.9 1.2 0.8 0.8 1.3 1.8 1.7 2.7 0.8 1.7 1.4 3 4.1 3zm-9.7 2.9c1.7 0 2.6-0.5 3.2-1.3 0.3 0.6 0.5 1.1 0.9 1.6q-0.1 0.1-0.2 0.2c-1 0.9-2.2 1.3-3.9 1.3v-1.8zm0-0.3" />
                                                            </svg></div></li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Cart"><div onClick={() => handleAddtoCArt(data)}><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" width="18" height="19">
                                                                <path fill='#fff' fillRule="evenodd" class="s0" d="m10 13.8q-1.7 0-3.5 0c-1.1 0-2-0.6-2.3-1.7-0.3-1 0.1-2.1 1-2.7 0.2-0.1 0.2-0.2 0.1-0.5q-0.8-2.9-1.6-5.9c-0.1-0.3-0.2-0.4-0.5-0.4q-0.6 0.1-1.2 0c-0.6 0-0.9-0.3-0.9-0.8 0-0.5 0.4-0.8 0.9-0.8q1 0 2 0c0.5 0 0.7 0.2 0.9 0.8 0.2 0.8 0.2 0.8 1.1 0.8q4.5 0 9 0 0.2 0 0.4 0c0.6 0.1 0.9 0.7 0.6 1.3q-1.4 3-2.9 6.1c-0.2 0.5-0.5 0.6-0.9 0.6q-2.7 0-5.4 0-0.3 0-0.5 0.1c-0.4 0-0.7 0.3-0.7 0.7 0 0.4 0.3 0.8 0.7 0.8q0.2 0 0.4 0 3.5 0 6.9 0 1 0 1 0.8 0 0.8-1 0.8-1.8 0-3.6 0 0 0 0 0zm-4.4-9.6q0.6 2.4 1.3 4.6c0 0.1 0.2 0.2 0.4 0.2q2.1 0 4.3 0c0.2 0 0.4 0 0.5-0.3q0.9-2 1.8-4 0.1-0.2 0.2-0.5c-2.8 0-5.6 0-8.5 0zm6.8 11.2c0.4 0 0.7 0.4 0.7 0.8 0 0.5-0.3 0.8-0.7 0.8-0.5 0-0.8-0.3-0.8-0.8 0-0.4 0.4-0.8 0.8-0.8zm-3.8 0.8c0 0.5-0.3 0.8-0.7 0.8-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.4-0.8 0.8-0.8 0.4 0 0.7 0.4 0.7 0.8z" />
                                                            </svg></div></li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="left" title="Search"><div><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                                                <path fill='#fff' fillRule="evenodd" class="s0" d="m16.3 16.1c-0.2 0.3-0.5 0.5-0.8 0.5q-0.1 0-0.2 0c-0.2-0.1-0.4-0.2-0.6-0.4q-1.4-1.5-2.7-3-0.3-0.2-0.5-0.5l-0.1-0.1c-1.6 1.2-3.2 1.3-4.2 1.1-1.5-0.3-2.9-1.2-3.7-2.4-1.7-2.5-1.4-5.8 0.5-7.9 2-2.1 5.1-2.4 7.4-0.6 2.2 1.7 3.2 5.4 1.3 8.5l2.1 2.3q0.7 0.7 1.3 1.4c0.3 0.3 0.4 0.7 0.2 1.1zm-5.5-11.3c0.7 0.7 1.1 1.8 1.1 2.9 0 1.1-0.4 2.2-1.1 2.9-0.7 0.8-1.7 1.3-2.8 1.3q0 0 0 0c-1 0-2-0.5-2.7-1.3-0.8-0.8-1.2-1.8-1.2-2.9 0.1-2.3 1.8-4.2 3.9-4.2q0.1 0 0.1 0c1 0 2 0.5 2.7 1.3z" />
                                                            </svg></div></li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><div><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" width="18" height="17">
                                                                <path fill='#fff' fillRule="evenodd" class="s0" d="m16.9 6.4c0 1.4-0.5 2.6-1.5 3.9-0.9 1.1-2.1 2.2-3.6 3.5-0.4 0.4-1 1-1.6 1.5q-0.3 0.3-0.8 0.3-0.4 0-0.8-0.3c-0.6-0.5-1.1-1.1-1.6-1.5-1.5-1.3-2.7-2.4-3.6-3.5-1-1.3-1.5-2.5-1.5-3.9 0-1.3 0.4-2.5 1.2-3.4 0.8-0.9 1.9-1.4 3.2-1.4q1.3 0 2.4 0.9 0.4 0.3 0.7 0.6 0.3-0.3 0.7-0.6 1.1-0.9 2.5-0.9c1.2 0 2.3 0.5 3.1 1.4 0.8 0.9 1.2 2.1 1.2 3.4zm-10.6-3.2q0.8 0 1.5 0.5c0.4 0.4 0.7 0.8 0.8 1.1 0.2 0.3 0.5 0.5 0.8 0.5 0.3 0 0.6-0.2 0.8-0.5 0.1-0.3 0.4-0.7 0.9-1.1q0.6-0.5 1.5-0.5c0.7 0 1.4 0.3 1.9 0.9 0.6 0.6 0.8 1.4 0.8 2.3 0 1-0.3 1.9-1.1 2.9-0.8 1-2 2-3.4 3.3-0.4 0.4-0.9 0.8-1.4 1.2q-0.7-0.6-1.4-1.2c-1.4-1.3-2.6-2.3-3.4-3.3-0.8-1-1.1-1.9-1.1-2.9 0-0.9 0.3-1.7 0.8-2.3 0.5-0.6 1.2-0.9 2-0.9z" />
                                                            </svg></div></li>
                                                        </ul>
                                                    </div>

                                                    <div className=" text-center">
                                                        <h5 className="card-title  Available_Colors ">Available colors</h5>
                                                        <div className='d-flex justify-content-center'>

                                                            {data.colr.map((col, i) => {
                                                                return (
                                                                    <button className='DotRedbtn ' key={i} style={{ background: col }}></button>
                                                                )
                                                            })}
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className='text-center'>
                                                    <p className="JacketDis">{data.nam}</p>
                                                    <h4 className='price'>${data.price}</h4>
                                                </div>



                                            </div>


                                        </>)
                                })
                            }

                        </div>
                        <div className='container text-center mt-3'>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="Next >"
                                nextClassName='page-item'
                                nextLinkClassName='page-link'
                                previousClassName='page-item'
                                previousLinkClassName='page-link'
                                className='pagination'
                                activeClassName='active'
                                pageClassName='page-item'
                                pageLinkClassName='page-link'
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                pageCount={totPAge}
                                previousLabel="< Previous"
                                renderOnZeroPageCount={null}
                            />
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <JacketCatSide />

                    </div>
                </div>


            </div>

            <ToastContainer />




        </>
    )
}
