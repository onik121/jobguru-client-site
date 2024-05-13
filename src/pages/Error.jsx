import { Link } from 'react-router-dom';
import img from '../assets/404.png'

const Error = () => {
    return (
        <div className='flex items-center justify-center h-screen text-center'>
            <div>
                <img className='max-w-[180px] mx-auto' src={img}></img>
                <h1 className='uppercase text-4xl font-medium text-[#3f3f3f] mb-8 mt-3'>page not found</h1>
                <Link to={'/'} className='button'>Go Back</Link>
            </div>
        </div>
    );
};

export default Error;