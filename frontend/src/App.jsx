import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import RequiredAuth from './features/auth/RequiredAuth';
import Welcome from './features/auth/Welcome';
import Unauthorized from './components/Unauthorized';
import Missing from './components/Missing';
import Dashboard from './components/Dashboard'

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
        <Route path='/unauthorized' element={<Unauthorized/>} />
    
 
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



