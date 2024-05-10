

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
                            <h1 className='text-5xl title font-medium'>Experience the Wonders of Exploration</h1>
                            <p className='text-lg mt-5'>Dive into our curated collection, where hidden gems await exploration. Seamlessly plan your journey and create unforgettable memories.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-2 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Unleash Your Wanderlust Spirit Here</h1>
                            <p className='text-lg mt-5'>Embark on a voyage of discovery through diverse destinations. Craft your personalized itinerary and ignite the spark of adventure.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-3 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Embark on a Journey of Discovery</h1>
                            <p className='text-lg mt-5'>Uncover the world&apos;s best-kept travel secrets, effortlessly streamline your bookings, and cherish every moment of your unforgettable journey.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;