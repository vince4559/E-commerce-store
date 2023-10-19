import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        users: builder.query({
            query:() => '/users/?new=true',
            keepUnusedDataFor:60,
        }),
    })
})

export const {useUsersQuery} = userApiSlice;