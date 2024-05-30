import { Link } from "react-router-dom";
import img from '../assets/file.png'
import { Scroll } from "../components/Scroll";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../components/Dropdown";

const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [budget, setBudget] = useState('');

    const fetchData = async (searchQuery, budgetValue) => {
        try {
            const queryParams = new URLSearchParams();
            if (searchQuery) queryParams.append('search', searchQuery);
            if (budgetValue) queryParams.append('budget', budgetValue);

            const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs?${queryParams.toString()}`);
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    useEffect(() => {
        fetchData(search, budget);
    }, [search, budget]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.target.elements.search.value.trim();
        setSearch(searchValue);
        event.target.reset();
    };

    const resetFilters = () => {
        setSearch('');
        setBudget('');
    };

    const applyBudgetFilter = (budgetValue) => {
        setBudget(budgetValue);
    };

    return (
        <div className="min-h-[calc(100vh-390px)] mb-10 flex items-center">
            <Scroll></Scroll>
            <Helmet>
                <title>Find Best One</title>
            </Helmet>
            <section className='container mx-auto pt-12'>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-x-3">
                        <h2 className='text-3xl font-medium text-[#3f3f3f]'>Total Jobs</h2>
                        <span className='px-3 py-1 text-xs text-white bg-[#7ad2a2] rounded-md mt-2'>{jobs.length} Jobs</span>
                    </div>
                    <div>
                        <button className="button" onClick={resetFilters}>All</button>
                    </div>
                    <div className="flex gap-8">
                        <Dropdown label="Budget" items={['50 150', '150 300', '200 700']} onSelect={applyBudgetFilter}></Dropdown>
                        <form className="flex gap-5 search" onSubmit={handleSearchSubmit}>
                            <input type="text" name="search" placeholder="Search Here..." />
                            <button className="button">Search</button>
                        </form>
                    </div>
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
                                                <td className='px-4 py-4 text-sm whitespace-nowrap bg-green-'><p>Salary: ${job.min_salary} - ${job.max_salary}</p></td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap flex bg-red- gap-10'>
                                                    <Link to={`/details/${job._id}`}><img className="min-w-[22px]" src={img}></img></Link>
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

export default AllJobs;