import React,{useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {setCredentials } from './authSlice';
import { useLoginMutation } from './authApiSlice';




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

    const from = location.state?.from?.pathname || "/welcome"

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
            // navigate('/welcome');
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
        }
    };

    const handleUsernameInput = (e) =>setEmail( e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);

    const content = isLoading ? <h1>Loading...</h1> :
    (
        <section >
            <p ref={errRef}>{errMsg}</p>
            <h1 className='my-5 text-center'> Login Here</h1>
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
                    className='p-2 bg-blue-400 rounded-lg'
                >
                    SignIn
                </button>
            </form>
        </section>
    )

  return content;
}

export default Login
