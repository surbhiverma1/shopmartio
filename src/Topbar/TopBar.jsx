import React from 'react'
import './TopBar.css'

export default function TopBar() {
  return (

    <nav className=" navbar-expand-lg navbar-light bg-light topBox">
      <div className="container-fluid ">


        <div className='row'>



          <div className='col-lg-4 col-md-12 col-sm-12  mt-3 '>


            <p className="freeeeee text-md-left text-center" > <i className="bi bi-megaphone meghap "></i>  Free shipping on all orders over $99!</p>
          </div>


          <div className='col-lg-8 topBArData d-flex justify-content-end ms-auto'>
            <ul className="navbar-nav orderrrr">




              <li className="nav-item dropdown">
                <div>
                  <a className="nav-link dropdown-toggle lang" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language : English
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item megHead" href="#">Hindi</a></li>
                    <li><a className="dropdown-item megHead" href="#">Spanish </a></li>

                  </ul>
                </div>
              </li>
              <li className="nav-item dropdown linedivSide">
                <div className=''>
                  <a className="nav-link dropdown-toggle curr" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency : USD
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item megHead" href="#">Rupee</a></li>
                    <li><a className="dropdown-item megHead" href="#"> Euro</a></li>

                  </ul>
                </div>
              </li>

              <li className="nav-item linedivSide">
                <div className=''>
                  <a className="nav-link curr" href="#"> My Account</a>
                </div>
              </li>
              <li className="nav-item linedivSide">
                <div className=''>
                  <a className="nav-link curr" href="#"> Wishlist</a>
                </div>
              </li>
              <li className="nav-item linedivSide">
              
                  <a className="nav-link curr" href="#">Register or Sign in</a>
               
              </li>

            </ul>
          </div>
        </div>
      </div>

    </nav>

  )
}
