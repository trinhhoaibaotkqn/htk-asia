import HomeHeader from "./HomeHeader";
import "./Home.scss";
import "./HomeResponsiveLaptop.scss";
import "./HomeResponsiveIpad.scss";
import "./HomeResponsivePhone.scss";
import SectionBusiness from "./SectionBusiness";
import SectionProject from "./SectionProject";
import HomeFooter from "./HomeFooter";
import SectionAchievement from "./SectionAchievement";
import FormContact from "./FormContact";
import SectionService from "./SectionService";
import AssociatedCompany from "./AssociatedCompany";

const HomePage = () => {
    return (
        <div className="homepage">
            <HomeHeader />
            <SectionBusiness />
            <SectionProject />
            <SectionService />
            <SectionAchievement />
            <AssociatedCompany />
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default HomePage;