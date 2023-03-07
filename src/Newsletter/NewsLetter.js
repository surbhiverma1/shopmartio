import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <section className="main_heading my-5 pt-5 offer_style">
      <div className='newsSec'>
        <div className='container text-center  '>
          <div className='row'>

            <i className="bi bi-envelope-paper envlop mt-5"></i>
            <h5 className="Subscribe_Newsletter"><b>SUBSCRIBE NEWSLETTER  </b></h5>
            <p className="Join">Join our private community Wintermart. We'll send you<br />
              curated stories from the road once a month.</p>
            <div className='d-flex justify-content-center'>
              <input type="email" className="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email here' />
              
              <button type="button" className=" btn-info  ">Subscribe Now</button>
              
            </div>

            {/* <div className=" d-flex justify-content-center mt-5 mb-5" >
              <div className='socIc'>  <i className="bi bi-facebook m-2 "></i></div>
              <div className='socIc'>  <i className="bi bi-twitter m-2 "></i></div>
              <div className='socIc'> <i className="bi bi-whatsapp m-2 "></i></div>



            </div> */}

            <ul className="shp-social-icons mt-4 mb-5"><li>
              <a href="https://www.facebook.com/">
                <svg width="8px" height="16px"><path fillRule="evenodd" d="M7.700,0.001 L5.781,-0.002 C3.625,-0.002 2.231,1.544 2.231,3.936 L2.231,5.752 L0.301,5.752 C0.134,5.752 -0.001,5.897 -0.001,6.078 L-0.001,8.709 C-0.001,8.889 0.134,9.035 0.301,9.035 L2.231,9.035 L2.231,15.673 C2.231,15.852 2.366,15.999 2.533,15.999 L5.050,15.999 C5.217,15.999 5.352,15.852 5.352,15.673 L5.352,9.035 L7.608,9.035 C7.775,9.035 7.910,8.889 7.910,8.709 L7.911,6.078 C7.911,5.992 7.879,5.909 7.823,5.847 C7.766,5.786 7.690,5.752 7.609,5.752 L5.352,5.752 L5.352,4.212 C5.352,3.473 5.515,3.098 6.406,3.098 L7.700,3.096 C7.866,3.096 8.001,2.950 8.001,2.770 L8.001,0.328 C8.001,0.147 7.866,0.002 7.700,0.001 L7.700,0.001 Z"></path></svg>
              </a>
            </li><li>
                <a href="https://twitter.com/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="16px"><path fillRule="evenodd" d="M19.000,1.893 C18.293,2.214 17.540,2.427 16.755,2.531 C17.563,2.030 18.179,1.246 18.469,0.299 C17.716,0.765 16.885,1.093 15.999,1.277 C15.284,0.487 14.265,-0.001 13.154,-0.001 C10.997,-0.001 9.261,1.813 9.261,4.037 C9.261,4.357 9.287,4.665 9.351,4.957 C6.113,4.794 3.248,3.185 1.323,0.734 C0.987,1.339 0.789,2.030 0.789,2.775 C0.789,4.174 1.484,5.413 2.520,6.131 C1.894,6.118 1.280,5.930 0.760,5.633 C0.760,5.646 0.760,5.662 0.760,5.677 C0.760,7.640 2.110,9.269 3.880,9.645 C3.563,9.734 3.218,9.777 2.859,9.777 C2.610,9.777 2.358,9.763 2.122,9.709 C2.626,11.307 4.059,12.482 5.762,12.521 C4.436,13.595 2.754,14.243 0.932,14.243 C0.613,14.243 0.306,14.228 -0.000,14.187 C1.725,15.340 3.770,15.999 5.975,15.999 C13.143,15.999 17.062,9.845 17.062,4.511 C17.062,4.332 17.056,4.160 17.047,3.989 C17.821,3.421 18.470,2.710 19.000,1.893 Z"></path></svg>
                </a>
              </li><li>
                <a href="https://www.google.com/">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="15px" height="16px"><path fillRule="evenodd" d="M12.981,7.743 L12.981,9.842 L11.988,9.842 L11.988,7.743 L9.979,7.743 L9.979,6.701 L11.988,6.701 L11.988,4.615 L12.981,4.615 L12.981,6.701 L15.000,6.701 L15.000,7.743 L12.981,7.743 ZM7.490,0.849 C7.951,1.244 8.913,2.079 8.913,3.666 C8.913,5.209 8.071,5.941 7.228,6.629 C6.967,6.900 6.666,7.192 6.666,7.652 C6.666,8.109 6.967,8.360 7.187,8.549 L7.911,9.133 C8.795,9.904 9.597,10.613 9.597,12.055 C9.597,14.017 7.769,15.998 4.316,15.998 C1.404,15.998 -0.000,14.559 -0.000,13.014 C-0.000,12.263 0.361,11.200 1.545,10.468 C2.790,9.676 4.477,9.572 5.381,9.508 C5.099,9.132 4.778,8.736 4.778,8.089 C4.778,7.735 4.879,7.527 4.979,7.276 C4.757,7.297 4.538,7.317 4.337,7.317 C2.209,7.317 1.004,5.668 1.004,4.040 C1.004,3.082 1.425,2.016 2.289,1.244 C3.433,0.264 4.998,-0.002 6.084,-0.002 L10.039,-0.002 L8.733,0.849 L7.490,0.849 ZM3.493,10.428 C3.052,10.594 1.767,11.095 1.767,12.576 C1.767,14.059 3.153,15.123 5.300,15.123 C7.228,15.123 8.253,14.161 8.252,12.870 C8.252,11.802 7.590,11.240 6.063,10.114 C5.903,10.093 5.802,10.093 5.602,10.093 C5.421,10.093 4.337,10.134 3.493,10.428 ZM4.619,0.786 C4.095,0.786 3.534,1.057 3.212,1.475 C2.871,1.914 2.771,2.475 2.771,3.019 C2.771,4.417 3.553,6.733 5.281,6.733 C5.783,6.733 6.323,6.483 6.645,6.149 C7.108,5.667 7.147,5.002 7.147,4.625 C7.147,3.123 6.284,0.786 4.619,0.786 Z"></path></svg>
                </a>
              </li><li>
                <a href="https://www.whatsapp.com/?lang=en">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="16px"><path fillRule="evenodd" d="M12.814,2.324 C11.404,0.826 9.529,0.000 7.531,-0.001 C3.414,-0.001 0.064,3.556 0.062,7.927 C0.062,9.324 0.406,10.688 1.059,11.890 L-0.000,15.999 L3.959,14.897 C5.050,15.528 6.278,15.861 7.528,15.861 L7.531,15.861 C11.648,15.861 14.998,12.305 15.000,7.933 C15.001,5.815 14.224,3.822 12.814,2.324 L12.814,2.324 ZM7.531,14.523 L7.529,14.523 C6.415,14.522 5.322,14.204 4.369,13.604 L4.143,13.461 L1.793,14.115 L2.420,11.683 L2.272,11.434 C1.651,10.385 1.323,9.173 1.323,7.927 C1.325,4.294 4.110,1.337 7.534,1.337 C9.192,1.338 10.750,2.025 11.922,3.271 C13.094,4.517 13.739,6.172 13.739,7.933 C13.737,11.566 10.953,14.523 7.531,14.523 L7.531,14.523 ZM10.936,9.587 C10.750,9.488 9.832,9.008 9.661,8.943 C9.490,8.876 9.365,8.843 9.241,9.042 C9.117,9.240 8.759,9.686 8.650,9.818 C8.541,9.950 8.433,9.967 8.246,9.868 C8.059,9.769 7.458,9.559 6.745,8.885 C6.190,8.359 5.816,7.710 5.707,7.513 C5.598,7.314 5.706,7.217 5.789,7.108 C5.991,6.842 6.193,6.563 6.255,6.430 C6.318,6.298 6.287,6.183 6.240,6.084 C6.193,5.984 5.820,5.009 5.664,4.612 C5.513,4.226 5.359,4.278 5.245,4.272 C5.136,4.266 5.011,4.265 4.887,4.265 C4.763,4.265 4.560,4.315 4.389,4.513 C4.218,4.712 3.736,5.191 3.736,6.166 C3.736,7.141 4.405,8.083 4.498,8.216 C4.591,8.347 5.814,10.349 7.686,11.206 C8.131,11.411 8.479,11.532 8.750,11.624 C9.197,11.774 9.604,11.753 9.925,11.703 C10.284,11.646 11.029,11.223 11.185,10.760 C11.341,10.297 11.341,9.901 11.294,9.818 C11.247,9.736 11.123,9.686 10.936,9.587 L10.936,9.587 Z"></path></svg>
                </a>
              </li></ul>
          </div></div>
      </div></section>)
}



