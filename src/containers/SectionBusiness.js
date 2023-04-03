import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";

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

    return (
        <div id="business" className="section-business-container">
            <div className="header-section-business">
                <div className="title-section"><FormattedMessage id="business.titleSection" /></div>
                <div className="subs-title"><FormattedMessage id="business.subTitleSection" /></div>
            </div>
            <div className="section-content">
                <Slider {...settings}>
                    <div>
                        <div className="child-content child-background-first">
                            <div className="title-child">Hệ thống quản lí doanh nghiệp toàn diện</div>
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-second">
                            <div className="title-child">Phát triển trang web</div>
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-third">
                            <div className="title-child">Công nghệ 3D</div>
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-fourth">
                            <div className="title-child">Hệ thống điều khiển UAV</div>
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-fiveth">
                            <div className="title-child">Truyền hình và công nghệ số</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SectionBusiness;