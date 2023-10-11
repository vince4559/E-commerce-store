import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { usePaymentMutation } from '../stripePayment/paymentApiSlice';


const Cart = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const cart = useSelector(state => state.cart);
    const [payment, {isLoading}] = usePaymentMutation();
    
    const KEY = "pk_test_51NziBnF6kCcMStWYifcAHxLHeDAxqylaXp4DA6Mt8TDLVtp3H1xKr8Q7xWVrv3bmTXiLII8u3kRqCPCiNGeoYbnD005yg55hv9";

    const onToken =(token) => {
        setStripeToken(token)
    };
    // console.log(stripeToken);

    const makePayment = async () => {
        try {
         const data =    await payment({
                tokenId:stripeToken.id, 
                amount:cart.total*100,                
            }).unwrap();
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
       cart.total>=1 && stripeToken && makePayment()
    },[stripeToken])
    
  return (
    <section className='bg-slate-800'>
        <div className='flex justify-between'>
          <Link to={'/products'}>Countinue Shopping</Link>
            <h3>Your Shopping List</h3>
        </div>
        
        <div className='grid items-center gap-3 p-4 md:grid-cols-3'>
             <div className='col-span-2'>
             {cart.products.map((product) => (           
                <div  key={product._id}>
                   <div className='flex gap-3 p-2'>
                     <img src={product.img} alt='cart_img' width={150} />
                        <div className='p-2'>
                            <p>{product.title}</p>
                            <p>Color:{product.color}</p>
                            <p>Size:{product.size}</p>
                            <p>Quantity:{product.quantity}</p>
                            <p>Price:{product.price * product.quantity}</p>
                        </div>
                    </div>   
                    <hr />                                
                </div>                  
                ))}
             </div>

                
                <div className='p-3 bg-gray-400 rounded-md w-60 h-fit '>
                    <h3 className='text-black'>Order Summary</h3>
                    <div className='flex justify-between my-2'>
                        <p>Subtotal</p>
                        <p>{cart.total}</p>
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
                        <h3>${cart.total}</h3>
                    </div>
                   
                   {/* stripe checkout */}
                   {isLoading? <p>Processing</p>:
                   <StripeCheckout 
                    name="Fashion store"
                    
                    billingAddress
                    shippingAddress
                    description={`Your cart total is ${cart.total}`}
                    amount={cart.total*100}
                    stripeKey={KEY}
                    token={onToken}
                   >
                        <button className='w-full btn btn-primary'>
                            Check Out Now
                        </button>
                   </StripeCheckout>
                }
                </div>                       
           </div>  

              
    </section>
  )
}

export default Cart
