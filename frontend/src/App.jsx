import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import RequiredAuth from './features/auth/RequiredAuth';
import Welcome from './features/auth/Welcome';
import Unauthorized from './components/Unauthorized';
import Missing from './components/Missing';
import Dashboard from './components/Dashboard'
import Jean from './features/product/categories/Jean';
import Tshirts from './features/product/categories/Tshirts';
import Shoes from './features/product/categories/Shoes';
import SingleProduct from './features/product/SingleProduct';
import Register from './features/auth/Register';
import Products from './features/product/Products';
import FilterProducts from './components/FilterProducts';
import Cart from './features/cart/Cart';
import Success from './components/Success';

// const ROLES = {
//   'User':2000,
//   "Admin":5150,
// };



const App = () => {
  return (
    // <Public />
    <Routes>
      <Route path='/' element={<Layout />} >
        {/* public route */}
        <Route index element={<Public />}  />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/unauthorized' element={<Unauthorized/>} />
        <Route path='jean' element={<Jean />} />
        <Route path='shoes' element={<Shoes />} />
        <Route path='tshirts' element={<Tshirts />} />
        <Route path='product/:id' element={<SingleProduct/>} />
        <Route path='products' element={<FilterProducts />} />
        <Route path='cart' element={<Cart />} />
        <Route path='success' element={<Success />} />
    
 
        {/* protected route */}
       
        {/* users page */}
        <Route  element={<RequiredAuth allowedRoles={[2000]} />} >
          <Route path='welcome' element={<Welcome />} />
          
        </Route>

         {/* Admin page */}
         <Route  element={<RequiredAuth allowedRoles={[5150]} />} >
          <Route path='dashboard' element={<Dashboard />} />
        </Route>

          {/* missing route */}
          <Route path='/*' element={<Missing />} />
      </Route>
    </Routes> 
  )
}

export default App



