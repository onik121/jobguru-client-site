import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";

const FooterContent = () => {
    return (

        <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                    <img className="w-[160px]" src={logo}></img>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#3f3f3f] mb-4">Quick Link</h2>
                    <Link className="block">Login</Link>
                    <Link className="block">Blogs</Link>
                    <Link className="block">Profile</Link>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#3f3f3f] mb-4">Legal</h2>
                    <Link className="block">Terms of use</Link>
                    <Link className="block">Terms of use</Link>
                    <Link className="block">Terms of use</Link>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-[#3f3f3f] mb-4">About</h2>
                    <Link className="block">Terms of use</Link>
                    <Link className="block">Terms of use</Link>
                    <Link className="block">Terms of use</Link>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between pb-5">
                <Footer.Copyright href="#" by="All right reserved by JobGuru" year={2024} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                </div>
            </div>
        </div>

    );
};

export default FooterContent;