import { useLoaderData } from "react-router-dom";
import img1 from '../assets/business-proposal.png';
import img2 from '../assets/businessman.png';
import img3 from '../assets/save-money.png';
import img4 from '../assets/clock.png';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Details = () => {

    const job = useLoaderData()
    const { job_banner, job_title, applicant_number, salary_range, description, deadline, category } = job;
    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div className="min-h-[calc(100vh-300px)] flex items-center">
            <div className="details-container bg-[#f1fcf6] p-4 rounded-md">
                <img className="rounded-md" src={job_banner}></img>
                <div className="flex items-center">
                    <div>
                        <div>
                            <h1 className="text-3xl font-semibold text-black">{job_title}</h1>
                            <p className="text-lg mt-3">{description}</p>
                        </div>
                        <div className="destilas-box bg-white rounded-md p-4 mt-5 space-y-5">
                            <div className="flex items-center gap-2">
                                <img src={img2}></img>
                                <p className="font-medium">Type: {category}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={img3}></img>
                                <p className="font-medium">Salary: {salary_range}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={img1}></img>
                                <p className="font-medium">Proposals: {applicant_number}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={img4}></img>
                                <p className="font-medium">Deadline: {deadline}</p>
                            </div>
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="apply">Apply Now</button>
                        </div>
                    </div>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <form>
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
                                    <input className="w-full" type="text" name="" id="" />
                                </div>
                                <button className="apply mt-5">Submit</button>
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