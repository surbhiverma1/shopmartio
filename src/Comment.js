import React from 'react'

export default function Comment() {
    return (
        <>
            <div className='row mt-4'>
                <div className='col-md-1'>
                    <img src='image/Comment1.png' className='img-fluid' />
                </div>
                <div className='col-md-11'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h3 className='DavidParker'>Michelle Andrew</h3>
                            <p className='Conseccing'>2 Year Ago</p>
                        </div>
                        <div className='DavidParker'>
                            <i className="bi bi-reply-all-fill"></i>Reply
                        </div>
                    </div>
                    <p className='Conseccing'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doltore mesagna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo rra maecenas accumsan lacus vel facilisis eiusmod tempo. </p>
                </div>
                <hr/>

                    
                <div className='col-md-3'>
                    <img src='image/Comment2.png' className='img-fluid leftIMg' />
                </div>
                <div className='col-md-9'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h3 className='DavidParker'>Bernadette Deirdrew</h3>
                            <p className='Conseccing'>2 Year Ago</p>
                        </div>
                        <div className='DavidParker'>
                            <i className="bi bi-reply-all-fill"></i>Reply
                        </div>
                    </div>
                    <p className='Conseccing'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doltore mesagna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <hr/>




                <div className='col-md-1'>
                    <img src='image/Comment3.png' className='img-fluid' />
                </div>
                <div className='col-md-11'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h3 className='DavidParker'>Elizabeth Hannah</h3>
                        </div>
                        <div className='DavidParker'>
                            <i className="bi bi-reply-all-fill"></i>Reply
                        </div>
                    </div>
                    <p className='Conseccing'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doltore mesagna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo rra maecenas accumsan lacus vel facilisis eiusmod tempo. </p>
                </div>
                <hr/>

            </div>
            <h3 className="_02_COMMENTS mt-2">POST A COMMENT</h3>

            <div className='row'>
                 <div className="col-md-6  mb-3">
                     <label htmlFor="exampleInputfirstname" className="form-label">First Name</label>
                     <input type="text" className="form-control" id="exampleInputFirstName" />
                 </div>
                 <div className="col-md-6 mb-3">
                     <label htmlFor="exampleInputlastname" className="form-label">Last Name</label>
                     <input type="text" className="form-control" id="exampleInputLastName" />
                 </div>
          </div>

          <div className='row'>
                       <div className="col-md-6 mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="exampleInputname" className="form-label">Website</label>
                            <input type="text" className="form-control" id="exampleInputweb" />
                        </div>
                       
          </div>
          <div className="mb-3">
                            <label htmlFor="exampleInputname" className="form-label">Comment</label>
                            <input type="text" className="form-control" id="exampleInputcomment" />
          </div>
          

          <button className='ProcedCheck mt-3'>Post Comment</button>
        </>
    )
}
