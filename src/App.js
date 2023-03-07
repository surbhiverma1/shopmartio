
import './App.css';
import Banner from './Banner/Banner';
import NavBar from './NavBar/NavBar';
import NewsLetter from './Newsletter/NewsLetter';
import Jacket from './Jacket';
import Footer from './Footer/Footer';
import TopBar from './Topbar/TopBar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Product from './Product';
import CheckOut from './CheckOut';
import Blogs from './Blogs';
import Cart from './Cart';
import BlogCategory from './BlogCategory';
import ContactUs from './ContactUs';
import JacketCAtegory from './JacketCAtegory';
import GOToUp from './GOToUp'
import { handleGrandTot } from './Redux/CartSlice'
import Confirmation from './Confirmation'
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const [edit, setEdit] = useState(false);

  // const [blogId, setBlogId] = useState("2");
  // const [blogPrevId, setBlogPrevId] = useState("1");
  // const [blogNextId, setBlogNextId] = useState("3");
  // const [cart, setCart] = useState([]);
  // const [GTot, setGTot] = useState("0");
  // const [prodNum, setProdNum] = useState("1");
  const crlist = useSelector((state) => state.cartData.cart.cartInfo);
  // console.log("caaartttDaataa",crlist);
  const dispatch = useDispatch();

  useEffect(() => {

    if (crlist.length == 0) {
      dispatch(handleGrandTot({
        grandTot: '0',
      }))
    }
    handleGrandT();
  })


  const handleGrandT = () => {

    let ans = 0;
    crlist.map((item) => (ans = parseInt(ans) + parseInt(item.totPrice)));
    dispatch(handleGrandTot({
      grandTot: ans,
    }))
    // console.log("insideGra",crlist);
    // localStorage.setItem('cartInfo', JSON.stringify(crlist));

  }

  //   const handleGrandTot = () => {
  //     let ans = 0;
  //     cart.map((item) => (ans = parseInt(ans) + parseInt(item.totPrice)));
  //   if(cart.length != 0){
  //     setGTot(ans+20 );
  // }
  //   }

  return (

    <>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <GOToUp />
        <Routes>
          <Route exact path='/' element={<Banner />} />
          <Route path='/jackets' element={<Jacket />} />
          <Route path='/jacketsCAtegory' element={<JacketCAtegory />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/CheckOut' element={<CheckOut edit={edit} setEdit={setEdit} />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/BlogCategory' element={<BlogCategory />} />
          <Route path='/Confirmation' element={<Confirmation edit={edit} setEdit={setEdit} />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </>


  );
}

export default App;
