import { useLoaderData } from "react-router-dom";


const Details = () => {

    const job = useLoaderData()
    const { job_banner } = job

    return (
        <div className="max-w-[1440px] px-5 mx-auto">
            <div className="details-container">
                <div>
                    <img src={job_banner}></img>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Details;