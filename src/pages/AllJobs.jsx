import { useLoaderData } from "react-router-dom";
import AllJobsCart from "../components/AllJobsCart";


const AllJobs = () => {

    const jobs = useLoaderData()

    return (
        <div className="min-h-[calc(100vh-390px)] mb-14">
            {
                jobs.map( job => <AllJobsCart job={job} key={job._id}></AllJobsCart> )
            }
        </div>
    );
};

export default AllJobs;