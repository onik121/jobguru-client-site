import CategoryTab from "../components/CategoryTab";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <Slider></Slider>
            <CategoryTab></CategoryTab>
        </div>
    );
};

export default Home;