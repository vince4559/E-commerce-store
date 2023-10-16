
import React from 'react'
import NewsLetter from "./NewsLetter";
import NewestProducts from '../features/product/NewestProducts';
import jean from '/jean.jpg'
import perfume from '/perfume.png'
import shoe from '/shoe.jpg'
import tshirt from '/tshirt.jpg'
import groovyWalkAnimation from '../../public/Animation - 1696085114897.json'
import { useLottie } from "lottie-react";
import { Link } from 'react-router-dom';
import '../App.css';


const Public = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };
  const { View } = useLottie(options);
  return (
   <section className="w-full p-5 bg-black">
        <div className="bg-white custom-shape-divider-bottom-1697118389">
          <div className='mx-auto mb-4 w-60 '>
              {View}
          </div>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>          
      </div>
          
            <h3 className='mb-3'>
              <Link to={'/products'}>Explore all Our Products</Link>
            </h3>
            <h3 className='mb-3'>Categories</h3>
           <div className='my-5 item '>
              <div className='flexItem'>  
                   <a href='/jean'>
                      <h3>Jean</h3> 
                      <h3 className='text-green-300' >Shop Now</h3>         
                      <img src={jean} alt='jean'  loading='lazy'/>
                      <h3 >Shop Now</h3> 
                    </a>         
                </div>
              
              <div className='flexItem'>  
                    <a href='/shoes'>
                      <h3>Shoe</h3> 
                      <h3 className='text-green-300' >Shop Now</h3>         
                      <img src={shoe} alt='shoe' loading='lazy'/>
                      <h3 >Shop Now</h3>  
                    </a>          
                </div>
              <div className='flexItem'>  
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
