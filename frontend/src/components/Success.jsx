import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <section className='flex flex-col items-center gap-4 p-10 bg-slate-500'>
        <h3>Payment was succesfull</h3>
        <p>Your order is on it's way..</p>

        <Link to={'/products'}>Continue Shopping</Link>
    </section>
  )
}

export default Success
