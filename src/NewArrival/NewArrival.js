import React, { useState } from 'react'
import './NewArrival.css'
import { cardData } from '../Data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import BestSeller from '../BestSeller/BestSeller'
import { useNavigate,Link } from "react-router-dom";
import CommonJacket from '../CommonJacket';
import '../Common.css';




export default function () {

  const DATA = [...cardData];
  // console.log("DDDATAT", DATA.length);

  const LIMIT = 12;
  const LENGTH = DATA.length;
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(Array.from(DATA).slice(0, LIMIT))
  const [index, setIndex] = useState(LIMIT);

  const handleLoadMore = (e) => {
    e.preventDefault();
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = Array.from(list).concat(Array.from(DATA).slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }


  const [category, setCategory] = useState("All")
  // const[catActive,setCatActive]= useState("All")
 

  const handleAll = () => {
    setCategory("All");
  }
  const handleMen = () => {
    setCategory("men");
  }
  const handleWomen = () => {
    setCategory("women");
  }
  const handleKids = () => {
    setCategory("kids");
  }
  
  return (<>

    <div className='container text-center mt-5'>
      <h5 className="new"><b>NEW ARRIVALS  </b></h5>
      <p className="ntop">New Top Trendy Fashion Winter Clothes</p>
      <button  onClick={handleAll}  className={ (category == 'All' ? 'activee' : 'nbtn btn m-2')}>All</button>
      <button onClick={handleMen} className={ (category == 'men' ? 'activee' : 'nbtn btn m-2')}>Men</button>
      <button onClick={handleWomen} className={ (category == 'women' ? 'activee' : 'nbtn btn m-2')}>Women</button>
      <button onClick={handleKids} className={ (category == 'kids' ? 'activee' : 'nbtn btn m-2')}>Kids & Baby</button>

      {/* {{(category== 'kids')&& active}}  */}
    </div>


    {/* CArd */}
    <div className="container  ">
      <div className="row my-5">

        {
          list.map((data, i) => {
            if ((category === data.category || category === data.val)) {

             return (

                <>
                  <div className="col-lg-3 col-md-6 col-sm-12 text-center mt-4" style={{ position: "relative" }} key={i} >
                    <CommonJacket data={data} />

                  </div>
                </>)
            }
          })

        }

        {/* {
          (loadMore) && 
          cardData.map((data,i) => {
        
            if (data.load == 'true') {
              return (

                <>
                  <div className="col-lg-3 col-md-6 col-sm-12 text-center mt-4" style={{ position: "relative" }} key={i} >
                    <CommonJacket data={data} />

                    </div>
                </>)
            }
          }) 
        } */}

      </div>
    </div>

    <div class="col-12 text-center">
      <div class="shp-load-more-wrap">
      {(showMore) && <a href=""  onClick={handleLoadMore} class="shp-btn  btn-9" data-loadmore="4" data-show="8">Load More</a>}
      </div>
    </div>

    {/* {(showMore) && <button onClick={handleLoadMore} className='btn loadMore'>Load More</button>}
    <hr /> */}

    <div className="container">
      <div className="row my-5">
        <div className="col-md-6  shp-new-arrivals shp-cads-inner">
        <Link to='#'> <img className="img-fluid my-4" src="image/ads05.png" /></Link>

        </div>
        <div className="col-md-6  shp-new-arrivals shp-cads-inner">
        <Link to='#'><img className="img-fluid my-4" src="image/new.png" /></Link>
        </div>
      </div>
    </div>


    <BestSeller />
    <ToastContainer />
  </>
  )
}
