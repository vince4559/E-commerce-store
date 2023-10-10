import { logOut } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
  const  handleLogout = () => {
        dispatch(logOut())
        navigate('/login')        
    }
  return (
    <button className='w-auto btn btn-secondary' onClick={handleLogout}>Logout</button>
  )
}

export default Logout
