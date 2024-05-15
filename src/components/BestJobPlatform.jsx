import img1 from '../assets/pay-2.png'
import check from '../assets/check.png'

const BestJobPlatform = () => {
    return (
        <div className='best-platfrom-container mt-16 mb-16'>
            <div className='flex items-center'>
                <div className='space-y-8'>
                    <h1 className='text-4xl font-bold text-[#3f3f3f] max-w-[600px] -mb-2'>Best Job Search platform Experience for you</h1>
                    <p>Embark on a journey of unparalleled job search satisfaction with our platform, offering tailored solutions to match your career goals, preferences, and aspirations seamlessly. Discover your perfect job today!</p>
                    <div className='flex gap-14'>
                        <div className='space-y-5'>
                            <div className='flex items-center check-box gap-3'><img src={check}></img><p className='font-medium'>Corporate Business jobs</p></div>
                            <div className='flex items-center check-box gap-3'><img src={check}></img><p className='font-medium'>Corporate Business jobs</p></div>
                            <div className='flex items-center check-box gap-3'><img src={check}></img><p className='font-medium'>Corporate Business jobs</p></div>
                            <div className='flex items-center check-box gap-3'><img src={check}></img><p className='font-medium'>Corporate Business jobs</p></div>
                        </div>
                        <div className='space-y-5'>
                            <div className='flex items-center check-box gap-3'><img src={check}></img><p className='font-medium'>Corporate Business jobs</p></div>
                            <div className='flex items-center check-box gap-3'><img src={check}></img><p className='font-medium'>Corporate Business jobs</p></div>
                            <div className='flex items-center check-box gap-3'><img src={check}></img><p className='font-medium'>Corporate Business jobs</p></div>
                            <div className='flex items-center check-box gap-3'><img src={check}></img><p className='font-medium'>Corporate Business jobs</p></div>
                        </div>
                    </div>
                    <button className='button'>Explore More Jobs</button>
                </div>
            </div>
            <div className='flex items-center justify-end best-platfrom-img'>
                <img className='w-[80%]' src={img1}></img>
            </div>
        </div>
    );
};

export default BestJobPlatform;