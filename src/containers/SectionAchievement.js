import { BsPersonPlus, BsBoxes } from 'react-icons/bs';
import { SiInternetarchive, SiApacheopenoffice } from 'react-icons/si';
import { AiOutlineFileDone } from 'react-icons/ai';
import { Ri24HoursFill } from 'react-icons/ri';
import { GiShakingHands } from 'react-icons/gi';
import { TfiMedall } from 'react-icons/tfi';
import { FormattedMessage } from "react-intl";

const SectionAchievement = () => {
    return (
        <div id="achievement" className="achievement-container">
            <div className="achievement-content">
                <div className="child-achievement">
                    <span className="icon-child"><BsPersonPlus /></span>
                    <div className="number-child">500+</div>
                    <div className="title-child"><FormattedMessage id="achievement.title1" /></div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< BsBoxes /></span>
                    <div className="number-child">27+</div>
                    <div className="title-child"><FormattedMessage id="achievement.title2" /></div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child"><AiOutlineFileDone /></span>
                    <div className="number-child">300+</div>
                    <div className="title-child"><FormattedMessage id="achievement.title3" /></div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child"><SiInternetarchive /></span>
                    <div className="number-child">30+</div>
                    <div className="title-child"><FormattedMessage id="achievement.title4" /></div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< Ri24HoursFill /></span>
                    <div className="number-child">24/7</div>
                    <div className="title-child"><FormattedMessage id="achievement.title5" /></div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< TfiMedall /></span>
                    <div className="number-child">Tin cậy</div>
                    <div className="title-child"><FormattedMessage id="achievement.title6" /></div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< SiApacheopenoffice /></span>
                    <div className="number-child">3+</div>
                    <div className="title-child"><FormattedMessage id="achievement.title7" /></div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< GiShakingHands /></span>
                    <div className="number-child">5+</div>
                    <div className="title-child"><FormattedMessage id="achievement.title8" /></div>
                </div>
            </div>
        </div>
    )
}

export default SectionAchievement;