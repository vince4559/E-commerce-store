import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        products:[],
        cartQuantity:0,
        total:0,
    },

    reducers:{
        addProduct:(state, action) => {
            state.cartQuantity +=1;
            state.products.push(action.payload);
            state.total +=action.payload.price * action.payload.quantity;
        },
        
    },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;
export const cartQuantity = (state) => state.cart.cartQuantity;