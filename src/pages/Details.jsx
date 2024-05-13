import { useLoaderData } from "react-router-dom";
import img1 from '../assets/business-proposal.png';
import img2 from '../assets/businessman.png';
import img3 from '../assets/save-money.png';
import img4 from '../assets/clock.png';
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";


const Details = () => {

    const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
    const [startDate, setStartDate] = useState(new Date());
    const job = useLoaderData()
    const { user } = useContext(AuthContext)
    const { job_banner, job_title, applicant_number, description, deadline, category, buyer_email, job_category, _id, max_salary, min_salary } = job;

    const handleApply = async (e) => {
        e.preventDefault();
        const form = e.target;
        const jobId = _id
        const email = user?.email;
        if (email === buyer_email) {
            toast.error('Action not permitted');
            const modal = document.getElementById('my_modal_2');
            if (modal) {
                modal.close();
            }
            return;
        }
        const name = user?.displayName;
        const resume = form.resume.value;
        const status = 'Pending'

        const bidData = {
            email, name, resume, buyer_email, status, category, job_category, jobId
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/bids`, bidData)
            console.log(data);
            if (data.insertedId) {
                toast.success('Applied Sucessfully');
                setIsSubmitted(true);
                const modal = document.getElementById('my_modal_2');
                if (modal) {
                    modal.close();
                }
            }
        }
        catch (error) {
            console.log(error.message)
        }
        form.reset();
    }


    return (
        <div className="min-h-[calc(100vh-300px)] flex items-center">
            <div className="details-container bg-[#f1fcf6] p-4 rounded-md boder">
                <img className="rounded-md" src={job_banner}></img>
                <div className="flex items-center">
                    <div className="w-full">
                        <div>
                            <h1 className="text-3xl font-semibold text-black capitalize">{job_title}</h1>
                            <p className="text-lg mt-3">{description}</p>
                        </div>
                        <div className="destilas-box w-[100%] rounded-md p-4 mt-5 space-y-5 bg-white">
                            <div className="flex items-center gap-2">
                                <img src={img2}></img>
                                <p className="font-medium">Type: {category}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={img3}></img>
                                <p className="font-medium">Salary: ${max_salary} - {min_salary}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={img1}></img>
                                <p className="font-medium">Proposals: {applicant_number}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={img4}></img>
                                <p className="font-medium">Deadline: {new Date(deadline).toLocaleDateString()}</p>
                            </div>
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="apply">Apply Now</button>
                        </div>
                    </div>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleApply}>
                                <div className="">
                                    <label className="block">Your Name</label>
                                    <div className="input-div"><p>{user?.displayName}</p></div>
                                </div>
                                <div className="mt-5 mb-5">
                                    <label className="block">Your Email</label>
                                    <div className="input-div"><p>{user?.email}</p></div>
                                </div>
                                <div>
                                    <label className="block">Your resume link</label>
                                    <input className="w-full" type="text" name="resume" required />
                                </div>
                                <DatePicker className="hidden" selected={startDate} onChange={(date) => setStartDate(date)} />
                                <button className="apply mt-5" disabled={isSubmitted}>Submit</button> {/* Disable button if form is submitted */}
                            </form>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Details;