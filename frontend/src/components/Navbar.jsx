import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import menu from '/menu-outline.svg'
import close from '/close-outline.svg'



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const user = useSelector(selectCurrentUser);
    
    const toggle = () => {
        setOpen(!open)
    }
  return (
    <header className='w-full'>
        <p className="p-1 text-center bg-green-400">Supper deal! free shipping on orders over $100 </p>

            <nav className='flex items-center justify-between px-1 md:px-4'>
                <div className='z-50 flex items-center justify-between w-full p-5 md:w-auto'>
                    <Link to={'/'}>
                        <h2>Fashion_hub</h2>
                    </Link>
                    <div className='md:hidden' >
                        <img alt='menu-icon' src={open? close : menu} width={50}
                            onClick={toggle}
                        />
                    </div>
                </div>

                <div className='md:hidden'>
                   {user && <h3 className='font-bold text-blue-950'>welcome {user}</h3>}
                </div>

                <div className='items-center hidden md:flex gap-7'>
                   <Link to='/register'>Register</Link>
                   <Link to='/login'>Login</Link>
                   <Link to='/cart'>Cart</Link>
                </div>

                {/* mobile */}
               <ul className={`md:hidden absolute w-full  top-0 bg-slate-400 pl-5 py-24 duration-500 ${open?'left-0':'left-[100%]'}`}>
                    <li className='flex flex-col gap-8 mt-8'>
                        <a href='/register' >Register</a>
                        <a href='/login' >Login</a>
                        <a href='/cart' >Cart</a>
                    </li>
                    
                    <div className=''>
                   {    user && <h3 className='font-bold text-blue-950'>welcome {user}</h3>}
                    </div>
               </ul>

            </nav>
    </header>
  )
}

export default Navbar
