import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CHANGE_LANGUAGE } from "../store/commonSlice";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import flagEn from "../assets/flag/united-kingdom.png";
import flagVi from "../assets/flag/vietnam.png";
import flagRu from "../assets/flag/russia.png";

const HomeHeader = () => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const dispatch = useDispatch();
    const language = useSelector(state => state.common.language);

    return (
        <div className="home-header-container">
            <div className="home-header-content">
                {/* <div style={{ height: '90px' }}></div> */}
                <div className="header-nav-container">
                    <div className="content-logo"></div>
                    <div className="content-right">
                        <a href="/#info" className="child-content-right"><FormattedMessage id="homeheader.aboutHtk" /></a>
                        <a href="/#business" className="child-content-right"><FormattedMessage id="homeheader.business" /></a>
                        <a href="/#project" className="child-content-right"><FormattedMessage id="homeheader.project" /></a>
                        <a href="/#service" className="child-content-right"><FormattedMessage id="homeheader.service" /></a>
                        <a href="/#associated" className="child-content-right"><FormattedMessage id="homeheader.associated" /></a>
                        <div className="language">
                            <img className="show-flag" src={language === "en" ? flagEn : (language === "ru" ? flagRu : flagVi)} alt="en" />
                            <div class="dropdown-content">
                                <img src={flagEn} alt="en" onClick={() => dispatch(CHANGE_LANGUAGE("en"))} />
                                <img src={flagVi} alt="vi" onClick={() => dispatch(CHANGE_LANGUAGE("vi"))} />
                                <img src={flagRu} alt="ru" onClick={() => dispatch(CHANGE_LANGUAGE("ru"))} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="info" className="home-banner">
                    <div className="banner-content">
                        <Slider {...settings}>

                            <div className="child-banner banner-second">
                                <div className="title-banner"><FormattedMessage id="homebanner.title2" /></div>
                                <div className="content-banner"><FormattedMessage id="homebanner.subtitle2" /></div>
                            </div>
                            <div className="child-banner banner-first">
                                <div className="title-banner"><FormattedMessage id="homebanner.title1" /></div>
                                <div className="content-banner"><FormattedMessage id="homebanner.subtitle1" /></div>
                            </div>
                            <div>
                                <div className="child-banner banner-third">
                                    <div className="title-banner"><FormattedMessage id="homebanner.title3" /></div>
                                </div>
                            </div>
                            <div>
                                <div className="child-banner banner-fourth">
                                    <div className="title-banner"><FormattedMessage id="homebanner.title4" /></div>
                                    <div className="content-banner"><FormattedMessage id="homebanner.subtitle4" /></div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;