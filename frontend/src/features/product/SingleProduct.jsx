import React, { useState } from 'react';
import { useGetProductByIdQuery } from './productApiSlice';
import { useLocation, useParams } from 'react-router-dom';
import FormatCurrency from '../../utils/FormatCurrency';
import { addProduct, removeProduct } from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';


const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  // const location = useLocation();  
 
  // const product = location.state.prod;
  // console.log(product);
  
  const cart = useSelector(state => state.cart.products);
  // console.log(cart)

  
    const {id} = useParams();
    const dispatch = useDispatch();
    
    const {data, isLoading, isSuccess,isError} = useGetProductByIdQuery(id);
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
      toast.success(`${product.title}  added  to cart`)
    };
    
    const handleRemoveFromCart = () => {
      dispatch(removeProduct(product._id))
      toast.warning(`${product.title} removed from cart`)
    };
    

    let content;
    if(isLoading){
        return <p>Loading...</p>
    }else if(isError){
      return <h3>No data Found</h3>
    }
    else if(isSuccess){
        return  content = (
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
                  <select  className='w-fit' onChange={(e) => setColor(e.target.value)} >
                    {product.color.map(c => <option key={c} value={c} onChange={() => setColor(c)} value={c}>{c}</option>)}
                  </select>
                </p>
                <p className='flex gap-3 text-black'>
                <span className='font-medium text-green-700'>Size:</span>                   
                  <select className='w-fit' onChange={(e) => setSize(e.target.value)} >
                  {product?.size?.map(s => <option key={s} value={s} >{s}</option>)}
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

                {
                  cart.some((p) => p._id === product._id)?
                  <button className='w-fit btn btn-primary' 
                    onClick={handleRemoveFromCart}>
                      Remove from cart
                  </button>
                  : <button disabled={!product.inStock} className='w-32 btn btn-primary'    onClick={handleAddToCart}>
                    {product.inStock?"Add to cart" : "Out of Stock"}
                    </button>
                }
               </div>
               <ToastContainer 
                autoClose={1000}
                draggable
                theme='dark'
               />
            </section>
        )
    }
  return content
}

export default SingleProduct;


