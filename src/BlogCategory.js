import React from 'react'
import Comment from './Comment'
import SideBlog from './SideBlog'
import './Common.css'
import { blogData } from './BlogDAta'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {handlePrevBlogId,handleNextBlogId,handleBlogId} from './Redux/CartSlice'


export default function BlogCategory() {
    const navigation = useNavigate();
    const dispatch= useDispatch();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    const handleBLogClick = (id) => {
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
        // setBlogId(id);
       
        // setBlogNextId(nxtId);
        // setBlogPrevId(id - 1);
        navigation('/Blogs');
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

    }

    return (
        <>
            <div className='container-fluid text-center  mb-5 p-4 prodBack'>
                <h5 className="prodCategory"><b>Blog CATEGORY </b></h5>
                <p className="prodhead2">Home / Pages / Blog Category</p>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-12'>

                        {
                            blogData.map((data, i) => {

                                return (

                                    <div key={data.id} onClick={() => handleBLogClick(data.id)}>
                                        <img src={data.image} className='img-fluid winterImg' />
                                        <div className='d-flex mt-4'>
                                            <div className='d-flex justify-content-around'>
                                                <i className="bi blogicon bi-person"></i>
                                                <h5 className='ByDavidParker ms-2'>{data.author}</h5>

                                            </div>
                                            <div className='d-flex justify-content-around ms-5'>
                                                <i className="bi blogicon bi-calendar3"></i>
                                                <h5 className='ByDavidParker ms-2'>{data.date}</h5>
                                            </div>
                                        </div>
                                        <h4 className='blogHEad mb-5'>{data.title}</h4>
                                    </div>


                                )

                            })
                        }
                    </div>

                    <div className='col-lg-4 col-md-12'>
                        <SideBlog />
                    </div>

                </div>
            </div>
        </>
    )
}
