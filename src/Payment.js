import React from 'react'

export default function Payment({payment}) {
    return (
        <div>
            <div>
                <p> <i className="bi bi-credit-card-2-front"></i><span className='shipppngAdd'>Payment Method</span></p>
            </div>
            <hr />
            <div className='payflexBox'>
                <div>
                    <ul className='payListOp'>
                        <li>Your saved method </li>
                        <li>PhonePe/Wallet</li>
                        <li>Credit/Debit/ATM Card</li>
                        <li>Net Banking</li>
                        <li>EMI</li>
                        <li>Cash on Delivery</li>
                     </ul>
                </div>
                <div className='lineBoxxx'>
                 </div>
                <div className='container mt-4'>
                    <div className='row'>
                        
                        <label>
                            <div className=' payBox ' >

                                <input type="radio" checked={(payment=='MasterCard')? true: false} defaultChecked name="payment"
                                 id="flexRadioDefault1" className=' form-check-input' value="MasterCard" />
                                <img src='image/pay.jpg' className='img-fluid payImg' />
                                <p className='form-label '>Master Card</p>

                            </div>
                        </label>
                        <label >
                            <div className=' payBox ' >
                                <input type="radio" checked={(payment=='VisaCard')? true: false} name="payment"
                                 id="flexRadioDefault1" className=' form-check-input ' value="VisaCard" />

                                <img src='image/visa.png' className='img-fluid  payImg' />
                                <p className='form-label '>Visa Card</p>

                            </div>
                        </label>
                        <label >
                            <div className=' payBox '>
                                <input type="radio" checked={(payment=='Paypal')? true: false} name="payment"
                                 id="flexRadioDefault1" className=' form-check-input ' value="Paypal" />

                                <img src='image/paypal.png' className='img-fluid  payImg' />
                                <p className='form-label '>PayPal</p>

                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}
