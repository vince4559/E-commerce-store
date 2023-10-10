import React,{useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRegisterMutation } from './authApiSlice';



const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [register, {isLoading}]= useRegisterMutation();

    const dispatch = useDispatch();
    

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const from = location.state?.from?.pathname || "/login"

    const handleRegister = async(e) => {
        e.preventDefault();

        try {
             await register({username, email, password}).unwrap(); //const userData =
            // dispatch(setCredentials({...userData, email}));
            navigate(from, {replace:true});
           window.alert("registration successfull")
        } catch (err) {
           <p>Error occured</p>
        //    alert("Registration Not Successful")
        }
    };

    const handleUsernameInput = (e) =>setUsername( e.target.value);
    const handleEmailInput = (e) =>setEmail( e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);

    const content = isLoading ? <h1>Loading...</h1> :
    (
        <section className='flex flex-col items-center w-full p-5' >           
            <h2 className='my-5 text-center'> Registeration Form</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor='username'>Username:</label><br/>
                <input 
                    type='text'
                    id='username'
                    value={username}
                    onChange={handleUsernameInput}
                    autoComplete='off'
                    required
                /><br/><br/>
                <label htmlFor='email'>Email:</label><br/>
                <input 
                    type='email'
                    id='email'
                    ref={userRef}
                    value={email}
                    onChange={handleEmailInput}
                    autoComplete='on'
                    required
                /><br/><br/>

                <label htmlFor='password'>password:</label><br/>
                <input 
                    type='password'
                    id='password'
                    value={password}
                    onChange={handlePasswordInput}
                    autoComplete='off'
                    required
                /><br/><br/>
                <button
                    className='w-32 btn btn-secondary'
                >
                    SignIn
                </button>
            </form>
        </section>
    )

  return content;
}

export default Register
