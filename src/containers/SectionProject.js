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
                        <div className="title-child">Web 3d hiệu giày</div>
                        <div className="child-content child-background-first">
                        </div>
                    </div>
                    <div>
                        <div className="title-child">Drone QUÉT airLASER</div>
                        <div className="child-content child-background-second">
                        </div>
                    </div>
                    <div>
                        <div className="title-child">Cổng thanh toán online</div>
                        <div className="child-content child-background-third">
                        </div>
                    </div>
                    <div>
                        <div className="title-child">quản lí nhân sự</div>
                        <div className="child-content child-background-fourth">
                        </div>
                    </div><div>
                        <div className="title-child">web home 3d</div>
                        <div className="child-content child-background-fiveth">
                        </div>
                    </div><div>
                        <div className="title-child">quản lí doanh nghiệp</div>
                        <div className="child-content child-background-sixth">
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SectionProject;