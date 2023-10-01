
import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
   <section>
     <p>This path does not exist</p>
     <Link to={'/'}> Go Back Home</Link>
   </section>
  )
}

export default Missing
