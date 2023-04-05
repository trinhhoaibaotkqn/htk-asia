import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic1 from "../../assets/picture/pic1.jpg";
import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";
import { FormattedMessage } from "react-intl";

const DetailTech3D = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section"><FormattedMessage id="detailTech3d.titleDetail" /></div>
            <div className="detail-content-container">
                <div className="text-detail">
                    <FormattedMessage id="detailTech3d.content1" />
                </div>
                <img src={pic1} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailTech3d.content2" />
                </div>
                <div className="text-title">
                    <FormattedMessage id="detailTech3d.content3" />
                </div>
                <li><FormattedMessage id="detailTech3d.content4" /></li>
                <li><FormattedMessage id="detailTech3d.content5" /></li>
                <li><FormattedMessage id="detailTech3d.content6" /></li>
                <div className="text-title">
                    <FormattedMessage id="detailTech3d.content7" />
                </div>
                <li><FormattedMessage id="detailTech3d.content8" /></li>
                <li><FormattedMessage id="detailTech3d.content9" /></li>
                <li><FormattedMessage id="detailTech3d.content10" /></li>
                <li><FormattedMessage id="detailTech3d.content11" /></li>
                <li><FormattedMessage id="detailTech3d.content12" /></li>
                <div className="text-title">
                    <FormattedMessage id="detailTech3d.content13" />
                </div>
                <li><FormattedMessage id="detailTech3d.content14" /></li>
                <li><FormattedMessage id="detailTech3d.content15" /></li>
                <div className="text-title">
                    <FormattedMessage id="detailTech3d.content16" />
                </div>
                <li><FormattedMessage id="detailTech3d.content17" /></li>
                <li><FormattedMessage id="detailTech3d.content18" /></li>
                <div className="text-title">
                    <FormattedMessage id="detailTech3d.content19" />
                </div>
                <div className="text-detail">
                    <FormattedMessage id="detailTech3d.content20" />
                </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default DetailTech3D;