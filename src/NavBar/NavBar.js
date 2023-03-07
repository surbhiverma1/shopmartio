import React, { useRef, useState ,useEffect} from 'react'
import { Link } from "react-router-dom";
import '../Common.css'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import useOutsideClick from "../OutSideClick";


// import './NavBar.css'

export default function NavBar() {
  const [searchB, setSearchB] = useState(false);
  const [navActive, setNavActive] = useState('');
  const cart = useSelector((state) => state.cartData.cart.cartInfo);
  const grandTot = useSelector((state) => state.cartData.cart.grandTot);
  // console.log("gggg",grandTot);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchB(true);
  }
  const handleCrossSearch = (e) => {
    e.preventDefault();
    setSearchB(false);
  }
  const handleNAvClick = (val) => {
    setNavActive(val);
  }

  // Closing serach 
  let i=0;
  const ref = useRef();
  useOutsideClick(ref, () => {
    i++;
    console.log("cccliccked");
    if(i>1){
    setSearchB(false);
  }
  });

  return (
    <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light  shadow rounded" id='NavBar'>
      <div className="container-fluid paddingNAvbar" >


        <Link to='/'> <img src="image/logo.png" className="img-fluid logo" alt="arrow" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <span className='menutoggstl'><i className="bi bi-list"></i></span>
        </button>
        <div className="collapse navbar-collapse navdrop justify-content-center " id="navbarNavDropdown">

          <ul className="navbar-nav show ">

            <li className="nav-item dropdown ">
              <Link className=' nav-link dropdown-toggle' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                New Arrivals
              </Link>
              <ul className='dropdown-menu mmmmmeeegghhaaa' aria-labelledby="navbarDropdownMenuLink">
                <div className='container'>
                  <div className='row menMEgha ' >
                    <div className='col-md-2 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Top Wear</li>
                        <li className='megdetails dropdown-item'>T-shirt</li>
                        <li className='megdetails dropdown-item'>Formal Shirt</li>
                        <li className='megdetails dropdown-item'>Casual Shirt</li>
                        <li className='megdetails dropdown-item'>SweatShirt</li>
                        <li className='megdetails dropdown-item'>Sweater</li>
                        <Link to='/jackets' className='megdetails dropdown-item'>Jacket</Link>
                        <li className='megdetails dropdown-item'> Rain Coats</li>
                        <li className='megdetails dropdown-item'>Blazer</li>
                      </ul>

                    </div>
                    <div className='col-md-2 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'> Bottom Wear</li>
                        <li className='megdetails dropdown-item'>Jeans</li>
                        <li className='megdetails dropdown-item'>Trouserst</li>
                        <li className='megdetails dropdown-item'>Shorts</li>
                        <li className='megdetails dropdown-item'>Track Pants</li>
                        <li className='megdetails dropdown-item'>Boxers</li>
                        <Link to='/jackets' className='megdetails dropdown-item'>Jacket</Link>
                        <li className='megdetails dropdown-item'> Joggers </li>
                        <li className='megdetails dropdown-item'>Pyjamas</li>
                      </ul>

                    </div>
                    <div className='col-md-2 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Foot Wear</li>
                        <li className='megdetails dropdown-item'>Flip Flops</li>
                        <li className='megdetails dropdown-item'>Socks </li>
                        <li className='megdetails dropdown-item'>Casual Shoes</li>
                        <li className='megdetails dropdown-item'>Sports Shoes
                        </li>
                        <li className='megdetails dropdown-item'>Formal Shoes
                        </li>
                        <li className='megdetails dropdown-item'>Sneakers</li>
                        <li className='megdetails dropdown-item'> Sandals </li>
                        <li className='megdetails dropdown-item'>Blazer</li>
                      </ul>

                    </div>
                    <div className='col-md-2 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Sleepwear</li>

                        <li className='megdetails dropdown-item'>Boxers </li>
                        <li className='megdetails dropdown-item'>Vest </li>
                        <li className='megdetails dropdown-item'>SweatShirt</li>
                        <li className='megdetails dropdown-item'>Sleepwear </li>
                        <li className='megdetails dropdown-item'>Thermals</li>

                      </ul>

                    </div>
                    <div className='col-md-4 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Other Accessories </li>
                        <li className='megdetails dropdown-item'>Bags & Backpacks</li>
                        <li className='megdetails dropdown-item'>Personal Care</li>
                        <li className='megdetails dropdown-item'>Sunglasses</li>
                        <li className='megdetails dropdown-item'>Watches</li>
                        <li className='megdetails dropdown-item'>Wallets</li>
                        <li className='megdetails dropdown-item'>Belts</li>
                        <li className='megdetails dropdown-item'>  Trimmers</li>
                        <li className='megdetails dropdown-item'>Caps & Hats</li>
                      </ul>

                    </div>
                    <hr />
                    <div className='row  p-3'>
                      <div className='col-md-4'>
                        <img src='image/Ship.png' className='img-fluid pb-2' />
                        <h2 className='AvailablDetailcolors'>FREE SHIPPING  & RETURN</h2>
                        <p>Free shipping on all orders over $120</p>

                      </div>
                      <div className='col-md-4'>
                        <img src='image/Ship2.png' className='img-fluid  pb-2' />

                        <h2 className='AvailablDetailcolors'>ONLINE SUPPORT 24/7</h2>
                        <p>Contact our support department 24/7</p>
                      </div>
                      <div className='col-md-4'>
                        <img src='image/Ship3.png' className='img-fluid  pb-2' />

                        <h2 className='AvailablDetailcolors'>MONEY BACK GUARANTEE</h2>
                        <p>100% money back guarantee</p>
                      </div>

                    </div>


                  </div>
                </div>
              </ul>

            </li>

            <li className="nav-item dropdown ">
              <Link className='active nav-link dropdown-toggle' to="" onClick={() => handleNAvClick('men')} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Men
              </Link>
              <ul className='dropdown-menu mmmmmeeegghhaaa' aria-labelledby="navbarDropdownMenuLink">
                <div className='container'>
                  <div className='row menMEgha ' >
                    <div className='col-md-2 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Top Wear</li>
                        <li className='megdetails dropdown-item'>T-shirt</li>
                        <li className='megdetails dropdown-item'>Formal Shirt</li>
                        <li className='megdetails dropdown-item'>Casual Shirt</li>
                        <li className='megdetails dropdown-item'>SweatShirt</li>
                        <li className='megdetails dropdown-item'>Sweater</li>
                        <Link to='/jackets' className='megdetails dropdown-item'>Jacket</Link>
                        <li className='megdetails dropdown-item'> Rain Coats</li>
                        <li className='megdetails dropdown-item'>Blazer</li>
                      </ul>

                    </div>
                    <div className='col-md-2 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'> Bottom Wear</li>
                        <li className='megdetails dropdown-item'>Jeans</li>
                        <li className='megdetails dropdown-item'>Trouserst</li>
                        <li className='megdetails dropdown-item'>Shorts</li>
                        <li className='megdetails dropdown-item'>Track Pants</li>
                        <li className='megdetails dropdown-item'>Boxers</li>
                        <Link to='/jackets' className='megdetails dropdown-item'>Jacket</Link>
                        <li className='megdetails dropdown-item'> Joggers </li>
                        <li className='megdetails dropdown-item'>Pyjamas</li>
                      </ul>

                    </div>
                    <div className='col-md-2 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Foot Wear</li>
                        <li className='megdetails dropdown-item'>Flip Flops</li>
                        <li className='megdetails dropdown-item'>Socks </li>
                        <li className='megdetails dropdown-item'>Casual Shoes</li>
                        <li className='megdetails dropdown-item'>Sports Shoes
                        </li>
                        <li className='megdetails dropdown-item'>Formal Shoes
                        </li>
                        <li className='megdetails dropdown-item'>Sneakers</li>
                        <li className='megdetails dropdown-item'> Sandals </li>
                        <li className='megdetails dropdown-item'>Blazer</li>
                      </ul>

                    </div>
                    <div className='col-md-2 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Sleepwear</li>

                        <li className='megdetails dropdown-item'>Boxers </li>
                        <li className='megdetails dropdown-item'>Vest </li>
                        <li className='megdetails dropdown-item'>SweatShirt</li>
                        <li className='megdetails dropdown-item'>Sleepwear </li>
                        <li className='megdetails dropdown-item'>Thermals</li>

                      </ul>

                    </div>
                    <div className='col-md-4 col-sm-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Other Accessories </li>
                        <li className='megdetails dropdown-item'>Bags & Backpacks</li>
                        <li className='megdetails dropdown-item'>Personal Care</li>
                        <li className='megdetails dropdown-item'>Sunglasses</li>
                        <li className='megdetails dropdown-item'>Watches</li>
                        <li className='megdetails dropdown-item'>Wallets</li>
                        <li className='megdetails dropdown-item'>Belts</li>
                        <li className='megdetails dropdown-item'>  Trimmers</li>
                        <li className='megdetails dropdown-item'>Caps & Hats</li>
                      </ul>

                    </div>
                    <hr />
                    <div className='row  p-3'>
                      <div className='col-md-4'>
                        <img src='image/Ship.png' className='img-fluid' />
                        <h2 className='AvailablDetailcolors'>FREE SHIPPING  & RETURN</h2>
                        <p className='mon100'>Free shipping on all orders over $120</p>

                      </div>
                      <div className='col-md-4'>
                        <img src='image/Ship2.png' className='img-fluid' />

                        <h2 className='AvailablDetailcolors'>ONLINE SUPPORT 24/7</h2>
                        <p className='mon100'>Contact our support department 24/7</p>
                      </div>
                      <div className='col-md-4'>
                        <img src='image/Ship3.png' className='img-fluid' />

                        <h2 className='AvailablDetailcolors'>MONEY BACK GUARANTEE</h2>
                        <p className='mon100'>100% money back guarantee</p>
                      </div>

                    </div>


                  </div>
                </div>
              </ul>



            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Women
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="">Action</Link></li>
                <li><Link className="dropdown-item" to="">Another action</Link></li>
                <li><Link className="dropdown-item" to="">Something else here</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Baby&Kids
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="">Action</Link></li>
                <li><Link className="dropdown-item" to="">Another action</Link></li>
                <li><Link className="dropdown-item" to="">Something else here</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Offer Zone
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="">Action</Link></li>
                <li><Link className="dropdown-item" to="">Another action</Link></li>
                <li><Link className="dropdown-item" to="">Something else here</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li> <Link to='/jackets' className='megdetails dropdown-item'>Jacket</Link></li>
                <li> <Link to='/jacketsCAtegory' className='megdetails dropdown-item'>Jacket Category</Link></li>

              </ul>
              {/* <ul className='dropdown-menu mmmmmeeegghhaaa' aria-labelledby="navbarDropdownMenuLink">
                <div className='container'>
                  <div className='row menMEgha ' >
                    <div className='col-md-2'>
                      <ul>
                        <li className='megHead dropdown-item'>Top Wear</li>
                        <li className='megdetails dropdown-item'>T-shirt</li>
                        <li className='megdetails dropdown-item'>Formal Shirt</li>
                        <li className='megdetails dropdown-item'>Casual Shirt</li>
                        <li className='megdetails dropdown-item'>SweatShirt</li>
                        <li className='megdetails dropdown-item'>Sweater</li>
                        <Link to='/jackets' className='megdetails dropdown-item'>Jacket</Link>
                        <li className='megdetails dropdown-item'> Rain Coats</li>
                        <li className='megdetails dropdown-item'>Blazer</li>
                      </ul>

                    </div>
                    <div className='col-md-2'>
                      <ul>
                        <li className='megHead dropdown-item'> Bottom Wear</li>
                        <li className='megdetails dropdown-item'>Jeans</li>
                        <li className='megdetails dropdown-item'>Trouserst</li>
                        <li className='megdetails dropdown-item'>Shorts</li>
                        <li className='megdetails dropdown-item'>Track Pants</li>
                        <li className='megdetails dropdown-item'>Boxers</li>
                        <Link to='/jackets' className='megdetails dropdown-item'>Jacket</Link>
                        <li className='megdetails dropdown-item'> Joggers </li>
                        <li className='megdetails dropdown-item'>Pyjamas</li>
                      </ul>

                    </div>
                    <div className='col-md-2'>
                      <ul>
                        <li className='megHead dropdown-item'>Foot Wear</li>
                        <li className='megdetails dropdown-item'>Flip Flops</li>
                        <li className='megdetails dropdown-item'>Socks </li>
                        <li className='megdetails dropdown-item'>Casual Shoes</li>
                        <li className='megdetails dropdown-item'>Sports Shoes
                        </li>
                        <li className='megdetails dropdown-item'>Formal Shoes
                        </li>
                        <li className='megdetails dropdown-item'>Sneakers</li>
                        <li className='megdetails dropdown-item'> Sandals </li>
                        <li className='megdetails dropdown-item'>Blazer</li>
                      </ul>

                    </div>
                    <div className='col-md-2'>
                      <ul>
                        <li className='megHead dropdown-item'>Sleepwear</li>

                        <li className='megdetails dropdown-item'>Boxers </li>
                        <li className='megdetails dropdown-item'>Vest </li>
                        <li className='megdetails dropdown-item'>SweatShirt</li>
                        <li className='megdetails dropdown-item'>Sleepwear </li>
                        <li className='megdetails dropdown-item'>Thermals</li>

                      </ul>

                    </div>
                    <div className='col-md-4'>
                      <ul>
                        <li className='megHead dropdown-item'>Other Accessories </li>
                        <li className='megdetails dropdown-item'>Bags & Backpacks</li>
                        <li className='megdetails dropdown-item'>Personal Care</li>
                        <li className='megdetails dropdown-item'>Sunglasses</li>
                        <li className='megdetails dropdown-item'>Watches</li>
                        <li className='megdetails dropdown-item'>Wallets</li>
                        <li className='megdetails dropdown-item'>Belts</li>
                        <li className='megdetails dropdown-item'>  Trimmers</li>
                        <li className='megdetails dropdown-item'>Caps & Hats</li>
                      </ul>

                    </div>
                    <hr />
                    <div className='row m-3 p-5'>
                      <div className='col-md-4'>
                        <img src='image/Ship.png' className='img-fluid' />
                        <h2 className='AvailablDetailcolors'>FREE SHIPPING  & RETURN</h2>
                        <p>Free shipping on all orders over $120</p>

                      </div>
                      <div className='col-md-4'>
                        <img src='image/Ship2.png' className='img-fluid' />

                        <h2 className='AvailablDetailcolors'>ONLINE SUPPORT 24/7</h2>
                        <p>Contact our support department 24/7</p>
                      </div>
                      <div className='col-md-4'>
                        <img src='image/Ship3.png' className='img-fluid' />

                        <h2 className='AvailablDetailcolors'>MONEY BACK GUARANTEE</h2>
                        <p>100% money back guarantee</p>
                      </div>

                    </div>


                  </div>
                </div>
              </ul> */}
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className='megHead'><Link className="dropdown-item megHead" to="/Cart">Cart</Link></li>
                {/* <li className='megHead'><Link className="dropdown-item megHead" to="/CheckOut">Check Out</Link></li> */}
                <li className='megHead'><Link className="dropdown-item megHead" to="/ContactUs">Contact Us</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {/* <li className='megHead'><Link className="dropdown-item megHead" to="/Blogs">Blogs Single</Link></li> */}
                <li className='megHead'><Link className="dropdown-item megHead" to="/BlogCategory">Blog CAtegory</Link></li>

              </ul>
            </li>
          </ul>

        </div>


        <div className='sideContnt'>
          <div className='d-flex  justify-content-between align-items-center gap-4'>
            <div onClick={handleSearch} className='toggSErch' data-bs-toggle="tooltip" data-bs-placement="top" title="Search here">

              <i className="bi bi-search navSerch " ></i></div>

            {(searchB) && <div className="shp-search-form show-search" >
              <div className="shp-search-form-inner" ref={ref}>
                <form>
                  <div className="search-bar-inner">
                    <input
                      type="text"
                      name="s"
                      id="s"
                      placeholder="Search here"
                    />
                    <button className="shp-header-search">
                      <svg
                        className="shp-search-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        viewBox="0 0 15 16.031"
                      >
                        <path d="M12.490,7.014 C12.467,7.837 12.244,8.933 11.679,9.915 C11.478,10.263 11.539,10.450 11.794,10.713 C12.735,11.684 13.658,12.675 14.576,13.671 C15.305,14.463 15.040,15.650 14.075,15.948 C13.545,16.111 13.121,15.892 12.750,15.492 C11.839,14.512 10.915,13.545 10.010,12.558 C9.794,12.321 9.642,12.257 9.335,12.436 C7.170,13.702 4.989,13.682 2.905,12.279 C0.866,10.906 -0.084,8.842 0.001,6.278 C0.104,3.170 2.407,0.526 5.349,0.071 C9.133,-0.514 12.508,2.615 12.490,7.014 ZM10.617,6.642 C10.611,4.097 8.643,1.991 6.270,1.989 C3.829,1.988 1.865,4.078 1.865,6.678 C1.865,9.235 3.848,11.336 6.257,11.330 C8.657,11.324 10.623,9.210 10.617,6.642 Z"></path>
                      </svg>
                    </button>

                    <div className=' pt-3' onClick={handleCrossSearch}>
                      <span className="shop-cancel1" ><FontAwesomeIcon icon={faXmark} /></span></div>
                  </div>
                </form>
              </div>
            </div>
            }


            <Link to="/Cart" className={(navActive == 'cart' ? 'active' : '')} onClick={() => handleNAvClick('cart')}>
              <div>
                <i className="bi bi-basket-fill navCArt " data-bs-toggle="tooltip" data-bs-placement="top" title="Cart added products">
                  <span className="position-absolute translate-middle badge rounded-pill">
                    {cart.length}
                    <span className="visually-hidden">unread messages</span></span></i> </div></Link>
            <span className='TotPriceNAv'>${grandTot}</span>

          </div>
        </div>
      </div>

    </nav>
  )
}
