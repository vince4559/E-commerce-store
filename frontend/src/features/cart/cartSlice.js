import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        products:[],
        cartQuantity:0,
        // total:0,
    },

    reducers:{
        addProduct:(state, action) => {
            const item = state.products.find((item) => item._id ===action.payload._id);
            if(item){
                item.quantity += action.payload.quantity;
            }else{
                state.products.push(action.payload);
                state.cartQuantity +=1;
                // state.total +=action.payload.price * action.payload.quantity;
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product._id !==action.payload)
            state.cartQuantity -=1;
            // state.total = state.total - (action.payload.price * action.payload.quantity)
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find((prod) => prod._id === action.payload._id);
            if(item){
                item.quantity++
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find((item) => item._id === action.payload._id);
            if(item.quantity ===1){
                item.quantity=1;
            }else{
                item.quantity--
            }
        },
        resetCart: (state) => {
            state.products =[],
            state.cartQuantity =0
        },
    }
});

export const {
    addProduct, 
    removeProduct, 
    incrementQuantity, 
    decrementQuantity, 
    resetCart
    }
 = cartSlice.actions;
export default cartSlice.reducer;
export const cartQuantity = (state) => state.cart.cartQuantity;
