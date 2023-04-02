import HomeHeader from "./HomeHeader";
import "./Home.scss";
import SectionBusiness from "./SectionBusiness";
import SectionProject from "./SectionProject";
import HomeFooter from "./HomeFooter";
import SectionPrice from "./SectionPrice";

const HomePage = () => {
    return (
        <div className="homepage">
            <HomeHeader />
            <SectionBusiness />
            <SectionProject />
            <SectionPrice />
            <HomeFooter />
        </div>
    )
}

export default HomePage;