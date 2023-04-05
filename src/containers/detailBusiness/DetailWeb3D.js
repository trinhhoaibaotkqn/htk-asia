import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic2 from "../../assets/picture/pic2.png";
import pic3 from "../../assets/picture/pic3.png";
import pic4 from "../../assets/picture/pic4.png";
import pic5 from "../../assets/picture/pic5.png";
import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";
import { FormattedMessage } from "react-intl";

const DetailWeb3D = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section"><FormattedMessage id="detailWeb3d.titleDetail" /></div>
            <div className="detail-content-container">
                <div className="text-detail">
                    <FormattedMessage id="detailWeb3d.content1" />
                </div>
                <div className="text-detail">
                    <FormattedMessage id="detailWeb3d.content2" />
                </div>
                <img src={pic2} alt="pic2" />
                <div className="text-detail">
                    <FormattedMessage id="detailWeb3d.content3" />
                    <li><FormattedMessage id="detailWeb3d.content4" /></li>
                    <li><FormattedMessage id="detailWeb3d.content5" /></li>
                    <li><FormattedMessage id="detailWeb3d.content6" /></li>
                    <li><FormattedMessage id="detailWeb3d.content7" /></li>
                    <li><FormattedMessage id="detailWeb3d.content8" /></li>
                    <li><FormattedMessage id="detailWeb3d.content9" /></li>
                    <li><FormattedMessage id="detailWeb3d.content10" /></li>
                    <li>….</li>
                </div>
                <div className="text-title">
                    <FormattedMessage id="detailWeb3d.content11" />
                </div>
                <img src={pic3} alt="" />
                <div className="text-detail">
                    <FormattedMessage id="detailWeb3d.content12" />
                </div>
                <div className="text-title">
                    <FormattedMessage id="detailWeb3d.content13" />
                </div>
                <img src={pic4} alt="" />
                <div className="text-detail">
                    <FormattedMessage id="detailWeb3d.content14" />
                </div>
                <div className="text-title">
                    <FormattedMessage id="detailWeb3d.content15" />
                </div>
                <img src={pic5} alt="" />
                <div className="text-detail">
                    <FormattedMessage id="detailWeb3d.content16" />
                </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default DetailWeb3D;