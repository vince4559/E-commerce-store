import React,{useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {setCredentials } from './authSlice';
import { useLoginMutation } from './authApiSlice';
import { ToastContainer, toast } from 'react-toastify';




const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [login, {isLoading}]= useLoginMutation();
    const dispatch = useDispatch();
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        userRef.current.focus()
    },[]);

    useEffect(() => {
        setErrMsg('')
    },[email, password]);

    const handleLogin = async(e) => {
        e.preventDefault();

        try {
            const userData = await login({email, password}).unwrap();
            dispatch(setCredentials({...userData, email}));
            toast.success('Login successfull')
            navigate(from, {replace:true});
          
        } catch (err) {
            if(!err?.response === 400){
                setErrMsg('No server response');
            } else if(err.response?.status === 401){
                setErrMsg('Unauthorised');
            } else{
                setErrMsg('Login failed');
            }
            errRef.current.focus();
            toast.error('Login failed try again!!')
        }
    };

    const handleUsernameInput = (e) =>setEmail( e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);

    const content = isLoading ? <h1>Loading...</h1> :
    (
        <section className='flex flex-col items-center w-full p-5' >           
            <h2 className='my-5 text-center'> Login Here</h2>
            <p className='text-red-600' ref={errRef}>{errMsg}</p>
            <form onSubmit={handleLogin}>
                <label htmlFor='email'>Email:</label><br/>
                <input 
                    type='text'
                    id='email'
                    ref={userRef}
                    value={email}
                    onChange={handleUsernameInput}
                    autoComplete='on'
                    required
                /><br/><br/>

                <label htmlFor='password'>password:</label><br/>
                <input 
                    type='password'
                    id='password'
                    ref={userRef}
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
            <ToastContainer 
                autoClose={1000}
                draggable
                theme='dark'
            />
        </section>
    )

  return content;
}

export default Login
