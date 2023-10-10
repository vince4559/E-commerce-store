import React, { useState } from 'react'
import Products from '../features/product/Products';

const FilterProducts = () => {
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState('');
    // console.log(sort)
    // console.log(filter)

    const handlefilter = (e) => {
        const {name, value} = e.target;
        setFilter({...filter, [name]:value})
    };
    
    const handleSort = (e) => {
        setSort(e.target.value)
    }
  return (
    <section className='bg-slate-700'>
        <div  className='flex justify-between w-full p-4'>
            <div className='item'>
                <p className='font-bold'>Filter Products:</p>
                <select name="color" onChange={handlefilter}>
                    <option   defaultValue>Color</option>
                    <option  >blue</option>
                    <option  >black</option>
                    <option  >brown</option>
                </select>

                <select name="size" onChange={handlefilter}>
                    <option >Size</option>
                    <option>xs</option>
                    <option>s</option>
                    <option>m</option>
                </select>
            </div>
            <div className='item'>
                <p className='font-bold'>Sort Products:</p>
                <select name="Price" onChange={handleSort}>
                    <option >newest</option>
                    <option>asc</option>
                    <option>desc</option>
                </select>
            </div>
        </div>
        <Products filters={filter} sort={sort} />
    </section>
  )
}

export default FilterProducts
