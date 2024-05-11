import CategoryTab from "../components/CategoryTab";
import Slider from "../components/Slider";


const Home = () => {


    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <Slider></Slider>
            <div className="mt-24">
                <div className="text-center max-w-[750px] mx-auto mb-10">
                    <h1 className="text-3xl font-bold text-[#3f3f3f] mb-4">Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde totam fugiat eum excepturi voluptatum obcaecati laborum voluptates quia expedita quasi</p>
                </div>
                <CategoryTab></CategoryTab>
            </div>
        </div>
    );
};

export default Home;