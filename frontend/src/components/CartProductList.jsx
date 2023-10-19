import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormatCurrency from '../utils/FormatCurrency'
import { addProduct, removeProduct } from "../features/cart/cartSlice"
import { useDispatch, useSelector } from 'react-redux';

const CartProductList = ({prod}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.products);
  
  const handleClick = () => {
    navigate(`/product/${prod._id}`, {state:{prod}})
  };

  const handleAddToCart = () => {
    dispatch( addProduct({...prod}))
  };
  
  const handleRemoveFromCart = () => {
    dispatch(removeProduct(prod._id))
  };
  console.log(prod.price)
  
  return (
    <section className='border border-blue-300 rounded-lg' >
      <div className='w-48 h-auto p-1 cursor-pointer'
        onClick={handleClick}
      >
        <img src={prod.img} alt={prod.title} className='h-60 w-60' />
        <h4>{prod.title}</h4>
        {prod?.categories.map(cat => <p key={prod._id}>Category: {cat}</p>)}
        <p>{FormatCurrency(prod.price)}</p>
        <p>inStock: {prod.inStock?'true':'false'}</p> 
        <hr/>
      </div>
        {
            cart.some((p) => p.id === prod.id)?
            <button className='w-fit btn btn-primary' 
            onClick={handleRemoveFromCart}>
                Remove from cart
            </button>
            : <button disabled={!prod.inStock} className='w-32 btn btn-primary'  
            onClick={handleAddToCart}>
            {prod.inStock?"Add to cart" : "Out of Stock"}
            </button>
        }
    </section>
  )
}

export default CartProductList;