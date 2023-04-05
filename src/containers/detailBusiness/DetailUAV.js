import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic14 from "../../assets/picture/pic14.jpg";
import pic15 from "../../assets/picture/pic15.png";
import pic16 from "../../assets/picture/pic16.png";
import pic17 from "../../assets/picture/pic17.png";
import pic18 from "../../assets/picture/pic18.png";
import pic19 from "../../assets/picture/pic19.png";
import pic20 from "../../assets/picture/pic20.png";
import pic21 from "../../assets/picture/pic21.png";
import pic22 from "../../assets/picture/pic22.png";
import pic23 from "../../assets/picture/pic23.png";

import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";
import { FormattedMessage } from "react-intl";

const DetailUAV = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section"><FormattedMessage id="detailUAV.titleDetail" /></div>
            <div className="detail-content-container">
                <div className="text-detail">
                    <FormattedMessage id="detailUAV.content1" />
                </div>
                <div className="text-detail">
                    <FormattedMessage id="detailUAV.content2" />
                </div>
                <img src={pic14} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-detail">
                    <FormattedMessage id="detailUAV.content3" />
                </div>
                <div className="text-detail">
                    <li><FormattedMessage id="detailUAV.content4" /></li>
                    <li><FormattedMessage id="detailUAV.content5" /></li>
                    <li><FormattedMessage id="detailUAV.content6" /></li>
                    <li><FormattedMessage id="detailUAV.content7" /></li>
                </div>
                <div className="text-detail">
                    <FormattedMessage id="detailUAV.content8" />
                    <li><FormattedMessage id="detailUAV.content9" /></li>
                    <div>
                        <FormattedMessage id="detailUAV.content10" />
                    </div>
                    <li><FormattedMessage id="detailUAV.content11" /></li>
                    <div><FormattedMessage id="detailUAV.content12" /> </div>
                    <li><FormattedMessage id="detailUAV.content13" /></li>
                    <div><FormattedMessage id="detailUAV.content14" /></div>
                    <li><FormattedMessage id="detailUAV.content15" /></li>
                    <div><FormattedMessage id="detailUAV.content16" /></div>
                    <li><FormattedMessage id="detailUAV.content17" /></li>
                    <div><FormattedMessage id="detailUAV.content18" /></div>
                    <li><FormattedMessage id="detailUAV.content19" /></li>
                    <div><FormattedMessage id="detailUAV.content20" /></div>
                </div>
                <div className="text-detail"><FormattedMessage id="detailUAV.content21" /></div>
                <img src={pic15} alt="pic2" style={{ maxWidth: '500px' }} />
                <li><FormattedMessage id="detailUAV.content22" /></li>
                <li><FormattedMessage id="detailUAV.content23" /></li>
                <li><FormattedMessage id="detailUAV.content24" /></li>
                <li><FormattedMessage id="detailUAV.content25" /> </li>
                <li><FormattedMessage id="detailUAV.content26" /> </li>
                <li><FormattedMessage id="detailUAV.content27" /></li>
                <img src={pic16} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title"><FormattedMessage id="detailUAV.content28" /></div>
                <div className="text-detail"><FormattedMessage id="detailUAV.content29" /></div>
                <img src={pic17} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title"><FormattedMessage id="detailUAV.content30" /></div>
                <div className="text-detail"><FormattedMessage id="detailUAV.content31" /></div>
                <img src={pic18} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title"><FormattedMessage id="detailUAV.content32" /></div>
                <div className="text-detail"><FormattedMessage id="detailUAV.content33" /></div>
                <img src={pic19} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title"><FormattedMessage id="detailUAV.content34" /></div>
                <div className="text-detail"><FormattedMessage id="detailUAV.content35" /></div>
                <img src={pic20} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title"><FormattedMessage id="detailUAV.content36" /></div>
                <div className="text-detail"><FormattedMessage id="detailUAV.content37" /></div>
                <img src={pic23} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title"><FormattedMessage id="detailUAV.content38" /></div>
                <div className="text-detail"><FormattedMessage id="detailUAV.content39" /></div>
                <img src={pic21} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title"><FormattedMessage id="detailUAV.content40" /></div>
                <div className="text-detail"><FormattedMessage id="detailUAV.content41" /></div>
                <img src={pic22} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title"><FormattedMessage id="detailUAV.content42" /></div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}
export default DetailUAV;