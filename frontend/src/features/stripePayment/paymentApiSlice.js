import { apiSlice } from "../../app/api/apiSlice";

export const paymentApiSlice = apiSlice.injectEndpoints({
    endpoints : builder => ({
        payment:builder.mutation({
            query:Credentials => ({
                url: '/payment', 
                method: 'POST',
                body:{...Credentials}
            })    
        }),
    })
})

export const {usePaymentMutation} = paymentApiSlice;