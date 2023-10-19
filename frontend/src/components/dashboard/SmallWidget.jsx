import React from 'react';
import { BiUpArrow } from 'react-icons/bi';


const SmallWidget = ({title, amount, percent}) => {
  return (
    <section className='small_widget'>
       <h3 className='text-left text-green-100'>{title}</h3>
       <h3>{amount}</h3>             
        <div className='flex items-center justify-center gap-4'>
            <p className='text-green-700'>{percent}</p>
            <p className='text-green-700'><BiUpArrow size={20}/></p>
        </div>
       <p>Compared to last Month</p>
    </section>
  )
}

export default SmallWidget
