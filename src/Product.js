import React, { useEffect, useState } from 'react'
import BestSeller from './BestSeller/BestSeller'
import { cardData } from './Data'
import './Common.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
// import { useSelector } from 'react-redux'
import { addToCart, handleQuan, handleProdInDec } from './Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import ImageMAgnifier from './ImageMAgnifier';


export default function Product() {

  const [mainImg, setMainImg] = useState("");
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(1);
  const [temQuan, setTemQuan] = useState(1);
  const [size, setSize] = useState('');



  const prodNum = useSelector(state => state.cartData.cart.prodNum);
  const carrt = useSelector(state => state.cartData.cart.cartInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setTemQuan(1);
  }, [])




  const handleButtonClick = (num) => {

    setShow(num);

  }

  const handleNumOfItem = (item, i) => {
   
    let sum = parseInt(temQuan) + parseInt(i);
    console.log(temQuan,sum,"hhhlo");
   
    if (sum > 0) {
      setTemQuan(sum)
    } else {
      setTemQuan(1);
    }
    let isPresent = false;
    // console.log(carrt,"hhhlo");
    carrt.map((data) => {
      console.log(data,"carrt");
      if (data.id == item) {
        isPresent = true;
      }
    })
    if (isPresent) {
      console.log("isPresent");
      cardData.map((x) => {
        if (item == x.id) {
          x.quan = sum;
        }
      })
      dispatch(handleProdInDec(
        {
          id: item,
          val: sum,
        }
      ))
    } else {
      console.log("NOTTPresent");

      cardData.map((x) => {
        if (item == x.id) {
          x.quan = sum;
        }
      })
    }
  }


  const handleImage = (image) => {
    setClicked(true);

    setMainImg(image);

  }
  // const handleAddtoCArt = (data) => {


  //   if (cart.length == 0) {
  //     const arr = data;

  //     arr.quan = temQuan;

  //     arr.totPrice = arr.quan * arr.price;
  //     if (arr.quan === 0) {
  //       arr.quan = 1;
  //       arr.totPrice = arr.price;
  //     }

  //   }


  //   let isPresent = false;
  //   cart.forEach((prod) => {
  //     if (data.id === prod.id) {
  //       isPresent = true;
  //     }

  //   })
  //   if (isPresent) {

  //     toast.warn('Item is already added to your cart', {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //       toastId: "add",
  //     });

  //   } else {
  //     toast.info('Item added to cart', {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       toastId: "add",

  //     });

  //     setCart([...cart, data]);
  //   }

  // }
  // REdux



  const handleAddtoCArt = (data) => {
    let isPresent = false;
    carrt.forEach((itm) => {
      if (itm.id == data.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      toast.warn('Item is already added to your cart', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "add",
    });
    } else {
      toast.info('Item added to cart', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastId: "add",

    });
      dispatch(addToCart({
        id: data.id,
        image: data.image,
        name: data.nam,
        price: data.price,
        quan: data.quan,
        totPrice: data.totPrice,

      }))
    }




  }
  const handleSize= (size)=>{
    console.log(size);
    setSize(size);

  }



  // console.log("ProdNum");

  return (
    <>

      {
        cardData.map((data) => {
          if (data.id === prodNum) {


            return (
              <div key={data.id}>
                <div className='container-fluid text-center  p-4 prodBack'>

                  <h5 className="prodCategory"><b>PRODUCTS CATEGORY  </b></h5>
                  <p className="prodhead2">Home/Men's Category/Jackets?{data.nam}</p>

                </div>

                <div className='container mt-5'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='container '>
                        <div className='row'>
                          <div className='col-md-4 '>
                            <div className='text-center'>
                              <img src={data.image} onClick={() => handleImage(data.image)} className="img-fluid  m-3  smallImg" alt="..." />
                              <img src={data.image} onClick={() => handleImage(data.image)} className="img-fluid  m-3  smallImg" alt="..." />
                              <img src={data.image} onClick={() => handleImage(data.image)} className="img-fluid  m-3  smallImg" alt="..." />
                            </div>
                          </div>
                          <div className='col-md-8 text-center'>
                            <ImageMAgnifier
                              width={"100%"}
                              src={data.image}
                            />

                            {/* {
                              (clicked) ? <img src={mainImg} className="img-fluid mt-5 BigIMg" alt="..." />
                                :
                                <img src={data.image} className="img-fluid mt-5 BigIMg" alt="..." />
                            } */}


                          </div>

                        </div>
                      </div>

                    </div>
                    <div className='col-md-6 mt-5'>
                      <h2 className='jackNam'>{data.nam}</h2>
                      <p className='Special_price'> Special price ends in less than 23h:44m:05s</p>
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      <p className='Have_a_question'>(3.7) 49 Ratings   |   Have a question?</p>
                      <hr />
                      <div className='d-flex  justify-content-arounds'>
                        <h5 className='price m-1'>${data.price}</h5>
                        <p className='JackDis m-1'>$2,198</p>
                        <h5 className='_10__off m-1'>10% off</h5>
                        <p className='More_Available m-1'>More Available Offers </p>
                      </div>
                      <div className='d-flex'>
                        <h5 className='AvaiHEadinsss'>Available colors</h5>
                        {data.colr.map((col, i) => {
                          return (
                            <button className='DotYellowbtn ' key={i} style={{ background: col }}></button>
                          )
                        })}





                      </div>
                      <div className='d-flex ' >
                        <h5 className='AvaiHEadinsss me-3'>Available size</h5>
                        <button onClick={()=>handleSize('s')} className={ (size == 's' ? 'activeSize SizeBtn m-1 mt-2' : 'SizeBtn m-1 mt-2')}>S</button>
                        
                        <button onClick={()=>handleSize('m')} className={ (size == 'm' ? 'activeSize SizeBtn m-1 mt-2' : 'SizeBtn m-1 mt-2')}>M</button>
                        <button onClick={()=>handleSize('l')} className={ (size == 'l' ? 'activeSize SizeBtn m-1 mt-2' : 'SizeBtn m-1 mt-2')}>L</button>
                        <button onClick={()=>handleSize('xl')} className={ (size == 'xl' ? 'activeSize SizeBtn m-1 mt-2' : 'SizeBtn m-1 mt-2')}>XL</button>
                      </div>
                      <div className='d-flex'>
                        <h5 className='AvaiHEadinsss me-5'>Deliver to</h5>
                        <input type="text" className='Enter_your_pincode p-3' placeholder='Enter your pincode..' />
                        <button className='Check'>Check</button>
                      </div>
                      <div className='d-flex'>
                        <h5 className='AvaiHEadinsss  me-5'>Quantity</h5>

                        <div className='  quanProd '><div className='intquan'>  {(carrt.length > 0) ? data.quan : temQuan}</div><div className='inbtnbox'><button className='Addquanbtn' onClick={() => handleNumOfItem(data.id, 1)}><i className="bi bi-chevron-up"></i></button>
                          <button className='Addquanbtn' onClick={() => handleNumOfItem(data.id, -1)}><i className="bi bi-chevron-down"></i></button></div></div>

                        <button className='Check mt-2' onClick={() => handleAddtoCArt(data)}>Add to Cart</button>
                        <button className='heartButton mt-2'><i className="bi bi-heart"></i></button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })
      }

      <div className='container mb-5 mt-5'>
        <div className='d-flex '>
          < button onClick={() => handleButtonClick(1)} className='Description mr-3'>Description</button>
          <button onClick={() => handleButtonClick(2)} className='Description ms-3'>Additional Information</button>
          <button onClick={() => handleButtonClick(3)} className='Description ms-3'>Review</button>
        </div>
        <hr className='hr' />
        {
          (show === 1) && <p className='Have_a_question'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqiuanim vnostrud exerciteation ullamco labesioris nisi ut aliquip eex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  pariatur. Exciiepteur siesdint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sesdeed ut perspiciatis unde omnis isesdte neseiatus eesrror sit voluptatem accusiantium doloremque laudantium, totam rem aperiam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  pariatur. Exciiepteur siesdint occaecat cupidatat non proident,</p>
        }
        {(show === 2) && <p className='Have_a_question'> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores   voluptatem sequi nesciuintedee Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.</p>
        }

        {(show === 3) && <p className='Have_a_question'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqiuanim vnostrud exerciteation ullamco labesioris nisi ut aliquip eex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  pariatur. Exciiepteur siesdint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sesdeed ut perspiciatis unde omnis isesdte neseiatus eesrror sit voluptatem accusiantium doloremque laudantium, totam rem aperiam.</p>
        }

        <ToastContainer />


      </div>

      <BestSeller />


    </>
  )
}
