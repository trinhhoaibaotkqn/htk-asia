import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                                <div className="child-banner banner-first">
                                    <div className="title-banner">Công nghệ web 3d</div>
                                    <div className="content-banner">Công nghệ tương lai</div>
                                </div>
                            </div>
                            <div>
                                <div className="child-banner banner-second"></div>
                            </div>
                            <div>
                                <div className="child-banner banner-third"></div>
                            </div>
                            <div>
                                <div className="child-banner banner-fourth"></div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;