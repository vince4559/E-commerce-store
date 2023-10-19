import React from 'react';
import { decrementQuantity, incrementQuantity, removeProduct } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import FormatCurrency from '../utils/FormatCurrency';


const CartItem = ({product}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.products);
    // console.log(cart.length)
  return (
    <section>
        {
            !product ? (<p>Your cart is empty</p>)
            :
            (<div>
            <div className='flex flex-wrap gap-3 p-2'>
            <img src={product.img} alt='cart_img' width={'200'} height={'100'}/>
            <div className='flex flex-col gap-2 p-2'>
                <p>{product.title.toUpperCase()}</p>
                <p>Color: {product.color}</p>
                <p>Size: {product.size}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: {FormatCurrency(product.price * product.quantity)}</p>
                    
                <h2 >
                <button className='w-4 border rounded-md border-slate-500' 
                onClick={() =>dispatch(decrementQuantity({
                    _id:product._id,
                    price:product.price ,
                    quantity:product.quantity
                }))}>
                    -
                </button >
                    <span className='p-1 mx-1 font-semibold text-white'>{product.quantity}</span> 
                <button  className='w-4 border rounded-md border-slate-500' 
                    onClick={() =>dispatch(incrementQuantity({
                        _id:product._id,
                        price:product.price,
                        quantity:product.quantity
                    }))} >
                    +
                </button> 
                </h2>
                <p className='p-1 text-2xl text-red-700 cursor-pointer' onClick={() => dispatch(removeProduct(product._id))}>
                     X
                </p>
            </div>
        </div>   
        <hr />            
            </div>)
        }               
    </section>
  )
}


export default CartItem
