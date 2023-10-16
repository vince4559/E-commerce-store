import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormatCurrency from '../utils/FormatCurrency'

const ProductList = ({prod}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/${prod._id}`, {state:{prod}})
  };
  return (
    <section >
      <div className='w-48 h-auto p-1 border border-blue-300 cursor-pointer'
        onClick={handleClick}
      >
        <img src={prod.img} alt={prod.title} className='h-50 w-60' />
        <h4>{prod.title}</h4>
        {prod?.categories.map(cat => <p key={prod._id}>Category: {cat}</p>)}
        <p>{FormatCurrency(prod.price)}</p>
        <p>inStock: {prod.inStock?'true':'false'}</p> 
      </div>
    </section>
  )
}

export default ProductList;