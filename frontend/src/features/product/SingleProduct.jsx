import React, { useState } from 'react';
import { useGetProductByIdQuery } from './productApiSlice';
import { useParams } from 'react-router-dom';
import FormatCurrency from '../../utils/FormatCurrency';
import { addProduct } from '../cart/cartSlice';
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  
    const {id} = useParams();
    const dispatch = useDispatch();
    
    const {data, isLoading, isSuccess} = useGetProductByIdQuery(id);
    const product = data

    const handleQuantity = (type) => {
      if(type === "inc"){
        setQuantity(quantity +1)
      }else if(type === "dec"){
       quantity > 1 && setQuantity(quantity -1)
      }
    }

    const handleAddToCart = () => {
      dispatch( addProduct({...product, quantity, color, size,}))
    }

    let content;
    if(isLoading){
        return <p>Loading...</p>
    }else if(isSuccess){
        return content = (
            <section className='gap-4 p-4 md:flex bg-slate-300'>
                <div>
                    <img src={product.img} width={500} />
                </div>
                
               <div className='flex flex-col gap-3'>
                <h2>{product.title}</h2>
                <p className='text-black '>
                    <span className='font-medium text-green-700'>Description:</span> {product.desc}
                </p>
                <p className='flex gap-2 text-black '>
                  <span className='font-medium text-green-700'>Color:</span>                   
                  <select className='w-fit' onChange={(e) => setColor(e.target.value)} >
                    {product.color.map(c => <option key={c} onClick={() => setColor(c)}>{c}</option>)}
                  </select>
                </p>
                <p className='flex gap-3 text-black'>
                <span className='font-medium text-green-700'>Size:</span>                   
                <select className='w-fit' onChange={(e) => setSize(e.target.value)} >
                  {product.size.map(s => <option key={s} >{s}</option>)}
                </select>
                </p>
                <p className='font-bold text-black'>
                  <span className='font-medium text-green-700'>Price:</span> {FormatCurrency(product.price)}
                </p>
                <p className='text-black '>
                  <span className='font-medium text-green-700'>inStock:</span>{product.inStock?'true':'false'}
                </p>

                 <h2 >
                 <button className='w-4 border rounded-md border-slate-500' onClick={()=>handleQuantity('dec')}>-</button >
                    <span className='p-1 mx-1 font-semibold text-black'>{quantity}</span> 
                  <button  className='w-4 border rounded-md border-slate-500' onClick={() =>handleQuantity('inc')} >+</button> 
                 </h2>

                <button className='w-32 btn btn-primary' onClick={handleAddToCart}>
                  Add to cart
                </button>
               </div>
            </section>
        )
    }
    
  return content
}


export default SingleProduct;
