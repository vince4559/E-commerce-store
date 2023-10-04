import React from 'react';
import { useGetProductByIdQuery } from './productApiSlice';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const {id} = useParams();
    const {data, isLoading, isSuccess} = useGetProductByIdQuery(id);
    const product = data;
    console.log(product)

    let content;
    if(isLoading){
        return <p>Loading...</p>
    }else if(isSuccess){
        return content = (
            <section>
                <h2>{product.desc}</h2>
            </section>
        )
    }
    
  return content
}


export default SingleProduct;
