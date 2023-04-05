import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic6 from "../../assets/picture/pic6.png";
import pic7 from "../../assets/picture/pic7.png";
import pic8 from "../../assets/picture/pic8.png";
import pic9 from "../../assets/picture/pic9.png";
import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";
import { FormattedMessage } from "react-intl";

const DetailManager = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section"><FormattedMessage id="detailManager.titleDetail" /></div>
            <div className="detail-content-container">
                <div className="text-detail">
                    <FormattedMessage id="detailManager.content1" />
                </div>
                <img src={pic6} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailManager.content2" />
                </div>
                <div className="text-title">
                    <FormattedMessage id="detailManager.content3" />
                </div>
                <div className="text-detail">
                    <FormattedMessage id="detailManager.content4" />
                </div>
                <div className="text-title">
                    <FormattedMessage id="detailManager.content5" />
                </div>
                <img src={pic7} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailManager.content6" />
                </div>
                <div className="text-title">
                    <FormattedMessage id="detailManager.content7" />
                </div>
                <img src={pic8} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailManager.content8" />
                </div>
                <div className="text-title">
                    <FormattedMessage id="detailManager.content9" />
                </div>
                <img src={pic9} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailManager.content10" />
                </div>
                <div className="text-detail">
                    <FormattedMessage id="detailManager.content11" />

                </div>
                <div className="text-title">
                    <FormattedMessage id="detailManager.content12" />
                </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default DetailManager;