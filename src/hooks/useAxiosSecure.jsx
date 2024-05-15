import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    withCredentials: true,
})

const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
            (error) => {
                // console.log('Error tracked on the interceptors', error.response);
                if (error.response.status === 401 || error.response.status === 403) {
                    logOut()
                        .then(() => {
                            navigate('/login')
                        })
                        // .catch(error => console.log(error))
                }
            }
        )
    }, [logOut, navigate])

    return axiosSecure;
};
export default useAxiosSecure;