import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { RiMessage2Line } from 'react-icons/ri';

const HomeFooter = () => {
    return (
        <div className="home-footer-container">
            <div className='footer-content'>
                <div className='logo-footer'></div>
                <div className="content-left-footer">
                    <div className="child-content-left"><AiOutlineHome />  Địa chỉ: 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội</div>
                    <div className="child-content-left"><BsTelephone />  Hotline: +84 963 84 0005</div>
                    <div className="child-content-left"><AiOutlineMail />  Email: info@htk.asia</div>
                    <div className="child-content-left"><TbWorld />  Website: https://htk-asia.com</div>
                </div>
                <div className="content-right-footer">
                    <div className="child-content-title">Chăm sóc khách hàng</div>
                    {/* <div className="child-content-right"><CgNotes />  Terms of Use</div> */}
                    {/* <div className="child-content-right"><AiOutlineLock />  Privacy Policy</div> */}
                    <div className="child-content-right"><RiMessage2Line />  Contact Us</div>
                    <div className="child-content-right"><BsWhatsapp /> +84 963840005</div>
                    <div className="child-content-right"><BsTelephone /> :+84 963840005 (Việt Nam)</div>
                    <div className="child-content-right"><BsTelephone /> : 7 9778003299 (Nga)</div>
                </div>
            </div>
            <div className='copy-right'>HTK ASIA &copy; 2020 All Rights Reserved </div>
        </div>
    )
}

export default HomeFooter;