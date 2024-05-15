import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Scroll } from '../components/Scroll';
import { Helmet } from 'react-helmet';

const AddJob = () => {

    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [postingtDate, setPostingDate] = useState(new Date());
    const navigate = useNavigate();

    const handleAddJob = async (e) => {
        e.preventDefault();
        const from = e.target;
        const deadline = startDate;
        const name = user?.displayName;
        const buyer_email = user?.email;
        const description = from.description.value;
        const min_salary = parseInt(from.minimum.value);
        const max_salary = parseInt(from.maximum.value);
        const job_banner = from.banner.value;
        const category = from.category.value;
        const job_title = from.title.value;
        const job_category = from.jobcategory.value;
        const posting_date = postingtDate;
        const applicant_number = 0;
        const addData = {
            deadline, description, max_salary, min_salary, name, buyer_email, job_banner, category, job_title, job_category, posting_date, applicant_number,
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jobs`, addData)
            if (data.insertedId) {
                toast.success('Added Sucessfully');
                from.reset();
                navigate('/my-posted-job')
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='min-h-[calc(100vh-325px)]'>
            <Scroll></Scroll>
            <Helmet>
                <title>Add Your Opportunity</title>
            </Helmet>
            <div className='rounded-md bg-[#f1fcf6] boder p-5 mb-14 mt-4'>
                <h1 className='text-center text-4xl font-bold text-[#3f3f3f] title-2'>Job Upload Center</h1>
                <p className='text-center max-w-[600px] mx-auto text-lg text-black mt-5'>Streamline hiring, connect with talent. Post jobs effortlessly. Your gateway to building exceptional teams starts here.</p>
                <div className='add-job-cantainer mt-8'>
                    <div className='add-background'></div>
                    <div className='add-job-formbox p-5'>
                        <form className='space-y-5' onSubmit={handleAddJob}>
                            <div>
                                <label className='block'>Job Title</label>
                                <input type="text" name="title" className='w-full' required />
                            </div>
                            <div className='flex gap-6 input-box'>
                                <div className='w-1/2'>
                                    <select name='category' className='Select'>
                                        <option value='On-Site Job'>On-Site Job</option>
                                        <option value='Remote Job'>Remote Job</option>
                                        <option value='Part-Time'>Part-Time</option>
                                        <option value='Hybrid'>Hybrid</option>
                                    </select>
                                </div>
                                <div className='w-1/2'>
                                    <select name='jobcategory' className='Select'>
                                        <option value='Web Development'>Web Development</option>
                                        <option value='SEO'>SEO</option>
                                        <option value='Content Writing'>Content Writing</option>
                                        <option value='Graphic Design'>Graphic Design</option>
                                        <option value='UI/UX Design'>UI/UX Design</option>
                                        <option value='Digital Marketing'>Digital Marketing</option>
                                        <option value='Social Media'>Social Media</option>
                                        <option value='Full-Stake Developer'>Full-Stake Developer</option>
                                        <option value='Front-end Development'>Front-end Development</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex gap-6 input-box'>
                                <div className='w-1/2'>
                                    <label className='block'>Banner Url</label>
                                    <input className='w-full' type="text" name="banner" required />
                                </div>
                                <div className='w-1/2'>
                                    <label className='block'>Deadline</label>
                                    <DatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div className='flex gap-6 input-box'>
                                <div className='w-1/2'>
                                    <label className='block'>Your Name</label>
                                    <input className='w-full' type="text" name="" value={user?.displayName} disabled />
                                </div>
                                <div className='w-1/2'>
                                    <label className='block'>Your Email</label>
                                    <input className='w-full' type="text" name="" value={user?.email} disabled />
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-6 input-box'>
                                    <div className='w-1/2'>
                                        <label className='block'>Minimun Salary</label>
                                        <input className='w-full' type="number" name="minimum" required />
                                    </div>
                                    <div className='w-1/2'>
                                        <label className='block'>Maximum Salary</label>
                                        <input className='w-full' type="number" name="maximum" required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='block'>Description</label>
                                <textarea name="description" className='w-full' required></textarea>
                            </div>
                            <button className="apply">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJob;