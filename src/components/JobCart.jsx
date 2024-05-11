

const JobCart = ({ job }) => {

    const {category} = job;

    return (
        <div>
            <div className="job-cart-box p-4">
                <div className="flex justify-between">
                    <p>Posted: 10/1/2024</p>
                    <button className="capitalize">{category}</button>
                </div>
                <h2 className="text-2xl mt-2 mb-3 text-black font-medium">Build a Dyanmic website usign react</h2>
                <p className="text-lg mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, non</p>
                <p className="font-medium">Salary: <span>100 - 150</span></p>
                <p className="font-medium mt-2">Proposl: 20</p>
            </div>
        </div>
    );
};

export default JobCart; <h1 className="text-3xl">job cart</h1>