import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionProject = () => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
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
        <div id="project" className="section-project-container">
            <div className="header-section-project">
                <div className="title-section">
                    CÁC DỰ ÁN<br />TIÊU BIỂU
                </div>
            </div>
            <div className="section-content">
                <Slider {...settings}>
                    <div>
                        <div className="child-content child-background-first">
                            {/* <div className="title-child">Thiết kế phần mềm</div> */}
                        </div>
                    </div>
                    <div>
                        <div className="child-content child-background-second">
                            <div className="title-child">Drone QUÉT LASER KHÔNG KHÍ</div>
                        </div>
                    </div><div>
                        <div className="child-content">
                            <div className="title-child">Quản lí doanh nghiệp</div>
                        </div>
                    </div><div>
                        <div className="child-content">
                            <div className="title-child">sdfsdfsdf</div>
                        </div>
                    </div><div>
                        <div className="child-content">
                            <div className="title-child">sdfsdfsd</div>
                        </div>
                    </div><div>
                        <div className="child-content">
                            <div className="title-child">sdfsdfsd</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SectionProject;