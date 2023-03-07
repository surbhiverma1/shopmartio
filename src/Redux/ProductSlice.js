import {createSlice} from "@reduxjs/toolkit"

export const ProdSlice= createSlice({
    name:"Product",
    initialState:{
       
       
    },
    reducers:{ 
        handleProdNum:(state,action)=>{
            
            return{...state,prodNum:action.payload.prodNum}
   },
   handleGrandTot:(state,action)=>{
       return { ...state,cartInfo:  state.cartInfo.map((item) => ( state.grandTot = parseInt(state.grandTot) + parseInt(item.totPrice)))}
   },
    }
})
    

// addToCart:(state,action)=>{
//     const newCart ={
//         id:action.payload.id,
//         image:action.payload.image,
//         name:action.payload.name,
//         price:action.payload.price,
//         quan:action.payload.quan,
//         totPrice:action.payload.totPrice,
//     }
//     state.push(newCart)

//     removeFromCart:(state,action)=>{   
//         return{cartInfo: state.cartInfo.filter((item) => item.id != action.payload.id ) }
    
        //    return {...state, cartInfo: state.cartInfo.filter((item) => item.id != action.payload.id )}
  
    // const arr = state.cartInfo.map((data) => {
    //     if (data.id == action.payload.id) {
    //           let val = action.payload.val;
    //           data.quan = parseInt(data.quan) + parseInt(val);
    //           data.totPrice = data.price * data.quan;
    //           console.log(data.totPrice);
    //           if (data.quan == 0) {
    //               data.quan = 1;
    //               data.totPrice = data.price;
    //           }

    //       }
    //   })
    
    //   state.cartInfo = arr;
//   }
