import BestJobPlatform from "../components/BestJobPlatform";
import CategoryTab from "../components/CategoryTab";
import Slider from "../components/Slider";
import WhoUsedJobguru from "../components/WhoUsedJobguru";


const Home = () => {


    return (
        <div>
            <div className="mt-3"><Slider></Slider></div>
            <WhoUsedJobguru></WhoUsedJobguru>
            <div>
                <div className="text-center max-w-[750px] mx-auto mb-10">
                    <h1 className="text-4xl font-bold text-[#3f3f3f] mb-4">Featured Jobs</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde totam fugiat eum excepturi voluptatum obcaecati laborum voluptates quia expedita quasi</p>
                </div>
                <CategoryTab></CategoryTab>
            </div>
            <BestJobPlatform></BestJobPlatform>
        </div>
    );
};

export default Home;