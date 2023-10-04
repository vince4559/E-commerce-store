import React, { useState } from 'react'

const NewsLetter = () => {
    const [email, seEmail] = useState('')
  return (
    <section className='my-10'>
        <h2 className='text-center'>Newsletter</h2>
        <p className='text-center'>Get timely update from your favourite products</p>
        <div className='flex flex-wrap justify-center gap-4 mt-3'>
            <input 
                type='email'
                id='email'
                value={email}                
                placeholder='Your Email Here'
                autoComplete='off'
                required
                onClick={e => seEmail(e.target.value)}
            />
            <button className='btn btn-secondary'>Click Me</button>
        </div>
    </section>
  )
}

export default NewsLetter
