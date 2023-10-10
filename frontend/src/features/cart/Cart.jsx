import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart)
    
  return (
    <section className='bg-slate-800'>
        <div className='flex justify-between'>
           <a>Countinue Shopping</a>
            <h3>Your Shopping List</h3>
        </div>

        <div className='p-4 item'>
            <div className='flex gap-3 p-2'>
                <img src='' alt='cart_img' />
                <div className='p-2'>
                    <p>Product name</p>
                    <p>color</p>
                    <p>size</p>
                    <p>quantity</p>
                    <p>price</p>
                </div>
                <hr />
            </div>  

            
            <div className='p-3 bg-gray-400 rounded-md w-60 h-60'>
                <h3 className='text-black'>Order Summary</h3>
                <div className='flex justify-between my-2'>
                    <p>Subtotal</p>
                    <p>$10</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p>Estimated Shipping</p>
                    <p>$10</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p>Shipping Discount</p>
                    <p>$10</p>
                </div>
                <div className='flex justify-between my-2'>
                    <h3>Total</h3>
                    <h3>$10</h3>
                </div>
                <button className='w-full btn btn-primary'>
                    Check Out Now
                </button>
            </div>  
        </div>  

              
    </section>
  )
}

export default Cart
