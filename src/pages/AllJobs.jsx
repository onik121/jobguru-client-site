import { useLoaderData } from "react-router-dom";
import AllJobsCart from "../components/AllJobsCart";


const AllJobs = () => {

    const jobs = useLoaderData()

    return (
        <div className="min-h-[calc(100vh-390px)] mb-10 flex items-center">
            <div className="w-full">
                {
                    jobs.map(job => <AllJobsCart job={job} key={job._id}></AllJobsCart>)
                }
            </div>
        </div>
    );
};

export default AllJobs;