import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {selectCurrentUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import menu from '/menu-outline.svg'
import close from '/close-outline.svg'
import cart from '/cart.svg'
import Logout from './Logout';
import { cartQuantity } from '../features/cart/cartSlice';




const Navbar = () => {
    const [open, setOpen] = useState(false);
    const user = useSelector(selectCurrentUser); 
    const Quantity = useSelector(cartQuantity);

    
    const toggle = () => {
        setOpen(!open)
    }
  return (
    <header className='w-full bg-gray-400' >
       <div>
       <p className="p-1 text-center bg-green-950 ">
        Supper deal! free shipping on orders over $100 
        </p>
        
        { user && <p className='font-medium text-right text-blue-950'>welcome {user}</p>}
       </div>
        <nav className='flex items-center justify-between w-full px-1 md:px-4'>
            <div className='z-50 flex items-center justify-between w-full p-5'>
                <NavLink to={'/'}  style={({isActive}) => isActive? {color:'green'}:{color:'blue'}}  
                onClick={() => setOpen(false)}>
                    Fashion_hub
                </NavLink>                 
                
                {/* cart */}
                <NavLink to='/cart' style={({isActive}) => isActive? {color:'green'}:{color:'blue'}} 
                onClick={() => setOpen(false)}>                  
                    <p className='absolute w-4 h-6 font-light text-center text-yellow-400 bg-black rounded-lg md:left-90'>
                        {Quantity}
                    </p>                
                    <img src={cart} alt='cart icon' className='w-12' />                  
                </NavLink>
                
                <div className='md:hidden' >
                    <img alt='menu-icon' src={open? close : menu} width={50}
                        onClick={toggle}
                    />
                </div>
                
            </div> 


            <div className='items-center hidden gap-7 md:flex'>
            <NavLink to='/products'style={({isActive}) => isActive? {color:'green'}:{color:'blue'}}>
                Products
            </NavLink> 
                             
            <NavLink to='/dashboard'style={({isActive}) => isActive? {color:'green'}:{color:'blue'}}>
                Dashboard
            </NavLink>
            
            <NavLink to='/register'style={({isActive}) => isActive? {color:'green'}:{color:'blue'}}>
                Register
            </NavLink>             
            { user?
            <Logout />
            :<NavLink to='/login'  style={({isActive}) => isActive? {color:'green'}:{color:'blue'}}>Login</NavLink>
            }
            </div>
            

            {/* mobile */}
            <ul className={`md:hidden absolute w-full  top-0 bg-slate-400 pl-5 py-24 duration-500 ${open?'left-0':'left-[100%]'}`}>  
            <li className='flex flex-col gap-5 mt-8'>      
                     <NavLink to='/products'  style={({isActive}) => isActive? {color:'green'}:{color:'blue'}} onClick={toggle}>
                        Products
                    </NavLink>
                    <NavLink to='/dashboard'  style={({isActive}) => isActive? {color:'green'}:{color:'blue'}} onClick={toggle}>
                        Dashboard
                    </NavLink>
                                 
                    <NavLink to='/register' style={({isActive}) => isActive? {color:'green'}:{color:'blue'}} onClick={toggle} >
                        Register
                    </NavLink>
                    {user?
                    <Logout />
                    :<NavLink to='/login'  style={({isActive}) => isActive? {color:'green'}:{color:'blue'}}>
                        Login
                    </NavLink>}
                </li>
                
                
                <div className='p-2 ' >
                {    user && <p className='font-bold text-blue-950'>welcome {user}</p>}
                </div>
            </ul>

        </nav>
    </header>
  )
}

export default Navbar
