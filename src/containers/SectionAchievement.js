import { BsPersonPlus, BsBoxes } from 'react-icons/bs';
import { SiInternetarchive, SiApacheopenoffice } from 'react-icons/si';
import { AiOutlineFileDone } from 'react-icons/ai';
import { Ri24HoursFill } from 'react-icons/ri';
import { GiShakingHands } from 'react-icons/gi';
import { TfiMedall } from 'react-icons/tfi';

const SectionAchievement = () => {
    return (
        <div id="achievement" className="achievement-container">
            <div className="achievement-content">
                <div className="child-achievement">
                    <span className="icon-child"><BsPersonPlus /></span>
                    <div className="number-child">500+</div>
                    <div className="title-child">Khách hàng<br />trung thành</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< BsBoxes /></span>
                    <div className="number-child">27+</div>
                    <div className="title-child">Dự án đang thực hiện</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child"><AiOutlineFileDone /></span>
                    <div className="number-child">300+</div>
                    <div className="title-child">Dự án hoàn thành</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child"><SiInternetarchive /></span>
                    <div className="number-child">30+</div>
                    <div className="title-child">Đối tác quốc tế</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< Ri24HoursFill /></span>
                    <div className="number-child">24/7</div>
                    <div className="title-child">Thời gian túc trực</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< TfiMedall /></span>
                    <div className="number-child">Tin cậy</div>
                    <div className="title-child">Khách hàng tin tưởng</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< SiApacheopenoffice /></span>
                    <div className="number-child">3+</div>
                    <div className="title-child">Khu vực kinh doanh</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< GiShakingHands /></span>
                    <div className="number-child">8+</div>
                    <div className="title-child">Công ty liên kết</div>
                </div>
            </div>
        </div>
    )
}

export default SectionAchievement;