import React, { useEffect } from 'react'
import './Banner.css'
import Ads1 from './ad1.png'
import { Link } from 'react-router-dom'
import Ads2 from './Ads2.png'
// import Ads3 from './Ads3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import NewArrival from '../NewArrival/NewArrival'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className='swwiperBanner'>


        <Swiper modules={[Navigation, Autoplay]} autoplay={true} className="mySwiper">
          <SwiperSlide>

            <div className='bann'>
              <div className='container'>
                <div className='row '>
                  <div className=' '>
                    <div className='ms-md-5 BannerContent'>

                      <div className='chrisSaleback'>
                        <h5 className="Christmas" data-aos="fade-left" data-aos-delay='50'>Christmas Sale 2020</h5>
                      </div>
                      <h1 className="winter" data-aos="fade-left" data-aos-delay='200'>winter Sale Is Here!f</h1>
                      <h1 className="winter1" data-aos="fade-left" data-aos-delay='250'> Upto 75% of</h1>
                      <p className="Consectetur" data-aos="fade-left" data-aos-delay='300'>Consectetur adipiscing elitsed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua uis ipsundisse.</p>
                      <button className='shopNow' data-aos="fade-left" data-aos-delay='350'><span>Shop Now <i className="bi bi-bag ms-3"></i></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className='bann'>
              <div className='container'>
                <div className='row '>
                  <div className=' '>
                    <div className='ms-md-5 BannerContent'>

                      <div className='chrisSaleback'>
                        <h5 className="Christmas" data-aos="fade-left" data-aos-delay='50'>Christmas Sale 2020</h5>
                      </div>
                      <h1 className="winter" data-aos="fade-left" data-aos-delay='200'>winter Sale Is Here!f</h1>
                      <h1 className="winter1" data-aos="fade-left" data-aos-delay='250'> Upto 75% of</h1>
                      <p className="Consectetur" data-aos="fade-left" data-aos-delay='300'>Consectetur adipiscing elitsed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua uis ipsundisse.</p>
                      <button className='shopNow ' data-aos="fade-left" data-aos-delay='350'><span>Shop Now <i className="bi bi-bag ms-3"></i></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bann'>
              <div className='container'>
                <div className='row '>
                  <div className=' '>
                    <div className='ms-md-5 BannerContent'>

                      <div className='chrisSaleback'>
                        <h5 className="Christmas" data-aos="fade-left" data-aos-delay='50'>Christmas Sale 2020</h5>
                      </div>
                      <h1 className="winter" data-aos="fade-left" data-aos-delay='200'>winter Sale Is Here!f</h1>
                      <h1 className="winter1" data-aos="fade-left" data-aos-delay='250'> Upto 75% of</h1>
                      <p className="Consectetur" data-aos="fade-left" data-aos-delay='300'>Consectetur adipiscing elitsed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua uis ipsundisse.</p>
                      <button className='shopNow ' data-aos="fade-left" data-aos-delay='350'><span>Shop Now <i className="bi bi-bag ms-3"></i></span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>

      <div className='container mt-5 '>
        <div className='row threeAd'>
          <div className='col shp-new-arrivals shp-cads-inner'>
            <Link to='#'>    <img src={Ads1} className="img-fluid ad1" alt='..' /> </Link>
          </div>
          <div className='col-md-6 shp-new-arrivals shp-cads-inner'>
            <Link to='#'> <img src={Ads2} className="img-fluid ad2" alt='..' /></Link>
          </div>
          <div className='col shp-new-arrivals shp-cads-inner'>
            <Link to='#'><img src="image/black.png" className="img-fluid ad3" alt='..' /></Link>
          </div>
        </div>
      </div>
      <NewArrival />
    </>
  )
}
