import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
  return (
   <section>
        <header>
            <h2>Welcome to the public phase man</h2>
        </header>
        <main>
            <p>This is the main side of the public</p>
            <Link to={'/login'}>Login</Link>
        </main>
   </section>
  )
}

export default Public
