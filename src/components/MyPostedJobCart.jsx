
import update from '../assets/update.png'
import dele from '../assets/delete.png'

import { Link } from 'react-router-dom';

const MyPostedJobCart = ({ job, handleDelete }) => {

    const { job_title, category, max_salary, min_salary, deadline, _id, posting_date } = job;

   

    return (
        <div className="alljob-cart-box my-7 p-4 flex gap-2">
            <div className="w-[20%] bg-red-">
                <h2 className="text-xl font-medium text-black">{job_title}</h2>
            </div>
            <div className="w-[10%] bg-red-">
                <p className="font-medium">{category}</p>
            </div>
            <div className="w-[20%] bg-gray- flex justify-center">
                <div><p className="font-medium">Posted: {new Date(posting_date).toLocaleDateString()}</p></div>
            </div>
            <div className="w-[20%] bg-red- flex justify-center">
                <div><p className="font-medium">Deadline: {new Date(deadline).toLocaleDateString()}</p></div>
            </div>
            <div className="w-[20%] bg-green- flex justify-center">
                <div className="bg-red- min-w-[140px]"><p className="font-medium">Salary: ${max_salary} - {min_salary}</p></div>
            </div>
            <div className="w-[5%] bg-red- flex justify-center" title="Update Your Job Post">
                <div><Link to={`/update/${_id}`}><img src={update}></img></Link></div>
            </div>
            <div className="w-[5%] bg-red- flex justify-center">
                <button className="read-more" onClick={() => handleDelete(_id)}><img src={dele}></img></button>
            </div>
        </div>
    );
};

export default MyPostedJobCart;