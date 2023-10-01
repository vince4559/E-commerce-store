import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'auth',
    initialState: {email:null, token:null},

    reducers:{
        setCredentials:(state, action) => {
            const {email, accessToken, roles} = action.payload;
            state.email = email;
            state.token = accessToken;
            state.roles = roles;
        },

        logOut:(state) => {
            state.email = null;
            state.token = null;
        },

    }
});


export const {setCredentials, logOut} = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.email;
export const selectCurrentToken = (state) => state.auth.token;
export const roles = (state) => state.auth.roles;