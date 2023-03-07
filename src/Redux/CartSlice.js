import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartInfo: [],
        prodNum: '1',
        grandTot: '0',
        blogId: '2',
        blogPrevId: '1',
        blogNextId: '3',
        UserData: [],
        Address:[],
 },
    reducers: {
        addToCart: (state, action) => {
            const newCart = {
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                price: action.payload.price,
                quan: action.payload.quan,
                totPrice: action.payload.totPrice,
            }
            state.cartInfo.push(newCart);
        },
        removeFromCart: (state, action) => {

            return { ...state, cartInfo: state.cartInfo.filter((item) => item.id != action.payload.id) };
        },
        handleQuan: (state, action) => {
            const arr = state.cartInfo.map((data) => {

                if (data.id == action.payload.id) {
                    let val = action.payload.val;
                    data.quan = parseInt(data.quan) + parseInt(val);
                    data.totPrice = data.price * data.quan;

                    if (data.quan == 0) {
                        data.quan = 1;
                        data.totPrice = data.price;
                    }

                }
            })

            state.totPrice = arr;
        },
        handleUpdateCart: () => {
            return { cartInfo: [] };
        },
        handleProdNum: (state, action) => {

            return { ...state, prodNum: action.payload.prodNum }
        },
        handleProdInDec: (state, action) => {
            const arr = state.cartInfo.map((data) => {

                if (data.id == action.payload.id) {

                    data.quan = action.payload.val;
                    data.totPrice = data.price * data.quan;

                    if (data.quan == 0) {
                        data.quan = 1;
                        data.totPrice = data.price;
                    }

                }
            })
            state.totPrice = arr;

        },
        handleGrandTot: (state, action) => {

            return { ...state, grandTot: action.payload.grandTot }
        },
        handleBlogId: (state, action) => {
            return { ...state, blogId: action.payload.blogId }
        },
        handlePrevBlogId: (state, action) => {
            return { ...state, blogPrevId: action.payload.blogPrevId }
        },
        handleNextBlogId: (state, action) => {
            return { ...state, blogNextId: action.payload.blogNextId }
        },
        userDetails: (state, action) => {
            return { ...state, UserData: action.payload.UserData }

        },
        AddAddress: (state, action) => {
            console.log(action.payload.address);
            // return { ...state,Address:[...state.Address,action.payload.address]};
            return { ...state,Address:[...state.Address,action.payload.address]};

           
        },
        removeAddress: (state, action) => {

            return { ...state, Address: state.Address.filter((item) => item != action.payload.add) };
        },


    }
})

export const {addToCart, handlePrevBlogId,removeAddress, handleNextBlogId, handleBlogId, AddAddress, handleQuan, removeFromCart, userDetails,
    handleUpdateCart, handleProdNum, handleProdInDec, handleGrandTot } = cartSlice.actions;
export default cartSlice.reducer;