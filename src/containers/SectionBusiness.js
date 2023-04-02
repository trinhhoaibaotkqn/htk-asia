import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionBusiness = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div id="business" className="section-business-container">
            <div className="header-section-business">
                <div className="title-section">LĨNH VỰC KINH DOANH</div>
                <div className="subs-title">Cạnh tranh trên cơ sở tạo ra các giá trị khác biệt</div>
            </div>
            <div className="section-content">
                <Slider {...settings}>
                    <div>
                        <div className="child-content child-background-first">
                            <div className="opacity"></div>
                            <div className="title-child">Thiết kế hệ thống quản lí doanh nghiệp</div>
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
                            <div className="title-child">Lắp đặt truyền hình</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SectionBusiness;