import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from './../provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';

const Register = () => {

    const { createUers, user, setUser, updateUserProfile } = useContext(AuthContext);

    const [show, setShow] = useState(false);

    const hanldeRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUers(email, password)
            .then(() => {
                form.reset();
                toast.success('Sign Up Successfull')
                updateUserProfile(name, photo)
                setUser({ ...user, photoURL: photo, displayName: name, })
                    // .then(() => {
                    //     form.reset();
                    // })
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    return (
        <div className='my-8 space-y-5 min-h-[calc(100vh-385px)] flex items-center justify-between sign-in'>
            <div className='bg-red- w-1/2 signin-text'>
                <div>
                    <img className='w-[200px]' src={logo}></img>
                    <h1 className='capitalize text-3xl mt-3 font-medium text-black'>Please Register your account</h1>
                </div>
            </div>
            <div className='w-2/5 signin-form bg-red-'>
                <form className='space-y-5' onSubmit={hanldeRegister}>
                    <div>
                        <label className='block'>Your Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div>
                        <label className='block'>Your Email</label>
                        <input type="email" name="email"/>
                    </div>
                    <div>
                        <label className='block'>Photo Url</label>
                        <input type="text" name="photo" id="" />
                    </div>
                    <div>
                        <label className='block'>Password</label>
                        <div className="flex items-center">
                            <input type={show ? 'test' : 'password'} className="input input-bordered w-full" name="password" required />
                            <span onClick={() => setShow(!show)} className="cursor-pointer -ml-7">{show ? <FaEye></FaEye> : <FaEyeSlash />}</span>
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-5'>
                        <button>Register</button>
                        <p>Alredy have an account? <Link className='text-[#7ad2a2] font-medium' to={'/login'}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;