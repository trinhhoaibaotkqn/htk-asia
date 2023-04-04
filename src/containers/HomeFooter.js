import { AiOutlineHome, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { CgNotes } from 'react-icons/cg';
import { RiMessage2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

const HomeFooter = () => {
    const navigate = useNavigate();
    return (
        <div className="home-footer-container">
            <div className='footer-content'>
                <div className='logo-footer'></div>
                <div className="content-left-footer">
                    <div className="child-content-left"><AiOutlineHome />  <FormattedMessage id="footer.address1" /></div>
                    <div className="child-content-left"><AiOutlineHome />  <FormattedMessage id="footer.address21" /></div>
                    <div className="child-content-left addition"><FormattedMessage id="footer.address22" /></div>
                    <div className="child-content-left addition"><FormattedMessage id="footer.address23" /></div>
                    <div className="child-content-left"><AiOutlineMail />  Email: info@htk.asia</div>
                    <div className="child-content-left"><TbWorld />  Website: https://htk-asia.com</div>
                    <div className="child-content-left" onClick={() => navigate("/term-of-use")} style={{ cursor: 'pointer' }}><CgNotes />  <FormattedMessage id="footer.termUse" /></div>
                    <div className="child-content-left" onClick={() => navigate("/privacy-policy")} style={{ cursor: 'pointer' }}><AiOutlineLock />  <FormattedMessage id="footer.policy" /></div>
                </div>
                <div className="content-right-footer">
                    <div className="child-content-title"><FormattedMessage id="footer.title1" /></div>
                    <div className="child-content-right"><RiMessage2Line />  <FormattedMessage id="footer.title2" /></div>
                    <div className="child-content-right"><BsWhatsapp /> +84 963840005</div>
                    <div className="child-content-right"><BsTelephone /> :+84 963840005 (<FormattedMessage id="contact.nation1" />)</div>
                    <div className="child-content-right"><BsTelephone /> : +7 9778003299 (<FormattedMessage id="contact.nation2" />)</div>
                </div>
            </div>
            <div className='copy-right'>HTK ASIA &copy; 2020 All Rights Reserved </div>
        </div>
    )
}

export default HomeFooter;