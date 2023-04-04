import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";

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
                    <FormattedMessage id="project.titleSection" />
                </div>
            </div>
            <div className="section-content">
                <Slider {...settings}>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title1" /></div>
                        <div className="child-content child-background-first">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title2" /></div>
                        <div className="child-content child-background-second">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title3" /></div>
                        <div className="child-content child-background-third">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title4" /></div>
                        <div className="child-content child-background-fourth">
                        </div>
                    </div><div>
                        <div className="title-child"><FormattedMessage id="project.title5" /></div>
                        <div className="child-content child-background-fiveth">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title6" /></div>
                        <div className="child-content child-background-sixth">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title7" /></div>
                        <div className="child-content child-background-seventh">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title8" /></div>
                        <div className="child-content child-background-eighth">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title9" /></div>
                        <div className="child-content child-background-nineth">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title10" /></div>
                        <div className="child-content child-background-10">
                        </div>
                    </div>
                    <div>
                        <div className="title-child"><FormattedMessage id="project.title11" /></div>
                        <div className="child-content child-background-11">
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SectionProject;