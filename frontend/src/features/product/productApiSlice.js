import {apiSlice} from "../../app/api/apiSlice";


export const productApiSlice = apiSlice.injectEndpoints({
    endpoints:builder => ({
        getProducts: builder.query({
            query:() => '/products',
            keepUnusedDataFor:60
        }),
        getNewestProducts: builder.query({
            query:() => '/products?new=true',
            keepUnusedDataFor:60
        }),
        getShoes: builder.query({
            query:() => '/products?category=shoe',
            keepUnusedDataFor:60
        }),
        getTshirt: builder.query({
            query:() => '/products?category=tshirt',
            keepUnusedDataFor:60
        }),
        getJean: builder.query({
            query:() => '/products?category=jean',
            keepUnusedDataFor:60
        }),
        getProductById: builder.query({
            query:(id) => `/product/${id}`,
            keepUnusedDataFor:60
        }),

    })
})

export const {
    useGetProductsQuery,
    useGetNewestProductsQuery,
    useGetJeanQuery,
    useGetShoesQuery,
    useGetTshirtQuery,
    useGetProductByIdQuery
} = productApiSlice;