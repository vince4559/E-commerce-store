import React from 'react'
import { Link } from 'react-router-dom'
import FormatCurrency from '../utils/FormatCurrency'

const ProductList = ({prod}) => {
  const addToCart = () => {
    
  }
  return (
    <section className='item '>
        <Link to={`/product/${prod._id}`} className='w-48 h-auto p-1 border border-blue-300'>
            <img src={prod.img} alt={prod.title} width={200} className='h-34'  />
            <h4>{prod.title}</h4>
            {prod?.categories.map(cat => <p key={prod._id}>Category: {cat}</p>)}
            <p>{FormatCurrency(prod.price)}</p>
            <p>inStock: {prod.inStock?'true':'false'}</p> 
            <button className='btn btn-primary'>Add to cart</button>                 
        </Link>
    </section>
  )
}

export default ProductList;
