import React from 'react'
import Comment from './Comment'
import SideBlog from './SideBlog'
import './Common.css'
import { useSelector,useDispatch } from 'react-redux'
import { blogData } from './BlogDAta'
import {handlePrevBlogId,handleNextBlogId,handleBlogId} from './Redux/CartSlice'


export default function Blogs() {
    // console.log(blogId, blogPrevId, blogNextId, "BLog iddd")
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const blogId= useSelector(state => state.cartData.cart.blogId);
    const blogPrevId= useSelector(state => state.cartData.cart.blogPrevId);
    const blogNextId= useSelector(state => state.cartData.cart.blogNextId);
    const dispatch=useDispatch();

    const handlePrevBlog = (id) => {
        dispatch(handleBlogId({
            blogId: id,
        }));
        let nxtId = parseInt(1) + parseInt(id);
        dispatch(handlePrevBlogId({
            blogPrevId: id-1,
        }));
        dispatch(handleNextBlogId({
            blogNextId:nxtId,
        }));
   window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <>
            <div className='container-fluid text-center  mb-5 p-4 prodBack'>
                <h5 className="prodCategory"><b>Blog Single </b></h5>
                <p className="prodhead2">Home / Pages / Blog Single</p>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-12'>

                        {
                            blogData.map((data) => {
                                if (data.id === blogId) {
                                    return (


                                        <div key={data.id}>

                                            <img src={data.image} className='img-fluid winterImg' />
                                            <div className='d-flex mt-4'>
                                                <div className='d-flex justify-content-around'>
                                                    <i className="bi blogicon bi-person"></i>
                                                    <h5 className='ByDavidParker ms-2'>By - David Parker</h5>

                                                </div>
                                                <div className='d-flex justify-content-around ms-5'>
                                                    <i className="bi blogicon bi-calendar3"></i>
                                                    <h5 className='ByDavidParker ms-2'>July 29, 2020</h5>
                                                </div>
                                            </div>

                                            <div className='container'>
                                                <h4 className='blogHEad'>Sum dolor sit amet, consectetur adipisicing eed do eiusmod tempor incididunt ut labore et dolore magna aliqua tenim ad minim veniam.</h4>
                                                <div className='Consectetur_tem mt-3'>
                                                    <p className=''>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsiium suspendisse ultrices gravidaisus commodo viverra maecenas accumsan lacus vel facilisis orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>
                                                    <p className=''>
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cileelum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia erueent mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accum doloremquiie laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.</p>
                                                </div>
                                            </div>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-md-4'>
                                                        <img src='image/Image1.png' className='img-fluid' />
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <img src='image/Image2.png' className='img-fluid' />
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <img src='image/Image3.png' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='Consectetur_tem'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsiium suspendisse ultrices gravidaisus commodo viverra maecenas accumsan lacus vel facilisis orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>

                                            <div className='row justify-content-center text-center mt-5'>
                                                <p className='Consectetur_adipiscing'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis ltrices gravida. Risus commodo. </p>
                                                <p className='DavidParker ms-auto mt-3'>David Parker</p>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='blogHEad'>Sum dolor sit amet, consectetur adipisicing eed do eiusmod </h4>
                                                <div className='Consectetur_tem mt-1'>
                                                    <p className=''> <strong>Consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsiium suspendisse ultrices gravidaisus commodo viverra <strong>maecenas accumsan lacus vel facilisis</strong> orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  </p>
                                                    <ol>
                                                        <li> Impenetrable  ultrices gravidaisus few stray gleams.</li>
                                                        <li> A wonderful sed do eiusmod tempor incididunt ut.</li>
                                                        <li>Lempor incididunt ut labore et dolore a single stroke at moment</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>



                                    )
                                }
                            })
                        }


                        <hr />
                        <div className='d-flex'>
                            <div >
                                <h3 className='Cons pr-2 sideContent'>Tags - </h3>
                            </div>
                            <div>
                                <h3 className='Cons ps-5 sideContent'>Cloth</h3>
                            </div>
                            <div>
                                <h3 className='Cons ps-4 sideContent'>Men’s Wear </h3>
                            </div>
                            <div>
                                <h3 className='Cons ps-4 sideContent'>Women’s Wear  </h3>
                            </div>
                            <div>
                                <h3 className='Cons ps-4 sideContent'>Fashion  </h3>
                            </div>
                            <div>
                                <h3 className='Cons ps-4 sideContent'>Outfit </h3>
                            </div>
                            <div>
                                <h3 className='ConsShare ps-5 sideContent'>Share - </h3>
                            </div>
                            <div>
                                <i className="bi ps-2  bi-facebook ShareIcons "></i>
                                <i className="bi ps-2 bi-twitter ShareIcons "></i>
                                <i className="bi ps-2 bi-pinterest ShareIcons "></i>
                                <i className="bi ps-2 bi-instagram ShareIcons "></i>
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-md-6 col-sm-6'>


                                {
                                    blogData.map((data) => {
                                        if (data.id == blogPrevId) {
                                            return (
                                                <div key={data.id} className='row' onClick={() => handlePrevBlog(data.id)}>
                                                    <div className='col-md-4 col-sm-4'>
                                                        <img src={data.image} className='img-fluid blogimgprenext' />
                                                    </div>
                                                    <div className='col-md-8 col-sm-8'>
                                                        <p className='PRev'>Previous Post</p>
                                                        <p className='PrevTITTT'>Sum dolor sit amet consectetur<br />
                                                            adipisicing do eiusmod.</p>
                                                    </div>
                                                </div>

                                            )
                                        }
                                    })
                                }
                            </div>


                            <div className='col-md-6 col-sm-6'>
                                {
                                    blogData.map((data) => {
                                        if (data.id == blogNextId) {
                                            return (
                                                <div key={data.id} className='row' onClick={() => handlePrevBlog(data.id)}>

                                                    <div className='col-md-8 col-sm-8 text-align-right'>
                                                        <p className='PRev ms-auto'>Next Post</p>
                                                        <p className='PrevTITTT'>Sum dolor sit amet consectetur<br />
                                                            adipisicing do eiusmod.</p>
                                                    </div>
                                                    <div className='col-md-4 col-sm-4'>
                                                        <img src={data.image} className='img-fluid blogimgprenext' />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }



                            </div>
                        </div>

                        <h3 className="_02_COMMENTS mt-2">02 COMMENTS</h3>
                        <Comment />
                    </div>


                    <div className='col-lg-4 col-md-12'>
                        <SideBlog />
                    </div>
                </div>
            </div>

        </>
    )
}
