import logo1 from '../assets/fitbit-white.svg'
import logo2 from '../assets/forbes-white.svg'
import logo3 from '../assets/layar-white.svg'
import logo4 from '../assets/mailchimp-white.svg'
import logo5 from '../assets/vidados-white.svg'

const WhoUsedJobguru = () => {
    return (
        <div className='bg-[#7ad2a2] rounded-md min-h-[170px] px-10 py-10 flex items-center justify-center mt-16 mb-16'>
            <div className='w-full'>
                <h1 className='text-2xl font- text-white text-center mb-8'>The fastedt-growing companies use JobGuru</h1>
                <div className='logo-box'>
                    <div>
                        <img src={logo1} alt="" />
                    </div>
                    <div>
                        <img src={logo3} alt="" />
                    </div>
                    <div>
                        <img src={logo4} alt="" />
                    </div>
                    <div>
                        <img src={logo5} alt="" />
                    </div>
                    <div>
                        <img src={logo2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoUsedJobguru;