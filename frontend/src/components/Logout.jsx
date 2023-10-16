import { logOut } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    
  const  handleLogout = async() => {
       try {
        toast.success('logout Successfully') 
        dispatch(logOut())
        navigate('/login')  
       } catch (err) {
        console.log(err)
        toast.error('Error ocurred')
       }
             
    }
  return ( 
    <section>
      <div>
         <button className='w-auto btn btn-secondary' onClick={handleLogout}>Logout</button>
      </div>
      <ToastContainer 
          autoClose={2000}
          draggable
          theme='dark'
      />
    </section>
   )
}

export default Logout
