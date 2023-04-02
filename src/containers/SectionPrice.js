import { BsPersonPlus, BsBoxes } from 'react-icons/bs';
import { SiInternetarchive } from 'react-icons/si';
import { AiOutlineFileDone } from 'react-icons/ai';

const SectionPrice = () => {
    return (
        <div id="discount" className="list-price-container">
            <div className="title-section-price">Ưu đãi dành cho bạn</div>
            <div className="list-price-content">
                <div className="child-content-price">
                    <div className="title-child">basic<br /> 1 năm</div>
                    <a href="/#" alt="" className="contact-me">Liên hệ ngay</a>
                    <div className="content-child">
                        <li>Quản lý kho, hàng tồn bằng mã QR</li>
                        <li>Xuất hóa đơn, in hóa đơn bằng mã QR </li>
                        <li>Báo cáo doanh thu, lợi nhuận, tổn thất của doanh nghiệp theo Ngày/Tháng/Năm</li>
                        <li>Quản lý nhân viên bao gồm: bảng chấm công, bảng lương nhân viên</li>
                        <li>Không giới hạn người dùng</li>
                    </div>
                </div>
                <div className="child-content-price">
                    <div className="title-child">basic<br /> 1 năm</div>
                    <a href="/#" alt="" className="contact-me">Liên hệ ngay</a>
                    <div className="content-child">
                        <li>Quản lý kho, hàng tồn bằng mã QR</li>
                        <li>Xuất hóa đơn, in hóa đơn bằng mã QR </li>
                        <li>Báo cáo doanh thu, lợi nhuận, tổn thất của doanh nghiệp theo Ngày/Tháng/Năm</li>
                        <li>Quản lý nhân viên bao gồm: bảng chấm công, bảng lương nhân viên</li>
                        <li>Không giới hạn người dùng</li>
                        <li>Tặng miễn phí 2 tháng</li>
                    </div>
                </div>
                <div className="child-content-price child-price-discount">
                    <div className="title-child">basic<br /> 1 năm</div>
                    <a href="/#" alt="" className="contact-me">Liên hệ ngay</a>
                    <div className="content-child">
                        <li>Bao gồm các tính năng của gói BASIC</li>
                        <li>Thiết kế, thêm tính năng ở giao diện theo yêu cầu chủ doanh nghiệp</li>
                        <li>Đặt tên Phần mềm theo Brand của doanh nghiệp</li>
                        <li>Không giới hạn người dùng</li>
                    </div>
                </div>
                <div className="child-content-price child-price-discount">
                    <div className="title-child">basic<br /> 1 năm</div>
                    <a href="/#" alt="" className="contact-me">Liên hệ ngay</a>
                    <div className="content-child">
                        <li>Bao gồm các tính năng của gói BASIC</li>
                        <li>Thiết kế, thêm tính năng ở giao diện theo yêu cầu chủ doanh nghiệp</li>
                        <li>Đặt tên Phần mềm theo Brand của doanh nghiệp</li>
                        <li>Không giới hạn người dùng</li>
                        <li>Tặng miễn phí 2 tháng</li>
                    </div>
                </div>
            </div>
            <div id="achievement" className="achievement-content">
                <div className="child-achievement">
                    <span className="icon-child"><BsPersonPlus /></span>
                    <div className="number-child">2500+</div>
                    <div className="title-child">Khách hàng<br />trung thành</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child"><SiInternetarchive /></span>
                    <div className="number-child">100+</div>
                    <div className="title-child">Đối tác quốc tế</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child"><AiOutlineFileDone /></span>
                    <div className="number-child">400+</div>
                    <div className="title-child">Dự án hoàn thành</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< BsBoxes /></span>
                    <div className="number-child">27+</div>
                    <div className="title-child">Dự án đang thực hiện</div>
                </div>
            </div>
        </div>
    )
}

export default SectionPrice;