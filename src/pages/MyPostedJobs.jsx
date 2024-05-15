import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'
import update from '../assets/update.png'
import dele from '../assets/delete.png'
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Scroll } from "../components/Scroll";
import { Helmet } from "react-helmet";


const MyPostedJobs = () => {

    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])
    const axiosSecure = useAxiosSecure();

    const getdata = async () => {
        const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/jobs/email?email=${user?.email}`);
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
            <Scroll></Scroll>
            <Helmet>
                <title>My Opportunity</title>
            </Helmet>
            <section className='container mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-2xl font-medium text-[#3f3f3f]'>My Posted Jobs</h2>
                    <span className='px-3 py-1 text-xs text-white bg-[#7ad2a2] rounded-md'>{jobs.length} Jobs</span>
                </div>
                <div className='flex flex-col mt-6'>
                    <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-md'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th scope='col' className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right'>
                                                <div className='flex items-center gap-x-3'><span className="font-medium text-[#3f3f3f]">Job Title</span></div>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '>
                                                <span className="font-medium text-[#3f3f3f]">Cateory</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-rightc'>
                                                <span className="font-medium text-[#3f3f3f]">Posted</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-rightc'>
                                                <span className="font-medium text-[#3f3f3f]">Deadline</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right'>
                                                <span className="font-medium text-[#3f3f3f]">Salary</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right'>
                                                <span className="font-medium text-[#3f3f3f]">Action</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {
                                            jobs.map(job => <tr key={job._id}>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap bg-red-'><p>{job.job_title}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap bg-green-'><p>{job.category}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap bg-yellow-'><p>{new Date(job.posting_date).toLocaleDateString()}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap bg-red-'><p>{new Date(job.deadline).toLocaleDateString()}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap bg-green-'><p>Salary: ${job.max_salary} - ${job.min_salary}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap flex bg-red- gap-10'>
                                                    <Link to={`/update/${job._id}`}><img className="min-w-[22px]" src={update}></img></Link>
                                                    <button className="read-more" onClick={() => handleDelete(job._id)}><img className="min-w-[22px]" src={dele}></img></button>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyPostedJobs;