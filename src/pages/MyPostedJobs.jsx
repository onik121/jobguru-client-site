import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import MyPostedJobCart from "../components/MyPostedJobCart";
import Swal from 'sweetalert2'


const MyPostedJobs = () => {

    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])

    const getdata = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/email/${user?.email}`);
        setJobs(data);
    };
    
    useEffect(() => {
        getdata();
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted Successfully",
                            icon: "success"
                        });
                        getdata();
                    }
                } 
                catch (error) {
                    console.error('Error deleting:', error);
                }
            }
        });
    };
    

    return (
        <div className="min-h-[calc(100vh-390px)] mb-10 flex items-center">
            <div className="w-full">
                {
                    jobs.map(job => <MyPostedJobCart job={job} key={job._id} handleDelete={handleDelete}></MyPostedJobCart>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;