import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic10 from "../../assets/picture/pic10.png";
import pic11 from "../../assets/picture/pic11.png";
import pic12 from "../../assets/picture/pic12.png";
import pic13 from "../../assets/picture/pic13.png";

import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";
import { FormattedMessage } from "react-intl";

const DetailLazer = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section"><FormattedMessage id="detailLazer.titleDetail" /></div>
            <div className="detail-content-container">
                <div className="text-detail">
                    <FormattedMessage id="detailLazer.content1" />
                </div>
                <div className="text-detail">
                    <FormattedMessage id="detailLazer.content2" />
                </div>
                <div className="text-detail">
                    <FormattedMessage id="detailLazer.content3" />
                </div>
                <img src={pic10} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailLazer.content4" />
                </div>
                <img src={pic11} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailLazer.content5" />
                </div>
                <img src={pic12} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailLazer.content6" />
                </div>
                <img src={pic13} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-title">
                    <FormattedMessage id="detailLazer.content7" />
                </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default DetailLazer;