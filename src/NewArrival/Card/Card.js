import React from 'react'
import jacket1 from './jackets/jacket1.jpg' 
import Dot1 from './jackets/Dot1.png' 
import Dot2 from './jackets/Dot2.png' 
import Dot3 from './jackets/Dot3.png' 
import Dot4 from './jackets/Dot4.png' 
import Dot5 from './jackets/Dot5.png' 
// import Data from '.../Data'
import { cardData } from '../../Data'
import './Card.css'
export default function Card() {
   

  return (
    <div>
        <div className="card" style={{width: "18rem",padding: "45px"}}>
            <div className='sideIcon'>
  <img src={jacket1} className="card-img-top" alt="..."/>
 
  <i class="fa-sharp fa-solid fa-circle-heart"></i><i className="bi bi-heart-fill"></i>
  <i class="fa-sharp fa-solid fa-circle-cart-shopping"></i><i className="bi bi-cart-plus-fill"></i>
  <i class="bi bi-search"></i>

  </div>
  <div className="card-body avalabl">
    <h5 className="card-title avaCol ">Available colors</h5>
    <p className="card-text">
        <img src={Dot1}/>
        <img src={Dot2}/>
        <img src={Dot3}/>
        <img src={Dot4}/>
        <img src={Dot5}/> </p>
   
  </div>
</div>
    </div>
  )
}
