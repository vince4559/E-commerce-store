

import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:builder => ({
        login:builder.mutation({
            query:Credentials => ({
                url: '/login', 
                method: 'POST',
                body:{...Credentials}
            })           
        }),
        register:builder.mutation({
            query:Credentials => ({
                url: '/register', 
                method: 'POST',
                body:{...Credentials}
            })           
        }),
    })
});

export const {useLoginMutation, useRegisterMutation} = authApiSlice