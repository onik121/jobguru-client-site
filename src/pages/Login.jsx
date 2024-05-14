import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import google from '../assets/goole.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Login = () => {

    const { loginUser, user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const googlrProvider = new GoogleAuthProvider();

    useEffect(() => {
        if(user) {
            navigate('/')
        }
    },[user, navigate])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(() => {
                form.reset()
                navigate(location?.state ? location.state : '/')
                toast.success('Login Successfull')
            })
            .catch(error => {
                toast.error(error.code)
                form.reset();
            })
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googlrProvider)
            .then(() => {
                toast.success('Successfully login')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.code)
            })
    }

    if(user || loading) return;

    return (
        <div className='my-8 min-h-[calc(100vh-390px)] flex items-center justify-between sign-in'>
            <div className='w-1/2 signin-text'>
                <div>
                    <img className='w-[200px]' src={logo}></img>
                    <p className='mt-2 text-lg font-medium'>Welcome back</p>
                    <h1 className='capitalize text-3xl mt-3 font-medium text-[#3f3f3f]'>Login to your account</h1>
                </div>
            </div>
            <div className='w-2/5 signin-form'>
                <div>
                    <button className='google' onClick={handleGoogleLogin}>Sign is with Google<img src={google}></img></button>
                </div>
                <div className='line flex items-center justify-between mt-5 mb-2'>
                    <div></div>
                    <p className='uppercase'>or login with email</p>
                    <div></div>
                </div>
                <form className='space-y-5' onSubmit={handleLogin}>
                    <div>
                        <label className='block'>Your Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label className='block'>Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className='flex items-center flex-wrap gap-5'>
                        <button className='button'>Sign In</button>
                        <p>Dont you have an account? <Link className='text-[#7ad2a2] font-medium' to={'/register'}>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;