import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,  useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { usePaymentMutation } from '../stripePayment/paymentApiSlice';
import FormatCurrency from '../../utils/FormatCurrency';
import CartItem from '../../components/CartItem';
import { selectCurrentUser } from '../auth/authSlice';
import { resetCart } from './cartSlice';



const Cart = () => {
    const [totalAmount, settoTalAmount] = useState(0);
    const [stripeToken, setStripeToken] = useState(null);
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [payment, {isLoading}] = usePaymentMutation();
    
    const user = useSelector(selectCurrentUser);
    // console.log(user)
    const navigate = useNavigate();
    const products = cart.products;
    
    
    const stripeSecreteKEY = import.meta.env.VITE_STRIPE_KEY; //publishable key

    const onToken =(token) => {
        setStripeToken(token)
    };

    useEffect(() => {
        let price = 0;
        products.map((product) => {
            price += product.price * product.quantity;
            return price
        });
        settoTalAmount(price)
    },[products]);
    
    // console.log(stripeToken);
    const makePayment = async () => {
        try {
            const data =    await payment({
                tokenId:stripeToken.id, 
                amount:totalAmount*100,                
            }).unwrap();
            navigate('/success')
            dispatch(resetCart())
            console.log(data) 
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
      totalAmount>=1 && stripeToken && makePayment()
    },[stripeToken])
    
  return (
    <section className='bg-slate-800'>
            <h3 className='text-center'>Your Shopping List</h3>        
        
        <div className='grid items-center gap-3 p-4 md:grid-cols-3'>
             <div className='col-span-2'>
             {cart.products.map((product) => (           
                <CartItem key={product._id} product={product} />              
                ))}
             </div>
             <div className='p-3 bg-gray-400 rounded-md w-60 h-fit'>
                    <h3 className='text-black'>Order Summary</h3>
                    <div className='flex justify-between my-2'>
                        <p>Subtotal</p>
                        <p>{FormatCurrency(totalAmount)}</p>
                    </div>
                    <div className='flex justify-between my-2'>
                        <p>Estimated Shipping</p>
                        <p>$10</p>
                    </div>
                    <div className='flex justify-between my-2'>
                        <p>Garage Boys</p>
                        <p>$10</p>
                    </div>
                    <div className='flex justify-between my-2'>
                        <h3>Total</h3>
                        <h3>{FormatCurrency(totalAmount)}</h3>
                    </div>
                   
                   {/* stripe checkout */}
                   {isLoading? <p>Processing...</p>:
                   <div>
                        <StripeCheckout 
                        name="Fashion store"
                        billingAddress
                        shippingAddress
                        description={`Your cart total is ${FormatCurrency(totalAmount)}`}
                        amount={totalAmount*100}
                        stripeKey={stripeSecreteKEY}
                        token={onToken} //token from the backend
                        email={user}
                        
                        >
                        <button className='w-full btn btn-primary' disabled={!user}  
                            onClick={makePayment}>
                            Proceed to checkout
                        </button>
                   </StripeCheckout>
                    {!user && <p className='text-red-300'>Login to proceed to checkout</p>}
                   </div>
                }
                </div>      
                <Link to={'/products'}>Countinue Shopping</Link>   
           </div>  

           
    </section>
  )
}

export default Cart
