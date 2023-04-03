import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

const HomeHeader = () => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="home-header-container">
            <div className="home-header-content">
                <div style={{ height: '90px' }}></div>
                <div className="header-nav-container">
                    <div className="content-logo"></div>
                    <div className="content-right">
                        <a href="/#info" className="child-content-right">Về HTK Aisa</a>
                        <a href="/#business" className="child-content-right">Lĩnh vực kinh doanh</a>
                        <a href="/#project" className="child-content-right">Dự án tiêu biểu</a>
                        <a href="/#discount" className="child-content-right">Ưu đãi cho bạn</a>
                        <a href="/#achievement" className="child-content-right">Thành tựu</a>
                    </div>
                </div>
                <div id="info" className="home-banner">
                    <div className="banner-content">
                        <Slider {...settings}>
                            <div>
                                {/* class="animate__animated  */}
                                <div className="child-banner banner-first">
                                    <div className="animate__bounce title-banner">Công nghệ 3d</div>
                                    <div className="content-banner">Công nghệ tương lai</div>
                                </div>
                            </div>
                            <div>
                                <div className="child-banner banner-second">
                                    <div className="title-banner">Website đa nền tảng</div>
                                    <div className="content-banner">Tiện lợi, nhanh chóng</div>
                                </div>
                            </div>
                            <div>
                                <div className="child-banner banner-third">
                                    <div className="title-banner">Hệ thống UAV</div>
                                </div>
                            </div>
                            <div>
                                <div className="child-banner banner-fourth">
                                    <div className="title-banner">Hệ thống quản lý</div>
                                    <div className="content-banner">Hiện đại, hiệu quả, chính xác</div>
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