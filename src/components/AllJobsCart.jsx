import { Link } from "react-router-dom";
import img from '../assets/file.png'


const AllJobsCart = ({ job }) => {

    const { job_title, posting_date, max_salary, min_salary, deadline, _id} = job;

    return (
        <div className="alljob-cart-box my-7 p-4 flex gap-2">
            <div className="w-[30%]">
                <h2 className="text-xl font-medium text-black">{job_title}</h2>
            </div>
            <div className="w-[20%] text-center">
                <p className="font-medium">Posted: {new Date(posting_date).toLocaleDateString()}</p>
            </div>
            <div className="w-[20%] text-center">
                <p className="font-medium">Deadline: {new Date(deadline).toLocaleDateString()}</p>
            </div>
            <div className="w-[20%]">
                <p className="font-medium">Salary: ${max_salary} - {min_salary}</p>
            </div>
            <div className="w-[10%] justify-center flex" title="View Details">
                <Link to={`/details/${_id}`}><img src={img}></img></Link>
            </div>
        </div>
    );
};

export default AllJobsCart;