import React from 'react'
import './Footer.css'
import '../Common.css'
export default function Footer() {
    const handleGoUp = () => {
        window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
    }
    return (

        <>
            <section >

                <div className="container mb-5">
                    <div className="row ">

                        <div className="col-md-3 mt-3 ">
                            <img src="image/logo.png" className="img-fluid m-4" />
                            <p className="ShopMartio">Fashion trends are em ipsum dolor sieit amet, consecitetur adipisicing elit sed do eiusmod.</p>
                            <div className="payment ps-2">Payment Options</div>
                            <div>
                            <a href='#' className='imgHover'>  <img src="image/paypal.png" className="img-fluid m-3" /> </a> 
                                 <a href='#' className='imgHover'><img src="image/visa.png" className="img-fluid m-3" /></a>
                                 <a href='#' className='imgHover'><img src="image/pay.jpg" className="img-fluid m-3 " /></a>
                                 <a href='#' className='imgHover'><img src="image/Amer.png" className="img-fluid m-3" /></a>
                            </div>
                        </ div>
                        <div className="col-md-3 mt-3">
                            <div className="payOp ps-2">QUICK LINKS</div><br />
                            <ul className='list'>
                                <li><a href='#' ><i className="bi bi-dash"></i>Our company </a></li> <br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Our history</a></li> <br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Contact</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Jobs</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Store Locations</a></li>
                            </ul>
                        </ div>

                        <div className="col-md-3 mt-3 ">
                            <div className="payOp ps-2">USEFUL LINKS</div><br />
                            <ul className='list'>
                                <li><a href='#' ><i className="bi bi-dash"></i>Privacy Policy</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Returns</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Terms & Conditions</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Contact Us</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Latest News </a></li>
                            </ul>
                        </ div>

                        <div className="col-md-3 mt-3">
                            <div className="payOp ps-2">OUR STORE</div><br />
                            <ul className='list'>
                                <li><a href='#' ><i className="bi bi-dash"></i>Women</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Men</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Kids & Baby</a></li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Jeans</a> </li><br />
                                <li><a href='#' ><i className="bi bi-dash"></i>Shirt</a></li>
                            </ul>

                        </ div>
                    </div>

                </div>


                <div className="container-fluid bg-dark text-light mt-5" >
                    <div className='row footerParent p-3'>


                        {/* <div className='d-flex content-align-center text-align-center'>
                     <p className="copy">Copyright <i className="bi bi-c-circle"></i> 2020 ShopMartio. All Right Reserved. </p>
                     <button type="button" onClick={handleGoUp} className=" upbtn"><i className="bi bi-arrow-up"></i></button>

                     <p className="legal">Legal Information</p>
                            <p className="legal">  Privacy policy</p>

                     </div>


 */}





                        {/* <div className='col-md-6 col-sm-12 text-lg-center text-md-start  text-sm-center'> */}
                        <div className='col align-items-center text-lg-center text-md-start  text-sm-center pb-sm-2 text-center'>

                            <a href='#' className="copy">Copyright <i className="bi bi-c-circle"></i> 2020 ShopMartio. All Right Reserved. </a>




                        </div>
                        <div className='col-md-1 text-start'>
                            <button type="button" onClick={handleGoUp} className="upbtn">
                                <i className="bi bi-arrow-up"></i></button>
                        </div>
                        {/* <div className='col-md-5 col-sm-12  d-flex justify-content-center gap-4'> */}
                        <div className='col  d-flex justify-content-center gap-4 align-items-center'>
                            <a href="#" className="legal">Legal Information</a>
                            <a href="#" className="legal">  Privacy policy</a>

                        </div>


                    </div>



                </div>
            </section>



        </>
    )
}
