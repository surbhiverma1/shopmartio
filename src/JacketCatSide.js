import React from 'react'

export default function JacketCatSide() {
    return (
        <>


            <h3 className="labelss mt-5">Product Categories</h3>
            <div className='mt-3' >
                <ul className='listscategory' >
                    <li>
                        <div className='d-flex  justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Men'S jackets</h5>
                            <h5>( 512 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Hoddies</h5>
                            <h5>( 45 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Women  JAckets</h5>
                            <h5>( 63 )</h5>
                        </div>
                    </li>
                    <li >
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Half Selvees Jackets</h5>
                            <h5>( 41 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i> Men's Hoddies</h5>
                            <h5>( 54 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>Shoes</h5>
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


            <h3 className="labelss mt-5">FILTER BY PRICE</h3>

            <div className='row listscategory'>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '25%'}}   aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p>Price: $560- $2090</p>

            </div>

            <h3 className="labelss mt-5">COLOR</h3>
            <div className='mt-3' >
                <ul className='listscategory' >
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i> Black</h5>
                            <h5>( 512 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>  White</h5>
                            <h5>( 45 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>   Blue</h5>
                            <h5>( 63 )</h5>
                        </div>
                    </li>
                    <li >
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>  Pink</h5>
                            <h5>( 41 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>  Green</h5>
                            <h5>( 54 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i> Yellow</h5>
                            <h5>( 75 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i> Red</h5>
                            <h5>( 85 )</h5>
                        </div>
                    </li>
                </ul>
            </div>


            <h3 className="labelss mt-5">SIZE</h3>
            <div className='mt-3' >
                <ul className='listscategory' >
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i> Extra Small</h5>
                            <h5>( 512 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>  Small</h5>
                            <h5>( 45 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>   Medium</h5>
                            <h5>( 63 )</h5>
                        </div>
                    </li>
                    <li >
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>  Large</h5>
                            <h5>( 41 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>  Extra Large</h5>
                            <h5>( 54 )</h5>
                        </div>
                    </li>
                    <li>
                        <div className='d-flex justify-content-between sideContent'>
                            <h5><i className="bi bi-caret-right-fill Arrow"></i>  Extra Extra Large</h5>
                            <h5>( 75 )</h5>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}
