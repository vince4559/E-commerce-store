
import React from 'react'
import NewsLetter from "./NewsLetter";
import NewestProducts from '../features/product/NewestProducts';
import jean from '/jean.jpg'
import perfume from '/perfume.png'
import shoe from '/shoe.jpg'
import tshirt from '/tshirt.jpg'
import groovyWalkAnimation from '../../public/Animation - 1696085114897.json'
import { useLottie } from "lottie-react";


const Public = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };
  const { View } = useLottie(options);
  return (
   <section className="w-full p-10 bg-black">
          <div className='mx-auto mb-4 w-72'>
              {View}
          </div>
      
            <h3 className='mb-3'>Categories</h3>
           <div className='my-5 item '>
              <div className='w-48 overflow-hidden border h-52 border-slate-300'>  
                   <a href='/jean'>
                      <h3>Jean</h3> 
                      <h3 className='text-green-300' >Shop Now</h3>         
                      <img src={jean} alt='jean'  loading='lazy'/>
                      <h3 >Shop Now</h3> 
                    </a>         
                </div>
              <div className='w-48 overflow-hidden border h-52 border-slate-300'>  
                    <a href='/perfume'>
                      <h3>Perfume</h3> 
                      <h3 className='text-green-300' >Shop Now</h3>         
                      <img src={perfume} alt='perfume' loading='lazy'/>
                      <h3 >Shop Now</h3>  
                    </a>          
                </div>
              <div className='w-48 overflow-hidden border h-52 border-slate-300'>  
                    <a href='/shoes'>
                      <h3>Shoe</h3> 
                      <h3 className='text-green-300' >Shop Now</h3>         
                      <img src={shoe} alt='shoe' loading='lazy'/>
                      <h3 >Shop Now</h3>  
                    </a>          
                </div>
              <div className='w-48 overflow-hidden border h-52 border-slate-300'>  
                    <a href='/tshirts'>
                      <h3>tshirt</h3> 
                      <h3 className='text-green-300' >Shop Now</h3>         
                      <img src={tshirt} alt='tshirt' loading='lazy'/>
                      <h3 >Shop Now</h3>  
                    </a>          
                </div>
             
           </div>
        
           <NewestProducts/>
        <NewsLetter />    
        
   </section>
  )
}

export default Public
