import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='p-2 pb-5 bg-gray-600 conatainer '>
        <div className='item'>
            <div className='flex flex-col gap-2'>
                <h3>Fashion_hub</h3>
                <p>Bringing out the fashion sense in you..</p>
                <p>Qaulity at it's peak is asurred..</p>
            </div>
            <div className='flex flex-col gap-2 my-3'>
                <h3>Useful Links</h3>
                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/cart'}>Cart</Link>
            </div>
            <div className='flex flex-col '>
                <h3>Contact Us</h3>
                <p>+254-763-934-572</p>
                <p>fashion_hub@ng</p>
                <p>fashionhub.ng.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
