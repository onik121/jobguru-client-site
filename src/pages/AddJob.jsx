import img from '../assets/add-job.jpg'

const AddJob = () => {
    return (
        <div>
            <div className='add-job-cantainer min-h-[calc(100vh-325px)] mb-14 flex items-center'>
                <div>
                    <img src={img}></img>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default AddJob;