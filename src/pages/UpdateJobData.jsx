import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from 'react';
import toast from "react-hot-toast";
import axios from "axios";

const UpdateJobData = () => {

    const job = useLoaderData()
    const { job_title, job_banner, max_salary, min_salary, deadline, _id, description } = job;
    const [startDate, setStartDate] = useState(new Date(deadline));
    const navigate = useNavigate();

    const handleUpdate = async e => {
        e.preventDefault();
        const from = e.target;
        const title = from.title.value;
        const banner = from.banner.value;
        const description = from.description.value;
        const minsalary = parseInt(from.minsalary.value);
        const maxsalary = parseInt(from.maxsalary.value);
        const deadline = startDate;
        const updateData = {
            title, banner, description, maxsalary, minsalary, deadline
        }
        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/jobs/${_id}`, updateData);
            if (data.modifiedCount > 0) {
                toast.success('Update Successfull')
                navigate('/my-posted-job')
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='min-h-[calc(100vh-325px)] bg-red-50 flex items-center mb-14 mt-4'>
            <div className="p-5 rounded-md bg-[#f1fcf6] boder w-full">
                <h1 className='text-center text-3xl font-bold text-[#3f3f3f]'>Update Your Opportunities</h1>
                <p className='text-center max-w-[600px] mx-auto text-lg text-black mt-5'>Refine and refresh your job listings effortlessly. Stay ahead in hiring with our intuitive update platform.</p>
                <div className='add-job-cantainer mt-8'>
                    <div className='add-background'></div>
                    <div className='add-job-formbox p-5'>
                        <form className='space-y-5' onSubmit={handleUpdate}>
                            <div>
                                <label className='block'>Job Title</label>
                                <input className='w-full' type="text" name="title" defaultValue={job_title} />
                            </div>
                            <div className="flex gap-6">
                                <div className='w-1/2'>
                                    <label className='block'>Banner Image Url</label>
                                    <input className='w-full' type="text" defaultValue={job_banner} name="banner" />
                                </div>
                                <div className='w-1/2'>
                                    <label className='block'>Deadline</label>
                                    <DatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)} name='date' />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-1/2">
                                    <label className="block">Maximum Salary</label>
                                    <input className="w-full" type="number" defaultValue={max_salary} name='maxsalary' />
                                </div>
                                <div className="w-1/2">
                                    <label className="block">Minimum Salary</label>
                                    <input className="w-full" type="text" defaultValue={min_salary} name='minsalary' />
                                </div>
                            </div>
                            <div>
                                <label className='block'>Description</label>
                                <textarea className='w-full min-h-[120px]' defaultValue={description} name='description'></textarea>
                            </div>
                            <button className="apply">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateJobData;