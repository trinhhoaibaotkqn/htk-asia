import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

const SectionBusiness = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const navigate = useNavigate();

    return (
        <div id="business" className="section-business-container">
            <div className="header-section-business">
                <div className="title-section"><FormattedMessage id="business.titleSection" /></div>
                <div className="subs-title"><FormattedMessage id="business.subTitleSection" /></div>
            </div>
            <div className="section-content">
                <Slider {...settings}>
                    <div>
                        <div className="child-content child-background-first" onClick={() => navigate('/business-management')}>
                            <div className="title-child"><FormattedMessage id="business.title1" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-second" onClick={() => navigate('/web-3d')}>
                            <div className="title-child"><FormattedMessage id="business.title2" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-third" onClick={() => navigate('/technology-3d')}>
                            <div className="title-child"><FormattedMessage id="business.title3" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-fourth" onClick={() => navigate('/uav')}>
                            <div className="title-child"><FormattedMessage id="business.title4" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-fiveth" onClick={() => navigate('/laser')}>
                            <div className="title-child"><FormattedMessage id="business.title5" /></div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SectionBusiness;