import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div>
        <div className="h-[80px] flex justify-center">
            <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
    </div>
    );
};

export default Root;