import { Link } from "react-router-dom";


const JobCart = ({ job }) => {

    const { _id, description, job_title, job_category, applicant_number, salary_range } = job;

    return (
        <Link to={`/details/${_id}`}>
            <div className="job-cart-box p-4">
                <div className="flex justify-between">
                    <p>Posted: 10/1/2024</p>
                    <button className="capitalize">{job_category}</button>
                </div>
                <h2 className="text-2xl mt-1 mb-2 text-black font-medium">{job_title}</h2>
                <p className="text-lg mb-2">{description.slice(0, 60)}...</p>
                <p className="font-medium">Salary: <span>{salary_range}</span></p>
                <p className="font-medium mt-2">Proposl: {applicant_number}</p>
            </div>
        </Link>
    );
};

export default JobCart; <h1 className="text-3xl">job cart</h1>