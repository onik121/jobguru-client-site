import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../components/MyDocument";
import { Scroll } from "../components/Scroll";
import { Helmet } from "react-helmet";


const Mybids = () => {


    const { user } = useContext(AuthContext)
    const [bids, setBids] = useState([]);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        const getdata = async () => {
            const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/my-bids?email=${user?.email}`);
            setBids(data);
        };
        getdata();
    }, []);

    return (
        <div className="min-h-[calc(100vh-390px)] mb-10 flex items-center">
            <Scroll></Scroll>
            <Helmet>
                <title>Applied Jobs</title>
            </Helmet>
            <section className='container mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-2xl font-medium text-[#3f3f3f]'>My Bids</h2>
                    <span className='px-3 py-1 text-xs text-white bg-[#7ad2a2] rounded-md'>{bids.length} Bids</span>
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
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-rightc'>
                                                <span className="font-medium text-[#3f3f3f]">Deadline</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right'>
                                                <span className="font-medium text-[#3f3f3f]">Salary</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '>
                                                <span className="font-medium text-[#3f3f3f]">Cateory</span>
                                            </th>
                                            <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right' >
                                                <span className="font-medium text-[#3f3f3f]">Job Category</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {
                                            bids.map(bid => <tr key={bid._id}>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap bg-red-'><p>{bid.job_title}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap bg-green-'>{new Date(bid.deadline).toLocaleDateString()}</td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'><p>${bid.max_salary} - ${bid.min_salary}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'><p>{bid.category}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'><p>{bid.job_category}</p></td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <PDFDownloadLink document={<MyDocument bids={bids} />} fileName="example.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading Document...' : <button className="button">Download</button>
                        }
                    </PDFDownloadLink>
                </div>
            </section>
        </div>
    );
};

export default Mybids;