import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

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

    return (
        <div className='max-w-[1440px] mx-auto px-5 my-8 min-h-[calc(100vh-85px)] flex items-center justify-between sign-in'>
            <div className='w-1/2 signin-text'>
                <div>
                    <img className='w-[200px]' src={logo}></img>
                    <p className='mt-2 text-lg'>Welcome back</p>
                    <h1 className='capitalize text-3xl mt-3 font-medium text-black'>Login to your account</h1>
                </div>
            </div>
            <div className='w-2/5 signin-form bg-red-'>
                <form className='space-y-5' onSubmit={handleLogin}>
                    <div>
                        <label className='block'>Your Email</label>
                        <input type="email" name="email"/>
                    </div>
                    <div>
                        <label className='block'>Password</label>
                        <input type="password" name="password"/>
                    </div>
                    <div className='flex items-center flex-wrap gap-5'>
                        <button>Sign In</button>
                        <p>Dont you have an account? <Link className='text-[#7ad2a2] font-medium' to={'/register'}>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;