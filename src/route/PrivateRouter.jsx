import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { AuthContext } from "../provider/AuthProvider";
import error from '../Animation.json'
import Lottie from "lottie-react";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className="min-h-[calc(100vh-350px)] flex items-center justify-center">
            <Lottie className='max-w-[180px]' loop={true} animationData={error}></Lottie>
        </div>;
    }

    if(user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes,
}

export default PrivateRoute;