import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterContent from "../components/FooterContent";


const Root = () => {
    return (
        <div>
            <div className="h-[80px] flex justify-center">
                <Navbar></Navbar>
            </div>
            <div className="max-w-[1440px] px-5 mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="max-w-[1440px] px-5 mx-auto">
                <FooterContent></FooterContent>
            </div>
        </div>
    );
};

export default Root;