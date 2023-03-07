import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className='container-fluid text-center mb-5 p-4 prodBack'>
                <h5 className="prodCategory"><b>Blog CATEGORY </b></h5>
                <p className="prodhead2">Home / Pages / Contact Us</p>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-md-12'>
                        <div className='contactBAck '>
                            <div class="shp-vertical-wrap"> 
                                    <h2 class="shp-contact-lbel">OUR OFFICES ARE LOCATED AT</h2>
                            </div>
                            <ul className='shp-infobox-list'> 
                           <li> <div className='ConInsidebox mb-4'>
                                <h3 className="labelss ">ENGLAND</h3>
                                <p className="prodhead2 ps-3">45  Preston Rd, Morleyy Blue Road,
                                    SK9 1FW, England</p>
                            </div> </li>
                            <li><div className='ConInsidebox mb-4'>
                                <h3 className="labelss">SCOTLAND</h3>
                                <p className="prodhead2  ps-3">512,  Preston Rd, Morleyy Blue Road,
                                    SK9 1FW, Scotland</p>
                            </div> </li>
                           <li> <div className='ConInsidebox'>
                                <h3 className="labelss ">NORTHER IRELAND</h3>
                                <p className="prodhead2  ps-3">624k  Preston Rd, Morleyy Blue Road,
                                    SK9 1FW, Northern Ireland</p>
                            </div> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-12'>
                        <h3 className="labelss ">FEEL FREE TO GET IN TOUCH</h3>
                        <p className='form-label'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                        <div>
                            <div className='row mt-5'>
                                <div className="col-md-6  mb-3">
                                    <label htmlFor="exampleInputfirstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control inputDAta" id="exampleInputFirstName" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="exampleInputlastname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control inputDAta" id="exampleInputLastName" />
                                </div>
                            </div>

                            <div className='row mt-2'>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control inputDAta" id="exampleInputEmail3" aria-describedby="emailHelp" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="exampleInputname" className="form-label">Website</label>
                                    <input type="text" className="form-control inputDAta" id="exampleInputweb" />
                                </div>

                            </div>
                            <div className="mb-3 mt-2">
                                <label htmlFor="exampleInputname" className="form-label">Comment</label>
                                <input type="text" className="form-control" id="exampleInputcomment" />
                            </div>


                            <button className='ProcedCheck mt-3'>Get In Touch</button>
                        </div>

                    </div>

                </div>

            </div>
            <div className='row  mt-5 mapGoogle' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.524087564782!2d76.04354081495623!3d22.967747824138378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963172b725b9649%3A0xca9958ddaa36af60!2sPixelNX!5e0!3m2!1sen!2sin!4v1668679351169!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}
