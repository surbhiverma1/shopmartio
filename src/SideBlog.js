import React from 'react'
import './Common.css'

export default function SideBlog() {
  return (
    <>
            <h3 className="labelss mt-2">Search</h3>
            <div className='d-flex '>
              <input type="text" className="form-control " id="exampleInputsearch" aria-describedby="emailHelp" placeholder='Search here...' />
              <button type="button" className="btn btn-info ">Search</button>
            </div>
            
            <h3 className="labelss mt-5">Categories</h3>
            <div  className='mt-3' >
                <ul className='listscategory' >
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>New Arrivals</h5>
                            <h5>( 512 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Men Fashion</h5>
                            <h5>( 45 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Women  Fashion</h5>
                            <h5>( 63 )</h5>
                        </div>
                    </li>
                    <li >
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Baby & Kids</h5>
                            <h5>( 41 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Festivals Fashion</h5>
                            <h5>( 54 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Jewelry</h5>
                            <h5>( 75 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Watches</h5>
                            <h5>( 85 )</h5>
                        </div>
                    </li>
                </ul>
            </div>
            
               
            <h3 className="labelss mt-5">Instagram</h3>
             
            <div className='row'>
                <div className='col-md-4'>
                    <img src='image/Insta6.png' className='img-fluid m-1'/>
                    <img src='image/Insta4.png' className='img-fluid m-1'/>
                    <img src='image/Insta7.png' className='img-fluid m-1'/> </div>
                <div className='col-md-4'> 
                    <img src='image/Insta9.png' className='img-fluid m-1'/>
                    <img src='image/Insta5.png' className='img-fluid m-1'/>
                    <img src='image/Insta8.png' className='img-fluid m-1'/></div>
                <div className='col-md-4'> 
                    <img src='image/Insta3.png' className='img-fluid m-1'/>
                    <img src='image/Insta6.png' className='img-fluid m-1'/>
                    <img src='image/Insta9.png' className='img-fluid m-1'/></div>
               
            </div>

            <h3 className="labelss mt-5">Archives</h3>
            <div  className='mt-3' >
                <ul className='listscategory' >
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>January 2022</h5>
                            <h5>( 512 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i> Feburary 2022</h5>
                            <h5>( 45 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>  March 2022</h5>
                            <h5>( 63 )</h5>
                        </div>
                    </li>
                    <li >
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i> April 2022</h5>
                            <h5>( 41 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i> May 2022</h5>
                            <h5>( 54 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>June 2022</h5>
                            <h5>( 75 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>July 2022</h5>
                            <h5>( 85 )</h5>
                        </div>
                    </li>
                </ul>
            </div>

            <img src='image/ads5.png' className='img-fluid mt-5' />
 





    </>
  )
}
