import { Link } from "react-router-dom";


const AllJobsCart = ({ job }) => {

    const { job_title, posting_date, salary_range, deadline, _id} = job;

    return (
        <div className="alljob-cart-box my-7 p-4 flex gap-2">
            <div className="w-[30%]">
                <h2 className="text-xl font-medium text-black">{job_title}</h2>
            </div>
            <div className="w-[20%] text-center">
                <p className="font-medium">Posted: {posting_date}</p>
            </div>
            <div className="w-[20%] text-center">
                <p className="font-medium">Deadline: {deadline}</p>
            </div>
            <div className="w-[20%]">
                <p className="font-medium">Salary: {salary_range}</p>
            </div>
            <div className="w-[10%] justify-end flex">
                <Link to={`/details/${_id}`}><button className="apply">Details</button></Link>
            </div>
        </div>
    );
};

export default AllJobsCart;