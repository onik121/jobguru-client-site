import { Link } from "react-router-dom";
import img1 from '../assets/business-proposal.png';
import img3 from '../assets/save-money.png';
import img2 from '../assets/people.png';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const JobCart = ({ job }) => {

    const { _id, description, job_title, job_category, applicant_number, salary_range, name } = job;

    const { user } = useContext(AuthContext)
    const handleGo = () => {
        if (!user?.email) {
            toast.error('Please login to see deatils')
        }
    }

    return (
        <Link to={`/details/${_id}`} onClick={handleGo}>
            <div className="job-cart-box p-4">
                <div className="flex justify-between">
                    <p>Posted: 10/1/2024</p>
                    <button className="capitalize">{job_category}</button>
                </div>
                <h2 className="text-2xl mt-1 mb-2 text-black font-medium">{job_title}</h2>
                <p className="text-lg mb-3">{description.slice(0, 60)}...</p>
                <div className="flex items-center gap-2 mb-4">
                    <img src={img2}></img>
                    <p className="font-medium">Posted By: {name}</p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <img src={img3}></img>
                    <p className="font-medium">Salary: {salary_range}</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={img1}></img>
                    <p className="font-medium">Proposals: {applicant_number}</p>
                </div>
            </div>
        </Link>
    );
};

export default JobCart;