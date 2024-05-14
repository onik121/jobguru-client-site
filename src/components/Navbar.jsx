import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Dropdown } from "flowbite-react";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)

    }, [theme])

    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else (
            setTheme('light')
        )
    }

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-jobs'}>All Jobs</NavLink></li>
        {
            user && <Dropdown label="Job" className="drop-down">
                <Link to={'/applied-jobs'}><Dropdown.Item >Applied Jobs</Dropdown.Item></Link>
                <Link to={'/add-job'}><Dropdown.Item >Add Jobs</Dropdown.Item></Link>
                <Link to={'my-posted-job'}><Dropdown.Item >My Jobs</Dropdown.Item></Link>
            </Dropdown>
        }
        <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
        {/* <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/alltouristspot'}>Blogs</NavLink></li>
        <label className="cursor-pointer grid place-items-center overflow-hidden w-[48px]">
            <input onChange={handleTheme} checked={theme == 'light' ? false : true} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label> */}
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-base-100 rounded-box w-52 space-y-2">
                            {navlinks}
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