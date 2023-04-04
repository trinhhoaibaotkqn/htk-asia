
const FormContact = () => {
    return (
        <div className="form-contact-container">
            <div className="contact-content">
                <div className="contact-title">
                    <div className="header-contact">Liên lạc đến chúng tôi</div>
                    <div className="content-contact">
                        <div>119606, Nga, Moscow, khách hàng tiềm năng Michurinsky 31/7</div>
                        <div>Nga : +7 (495) 780 14 00 </div>
                        <div>Nga : +7 (495) 780 14 00 </div>
                        <div>Nga : +7 (495) 780 14 00 </div>
                    </div>
                </div>
                <div className="contact-form">
                    <input placeholder="Tên người đại diện" />
                    <input placeholder="Tên công ty" />
                    <select placeholder="Loại dịch vụ" >
                        <option>--Loại dịch vụ--</option>
                        <option>Phần mềm bán hàng</option>
                        <option>Phần mềm quản lý doanhn nghiệp toàn diện</option>
                        <option>Hệ thống thanh toán online</option>
                        <option>Phát triển các dự án web</option>
                        <option>Công nghệ tăng tốc trang web AI</option>
                        <option>Phát triển nền tảng 3D/VR MRK.CLOUD</option>
                        <option>Khảo sát trên không và lập bản đồ</option>
                        <option>Phát triển các dịch vụ web SaaS</option>
                        <option>Phát triển trang web 3D</option>
                        <option>Khảo sát hình ảnh nhiệt</option>
                        <option>Mô hình 3D lãnh thổ</option>
                    </select>
                    <input placeholder="Điện thoại" />
                    <input placeholder="Email" />
                    <input placeholder="Thông tin bổ sung" />
                    <button>Gửi</button>
                </div>
            </div>
            <div className="contact-image"></div>
        </div>
    )
}

export default FormContact;