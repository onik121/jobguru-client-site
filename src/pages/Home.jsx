import { Helmet } from "react-helmet";
import BestJobPlatform from "../components/BestJobPlatform";
import CategoryTab from "../components/CategoryTab";
import Slider from "../components/Slider";
import WhoUsedJobguru from "../components/WhoUsedJobguru";


const Home = () => {


    return (
        <div>
            <Helmet>
                <title>JobGuru</title>
            </Helmet>
            <div className="mt-3"><Slider></Slider></div>
            <WhoUsedJobguru></WhoUsedJobguru>
            <div>
                <div className="text-center max-w-[700px] mx-auto mb-10">
                    <h1 className="text-4xl font-bold text-[#3f3f3f] mb-4">Featured Jobs</h1>
                    <p>Discover top-tier employment opportunities handpicked for you, tailored to match your career goals seamlessly. Your dream job awaits!</p>
                </div>
                <CategoryTab></CategoryTab>
            </div>
            <BestJobPlatform></BestJobPlatform>
        </div>
    );
};

export default Home;