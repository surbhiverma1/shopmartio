import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartReducers from './CartSlice'
// import storage from
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers'
const persistConfig = {
    key: 'root',
    storage,
  };
const reducer =combineReducers({
    cart: cartReducers,
})
const persistedReducer = persistReducer(persistConfig, reducer);

const store= configureStore({
    reducer:{
        cartData:persistedReducer,
       
    }
})
export default store;


// export default configureStore({
//     reducer:{
//         cartData:cartReducers,
//     }
// })

// console.log("CLise",reducer.cartData.getState());


// const ShopMartio= configureStore({
//     reducer:{
//         cartData:cartReducers,
//     }
// })
// export default ShopMartio;
// console.log("SSHop",ShopMartio.getState().cartData.cartInfo);
// const  cartInfo  =ShopMartio.getState().cartData.cartInfo;
// localStorage.setItem('cartInfo', JSON.stringify(cartInfo));

