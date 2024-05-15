

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
            <SwiperSlide>
                <div className='slider-4 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Your Success Story Begins Here, Explore Now!</h1>
                            <p className='text-lg mt-4'>Embark on a journey to professional success with our comprehensive job-seeking platform, tailored to match your career aspirations seamlessly.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-2 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[800px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Discover Tailored Job Opportunities on Our Platform Today</h1>
                            <p className='text-lg mt-4'>Empower your career journey with our website, offering tailored opportunities designed to help you navigate your path to success.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-3 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Navigate Your Path to Success with Our Portal</h1>
                            <p className='text-lg mt-4'>Discover a wide array of job opportunities on our platform, designed to cater to your specific career goals and preferences.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;