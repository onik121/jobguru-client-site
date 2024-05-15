import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Dropdown } from "flowbite-react";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-jobs'}>All Jobs</NavLink></li>
        {
            user && <Dropdown label="Job" className="drop-down">
                <Link to={'/applied-jobs'}><Dropdown.Item >Applied Jobs</Dropdown.Item></Link>
                <Link to={'/add-job'}><Dropdown.Item >Add Jobs</Dropdown.Item></Link>
                <Link to={'/my-posted-job'}><Dropdown.Item >My Jobs</Dropdown.Item></Link>
            </Dropdown>
        }
        <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(
                toast.success('Logout Successfull')
            )
    }


    return (
        <div className="navbar p-0 mb-3 fixed z-50 bg-white">
            <div className="navbar max-w-[1440px] mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-3 btn px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] shadow bg-base-100 rounded-md w-36 space-y-4">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/all-jobs'}>All Jobs</NavLink></li>
                            {user && <li><NavLink to={'/applied-jobs'}>Applied Jobs</NavLink></li>}
                            {user && <li><NavLink to={'/add-job'}>Add Jobs</NavLink></li>}
                            {user && <li><NavLink to={'/my-posted-job'}>My Jobs</NavLink></li>}
                            <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'}><img className="w-[180px]" src={logo}></img></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    {
                        user &&
                        <div className="w-9 tooltip tooltip-bottom cursor-pointer" data-tip={user?.displayName}>
                            {
                                user && <img className="rounded-full w-[35px] h-[35px]" src={user?.photoURL} />
                            }
                        </div>
                    }
                    {user ? <button onClick={handleLogOut}>Logout</button> : <Link to={'/login'}><button>Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;